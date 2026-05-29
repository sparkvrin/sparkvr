import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "For Parents | SparkVR — Help Your Child Learn Better",
  description: "Understand how SparkVR helps your child grasp concepts deeply, stay engaged in school, and build lasting confidence — through immersive classroom learning.",
  keywords: ["SparkVR for Parents", "VR Education for Kids", "Better Learning for Children", "School EdTech Parents"],
  openGraph: {
    title: "For Parents | SparkVR — Help Your Child Learn Better",
    description: "Understand how SparkVR helps your child grasp concepts deeply, stay engaged in school, and build lasting confidence.",
    url: "https://sparkvr-ten.vercel.app/parents",
    siteName: "SparkVR",
    images: [{ url: "/learingbackground1.png", width: 1200, height: 630, alt: "SparkVR For Parents" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Parents | SparkVR — Help Your Child Learn Better",
    description: "Understand how SparkVR helps your child grasp concepts deeply, stay engaged in school, and build lasting confidence.",
    images: ["/learingbackground1.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
