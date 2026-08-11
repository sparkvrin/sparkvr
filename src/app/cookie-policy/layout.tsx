import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "Cookie Policy | SparkVR",
  description: "Learn how SparkVR uses cookies and similar technologies for essential website functions, analytics, preferences and marketing measurement.",
  alternates: {
    canonical: "https://sparkvr.in/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | SparkVR",
    description: "Learn how SparkVR uses cookies and similar technologies for essential website functions, analytics, preferences and marketing measurement.",
    url: "https://sparkvr.in/cookie-policy",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Cookie Policy | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | SparkVR",
    description: "Learn how SparkVR uses cookies and similar technologies for essential website functions, analytics, preferences and marketing measurement.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
