import type { Metadata } from "next";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import BlogPostClient from "./BlogPostClient";

const BASE_URL = "https://sparkvr.in";

// Lightweight metadata-only fallback for the same posts rendered by the
// static BLOG_POSTS dataset in BlogPostClient.tsx — kept in sync manually
// since that file owns the full article content.
const FALLBACK_META: Record<string, { title: string; description: string; image: string }> = {
  "how-experiential-learning-improves-concept-retention": {
    title: "How Experiential Learning Improves Concept Retention",
    description: "New research shows how immersive experiences strengthen understanding and long-term retention in students.",
    image: "/blog_vr.webp",
  },
  "vr-modern-classrooms": {
    title: "How VR is Transforming Modern Classrooms",
    description: "Explore the shift from textbook learning to immersive 3D explorations.",
    image: "/blog_vr.webp",
  },
  "future-cognitive-learning": {
    title: "The Future of Cognitive Learning & Tech",
    description: "Understanding the neural impact of interactive virtual environments.",
    image: "/blog_tech.webp",
  },
};

const DEFAULT_SLUG = "how-experiential-learning-improves-concept-retention";

async function getPostMeta(slug: string): Promise<{ title: string; description: string; image: string } | null> {
  try {
    const q = query(collection(db, "blogs"), where("slug", "==", slug));
    const snap = await getDocs(q);
    const publishedDoc = snap.docs.find((d) => d.data().status !== "draft");
    if (publishedDoc) {
      const data = publishedDoc.data();
      return {
        title: data.title || FALLBACK_META[DEFAULT_SLUG].title,
        description: data.excerpt || FALLBACK_META[DEFAULT_SLUG].description,
        image: data.image || "/blog_vr.webp",
      };
    }
  } catch {
    // Firestore may be unreachable (build-time, offline, security rules) —
    // fall through to the static fallback dataset below.
  }
  return FALLBACK_META[slug] || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = (await getPostMeta(slug)) || FALLBACK_META[DEFAULT_SLUG];
  const url = `${BASE_URL}/blog/${slug}`;
  const imageUrl = meta.image.startsWith("http") ? meta.image : `${BASE_URL}${meta.image}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: `${meta.title} | SparkVR Blog`,
    description: meta.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${meta.title} | SparkVR Blog`,
      description: meta.description,
      url,
      siteName: "SparkVR",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: meta.title }],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | SparkVR Blog`,
      description: meta.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = (await getPostMeta(slug)) || FALLBACK_META[DEFAULT_SLUG];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": meta.title,
    "description": meta.description,
    "image": meta.image.startsWith("http") ? meta.image : `${BASE_URL}${meta.image}`,
    "url": `${BASE_URL}/blog/${slug}`,
    "publisher": {
      "@type": "Organization",
      "name": "SparkVR",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.webp`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
      { "@type": "ListItem", "position": 3, "name": meta.title, "item": `${BASE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPostClient />
    </>
  );
}
