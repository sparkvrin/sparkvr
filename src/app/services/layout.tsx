import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR Services | End-to-End VR Learning Solutions",
  description: "From VR hardware to curriculum-aligned content and teacher training — SparkVR delivers complete VR learning solutions for schools.",
  keywords: ["VR Services","VR Solutions","SparkVR Services","VR Learning Solutions"],
  openGraph: {
    title: "SparkVR Services | End-to-End VR Learning Solutions",
    description: "From VR hardware to curriculum-aligned content and teacher training — SparkVR delivers complete VR learning solutions for schools.",
    url: "https://sparkvr-ten.vercel.app/services",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Services | End-to-End VR Learning Solutions" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR Services | End-to-End VR Learning Solutions",
    description: "From VR hardware to curriculum-aligned content and teacher training — SparkVR delivers complete VR learning solutions for schools.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
