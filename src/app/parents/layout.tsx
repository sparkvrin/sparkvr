import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "VR Learning for Kids - Safe, Supervised, Classroom-Based | SparkVR",
  description: "See how SparkVR turns screen time into purposeful learning — safe, supervised VR that helps your child understand more and remember longer.",
  keywords: ["SparkVR for Parents", "VR Education for Kids", "Better Learning for Children", "School EdTech Parents"],
  openGraph: {
    title: "VR Learning for Kids - Safe, Supervised, Classroom-Based | SparkVR",
    description: "See how SparkVR turns screen time into purposeful learning — safe, supervised VR that helps your child understand more and remember longer.",
    url: "https://sparkvr-ten.vercel.app/parents",
    siteName: "SparkVR",
    images: [{ url: "/learingbackground1.png", width: 1200, height: 630, alt: "VR Learning for Kids - Safe, Supervised, Classroom-Based | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Learning for Kids - Safe, Supervised, Classroom-Based | SparkVR",
    description: "See how SparkVR turns screen time into purposeful learning — safe, supervised VR that helps your child understand more and remember longer.",
    images: ["/learingbackground1.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
