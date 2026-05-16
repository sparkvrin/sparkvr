import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR Subjects | Immersive VR for All Grade Levels",
  description: "Explore SparkVR curriculum modules across Science, Math, History, Geography, Biology and STEM for grades 5-12.",
  keywords: ["VR Curriculum","School Subjects VR","STEM VR","Grade Level VR Content"],
  openGraph: {
    title: "SparkVR Subjects | Immersive VR for All Grade Levels",
    description: "Explore SparkVR curriculum modules across Science, Math, History, Geography, Biology and STEM for grades 5-12.",
    url: "https://sparkvr-ten.vercel.app/subjects",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Subjects | Immersive VR for All Grade Levels" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR Subjects | Immersive VR for All Grade Levels",
    description: "Explore SparkVR curriculum modules across Science, Math, History, Geography, Biology and STEM for grades 5-12.",
    images: ["/background.webp"],
  },
};


export default function SubjectsPage() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center", background: "#f8f9fc" }}>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#001a4d", marginBottom: 16 }}>Subjects & Grades</h1>
      <p style={{ fontSize: 20, color: "#475569", marginBottom: 32 }}>Discover interactive VR modules for Science, Math, History, and more.</p>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#0052cc", color: "#fff", textDecoration: "none", borderRadius: 8, fontWeight: 700 }}>
        <ArrowLeft size={20} /> Back to Home
      </Link>
    </div>
  );
}
