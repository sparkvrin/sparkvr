import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0052cc",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.com"),
  title: "SparkVR | Every Idea Begins With A Spark",
  description: "SparkVR transforms abstract textbook concepts into unforgettable 3D VR explorations. Immersive learning for modern classrooms.",
  keywords: ["VR", "Education", "Virtual Reality", "EdTech", "SparkVR", "Immersive Learning", "STEM", "Classroom Tech"],
  authors: [{ name: "SparkVR Team" }],
  openGraph: {
    title: "SparkVR | Every Idea Begins With A Spark",
    description: "SparkVR transforms abstract textbook concepts into unforgettable 3D VR explorations.",
    url: "https://sparkvr.com",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Immersive Learning" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR | Every Idea Begins With A Spark",
    description: "Immersive VR learning for modern classrooms.",
    images: ["/background.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch & preconnect for faster resource loading */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://sparkvr.com" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/VAGRounded-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/VAGRounded-Black.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
