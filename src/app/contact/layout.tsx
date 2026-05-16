import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "Contact SparkVR | Book a Free Workshop or Demo",
  description: "Get in touch with SparkVR to book a free workshop, request a school demo, or learn how to bring VR learning to your institution.",
  keywords: ["Contact SparkVR","Book VR Demo","Free VR Workshop","SparkVR Contact"],
  openGraph: {
    title: "Contact SparkVR | Book a Free Workshop or Demo",
    description: "Get in touch with SparkVR to book a free workshop, request a school demo, or learn how to bring VR learning to your institution.",
    url: "https://sparkvr-ten.vercel.app/contact",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Contact SparkVR | Book a Free Workshop or Demo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SparkVR | Book a Free Workshop or Demo",
    description: "Get in touch with SparkVR to book a free workshop, request a school demo, or learn how to bring VR learning to your institution.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
