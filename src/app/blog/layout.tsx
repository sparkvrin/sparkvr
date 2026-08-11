import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "VR in Education Blog | VR Labs & Immersive Learning | SparkVR",
  description: "Read practical insights on VR labs in schools, immersive learning, classroom technology, student engagement and the future of education in India.",
  keywords: ["VR Education Blog","EdTech Insights","Immersive Learning Articles","SparkVR Blog"],
  alternates: {
    canonical: "https://sparkvr.in/blog",
  },
  openGraph: {
    title: "VR in Education Blog | VR Labs & Immersive Learning | SparkVR",
    description: "Read practical insights on VR labs in schools, immersive learning, classroom technology, student engagement and the future of education in India.",
    url: "https://sparkvr.in/blog",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "VR in Education Blog | VR Labs & Immersive Learning | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR in Education Blog | VR Labs & Immersive Learning | SparkVR",
    description: "Read practical insights on VR labs in schools, immersive learning, classroom technology, student engagement and the future of education in India.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
