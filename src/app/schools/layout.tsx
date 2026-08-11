import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "VR Lab for Schools in India | Curriculum-Aligned | SparkVR",
  description: "Set up a curriculum-aligned VR lab in your school with SparkVR. Offline VR, teacher-guided sessions, easy setup, training and ongoing support.",
  keywords: ["VR Lab for Schools","School VR","Classroom VR","EdTech Schools","SparkVR Schools"],
  alternates: {
    canonical: "https://sparkvr.in/schools",
  },
  openGraph: {
    title: "VR Lab for Schools in India | Curriculum-Aligned | SparkVR",
    description: "Set up a curriculum-aligned VR lab in your school with SparkVR. Offline VR, teacher-guided sessions, easy setup, training and ongoing support.",
    url: "https://sparkvr.in/schools",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "VR Lab for Schools in India | Curriculum-Aligned | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Lab for Schools in India | Curriculum-Aligned | SparkVR",
    description: "Set up a curriculum-aligned VR lab in your school with SparkVR. Offline VR, teacher-guided sessions, easy setup, training and ongoing support.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
