import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "VR Teaching Tools for Teachers | Classroom VR | SparkVR",
  description: "Empower teachers with curriculum-aligned VR lessons, simple classroom controls, guided 40-minute sessions, assessments, training and support.",
  keywords: ["VR for Teachers", "Teacher VR Tools", "Immersive Teaching", "Classroom Technology", "SparkVR Teachers"],
  alternates: {
    canonical: "https://sparkvr.in/teachers",
  },
  openGraph: {
    title: "VR Teaching Tools for Teachers | Classroom VR | SparkVR",
    description: "Empower teachers with curriculum-aligned VR lessons, simple classroom controls, guided 40-minute sessions, assessments, training and support.",
    url: "https://sparkvr.in/teachers",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "VR Teaching Tools for Teachers | Classroom VR | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Teaching Tools for Teachers | Classroom VR | SparkVR",
    description: "Empower teachers with curriculum-aligned VR lessons, simple classroom controls, guided 40-minute sessions, assessments, training and support.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}