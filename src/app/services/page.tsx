"use client";

import React from "react";
import { motion } from "framer-motion";

function useScreenWidth() {
  const [width, setWidth] = React.useState(1200);
  React.useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}
import SparkButton from "@/components/SparkButton";
import TiltCard from "@/components/TiltCard";
import { BookOpen, Clock, Presentation, WifiOff, Box, Layers } from "lucide-react";

const subjects = [
  { name: "Life science",         img: "/cell.webp",    accent: "#1fb3ff", grade: "Grades 6–10", modules: 12 },
  { name: "Human anatomy",        img: "/anatomy.webp", accent: "#0052cc", grade: "Grades 7–12", modules: 18 },
  { name: "Ecology and fungi",    img: "/fungi.webp",   accent: "#cc2fff", grade: "Grades 6–9",  modules: 8  },
  { name: "Neural and cognitive", img: "/neural.webp",  accent: "#ff8c00", grade: "Grades 9–12", modules: 14 },
];

const features = [
  { icon: BookOpen,     title: "Curriculum-aligned",  desc: "Every module maps to NCERT, CBSE, and ICSE syllabi.",               color: "#1fb3ff" },
  { icon: Clock,        title: "40-minute sessions",  desc: "Designed to fit within a single class period.",                      color: "#0052cc" },
  { icon: Presentation, title: "Teacher-guided",      desc: "Teachers remain the authority. Technology stays in the background.", color: "#cc2fff" },
  { icon: WifiOff,      title: "Offline-ready",       desc: "Full session stability — no internet required during class.",       color: "#00b894" },
  { icon: Box,          title: "Scalable by design",  desc: "From one classroom to an entire district.",                          color: "#ff8c00" },
  { icon: Layers,       title: "Multi-subject",       desc: "Science, biology, social studies, and expanding every semester.",    color: "#0052cc" },
];

export default function ServicesPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(180deg, rgba(0,26,77,0.92) 0%, rgba(0,45,122,0.90) 100%)",
        backdropFilter: "blur(12px)",
        padding: isMobile ? "100px 20px 60px" : "160px 24px 96px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }}>
          <svg width="220" height="220" viewBox="0 0 220 220" style={{ opacity: 0.08 }}>
            <polygon points="220,0 220,220 0,0" fill="#1fb3ff" />
          </svg>
        </div>
        {[1, 2, 3].map(n => (
          <motion.div key={n}
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: n * 240, height: n * 240, borderRadius: "50%", border: `1px solid rgba(31,179,255,${0.12 / n})`, pointerEvents: "none" }}
            animate={{ scale: [1, 1.05, 1], rotate: [0, n % 2 === 0 ? 360 : -360] }}
            transition={{ scale: { duration: 4 + n, repeat: Infinity, ease: "easeInOut", delay: n * 0.5 }, rotate: { duration: 40 + n * 15, repeat: Infinity, ease: "linear" } }}
          />
        ))}
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 120, height: 120, borderRadius: "50%", background: "rgba(31,179,255,0.08)", filter: "blur(48px)", pointerEvents: "none", opacity: 0.2 }} />

        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="section-label" style={{ marginBottom: 20 }}>What we offer</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.15, transformPerspective: 800 }}
          >
            A structured <span className="text-gradient-primary">immersive curriculum.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "24px auto 0", lineHeight: 1.7 }}>
            Built chapter by chapter. Aligned lesson by lesson. Integrated period by period.
          </motion.p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: "rgba(0,45,122,0.90)", marginBottom: -1 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
          <defs><linearGradient id="wG2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" /><stop offset="100%" stopColor="rgba(240,248,255,0.25)" />
          </linearGradient></defs>
          <path d="M0,40 C480,80 960,0 1440,60 L1440,80 L0,80 Z" fill="url(#wG2)" />
        </svg>
      </div>

      {/* ── Subject cards ── */}
      <section style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(24px)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label" style={{ textAlign: "center", marginBottom: 48 }}
          >Subject areas</motion.p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4,1fr)", gap: 20 }}>
            {subjects.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 52, rotateX: 22 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.85, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ transformPerspective: 900 }}
              >
                <TiltCard maxTilt={10} style={{ borderRadius: 20, display: "block" }}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      borderRadius: 20, overflow: "hidden", aspectRatio: "3/4",
                      position: "relative", cursor: "pointer",
                      background: "rgba(5,18,53,0.85)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                    }}
                  >
                    <img loading="lazy" decoding="async" src={s.img} alt={s.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,26,77,0.92) 0%,rgba(0,26,77,0.3) 55%,transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 20, zIndex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          style={{ width: 8, height: 8, borderRadius: "50%", background: s.accent, boxShadow: `0 0 10px ${s.accent}` }} />
                        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: s.accent }}>{s.grade}</span>
                      </div>
                      <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{s.name}</p>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.modules} modules</p>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ background: "rgba(255,255,255,0.3)", backdropFilter: "blur(20px)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label" style={{ marginBottom: 16 }}>How it works</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28, rotateX: 18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
              style={{ fontSize: 42, fontWeight: 700, color: "#001a4d", letterSpacing: "-0.02em", transformPerspective: 700 }}
            >
              Built for the <span className="text-gradient-primary">classroom.</span>
            </motion.h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(3,1fr)", gap: 20 }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36, rotateX: 18 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ transformPerspective: 800 }}
              >
                <TiltCard maxTilt={8} style={{ borderRadius: 16, display: "block" }}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,82,204,0.12)" }}
                    transition={{ duration: 0.22 }}
                    style={{
                      background: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)",
                      borderRadius: 16, padding: "32px 24px",
                      border: "1px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                      cursor: "default",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8, y: -2 }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                      style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, background: `${f.color}15`, color: f.color }}
                    >
                      <f.icon size={22} />
                    </motion.div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: "#001a4d", marginBottom: 10 }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: "#333", lineHeight: 1.65 }}>{f.desc}</p>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "rgba(245,245,245,0.35)", backdropFilter: "blur(24px)", padding: "96px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {[1, 2].map(n => (
          <motion.div key={n}
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: n * 350, height: n * 350, borderRadius: "50%", border: `1.5px solid rgba(0,82,204,${0.06 / n})`, pointerEvents: "none" }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.55, 0.3], rotate: [0, n % 2 === 0 ? 360 : -360] }}
            transition={{ scale: { duration: 6 + n * 2, repeat: Infinity, ease: "easeInOut", delay: n * 0.5 }, rotate: { duration: 50 + n * 20, repeat: Infinity, ease: "linear" } }}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, y: 32, rotateX: 16 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 1, transformPerspective: 800 }}
        >
          <h2 style={{ fontSize: 42, fontWeight: 700, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>
            This is academic <span className="text-gradient-primary">infrastructure.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#333", opacity: 0.7, marginBottom: 40 }}>Not entertainment. Not a one-off. A structured, scalable system.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <SparkButton href="/contact#contact-form" text="Experience SparkVR" large />
            <SparkButton href="/about" text="Our story" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
