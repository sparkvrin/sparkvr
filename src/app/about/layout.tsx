import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "About SparkVR | Immersive Learning Company for Indian Schools",
  description: "SparkVR EdTech transforms abstract textbook concepts into 3D VR explorations. Trusted by 260+ schools across India to make learning observable and unforgettable.",
  keywords: ["About SparkVR","SparkVR Mission","EdTech Company","VR Education Company"],
  openGraph: {
    title: "About SparkVR | Immersive Learning Company for Indian Schools",
    description: "SparkVR EdTech transforms abstract textbook concepts into 3D VR explorations. Trusted by 260+ schools across India to make learning observable and unforgettable.",
    url: "https://sparkvr-ten.vercel.app/about",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "About SparkVR | Immersive Learning Company for Indian Schools" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SparkVR | Immersive Learning Company for Indian Schools",
    description: "SparkVR EdTech transforms abstract textbook concepts into 3D VR explorations. Trusted by 260+ schools across India to make learning observable and unforgettable.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
