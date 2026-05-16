import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR Case Studies | Real Results from Real Schools",
  description: "See how SparkVR has transformed learning outcomes at schools across India. Read case studies on student engagement, concept clarity, and teacher adoption.",
  keywords: ["VR Education Case Studies","SparkVR Success Stories","EdTech Results"],
  openGraph: {
    title: "SparkVR Case Studies | Real Results from Real Schools",
    description: "See how SparkVR has transformed learning outcomes at schools across India. Read case studies on student engagement, concept clarity, and teacher adoption.",
    url: "https://sparkvr-ten.vercel.app/case-studies",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Case Studies | Real Results from Real Schools" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR Case Studies | Real Results from Real Schools",
    description: "See how SparkVR has transformed learning outcomes at schools across India. Read case studies on student engagement, concept clarity, and teacher adoption.",
    images: ["/background.webp"],
  },
};


export default function CaseStudiesPage() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center", background: "#f8f9fc" }}>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#001a4d", marginBottom: 16 }}>Case Studies</h1>
      <p style={{ fontSize: 20, color: "#475569", marginBottom: 32 }}>See how schools around the world are transforming with SparkVR.</p>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#0052cc", color: "#fff", textDecoration: "none", borderRadius: 8, fontWeight: 700 }}>
        <ArrowLeft size={20} /> Back to Home
      </Link>
    </div>
  );
}
