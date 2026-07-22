import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "Contact SparkVR | Book a Free VR Workshop for Your School",
  description: "Get in touch with SparkVR to book a free workshop or VR lab demo for your school. Talk to our team about setup, curriculum and partnership options.",
  keywords: ["Contact SparkVR","Book VR Demo","Free VR Workshop","SparkVR Contact"],
  openGraph: {
    title: "Contact SparkVR | Book a Free VR Workshop for Your School",
    description: "Get in touch with SparkVR to book a free workshop or VR lab demo for your school. Talk to our team about setup, curriculum and partnership options.",
    url: "https://sparkvr-ten.vercel.app/contact",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Contact SparkVR | Book a Free VR Workshop for Your School" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SparkVR | Book a Free VR Workshop for Your School",
    description: "Get in touch with SparkVR to book a free workshop or VR lab demo for your school. Talk to our team about setup, curriculum and partnership options.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
