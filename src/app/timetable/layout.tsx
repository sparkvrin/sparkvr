import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "SparkVR Timetable | Structured VR Sessions for Schools",
  description: "Plan and manage VR sessions with SparkVR batch rotation system. Fixed 40-minute sessions, simple scheduling, and maximum student impact.",
  keywords: ["VR Timetable","VR Session Schedule","Batch Rotation VR","SparkVR Schedule"],
  openGraph: {
    title: "SparkVR Timetable | Structured VR Sessions for Schools",
    description: "Plan and manage VR sessions with SparkVR batch rotation system. Fixed 40-minute sessions, simple scheduling, and maximum student impact.",
    url: "https://sparkvr-ten.vercel.app/timetable",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Timetable | Structured VR Sessions for Schools" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkVR Timetable | Structured VR Sessions for Schools",
    description: "Plan and manage VR sessions with SparkVR batch rotation system. Fixed 40-minute sessions, simple scheduling, and maximum student impact.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
