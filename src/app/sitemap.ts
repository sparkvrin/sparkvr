import type { MetadataRoute } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const BASE_URL = "https://sparkvr.in";

/**
 * Static, indexable marketing/content routes.
 * Excludes /admin/** (internal CMS), /api/** (route handlers, not pages),
 * and the legacy/orphaned "src/app/blog/[slug/]" folder (not a valid,
 * reachable Next.js route segment).
 */
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/schools", priority: 0.9, changeFrequency: "weekly" },
  { path: "/teachers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/parents", priority: 0.8, changeFrequency: "monthly" },
  { path: "/subject-expansion", priority: 0.7, changeFrequency: "monthly" },
  { path: "/timetable", priority: 0.7, changeFrequency: "monthly" },
  { path: "/curriculum", priority: 0.8, changeFrequency: "monthly" },
  { path: "/learning-outcome", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-of-use", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/services", priority: 0.5, changeFrequency: "monthly" },
  { path: "/subjects", priority: 0.5, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.5, changeFrequency: "monthly" },
  { path: "/help", priority: 0.4, changeFrequency: "monthly" },
];

// Fallback slugs — mirrors the hardcoded BLOG_POSTS fallback dataset used by
// src/app/blog/[slug]/page.tsx so the sitemap still lists real posts even if
// the Firestore lookup below fails (e.g. at build time without credentials).
const FALLBACK_BLOG_SLUGS = [
  "how-experiential-learning-improves-concept-retention",
  "vr-modern-classrooms",
  "future-cognitive-learning",
  "science-lab-evolution",
];

async function getPublishedBlogSlugs(): Promise<string[]> {
  try {
    // Mirrors the client-side filtering pattern used in blog/page.tsx and
    // blog/[slug]/BlogPostClient.tsx: fetch all docs and filter out drafts
    // in JS, rather than a Firestore "!=" query (which needs a composite
    // index and silently excludes docs missing the "status" field).
    const snap = await getDocs(collection(db, "blogs"));
    const slugs = snap.docs
      .map((d) => d.data())
      .filter((data) => data.status !== "draft")
      .map((data) => data.slug as string | undefined)
      .filter((slug): slug is string => Boolean(slug));
    return slugs.length > 0 ? slugs : FALLBACK_BLOG_SLUGS;
  } catch {
    // Firestore may be unreachable at build time (no credentials, offline
    // build, security rules) — fall back to the known static post slugs
    // rather than failing the whole sitemap generation.
    return FALLBACK_BLOG_SLUGS;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogSlugs = await getPublishedBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
