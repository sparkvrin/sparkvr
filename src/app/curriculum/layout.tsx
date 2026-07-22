import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr-ten.vercel.app"),
  title: "Curriculum-Aligned VR Modules for Class 6-12 | CBSE, ICSE - SparkVR",
  description: "Chapter-by-chapter VR modules mapped to school curriculum. Covering Science, Maths, and more across Class 6-12 with CBSE & ICSE alignment.",
  keywords: ["VR Curriculum", "NCERT VR Modules", "CBSE VR Science", "ICSE VR Math", "SparkVR Curriculum"],
  openGraph: {
    title: "Curriculum-Aligned VR Modules for Class 6-12 | CBSE, ICSE - SparkVR",
    description: "Chapter-by-chapter VR modules mapped to school curriculum. Covering Science, Maths, and more across Class 6-12 with CBSE & ICSE alignment.",
    url: "https://sparkvr-ten.vercel.app/curriculum",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "Curriculum-Aligned VR Modules for Class 6-12 | CBSE, ICSE - SparkVR" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum-Aligned VR Modules for Class 6-12 | CBSE, ICSE - SparkVR",
    description: "Chapter-by-chapter VR modules mapped to school curriculum. Covering Science, Maths, and more across Class 6-12 with CBSE & ICSE alignment.",
    images: ["/background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
