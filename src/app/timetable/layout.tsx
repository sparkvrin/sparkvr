import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "VR in the School Timetable - 40-Min Sessions, Batch Rotation | SparkVR",
  description: "SparkVR fits your school timetable with 40-minute structured sessions and batch rotation — equal access for every student without disrupting class flow.",
  keywords: ["VR Timetable","VR Session Schedule","Batch Rotation VR","SparkVR Schedule"],
  openGraph: {
    title: "VR in the School Timetable - 40-Min Sessions, Batch Rotation | SparkVR",
    description: "SparkVR fits your school timetable with 40-minute structured sessions and batch rotation — equal access for every student without disrupting class flow.",
    url: "https://sparkvr-ten.vercel.app/timetable",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "VR in the School Timetable - 40-Min Sessions, Batch Rotation | SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR in the School Timetable - 40-Min Sessions, Batch Rotation | SparkVR",
    description: "SparkVR fits your school timetable with 40-minute structured sessions and batch rotation — equal access for every student without disrupting class flow.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
