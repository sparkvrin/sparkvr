import type { Metadata } from "next";
import { AR_One_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ar-one",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SparkVR | Every Idea Begins With A Spark",
  description: "SparkVR transforms abstract textbook concepts into unforgettable 3D VR explorations. Immersive learning for modern classrooms.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${arOneSans.variable} ${arOneSans.className} ${jetbrainsMono.variable}`}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
