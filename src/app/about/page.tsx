"use client";

import React from "react";
import { motion } from "framer-motion";
import SparkButton from "@/components/SparkButton";
import TiltCard from "@/components/TiltCard";
import { Eye, Brain, Rocket, Users } from "lucide-react";

const values = [
  { icon: Eye,    title: "Observable first",            desc: "Every abstract concept can and should be seen, not just described.",         color: "#1fb3ff" },
  { icon: Brain,  title: "Cognitive by design",         desc: "Every experience is built around how the brain actually learns and retains.", color: "#0052cc" },
  { icon: Rocket, title: "Infrastructure, not gimmick", desc: "SparkVR is academic infrastructure — curriculum-aligned and teacher-guided.", color: "#cc2fff" },
  { icon: Users,  title: "Teacher-centred",             desc: "Technology supports quietly. Teachers lead confidently. Always.",            color: "#00b894" },
];

const statMinis = [
  { val: "4x",   label: "Student focus",        color: "#1fb3ff" },
  { val: "27%",  label: "Learning gains",        color: "#0052cc" },
  { val: "32%",  label: "Academic performance",  color: "#cc2fff" },
  { val: "275%", label: "Learner confidence",    color: "#ff8c00" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(180deg, rgba(0,26,77,0.92) 0%, rgba(0,45,122,0.90) 100%)",
        backdropFilter: "blur(12px)",
        padding: "160px 24px 96px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }}>
          <svg width="240" height="240" viewBox="0 0 240 240" style={{ opacity: 0.08 }}>
            <polygon points="240,0 240,240 0,0" fill="#1fb3ff" />
          </svg>
        </div>
        {[1, 2, 3].map(n => (
          <motion.div key={n}
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: n * 240, height: n * 240, borderRadius: "50%", border: `1px solid rgba(31,179,255,${0.12 / n})`, pointerEvents: "none" }}
            animate={{ scale: [1, 1.05, 1], rotate: [0, n % 2 === 0 ? 360 : -360] }}
            transition={{ scale: { duration: 4 + n, repeat: Infinity, ease: "easeInOut", delay: n * 0.5 }, rotate: { duration: 45 + n * 15, repeat: Infinity, ease: "linear" } }}
          />
        ))}
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.42, 0.2], scale: [1, 1.18, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "25%", left: "8%", width: 140, height: 140, borderRadius: "50%", background: "rgba(31,179,255,0.08)", filter: "blur(52px)", pointerEvents: "none" }} />
        <motion.div animate={{ y: [0, 15, 0], opacity: [0.15, 0.32, 0.15] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ position: "absolute", bottom: "15%", right: "12%", width: 110, height: 110, borderRadius: "50%", background: "rgba(204,47,255,0.07)", filter: "blur(42px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="section-label" style={{ marginBottom: 20 }}>Our story</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.15, transformPerspective: 800 }}
          >
            Clarity begins with <span className="text-gradient-primary">experience.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "24px auto 0", lineHeight: 1.7 }}>
            SparkVR was built on a single belief: students should not have to imagine — they should be able to see.
          </motion.p>
        </div>
      </section>

      {/* Wave transition */}
      <div style={{ background: "rgba(0,45,122,0.90)", marginBottom: -1 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
          <defs><linearGradient id="wG1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" /><stop offset="100%" stopColor="rgba(240,248,255,0.25)" />
          </linearGradient></defs>
          <path d="M0,40 C480,80 960,0 1440,60 L1440,80 L0,80 Z" fill="url(#wG1)" />
        </svg>
      </div>

      {/* ── Mission ── */}
      <section style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(24px)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -44, rotateY: 12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ transformPerspective: 900 }}
          >
            <p className="section-label" style={{ marginBottom: 20 }}>Why we exist</p>
            <h2 style={{ fontSize: 42, fontWeight: 700, color: "#001a4d", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Abstract concepts don&apos;t have to stay abstract.
            </h2>
            <p style={{ fontSize: 16, color: "#333333", lineHeight: 1.7, marginBottom: 16 }}>
              For too long, education relied on description when it could use demonstration. A student reading about cell mitosis is asked to imagine something no human has seen with the naked eye.
            </p>
            <p style={{ fontSize: 16, color: "#333333", lineHeight: 1.7, marginBottom: 32 }}>
              SparkVR changes that. We integrate immersive 3D learning directly into the school curriculum — without disrupting teachers, timetables, or infrastructure.
            </p>
            <SparkButton href="/contact" text="Start the conversation" large />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 44, rotateY: -12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, transformPerspective: 900 }}
          >
            {statMinis.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.82, rotateX: 18 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ transformPerspective: 700 }}
              >
                <TiltCard maxTilt={10} style={{ borderRadius: 20, display: "block" }}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 16px 36px rgba(0,82,204,0.14)" }}
                    transition={{ duration: 0.22 }}
                    style={{
                      background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)",
                      borderRadius: 20, padding: "28px 20px", textAlign: "center",
                      border: "1px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                      cursor: "default",
                    }}
                  >
                    <p style={{ fontSize: 40, fontWeight: 700, color: s.color, letterSpacing: "-0.03em", marginBottom: 8 }}>{s.val}</p>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#001a4d", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</p>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: "rgba(255,255,255,0.3)", backdropFilter: "blur(20px)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label" style={{ marginBottom: 16 }}>What drives us</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28, rotateX: 18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
              style={{ fontSize: 42, fontWeight: 700, color: "#001a4d", letterSpacing: "-0.02em", transformPerspective: 700 }}
            >
              Our <span className="text-gradient-primary">values.</span>
            </motion.h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36, rotateX: 18 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.85, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ transformPerspective: 800 }}
              >
                <TiltCard maxTilt={9} style={{ borderRadius: 20, display: "block" }}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,82,204,0.12)" }}
                    transition={{ duration: 0.22 }}
                    style={{
                      background: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)",
                      borderRadius: 20, padding: "36px 28px",
                      border: "1px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                      cursor: "default",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8, y: -3 }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                      style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, background: `${v.color}15`, color: v.color }}
                    >
                      <v.icon size={24} />
                    </motion.div>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: "#001a4d", marginBottom: 12 }}>{v.title}</h3>
                    <p style={{ fontSize: 15, color: "#333333", lineHeight: 1.65 }}>{v.desc}</p>
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
            transition={{ scale: { duration: 6 + n * 2, repeat: Infinity, ease: "easeInOut", delay: n * 0.5 }, rotate: { duration: 55 + n * 20, repeat: Infinity, ease: "linear" } }}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, y: 36, rotateX: 18 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 1, transformPerspective: 800 }}
        >
          <h2 style={{ fontSize: 42, fontWeight: 700, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>
            Ready to make learning <span className="text-gradient-primary">visible?</span>
          </h2>
          <p style={{ fontSize: 18, color: "#333333", opacity: 0.7, marginBottom: 40 }}>
            Join the schools already changing how students understand the world.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <SparkButton href="/contact" text="Book free workshop" large />
            <SparkButton href="/services" text="View services" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
