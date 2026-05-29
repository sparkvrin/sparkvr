"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3, Brain, Target, Users, CheckCircle2,
  GraduationCap, Star, TrendingUp, BookOpen,
  Lightbulb, Eye, Layers, ArrowRight, ChevronRight,
  ShieldCheck, Award, RefreshCw, XCircle, Search, Glasses,
  MessageSquare, ArrowUpRight, Clock,
  HelpCircle, Compass, Smile, Heart, Calendar
} from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-60px" },
  transition: { delay, duration, ease: EASE },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.7, ease: EASE },
});

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

const OUTCOMES = [
  {
    icon: Brain,
    color: "#2563eb",
    bg: "#eff6ff",
    title: "Deeper Concept Understanding",
    desc: "Students grasp abstract ideas through 3D visuals and guided exploration — not just memorisation.",
    stat: "82%",
    statLabel: "Improvement",
  },
  {
    icon: BarChart3,
    color: "#059669",
    bg: "#ecfdf5",
    title: "Stronger Retention",
    desc: "Experiential learning creates lasting memory. Students remember what they experience, not just what they read.",
    stat: "76%",
    statLabel: "Better Retention",
  },
  {
    icon: Users,
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Higher Engagement",
    desc: "Immersive modules keep every student actively involved throughout the lesson.",
    stat: "71%",
    statLabel: "More Engaged",
  },
  {
    icon: Target,
    color: "#d97706",
    bg: "#fffbeb",
    title: "Exam Performance",
    desc: "Curriculum-aligned content helps students score better in assessments and board exams.",
    stat: "68%",
    statLabel: "Better Scores",
  },
  {
    icon: TrendingUp,
    color: "#db2777",
    bg: "#fdf2f8",
    title: "Teacher Confidence",
    desc: "Teachers report greater ease in explaining difficult topics and improved lesson delivery.",
    stat: "90%",
    statLabel: "Recommend SparkVR",
  },
  {
    icon: Star,
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Student Curiosity",
    desc: "Exploration-driven learning sparks genuine curiosity and a love for learning across subjects.",
    stat: "3×",
    statLabel: "More Questions Asked",
  },
];

const PILLARS = [
  {
    icon: Eye,
    title: "See It",
    desc: "3D models and immersive visuals make abstract concepts visible and concrete.",
    color: "#2563eb",
  },
  {
    icon: Lightbulb,
    title: "Understand It",
    desc: "Guided exploration builds deep conceptual clarity not surface-level knowledge.",
    color: "#7c3aed",
  },
  {
    icon: BookOpen,
    title: "Apply It",
    desc: "In-built quizzes and assessments reinforce learning and track individual progress.",
    color: "#059669",
  },
  {
    icon: Layers,
    title: "Master It",
    desc: "Graded modules help students progress from foundational to exam-ready understanding.",
    color: "#d97706",
  },
];

const GRADE_OUTCOMES = [
  {
    range: "Grades 6–7",
    focus: "Foundation Building",
    outcomes: ["Visual understanding of core science concepts", "Improved attention span in class", "Curiosity-led exploration"],
    color: "#2563eb",
  },
  {
    range: "Grades 8–9",
    focus: "Conceptual Depth",
    outcomes: ["Bridge between theory and real-world application", "Stronger performance in unit tests", "Active participation in discussions"],
    color: "#7c3aed",
  },
  {
    range: "Grades 10–12",
    focus: "Exam Readiness",
    outcomes: ["Direct syllabus alignment for board exams", "Reduced concept anxiety before exams", "Measurable improvement in scores"],
    color: "#059669",
  },
];

