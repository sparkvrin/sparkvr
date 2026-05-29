import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "Learning Outcome | SparkVR — Measurable Impact in Every Classroom",
  description: "Discover how SparkVR delivers real, measurable learning outcomes — improved concept clarity, higher engagement, stronger retention and better exam results.",
  keywords: ["VR Learning Outcomes", "EdTech Impact", "Immersive Learning Results", "SparkVR Outcomes"],
  openGraph: {
    title: "Learning Outcome | SparkVR — Measurable Impact in Every Classroom",
    description: "Discover how SparkVR delivers real, measurable learning outcomes — improved concept clarity, higher engagement, stronger retention and better exam results.",
    url: "https://sparkvr-ten.vercel.app/learning-outcome",
    siteName: "SparkVR",
    images: [{ url: "/learingbackground1.png", width: 1200, height: 630, alt: "SparkVR Learning Outcome" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Outcome | SparkVR — Measurable Impact in Every Classroom",
    description: "Discover how SparkVR delivers real, measurable learning outcomes — improved concept clarity, higher engagement, stronger retention and better exam results.",
    images: ["/learingbackground1.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
