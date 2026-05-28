"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3, Brain, Target, Users, CheckCircle2,
  GraduationCap, Star, TrendingUp, BookOpen,
  Lightbulb, Eye, Layers, ArrowRight, ChevronRight,
  ShieldCheck, Award
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
    desc: "Guided exploration builds deep conceptual clarity — not surface-level knowledge.",
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
        backgroundImage: isMobile ? "none" : "url('/background1.png')",
        backgroundSize: "auto 100%",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right, #ffffff 0%, #ffffff 32%, rgba(255,255,255,0.55) 52%, transparent 72%)"
              : "linear-gradient(to right, #ffffff 0%, #ffffff 28%, rgba(255,255,255,0.75) 44%, rgba(255,255,255,0.08) 62%, transparent 78%)",
          }} />
        )}

        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1400, margin: "0 auto",
          padding: isMobile ? "110px 20px 60px" : isTablet ? "140px 32px 120px" : "140px 60px 160px",
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex", alignItems: "center",
        }}>
          <div style={{ width: isMobile ? "100%" : isTablet ? "58%" : "50%" }}>

            <motion.div {...fadeLeft(0.05)} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{ width: 32, height: 2.5, background: "#2563eb", borderRadius: 4 }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: "#2563eb", letterSpacing: "0.2em" }}>LEARNING OUTCOME</span>
            </motion.div>

            <motion.h1 {...fadeLeft(0.12)} style={{
              fontSize: isMobile ? "clamp(30px,8vw,44px)" : isTablet ? "clamp(34px,4.5vw,52px)" : "clamp(40px,3.8vw,64px)",
              fontWeight: 900, color: "#001a4d", lineHeight: 1.08,
              letterSpacing: "-0.03em", margin: "0 0 20px",
            }}>
              Real results from{" "}
              <span style={{ color: "#2563eb" }}>real classrooms.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} style={{
              fontSize: isMobile ? 14 : 16, color: "#475569",
              lineHeight: 1.7, fontWeight: 500, margin: "0 0 36px", maxWidth: 480,
            }}>
              SparkVR is built to deliver measurable academic impact. Every module is designed to improve understanding, strengthen retention and boost exam performance.
            </motion.p>

            <motion.div {...fadeUp(0.28)} style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2, boxShadow: "0 16px 36px rgba(37,99,235,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#2563eb", borderRadius: 30, padding: "14px 30px",
                    color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.25)", cursor: "pointer",
                  }}
                >
                  Book a Free Demo <ArrowRight size={16} strokeWidth={2.5} />
                </motion.div>
              </Link>
              <Link href="/curriculum" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "transparent", borderRadius: 30, padding: "14px 30px",
                    color: "#2563eb", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
                    border: "1.5px solid rgba(37,99,235,0.25)", cursor: "pointer",
                  }}
                >
                  View Curriculum <ChevronRight size={16} strokeWidth={2.5} />
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div {...fadeUp(0.36)} style={{
              display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: isMobile ? 20 : 32,
              marginTop: 44, width: "fit-content",
            }}>
              {[
                { val: "500+", label: "Schools" },
                { val: "430+", label: "Modules" },
                { val: "82%", label: "Avg. Improvement" },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontSize: isMobile ? 26 : 32, fontWeight: 900, color: "#001a4d", margin: 0, lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontSize: 12, color: "#64748b", fontWeight: 600, margin: "4px 0 0" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <section style={{ background: "#f8faff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "56px 20px" : isTablet ? "64px 32px" : "72px 60px" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: isMobile ? 40 : 56 }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#2563eb", letterSpacing: "0.2em", display: "block", marginBottom: 14 }}>
              HOW IT WORKS
            </span>
            <h2 style={{ fontSize: isMobile ? "clamp(24px,7vw,34px)" : "clamp(28px,3vw,44px)", fontWeight: 900, color: "#001a4d", margin: "0 0 16px" }}>
              The SparkVR{" "}
              <span className="text-gradient-primary">learning loop.</span>
            </h2>
            <p style={{ fontSize: isMobile ? 14 : 15, color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.6, fontWeight: 500 }}>
              Every session is designed to take students from confusion to clarity through a structured four-step learning experience.
            </p>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? 16 : 24,
          }}>
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 + i * 0.08)}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
                style={{
                  background: "#ffffff", borderRadius: 24, padding: isMobile ? "24px 18px" : "32px 28px",
                  border: "1px solid rgba(0,82,204,0.07)",
                  boxShadow: "0 4px 20px rgba(0,26,77,0.05)",
                  display: "flex", flexDirection: "column", gap: 14, cursor: "default",
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 16, background: p.color + "12", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p.icon size={24} color={p.color} strokeWidth={1.8} />
                </div>
                <div>
                  <p style={{ fontSize: isMobile ? 15 : 17, fontWeight: 900, color: "#001a4d", margin: "0 0 8px" }}>{p.title}</p>
                  <p style={{ fontSize: isMobile ? 12 : 13, color: "#64748b", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{p.desc}</p>
                </div>
                <div style={{ height: 3, width: 32, background: p.color, borderRadius: 2, marginTop: "auto" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 OUTCOME CARDS ── */}
      <section style={{ background: "#ffffff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "56px 20px" : isTablet ? "64px 32px" : "72px 60px" }}>

          <motion.div {...fadeUp(0)} style={{ marginBottom: isMobile ? 40 : 56 }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#2563eb", letterSpacing: "0.2em", display: "block", marginBottom: 14 }}>
              MEASURABLE IMPACT
            </span>
            <h2 style={{ fontSize: isMobile ? "clamp(24px,7vw,34px)" : "clamp(28px,3vw,44px)", fontWeight: 900, color: "#001a4d", margin: "0 0 14px" }}>
              What SparkVR{" "}
              <span style={{ color: "#2563eb" }}>delivers.</span>
            </h2>
            <p style={{ fontSize: isMobile ? 14 : 15, color: "#64748b", maxWidth: 520, margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              Data from 500+ schools shows consistent improvement across every key academic metric.
            </p>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: isMobile ? 20 : 28,
          }}>
            {OUTCOMES.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.06 + i * 0.07)}
                whileHover={{ y: -5, boxShadow: "0 24px 56px rgba(0,26,77,0.1)" }}
                style={{
                  background: "#f8faff", borderRadius: 24, padding: isMobile ? "24px 20px" : "32px 28px",
                  border: "1px solid rgba(0,82,204,0.06)",
                  display: "flex", flexDirection: "column", gap: 16, cursor: "default",
                  boxShadow: "0 4px 18px rgba(0,26,77,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={24} color={item.color} strokeWidth={1.8} />
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 28, fontWeight: 900, color: item.color, margin: 0, lineHeight: 1 }}>{item.stat}</p>
                    <p style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600, margin: "3px 0 0" }}>{item.statLabel}</p>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: isMobile ? 15 : 16, fontWeight: 900, color: "#001a4d", margin: "0 0 8px" }}>{item.title}</p>
                  <p style={{ fontSize: isMobile ? 13 : 13, color: "#64748b", margin: 0, lineHeight: 1.65, fontWeight: 500 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRADE-WISE OUTCOMES ── */}
      <section style={{ background: "#f8faff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "56px 20px" : isTablet ? "64px 32px" : "72px 60px" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: isMobile ? 40 : 56 }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#2563eb", letterSpacing: "0.2em", display: "block", marginBottom: 14 }}>
              GRADE-WISE IMPACT
            </span>
            <h2 style={{ fontSize: isMobile ? "clamp(24px,7vw,34px)" : "clamp(28px,3vw,44px)", fontWeight: 900, color: "#001a4d", margin: 0 }}>
              Outcomes for every{" "}
              <span style={{ color: "#2563eb" }}>grade level.</span>
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 20 : 28,
          }}>
            {GRADE_OUTCOMES.map((g, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 + i * 0.1)}
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
                style={{
                  background: "#ffffff", borderRadius: 24,
                  border: "1px solid rgba(0,82,204,0.07)",
                  overflow: "hidden",
                  boxShadow: "0 4px 18px rgba(0,26,77,0.05)",
                  cursor: "default",
                }}
              >
                <div style={{ background: g.color, padding: isMobile ? "20px 22px" : "24px 28px" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.75)", margin: "0 0 4px", letterSpacing: "0.08em" }}>{g.range}</p>
                  <p style={{ fontSize: isMobile ? 18 : 20, fontWeight: 900, color: "#ffffff", margin: 0 }}>{g.focus}</p>
                </div>
                <div style={{ padding: isMobile ? "20px 22px" : "24px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {g.outcomes.map((outcome, oi) => (
                    <div key={oi} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: g.color + "15", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <CheckCircle2 size={12} color={g.color} strokeWidth={2.5} />
                      </div>
                      <p style={{ fontSize: isMobile ? 13 : 14, color: "#475569", fontWeight: 500, margin: 0, lineHeight: 1.55 }}>{outcome}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ── */}
      <section style={{ background: "#ffffff", borderTop: "1px solid rgba(0,82,204,0.06)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "48px 20px" : isTablet ? "56px 32px" : "64px 60px" }}>
          <div style={{
            display: "flex", flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 32 : 48, alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
          }}>
            <div style={{ maxWidth: 560 }}>
              <motion.div {...fadeLeft(0.05)} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <Award size={20} color="#2563eb" strokeWidth={2} />
                <span style={{ fontSize: 12, fontWeight: 800, color: "#2563eb", letterSpacing: "0.18em" }}>TRUSTED BY SCHOOLS</span>
              </motion.div>
              <motion.h2 {...fadeLeft(0.12)} style={{
                fontSize: isMobile ? "clamp(22px,6vw,32px)" : "clamp(26px,2.5vw,40px)",
                fontWeight: 900, color: "#001a4d", lineHeight: 1.15, margin: "0 0 16px",
              }}>
                Proven results in{" "}
                <span style={{ color: "#2563eb" }}>500+ schools.</span>
              </motion.h2>
              <motion.p {...fadeUp(0.2)} style={{ fontSize: isMobile ? 14 : 15, color: "#64748b", lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
                SparkVR is trusted by forward-thinking educators across India to deliver real, measurable learning outcomes in every classroom.
              </motion.p>
            </div>

            <motion.div {...fadeUp(0.25)} style={{
              display: "flex", flexDirection: "column", gap: 14,
              flexShrink: 0, width: isMobile ? "100%" : "auto",
            }}>
              {[
                { icon: ShieldCheck, label: "Curriculum Aligned", sub: "NCERT mapped modules" },
                { icon: GraduationCap, label: "Teacher Guided", sub: "Structured delivery" },
                { icon: BarChart3, label: "Progress Trackable", sub: "Real-time insights" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.3 + i * 0.07)}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: "#eff6ff", border: "1px solid rgba(37,99,235,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={20} color="#2563eb" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", margin: 0 }}>{item.label}</p>
                    <p style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500, margin: 0 }}>{item.sub}</p>
                  </div>
                </motion.div>
              ))}

              <Link href="/contact" style={{ textDecoration: "none", marginTop: 8 }}>
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 14px 32px rgba(37,99,235,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#2563eb", borderRadius: 30, padding: "14px 28px",
                    color: "#fff", fontSize: 13, fontWeight: 700,
                    boxShadow: "0 6px 20px rgba(37,99,235,0.25)", cursor: "pointer",
                  }}
                >
                  Schedule a Demo <ArrowRight size={16} strokeWidth={2.5} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
