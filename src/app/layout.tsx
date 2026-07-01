import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
  title: "VR Learning for Schools | Curriculum-Aligned VR Labs - SparkVR",
  description: "SparkVR brings curriculum-aligned VR labs to Indian schools. Offline, teacher-guided 40-min sessions across Science, Maths & Social Studies.",
  keywords: ["VR", "Education", "Virtual Reality", "EdTech", "SparkVR", "Immersive Learning", "STEM", "Classroom Tech"],
  authors: [{ name: "SparkVR Team" }],
  openGraph: {
    title: "VR Learning for Schools | Curriculum-Aligned VR Labs - SparkVR",
    description: "SparkVR brings curriculum-aligned VR labs to Indian schools. Offline, teacher-guided 40-min sessions across Science, Maths & Social Studies.",
    url: "https://sparkvr.com",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Immersive Learning" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Learning for Schools | Curriculum-Aligned VR Labs - SparkVR",
    description: "SparkVR brings curriculum-aligned VR labs to Indian schools. Offline, teacher-guided 40-min sessions across Science, Maths & Social Studies.",
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZF08G7MJS2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZF08G7MJS2');
          `}
        </Script>
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

