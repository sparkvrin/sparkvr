"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical, Calculator, Landmark, Globe, Settings,
  BookOpen, Target, Users, CheckCircle2, ArrowRight,
  GraduationCap, Layers, ShieldCheck, ChevronRight,
  BarChart3, Calendar, School, MonitorPlay, Lightbulb,
  Brain, BookMarked, Glasses,
  Eye, Headphones, Hand, Search, FileText, PenLine, Star
} from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-80px" },
  transition: { delay, duration, ease: EASE },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.8, ease: EASE },
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

const MODULE_FEATURES = [
  { icon: MonitorPlay, title: "Supports",   sub: "classroom teaching"  },
  { icon: Lightbulb,   title: "Clarifies",  sub: "complex topics"      },
  { icon: Target,      title: "Reinforces", sub: "exam relevance"      },
  { icon: Brain,       title: "Encourages", sub: "conceptual mastery"  },
];

const FLOW_STEPS = [
  { icon: School,     title: "Class",               sub: "Select your class"     },
  { icon: BookOpen,   title: "Subject",             sub: "Choose a subject"      },
  { icon: BookMarked, title: "Chapter",             sub: "Pick a chapter"        },
  { icon: Lightbulb,  title: "Concept",             sub: "Explore the concept"   },
  { icon: Glasses,    title: "Immersive Experience", sub: "Learn by experiencing" },
];

const SUBJECTS = [
  {
    icon: FlaskConical, color: "#1d4ed8", bg: "#eff6ff",
    title: "Science",
    desc: "Explore physics, chemistry and biology through 3D simulations and interactive models. Students visualise what textbooks can only describe.",
    modules: "120+ Modules", grades: "Grades 6–12",
    topics: ["Atoms & Molecules", "Human Anatomy", "Cell Structure", "Forces & Motion", "Ecosystems"],
  },
  {
    icon: Calculator, color: "#059669", bg: "#ecfdf5",
    title: "Mathematics",
    desc: "Visualise abstract concepts like geometry, algebra and calculus in three dimensions. Make complex formulas observable and intuitive.",
    modules: "100+ Modules", grades: "Grades 6–12",
    topics: ["3D Geometry", "Trigonometry", "Coordinate Systems", "Probability", "Mensuration"],
  },
  {
    icon: Landmark, color: "#7c3aed", bg: "#f5f3ff",
    title: "History & Civics",
    desc: "Walk through historical timelines and civilisations. Experience events that shaped the world through immersive walkthroughs.",
    modules: "80+ Modules", grades: "Grades 6–12",
    topics: ["Ancient Civilisations", "Indian Freedom Struggle", "World Wars", "Constitutional Values", "Monuments"],
  },
  {
    icon: Globe, color: "#d97706", bg: "#fffbeb",
    title: "Geography",
    desc: "Explore Earth's layers, landforms, climate zones and ecosystems through interactive 3D maps and models.",
    modules: "90+ Modules", grades: "Grades 6–12",
    topics: ["Layers of Earth", "Weather & Climate", "Landforms", "Natural Disasters", "Solar System"],
  },
  {
    icon: Settings, color: "#db2777", bg: "#fdf2f8",
    title: "STEM Integration",
    desc: "Bridge science, technology, engineering and mathematics through project-based learning in virtual labs.",
    modules: "110+ Modules", grades: "Grades 6–12",
    topics: ["Robotics", "Circuit Design", "Bridges & Structures", "Environmental Engineering", "Coding Concepts"],
  },
];

const GRADES = [
  { range: "Grades 6–7",  focus: "Foundation Building", desc: "Basic concepts in science and maths made visual and concrete. Build curiosity and foundational understanding.", count: "80+ modules"  },
  { range: "Grades 8–9",  focus: "Conceptual Depth",    desc: "Deeper exploration of complex topics. Bridge the gap between abstract theory and real-world application.",   count: "120+ modules" },
  { range: "Grades 10–12", focus: "Exam Ready",         desc: "Curriculum-aligned modules mapped directly to board exam topics. Strengthen clarity under exam pressure.",    count: "230+ modules" },
];

