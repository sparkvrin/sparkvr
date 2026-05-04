"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { School, BookOpen, Handshake, Quote, Users, GraduationCap, TrendingUp, Shield, Target, Puzzle, ShieldCheck, BarChart3, Rocket, Star, Globe, ChevronRight } from "lucide-react";
import SparkButton from "@/components/SparkButton";

/* ─── ANIMATION VARIANTS ─── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { delay, duration, ease: EASE },
});

const fadeUpRotate = (delay = 0) => ({
  initial: { opacity: 0, y: 36, rotateX: 16 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.95, ease: EASE },
});

const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30, rotateY: -12 },
  whileInView: { opacity: 1, x: 0, rotateY: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.65, type: "spring" as const, bounce: 0.3 },
});

/* ─── FLOATING AMBIENT WRAPPER ─── */
function FloatLoop({ children, y = 10, duration = 4, delay = 0 }: any) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0], rotateZ: [0, 1.5, -1.5, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── 3D FLOATING ICON ─── */
function FloatingIcon({ icon: Icon, top, left, delay = 0, size = 52 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: delay + 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
      style={{ position: "absolute", top, left, zIndex: 5, pointerEvents: "none", perspective: 600 }}
    >
      <FloatLoop y={14} duration={5 + delay} delay={delay}>
        <motion.div
          whileHover={{ scale: 1.2, boxShadow: "0 20px 48px rgba(0,82,204,0.28)" }}
          style={{
            width: size, height: size, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.85) 100%)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(255,255,255,0.95)",
            boxShadow: "0 12px 32px rgba(0,82,204,0.15), 0 4px 12px rgba(0,82,204,0.08), inset 0 2px 8px rgba(255,255,255,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc",
            transformStyle: "preserve-3d",
          }}
        >
          <Icon size={size * 0.42} strokeWidth={2.2} />
        </motion.div>
      </FloatLoop>
    </motion.div>
  );
}

