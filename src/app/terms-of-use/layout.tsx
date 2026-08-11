import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "Terms of Use | SparkVR",
  description: "Read the terms governing access to and use of the SparkVR website, immersive learning platform, educational content and related services.",
  alternates: {
    canonical: "https://sparkvr.in/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | SparkVR",
    description: "Read the terms governing access to and use of the SparkVR website, immersive learning platform, educational content and related services.",
    url: "https://sparkvr.in/terms-of-use",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Terms of Use | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | SparkVR",
    description: "Read the terms governing access to and use of the SparkVR website, immersive learning platform, educational content and related services.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
