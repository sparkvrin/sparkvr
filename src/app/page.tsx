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
export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <SolutionSection />


      {/* ═══════════════════════════════════════════
          FINAL CTA 
      ═══════════════════════════════════════════ */}
      <CTASection />
      <BannerSection />
    </div>
  );
}
