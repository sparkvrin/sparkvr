import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import StickyCTA from "@/components/layout/StickyCTA";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0052cc",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkvr.com"),
  title: "VR Learning for Schools | Curriculum-Aligned VR Labs - SparkVR",
  description: "SparkVR brings curriculum-aligned VR labs to Indian schools. Offline, teacher-guided 40-min sessions across Science, Maths & Social Studies.",
  keywords: ["VR", "Education", "Virtual Reality", "EdTech", "SparkVR", "Immersive Learning", "STEM", "Classroom Tech"],
  authors: [{ name: "SparkVR Team" }],
  openGraph: {
    title: "VR Learning for Schools | Curriculum-Aligned VR Labs - SparkVR",
    description: "SparkVR brings curriculum-aligned VR labs to Indian schools. Offline, teacher-guided 40-min sessions across Science, Maths & Social Studies.",
    url: "https://sparkvr.com",
    siteName: "SparkVR",
    images: [{ url: "/background.webp", width: 1200, height: 630, alt: "SparkVR Immersive Learning" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Learning for Schools | Curriculum-Aligned VR Labs - SparkVR",
    description: "SparkVR brings curriculum-aligned VR labs to Indian schools. Offline, teacher-guided 40-min sessions across Science, Maths & Social Studies.",
    images: ["/background.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch & preconnect for faster resource loading */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://sparkvr.com" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZF08G7MJS2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZF08G7MJS2');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '886679311163642');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=886679311163642&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={nunito.variable}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCTA />
      </body>
    </html>
  );
}

