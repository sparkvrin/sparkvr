"use client";

import React, { useEffect, useRef } from "react";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import SparkButton from "@/components/SparkButton";
import TiltCard from "@/components/TiltCard";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, TrendingUp, BookOpen, BarChart3 } from "lucide-react";

import SolutionSection from "@/components/sections/SolutionSection";
import CTASection from "@/components/sections/CTASection";
import BannerSection from "@/components/sections/BannerSection";
import VideoScrollSection from "@/components/sections/VideoScrollSection";
import GlobalParticles from "@/components/GlobalParticles";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sparkvr.in/#localbusiness",
    "name": "SparkVR EdTech Pvt. Ltd.",
    "alternateName": "SparkVR",
    "description": "SparkVR transforms abstract textbook concepts into 3D virtual reality explorations. Curriculum-aligned, teacher-guided immersive learning for schools across India.",
    "url": "https://sparkvr.in",
    "logo": "https://sparkvr.in/logo.webp",
    "image": [
      "https://sparkvr.in/logo.webp",
      "https://sparkvr.in/background.webp"
    ],
    "telephone": "+91 73892 92658",
    "email": "hello@sparkvr.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "IIT Indore Campus, Simrol",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "453552",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5204",
      "longitude": "75.9207"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:30",
        "closes": "14:00"
      }
    ],
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "foundingDate": "2022-03-31",
    "founder": {
      "@type": "Person",
      "name": "Nikhil Bhatnagar"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100084532397318",
      "https://www.linkedin.com/company/sparkvr2/",
      "https://x.com/sparkvr22",
      "https://www.instagram.com/sparkvr.in/"
    ]
  };

  return (
    <div style={{ position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlobalParticles />
      <Hero />
      <div id="spark-features">
        <ServicesSection />
      </div>
      <div style={{ display: "none" }}>
        <VideoScrollSection />
      </div>
      <SolutionSection />


      {/* ═══════════════════════════════════════════
          FINAL CTA 
      ═══════════════════════════════════════════ */}
      <CTASection />
      <BannerSection />
    </div>
  );
}

