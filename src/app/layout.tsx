import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
    images: [
      {
        url: "/background.webp",
        width: "min(100%, 1200px)",
        height: 630,
        alt: "SparkVR Immersive Learning",
      },
    ],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={jetbrainsMono.variable}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
