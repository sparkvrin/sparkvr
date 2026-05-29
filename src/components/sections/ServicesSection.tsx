"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

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

/* ─────────────────────────────────────────────────────────
   THE PROBLEM  —  icons
───────────────────────────────────────────────────────── */
function TeacherIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function BookListIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );
}
function MedalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="6" />
      <path d="M7.5 5.5L5 8l7 2 7-2-2.5-2.5" />
      <path d="M7 8l5 1 5-1" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   THE PROBLEM  —  subject image floaters
───────────────────────────────────────────────────────── */
const imgStyle: React.CSSProperties = { width: "100%", height: "100%", objectFit: "contain" };
function ForcesSVG() { return <img loading="lazy" decoding="async" src="/forces.webp" alt="Forces" style={{ ...imgStyle, filter: "drop-shadow(0 4px 14px rgba(29,78,216,0.22))" }} />; }
function AnatomySVG() { return <img loading="lazy" decoding="async" src="/human_anatomy12.webp" alt="Anatomy" style={{ ...imgStyle, filter: "drop-shadow(0 4px 14px rgba(220,38,38,0.24))" }} />; }
function CellSVG() { return <img loading="lazy" decoding="async" src="/cell1.webp" alt="Cell" style={{ ...imgStyle, filter: "drop-shadow(0 4px 14px rgba(109,40,217,0.24))" }} />; }
function PlantCellSVG() { return <img loading="lazy" decoding="async" src="/biological_systems1.webp" alt="Bio" style={{ ...imgStyle, filter: "drop-shadow(0 4px 14px rgba(21,128,61,0.24))" }} />; }

