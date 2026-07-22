import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "VR Lab for Schools - Offline, Curriculum-Aligned Setup | SparkVR",
  description: "Set up a VR lab in your school with SparkVR — works offline, fits existing classrooms, teacher-supervised and aligned to CBSE & ICSE curriculum.",
  keywords: ["VR Lab for Schools","School VR","Classroom VR","EdTech Schools","SparkVR Schools"],
  openGraph: {
    title: "VR Lab for Schools - Offline, Curriculum-Aligned Setup | SparkVR",
    description: "Set up a VR lab in your school with SparkVR — works offline, fits existing classrooms, teacher-supervised and aligned to CBSE & ICSE curriculum.",
    url: "https://sparkvr-ten.vercel.app/schools",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "VR Lab for Schools - Offline, Curriculum-Aligned Setup | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Lab for Schools - Offline, Curriculum-Aligned Setup | SparkVR",
    description: "Set up a VR lab in your school with SparkVR — works offline, fits existing classrooms, teacher-supervised and aligned to CBSE & ICSE curriculum.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
