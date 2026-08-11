import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "VR Learning Outcomes for Schools | SparkVR",
  description: "Discover how immersive VR learning supports concept clarity, engagement, retention and classroom participation through experiential learning.",
  keywords: ["VR Learning Outcomes", "EdTech Impact", "Immersive Learning Results", "SparkVR Outcomes"],
  alternates: {
    canonical: "https://sparkvr.in/learning-outcome",
  },
  openGraph: {
    title: "VR Learning Outcomes for Schools | SparkVR",
    description: "Discover how immersive VR learning supports concept clarity, engagement, retention and classroom participation through experiential learning.",
    url: "https://sparkvr.in/learning-outcome",
    siteName: "SparkVR",
    images: [{ url: "/learingbackground1.png", width: 1200, height: 630, alt: "VR Learning Outcomes for Schools | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Learning Outcomes for Schools | SparkVR",
    description: "Discover how immersive VR learning supports concept clarity, engagement, retention and classroom participation through experiential learning.",
    images: ["/learingbackground1.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
