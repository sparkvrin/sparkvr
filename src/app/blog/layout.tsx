import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR Blog | Insights on VR, EdTech & Immersive Learning",
  description: "Explore articles, case studies, and insights on virtual reality in education, EdTech trends, and immersive learning strategies from the SparkVR team.",
  keywords: ["VR Education Blog","EdTech Insights","Immersive Learning Articles","SparkVR Blog"],
  openGraph: {
    title: "SparkVR Blog | Insights on VR, EdTech & Immersive Learning",
    description: "Explore articles, case studies, and insights on virtual reality in education, EdTech trends, and immersive learning strategies from the SparkVR team.",
    url: "https://sparkvr-ten.vercel.app/blog",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Blog | Insights on VR, EdTech & Immersive Learning" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR Blog | Insights on VR, EdTech & Immersive Learning",
    description: "Explore articles, case studies, and insights on virtual reality in education, EdTech trends, and immersive learning strategies from the SparkVR team.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