function SubjectBubble({ label, children, pos, delay, dir = -1, w = 210 }: {
  label: string; children: React.ReactNode; pos: React.CSSProperties;
  delay: number; dir?: number; w?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.65, y: 18 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.78, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ position: "absolute", zIndex: 10, ...pos, perspective: 800 }}
    >
      <motion.div
        animate={{ rotateX: [0, 6, 0, -6, 0], rotateY: [0, -6, 0, 6, 0] }}
        transition={{ duration: 5.5 + delay * 0.45, repeat: Infinity, ease: "easeInOut", delay: delay * 0.25 }}
        style={{ position: "relative", transformStyle: "preserve-3d" }}
      >
        <div style={{ position: "absolute", inset: -10, borderRadius: "50%", background: "radial-gradient(circle,rgba(160,210,255,0.42) 0%,transparent 68%)", filter: "blur(14px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderRadius: 42, boxShadow: "0 22px 58px rgba(0,50,140,0.18),inset 0 2px 0 rgba(255,255,255,0.7)", border: "2px solid rgba(255,255,255,0.5)", width: w, height: w * 0.8, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 4 }}>
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>{children}</div>
        </div>
        <div style={{ position: "absolute", top: -42, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
          <motion.div
            style={{ background: "rgba(255,255,255,0.95)", borderRadius: 30, padding: "6px 20px", boxShadow: "0 8px 24px rgba(0,60,160,0.14)", whiteSpace: "nowrap", border: "1px solid rgba(255,255,255,0.9)", transformStyle: "preserve-3d" }}
          >
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: "#1d4ed8", textTransform: "uppercase", fontFamily: "'VAG Rounded',sans-serif" }}>{label}</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   MOBILE GRID BUBBLE — relative-positioned, 2×2 grid
───────────────────────────────────────────────────────── */
function GridBubble({ label, children, delay, dir = -1, w = 140 }: {
  label: string; children: React.ReactNode;
  delay: number; dir?: number; w?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
    >
      <motion.div
        animate={{}}
        transition={{ duration: 5 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay: delay * 0.3 }}
        style={{ position: "relative" }}
      >
        <div style={{ position: "absolute", inset: -8, borderRadius: "50%", background: "radial-gradient(circle,rgba(160,210,255,0.35) 0%,transparent 68%)", filter: "blur(12px)", pointerEvents: "none" }} />
        <div style={{
          position: "relative",
          background: "rgba(255,255,255,0.18)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
          borderRadius: 28, boxShadow: "0 16px 44px rgba(0,50,140,0.16),inset 0 2px 0 rgba(255,255,255,0.7)",
          border: "2px solid rgba(255,255,255,0.5)", width: w, height: w * 0.8,
          display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 4,
        }}>
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {children}
          </div>
        </div>
        <div style={{ position: "absolute", top: -36, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
          <div style={{
            background: "rgba(255,255,255,0.95)", borderRadius: 30, padding: "5px 14px",
            boxShadow: "0 6px 20px rgba(0,60,160,0.14)", whiteSpace: "nowrap",
            border: "1px solid rgba(255,255,255,0.9)",
          }}>
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "#1d4ed8", textTransform: "uppercase", fontFamily: "'VAG Rounded',sans-serif" }}>{label}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   3-D tilt card wrapper
───────────────────────────────────────────────────────── */
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 25 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 25 });
  return (
    <motion.div ref={ref}
      onMouseMove={e => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 900, ...style }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   THE HOW  —  orbital data
   5 cards × 72° = perfectly equal spacing, starting at top (-90°)
   -90 → -18 → 54 → 126 → 198
───────────────────────────────────────────────────────── */
const ORBIT_CX = 380;   // true centre of 760×760 canvas
const ORBIT_CY = 380;
const ORBIT_SVG = 265;   // orbit ring — cards sit exactly on this ring
const CARD_R = 265;   // cards ON the orbit ring (same radius)
const INDICATOR_R = 175;   // glowing dots in gap between logo (r≈124) and cards

const CARDS = [
  {
    angle: -90,   // top
    lines: ["Curriculum-aligned", "modules"],
    dotColor: "#00d4ff",
    floatAmp: 8, floatDur: 5.5,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    angle: -18,   // top-right
    lines: ["Structured in", "40-minute sessions"],
    dotColor: "#1d4ed8",
    floatAmp: -8, floatDur: 6.3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    angle: 54,    // bottom-right
    lines: ["Teacher-guided", "delivery"],
    dotColor: "#e91e9c",
    floatAmp: 8, floatDur: 6.8,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    angle: 126,   // bottom-left
    lines: ["Offline", "stability"],
    dotColor: "#ff9800",
    floatAmp: -8, floatDur: 5.2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    angle: 198,   // left
    lines: ["Scalable subject", "expansion"],
    dotColor: "#00b894",
    floatAmp: 8, floatDur: 7.1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
] as const;

function orbitXY(r: number, angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: ORBIT_CX + r * Math.cos(a), y: ORBIT_CY + r * Math.sin(a) };
}

/* ─────────────────────────────────────────────────────────
   MAIN
───────────────────────────────────────────────────────── */
export default function ServicesSection() {
  /* Parallax on mouse in the HOW section */
  const rightRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* useInView fires once when the HOW section enters the viewport */
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  /* Responsive */
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  /* Responsive scale for the orbital canvas */
  const canvasRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      if (!rightRef.current) return;
      const available = rightRef.current.clientWidth - 40; // 20px padding each side
      setScale(Math.min(1, available / 760));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 2 }}>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — THE PROBLEM
      ═══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", width: "100%",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "stretch",
        overflow: "hidden",
        background: "linear-gradient(135deg,#f0f4ff 0%,#d9e2ff 100%)",
      }}>

        {/* Bleeding background image that spans to the right screen edge */}
        {!isMobile && (
          <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: isTablet
              ? "max(44vw, calc(50vw - 62px))"
              : "max(38vw, calc(50vw - 168px))",
            backgroundImage: "url('/background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            zIndex: 1,
          }} />
        )}

        <div style={{
          position: "relative",
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "stretch",
          minHeight: isMobile ? "auto" : "100vh",
        }}>

          {/* LEFT */}
          <div style={{
            width: isMobile ? "100%" : isTablet ? "44%" : "38%",
            flexShrink: 0,
            padding: isMobile
              ? "60px 20px 40px"
              : isTablet
                ? "60px 32px"
                : "60px 60px",
            display: "flex", flexDirection: "column", justifyContent: "center",
            position: "relative", zIndex: 4,
          }}>
            <motion.div initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.22em", color: "#1d4ed8", textTransform: "uppercase", fontFamily: "'VAG Rounded',sans-serif" }}></span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20, rotateX: 16 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
              style={{
                fontSize: isMobile ? "clamp(28px,7vw,40px)" : isTablet ? "clamp(28px,3.5vw,46px)" : "clamp(34px,4.5vw,62px)",
                fontWeight: 800, lineHeight: 1.1, color: "#0b1a3b",
                margin: "0 0 28px", fontFamily: "'VAG Rounded',sans-serif", transformPerspective: 700,
              }}>
              For decades, education has relied on{isMobile ? " " : <br />}
              <span style={{ background: "linear-gradient(90deg,#1d4ed8 0%,#7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>explanation.</span>
            </motion.h2>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 18, marginBottom: isMobile ? 28 : 36 }}>
              {([
                { Icon: TeacherIcon, text: "Teachers explain brilliantly." },
                { Icon: BookListIcon, text: "The curriculum is structured." },
                { Icon: ClipboardIcon, text: "Examinations are rigorous." },
                { Icon: MedalIcon, text: "Yet many concepts remain abstract." },
              ] as { Icon: () => React.ReactNode; text: string }[]).map(({ Icon, text }, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 + i * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10, rotateX: 10 }}
                  style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 16, cursor: "default", perspective: 500, transformStyle: "preserve-3d" }}>
                  <motion.div
                    style={{
                      width: isMobile ? 42 : 52, height: isMobile ? 42 : 52,
                      borderRadius: "50%", flexShrink: 0,
                      background: "linear-gradient(135deg,rgba(29,78,216,0.1) 0%,rgba(124,58,237,0.1) 100%)",
                      border: "1.5px solid rgba(29,78,216,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center", transform: "translateZ(20px)",
                    }}
                  >
                    <Icon />
                  </motion.div>
                  <p style={{
                    fontSize: isMobile ? "clamp(14px,3.8vw,17px)" : isTablet ? "clamp(14px,1.6vw,18px)" : "clamp(17px,1.6vw,21px)",
                    fontWeight: 500, color: "#1a2a4a", margin: 0, fontFamily: "'VAG Rounded',sans-serif", lineHeight: 1.45, transform: "translateZ(10px)",
                  }}>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — desktop/tablet: absolute bubbles | mobile: 2×2 grid */}
          {isMobile ? (
            <div style={{
              width: "100%",
              backgroundImage: "url('/background.webp')", backgroundSize: "cover", backgroundPosition: "center",
              padding: "48px 20px 40px",
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "44px 16px",
              justifyItems: "center",
            }}>
              <GridBubble label="FORCES" delay={0.2} dir={-1} w={140}><ForcesSVG /></GridBubble>
              <GridBubble label="HUMAN ANATOMY" delay={0.5} dir={-1} w={130}><AnatomySVG /></GridBubble>
              <GridBubble label="CELL" delay={0.8} dir={1} w={150}><CellSVG /></GridBubble>
              <GridBubble label="BIOLOGICAL SYSTEMS" delay={1.1} dir={1} w={130}><PlantCellSVG /></GridBubble>
            </div>
          ) : (
            <div style={{
              flex: 1, position: "relative", overflow: "hidden", minHeight: "100vh",
              zIndex: 2,
            }}>
              <img loading="lazy" decoding="async" src="/student.webp" alt="Student"
                style={{
                  position: "absolute", bottom: 0, left: "67.5%", transform: "translateX(-50%)",
                  height: isTablet ? "42%" : "48%",
                  objectFit: "contain", objectPosition: "bottom center", zIndex: 6, pointerEvents: "none",
                  filter: "drop-shadow(0 30px 60px rgba(0,40,130,0.25))"
                }}
              />
              <div style={{ position: "absolute", top: "28%", left: "67.5%", transform: "translate(-50%,-50%)", zIndex: 7, pointerEvents: "none" }}>
                <motion.img loading="lazy" decoding="async"
                  animate={{}}
                  src="/quastion.webp" alt="Question cloud"
                  style={{ width: isTablet ? 200 : 260, height: "auto", filter: "drop-shadow(0 0 32px rgba(180,220,255,0.9)) drop-shadow(0 0 18px rgba(255,255,255,0.75))" }}
                />
              </div>
              <SubjectBubble label="FORCES" pos={{ top: "14%", left: "28%" }} delay={0.2} dir={-1} w={isTablet ? 150 : 190}><ForcesSVG /></SubjectBubble>
              <SubjectBubble label="HUMAN ANATOMY" pos={{ top: "12%", right: "4%" }} delay={1.2} dir={-1} w={isTablet ? 140 : 180}><AnatomySVG /></SubjectBubble>
              <SubjectBubble label="CELL" pos={{ top: "54%", left: "26%" }} delay={1.8} dir={1} w={isTablet ? 165 : 220}><CellSVG /></SubjectBubble>
              <SubjectBubble label="BIOLOGICAL SYSTEMS" pos={{ top: "56%", right: "4%" }} delay={0.6} dir={1} w={isTablet ? 150 : 190}><PlantCellSVG /></SubjectBubble>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — THE HOW
      ═══════════════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        style={{ position: "relative", width: "100%", minHeight: isMobile ? "auto" : "100vh", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", overflow: "hidden", background: "linear-gradient(140deg,#ffffff 0%,#f4f8ff 30%,#eaf1ff 60%,#d8eaff 100%)" }}
      >
        {/* ── background wave shapes ── */}
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "42%", pointerEvents: "none", zIndex: 0 }}>
          <svg viewBox="0 0 1440 310" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,100 C300,200 600,30 900,130 C1080,185 1280,70 1440,120 L1440,310 L0,310 Z" fill="rgba(147,197,253,0.28)" />
            <path d="M0,155 C220,80 500,230 760,155 C990,88 1220,210 1440,148 L1440,310 L0,310 Z" fill="rgba(96,165,250,0.20)" />
            <path d="M0,215 C280,155 560,270 840,215 C1080,167 1300,250 1440,200 L1440,310 L0,310 Z" fill="rgba(59,130,246,0.13)" />
          </svg>
        </div>

        {/* ── decorative floating dots (desktop/tablet only) ── */}
        {!isMobile && <>
          <div aria-hidden style={{ position: "absolute", top: "9%", right: "7%", width: 15, height: 15, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 14px 4px rgba(0,212,255,0.5)", zIndex: 1 }} />
          <div aria-hidden style={{ position: "absolute", top: "37%", right: "4.5%", width: 10, height: 10, borderRadius: "50%", background: "#e91e9c", boxShadow: "0 0 10px 3px rgba(233,30,156,0.45)", zIndex: 1 }} />
        </>}

        {/* ── LEFT TEXT COLUMN ── */}
        <div style={{
          position: "relative",
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          minHeight: isMobile ? "auto" : "100vh",
        }}>

          {/* ── LEFT TEXT COLUMN ── */}
          <div style={{
            width: isMobile ? "100%" : isTablet ? "42%" : "36%",
            flexShrink: 0,
            padding: isMobile
              ? "60px 20px 40px"
              : isTablet
                ? "60px 32px"
                : "60px 60px",
            display: "flex", flexDirection: "column", justifyContent: "flex-start", position: "relative", zIndex: 2,
          }}>
            <motion.h2 initial={{ opacity: 0, y: 20, rotateX: 16 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
              style={{ fontSize: isMobile ? "clamp(24px,6.5vw,36px)" : "clamp(26px,2.9vw,44px)", fontWeight: 800, lineHeight: 1.18, color: "#0b1a3b", margin: "0 0 12px", fontFamily: "'VAG Rounded',sans-serif", transformPerspective: 700 }}>
              We make concepts<br />
              <span style={{ background: "linear-gradient(90deg,#1d4ed8 0%,#3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>observable</span>{ }<br />
              without disrupting schools.
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              style={{ fontSize: isMobile ? 14 : "clamp(15px,1.45vw,19px)", color: "#4a5f7a", lineHeight: 1.55, fontFamily: "'VAG Rounded',sans-serif", maxWidth: 400, margin: 0 }}>
              SparkVR integrates immersive learning into existing academic systems through:
            </motion.p>

            {/* Mobile: show feature cards inline below text */}
            {isMobile && (
              <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {CARDS.map((c, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    style={{ background: "rgba(255,255,255,0.92)", borderRadius: 18, padding: "14px 12px", boxShadow: "0 6px 24px rgba(0,40,120,0.09)", border: "1px solid rgba(220,235,255,0.8)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center", gridColumn: (i === CARDS.length - 1 && CARDS.length % 2 !== 0) ? "1 / -1" : undefined }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(219,234,254,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {c.icon}
                    </div>
                    <div>
                      {c.lines.map((line, j) => (
                        <div key={j} style={{ fontSize: 13, fontWeight: 700, color: "#0b1a3b", lineHeight: 1.35, fontFamily: "'VAG Rounded',sans-serif" }}>{line}</div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT COLUMN — orbital canvas (hidden on mobile) ── */}
          {!isMobile && <div
            ref={rightRef}
            onMouseMove={e => {
              if (!rightRef.current) return;
              const r = rightRef.current.getBoundingClientRect();
              setMouse({ x: ((e.clientX - r.left) / r.width - 0.5) * 20, y: ((e.clientY - r.top) / r.height - 0.5) * 14 });
            }}
            onMouseLeave={() => setMouse({ x: 0, y: 0 })}
            style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: isTablet ? "70vh" : "100vh", overflow: "visible", zIndex: 2 }}
          >
            {/* parallax wrapper */}
            <motion.div
              animate={{ x: mouse.x, y: mouse.y, rotateX: mouse.y * -0.5, rotateY: mouse.x * 0.5 }}
              transition={{ type: "spring", stiffness: 55, damping: 16 }}
              ref={canvasRef}
              style={{
                position: "relative",
                width: "min(100%, 760px)", height: 760,
                flexShrink: 0,
                overflow: "visible",
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                transformStyle: "preserve-3d"
              }}
            >

              {/* ── orbit ring + indicator dots + spokes ── */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }} viewBox="0 0 760 760">

                {/* Subtle spoke lines from centre → each card (direction indicators) */}
                {CARDS.map((c, i) => {
                  const { x, y } = orbitXY(ORBIT_SVG, c.angle);
                  return (
                    <line key={`spoke-${i}`}
                      x1={ORBIT_CX} y1={ORBIT_CY} x2={x} y2={y}
                      stroke="rgba(147,197,253,0.11)"
                      strokeWidth="1" strokeDasharray="3 7"
                    />
                  );
                })}

                {/* Outer soft halo band around the orbit ring */}
                <circle cx={ORBIT_CX} cy={ORBIT_CY} r={ORBIT_SVG + 18}
                  stroke="rgba(147,197,253,0.10)" strokeWidth="24" fill="none" />

                {/* Main dashed orbit ring — cards sit ON this ring */}
                <motion.circle
                  cx={ORBIT_CX} cy={ORBIT_CY} r={ORBIT_SVG}
                  stroke="rgba(100,149,237,0.52)" strokeWidth="1.5" strokeDasharray="9 7" fill="none"
                  animate={{ strokeDashoffset: [0, -64] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Second decorative ring (opposite flow) */}
                <motion.circle
                  cx={ORBIT_CX} cy={ORBIT_CY} r={ORBIT_SVG + 18}
                  stroke="rgba(147,197,253,0.13)" strokeWidth="1" strokeDasharray="4 12" fill="none"
                  animate={{ strokeDashoffset: [0, 64] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Glowing indicator dots — positioned between centre logo and each card
                  INDICATOR_R=175 sits in the gap between logo edge (r≈124) and card inner edge (r≈186) */}
                {CARDS.map((c, i) => {
                  const { x, y } = orbitXY(INDICATOR_R, c.angle);
                  return (
                    <g key={i}>
                      {/* pulsing outer glow */}
                      <motion.circle
                        cx={x} cy={y} r={10}
                        fill={c.dotColor}
                        initial={{ opacity: 0.22, scale: 1 }}
                        animate={{ opacity: [0.22, 0.50, 0.22], scale: [1, 1.7, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                        style={{ transformOrigin: `${x}px ${y}px` }}
                      />
                      {/* solid colour dot */}
                      <circle cx={x} cy={y} r={5} fill={c.dotColor}
                        style={{ filter: `drop-shadow(0 0 8px ${c.dotColor})` }} />
                    </g>
                  );
                })}
              </svg>

              {/* ── SparkVR center element ── */}
              <div style={{ position: "absolute", left: ORBIT_CX, top: ORBIT_CY, transform: "translate(-50%,-50%)", zIndex: 5 }}>
                {/* outer pulse glow */}
                <motion.div
                  animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.52, 0.18] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ position: "absolute", inset: -40, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.5) 0%,transparent 70%)", pointerEvents: "none" }}
                />
                {/* secondary glow ring */}
                <motion.div
                  animate={{ scale: [1.1, 1.25, 1.1], opacity: [0.08, 0.22, 0.08] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  style={{ position: "absolute", inset: -60, borderRadius: "50%", background: "radial-gradient(circle,rgba(129,140,248,0.4) 0%,transparent 65%)", pointerEvents: "none" }}
                />
                {/* rotating gradient border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ width: 248, height: 248, borderRadius: "50%", background: "conic-gradient(from 0deg,#60a5fa 0%,#1d4ed8 30%,#818cf8 50%,#1d4ed8 70%,#60a5fa 100%)", padding: 3.5, boxShadow: "0 0 48px rgba(59,130,246,0.5),0 0 96px rgba(59,130,246,0.22)" }}
                >
                  {/* counter-rotate inner content to stay upright */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#f3f8ff", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <div style={{ width: 216, height: 216, borderRadius: "50%", background: "linear-gradient(145deg,#e8f2ff 0%,#d4e8ff 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 28px rgba(59,130,246,0.14)" }}>
                      <div style={{ width: 182, height: 182, borderRadius: "50%", background: "linear-gradient(145deg,#dbeeff 0%,#c6dfff 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 20px rgba(59,130,246,0.1)" }}>
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          style={{ width: 152, height: 152, borderRadius: "50%", background: "linear-gradient(160deg,#e8f4ff 0%,#d8eeff 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 28px rgba(59,130,246,0.28)" }}
                        >
                          <img loading="lazy" decoding="async" src="/logo.webp" alt="SparkVR" style={{ width: 112, height: "auto", objectFit: "contain" }} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* ── feature cards ── */}
              {CARDS.map((c, i) => {
                const { x, y } = orbitXY(CARD_R, c.angle);
                return (
                  <div
                    key={i}
                    style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", zIndex: 6 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.65, y: 18, rotateX: 25 }}
                      animate={inView
                        ? { opacity: 1, scale: 1, y: 0, rotateX: 0 }
                        : { opacity: 0, scale: 0.65, y: 18, rotateX: 25 }}
                      transition={{ delay: 0.3 + i * 0.13, duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
                      style={{ transformPerspective: 800, transformStyle: "preserve-3d" }}
                    >
                      <motion.div
                        animate={{ rotateX: [0, 4, 0, -4, 0], rotateY: [0, -4, 0, 4, 0] }}
                        transition={{ duration: c.floatDur + 1, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <TiltCard>
                          <motion.div
                            whileHover={{ scale: 1.06, boxShadow: "0 20px 48px rgba(0,60,180,0.18)", z: 20 }}
                            transition={{ duration: 0.22 }}
                            style={{

                              width: 158, minHeight: 106,
                              background: "rgba(255,255,255,0.96)",
                              backdropFilter: "blur(18px)",
                              WebkitBackdropFilter: "blur(18px)",
                              borderRadius: 22,
                              padding: "16px 14px",
                              boxShadow: "0 8px 32px rgba(0,40,120,0.11),inset 0 1px 0 rgba(255,255,255,0.9)",
                              border: "1px solid rgba(220,235,255,0.8)",
                              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                              cursor: "default", textAlign: "center",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            {/* icon bubble */}
                            <div style={{ width: 50, height: 50, borderRadius: "50%", background: "rgba(219,234,254,0.65)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              {c.icon}
                            </div>
                            {/* text */}
                            <div>
                              {c.lines.map((line, j) => (
                                <div key={j} style={{ fontSize: 14, fontWeight: 700, color: "#0b1a3b", lineHeight: 1.35, fontFamily: "'VAG Rounded',sans-serif" }}>
                                  {line}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </TiltCard>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}

            </motion.div>
          </div>}
        </div>
      </section>
    </div>
  );
}