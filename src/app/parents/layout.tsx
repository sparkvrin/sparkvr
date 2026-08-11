import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "VR Learning for Students | Safe School VR | SparkVR",
  description: "See how SparkVR makes school learning immersive, safe and teacher-supervised with short, curriculum-aligned VR sessions that build understanding.",
  keywords: ["SparkVR for Parents", "VR Education for Kids", "Better Learning for Children", "School EdTech Parents"],
  alternates: {
    canonical: "https://sparkvr.in/parents",
  },
  openGraph: {
    title: "VR Learning for Students | Safe School VR | SparkVR",
    description: "See how SparkVR makes school learning immersive, safe and teacher-supervised with short, curriculum-aligned VR sessions that build understanding.",
    url: "https://sparkvr.in/parents",
    siteName: "SparkVR",
    images: [{ url: "/learingbackground1.png", width: 1200, height: 630, alt: "VR Learning for Students | Safe School VR | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Learning for Students | Safe School VR | SparkVR",
    description: "See how SparkVR makes school learning immersive, safe and teacher-supervised with short, curriculum-aligned VR sessions that build understanding.",
    images: ["/learingbackground1.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
