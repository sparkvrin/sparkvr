"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clock, Users, UserCheck, GraduationCap, CalendarCheck, RefreshCw,
  FileText, Headset, MessageCircle, CheckCircle,
  Target, BookOpen, Shield, Settings, Zap, Archive, WifiOff, Rocket,
  ArrowRight
} from "lucide-react";

// COLORS used throughout the page
const COLORS = {
  navy: "#0a1930",
  blue: "#3b82f6",
  darkBlue: "#1e40af",
  purple: "#8b5cf6",
  green: "#10b981",
  orange: "#f59e0b",
  textGray: "#475569",
  bgLight: "#f8fafc",
};

// Powerful Animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, type: "spring", stiffness: 70, damping: 15 }
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, type: "spring", stiffness: 70, damping: 15 }
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1, delay, type: "spring", stiffness: 60, damping: 20 }
});

export default function TimetablePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      {/* ══════════════════════════════════════
          SECTION 1: HERO SECTION (FULL BACKGROUND)
      ══════════════════════════════════════ */}
      <section style={{ 
        position: "relative", 
        width: "100%", 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center",
        backgroundImage: "url('/section1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        overflow: "hidden"
      }}>
        {/* Overlay to ensure text readability on the left fade area */}
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 30%, transparent 70%)",
          zIndex: 1 
        }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: 700 }}>
            {/* Exactly same heading/label as original */}
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.darkBlue, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                HOW IT FITS THE TIMETABLE
              </span>
              <div style={{ width: 40, height: 3, background: COLORS.darkBlue, marginTop: 8 }} />
            </motion.div>
            
            <motion.h1 {...fadeUp(0.2)} style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, marginBottom: 30, letterSpacing: "-0.02em" }}>
              Designed to fit<br />into the school day —<br />
              <span style={{ color: COLORS.blue }}>seamlessly.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: COLORS.textGray, lineHeight: 1.6, marginBottom: 50, fontWeight: 500, maxWidth: 550 }}>
              SparkVR integrates perfectly with your existing timetable. No extra periods required. No disruption to academic continuity. Just powerful, immersive learning.
            </motion.p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
              {[
                { icon: Clock, color: COLORS.blue, text: "40-minute", sub: "structured sessions" },
                { icon: Users, color: COLORS.purple, text: "Normal", sub: "batch rotation" },
                { icon: UserCheck, color: COLORS.green, text: "Teacher", sub: "supervision" },
                { icon: GraduationCap, color: COLORS.orange, text: "No extra", sub: "academic load" },
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp(0.4 + i * 0.1)} whileHover={{ x: 5 }} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 24, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, border: `2px solid ${item.color}30` }}>
                    <item.icon size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: 16, fontWeight: 800, color: COLORS.navy }}>{item.text}</span>
                    <span style={{ display: "block", fontSize: 13, fontWeight: 600, color: COLORS.textGray }}>{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2: STRUCTURED SESSION FLOW
      ══════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "#fff", position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 30 }}>
            <div>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.purple, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  STRUCTURED SESSION FLOW
                </span>
                <div style={{ width: 40, height: 3, background: COLORS.purple, marginTop: 8 }} />
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 3.5vw, 48px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                A 40-minute structured<br />
                <span style={{ color: COLORS.purple }}>session. Maximum learning.</span>
              </motion.h2>
            </div>
            <motion.p {...fadeUp(0.3)} style={{ maxWidth: 400, fontSize: 16, color: COLORS.textGray, fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
              Every SparkVR session follows a proven flow that keeps learning focused, engaging and easy to manage.
            </motion.p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 30 }}>
            {[
              { time: "5 MIN", title: "1. Introduction", color: COLORS.blue, img: "/section2/session_image_1.png" },
              { time: "20 MIN", title: "2. VR Experience", color: COLORS.purple, img: "/section2/session_image_2.png" },
              { time: "5 MIN", title: "3. Guidance", color: COLORS.green, img: "/section2/session_image_3.png" },
              { time: "5 MIN", title: "4. Discussion", color: COLORS.orange, img: "/section2/session_image_4.png" },
              { time: "5 MIN", title: "5. Reinforcement", color: COLORS.blue, img: "/section2/session_image_5.png" },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(0.2 + i * 0.1)} 
                whileHover={{ y: -10 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
              >
                <div style={{ width: "100%", height: 200, borderRadius: 24, overflow: "hidden", marginBottom: 20, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                  <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ background: `${step.color}15`, color: step.color, padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 800, marginBottom: 12 }}>
                  {step.time}
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: COLORS.navy }}>{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3: SMARTER ROTATION
      ══════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "linear-gradient(135deg, #f1f5f9 0%, #ffffff 100%)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
          
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.darkBlue, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                BATCH ROTATION SYSTEM
              </span>
            </motion.div>
            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 3.5vw, 48px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Normal classes. <span style={{ color: COLORS.blue }}>Smarter rotation.</span>
            </motion.h2>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <motion.div 
              {...scaleIn(0.3)}
              style={{ width: "100%", maxWidth: 1100, borderRadius: 32, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.15)" }}
            >
              <img src="/extracted_classroom_image.png" alt="Classroom Rotation" style={{ width: "100%", height: "auto", display: "block" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4: IMPACT (s5thsection.png)
      ══════════════════════════════════════ */}
      <section ref={containerRef} style={{ padding: "100px 0", background: COLORS.navy, overflow: "hidden" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
          <motion.div 
            style={{ y: yParallax }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src="/s5thsection.png" alt="SparkVR Impact" style={{ width: "100%", height: "auto", borderRadius: 32, boxShadow: "0 50px 100px rgba(0,0,0,0.5)" }} />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5: OPERATIONAL SIMPLICITY
      ══════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 30 }}>
            <div>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.green, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  OPERATIONAL SIMPLICITY
                </span>
                <div style={{ width: 40, height: 3, background: COLORS.green, marginTop: 8 }} />
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 3.5vw, 48px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Simple to manage.<br />
                <span style={{ color: COLORS.green }}>Easy to sustain.</span>
              </motion.h2>
            </div>
            <motion.p {...fadeUp(0.3)} style={{ maxWidth: 450, fontSize: 16, color: COLORS.textGray, fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
              SparkVR is designed for schools. Simple setup, minimal maintenance, maximum impact.
            </motion.p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 60 }}>
            {[
              { title: "No Internet Dependency", img: "/section5/operational_image_1.png" },
              { title: "Safe Storage", img: "/section5/operational_image_2.png" },
              { title: "Easy Charging", img: "/section5/operational_image_3.png" },
              { title: "Predictable Maintenance", img: "/section5/operational_image_4.png" },
              { title: "Quick Deployment", img: "/section5/operational_image_5.png" },
            ].map((card, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(0.2 + i * 0.1)}
                whileHover={{ y: -10 }}
                style={{ background: "#fff", borderRadius: 32, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column" }}
              >
                <div style={{ padding: "32px 24px", textAlign: "center", flex: 1 }}>
                  <h4 style={{ fontSize: 18, fontWeight: 800, color: COLORS.navy }}>{card.title}</h4>
                </div>
                <div style={{ padding: "0 20px 20px 20px" }}>
                  <img src={card.img} alt={card.title} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 20 }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div 
            {...scaleIn(0.5)}
            style={{ background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)", borderRadius: 32, padding: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 30px 60px rgba(59,130,246,0.3)", flexWrap: "wrap", gap: 30 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <div style={{ width: 64, height: 64, borderRadius: 32, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                <Shield size={32} />
              </div>
              <div>
                <h4 style={{ fontSize: 28, fontWeight: 900, color: "#fff", margin: "0 0 4px 0" }}>Fewer hassles. More learning.</h4>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", margin: 0, fontWeight: 500 }}>We handle the complexity so you can focus on teaching.</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", fontWeight: 700 }}>
              <span>Learn more</span>
              <ArrowRight size={20} />
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