export default function LearningOutcomePage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'VAG Rounded', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: isMobile ? "auto" : "100vh",
        overflow: "hidden",
        backgroundColor: "#eef2ff",
        backgroundImage: isMobile ? "none" : "url('/learingbackground1.png')",
        backgroundSize: isTablet ? "auto 100%" : "auto 100%",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
      }}>

        {/* Gradient overlay: left solid, fades right */}
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right, #eef2ff 0%, #eef2ff 28%, rgba(238,242,255,0.9) 44%, rgba(238,242,255,0.45) 62%, rgba(238,242,255,0) 80%)"
              : "linear-gradient(to right, #eef2ff 0%, #eef2ff 24%, rgba(238,242,255,0.92) 38%, rgba(238,242,255,0.35) 56%, rgba(238,242,255,0) 76%)",
          }} />
        )}

        {/* ── Animated overlays on image ── */}
        {!isMobile && (
          <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", overflow: "hidden" }}>

            {/* Pulsing glow rings */}
            {[
              { size: 180, x: "72%", y: "18%", color: "rgba(59,130,246,0.12)", delay: 0 },
              { size: 120, x: "88%", y: "60%", color: "rgba(124,58,237,0.1)", delay: 1.2 },
              { size: 90, x: "60%", y: "72%", color: "rgba(16,185,129,0.1)", delay: 0.6 },
            ].map((ring, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 3.2 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: ring.delay }}
                style={{
                  position: "absolute",
                  left: ring.x, top: ring.y,
                  width: ring.size, height: ring.size,
                  borderRadius: "50%",
                  background: ring.color,
                  transform: "translate(-50%, -50%)",
                  border: `1px solid ${ring.color.replace("0.1", "0.3").replace("0.12", "0.3")}`,
                }}
              />
            ))}

            {/* Floating metric badges */}
            {[
              { val: "82%", label: "Concept Clarity", color: "#2563eb", bg: "rgba(255,255,255,0.92)", x: "58%", y: "12%", delay: 0 },
              { val: "500+", label: "Schools", color: "#7c3aed", bg: "rgba(255,255,255,0.92)", x: "84%", y: "20%", delay: 0.8 },
              { val: "76%", label: "Better Retention", color: "#059669", bg: "rgba(255,255,255,0.92)", x: "91%", y: "50%", delay: 1.5 },
              { val: "430+", label: "Modules", color: "#ea580c", bg: "rgba(255,255,255,0.92)", x: "62%", y: "80%", delay: 0.4 },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 + badge.delay },
                  y: { duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: badge.delay },
                }}
                style={{
                  position: "absolute",
                  left: badge.x, top: badge.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid rgba(255,255,255,0.25)`,
                  borderRadius: 14,
                  padding: "8px 14px",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  boxShadow: `0 4px 16px rgba(0,0,0,0.08)`,
                  minWidth: 72,
                }}>
                  <span style={{ fontSize: 18, fontWeight: 900, color: "#ffffff", lineHeight: 1, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>{badge.val}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginTop: 3, textAlign: "center", letterSpacing: "0.04em" }}>{badge.label}</span>
                </div>
              </motion.div>
            ))}

            {/* Floating particles */}
            {[
              { x: "55%", delay: 0, dur: 5 },
              { x: "68%", delay: 1.2, dur: 6.5 },
              { x: "79%", delay: 0.5, dur: 4.8 },
              { x: "87%", delay: 2, dur: 5.5 },
              { x: "93%", delay: 0.9, dur: 6 },
              { x: "63%", delay: 1.7, dur: 5.2 },
            ].map((p, i) => (
              <motion.div
                key={i}
                animate={{ y: ["100vh", "-10vh"], opacity: [0, 0.7, 0] }}
                transition={{ duration: p.dur, repeat: Infinity, ease: "linear", delay: p.delay }}
                style={{
                  position: "absolute",
                  left: p.x, bottom: 0,
                  width: 5 + (i % 3) * 2, height: 5 + (i % 3) * 2,
                  borderRadius: "50%",
                  background: ["#3b82f6", "#7c3aed", "#10b981", "#f59e0b", "#3b82f6", "#7c3aed"][i],
                  boxShadow: `0 0 8px ${["#3b82f6", "#7c3aed", "#10b981", "#f59e0b", "#3b82f6", "#7c3aed"][i]}80`,
                }}
              />
            ))}

            {/* Animated scan line */}
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              style={{
                position: "absolute",
                left: "48%", right: 0,
                height: 2,
                background: "linear-gradient(to right, transparent 0%, rgba(59,130,246,0.3) 30%, rgba(124,58,237,0.4) 60%, transparent 100%)",
                top: 0,
              }}
            />

          </div>
        )}

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 4,
          maxWidth: 1400, margin: "0 auto",
          padding: isMobile ? "110px 20px 56px" : isTablet ? "120px 32px 80px" : "120px 60px 80px",
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex", alignItems: "center",
        }}>
          <div style={{ width: isMobile ? "100%" : isTablet ? "54%" : "46%" }}>



            {/* Heading */}
            <motion.h1 {...fadeLeft(0.12)} style={{
              fontSize: isMobile ? "clamp(28px,8vw,42px)" : isTablet ? "clamp(30px,4vw,46px)" : "clamp(34px,3.2vw,54px)",
              fontWeight: 900, color: "#0f172a", lineHeight: 1.12,
              letterSpacing: "-0.025em", margin: "0 0 32px",
            }}>
              When learning<br />becomes{" "}
              <span style={{ color: "#2563eb" }}>experiential.</span>
            </motion.h1>

            {/* 4 feature rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 0 : 0, marginBottom: 28 }}>
              {[
                {
                  icon: Lightbulb, color: "#7c3aed", bg: "#f5f3ff",
                  title: "Improved concept clarity",
                  desc: "Students understand better\nwhen they experience concepts.",
                },
                {
                  icon: Users, color: "#16a34a", bg: "#f0fdf4",
                  title: "Higher classroom engagement",
                  desc: "Immersive experiences spark curiosity\nand active participation.",
                },
                {
                  icon: RefreshCw, color: "#ea580c", bg: "#fff7ed",
                  title: "Reduced repetition",
                  desc: "Concepts are grasped faster,\nreducing the need for repeated explanations.",
                },
                {
                  icon: ShieldCheck, color: "#2563eb", bg: "#eff6ff",
                  title: "Stronger academic confidence",
                  desc: "Clear understanding builds confidence\nand improves performance.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 + i * 0.1, duration: 0.6, ease: EASE }}
                  whileHover={{ x: 6 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 16,
                    padding: isMobile ? "14px 0" : "16px 0",
                    borderBottom: "1px solid rgba(0,82,204,0.07)",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    style={{
                      width: isMobile ? 46 : 50, height: isMobile ? 46 : 50,
                      borderRadius: "50%", background: item.bg,
                      border: `1.5px solid ${item.color}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 4px 14px ${item.color}18`,
                    }}
                  >
                    <item.icon size={isMobile ? 20 : 22} color={item.color} strokeWidth={1.8} />
                  </motion.div>
                  <div style={{ paddingTop: 2 }}>
                    <p style={{ fontSize: isMobile ? 14 : 15, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>{item.title}</p>
                    <p style={{ fontSize: isMobile ? 12 : 13, color: "#64748b", fontWeight: 500, margin: 0, lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research card */}
            <motion.div
              {...fadeUp(0.6)}
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(16px)",
                borderRadius: 18,
                border: "1px solid rgba(37,99,235,0.09)",
                padding: isMobile ? "18px 16px" : "22px 24px",
                display: "flex", alignItems: "flex-start", gap: 16,
                boxShadow: "0 6px 24px rgba(0,26,77,0.07)",
                marginTop: 20,
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "#f5f3ff", border: "1px solid rgba(124,58,237,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <BookOpen size={22} color="#7c3aed" strokeWidth={1.8} />
              </div>
              <div>
                <p style={{ fontSize: isMobile ? 12 : 13, color: "#475569", fontWeight: 500, margin: "0 0 6px", lineHeight: 1.65 }}>
                  Research in experiential learning frameworks consistently shows that active engagement improves retention and understanding.
                </p>
                <p style={{ fontSize: isMobile ? 13 : 14, color: "#2563eb", fontWeight: 800, margin: 0 }}>
                  SparkVR applies this principle responsibly.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Mobile: image strip below */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            style={{ width: "100%", height: 300, backgroundImage: "url('/learingbackground1.png')", backgroundSize: "cover", backgroundPosition: "center top" }}
          />
        )}
      </section>

      {/* ── WHY EXPERIENTIAL LEARNING WORKS ── */}
      <section style={{
        position: "relative",
        backgroundImage: "url('/learingbackground2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}>
        {/* All content sits above the image — no overlay */}
        <div style={{ position: "relative", zIndex: 1 }}>

          {/* Label + two columns */}
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "52px 20px 0" : isTablet ? "60px 32px 0" : "72px 60px 0" }}>



            {/* Two columns */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 24 : 32,
              alignItems: "stretch",
            }}>

              {/* LEFT — text over background image */}
              <motion.div
                {...fadeLeft(0.1)}
                style={{ padding: isMobile ? "8px 0" : "8px 0", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
              >
                <motion.h2
                  {...fadeUp(0.2)}
                  style={{
                    fontSize: isMobile ? "clamp(24px,7vw,34px)" : "clamp(28px,2.6vw,46px)",
                    fontWeight: 900, color: "#0f172a", lineHeight: 1.2,
                    margin: "0 0 20px",
                  }}
                >
                  Students understand better when they{" "}
                  <span style={{ color: "#2563eb" }}>experience</span>{" "}
                  concepts directly.
                </motion.h2>
                <motion.p
                  {...fadeUp(0.3)}
                  style={{
                    fontSize: isMobile ? 13 : 15, color: "#475569",
                    lineHeight: 1.7, margin: 0, fontWeight: 500, maxWidth: 400,
                  }}
                >
                  Experiential learning turns abstract ideas into real-world understanding through active exploration and discovery.
                </motion.p>
              </motion.div>

              {/* RIGHT — white comparison card */}
              <motion.div
                {...fadeUp(0.15)}
                style={{
                  background: "#ffffff", borderRadius: 20, overflow: "hidden",
                  boxShadow: "0 8px 48px rgba(0,0,0,0.25)",
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* Header */}
                <div style={{ padding: isMobile ? "18px 20px 14px" : "26px 32px 20px", borderBottom: "1px solid #f1f5f9" }}>
                  <p style={{ fontSize: isMobile ? 15 : 18, fontWeight: 800, color: "#0f172a", margin: 0 }}>
                    The difference is in how learning happens.
                  </p>
                </div>

                {/* Comparison — 2 columns, VS badge absolutely centered */}
                <div style={{ padding: isMobile ? "12px" : "18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: 14, overflow: "hidden", flex: 1, alignItems: "stretch" }}>

                    {/* Traditional */}
                    <div style={{ background: "#faf5ff", padding: isMobile ? "16px 12px" : "24px 18px" }}>
                      <div style={{ textAlign: "center", marginBottom: 14 }}>
                        <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#7c3aed", margin: "0 0 12px" }}>
                          Traditional Learning
                        </p>
                        <div style={{
                          width: isMobile ? 56 : 68, height: isMobile ? 56 : 68, borderRadius: "50%",
                          background: "#ede9fe", border: "2px solid #ddd6fe",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          margin: "0 auto 14px",
                        }}>
                          <BookOpen size={isMobile ? 24 : 30} color="#7c3aed" strokeWidth={1.5} />
                        </div>
                        <p style={{ fontSize: isMobile ? 11 : 13, fontWeight: 600, color: "#0f172a", margin: 0, lineHeight: 1.4, padding: "0 4px" }}>
                          Students read, listen and memorize.
                        </p>
                      </div>
                      <div style={{ height: 1, background: "#ddd6fe", margin: "12px 0" }} />
                      {["Passive understanding", "Limited retention", "Abstract and disconnected", "Harder to apply"].map((item, i, arr) => (
                        <div key={item} style={{
                          display: "flex", alignItems: "center", gap: 8,
                          padding: "8px 0",
                          borderBottom: i < arr.length - 1 ? "1px solid #f5f3ff" : "none",
                        }}>
                          <XCircle size={15} color="#a78bfa" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: isMobile ? 11 : 12, color: "#475569", fontWeight: 500 }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Experiential */}
                    <div style={{ background: "#f0fdf4", padding: isMobile ? "16px 12px" : "24px 18px" }}>
                      <div style={{ textAlign: "center", marginBottom: 14 }}>
                        <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#16a34a", margin: "0 0 12px" }}>
                          Experiential Learning
                        </p>
                        <div style={{
                          width: isMobile ? 56 : 68, height: isMobile ? 56 : 68, borderRadius: "50%",
                          background: "#dcfce7", border: "2px solid #bbf7d0",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          margin: "0 auto 14px",
                        }}>
                          <Glasses size={isMobile ? 24 : 30} color="#16a34a" strokeWidth={1.5} />
                        </div>
                        <p style={{ fontSize: isMobile ? 11 : 13, fontWeight: 600, color: "#0f172a", margin: 0, lineHeight: 1.4, padding: "0 4px" }}>
                          Students experience, explore and connect.
                        </p>
                      </div>
                      <div style={{ height: 1, background: "#bbf7d0", margin: "12px 0" }} />
                      {["Active engagement", "Better retention", "Real-world connection", "Easier to understand and apply"].map((item, i, arr) => (
                        <div key={item} style={{
                          display: "flex", alignItems: "center", gap: 8,
                          padding: "8px 0",
                          borderBottom: i < arr.length - 1 ? "1px solid #dcfce7" : "none",
                        }}>
                          <CheckCircle2 size={15} color="#16a34a" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: isMobile ? 11 : 12, color: "#475569", fontWeight: 500 }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* VS badge — absolutely centered */}
                    <div style={{
                      position: "absolute", left: "50%", top: "38%",
                      transform: "translate(-50%, -50%)", zIndex: 10,
                    }}>
                      <div style={{
                        width: isMobile ? 36 : 46, height: isMobile ? 36 : 46, borderRadius: "50%",
                        background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 4px 18px rgba(37,99,235,0.55)",
                      }}>
                        <span style={{ fontSize: isMobile ? 9 : 11, fontWeight: 900, color: "#fff" }}>vs.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Full-width bottom bar — solid light background */}
          <motion.div
            {...fadeUp(0.15)}
            style={{
              background: "#eef2f7",
              marginTop: isMobile ? 36 : 52,
              padding: isMobile ? "36px 20px" : isTablet ? "44px 32px" : "52px 60px",
            }}
          >
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 20, marginBottom: isMobile ? 28 : 36 }}>
                <div style={{ flex: 1, height: 1, background: "#b0bfcf" }} />
                <span style={{ fontSize: isMobile ? 14 : 17, fontWeight: 800, color: "#0f172a", whiteSpace: "nowrap" }}>
                  Experiential learning helps students:
                </span>
                <div style={{ flex: 1, height: 1, background: "#b0bfcf" }} />
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: isMobile ? 20 : 32,
              }}>
                {[
                  { icon: Brain, label: "Improves retention", desc: "Experiences are remembered longer than words.", color: "#7c3aed", bg: "#f3e8ff" },
                  { icon: Users, label: "Encourages participation", desc: "Students are more involved when they explore.", color: "#16a34a", bg: "#dcfce7" },
                  { icon: Search, label: "Builds curiosity", desc: "Exploration leads to questions, questions lead to learning.", color: "#d97706", bg: "#fef3c7" },
                  { icon: Target, label: "Strengthens understanding", desc: "Connecting concepts to real experiences makes them stick.", color: "#2563eb", bg: "#dbeafe" },
                ].map(({ icon: Icon, label, desc, color, bg }, i) => (
                  <motion.div key={label} {...fadeUp(0.08 + i * 0.08)} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: "50%", flexShrink: 0,
                      background: bg, display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 20 : 24} color={color} strokeWidth={2} />
                    </div>
                    <div>
                      <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>{label}</p>
                      <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.55 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote strip — solid white */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              background: "#ffffff",
              padding: isMobile ? "28px 20px" : isTablet ? "32px 32px" : "36px 60px",
            }}
          >
            <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", gap: isMobile ? 16 : 24 }}>
              <div style={{
                width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: "50%", flexShrink: 0,
                background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(124,58,237,0.18)",
              }}>
                <GraduationCap size={isMobile ? 22 : 26} color="#7c3aed" strokeWidth={2} />
              </div>
              <p style={{ fontSize: isMobile ? 14 : 16, color: "#0f172a", fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                When students experience learning, they don&apos;t just remember it {" "}
                <strong style={{ color: "#2563eb" }}>they truly understand it.</strong>
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── OBSERVABLE CLASSROOM IMPACT ── */}
      <section style={{
        position: "relative",
        backgroundColor: "#f8faff",
        backgroundImage: isMobile ? "none" : "url('/learingbackground31.png')",
        backgroundSize: "auto 100%",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}>

        {/* White-to-transparent gradient: locks left side white, image shows fully on right */}
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#f8faff 0%,#f8faff 32%,rgba(248,250,255,0.9)48%,rgba(248,250,255,0.3)64%,rgba(248,250,255,0)78%)"
              : "linear-gradient(to right,#f8faff 0%,#f8faff 36%,rgba(248,250,255,0.88)50%,rgba(248,250,255,0.2)63%,rgba(248,250,255,0)76%)",
          }} />
        )}

        <div style={{ position: "relative", zIndex: 1 }}>

          {/* Content row */}
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "24px 20px 20px" : isTablet ? "28px 32px 20px" : "28px 60px 20px" }}>

            {/* Text sits in left ~50% — right half shows background image through */}
            <div style={{ maxWidth: isMobile ? "100%" : isTablet ? "56%" : "50%" }}>



              {/* Heading */}
              <motion.h2
                {...fadeUp(0.08)}
                style={{
                  fontSize: isMobile ? "clamp(26px,7vw,34px)" : "clamp(28px,2.4vw,42px)",
                  fontWeight: 900, color: "#0f172a", lineHeight: 1.2,
                  margin: "0 0 16px",
                }}
              >
                Visible impact inside the{" "}
                <span style={{ color: "#6d28d9" }}>classroom.</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                {...fadeUp(0.12)}
                style={{ fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.65, margin: "0 0 28px", fontWeight: 500 }}
              >
                SparkVR transforms how students learn, participate and understand—right in front of you.
              </motion.p>

              {/* 5 Feature cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 10, maxWidth: isMobile ? "100%" : 460 }}>
                {[
                  { icon: Users, title: "More participation", desc: "Students actively engage and contribute during every session.", color: "#7c3aed", bg: "#f3e8ff" },
                  { icon: Eye, title: "Better attention", desc: "Immersive experiences hold focus longer and reduce distractions.", color: "#059669", bg: "#ecfdf5" },
                  { icon: Lightbulb, title: "Faster understanding", desc: "Complex concepts become clear, reducing learning time.", color: "#d97706", bg: "#fffbeb" },
                  { icon: RefreshCw, title: "Fewer repeated explanations", desc: "Teachers spend less time re-teaching the same concepts.", color: "#2563eb", bg: "#eff6ff" },
                  { icon: MessageSquare, title: "Improved discussion quality", desc: "Students ask better questions and engage in deeper conversations.", color: "#059669", bg: "#dcfce7" },
                ].map(({ icon: Icon, title, desc, color, bg }, i) => (
                  <motion.div
                    key={title}
                    {...fadeUp(0.1 + i * 0.07)}
                    whileHover={{ x: 5, boxShadow: "0 6px 24px rgba(0,0,0,0.09)" }}
                    style={{
                      background: "#ffffff", borderRadius: 14,
                      padding: isMobile ? "13px 16px" : "18px 20px",
                      minHeight: isMobile ? "auto" : 72,
                      display: "flex", alignItems: "center", gap: 14,
                      border: "1px solid #f1f5f9",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div style={{
                      width: isMobile ? 40 : 44, height: isMobile ? 40 : 44, borderRadius: "50%", flexShrink: 0,
                      background: bg, display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 18 : 20} color={color} strokeWidth={2} />
                    </div>
                    <div>
                      <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 3px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.5 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Separator heading for stats */}

          </div>

          {/* Mobile: image strip */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
              style={{ width: "100%", height: 260, overflow: "hidden" }}
            >
              <img
                src="/learingbackground4.png"
                alt="SparkVR classroom impact"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </motion.div>
          )}

          {/* Stats row — individual cards, no background */}
          <div style={{
            padding: isMobile ? "16px 20px 0" : isTablet ? "20px 32px 0" : "24px 60px 0",
          }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)",
                gap: isMobile ? 12 : 16,
                marginBottom: isMobile ? 16 : 20,
              }}>
                {[
                  { icon: ArrowUpRight, stat: "82%", desc: "noticed higher student participation", color: "#7c3aed", bg: "#f3e8ff" },
                  { icon: Award, stat: "76%", desc: "saw better attention during lessons", color: "#059669", bg: "#ecfdf5" },
                  { icon: Clock, stat: "71%", desc: "experienced faster concept clarity", color: "#d97706", bg: "#fffbeb" },
                  { icon: RefreshCw, stat: "68%", desc: "reported fewer repeated explanations", color: "#2563eb", bg: "#eff6ff" },
                  { icon: BarChart3, stat: "79%", desc: "observed improved class discussions", color: "#059669", bg: "#dcfce7" },
                ].map(({ icon: Icon, stat, desc, color, bg }, i) => (
                  <motion.div
                    key={stat}
                    {...fadeUp(0.08 + i * 0.07)}
                    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
                    style={{
                      background: "#ffffff",
                      borderRadius: 18,
                      border: "1px solid #f1f5f9",
                      boxShadow: "0 3px 12px rgba(0,0,0,0.05)",
                      textAlign: "center",
                      padding: isMobile ? "18px 10px" : "24px 16px",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div style={{
                      width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: "50%",
                      background: bg, display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 12px",
                    }}>
                      <Icon size={isMobile ? 20 : 24} color={color} strokeWidth={2} />
                    </div>
                    <p style={{ fontSize: isMobile ? 28 : 36, fontWeight: 900, color, margin: "0 0 6px", lineHeight: 1 }}>{stat}</p>
                    <p style={{ fontSize: isMobile ? 10 : 12, color: "#64748b", margin: 0, lineHeight: 1.5 }}>{desc}</p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── STUDENT CONFIDENCE & ENGAGEMENT ── */}
      <section style={{
        position: "relative",
        backgroundImage: "url('/learingbackground4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}>
        {/* White-to-transparent gradient: left reads, right shows image */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: isMobile
            ? "rgba(248,250,255,0.96)"
            : "linear-gradient(to right,rgba(248,250,255,0.99)0%,rgba(248,250,255,0.98)30%,rgba(248,250,255,0.88)48%,rgba(248,250,255,0.25)65%,rgba(248,250,255,0)78%)",
        }} />


        <div style={{ position: "relative", zIndex: 1 }}>

          {/* Label + two columns */}
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "48px 20px 0" : isTablet ? "52px 32px 0" : "56px 60px 0" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 40 : 52,
              alignItems: "start",
            }}>

              {/* LEFT */}
              <div>
                {/* Label */}
                <motion.div {...fadeUp(0)} style={{ marginBottom: isMobile ? 20 : 28 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#2563eb", letterSpacing: "0.22em", display: "block" }}>
                    STUDENT CONFIDENCE & ENGAGEMENT
                  </span>
                  <div style={{ width: 36, height: 3, background: "#2563eb", marginTop: 7, borderRadius: 2 }} />
                </motion.div>

                {/* Heading */}
                <motion.h2
                  {...fadeUp(0.08)}
                  style={{
                    fontSize: isMobile ? "clamp(26px,7vw,34px)" : "clamp(28px,2.4vw,46px)",
                    fontWeight: 900, color: "#0f172a", lineHeight: 1.15,
                    margin: "0 0 20px",
                  }}
                >
                  Confidence grows when students{" "}
                  <span style={{ color: "#7c3aed" }}>truly understand.</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  {...fadeUp(0.12)}
                  style={{ fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7, margin: "0 0 32px", fontWeight: 500, maxWidth: 440 }}
                >
                  SparkVR creates safe, immersive learning experiences where students explore, ask questions, and discover answers on their own terms.
                </motion.p>

                {/* Quote card */}
                <motion.div
                  {...fadeUp(0.18)}
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    borderRadius: 18, border: "1px solid rgba(124,58,237,0.1)",
                    padding: isMobile ? "18px 16px" : "22px 24px",
                    display: "flex", alignItems: "flex-start", gap: 16,
                    boxShadow: "0 6px 24px rgba(0,0,0,0.07)",
                    maxWidth: isMobile ? "100%" : 420,
                  }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                    background: "#f5f3ff", border: "1px solid rgba(124,58,237,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative",
                  }}>
                    <GraduationCap size={24} color="#7c3aed" strokeWidth={1.8} />
                    <div style={{
                      position: "absolute", bottom: -2, right: -2,
                      width: 18, height: 18, borderRadius: "50%",
                      background: "#fbbf24", border: "2px solid #fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Star size={9} color="#fff" fill="#fff" strokeWidth={0} />
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: isMobile ? 13 : 14, color: "#334155", fontWeight: 500, margin: 0, lineHeight: 1.65, fontStyle: "italic" }}>
                      When students are engaged, they don&apos;t just learn more{" "}— they believe in themselves more.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT — empty; background image shows through */}
              {!isMobile && <div style={{ minHeight: 240 }} />}
            </div>
          </div>

          {/* SparkVR helps students — persona cards */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              background: "transparent",
              marginTop: isMobile ? 40 : 80,
              padding: isMobile ? "36px 20px 32px" : isTablet ? "44px 32px 36px" : "52px 60px 44px",
            }}
          >
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>

              {/* 5 persona cards */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)",
                gap: isMobile ? 16 : 20,
              }}>
                {[
                  { icon: HelpCircle, color: "#7c3aed", bg: "#f3e8ff", border: "#ede9fe", title: "Ask more questions", desc: "Curiosity grows when concepts come to life." },
                  { icon: Users, color: "#059669", bg: "#dcfce7", border: "#bbf7d0", title: "Participate actively", desc: "Immersive experiences encourage every student to take part." },
                  { icon: Compass, color: "#d97706", bg: "#fef3c7", border: "#fde68a", title: "Explore confidently", desc: "Students learn by doing, experimenting and discovering in a safe environment." },
                  { icon: Smile, color: "#2563eb", bg: "#dbeafe", border: "#bfdbfe", title: "Stay engaged longer", desc: "Interactive learning keeps students motivated and mentally present." },
                  { icon: Award, color: "#db2777", bg: "#fce7f3", border: "#fbcfe8", title: "Build self-belief", desc: "Understanding leads to confidence, and confidence drives performance." },
                ].map(({ icon: Icon, color, bg, border, title, desc }, i) => (
                  <motion.div
                    key={title}
                    {...fadeUp(0.1 + i * 0.07)}
                    whileHover={{ y: -6, boxShadow: `0 20px 48px ${color}18` }}
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      borderRadius: 20,
                      border: `1.5px solid rgba(255,255,255,0.35)`,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      padding: isMobile ? "20px 16px 22px" : "28px 22px 30px",
                      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                      transition: "all 0.28s ease",
                      cursor: "default",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Top accent bar */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0,
                      height: 4, background: color, borderRadius: "20px 20px 0 0",
                    }} />

                    {/* Icon circle */}
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 8 }}
                      style={{
                        width: isMobile ? 52 : 64, height: isMobile ? 52 : 64, borderRadius: "50%",
                        background: bg, display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: isMobile ? 14 : 18,
                        boxShadow: `0 6px 20px ${color}22`,
                        border: `1.5px solid ${border}`,
                        marginTop: 6,
                      }}
                    >
                      <Icon size={isMobile ? 22 : 28} color={color} strokeWidth={1.8} />
                    </motion.div>

                    <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 8px", lineHeight: 1.3 }}>{title}</p>
                    <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom quote strip */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              background: "#ffffff",
              padding: isMobile ? "24px 20px" : isTablet ? "28px 32px" : "32px 60px",
            }}
          >
            <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 12 : 16 }}>
              <div style={{
                width: isMobile ? 42 : 50, height: isMobile ? 42 : 50, borderRadius: "50%", flexShrink: 0,
                background: "#fce7f3", display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(219,39,119,0.15)",
              }}>
                <Heart size={isMobile ? 20 : 24} color="#db2777" strokeWidth={1.8} />
              </div>
              <p style={{ fontSize: isMobile ? 14 : 16, color: "#0f172a", fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                Engaged students are confident students. Confident students{" "}
                <strong style={{ color: "#7c3aed" }}>achieve more.</strong>
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── ACADEMIC REINFORCEMENT ── */}
      <section style={{
        position: "relative",
        backgroundColor: "#f0f4ff",
        backgroundImage: isMobile ? "none" : "url('/learingbackground5.png')",
        backgroundSize: "auto 100%",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}>

        {/* Gradient: left solid, fades to image on right */}
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#f0f4ff 0%,#f0f4ff 30%,rgba(240,244,255,0.9)46%,rgba(240,244,255,0.3)62%,rgba(240,244,255,0)76%)"
              : "linear-gradient(to right,#f0f4ff 0%,#f0f4ff 34%,rgba(240,244,255,0.88)48%,rgba(240,244,255,0.2)62%,rgba(240,244,255,0)75%)",
          }} />
        )}

        <div style={{ position: "relative", zIndex: 1 }}>

          {/* Main content */}
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "52px 20px 0" : isTablet ? "60px 32px 0" : "68px 60px 0" }}>

            {/* Left column — max 50% on desktop */}
            <div style={{ maxWidth: isMobile ? "100%" : isTablet ? "58%" : "50%" }}>

              {/* Label */}
              <motion.div {...fadeUp(0)} style={{ marginBottom: isMobile ? 18 : 24 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#2563eb", letterSpacing: "0.22em", display: "block" }}>
                  ACADEMIC REINFORCEMENT
                </span>
                <div style={{ width: 36, height: 3, background: "#2563eb", marginTop: 7, borderRadius: 2 }} />
              </motion.div>

              {/* Heading */}
              <motion.h2
                {...fadeUp(0.08)}
                style={{
                  fontSize: isMobile ? "clamp(26px,7vw,36px)" : "clamp(28px,2.6vw,46px)",
                  fontWeight: 900, color: "#0f172a", lineHeight: 1.15,
                  margin: "0 0 20px",
                }}
              >
                Built to strengthen classroom learning
                <span style={{ color: "#7c3aed" }}>not replace</span> it.
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                {...fadeUp(0.12)}
                style={{ fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7, margin: "0 0 32px", fontWeight: 500, maxWidth: 440 }}
              >
                SparkVR complements your curriculum, reinforces key concepts, and helps students apply learning with greater clarity and confidence.
              </motion.p>

              {/* 2×2 feature grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 16 : 20,
                marginBottom: isMobile ? 40 : 0,
                maxWidth: isMobile ? "100%" : 380,
              }}>
                {[
                  { icon: BookOpen, color: "#7c3aed", bg: "#f3e8ff", title: "Supports Classroom Teaching", desc: "Aligned with your syllabus and learning objectives." },
                  { icon: RefreshCw, color: "#059669", bg: "#dcfce7", title: "Reinforces Concepts", desc: "Helps students revisit and strengthen key ideas." },
                  { icon: BookOpen, color: "#d97706", bg: "#fef3c7", title: "Aids Revision & Retention", desc: "Experiential recall improves long-term understanding." },
                  { icon: Target, color: "#2563eb", bg: "#dbeafe", title: "Prepares for Assessments", desc: "Clear concepts. Confident performance." },
                ].map(({ icon: Icon, color, bg, title, desc }, i) => (
                  <motion.div
                    key={title}
                    {...fadeUp(0.1 + i * 0.07)}
                    whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.1)" }}
                    style={{
                      background: "#ffffff",
                      borderRadius: 16,
                      border: "1px solid #e2e8f0",
                      borderLeft: `3px solid ${color}`,
                      padding: isMobile ? "16px 16px" : "20px 18px",
                      display: "flex", alignItems: "flex-start", gap: 14,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div style={{
                      width: isMobile ? 38 : 44, height: isMobile ? 38 : 44, borderRadius: "50%", flexShrink: 0,
                      background: bg, display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 18 : 20} color={color} strokeWidth={1.8} />
                    </div>
                    <div style={{ paddingTop: 2 }}>
                      <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 5px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.55, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

          {/* Mobile image strip */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
              style={{ width: "100%", height: 260, backgroundImage: "url('/learingbackground5.png')", backgroundSize: "cover", backgroundPosition: "center top" }}
            />
          )}

          {/* ── How SparkVR reinforces — 4-step flow bar ── */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              background: "#eef2f7",
              marginTop: isMobile ? 0 : 52,
              padding: isMobile ? "36px 20px 28px" : isTablet ? "44px 32px 36px" : "48px 60px 40px",
            }}
          >
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>



              {/* 4 steps */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr auto 1fr auto 1fr auto 1fr",
                gap: isMobile ? 20 : 0,
                alignItems: "center",
              }}>
                {[
                  { icon: Search, color: "#7c3aed", bg: "#f3e8ff", title: "Introduce", desc: "Teachers introduce the concept in class." },
                  { icon: Glasses, color: "#059669", bg: "#dcfce7", title: "Experience", desc: "Students explore and interact using SparkVR." },
                  { icon: Brain, color: "#d97706", bg: "#fef3c7", title: "Understand", desc: "Complex ideas become clear and memorable." },
                  { icon: TrendingUp, color: "#2563eb", bg: "#dbeafe", title: "Apply", desc: "Students apply knowledge in classwork and exams." },
                ].map(({ icon: Icon, color, bg, title, desc }, i) => (
                  <React.Fragment key={title}>
                    <motion.div
                      {...fadeUp(0.08 + i * 0.08)}
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: isMobile ? "0" : "0 16px" }}
                    >
                      <div style={{
                        width: isMobile ? 56 : 68, height: isMobile ? 56 : 68, borderRadius: "50%",
                        background: bg, display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: 14, boxShadow: `0 6px 20px ${color}22`,
                        border: `2px solid ${color}20`,
                      }}>
                        <Icon size={isMobile ? 24 : 28} color={color} strokeWidth={1.8} />
                      </div>
                      <p style={{ fontSize: isMobile ? 13 : 15, fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 10 : 12, color: "#64748b", margin: 0, lineHeight: 1.55, fontWeight: 500, maxWidth: 160 }}>{desc}</p>
                    </motion.div>
                    {i < 3 && !isMobile && (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" }}>
                        <ChevronRight size={28} color="#94a3b8" strokeWidth={2} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom strip */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              background: "#ffffff",
              padding: isMobile ? "24px 20px" : isTablet ? "28px 32px" : "32px 60px",
            }}
          >
            <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 12 : 16 }}>
              <div style={{
                width: isMobile ? 42 : 50, height: isMobile ? 42 : 50, borderRadius: "50%", flexShrink: 0,
                background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(124,58,237,0.15)",
              }}>
                <ShieldCheck size={isMobile ? 20 : 24} color="#7c3aed" strokeWidth={1.8} />
              </div>
              <p style={{ fontSize: isMobile ? 14 : 16, color: "#0f172a", fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                SparkVR reinforces learning at every step
                <strong style={{ color: "#ea580c" }}>from concept to confidence.</strong>
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── RESEARCH-ALIGNED LEARNING ── */}
      <section style={{
        position: "relative",
        backgroundColor: "#f0f4ff",
        backgroundImage: isMobile ? "none" : "url('/learingbackground6.png')",
        backgroundSize: "auto 100%",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#f0f4ff 0%,#f0f4ff 30%,rgba(240,244,255,0.9)46%,rgba(240,244,255,0.3)62%,rgba(240,244,255,0)76%)"
              : "linear-gradient(to right,#f0f4ff 0%,#f0f4ff 34%,rgba(240,244,255,0.88)48%,rgba(240,244,255,0.2)62%,rgba(240,244,255,0)75%)",
          }} />
        )}

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "52px 20px 40px" : isTablet ? "60px 32px 0" : "68px 60px 0" }}>
            <div style={{ maxWidth: isMobile ? "100%" : isTablet ? "58%" : "52%" }}>

              {/* Label */}
              <motion.div {...fadeUp(0)} style={{ marginBottom: isMobile ? 18 : 24 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#2563eb", letterSpacing: "0.22em", display: "block" }}>
                  RESEARCH-ALIGNED LEARNING
                </span>
                <div style={{ width: 36, height: 3, background: "#2563eb", marginTop: 7, borderRadius: 2 }} />
              </motion.div>

              {/* Heading */}
              <motion.h2 {...fadeUp(0.08)} style={{
                fontSize: isMobile ? "clamp(26px,7vw,36px)" : "clamp(28px,2.6vw,46px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.15, margin: "0 0 20px",
              }}>
                Grounded in research.<br />
                Designed for{" "}<span style={{ color: "#7c3aed" }}>real learning.</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p {...fadeUp(0.12)} style={{
                fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7,
                margin: "0 0 36px", fontWeight: 500, maxWidth: 440,
              }}>
                SparkVR is built on proven experiential learning principles that put active engagement at the center of understanding and long-term retention.
              </motion.p>

              {/* 4 research pillars */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: isMobile ? 16 : 20,
                marginBottom: isMobile ? 0 : 56,
              }}>
                {[
                  { icon: BookOpen, title: "Evidence-Informed", desc: "Based on established educational research and learning models." },
                  { icon: Users, title: "Student-Centered", desc: "Encourages exploration, interaction, and deeper concept connection." },
                  { icon: Brain, title: "Active Learning", desc: "Students engage, experience, and construct understanding." },
                  { icon: BarChart3, title: "Better Outcomes", desc: "Research shows active engagement improves retention and achievement." },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={title} {...fadeUp(0.1 + i * 0.07)}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                  >
                    <div style={{
                      width: isMobile ? 52 : 64, height: isMobile ? 52 : 64, borderRadius: "50%",
                      background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 12, boxShadow: "0 4px 16px rgba(124,58,237,0.12)",
                    }}>
                      <Icon size={isMobile ? 22 : 26} color="#7c3aed" strokeWidth={1.8} />
                    </div>
                    <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>{title}</p>
                    <p style={{ fontSize: isMobile ? 10 : 12, color: "#64748b", margin: 0, lineHeight: 1.55, fontWeight: 500 }}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile image strip */}
          {isMobile && (
            <div style={{ width: "100%", height: 240, backgroundImage: "url('/learingbackground6.png')", backgroundSize: "cover", backgroundPosition: "center top", margin: "36px 0 0" }} />
          )}

          {/* Aligned with leading learning frameworks */}
          <motion.div {...fadeUp(0.1)} style={{ background: "#ffffff", marginTop: isMobile ? 0 : 100 }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "36px 20px" : isTablet ? "44px 32px" : "48px 60px" }}>

              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: isMobile ? 20 : 32,
              }}>
                {[
                  { icon: RefreshCw, color: "#7c3aed", border: "#c4b5fd", title: "Kolb's Experiential Learning Cycle", desc: "Learning is a process where knowledge is created through transformation of experience." },
                  { icon: Brain, color: "#059669", border: "#6ee7b7", title: "Constructivist Learning Theory", desc: "Students build knowledge actively through experience and reflection." },
                  { icon: Users, color: "#d97706", border: "#fcd34d", title: "Social Learning Theory", desc: "Interaction and guided experiences enhance understanding." },
                  { icon: Target, color: "#2563eb", border: "#93c5fd", title: "Bloom's Taxonomy (Experiential Focus)", desc: "Supports higher-order thinking through application, analysis, and real-world connection." },
                ].map(({ icon: Icon, color, border, title, desc }, i) => (
                  <motion.div key={title} {...fadeUp(0.08 + i * 0.08)} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
                    <div style={{
                      width: isMobile ? 52 : 64, height: isMobile ? 52 : 64, borderRadius: "50%",
                      border: `2.5px solid ${border}`, background: "#ffffff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 4px 16px ${color}18`,
                    }}>
                      <Icon size={isMobile ? 22 : 26} color={color} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom research strip */}
          <motion.div {...fadeUp(0.1)} style={{ background: "#eef0ff" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "32px 20px" : isTablet ? "36px 32px" : "44px 60px", display: "flex", alignItems: "center", gap: isMobile ? 16 : 32 }}>
              {!isMobile && (
                <div style={{
                  width: 80, height: 80, borderRadius: "50%", flexShrink: 0,
                  background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 6px 20px rgba(124,58,237,0.15)",
                }}>
                  <Search size={34} color="#7c3aed" strokeWidth={1.6} />
                </div>
              )}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: isMobile ? 13 : 15, color: "#475569", fontWeight: 500, margin: "0 0 8px", lineHeight: 1.7 }}>
                  Research in experiential learning frameworks consistently shows that active engagement improves retention, deeper understanding, and academic performance.
                </p>
                <p style={{ fontSize: isMobile ? 14 : 16, color: "#2563eb", fontWeight: 800, margin: 0 }}>
                  SparkVR applies this principle responsibly — with the classroom at the center.
                </p>
              </div>
              {!isMobile && (
                <div style={{
                  width: 80, height: 80, borderRadius: "50%", flexShrink: 0,
                  background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 6px 20px rgba(124,58,237,0.15)",
                }}>
                  <GraduationCap size={34} color="#7c3aed" strokeWidth={1.6} />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE THE IMPACT ── */}
      <section style={{
        position: "relative",
        backgroundColor: "#f0f4ff",
        backgroundImage: isMobile ? "none" : "url('/learingbackground7.png')",
        backgroundSize: "auto 100%",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#f0f4ff 0%,#f0f4ff 30%,rgba(240,244,255,0.9)46%,rgba(240,244,255,0.3)62%,rgba(240,244,255,0)76%)"
              : "linear-gradient(to right,#f0f4ff 0%,#f0f4ff 34%,rgba(240,244,255,0.88)48%,rgba(240,244,255,0.2)62%,rgba(240,244,255,0)75%)",
          }} />
        )}

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "52px 20px 40px" : isTablet ? "60px 32px 60px" : "68px 60px 68px" }}>
            <div style={{ maxWidth: isMobile ? "100%" : isTablet ? "55%" : "44%" }}>

              {/* Label */}
              <motion.div {...fadeUp(0)} style={{ marginBottom: isMobile ? 18 : 24 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#2563eb", letterSpacing: "0.22em", display: "block" }}>
                  EXPERIENCE THE IMPACT
                </span>
                <div style={{ width: 36, height: 3, background: "#2563eb", marginTop: 7, borderRadius: 2 }} />
              </motion.div>

              {/* Heading */}
              <motion.h2 {...fadeUp(0.08)} style={{
                fontSize: isMobile ? "clamp(28px,8vw,38px)" : "clamp(30px,2.8vw,50px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.12, margin: "0 0 20px",
              }}>
                See the difference{" "}
                <span style={{ color: "#7c3aed" }}>experiential learning</span>{" "}
                can make.
              </motion.h2>

              {/* Subtitle */}
              <motion.p {...fadeUp(0.12)} style={{
                fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7,
                margin: "0 0 32px", fontWeight: 500, maxWidth: 400,
              }}>
                SparkVR brings concepts to life, boosts engagement, and builds academic confidence — all within your classroom.
              </motion.p>

              {/* Buttons */}
              <motion.div {...fadeUp(0.16)} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(29,78,216,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                      borderRadius: 40, padding: "14px 32px",
                      color: "#ffffff", fontWeight: 700,
                      letterSpacing: "0.14em",
                      boxShadow: "0 10px 28px rgba(29,78,216,0.3)", cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <Calendar size={16} strokeWidth={2.5} />
                    Schedule a Guided Demo <ArrowRight size={16} strokeWidth={2.5} />
                  </motion.div>
                </Link>
                <Link href="/curriculum" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      background: "#ffffff", borderRadius: 40, padding: "14px 32px",
                      color: "#2563eb", fontWeight: 700,
                      letterSpacing: "0.14em",
                      border: "2px solid #2563eb",
                      cursor: "pointer",
                    }}
                  >
                    <BookOpen size={16} color="#2563eb" strokeWidth={2.5} />
                    Explore Learning Modules <ChevronRight size={16} strokeWidth={2.5} />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Trust line */}
              <motion.div {...fadeUp(0.2)} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <ShieldCheck size={15} color="#64748b" strokeWidth={2} />
                <p style={{ fontSize: isMobile ? 12 : 13, color: "#64748b", fontWeight: 500, margin: 0 }}>
                  Designed for schools. Backed by research. Built for real learning.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Mobile image strip */}
          {isMobile && (
            <div style={{ width: "100%", height: 240, backgroundImage: "url('/learingbackground7.png')", backgroundSize: "cover", backgroundPosition: "center top" }} />
          )}

          {/* 4 items white bar */}
          <motion.div {...fadeUp(0.1)} style={{
            background: "#ffffff",
            padding: isMobile ? "36px 20px" : isTablet ? "44px 32px" : "48px 60px",
            borderTop: "1px solid #f1f5f9",
          }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: isMobile ? 20 : 36,
              }}>
                {[
                  { icon: Lightbulb, color: "#7c3aed", bg: "#f3e8ff", title: "Transform Understanding", desc: "Make abstract concepts clear and memorable." },
                  { icon: Users, color: "#059669", bg: "#dcfce7", title: "Increase Engagement", desc: "Keep students curious, active, and involved." },
                  { icon: TrendingUp, color: "#d97706", bg: "#fef3c7", title: "Improve Outcomes", desc: "Better understanding leads to better performance." },
                  { icon: ShieldCheck, color: "#2563eb", bg: "#dbeafe", title: "Build Lasting Confidence", desc: "Confident learners achieve more." },
                ].map(({ icon: Icon, color, bg, title, desc }, i) => (
                  <motion.div key={title} {...fadeUp(0.08 + i * 0.08)} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{
                      width: isMobile ? 44 : 56, height: isMobile ? 44 : 56, borderRadius: "50%",
                      background: bg, display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, boxShadow: `0 4px 16px ${color}18`,
                    }}>
                      <Icon size={isMobile ? 20 : 24} color={color} strokeWidth={1.8} />
                    </div>
                    <div style={{ paddingTop: 4 }}>
                      <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 5px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.55, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>


    </main>
  );
}
