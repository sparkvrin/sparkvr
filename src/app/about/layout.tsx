import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "About SparkVR | VR Education Company for Schools in India",
  description: "Learn about SparkVR, an IIT Indore-incubated immersive learning company building curriculum-aligned, teacher-guided VR solutions for Indian schools.",
  keywords: ["About SparkVR","SparkVR Mission","EdTech Company","VR Education Company"],
  alternates: {
    canonical: "https://sparkvr.in/about",
  },
  openGraph: {
    title: "About SparkVR | VR Education Company for Schools in India",
    description: "Learn about SparkVR, an IIT Indore-incubated immersive learning company building curriculum-aligned, teacher-guided VR solutions for Indian schools.",
    url: "https://sparkvr.in/about",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "About SparkVR | VR Education Company for Schools in India" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SparkVR | VR Education Company for Schools in India",
    description: "Learn about SparkVR, an IIT Indore-incubated immersive learning company building curriculum-aligned, teacher-guided VR solutions for Indian schools.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
