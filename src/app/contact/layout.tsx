import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "Book a VR Lab Demo for Your School | Contact SparkVR",
  description: "Book a guided SparkVR demonstration for your school and explore curriculum-aligned VR lab setup, immersive modules, teacher training and support.",
  keywords: ["Contact SparkVR","Book VR Demo","Free VR Workshop","SparkVR Contact"],
  alternates: {
    canonical: "https://sparkvr.in/contact",
  },
  openGraph: {
    title: "Book a VR Lab Demo for Your School | Contact SparkVR",
    description: "Book a guided SparkVR demonstration for your school and explore curriculum-aligned VR lab setup, immersive modules, teacher training and support.",
    url: "https://sparkvr.in/contact",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Book a VR Lab Demo for Your School | Contact SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a VR Lab Demo for Your School | Contact SparkVR",
    description: "Book a guided SparkVR demonstration for your school and explore curriculum-aligned VR lab setup, immersive modules, teacher training and support.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
