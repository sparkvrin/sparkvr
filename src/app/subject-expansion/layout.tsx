import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR Subject Expansion | VR for Every Subject",
  description: "SparkVR covers Science, Math, History, Geography, Biology and more with immersive 3D VR experiences aligned to your curriculum.",
  keywords: ["VR Subjects","Science VR","Math VR","History VR","Biology VR","SparkVR Subjects"],
  openGraph: {
    title: "SparkVR Subject Expansion | VR for Every Subject",
    description: "SparkVR covers Science, Math, History, Geography, Biology and more with immersive 3D VR experiences aligned to your curriculum.",
    url: "https://sparkvr-ten.vercel.app/subject-expansion",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Subject Expansion | VR for Every Subject" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR Subject Expansion | VR for Every Subject",
    description: "SparkVR covers Science, Math, History, Geography, Biology and more with immersive 3D VR experiences aligned to your curriculum.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
