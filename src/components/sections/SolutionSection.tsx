"use client";

import React, { useRef, useState, useEffect } from "react";

function useScreenWidth() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, GraduationCap, ArrowRight, BookOpen, Users, BarChart3, Calendar, Microscope, Calculator, Globe2, Rocket } from "lucide-react";


/* ─────────────────────────────────────────────────────────
   Continuous 3D Floating Wrapper
───────────────────────────────────────────────────────── */
function Floating3DWrapper({ children, delay = 0, floatAmp = 15, rotateAmp = 5, duration = 6, className = "" }: {
  children: React.ReactNode; delay?: number; floatAmp?: number; rotateAmp?: number; duration?: number; className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -floatAmp, 0],
        rotateX: [0, rotateAmp, 0, -rotateAmp, 0],
        rotateY: [0, -rotateAmp, 0, rotateAmp, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Mouse-Responsive 3D Tilt Card
───────────────────────────────────────────────────────── */
function TiltCard({ children, style, className = "" }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [18, -18]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 150, damping: 20 });
  const shine_x = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const shine_y = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1200, position: "relative", ...style }}
      className={className}
    >
      <motion.div
        style={{
          position: "absolute", inset: 0, zIndex: 20, pointerEvents: "none", borderRadius: "inherit",
          background: `radial-gradient(circle at ${shine_x} ${shine_y}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Subject Card Component (Exact Match to Screenshot)
───────────────────────────────────────────────────────── */
function SubjectCard({
  title, desc, imgSrc, gradient, delay, icon: Icon
}: {
  title: string, desc: string, imgSrc: string, gradient: string, delay: number, icon: any
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
      whileHover={{ scale: 1.04, boxShadow: "0 30px 60px rgba(0,30,100,0.25)" }}
      style={{
        width: 300, height: 220, position: "relative", zIndex: 10,
        borderRadius: 24, overflow: "hidden", cursor: "default",
        background: gradient,
        boxShadow: "0 12px 28px rgba(0,20,80,0.18)",
        border: "1.5px solid rgba(255,255,255,0.3)",
        display: "flex", flexDirection: "column", justifyContent: "flex-start",
        padding: "20px",
      }}
    >
      {/* Glow top-left */}
      <div style={{ position: "absolute", top: -20, left: -20, width: 90, height: 90, background: "rgba(255,255,255,0.25)", filter: "blur(25px)", borderRadius: "50%", pointerEvents: "none" }} />

      {/* Top Left Icon */}
      <div style={{ marginBottom: 10, position: "relative", zIndex: 2 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 10px rgba(0,0,0,0.15)" }}>
          <Icon size={18} color="#1d4ed8" strokeWidth={2.5} />
        </div>
      </div>

      {/* Text */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "56%" }}>
        <h3 style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase", lineHeight: 1.3, whiteSpace: "pre-line" }}>{title}</h3>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.9)", lineHeight: 1.5, fontWeight: 500, margin: 0, whiteSpace: "pre-line" }}>{desc}</p>
      </div>

      {/* Card Image — right side */}
      <img loading="lazy" decoding="async"
        src={imgSrc} alt={title}
        style={{
          position: "absolute", right: 0, top: 0, width: "52%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          pointerEvents: "none"
        }}
      />
      {/* Gradient overlay — text readable */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.6) 42%, rgba(0,0,0,0.1) 100%)", pointerEvents: "none" }} />
    </motion.div>
  );
}

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: isMobile ? "auto" : "100vh",
        padding: "60px 0",
        background: "radial-gradient(circle at 70% 50%, #f4f8ff 0%, #e2eeff 50%, #cce0ff 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      {/* ─────────────────────────────────────────────────────────
          Background Animated Particles & Network Nodes
      ───────────────────────────────────────────────────────── */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {/* Parallax moving background grid/dots */}
        <motion.div
          animate={{ x: -mousePos.x * 0.5, y: -mousePos.y * 0.5 }}
          style={{ position: "absolute", inset: -100, backgroundImage: "radial-gradient(#93c5fd 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.15 }}
        />

        {/* Glowing Orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} style={{ position: "absolute", top: "10%", left: "40%", width: 300, height: 300, background: "rgba(59, 130, 246, 0.15)", filter: "blur(80px)", borderRadius: "50%" }} />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} style={{ position: "absolute", bottom: "10%", right: "20%", width: "min(100%, 400px)", height: 400, background: "rgba(139, 92, 246, 0.15)", filter: "blur(100px)", borderRadius: "50%" }} />

        {/* Small floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100 - (i % 5) * 10],
              x: [0, (i % 2 === 0 ? 1 : -1) * (15 + (i % 3) * 5)],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ duration: 5 + (i % 5), repeat: Infinity, ease: "linear", delay: i * 0.4 }}
            style={{
              position: "absolute",
              top: `${10 + (i * 17) % 80}%`,
              left: `${5 + (i * 23) % 90}%`,
              width: 4 + (i % 3) * 2, height: 4 + (i % 3) * 2,
              borderRadius: "50%",
              background: ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"][i % 4],
              filter: "blur(1px)",
              boxShadow: `0 0 10px ${["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"][i % 4]}`
            }}
          />
        ))}
      </div>

      <div className="solution-layout" style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", width: "100%", display: "flex", flexDirection: isMobile || isTablet ? "column" : "row", flexWrap: "nowrap", gap: isMobile ? 24 : 40, alignItems: isMobile || isTablet ? "flex-start" : "center", paddingLeft: isMobile ? 20 : isTablet ? 32 : 60, paddingRight: isMobile ? 20 : isTablet ? 32 : 60 }}>

        {/* ─────────────────────────────────────────────────────────
            LEFT COLUMN - CONTENT
        ───────────────────────────────────────────────────────── */}
        <div style={{ flex: "1 1 45%", minWidth: 0, maxWidth: isMobile ? "100%" : 600, width: isMobile || isTablet ? "100%" : undefined, paddingBottom: isMobile ? 20 : 60 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, type: "spring" }}
            style={{ fontSize: isMobile ? "clamp(26px,7vw,36px)" : "clamp(34px, 4.5vw, 56px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, marginBottom: isMobile ? 20 : 32, transformPerspective: 800 }}
          >
            A structured immersive curriculum{isMobile ? " " : <br />}
            <motion.span
              animate={{ color: ["#2563eb", "#3b82f6", "#2563eb"] }} transition={{ duration: 4, repeat: Infinity }}
              style={{ color: "#2563eb" }}
            >
              across subjects and grades.
            </motion.span>
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 16, marginBottom: isMobile ? 24 : 40 }}>
            {["Built chapter by chapter.", "Aligned lesson by lesson.", "Integrated period by period."].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                  style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 6px 16px rgba(37,99,235,0.4)", flexShrink: 0 }}
                >
                  <CheckCircle2 size={isMobile ? 14 : 18} strokeWidth={3} />
                </motion.div>
                <span style={{ fontSize: isMobile ? 16 : 20, fontWeight: 600, color: "#1e3a8a" }}>{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,40,120,0.1)" }}
              style={{
                background: "rgba(255,255,255,0.8)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,1)", borderRadius: 100,
                padding: "16px 28px", display: "inline-flex", alignItems: "center", gap: 18,
                marginBottom: 44, boxShadow: "0 10px 25px rgba(0,30,80,0.06)", cursor: "default"
              }}
            >
              <motion.div
                animate={{ rotateY: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, boxShadow: "0 4px 12px rgba(37,99,235,0.4)" }}
              >
                <GraduationCap size={24} />
              </motion.div>
              <p style={{ margin: 0, fontSize: 16.5, color: "#1e3a8a", fontWeight: 500, lineHeight: 1.4 }}>
                This is academic infrastructure{" — "}<br />
                <strong style={{ fontWeight: 800 }}>not entertainment.</strong>
              </p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative", overflow: "hidden",
                background: "linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)",
                color: "white", border: "none",
                padding: isMobile ? "14px 28px" : "20px 40px",
                borderRadius: 100,
                fontSize: isMobile ? 15 : 18,
                fontWeight: 700,
                display: "inline-flex", alignItems: "center", gap: 14,
                cursor: "pointer", boxShadow: "0 15px 35px rgba(37,99,235,0.3)"
              }}
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", transform: "skewX(-20deg)" }}
              />
              <span style={{ position: "relative", zIndex: 2 }}>Experience SparkVR in Your School!</span>
              <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ display: "flex" }}>
                <ArrowRight size={22} strokeWidth={3} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            RIGHT COLUMN - 3D INTERACTIVE ORBITAL GRID (hidden on mobile)
        ───────────────────────────────────────────────────────── */}
        {!isMobile && <div className="orbital-container" style={{ flex: "1 1 55%", minWidth: 0, width: isTablet ? "100%" : undefined, position: "relative", height: isTablet ? 560 : 800, display: "flex", alignItems: "center", justifyContent: "center", perspective: 1500 }}>
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 1600px) {
              .orbital-wrapper { transform: scale(0.85); transform-origin: center center; }
              .orbital-container { height: 680px !important; }
            }
            @media (max-width: 1400px) {
              .orbital-wrapper { transform: scale(0.75); }
              .orbital-container { height: 600px !important; }
            }
            @media (max-width: 1100px) {
              .orbital-wrapper { transform: scale(0.65); }
              .orbital-container { height: 520px !important; }
            }
            @media (max-width: 900px) {
              .orbital-wrapper { transform: scale(0.5); }
              .orbital-container { height: 400px !important; }
            }
          `}} />

          <div className="orbital-wrapper" style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div
              animate={{ rotateX: mousePos.y * 0.2, rotateY: mousePos.x * 0.2 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", transformStyle: "preserve-3d" }}
            >
              {/* Animated SVG Dashed Connecting Lines */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1, transform: "translateZ(-20px)" }} viewBox="0 0 700 700" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="glowLine1" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
                  </linearGradient>
                  <linearGradient id="glowLine2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(139,92,246,0.8)" />
                    <stop offset="100%" stopColor="rgba(139,92,246,0.1)" />
                  </linearGradient>
                  <linearGradient id="glowLine3" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16,185,129,0.8)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0.1)" />
                  </linearGradient>
                  <linearGradient id="glowLine4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(245,158,11,0.8)" />
                    <stop offset="100%" stopColor="rgba(245,158,11,0.1)" />
                  </linearGradient>
                  <filter id="glowBlur">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Path 1: Center to Top-Left */}
                <motion.path d="M 350 350 L 150 160" stroke="url(#glowLine1)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glowBlur)" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                {/* Path 2: Center to Top-Right */}
                <motion.path d="M 350 350 L 550 160" stroke="url(#glowLine2)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glowBlur)" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                {/* Path 3: Center to Bottom-Left */}
                <motion.path d="M 350 350 L 150 540" stroke="url(#glowLine3)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glowBlur)" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                {/* Path 4: Center to Bottom-Right */}
                <motion.path d="M 350 350 L 550 540" stroke="url(#glowLine4)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glowBlur)" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              </svg>

              {/* Central Glowing Orb (SparkVR Logo) */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 15, transformStyle: "preserve-3d" }}>
                <Floating3DWrapper floatAmp={6} rotateAmp={0} duration={8}>

                  {/* The precise glowing glass ring from the image */}
                  <div style={{
                    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    width: 270, height: 270, borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.9)",
                    background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)",
                    boxShadow: "0 0 35px rgba(59,130,246,0.6), inset 0 0 25px rgba(255,255,255,1)",
                    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                    zIndex: 1
                  }} />

                  {/* The main white circle with SparkVR logo */}
                  <div
                    style={{
                      width: 220, height: 220, borderRadius: "50%", background: "#ffffff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "1px solid rgba(255,255,255,1)",
                      transform: "translateZ(30px)",
                      position: "relative", zIndex: 2,
                      boxShadow: "0 15px 35px rgba(0,40,150,0.15), inset 0 0 40px rgba(255,255,255,1)"
                    }}
                  >
                    <img loading="lazy" decoding="async" src="/logo.webp" alt="SparkVR Logo" style={{ width: 130, objectFit: "contain" }} />
                  </div>

                </Floating3DWrapper>
              </div>

              {/* 4 Cards Positioning (Strictly Equidistant from Center) */}
              {/* Top Left - Science */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(calc(-50% - 220px), calc(-50% - 230px))" }}>
                <SubjectCard
                  title="SCIENCE"
                  desc={"Explore the unseen.\nUnderstand the real."}
                  imgSrc="/science_3d_card.webp"
                  gradient="linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)"
                  delay={0.2} icon={Microscope}
                />
              </div>

              {/* Top Right - Mathematics */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(calc(-50% + 220px), calc(-50% - 230px))" }}>
                <SubjectCard
                  title="MATHEMATICS"
                  desc={"Visualize.\nReason.\nSolve with clarity."}
                  imgSrc="/math_3d_card.webp"
                  gradient="linear-gradient(135deg, #2e1065 0%, #5b21b6 50%, #8b5cf6 100%)"
                  delay={0.4} icon={Calculator}
                />
              </div>

              {/* Bottom Left - Social Studies */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(calc(-50% - 220px), calc(-50% + 230px))" }}>
                <SubjectCard
                  title="SOCIAL STUDIES"
                  desc={"Walk through history.\nConnect with civilizations."}
                  imgSrc="/history_3d_card.webp"
                  gradient="linear-gradient(135deg, #064e3b 0%, #0f766e 50%, #14b8a6 100%)"
                  delay={0.6} icon={Globe2}
                />
              </div>

              {/* Bottom Right - Future Interdisciplinary Subjects */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(calc(-50% + 220px), calc(-50% + 230px))" }}>
                <SubjectCard
                  title={"FUTURE\nINTERDISCIPLINARY\nSUBJECTS"}
                  desc={"Preparing students\nfor the future of\nknowledge."}
                  imgSrc="/stem_3d_card.webp"
                  gradient="linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #f97316 100%)"
                  delay={0.8} icon={Rocket}
                />
              </div>
            </motion.div>
          </div>
        </div>}
      </div>

      {/* ─────────────────────────────────────────────────────────
          BOTTOM FEATURES BAR
      ───────────────────────────────────────────────────────── */}
      <div style={{ paddingLeft: isMobile ? 20 : isTablet ? 32 : 60, paddingRight: isMobile ? 20 : isTablet ? 32 : 60, width: "100%", maxWidth: 1400, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          style={{
            margin: isMobile ? "24px auto 0" : "80px auto 0",
            maxWidth: 1050, width: "100%",
            background: "rgba(255,255,255,0.75)", backdropFilter: "blur(25px)",
            border: "1.5px solid rgba(255,255,255,1)",
            borderRadius: isMobile ? 20 : 32,
            padding: isMobile ? "20px 16px" : "28px 48px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)",
            gap: isMobile ? 16 : 24,
            boxShadow: "0 30px 60px rgba(0,30,100,0.08), inset 0 2px 10px rgba(255,255,255,0.8)",
            position: "relative", zIndex: 10,
          }}
        >
          <motion.div
            animate={{ x: ["0%", "100%", "0%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", top: 0, left: 0, height: 2, width: "30%", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)" }}
          />
          {[
            { icon: BookOpen, text: "Curriculum\nAligned" },
            { icon: Users, text: "Across\nSubjects" },
            { icon: BarChart3, text: "Across\nGrades" },
            { icon: Calendar, text: "Integrated\nPeriod by Period" }
          ].map((item, i) => (
            <motion.div key={i}
              whileHover={{ scale: 1.08, y: -4 }} transition={{ type: "spring" }}
              style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 18, cursor: "default" }}
            >
              <div style={{ width: isMobile ? 40 : 56, height: isMobile ? 40 : 56, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0.2) 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d4ed8", boxShadow: "0 8px 20px rgba(37,99,235,0.15), inset 0 2px 4px rgba(255,255,255,0.8)" }}>
                <item.icon size={isMobile ? 20 : 28} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: isMobile ? 13 : 16, fontWeight: 800, color: "#0f172a", lineHeight: 1.35, whiteSpace: "pre-line", letterSpacing: "0.02em" }}>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
