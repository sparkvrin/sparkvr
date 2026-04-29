"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SparkButton from "@/components/SparkButton";

const SUBJECTS = [
  { label: "Fungi",           img: "/fungi_proper.png",  accent: "#1fb3ff", grade: "Grades 6–9",  desc: "Explore spore formation, hyphae networks and decomposition cycles in immersive 3D." },
  { label: "Cells",           img: "/cell_proper.png",   accent: "#0052cc", grade: "Grades 6–10", desc: "Walk through organelles, membranes and mitosis with spatial understanding." },
  { label: "Human Anatomy",   img: "/anatomy.png",       accent: "#cc2fff", grade: "Grades 7–12", desc: "Observe cardiac chambers, pulmonary systems and skeletal joints at full scale." },
  { label: "Bio-Social Systems", img: "/neural.png",     accent: "#00b894", grade: "Grades 9–12", desc: "Map neural pathways, synaptic transmissions and brain-body feedback loops." },
];

const SYSTEM_FEATURES = [
  { text: "Curriculum-aligned",  icon: "📘" },
  { text: "40-minute sessions",  icon: "⏱️" },
  { text: "Teacher-guided",      icon: "👨‍🏫" },
  { text: "Offline stability",   icon: "📡" },
  { text: "Scalable expansion",  icon: "🚀" },
];

/* ── 3D Tilt Card ── */
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 25 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 25 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        if (!cardRef.current) return;
        const r = cardRef.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1000, ...style }}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>

      {/* ═══════════════════════════════════════════
          SECTION 1: The Gap — glassmorphic frosted panel
      ═══════════════════════════════════════════ */}
      <section style={{
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(24px)",
        padding: "128px 24px",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.3)",
      }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
            style={{ marginBottom: 48 }}
          >
            THE EDUCATIONAL GAP
          </motion.p>

          <div style={{ marginBottom: 64 }}>
            {["Teachers explain brilliantly.", "The curriculum is structured.", "Examinations are rigorous."].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, color: "#001a4d", opacity: 0.4, marginBottom: 12, lineHeight: 1.4 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ height: 1, background: "linear-gradient(90deg, transparent, #0052cc40, transparent)", margin: "48px 0" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 600, color: "#001a4d", lineHeight: 1.3 }}
          >
            Yet many concepts remain <span style={{ color: "#0052cc" }}>abstract.</span>
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: 3D Subject Cards — glassmorphic cards with floating images
      ═══════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(240,249,255,0.25) 100%)",
        backdropFilter: "blur(20px)",
        padding: "128px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative floating orbs for this section */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "8%", right: "6%", width: 80, height: 80, borderRadius: "50%", background: "rgba(31,179,255,0.12)", filter: "blur(30px)", pointerEvents: "none" }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -8, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", bottom: "15%", left: "4%", width: 100, height: 100, borderRadius: "50%", background: "rgba(204,47,255,0.08)", filter: "blur(35px)", pointerEvents: "none" }}
        />

        <div style={{ maxWidth: 1438, margin: "0 auto", position: "relative", zIndex: 1 }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, marginBottom: 96 }}>
            {SUBJECTS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
              >
                <TiltCard style={{
                  height: 500, borderRadius: 24, overflow: "hidden",
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.5)",
                }}>
                  <div style={{ position: "relative", width: "100%", height: "100%", padding: 28, display: "flex", flexDirection: "column" }}>

                    <div style={{ transform: "translateZ(40px)", marginBottom: 20 }}>
                      <span className="section-label" style={{ color: s.accent }}>{s.grade}</span>
                      <h3 style={{ fontSize: 22, fontWeight: 700, color: "#001a4d", marginTop: 6 }}>{s.label}</h3>
                      <p style={{ fontSize: 13, color: "#64748b", marginTop: 8, lineHeight: 1.55 }}>{s.desc}</p>
                    </div>

                    <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <motion.img
                        src={s.img}
                        alt={s.label}
                        style={{
                          width: "88%", height: "auto",
                          transform: "translateZ(60px)",
                          filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.10))",
                          borderRadius: 12,
                        }}
                        animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>

                    {/* Accent bar */}
                    <div style={{ transform: "translateZ(20px)", height: 3, width: 48, background: s.accent, borderRadius: 2 }} />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <h2 style={{ fontSize: "clamp(32px, 5.5vw, 72px)", fontWeight: 700, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Students are asked to imagine. <br />
              <span className="text-gradient-primary">What if they didn&apos;t have to?</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: System Features — floating glass pills
      ═══════════════════════════════════════════ */}
      <section style={{
        background: "rgba(255,255,255,0.3)",
        backdropFilter: "blur(24px)",
        padding: "128px 24px",
        position: "relative",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
            style={{ marginBottom: 32 }}
          >
            HOW IT WORKS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 700, color: "#001a4d", lineHeight: 1.2, marginBottom: 64 }}
          >
            Making concepts observable — <br />without disrupting schools.
          </motion.h2>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginBottom: 80 }}>
            {SYSTEM_FEATURES.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.06, y: -3, boxShadow: "0 12px 28px rgba(0,82,204,0.12)" }}
                style={{
                  padding: "14px 28px",
                  borderRadius: 40,
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(0,82,204,0.08)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#0052cc",
                  display: "flex", alignItems: "center", gap: 8,
                  cursor: "default",
                  transition: "all 0.25s ease",
                }}
              >
                <span>{f.icon}</span> {f.text}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <SparkButton href="/services" text="EXPLORE THE SYSTEM" large />
          </motion.div>

          <div style={{ marginTop: 128, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, textAlign: "left", paddingTop: 48, borderTop: "1px solid rgba(0,82,204,0.08)" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#0052cc", marginBottom: 12 }}>MISSION</p>
              <p style={{ fontSize: 16, color: "#444", lineHeight: 1.6 }}>Technology supports quietly, allowing teachers to lead confidently and students to learn deeply.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: "right" }}
            >
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#0052cc", marginBottom: 12 }}>OUTCOME</p>
              <p style={{ fontSize: 16, color: "#444", lineHeight: 1.6 }}>Measurable learning gains through immersive 3D classroom interventions.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
