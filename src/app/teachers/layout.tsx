import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR for Teachers | Teach Smarter with Immersive VR",
  description: "SparkVR empowers teachers with simple VR tools, guided session flows, and complete curriculum alignment. No technical expertise required.",
  keywords: ["VR for Teachers", "Teacher VR Tools", "Immersive Teaching", "Classroom Technology", "SparkVR Teachers"],
  openGraph: {
    title: "SparkVR for Teachers | Teach Smarter with Immersive VR",
    description: "SparkVR empowers teachers with simple VR tools, guided session flows, and complete curriculum alignment. No technical expertise required.",
    url: "https://sparkvr-ten.vercel.app/teachers",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR for Teachers | Teach Smarter with Immersive VR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR for Teachers | Teach Smarter with Immersive VR",
    description: "SparkVR empowers teachers with simple VR tools, guided session flows, and complete curriculum alignment. No technical expertise required.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}