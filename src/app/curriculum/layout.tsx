import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "Curriculum-Aligned VR Modules for Schools | SparkVR",
  description: "Explore curriculum-aligned VR modules for Classes 6-12 across Science, Maths and Social Studies, designed for immersive, teacher-guided learning.",
  keywords: ["VR Curriculum", "NCERT VR Modules", "CBSE VR Science", "ICSE VR Math", "SparkVR Curriculum"],
  alternates: {
    canonical: "https://sparkvr.in/curriculum",
  },
  openGraph: {
    title: "Curriculum-Aligned VR Modules for Schools | SparkVR",
    description: "Explore curriculum-aligned VR modules for Classes 6-12 across Science, Maths and Social Studies, designed for immersive, teacher-guided learning.",
    url: "https://sparkvr.in/curriculum",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Curriculum-Aligned VR Modules for Schools | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum-Aligned VR Modules for Schools | SparkVR",
    description: "Explore curriculum-aligned VR modules for Classes 6-12 across Science, Maths and Social Studies, designed for immersive, teacher-guided learning.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
