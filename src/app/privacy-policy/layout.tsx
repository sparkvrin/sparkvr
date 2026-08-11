import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "Privacy Policy | SparkVR",
  description: "Read SparkVR's privacy policy to understand how information submitted through our website and school demo requests is collected and protected.",
  alternates: {
    canonical: "https://sparkvr.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | SparkVR",
    description: "Read SparkVR's privacy policy to understand how information submitted through our website and school demo requests is collected and protected.",
    url: "https://sparkvr.in/privacy-policy",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Privacy Policy | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SparkVR",
    description: "Read SparkVR's privacy policy to understand how information submitted through our website and school demo requests is collected and protected.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
