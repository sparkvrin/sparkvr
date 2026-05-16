import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR Help Center | Support & FAQs",
  description: "Find answers to common questions about SparkVR setup, usage, maintenance, and support. Get help from our team.",
  keywords: ["SparkVR Help","VR Support","SparkVR FAQ","VR Lab Support"],
  openGraph: {
    title: "SparkVR Help Center | Support & FAQs",
    description: "Find answers to common questions about SparkVR setup, usage, maintenance, and support. Get help from our team.",
    url: "https://sparkvr-ten.vercel.app/help",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Help Center | Support & FAQs" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR Help Center | Support & FAQs",
    description: "Find answers to common questions about SparkVR setup, usage, maintenance, and support. Get help from our team.",
    images: ["/background.webp"],
  },
};


export default function HelpCenterPage() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center", background: "#f8f9fc" }}>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#001a4d", marginBottom: 16 }}>Help Center</h1>
      <p style={{ fontSize: 20, color: "#475569", marginBottom: 32 }}>Find guides, tutorials, and support for your SparkVR experience.</p>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#0052cc", color: "#fff", textDecoration: "none", borderRadius: 8, fontWeight: 700 }}>
        <ArrowLeft size={20} /> Back to Home
      </Link>
    </div>
  );
}
