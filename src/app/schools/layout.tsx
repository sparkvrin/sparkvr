import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR for Schools | VR Labs Built for Real Classrooms",
  description: "SparkVR builds VR labs designed for real schools — no internet dependency, no structural changes, teacher-supervised and predictable maintenance.",
  keywords: ["VR Lab for Schools","School VR","Classroom VR","EdTech Schools","SparkVR Schools"],
  openGraph: {
    title: "SparkVR for Schools | VR Labs Built for Real Classrooms",
    description: "SparkVR builds VR labs designed for real schools — no internet dependency, no structural changes, teacher-supervised and predictable maintenance.",
    url: "https://sparkvr-ten.vercel.app/schools",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR for Schools | VR Labs Built for Real Classrooms" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR for Schools | VR Labs Built for Real Classrooms",
    description: "SparkVR builds VR labs designed for real schools — no internet dependency, no structural changes, teacher-supervised and predictable maintenance.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
