import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "About SparkVR | Our Mission to Transform Education",
  description: "SparkVR is on a mission to make learning unforgettable. Discover how we are transforming abstract textbook concepts into immersive 3D explorations.",
  keywords: ["About SparkVR","SparkVR Mission","EdTech Company","VR Education Company"],
  openGraph: {
    title: "About SparkVR | Our Mission to Transform Education",
    description: "SparkVR is on a mission to make learning unforgettable. Discover how we are transforming abstract textbook concepts into immersive 3D explorations.",
    url: "https://sparkvr-ten.vercel.app/about",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "About SparkVR | Our Mission to Transform Education" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SparkVR | Our Mission to Transform Education",
    description: "SparkVR is on a mission to make learning unforgettable. Discover how we are transforming abstract textbook concepts into immersive 3D explorations.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
