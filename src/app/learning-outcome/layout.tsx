import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "VR Learning Outcomes - Better Retention & Engagement | SparkVR",
  description: "See measurable impact: 82% better concept clarity, 76% improved retention, 71% higher engagement. Discover how VR transforms student learning outcomes.",
  keywords: ["VR Learning Outcomes", "EdTech Impact", "Immersive Learning Results", "SparkVR Outcomes"],
  openGraph: {
    title: "VR Learning Outcomes - Better Retention & Engagement | SparkVR",
    description: "See measurable impact: 82% better concept clarity, 76% improved retention, 71% higher engagement. Discover how VR transforms student learning outcomes.",
    url: "https://sparkvr-ten.vercel.app/learning-outcome",
    siteName: "SparkVR",
    images: [{ url: "/learingbackground1.png", width: 1200, height: 630, alt: "VR Learning Outcomes - Better Retention & Engagement | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Learning Outcomes - Better Retention & Engagement | SparkVR",
    description: "See measurable impact: 82% better concept clarity, 76% improved retention, 71% higher engagement. Discover how VR transforms student learning outcomes.",
    images: ["/learingbackground1.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