const FEATURES = [
  { icon: BookOpen,      title: "NCERT Aligned",     desc: "Every module mapped chapter by chapter to national curriculum standards." },
  { icon: GraduationCap, title: "Teacher Led",        desc: "Designed for structured classroom delivery with guided lesson plans." },
  { icon: Layers,        title: "Graded Progression", desc: "Content organised by grade and difficulty for smooth learning journeys." },
  { icon: Target,        title: "Concept Specific",   desc: "Each module targets one core concept for maximum clarity and retention." },
  { icon: ShieldCheck,   title: "Assessment Ready",   desc: "Includes concept checks, quizzes and outcome measurements per module." },
  { icon: BarChart3,     title: "Progress Trackable", desc: "Teachers can monitor engagement and understanding for every session." },
];

const LEARNING_TYPES = [
  { icon: Eye,        color: "#2563eb", bg: "#eff6ff", title: "Visual Learning",       desc: "3D models, animations and visualizations bring abstract concepts to life." },
  { icon: Headphones, color: "#7c3aed", bg: "#f5f3ff", title: "Auditory Learning",     desc: "Clear explanations and guided narration reinforce understanding." },
  { icon: Hand,       color: "#059669", bg: "#ecfdf5", title: "Experiential Learning", desc: "Hands-on interaction and exploration deepen engagement and curiosity." },
  { icon: Brain,      color: "#d97706", bg: "#fffbeb", title: "Deeper Understanding",  desc: "Stronger connections lead to long-term retention and concept mastery." },
];

const ENGAGE_STEPS = [
  { icon: Users,    color: "#2563eb", bg: "#eff6ff", title: "Engage",   desc: "Captures attention from the first moment." },
  { icon: Search,   color: "#7c3aed", bg: "#f5f3ff", title: "Explore",  desc: "Students interact, observe and discover." },
  { icon: FileText, color: "#1d4ed8", bg: "#e0f2fe", title: "Explain",  desc: "Complex ideas made simple." },
  { icon: PenLine,  color: "#d97706", bg: "#fffbeb", title: "Apply",    desc: "Students practice and apply knowledge." },
  { icon: Brain,    color: "#059669", bg: "#ecfdf5", title: "Remember", desc: "Better retention through experience and repetition." },
];

const BENEFITS = [
  { icon: Target,    color: "#2563eb", bg: "#eff6ff", title: "Improves Focus",       desc: "Immersive lessons keep students engaged and attentive." },
  { icon: BarChart3, color: "#059669", bg: "#ecfdf5", title: "Boosts Participation", desc: "Interactive experiences encourage active involvement." },
  { icon: Brain,     color: "#7c3aed", bg: "#f5f3ff", title: "Enhances Retention",   desc: "Experiential learning improves long-term memory and recall." },
  { icon: Users,     color: "#d97706", bg: "#fffbeb", title: "Builds Confidence",    desc: "Understanding concepts deeply leads to greater academic confidence." },
  { icon: Star,      color: "#0891b2", bg: "#ecfeff", title: "Encourages Curiosity", desc: "Exploration-driven learning sparks curiosity and a love for learning." },
];

