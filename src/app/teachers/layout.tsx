import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "VR Teaching Tools for Educators | Teacher-Guided Lessons - SparkVR",
  description: "Immersive VR teaching tools built for educators. Lead engaging 40-minute lessons with curriculum-aligned content and simple, intuitive controls.",
  keywords: ["VR for Teachers", "Teacher VR Tools", "Immersive Teaching", "Classroom Technology", "SparkVR Teachers"],
  openGraph: {
    title: "VR Teaching Tools for Educators | Teacher-Guided Lessons - SparkVR",
    description: "Immersive VR teaching tools built for educators. Lead engaging 40-minute lessons with curriculum-aligned content and simple, intuitive controls.",
    url: "https://sparkvr-ten.vercel.app/teachers",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "VR Teaching Tools for Educators | Teacher-Guided Lessons - SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Teaching Tools for Educators | Teacher-Guided Lessons - SparkVR",
    description: "Immersive VR teaching tools built for educators. Lead engaging 40-minute lessons with curriculum-aligned content and simple, intuitive controls.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}