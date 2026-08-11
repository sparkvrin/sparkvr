import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.in"),
  title: "VR Lab in School Timetable | 40-Minute Sessions | SparkVR",
  description: "See how a VR lab fits into the school timetable with 40-minute sessions, batch rotation, teacher supervision and offline learning without disruption.",
  keywords: ["VR Timetable","VR Session Schedule","Batch Rotation VR","SparkVR Schedule"],
  alternates: {
    canonical: "https://sparkvr.in/timetable",
  },
  openGraph: {
    title: "VR Lab in School Timetable | 40-Minute Sessions | SparkVR",
    description: "See how a VR lab fits into the school timetable with 40-minute sessions, batch rotation, teacher supervision and offline learning without disruption.",
    url: "https://sparkvr.in/timetable",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "VR Lab in School Timetable | 40-Minute Sessions | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Lab in School Timetable | 40-Minute Sessions | SparkVR",
    description: "See how a VR lab fits into the school timetable with 40-minute sessions, batch rotation, teacher supervision and offline learning without disruption.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
