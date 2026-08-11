import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "VR Curriculum for Schools | Science, Maths & More | SparkVR",
  description: "Explore SparkVR's expanding VR curriculum across Science, Maths, History, Geography and STEM, with immersive modules designed for school learning.",
  keywords: ["VR Subjects","Science VR","Math VR","History VR","Biology VR","SparkVR Subjects"],
  alternates: {
    canonical: "https://sparkvr.in/subject-expansion",
  },
  openGraph: {
    title: "VR Curriculum for Schools | Science, Maths & More | SparkVR",
    description: "Explore SparkVR's expanding VR curriculum across Science, Maths, History, Geography and STEM, with immersive modules designed for school learning.",
    url: "https://sparkvr.in/subject-expansion",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "VR Curriculum for Schools | Science, Maths & More | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Curriculum for Schools | Science, Maths & More | SparkVR",
    description: "Explore SparkVR's expanding VR curriculum across Science, Maths, History, Geography and STEM, with immersive modules designed for school learning.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
