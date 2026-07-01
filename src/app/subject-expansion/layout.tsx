import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "Scalable VR Curriculum Across Subjects & Grades | SparkVR",
  description: "SparkVR scales across Science, Maths, Social Studies and future interdisciplinary subjects — curriculum-mapped modules for Class 6-12 in Indian schools.",
  keywords: ["VR Subjects","Science VR","Math VR","History VR","Biology VR","SparkVR Subjects"],
  openGraph: {
    title: "Scalable VR Curriculum Across Subjects & Grades | SparkVR",
    description: "SparkVR scales across Science, Maths, Social Studies and future interdisciplinary subjects — curriculum-mapped modules for Class 6-12 in Indian schools.",
    url: "https://sparkvr-ten.vercel.app/subject-expansion",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Scalable VR Curriculum Across Subjects & Grades | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalable VR Curriculum Across Subjects & Grades | SparkVR",
    description: "SparkVR scales across Science, Maths, Social Studies and future interdisciplinary subjects — curriculum-mapped modules for Class 6-12 in Indian schools.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