/* ─── 3D TILT CARD ─── */
function TiltCard({ children, style }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-40, 40], [8, -8]), { stiffness: 220, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 220, damping: 18 });
  const shadowX = useTransform(x, [-100, 100], [-12, 12]);
  const shadowY = useTransform(y, [-40, 40], [-6, 6]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ ...style, rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      whileHover={{ scale: 1.025 }}
      transition={{ scale: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

/* ─── GLOW ICON ─── */
function GlowIcon({ icon: Icon, size = 36, radius = 10, color = "#0052cc", delay = 0 }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotateY: 180 }}
      transition={{ duration: 0.5, type: "spring" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <FloatLoop y={6} duration={4 + delay * 0.4} delay={delay}>
        <motion.div
          animate={{
            boxShadow: [
              `0 4px 12px ${color}18`,
              `0 8px 24px ${color}35`,
              `0 4px 12px ${color}18`,
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
          style={{
            width: size, height: size, borderRadius: radius, flexShrink: 0,
            background: `linear-gradient(135deg, ${color}14 0%, ${color}08 100%)`,
            border: `1.5px solid ${color}20`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color,
          }}
        >
          <Icon size={size * 0.48} strokeWidth={2.1} />
        </motion.div>
      </FloatLoop>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO / ABOUT
      ═══════════════════════════════════════════════════════ */}
      <main style={{
        position: "relative", width: "100%", height: "100vh",
        minHeight: "760px", overflow: "hidden", background: "#f8faff",
      }}>
        {/* Background */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/backgroundabout.png')",
            backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 38%, rgba(255,255,255,0.45) 62%, rgba(255,255,255,0) 100%)",
          zIndex: 1,
        }} />

        {/* 3D Floating Icons */}
        <FloatingIcon icon={School}    top="4%"  left="48%" delay={0}   size={56} />
        <FloatingIcon icon={Handshake} top="14%" left="64%" delay={1.2} size={62} />
        <FloatingIcon icon={Users}     top="34%" left="78%" delay={2.4} size={50} />

        {/* Floating Orbs */}
        {[
          { top: "6%",  left: "58%",  size: 9,  color: "#1fb3ff", delay: 0 },
          { top: "20%", left: "55%",  size: 13, color: "#0052cc", delay: 1 },
          { top: "40%", left: "84%",  size: 11, color: "#cc2fff", delay: 2 },
          { top: "32%", left: "90%",  size: 7,  color: "#1fb3ff", delay: 3 },
        ].map((orb, i) => (
          <motion.div key={i}
            animate={{ y: [0, -18, 0], opacity: [0.45, 0.9, 0.45], scale: [1, 1.2, 1] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            style={{
              position: "absolute", top: orb.top, left: orb.left,
              width: orb.size, height: orb.size, borderRadius: "50%",
              background: orb.color, boxShadow: `0 0 22px ${orb.color}88`, zIndex: 4,
            }}
          />
        ))}

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 10, height: "100%",
          display: "flex", alignItems: "center",
          paddingTop: 140, paddingLeft: "clamp(24px, 5vw, 80px)",
          maxWidth: 1200, margin: "0 auto",
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE }}
            style={{ maxWidth: 600 }}
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 36, rotateX: 18 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.18, duration: 0.95, ease: EASE }}
              style={{
                fontSize: "clamp(38px, 4.8vw, 60px)",
                fontWeight: 800, color: "#001a4d",
                lineHeight: 1.12, letterSpacing: "-0.025em",
                marginBottom: 14, perspective: 700,
              }}
            >
              Built for <br />
              <span className="text-gradient-primary">Indian</span> classrooms.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.36, duration: 0.75 }}
              style={{ fontSize: 17, color: "#475569", lineHeight: 1.55, marginBottom: 22, maxWidth: 500 }}
            >
              Incubated at <strong style={{ color: "#0052cc" }}>IIT Indore</strong> with a pedagogy-first philosophy and long-term institutional partnerships.
            </motion.p>

            {/* Feature List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 22 }}>
              {[
                { icon: School,    text: "Incubated at IIT Indore."             },
                { icon: BookOpen,  text: "Pedagogy-first philosophy."            },
                { icon: Handshake, text: "Long-term institutional partnerships." },
              ].map((item, i) => (
                <motion.div key={i}
                  {...slideLeft(0.5 + i * 0.12)}
                  whileHover={{ x: 8, scale: 1.02 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, cursor: "default" }}
                >
                  <GlowIcon icon={item.icon} size={38} radius={11} delay={i * 0.3} />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.12 }}
                    style={{ fontSize: 15, fontWeight: 600, color: "#001a4d" }}
                  >
                    {item.text}
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.88, duration: 0.75, type: "spring" }}
              style={{ maxWidth: 520, marginBottom: 22 }}
            >
              <TiltCard style={{}}>
                <FloatLoop y={7} duration={6} delay={1}>
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 16px 40px rgba(0,82,204,0.07)",
                        "0 20px 48px rgba(0,82,204,0.14)",
                        "0 16px 40px rgba(0,82,204,0.07)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      background: "rgba(255,255,255,0.72)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      borderRadius: 18, padding: "18px 28px",
                      position: "relative",
                    }}
                  >
                    <motion.div
                      animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      style={{ position: "absolute", top: -12, left: 20, color: "#0052cc" }}
                    >
                      <Quote size={36} fill="currentColor" />
                    </motion.div>
                    <p style={{ fontSize: 18, fontWeight: 500, color: "#001a4d", lineHeight: 1.45, margin: 0 }}>
                      We are not building gadgets. <br />
                      We are <span className="text-gradient-primary" style={{ fontWeight: 800 }}>strengthening</span> how learning happens.
                    </p>
                  </motion.div>
                </FloatLoop>
              </TiltCard>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.12, duration: 0.7, type: "spring" }}
              style={{ display: "flex", gap: 14 }}
            >
              <SparkButton href="/contact" text="Book free workshop" />
              <SparkButton href="/services" text="Our modules" secondary />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Glow */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", bottom: 0, right: 0,
            width: "35%", height: "28%",
            background: "radial-gradient(circle at bottom right, rgba(31,179,255,0.18) 0%, transparent 70%)",
            pointerEvents: "none", zIndex: 2,
          }}
        />
      </main>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: OUR PHILOSOPHY
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", width: "100%", minHeight: "100vh",
        background: "#fdfeff", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "100px 24px", overflow: "hidden",
      }}>
        {/* BG arcs */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: "10%", left: "-5%", width: "40%", height: "80%", border: "1px solid rgba(0,82,204,0.05)", borderRadius: "50%", pointerEvents: "none" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: "5%", right: "-10%", width: "50%", height: "90%", border: "1.5px solid rgba(0,82,204,0.04)", borderRadius: "50%", pointerEvents: "none" }}
        />

        {/* Floating orbs */}
        {[
          { top: "15%", left: "8%",  size: 10, color: "#cbd5e1", delay: 0   },
          { top: "25%", left: "15%", size: 12, color: "#60a5fa", delay: 1.5 },
          { top: "60%", left: "12%", size: 14, color: "#818cf8", delay: 3   },
          { top: "20%", left: "82%", size: 12, color: "#a78bfa", delay: 2   },
          { top: "45%", left: "88%", size: 10, color: "#f472b6", delay: 4   },
          { top: "75%", left: "78%", size: 14, color: "#60a5fa", delay: 1   },
        ].map((orb, i) => (
          <motion.div key={i}
            animate={{ y: [0, -22, 0], opacity: [0.4, 0.85, 0.4], scale: [1, 1.15, 1] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            style={{
              position: "absolute", top: orb.top, left: orb.left,
              width: orb.size, height: orb.size, borderRadius: "50%",
              background: orb.color, boxShadow: `0 0 22px ${orb.color}55`, zIndex: 1,
            }}
          />
        ))}

        {/* Bottom dot pattern */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, width: "100%", height: "30%",
          backgroundImage: "radial-gradient(rgba(0,82,204,0.09) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          zIndex: 0, opacity: 0.6,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 840 }}>

          {/* Label */}
          <motion.div {...fadeUp(0)} style={{ marginBottom: 40 }}>
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="section-label"
              style={{ color: "#0052cc", fontSize: 12, letterSpacing: "0.22em", marginBottom: 12, fontWeight: 700 }}
            >
              OUR PHILOSOPHY
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ width: 40, height: 2, background: "#0052cc", margin: "0 auto", opacity: 0.35, transformOrigin: "center" }}
            />
          </motion.div>

          {/* Heading 1 */}
          <motion.h2
            {...fadeUpRotate(0.2)}
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700, color: "#001a4d",
              lineHeight: 1.1, marginBottom: 36,
              letterSpacing: "-0.02em", perspective: 800,
            }}
          >
            We believe clarity <br />
            begins with <span className="text-gradient-primary">experience.</span>
          </motion.h2>

          {/* Paragraph lines — each animated separately */}
          <div style={{ fontSize: 20, color: "#475569", lineHeight: 1.65, marginBottom: 52, fontWeight: 500 }}>
            {[
              "For decades, education has relied on explanation.",
              "Teachers explain. Students listen.",
              "But understanding deepens when learners can observe, interact, and explore.",
            ].map((line, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 20, x: i % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.38 + i * 0.18, duration: 0.65 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Divider with rotating spark */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.62, duration: 1 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 52 }}
          >
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,82,204,0.18))" }} />
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
              transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
              style={{ color: "#0052cc", filter: "drop-shadow(0 0 6px rgba(0,82,204,0.4))" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
              </svg>
            </motion.div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,82,204,0.18), transparent)" }} />
          </motion.div>

          {/* Heading 2 */}
          <motion.h3
            {...fadeUpRotate(0.78)}
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700, color: "#001a4d",
              marginBottom: 28, letterSpacing: "-0.01em", perspective: 800,
            }}
          >
            Concepts should be <span className="text-gradient-primary">experienced</span> — <br />
            not <span className="text-gradient-primary">imagined.</span>
          </motion.h3>

          {/* Footer text */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.98, duration: 0.8 }}
            style={{ fontSize: 18, color: "#94a3b8", fontWeight: 500 }}
          >
            This is the foundation of everything we build.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: WHAT MAKES SPARKVR DIFFERENT
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", width: "100%", minHeight: "100vh",
        background: "#f9fbff", padding: "120px 24px", overflow: "hidden",
      }}>
        {/* Dot decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", top: "-10%", right: "-5%",
            width: 600, height: 600,
            backgroundImage: "radial-gradient(circle, rgba(0,82,204,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black, transparent 70%)",
            zIndex: 0, opacity: 0.8,
          }}
        />

        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 10 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <motion.div {...fadeUp(0)} style={{ marginBottom: 20 }}>
              <motion.p
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="section-label"
                style={{ color: "#0052cc", fontSize: 13, letterSpacing: "0.2em", fontWeight: 700 }}
              >
                WHAT MAKES SPARKVR DIFFERENT
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                style={{ width: 40, height: 2, background: "#0052cc", margin: "12px auto 0", opacity: 0.3, transformOrigin: "center" }}
              />
            </motion.div>

            <motion.h2
              {...fadeUpRotate(0.12)}
              style={{
                fontSize: "clamp(34px, 5vw, 52px)", fontWeight: 800, color: "#001a4d",
                lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em", perspective: 800,
              }}
            >
              We don&apos;t just use technology. <br />
              We design <span style={{ color: "#1fb3ff" }}>learning outcomes.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.22)} style={{ fontSize: 18, color: "#64748b", maxWidth: 700, margin: "0 auto", lineHeight: 1.6, fontWeight: 500 }}>
              SparkVR is built on three core principles that guide <br />
              every decision we make and every experience we create.
            </motion.p>
          </div>

          {/* Cards Grid: Forced 3-Column Layout for Symmetry */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: 40, 
            marginBottom: 100,
            width: "100%",
            justifyContent: "center"
          }}>
            {[
              {
                id: "01", title: "Pedagogy First",
                desc: "Every module is built with learning objectives at the core. Technology serves pedagogy—not the other way around.",
                icon: BookOpen,
                accent: "#0052cc"
              },
              {
                id: "02", title: "Built for Schools",
                desc: "Designed for real classrooms, timetables, and constraints. Seamless integration without disruption.",
                icon: School,
                accent: "#1fb3ff"
              },
              {
                id: "03", title: "Long-Term Thinking",
                desc: "We partner with institutions for the long run—supporting growth, adoption, and measurable impact over time.",
                icon: Handshake,
                accent: "#cc2fff"
              },
            ].map((card, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: EASE }}
                style={{ height: "100%" }}
              >
                <TiltCard style={{ height: "100%" }}>
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 40px 90px rgba(0,82,204,0.12)" }}
                    transition={{ duration: 0.4, ease: EASE }}
                    style={{
                      background: "#ffffff",
                      borderRadius: 32,
                      padding: "60px 40px",
                      height: "100%",
                      border: "1px solid rgba(0,82,204,0.06)",
                      boxShadow: "0 20px 50px rgba(0,82,204,0.02)",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden"
                    }}
                  >
                    {/* Big Decorative Number Backdrop */}
                    <span style={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      fontSize: 140,
                      fontWeight: 900,
                      color: "rgba(0,82,204,0.03)",
                      lineHeight: 1,
                      pointerEvents: "none",
                      userSelect: "none"
                    }}>
                      {card.id}
                    </span>

                    {/* Icon Circle */}
                    <div style={{ marginBottom: 40, position: "relative", zIndex: 2 }}>
                      <FloatLoop y={8} duration={4 + i} delay={i * 0.5}>
                        <div style={{
                          width: 72, height: 72, borderRadius: 20,
                          background: `linear-gradient(135deg, ${card.accent} 0%, ${card.accent}dd 100%)`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#fff",
                          boxShadow: `0 12px 24px ${card.accent}33`,
                        }}>
                          <card.icon size={32} strokeWidth={2.2} />
                        </div>
                      </FloatLoop>
                    </div>

                    {/* Content */}
                    <div style={{ position: "relative", zIndex: 2 }}>
                      <p style={{ 
                        fontSize: 13, fontWeight: 800, color: card.accent, 
                        letterSpacing: "0.2em", marginBottom: 12 
                      }}>
                        STEP {card.id}
                      </p>
                      <h3 style={{ 
                        fontSize: 26, fontWeight: 900, color: "#001a4d", 
                        marginBottom: 18, lineHeight: 1.2 
                      }}>
                        {card.title}
                      </h3>
                      <p style={{ 
                        fontSize: 16, color: "#64748b", lineHeight: 1.6, 
                        fontWeight: 500, margin: 0 
                      }}>
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom Interactive Bar */}
                    <div style={{ 
                      marginTop: "auto", paddingTop: 40, 
                      display: "flex", alignItems: "center", justifyContent: "space-between" 
                    }}>
                      <div style={{ height: 2, flex: 1, background: "#f1f5f9", borderRadius: 2, marginRight: 20, position: "relative", overflow: "hidden" }}>
                        <motion.div 
                          whileHover={{ x: "0%" }}
                          initial={{ x: "-100%" }}
                          style={{ position: "absolute", inset: 0, background: card.accent }}
                        />
                      </div>
                      <ChevronRight size={20} color={card.accent} strokeWidth={3} />
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Footer Commitment Bar */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8, type: "spring" }}
            style={{
              background: "#ffffff", borderRadius: 30, padding: "24px 40px",
              border: "1.5px solid rgba(0,82,204,0.06)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              boxShadow: "0 15px 40px rgba(0,0,0,0.02)", gap: 20, flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20, flex: 1, minWidth: 280 }}>
              <motion.div
                animate={{
                  boxShadow: ["0 8px 20px rgba(0,82,204,0.2)", "0 14px 32px rgba(0,82,204,0.38)", "0 8px 20px rgba(0,82,204,0.2)"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "#0052cc", color: "#ffffff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </motion.div>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#001a4d", lineHeight: 1.4 }}>
                Our commitment is not to deploy more devices, but to create <span style={{ color: "#0052cc" }}>deeper understanding.</span>
              </p>
            </div>

            <div style={{ width: 1, height: 40, background: "rgba(0,0,0,0.08)", display: "none" }} className="md:block" />

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.3, type: "spring" }}
                style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: "rgba(0,82,204,0.05)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc",
                }}
              >
                <Users size={22} strokeWidth={2.5} />
              </motion.div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", lineHeight: 1.2 }}>Trusted by educators.</p>
                <p style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>Designed for impact.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: ACADEMIC FOUNDATION
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", width: "100%", minHeight: "100vh",
        overflow: "hidden", display: "flex", alignItems: "center",
      }}>
        {/* Full Background Image */}
        <motion.div
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/aboutbackground4thsection.png')",
            backgroundSize: "cover", backgroundPosition: "center right", zIndex: 0,
          }}
        />

        {/* Left white fade */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 28%, rgba(255,255,255,0.88) 46%, rgba(255,255,255,0.35) 66%, rgba(255,255,255,0) 84%)",
          zIndex: 1,
        }} />

        {/* Vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(240,246,255,0.85) 0%, transparent 18%, transparent 82%, rgba(240,246,255,0.85) 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* Rotating arcs */}
        {[
          { size: 460, top: "-8%", right: "-6%", dur: 60 },
          { size: 340, top: "-2%", right: "-1%", dur: 44 },
          { size: 220, top:  "4%", right:  "5%", dur: 26 },
        ].map((arc, i) => (
          <motion.div key={i}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: arc.dur, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute", top: arc.top, right: arc.right,
              width: arc.size, height: arc.size, borderRadius: "50%",
              border: `${i === 1 ? "1px solid rgba(31,179,255,0.13)" : "1.5px dashed rgba(0,82,204,0.12)"}`,
              zIndex: 3, pointerEvents: "none",
            }}
          />
        ))}

        {/* Floating orbs */}
        {[
          { top: "7%",  left: "58%", size: 18, color: "#60a5fa", delay: 0   },
          { top: "5%",  left: "72%", size: 13, color: "#93c5fd", delay: 1.4 },
          { top: "16%", left: "81%", size: 16, color: "#fb923c", delay: 2.7 },
          { top: "12%", left: "68%", size: 10, color: "#818cf8", delay: 1.0 },
          { top: "26%", left: "88%", size: 11, color: "#60a5fa", delay: 3.4 },
          { top: "22%", left: "76%", size: 8,  color: "#a78bfa", delay: 0.8 },
        ].map((orb, i) => (
          <motion.div key={i}
            animate={{ y: [0, -17, 0], opacity: [0.78, 1, 0.78], scale: [1, 1.13, 1] }}
            transition={{ duration: 4 + i * 0.65, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            style={{
              position: "absolute", top: orb.top, left: orb.left,
              width: orb.size, height: orb.size, borderRadius: "50%",
              background: orb.color, boxShadow: `0 0 22px ${orb.color}aa`,
              zIndex: 5, pointerEvents: "none",
            }}
          />
        ))}

        {/* Dot grid */}
        <div style={{
          position: "absolute", right: 0, bottom: 0, width: "36%", height: "52%",
          backgroundImage: "radial-gradient(rgba(0,82,204,0.22) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at bottom right, black, transparent 68%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom right, black, transparent 68%)",
          zIndex: 3, pointerEvents: "none", opacity: 0.55,
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", width: "100%",
          padding: "120px clamp(24px, 5vw, 80px)",
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: 40, flexWrap: "wrap",
        }}>

          {/* Left content */}
          <div style={{ flex: "0 0 auto", maxWidth: 530, width: "100%" }}>

            {/* Label */}
            <motion.div
              {...fadeUp(0)}
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}
            >
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#0052cc", flexShrink: 0 }}
              />
              <motion.span
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: 11.5, letterSpacing: "0.22em", fontWeight: 700, color: "#0052cc" }}
              >
                ACADEMIC FOUNDATION
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
              style={{ width: 40, height: 2, background: "#0052cc", marginBottom: 36, opacity: 0.35, transformOrigin: "left" }}
            />

            {/* Heading */}
            <motion.h2 {...fadeUpRotate(0.15)}
              style={{
                fontSize: "clamp(40px, 5.2vw, 66px)", fontWeight: 800, color: "#001a4d",
                lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 22, perspective: 800,
              }}
            >
              Built with academic{" "}
              <span className="text-gradient-primary">rigor.</span>
            </motion.h2>

            {/* Description lines */}
            <div style={{ marginBottom: 38 }}>
              {[
                <>SparkVR is incubated at <strong style={{ color: "#0052cc" }}>IIT Indore</strong></>,
                <>and guided by a commitment to pedagogical excellence</>,
                <>and measurable learning outcomes.</>,
              ].map((line, i) => (
                <motion.p key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 + i * 0.14, duration: 0.65 }}
                  style={{ fontSize: 16, color: "#475569", lineHeight: 1.65, fontWeight: 500 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* 3 Feature Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 26, marginBottom: 44 }}>
              {[
                { icon: School,       title: "Incubated at IIT Indore", desc: "Rooted in deep research culture and academic innovation." },
                { icon: GraduationCap, title: "Designed for Impact",     desc: "Built with educational experts to ensure curriculum alignment and learning effectiveness." },
                { icon: Users,        title: "Focused on Outcomes",     desc: "Every module is crafted to improve conceptual clarity and long-term retention." },
              ].map((item, i) => (
                <motion.div key={i}
                  {...slideLeft(0.46 + i * 0.14)}
                  whileHover={{ x: 8, scale: 1.02 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 18, cursor: "default" }}
                >
                  <GlowIcon icon={item.icon} size={46} radius={13} delay={i * 0.35} />
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#001a4d", marginBottom: 5 }}>{item.title}</p>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.55, fontWeight: 500 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.92, duration: 0.75, type: "spring" }}
              style={{
                background: "rgba(255,255,255,0.88)", backdropFilter: "blur(18px)",
                borderRadius: 22, padding: "18px 28px",
                border: "1.5px solid rgba(255,255,255,0.95)",
                boxShadow: "0 14px 40px rgba(0,82,204,0.07)",
                display: "flex", gap: 0, alignItems: "center", flexWrap: "wrap",
              }}
            >
              {[
                { icon: TrendingUp, value: "100%",           label: "Pedagogy Aligned" },
                { icon: Shield,     value: "Evidence Based", label: "Learning Design"  },
                { icon: Target,     value: "Outcome Driven", label: "Every Experience" },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div style={{ width: 1, height: 38, background: "rgba(0,82,204,0.09)", flexShrink: 0, margin: "0 20px" }} />}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 12 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 + i * 0.12, duration: 0.55, type: "spring", bounce: 0.4 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <motion.div
                      animate={{ boxShadow: ["0 0 0 rgba(0,82,204,0)", "0 0 14px rgba(0,82,204,0.18)", "0 0 0 rgba(0,82,204,0)"] }}
                      transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                      style={{
                        width: 38, height: 38, borderRadius: 11,
                        background: "rgba(0,82,204,0.06)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#0052cc", flexShrink: 0,
                      }}
                    >
                      <stat.icon size={18} strokeWidth={2.2} />
                    </motion.div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 800, color: "#0052cc", lineHeight: 1.2 }}>{stat.value}</p>
                      <p style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{stat.label}</p>
                    </div>
                  </motion.div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Right: IIT Partnership Card */}
          <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 20 }}>
            <TiltCard style={{}}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75, duration: 0.88, type: "spring", bounce: 0.25 }}
              >
                <FloatLoop y={8} duration={7} delay={1.5}>
                  <motion.div
                    animate={{ boxShadow: ["0 28px 64px rgba(0,82,204,0.1)", "0 36px 80px rgba(0,82,204,0.2)", "0 28px 64px rgba(0,82,204,0.1)"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      background: "rgba(255,255,255,0.93)", backdropFilter: "blur(22px)",
                      borderRadius: 26, padding: "28px 30px", width: 370,
                      border: "1.5px solid rgba(255,255,255,0.98)",
                      display: "flex", gap: 22, alignItems: "center",
                    }}
                  >
                    {/* IIT Seal */}
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <motion.div
                        animate={{ rotateY: [0, 10, 0, -10, 0], scale: [1, 1.04, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          width: 72, height: 72, borderRadius: "50%",
                          background: "linear-gradient(135deg, #0052cc 0%, #1fb3ff 100%)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: "0 10px 28px rgba(0,82,204,0.35)", transformStyle: "preserve-3d",
                        }}
                      >
                        <div style={{
                          width: 60, height: 60, borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.45)",
                          display: "flex", flexDirection: "column",
                          alignItems: "center", justifyContent: "center", gap: 2,
                        }}>
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21h18M5 21V10M19 21V10M12 3L2 10M12 3L22 10M9 21v-5h6v5" />
                          </svg>
                          <span style={{ fontSize: 6, fontWeight: 800, color: "rgba(255,255,255,0.9)", letterSpacing: "0.04em" }}>IIT</span>
                        </div>
                      </motion.div>
                      <p style={{ fontSize: 9.5, fontWeight: 700, color: "#0052cc", letterSpacing: "0.06em", textAlign: "center", whiteSpace: "nowrap" }}>IIT INDORE</p>
                      <p style={{ fontSize: 9, color: "#94a3b8", fontWeight: 600, textAlign: "center", whiteSpace: "nowrap", marginTop: -4 }}>Incubation Partner</p>
                    </div>

                    <div style={{ width: 1, alignSelf: "stretch", background: "rgba(0,82,204,0.1)", flexShrink: 0 }} />

                    <div>
                      <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.6, fontWeight: 500, marginBottom: 14 }}>
                        A partnership built on shared values of education, innovation and nation building.
                      </p>
                      <p style={{ fontSize: 13, fontWeight: 800, color: "#0052cc", letterSpacing: "0.04em" }}>IIT INDORE</p>
                      <p style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>Incubation Partner</p>
                    </div>
                  </motion.div>
                </FloatLoop>
              </motion.div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: OUR POSITIONING
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", width: "100%", minHeight: "100vh",
        overflow: "hidden", display: "flex", alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(155deg, #d8e8ff 0%, #e4efff 30%, #edf4ff 58%, #d5e6ff 100%)",
        padding: "100px 24px",
      }}>
        {/* Concentric arcs */}
        {[1100, 820, 560].map((size, i) => (
          <motion.div key={i}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 80 + i * 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: size, height: size, borderRadius: "50%",
              border: `1px solid rgba(0,82,204,${0.07 - i * 0.015})`,
              zIndex: 0, pointerEvents: "none",
            }}
          />
        ))}

        {/* Floating orbs */}
        {[
          { top: "10%", left: "5%",  size: 22, bg: "linear-gradient(135deg,#ff6b6b,#ff9d3d)", delay: 0   },
          { top: "32%", left: "3%",  size: 14, bg: "#60a5fa",                                  delay: 1.3 },
          { top: "58%", left: "2%",  size: 19, bg: "#60a5fa",                                  delay: 2.6 },
          { top: "72%", left: "8%",  size: 12, bg: "#818cf8",                                  delay: 1.8 },
          { top: "16%", left: "90%", size: 24, bg: "#60a5fa",                                  delay: 0.7 },
          { top: "40%", left: "92%", size: 15, bg: "linear-gradient(135deg,#fb923c,#f472b6)",  delay: 2.1 },
          { top: "66%", left: "88%", size: 18, bg: "#818cf8",                                  delay: 3.0 },
          { top: "50%", left: "94%", size: 10, bg: "#60a5fa",                                  delay: 0.4 },
        ].map((orb, i) => (
          <motion.div key={i}
            animate={{ y: [0, -18, 0], opacity: [0.72, 1, 0.72], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + i * 0.65, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            style={{
              position: "absolute", top: orb.top, left: orb.left,
              width: orb.size, height: orb.size, borderRadius: "50%",
              background: orb.bg, boxShadow: "0 0 22px rgba(0,82,204,0.28)",
              zIndex: 4, pointerEvents: "none",
            }}
          />
        ))}

        {/* Dot grids */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, width: "26%", height: "48%",
          backgroundImage: "radial-gradient(rgba(0,82,204,0.22) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse at bottom left, black, transparent 68%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom left, black, transparent 68%)",
          zIndex: 2, pointerEvents: "none", opacity: 0.5,
        }} />
        <div style={{
          position: "absolute", top: 0, right: 0, width: "20%", height: "36%",
          backgroundImage: "radial-gradient(rgba(0,82,204,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse at top right, black, transparent 68%)",
          WebkitMaskImage: "radial-gradient(ellipse at top right, black, transparent 68%)",
          zIndex: 2, pointerEvents: "none", opacity: 0.4,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, width: "100%", textAlign: "center" }}>

          {/* Label */}
          <motion.div {...fadeUp(0)} style={{ marginBottom: 28 }}>
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: 12, letterSpacing: "0.22em", fontWeight: 700, color: "#0052cc", marginBottom: 14 }}
            >
              OUR POSITIONING
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ width: 44, height: 2.5, background: "linear-gradient(90deg,#0052cc,#1fb3ff)", margin: "0 auto", borderRadius: 2, opacity: 0.55, transformOrigin: "center" }}
            />
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 5, height: 5, borderRadius: "50%", background: "#0052cc", margin: "5px auto 0" }}
            />
          </motion.div>

          {/* Main Heading — lines staggered */}
          <div style={{
            fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 900, color: "#001a4d",
            lineHeight: 1.05, letterSpacing: "-0.038em", marginBottom: 14, perspective: 1000,
          }}>
            {["SparkVR is not", <>a <span className="text-gradient-primary">product</span> layer.</>].map((line, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 44, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14 + i * 0.18, duration: 1, ease: EASE }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Sub Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 28, rotateY: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.38, duration: 0.88, ease: EASE }}
            style={{
              fontSize: "clamp(22px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 20,
              background: "linear-gradient(90deg,#0052cc 0%,#1fb3ff 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              perspective: 800,
            }}
          >
            It is academic infrastructure.
          </motion.h3>

          {/* Gradient underline */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.48, duration: 0.7 }}
            style={{ width: 60, height: 3, background: "linear-gradient(90deg,#0052cc,#1fb3ff)", margin: "0 auto 32px", borderRadius: 3, transformOrigin: "center" }}
          />

          {/* Description lines */}
          <div style={{ marginBottom: 64 }}>
            {[
              "Designed to integrate into how schools already function —",
              "without disruption, without compromise.",
            ].map((line, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.54 + i * 0.16, duration: 0.65 }}
                style={{ fontSize: 18, color: "#475569", lineHeight: 1.7, fontWeight: 500 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* 5-Step Process Card */}
          <motion.div
            initial={{ opacity: 0, y: 44, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.62, duration: 0.9, type: "spring", bounce: 0.2 }}
            whileHover={{ boxShadow: "0 32px 80px rgba(0,82,204,0.1)" }}
            style={{
              background: "rgba(255,255,255,0.58)", backdropFilter: "blur(20px)",
              borderRadius: 30, padding: "52px 44px 44px",
              border: "1.5px solid rgba(255,255,255,0.88)",
              boxShadow: "0 24px 64px rgba(0,82,204,0.07)",
              marginBottom: 28,
            }}
          >
            {/* Icons row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 44 }}>
              {[
                { icon: Puzzle },
                { icon: Users },
                { icon: ShieldCheck },
                { icon: BarChart3 },
                { icon: School },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 0 }}>
                      <div style={{ flex: 1, height: 0, borderTop: "2px dashed rgba(0,82,204,0.22)" }} />
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.55, 1, 0.55] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                        style={{ width: 8, height: 8, borderRadius: "50%", background: "#0052cc", flexShrink: 0 }}
                      />
                      <div style={{ flex: 1, height: 0, borderTop: "2px dashed rgba(0,82,204,0.22)" }} />
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotateY: -90, y: 24 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.72 + i * 0.14, duration: 0.75, type: "spring", bounce: 0.5 }}
                    whileHover={{ scale: 1.18, rotateY: 20, rotateX: -10, y: -6 }}
                    style={{
                      width: 82, height: 82, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(232,243,255,1)",
                      border: "1.5px solid rgba(0,82,204,0.14)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#0052cc", transformStyle: "preserve-3d", cursor: "default",
                    }}
                  >
                    <FloatLoop y={6} duration={4 + i * 0.5} delay={i * 0.35}>
                      <motion.div
                        animate={{ boxShadow: ["0 10px 28px rgba(0,82,204,0.1)", "0 16px 40px rgba(0,82,204,0.22)", "0 10px 28px rgba(0,82,204,0.1)"] }}
                        transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
                      >
                        <item.icon size={34} strokeWidth={1.55} />
                      </motion.div>
                    </FloatLoop>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>

            {/* Labels + Descriptions */}
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              {[
                { label: "Integrate",  desc: "Fits seamlessly into existing curriculum and schedules."     },
                { label: "Empower",    desc: "Teachers lead with confidence. We make it easier."           },
                { label: "Ensure",     desc: "Safe, reliable and built for real school environments."      },
                { label: "Strengthen", desc: "Conceptual clarity today, stronger learning tomorrow."       },
                { label: "Scale",      desc: "Built for long-term impact across schools and institutions." },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.65 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  style={{ flex: 1, textAlign: "center", minWidth: 0 }}
                >
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#001a4d", marginBottom: 8 }}>{item.label}</p>
                  <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.55, fontWeight: 500 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.88 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.18, duration: 0.75, type: "spring", bounce: 0.38 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 52px rgba(0,82,204,0.1)" }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 18,
              background: "rgba(255,255,255,0.75)", backdropFilter: "blur(18px)",
              borderRadius: 22, padding: "18px 36px",
              border: "1.5px solid rgba(255,255,255,0.95)",
              boxShadow: "0 14px 40px rgba(0,82,204,0.07)",
            }}
          >
            <motion.div
              animate={{ rotateY: [0, 15, 0, -15, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(0,82,204,0.09)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#0052cc", flexShrink: 0, transformStyle: "preserve-3d",
              }}
            >
              <GraduationCap size={22} strokeWidth={2} />
            </motion.div>
            <p style={{ fontSize: 16, color: "#334155", fontWeight: 500, whiteSpace: "nowrap" }}>
              We don&apos;t add to the load. We strengthen what matters most —{" "}
              <motion.span
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ color: "#0052cc", fontWeight: 700 }}
              >
                learning.
              </motion.span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: JOIN THE MOVEMENT (PRECISION SCALE)
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#f0f7ff",
      }}>
        {/* ── BACKGROUND IMAGE ── */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/background6thimage.png')",
            backgroundSize: "cover",
            backgroundPosition: "right 15% top 5%", // Precision positioning to clear faces
            zIndex: 0,
          }}
        />

        {/* ── STRONGER LEFT FADE (To clear face) ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #f0f7ff 0%, #f0f7ff 35%, rgba(240,247,255,0.85) 52%, rgba(240,247,255,0.3) 75%, transparent 100%)",
          zIndex: 1,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, #f0f7ff 0%, transparent 12%, transparent 88%, #f0f7ff 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }} />

        {/* ── CONTENT CONTAINER ── */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 1240, margin: "0 auto", width: "100%",
          padding: "100px clamp(24px, 5vw, 60px) 40px",
        }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            
            {/* TOP ROW: TEXT ON LEFT */}
            <div style={{ maxWidth: 540 }}>
              {/* Animated Label */}
              <motion.div {...fadeUp(0)} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#0052cc" }} 
                />
                <span style={{ fontSize: 11, letterSpacing: "0.22em", fontWeight: 800, color: "#0052cc" }}>JOIN THE MOVEMENT</span>
                <motion.div 
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{ width: 30, height: 1.5, background: "rgba(0,82,204,0.2)", transformOrigin: "left" }} 
                />
              </motion.div>

              {/* Compact Heading */}
              <motion.h2
                {...fadeUpRotate(0.1)}
                style={{
                  fontSize: "clamp(32px, 3.8vw, 48px)",
                  fontWeight: 900, color: "#001a4d",
                  lineHeight: 1.1, letterSpacing: "-0.025em",
                  marginBottom: 24,
                }}
              >
                Let&apos;s build the <br />
                future of learning, <br />
                <span className="text-gradient-primary">together.</span>
              </motion.h2>

              <motion.p {...fadeUp(0.2)} style={{ fontSize: 16, color: "#475569", lineHeight: 1.6, marginBottom: 16, fontWeight: 500 }}>
                SparkVR is more than a platform — it&apos;s a partnership. Whether you&apos;re a school, educator, or institution, we&apos;re here to help you create impact that lasts.
              </motion.p>
            </div>

            {/* MIDDLE ROW: FEATURES & CTA CARD (Pushed even lower) */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 40, marginTop: 12 }}>
              
              {/* Features (Left) */}
              <div style={{ display: "flex", alignItems: "stretch", flex: "1 1 500px" }}>
                {[
                  { icon: Rocket, title: "Future Ready", desc: "Equip learners with\nskills for tomorrow." },
                  { icon: Users, title: "Partner Driven", desc: "We work with you\nevery step of the way." },
                  { icon: TrendingUp, title: "Impact Focused", desc: "Every decision we make\nis outcome-driven." }
                ].map((item, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      {...fadeUp(0.3 + i * 0.1)}
                      whileHover={{ y: -5 }}
                      style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 10px" }}
                    >
                      <div style={{
                        width: 64, height: 64, borderRadius: 16,
                        background: "#ffffff",
                        boxShadow: "0 12px 30px rgba(0,82,204,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#0052cc", marginBottom: 20
                      }}>
                        <item.icon size={28} strokeWidth={2} />
                      </div>
                      <h4 style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", marginBottom: 8 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, fontWeight: 500, whiteSpace: "pre-line" }}>{item.desc}</p>
                    </motion.div>
                    
                    {/* Vertical Divider */}
                    {i < 2 && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: 80, opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                        style={{ width: 1, background: "rgba(0,82,204,0.1)", margin: "auto 10px" }} 
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* CTA CARD (Compact & Bottom Right) */}
              <div style={{ 
                flex: "0 0 auto", 
                width: "100%", 
                maxWidth: 360, 
                marginTop: 100, // Even more spacing to stay at the very bottom
              }}>
                <TiltCard style={{ width: "100%" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                    style={{
                      background: "linear-gradient(145deg, #001a4d 0%, #003399 100%)",
                      borderRadius: 24,
                      padding: "24px",
                      color: "#ffffff",
                      boxShadow: "0 20px 50px rgba(0,26,77,0.3)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                      <motion.div 
                        animate={{ rotateY: [0, 180, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: 40, height: 40, borderRadius: "50%",
                          background: "rgba(255,255,255,0.08)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          border: "1px solid rgba(255,255,255,0.12)",
                          flexShrink: 0
                        }}
                      >
                        <Users size={20} />
                      </motion.div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.2 }}>
                        Ready to transform learning?
                      </h3>
                    </div>

                    <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(31,179,255,0.5)" }}
                        style={{
                          flex: 1, padding: "10px", borderRadius: 8,
                          background: "#1fb3ff", color: "#fff",
                          fontWeight: 700, fontSize: 12, textAlign: "center", textDecoration: "none"
                        }}
                      >
                        Book Demo
                      </motion.a>
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
                        style={{
                          flex: 1, padding: "10px", borderRadius: 8,
                          border: "1.2px solid rgba(255,255,255,0.2)",
                          color: "#fff", fontWeight: 700, fontSize: 12, textAlign: "center", textDecoration: "none"
                        }}
                      >
                        Contact Us
                      </motion.a>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 6, opacity: 0.5, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 12 }}>
                      <Shield size={12} />
                      <span style={{ fontSize: 11, fontWeight: 500 }}>Trusted by educators.</span>
                    </div>
                  </motion.div>
                </TiltCard>
              </div>
            </div>
          </div>

          {/* ABSOLUTE BOTTOM: Stats Bar (Fully Integrated) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.9, type: "spring" }}
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              borderRadius: 20,
              padding: "20px 32px",
              marginTop: 60,
              display: "flex",
              justifyContent: "space-between",
              boxShadow: "0 10px 40px rgba(0,82,204,0.08)",
              border: "1.5px solid #ffffff",
              flexWrap: "wrap",
              gap: 20
            }}
          >
            {[
              { icon: Shield, title: "100+ Schools", pre: "Trusted by" },
              { icon: GraduationCap, title: "25K+ Students", pre: "Impacting" },
              { icon: Star, title: "Educators", pre: "Loved by" },
              { icon: Globe, title: "Global Standards", pre: "Aligned with" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                style={{ display: "flex", alignItems: "center", gap: 12, flex: "1 1 180px" }}
              >
                <motion.div 
                  animate={{ boxShadow: ["0 0 0px rgba(0,82,204,0)", "0 0 10px rgba(0,82,204,0.2)", "0 0 0px rgba(0,82,204,0)"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(0,82,204,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc" }}
                >
                  <stat.icon size={18} />
                </motion.div>
                <div>
                  <p style={{ fontSize: 9, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 1 }}>{stat.pre}</p>
                  <p style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", lineHeight: 1.1 }}>{stat.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