export default function CurriculumPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'VAG Rounded', sans-serif" }}>

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO  (full-bleed background)
      ══════════════════════════════════════════ */}
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

        {/* White gradient overlay — left side readable panel */}
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right, #ffffff 0%, #ffffff 32%, rgba(255,255,255,0.55) 52%, transparent 72%)"
              : "linear-gradient(to right, #ffffff 0%, #ffffff 28%, rgba(255,255,255,0.75) 44%, rgba(255,255,255,0.08) 62%, transparent 78%)",
          }} />
        )}

        {/* ── Content ── */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1400, margin: "0 auto",
          padding: isMobile
            ? "100px 24px 0"
            : isTablet
              ? "140px 44px 180px"
              : "140px 72px 220px",
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex",
          alignItems: "center",
        }}>

        {/* ── Left Panel ── */}
        <div style={{
          width: isMobile ? "100%" : isTablet ? "55%" : "48%",
          paddingBottom: isMobile ? 0 : 0,
        }}>
          <div style={{ width: "100%" }}>

            {/* Heading */}
            <motion.h1 {...fadeLeft(0.12)} style={{
              fontSize: isMobile
                ? "clamp(30px,8vw,44px)"
                : isTablet
                  ? "clamp(34px,4.5vw,50px)"
                  : "clamp(40px,3.8vw,62px)",
              fontWeight: 900, color: "#001a4d", lineHeight: 1.08,
              letterSpacing: "-0.03em", margin: "0 0 20px",
            }}>
              Built{" "}
              <span style={{ color: "#2563eb" }}>chapter</span>
              {" "}by chapter.<br />
              Designed lesson{" "}
              <span style={{ color: "#2563eb" }}>by lesson.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.2)} style={{
              fontSize: isMobile ? 14 : 16, color: "#475569",
              lineHeight: 1.7, fontWeight: 500, margin: "0 0 28px",
              maxWidth: 460,
            }}>
              SparkVR covers curriculum-aligned immersive modules
              mapped to national education standards.
            </motion.p>

            {/* Each module label */}
            <motion.p {...fadeUp(0.26)} style={{
              fontSize: isMobile ? 14 : 16, fontWeight: 900,
              color: "#001a4d", margin: "0 0 18px",
            }}>
              Each module:
            </motion.p>

            {/* 2×2 feature grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: isMobile ? "14px 10px" : "20px 24px",
              marginBottom: 30,
            }}>
              {MODULE_FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.3 + i * 0.07)}
                  whileHover={{ scale: 1.04, y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 13, cursor: "default" }}
                >
                  <div style={{
                    width: isMobile ? 40 : 48, height: isMobile ? 40 : 48,
                    borderRadius: "50%", background: "#eff6ff",
                    border: "1.5px solid rgba(0,82,204,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#0052cc", flexShrink: 0,
                  }}>
                    <f.icon size={isMobile ? 18 : 22} strokeWidth={2} />
                  </div>
                  <div>
                    <p style={{ fontSize: isMobile ? 13 : 15, fontWeight: 800, color: "#001a4d", margin: "0 0 2px" }}>{f.title}</p>
                    <p style={{ fontSize: isMobile ? 11 : 13, color: "#64748b", fontWeight: 500, margin: 0 }}>{f.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info card — white with navy icon */}
            <motion.div
              {...fadeUp(0.52)}
              whileHover={{ scale: 1.02, y: -4, boxShadow: "0 20px 48px rgba(0,26,77,0.12)" }}
              style={{
                display: "flex", alignItems: "center", gap: 18,
                background: "#ffffff",
                border: "1.5px solid rgba(0,82,204,0.12)",
                borderRadius: 20,
                padding: isMobile ? "16px 20px" : "22px 28px",
                cursor: "default",
                boxShadow: "0 4px 20px rgba(0,26,77,0.06)",
              }}
            >
              <div style={{
                width: isMobile ? 44 : 56, height: isMobile ? 44 : 56,
                borderRadius: "50%", background: "#001a4d",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#ffffff", flexShrink: 0,
              }}>
                <GraduationCap size={isMobile ? 22 : 28} strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontSize: isMobile ? 14 : 16, fontWeight: 900, color: "#001a4d", margin: "0 0 4px" }}>
                  This is not video playback.
                </p>
                <p style={{ fontSize: isMobile ? 12 : 14, fontWeight: 600, color: "#2563eb", margin: 0 }}>
                  It is interactive guided learning.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
        </div>

        {/* Mobile: image strip below text */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "100%",
              height: 280,
              backgroundImage: "url('/background1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
        )}

        {/* ── Flow steps card — overlaid at bottom of hero ── */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            zIndex: 4,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(16px)",
            borderRadius: isMobile ? 0 : "28px 28px 0 0",
            boxShadow: "0 -8px 40px rgba(0,26,77,0.08)",
            padding: isMobile
              ? "24px 20px 28px"
              : isTablet
                ? "28px 44px 32px"
                : "28px 72px 36px",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              {FLOW_STEPS.map((step, i) => (
                <React.Fragment key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.6, ease: EASE }}
                    whileHover={{ scale: 1.08, y: -5 }}
                    style={{
                      display: "flex",
                      flexDirection: isMobile ? "row" : "column",
                      alignItems: "center",
                      textAlign: isMobile ? "left" : "center",
                      gap: isMobile ? 14 : 12,
                      flex: isMobile ? "none" : 1,
                      padding: isMobile ? "10px 0" : "0 6px",
                      cursor: "default",
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.07, 1], boxShadow: ["0 4px 14px rgba(0,82,204,0.1)", "0 8px 28px rgba(0,82,204,0.22)", "0 4px 14px rgba(0,82,204,0.1)"] }}
                      transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      whileHover={{ scale: 1.18, boxShadow: "0 12px 36px rgba(0,82,204,0.28)", background: "#dbeafe" }}
                      style={{
                        width: isMobile ? 52 : 68, height: isMobile ? 52 : 68,
                        borderRadius: "50%",
                        background: "#eff6ff",
                        border: "1.5px solid rgba(0,82,204,0.18)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#0052cc", flexShrink: 0,
                        boxShadow: "0 4px 14px rgba(0,82,204,0.1)",
                      }}
                    >
                      <step.icon size={isMobile ? 22 : 30} strokeWidth={1.6} />
                    </motion.div>
                    <div>
                      <p style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: "#0052cc", margin: "0 0 4px" }}>{step.title}</p>
                      <p style={{ fontSize: isMobile ? 12 : 13, color: "#64748b", fontWeight: 500, margin: 0 }}>{step.sub}</p>
                    </div>
                  </motion.div>

                  {i < FLOW_STEPS.length - 1 && (
                    isMobile ? (
                      <div style={{ paddingLeft: 26, paddingBottom: 2 }}>
                        <div style={{ height: 18, borderLeft: "2px dashed rgba(0,82,204,0.28)", marginLeft: 26 }} />
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0, paddingBottom: 30 }}>
                        <div style={{ width: 24, height: 0, borderTop: "2px dashed rgba(0,82,204,0.35)" }} />
                        <div style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid rgba(0,82,204,0.4)" }} />
                      </div>
                    )
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — HOW STUDENTS LEARN BEST
      ══════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: isMobile ? "auto" : "100vh",
        overflow: "hidden",
        backgroundImage: isMobile ? "none" : "url('/backgroun2.png')",
        backgroundSize: "auto 100%",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
      }}>

        {/* White gradient overlay */}
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right, #ffffff 0%, #ffffff 32%, rgba(255,255,255,0.55) 52%, transparent 72%)"
              : "linear-gradient(to right, #ffffff 0%, #ffffff 28%, rgba(255,255,255,0.75) 44%, rgba(255,255,255,0.08) 62%, transparent 78%)",
          }} />
        )}

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1400, margin: "0 auto",
          padding: isMobile ? "60px 24px 0" : isTablet ? "80px 44px 180px" : "140px 72px 220px",
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex", alignItems: "center",
        }}>
          <div style={{ width: isMobile ? "100%" : isTablet ? "55%" : "48%" }}>

            {/* Label */}
            <motion.div {...fadeLeft(0.05)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
              <div style={{ width: 32, height: 2.5, background: "#0052cc", borderRadius: 4 }} />
              <span style={{ fontSize: isMobile ? 10 : 11, fontWeight: 800, color: "#0052cc", letterSpacing: "0.2em" }}>HOW STUDENTS LEARN BEST</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 {...fadeLeft(0.12)} style={{
              fontSize: isMobile ? "clamp(28px,8vw,40px)" : isTablet ? "clamp(32px,4.5vw,48px)" : "clamp(36px,3.8vw,56px)",
              fontWeight: 900, color: "#001a4d", lineHeight: 1.08,
              letterSpacing: "-0.03em", margin: "0 0 20px",
            }}>
              Designed for how<br />students{" "}
              <span style={{ color: "#2563eb" }}>learn best.</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.2)} style={{
              fontSize: isMobile ? 14 : 15, color: "#475569",
              lineHeight: 1.7, fontWeight: 500, margin: "0 0 30px", maxWidth: 460,
            }}>
              SparkVR combines the science of learning with immersive technology to help students understand, remember and apply concepts with confidence.
            </motion.p>

            {/* 4 learning types */}
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 18 }}>
              {LEARNING_TYPES.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.28 + i * 0.07)}
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 16, cursor: "default" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    style={{
                      width: isMobile ? 44 : 50, height: isMobile ? 44 : 50,
                      borderRadius: "50%", background: item.bg,
                      border: `1.5px solid ${item.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: item.color, flexShrink: 0,
                      boxShadow: `0 4px 14px ${item.color}20`,
                    }}
                  >
                    <item.icon size={isMobile ? 20 : 23} strokeWidth={1.8} />
                  </motion.div>
                  <div style={{ borderBottom: "1px solid rgba(0,82,204,0.07)", paddingBottom: isMobile ? 10 : 14, flex: 1 }}>
                    <p style={{ fontSize: isMobile ? 14 : 15, fontWeight: 900, color: "#001a4d", margin: "0 0 3px" }}>{item.title}</p>
                    <p style={{ fontSize: isMobile ? 12 : 13, color: "#64748b", fontWeight: 500, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Floating cards — right side (Engage/Explore/Explain/Apply/Remember) */}
        {!isMobile && (
          <div style={{
            position: "absolute",
            right: isTablet ? "2%" : "3%",
            top: "50%",
            transform: "translateY(-55%)",
            zIndex: 3,
            display: "flex", flexDirection: "column", gap: 10,
          }}>
            {ENGAGE_STEPS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: EASE }}
                whileHover={{ scale: 1.05, x: -8, boxShadow: "0 14px 36px rgba(0,26,77,0.16)" }}
                style={{
                  background: "rgba(255,255,255,0.94)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 14,
                  padding: "10px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                  boxShadow: "0 4px 18px rgba(0,26,77,0.1)",
                  minWidth: isMobile ? 160 : 220,
                  cursor: "default",
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.07, 1] }}
                  transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: item.bg,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}
                >
                  <item.icon size={17} color={item.color} strokeWidth={2} />
                </motion.div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 13, color: "#001a4d", margin: 0 }}>{item.title}</p>
                  <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.35 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom quote card */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0, zIndex: 4,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(16px)",
            borderRadius: isMobile ? 0 : "28px 28px 0 0",
            boxShadow: "0 -8px 40px rgba(0,26,77,0.08)",
            padding: isMobile ? "18px 20px 22px" : isTablet ? "20px 44px" : "22px 72px",
            display: "flex", alignItems: "center", gap: 18,
          }}
        >
          <div style={{
            width: isMobile ? 44 : 54, height: isMobile ? 44 : 54,
            borderRadius: "50%", background: "#001a4d",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <GraduationCap size={isMobile ? 20 : 26} color="white" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontSize: isMobile ? 13 : 15, fontWeight: 800, color: "#0052cc", margin: "0 0 3px", lineHeight: 1.4 }}>
              When students see it, hear it and experience it, they truly understand it.
            </p>
            <p style={{ fontSize: isMobile ? 12 : 14, color: "#64748b", fontWeight: 500, margin: 0 }}>
              SparkVR makes learning natural, effective and memorable.
            </p>
          </div>
        </motion.div>

        {/* Mobile: image strip */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            style={{ width: "100%", height: 280, backgroundImage: "url('/backgroun2.png')", backgroundSize: "cover", backgroundPosition: "center top" }}
          />
        )}
      </section>

      {/* ── BENEFITS BAR ── */}
      <section style={{
        background: "#f8fafc",
        borderTop: "1px solid rgba(0,82,204,0.06)",
        padding: isMobile ? "32px 20px 36px" : isTablet ? "28px 44px" : "28px 72px",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 20 : 0,
            justifyContent: "space-between",
          }}>
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.07)}
                whileHover={{ scale: 1.04, y: -4 }}
                style={{ display: "flex", alignItems: "flex-start", gap: 14, flex: 1, padding: isMobile ? 0 : "0 12px", cursor: "default" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.07, 1] }}
                  transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                  whileHover={{ scale: 1.15 }}
                  style={{
                    width: isMobile ? 48 : 54, height: isMobile ? 48 : 54,
                    borderRadius: "50%", background: b.bg,
                    border: `1.5px solid ${b.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    boxShadow: `0 4px 14px ${b.color}20`,
                  }}
                >
                  <b.icon size={isMobile ? 22 : 26} color={b.color} strokeWidth={1.8} />
                </motion.div>
                <div>
                  <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 900, color: "#001a4d", margin: "0 0 4px" }}>{b.title}</p>
                  <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", fontWeight: 500, margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — SUBJECTS
      ══════════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "100px 60px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eff6ff", borderRadius: 30, padding: "6px 18px", marginBottom: 18 }}>
              <BookOpen size={14} color="#0052cc" strokeWidth={2.5} />
              <span style={{ fontSize: 12, fontWeight: 800, color: "#0052cc", letterSpacing: "0.15em" }}>SUBJECTS</span>
            </div>
            <h2 style={{ fontSize: isMobile ? "clamp(26px,7vw,36px)" : "clamp(32px,3.5vw,48px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
              Five subjects.<br />Hundreds of concepts.
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 20 : 24 }}>
            {SUBJECTS.map((subj, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                whileHover={{ scale: 1.01, y: -3, boxShadow: "0 16px 48px rgba(0,26,77,0.09)" }}
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : (i % 2 === 0 ? "row" : "row-reverse"),
                  gap: isMobile ? 20 : 40,
                  alignItems: isMobile ? "flex-start" : "center",
                  background: "#ffffff",
                  borderRadius: 28,
                  padding: isMobile ? "24px 20px" : "36px 44px",
                  border: "1.5px solid rgba(0,82,204,0.06)",
                  boxShadow: "0 4px 20px rgba(0,26,77,0.04)",
                  cursor: "default",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "center", gap: 12, flexShrink: 0, minWidth: isMobile ? "auto" : 160, textAlign: isMobile ? "left" : "center" }}>
                  <div style={{ width: isMobile ? 60 : 76, height: isMobile ? 60 : 76, borderRadius: "50%", background: subj.bg, display: "flex", alignItems: "center", justifyContent: "center", color: subj.color, border: `1.5px solid ${subj.color}22` }}>
                    <subj.icon size={isMobile ? 26 : 34} strokeWidth={1.8} />
                  </div>
                  <p style={{ fontSize: isMobile ? 17 : 20, fontWeight: 900, color: "#001a4d", margin: 0 }}>{subj.title}</p>
                  <div style={{ display: "flex", flexDirection: isMobile ? "row" : "column", gap: 6, alignItems: "center" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: subj.color, background: subj.bg, padding: "4px 12px", borderRadius: 20 }}>{subj.modules}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#64748b", background: "#f1f5f9", padding: "4px 12px", borderRadius: 20 }}>{subj.grades}</span>
                  </div>
                </div>

                {!isMobile && <div style={{ width: 1, alignSelf: "stretch", background: "rgba(0,82,204,0.08)" }} />}

                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: isMobile ? 14 : 16, color: "#475569", lineHeight: 1.65, fontWeight: 500, marginBottom: 20 }}>{subj.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {subj.topics.map((topic, j) => (
                      <span key={j} style={{ fontSize: isMobile ? 11 : 12, fontWeight: 700, color: subj.color, background: subj.bg, padding: "5px 14px", borderRadius: 20, border: `1px solid ${subj.color}22` }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — GRADE LEVELS
      ══════════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "100px 60px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eff6ff", borderRadius: 30, padding: "6px 18px", marginBottom: 18 }}>
              <GraduationCap size={14} color="#0052cc" strokeWidth={2.5} />
              <span style={{ fontSize: 12, fontWeight: 800, color: "#0052cc", letterSpacing: "0.15em" }}>GRADE LEVELS</span>
            </div>
            <h2 style={{ fontSize: isMobile ? "clamp(26px,7vw,36px)" : "clamp(32px,3.5vw,48px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
              Built for every stage<br />of the learning journey.
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
            {GRADES.map((g, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 48px rgba(0,26,77,0.1)" }}
                style={{
                  background: "#f8fafc", borderRadius: 24, padding: isMobile ? "28px 22px" : "40px 36px",
                  border: "1.5px solid rgba(0,82,204,0.08)",
                  boxShadow: "0 8px 30px rgba(0,26,77,0.04)",
                  position: "relative", overflow: "hidden",
                  cursor: "default",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #0052cc, #38bdf8)", borderRadius: "24px 24px 0 0" }} />
                <p style={{ fontSize: 12, fontWeight: 800, color: "#0052cc", letterSpacing: "0.12em", marginBottom: 8 }}>{g.range}</p>
                <h3 style={{ fontSize: isMobile ? 20 : 22, fontWeight: 900, color: "#001a4d", marginBottom: 14, lineHeight: 1.2 }}>{g.focus}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, fontWeight: 500, marginBottom: 20 }}>{g.desc}</p>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#0052cc", background: "#eff6ff", padding: "5px 14px", borderRadius: 20 }}>{g.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — FEATURES
      ══════════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "100px 60px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eff6ff", borderRadius: 30, padding: "6px 18px", marginBottom: 18 }}>
              <ShieldCheck size={14} color="#0052cc" strokeWidth={2.5} />
              <span style={{ fontSize: 12, fontWeight: 800, color: "#0052cc", letterSpacing: "0.15em" }}>WHY IT WORKS</span>
            </div>
            <h2 style={{ fontSize: isMobile ? "clamp(26px,7vw,36px)" : "clamp(32px,3.5vw,48px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0 }}>
              Designed for classrooms,<br />not just content libraries.
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 24 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                whileHover={{ scale: 1.04, y: -5, boxShadow: "0 20px 44px rgba(0,26,77,0.1)" }}
                style={{
                  background: "#ffffff", borderRadius: 20, padding: isMobile ? "20px 16px" : "32px 28px",
                  border: "1.5px solid rgba(0,82,204,0.06)",
                  boxShadow: "0 4px 16px rgba(0,26,77,0.04)",
                  cursor: "default",
                }}
              >
                <div style={{ width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: 14, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc", marginBottom: 16 }}>
                  <f.icon size={isMobile ? 20 : 24} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: isMobile ? 13 : 16, fontWeight: 800, color: "#001a4d", marginBottom: 8 }}>{f.title}</h4>
                <p style={{ fontSize: isMobile ? 11 : 13.5, color: "#64748b", lineHeight: 1.6, fontWeight: 500, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — CTA
      ══════════════════════════════════════════ */}
      <section style={{
        padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "100px 60px",
        background: "linear-gradient(135deg, #001a4d 0%, #0052cc 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-30%", right: "-10%", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 30, padding: "6px 18px", marginBottom: 24 }}>
            <School size={14} color="#38bdf8" strokeWidth={2.5} />
            <span style={{ fontSize: 12, fontWeight: 800, color: "#38bdf8", letterSpacing: "0.15em" }}>GET STARTED</span>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            style={{ fontSize: isMobile ? "clamp(28px,7vw,40px)" : "clamp(36px,4vw,52px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 20 }}
          >
            Bring the curriculum<br />to life in your school.
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            style={{ fontSize: isMobile ? 15 : 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, fontWeight: 500, marginBottom: 44, maxWidth: 560, margin: "0 auto 44px" }}
          >
            Book a free guided demonstration and see exactly how SparkVR aligns with your school's timetable and curriculum.
          </motion.p>
          <motion.div {...fadeUp(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#ffffff", color: "#0052cc", padding: isMobile ? "13px 28px" : "16px 36px", borderRadius: 40, fontSize: isMobile ? 13 : 15, fontWeight: 800, letterSpacing: "0.06em", cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              >
                <Calendar size={18} strokeWidth={2.5} />
                BOOK FREE WORKSHOP
              </motion.div>
            </Link>
            <Link href="/subject-expansion" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.12)", color: "#ffffff", border: "1.5px solid rgba(255,255,255,0.28)", padding: isMobile ? "13px 28px" : "16px 36px", borderRadius: 40, fontSize: isMobile ? 13 : 15, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer" }}
              >
                EXPLORE SUBJECTS
                <ChevronRight size={16} strokeWidth={2.5} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
