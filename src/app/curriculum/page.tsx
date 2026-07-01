"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical, Calculator, Landmark, Globe, Settings,
  BookOpen, Target, Users, CheckCircle2, ArrowRight,
  GraduationCap, Layers, ShieldCheck, ChevronRight,
  BarChart3, Calendar, School, MonitorPlay, Lightbulb,
  Brain, BookMarked, Glasses,
  Eye, Headphones, Hand, Star,
  Volume2, Maximize2, RefreshCcw
} from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-60px" },
  transition: { delay, duration, ease: EASE },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const, margin: "-60px" },
  transition: { delay, duration: 0.5, ease: EASE },
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
  { icon: MonitorPlay, title: "Supports", sub: "classroom teaching" },
  { icon: Lightbulb, title: "Clarifies", sub: "complex topics" },
  { icon: Target, title: "Reinforces", sub: "exam relevance" },
  { icon: Brain, title: "Encourages", sub: "conceptual mastery" },
];

const FLOW_STEPS = [
  { icon: School, title: "Class", sub: "Select your class" },
  { icon: BookOpen, title: "Subject", sub: "Choose a subject" },
  { icon: BookMarked, title: "Chapter", sub: "Pick a chapter" },
  { icon: Lightbulb, title: "Concept", sub: "Explore the concept" },
  { icon: Glasses, title: "Immersive Experience", sub: "Learn by experiencing" },
];

const MOCKUP_SLIDES = [
  {
    image: "/human_anatomys.webp",
    label: "The Human Heart",
    subject: "Science • Class 8 • Chapter 6",
    desc: "Explore the structure and function of the human heart through an immersive 3D experience.",
    annotations: [],
  },
  {
    image: "/spaces.webp",
    label: "Earth's Core",
    subject: "Geography • Class 9 • Chapter 3",
    desc: "Discover the layers of the Earth and understand how heat and pressure shape our planet.",
    annotations: [],
  },
  {
    image: "/biological_systemss.webp",
    label: "The Solar System",
    subject: "Science • Class 6 • Chapter 5",
    desc: "Journey through our solar system and explore each planet's unique characteristics.",
    annotations: [],
  },
  {
    image: "/cell_propers.webp",
    label: "DNA Structure",
    subject: "Biology • Class 10 • Chapter 2",
    desc: "Unravel the double helix and understand how genetic information is encoded and passed on.",
    annotations: [],
  },
  {
    image: "/earth_cores.webp",
    label: "Cell Structure",
    subject: "Biology • Class 8 • Chapter 1",
    desc: "Explore the living cell and understand the function of each organelle in detail.",
    annotations: [],
  },
  {
    image: "/geography_cards.webp",
    label: "World Geography",
    subject: "Geography • Class 7 • Chapter 2",
    desc: "Explore continents, countries, and physical features through an interactive global map.",
    annotations: [],
  },
];

const EXPLORE_SUBJECT_CARDS = [
  { icon: FlaskConical, color: "#16a34a", name: "Biology", range: "Class 6–12", topics: "48 Topics", pct: 78, image: "/biological_systemss.webp" },
  { icon: FlaskConical, color: "#7c3aed", name: "Chemistry", range: "Class 8–12", topics: "52 Topics", pct: 65, image: "/cell_propers.webp" },
  { icon: Layers, color: "#2563eb", name: "Physics", range: "Class 9–12", topics: "46 Topics", pct: 72, image: "/spaces.webp" },
  { icon: Landmark, color: "#ea580c", name: "Social Science", range: "Class 6–10", topics: "40 Topics", pct: 68, image: "/earth_cores.webp" },
  { icon: Calculator, color: "#1d4ed8", name: "Mathematics", range: "Class 6–12", topics: "60 Topics", pct: 80, image: "/human_anatomys.webp" },
  { icon: Globe, color: "#16a34a", name: "Geography", range: "Class 6–10", topics: "38 Topics", pct: 70, image: "/geography_cards.webp" },
];

const GRADES = [
  { range: "Grades 6–7", focus: "Foundation Building", desc: "Basic concepts in science and maths made visual and concrete. Build curiosity and foundational understanding.", count: "80+ modules" },
  { range: "Grades 8–9", focus: "Conceptual Depth", desc: "Deeper exploration of complex topics. Bridge the gap between abstract theory and real-world application.", count: "120+ modules" },
  { range: "Grades 10–12", focus: "Exam Ready", desc: "Curriculum-aligned modules mapped directly to board exam topics. Strengthen clarity under exam pressure.", count: "230+ modules" },
];

const FEATURES = [
  { icon: BookOpen, title: "NCERT Aligned", desc: "Every module mapped chapter by chapter to national curriculum standards." },
  { icon: GraduationCap, title: "Teacher Led", desc: "Designed for structured classroom delivery with guided lesson plans." },
  { icon: Layers, title: "Graded Progression", desc: "Content organised by grade and difficulty for smooth learning journeys." },
  { icon: Target, title: "Concept Specific", desc: "Each module targets one core concept for maximum clarity and retention." },
  { icon: ShieldCheck, title: "Assessment Ready", desc: "Includes concept checks, quizzes and outcome measurements per module." },
  { icon: BarChart3, title: "Progress Trackable", desc: "Teachers can monitor engagement and understanding for every session." },
];

const LEARNING_TYPES = [
  { icon: Eye, color: "#2563eb", bg: "#eff6ff", title: "Visual Learning", desc: "3D models, animations and visualizations bring abstract concepts to life." },
  { icon: Headphones, color: "#7c3aed", bg: "#f5f3ff", title: "Auditory Learning", desc: "Clear explanations and guided narration reinforce understanding." },
  { icon: Hand, color: "#059669", bg: "#ecfdf5", title: "Experiential Learning", desc: "Hands-on interaction and exploration deepen engagement and curiosity." },
  { icon: Brain, color: "#d97706", bg: "#fffbeb", title: "Deeper Understanding", desc: "Stronger connections lead to long-term retention and concept mastery." },
];


const BENEFITS = [
  { icon: Target, color: "#2563eb", bg: "#eff6ff", title: "Improves Focus", desc: "Immersive lessons keep students engaged and attentive." },
  { icon: BarChart3, color: "#059669", bg: "#ecfdf5", title: "Boosts Participation", desc: "Interactive experiences encourage active involvement." },
  { icon: Brain, color: "#7c3aed", bg: "#f5f3ff", title: "Enhances Retention", desc: "Experiential learning improves long-term memory and recall." },
  { icon: Users, color: "#d97706", bg: "#fffbeb", title: "Builds Confidence", desc: "Understanding concepts deeply leads to greater academic confidence." },
  { icon: Star, color: "#0891b2", bg: "#ecfeff", title: "Encourages Curiosity", desc: "Exploration-driven learning sparks curiosity and a love for learning." },
];

function CurriculumVisualsSection({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);
  const slide = MOCKUP_SLIDES[activeSlide] ?? MOCKUP_SLIDES[0];

  const leftFeatures = [
    { icon: Glasses, title: "Immersive 3D Visuals", desc: "Experience concepts in 3D that make complex topics easy to grasp." },
    { icon: Hand, title: "Interactive Exploration", desc: "Rotate, zoom, manipulate and explore to build deeper understanding." },
    { icon: BarChart3, title: "Concept-Focused Assessments", desc: "Built-in quizzes and activities to reinforce learning and track progress." },
  ];

  const sidebarTabs = [
    { icon: MonitorPlay, label: "Explore" },
    { icon: CheckCircle2, label: "Quiz" },
    { icon: BookOpen, label: "Notes" },
    { icon: BarChart3, label: "Assessment" },
  ];

  return (
    <section style={{ background: "#f8fafc" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "40px 20px 16px" : isTablet ? "40px 32px 20px" : "40px 60px 20px" }}>

        {/* ── Top: left text + right dark UI mockup ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1.4fr" : "1fr 1.7fr",
          gap: isMobile ? 40 : 48,
          alignItems: "center",
          marginBottom: isMobile ? 32 : 40,
        }}>

          {/* LEFT */}
          <div style={{ paddingLeft: 0 }}>
            <motion.div {...fadeLeft(0.05)} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 2.5, background: "#2563eb", borderRadius: 4 }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: "#2563eb", letterSpacing: "0.18em" }}>RICH CURRICULUM VISUALS</span>
            </motion.div>

            <motion.h2 {...fadeLeft(0.1)} style={{
              fontSize: isMobile ? "clamp(26px,8vw,36px)" : "clamp(30px,3.2vw,44px)",
              fontWeight: 900, color: "#001a4d", lineHeight: 1.1,
              letterSpacing: "-0.03em", margin: "0 0 18px",
            }}>
              From textbook topics<br />to{" "}
              <span style={{ color: "#2563eb" }}>real understanding.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.18)} style={{ fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7, fontWeight: 500, margin: "0 0 32px", maxWidth: 440 }}>
              SparkVR immersive modules bring curriculum to life with stunning 3D visuals, interactive exploration and concept-focused learning. Learn about our solutions for <Link href="/schools" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "underline" }}>smart schools</Link>, discover our impact on student <Link href="/learning-outcome" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "underline" }}>learning outcomes</Link>, or <Link href="/contact" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "underline" }}>get in touch</Link> with us to see the difference.
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {leftFeatures.map((f, i) => (
                <motion.div
                  key={i} {...fadeUp(0.24 + i * 0.08)}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "#eff6ff", border: "1.5px solid rgba(37,99,235,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <f.icon size={20} color="#2563eb" strokeWidth={1.8} />
                  </div>
                  <div style={{ borderBottom: "1px solid rgba(0,82,204,0.08)", paddingBottom: 16, flex: 1 }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", margin: "0 0 4px" }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: "#64748b", fontWeight: 500, margin: 0, lineHeight: 1.55 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — dark UI mockup */}
          {!isMobile && (
            <motion.div {...fadeUp(0.15)} style={{
              background: "#0e1726", borderRadius: 20, overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,26,77,0.35)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {/* Top bar */}
              <div style={{ display: "flex", alignItems: "center", padding: "10px 18px", gap: 14, background: "#111d30", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
                  <ChevronRight size={13} color="#64748b" style={{ transform: "rotate(180deg)" }} />
                  <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600 }}>Back to Modules</span>
                </div>
                <div style={{ flex: 1 }} />
              </div>

              {/* Main area */}
              <div style={{ display: "flex" }}>
                {/* Left info panel */}
                <div style={{ width: 200, flexShrink: 0, padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", background: "rgba(37,99,235,0.15)", borderRadius: 20, marginBottom: 10, border: "1px solid rgba(96,165,250,0.2)" }}>
                      <span style={{ fontSize: 9, color: "#60a5fa", fontWeight: 600 }}>{slide.subject}</span>
                    </div>
                    <h4 style={{ fontSize: 15, fontWeight: 800, color: "#ffffff", margin: "0 0 7px", lineHeight: 1.25 }}>{slide.label}</h4>
                    <p style={{ fontSize: 10, color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{slide.desc}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {["3D Interactive Model", "Guided Learning", "In-built Assessment"].map((feat, fi) => (
                      <div key={fi} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", background: (["rgba(74,222,128,0.15)", "rgba(96,165,250,0.15)", "rgba(167,139,250,0.15)"])[fi], display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: (["#4ade80", "#60a5fa", "#a78bfa"])[fi] }} />
                        </div>
                        <span style={{ fontSize: 10, color: "#cbd5e1", fontWeight: 600 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(37,99,235,0.5)" }}
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#2563eb", borderRadius: 30, padding: "9px 16px", cursor: "pointer", boxShadow: "0 4px 14px rgba(37,99,235,0.35)" }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Start Exploring</span>
                    <ArrowRight size={12} color="#fff" strokeWidth={2.5} />
                  </motion.div>
                </div>

                {/* Center — main content area, switches per tab */}
                <div style={{ flex: 1, position: "relative", height: 420, background: "#0a1020", overflow: "hidden" }}>
                  <AnimatePresence mode="wait">
                    {activeTab === 0 && (
                      <motion.div key="explore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ position: "absolute", inset: 0 }}>
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activeSlide}
                            src={slide.image}
                            alt={slide.label}
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.4 }}
                            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                          />
                        </AnimatePresence>
                        <div style={{ position: "absolute", bottom: 12, right: 12, display: "flex", gap: 6, zIndex: 2 }}>
                          {/* 360° button */}
                          <motion.div whileHover={{ scale: 1.08, background: "rgba(37,99,235,0.35)" }} whileTap={{ scale: 0.95 }} style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(10,16,32,0.85)", borderRadius: 8, padding: "5px 10px", cursor: "pointer", border: "1px solid rgba(96,165,250,0.18)", backdropFilter: "blur(6px)" }}>
                            <RefreshCcw size={11} color="#60a5fa" strokeWidth={2.5} />
                            <span style={{ fontSize: 10, fontWeight: 800, color: "#60a5fa", letterSpacing: "0.04em" }}>360°</span>
                          </motion.div>
                          {/* Volume */}
                          <motion.div whileHover={{ scale: 1.08, background: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.95 }} style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,16,32,0.85)", borderRadius: 8, cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(6px)" }}>
                            <Volume2 size={13} color="#94a3b8" strokeWidth={2} />
                          </motion.div>
                          {/* Fullscreen */}
                          <motion.div whileHover={{ scale: 1.08, background: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.95 }} style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,16,32,0.85)", borderRadius: 8, cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(6px)" }}>
                            <Maximize2 size={13} color="#94a3b8" strokeWidth={2} />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 1 && (
                      <motion.div key="quiz" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} style={{ position: "absolute", inset: 0, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <div style={{ background: "rgba(96,165,250,0.12)", borderRadius: 6, padding: "3px 10px", border: "1px solid rgba(96,165,250,0.2)" }}>
                            <span style={{ fontSize: 9, color: "#60a5fa", fontWeight: 700 }}>QUESTION 2 OF 5</span>
                          </div>
                          <div style={{ flex: 1, height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 4 }}>
                            <div style={{ width: "40%", height: "100%", background: "#2563eb", borderRadius: 4 }} />
                          </div>
                        </div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#ffffff", lineHeight: 1.5, margin: 0 }}>What organelle is responsible for producing ATP through cellular respiration?</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          {[
                            { label: "A", text: "Nucleus", correct: false, selected: false },
                            { label: "B", text: "Mitochondria", correct: true, selected: true },
                            { label: "C", text: "Ribosome", correct: false, selected: false },
                            { label: "D", text: "Vacuole", correct: false, selected: false },
                          ].map((opt) => (
                            <div key={opt.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${opt.selected ? "#2563eb" : "rgba(255,255,255,0.08)"}`, background: opt.selected ? "rgba(37,99,235,0.18)" : "rgba(255,255,255,0.03)", cursor: "pointer" }}>
                              <div style={{ width: 22, height: 22, borderRadius: "50%", background: opt.selected ? "#2563eb" : "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <span style={{ fontSize: 9, fontWeight: 800, color: opt.selected ? "#fff" : "#64748b" }}>{opt.label}</span>
                              </div>
                              <span style={{ fontSize: 12, fontWeight: 600, color: opt.selected ? "#ffffff" : "#94a3b8" }}>{opt.text}</span>
                              {opt.selected && <div style={{ marginLeft: "auto", width: 16, height: 16, borderRadius: "50%", background: "#4ade80", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 9, color: "#fff", fontWeight: 800 }}>✓</span></div>}
                            </div>
                          ))}
                        </div>
                        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontSize: 11, color: "#4ade80", fontWeight: 700 }}>Correct! Great job.</span>
                          <div style={{ background: "#2563eb", borderRadius: 8, padding: "7px 18px", cursor: "pointer" }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Next Question →</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 2 && (
                      <motion.div key="notes" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} style={{ position: "absolute", inset: 0, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 14, overflowY: "auto" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <BookOpen size={14} color="#60a5fa" strokeWidth={2} />
                          <span style={{ fontSize: 11, fontWeight: 800, color: "#60a5fa", letterSpacing: "0.1em" }}>KEY CONCEPTS</span>
                        </div>
                        <p style={{ fontSize: 15, fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.3 }}>{slide.label}</p>
                        <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.07)" }} />
                        {[
                          { title: "Definition", body: "The mitochondrion is a double-membrane organelle found in most eukaryotic cells, producing energy in the form of ATP." },
                          { title: "Key Function", body: "Site of cellular respiration — converts glucose and oxygen into ATP, CO₂ and water." },
                          { title: "Structure", body: "Outer membrane (smooth), inner membrane (folded into cristae), matrix (fluid interior)." },
                          { title: "Did You Know?", body: "Mitochondria have their own DNA, suggesting they evolved from ancient bacteria (endosymbiotic theory)." },
                        ].map((note, ni) => (
                          <div key={ni} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: ["#60a5fa", "#4ade80", "#a78bfa", "#fbbf24"][ni], marginTop: 5, flexShrink: 0 }} />
                            <div>
                              <p style={{ fontSize: 11, fontWeight: 800, color: "#cbd5e1", margin: "0 0 3px" }}>{note.title}</p>
                              <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.6 }}>{note.body}</p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === 3 && (
                      <motion.div key="assessment" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} style={{ position: "absolute", inset: 0, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <BarChart3 size={14} color="#a78bfa" strokeWidth={2} />
                          <span style={{ fontSize: 11, fontWeight: 800, color: "#a78bfa", letterSpacing: "0.1em" }}>MODULE ASSESSMENT</span>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                          {[
                            { label: "Score", value: "82%", color: "#4ade80", sub: "Above average" },
                            { label: "Time Spent", value: "14 min", color: "#60a5fa", sub: "This session" },
                            { label: "Questions", value: "4 / 5", color: "#fbbf24", sub: "Answered" },
                            { label: "Streak", value: "3 days", color: "#f472b6", sub: "Keep it up!" },
                          ].map((stat) => (
                            <div key={stat.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.07)" }}>
                              <p style={{ fontSize: 10, color: "#64748b", fontWeight: 700, margin: "0 0 4px" }}>{stat.label}</p>
                              <p style={{ fontSize: 20, fontWeight: 900, color: stat.color, margin: "0 0 2px", lineHeight: 1 }}>{stat.value}</p>
                              <p style={{ fontSize: 9, color: "#475569", margin: 0 }}>{stat.sub}</p>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                            <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700 }}>Module Progress</span>
                            <span style={{ fontSize: 11, color: "#4ade80", fontWeight: 700 }}>82%</span>
                          </div>
                          <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 4 }}>
                            <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ height: "100%", background: "linear-gradient(to right, #2563eb, #4ade80)", borderRadius: 4 }} />
                          </div>
                        </div>
                        <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
                          <div style={{ flex: 1, background: "rgba(37,99,235,0.15)", borderRadius: 10, padding: "10px", textAlign: "center", cursor: "pointer", border: "1px solid rgba(96,165,250,0.2)" }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: "#60a5fa" }}>Retry Quiz</span>
                          </div>
                          <div style={{ flex: 1, background: "#2563eb", borderRadius: 10, padding: "10px", textAlign: "center", cursor: "pointer" }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Next Module →</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right sidebar tabs */}
                <div style={{ width: 76, flexShrink: 0, borderLeft: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 6px", gap: 2, background: "#111d30" }}>
                  {sidebarTabs.map((tab, ti) => (
                    <motion.div
                      key={ti}
                      onClick={() => setActiveTab(ti)}
                      whileHover={{ background: ti === activeTab ? "rgba(37,99,235,0.28)" : "rgba(255,255,255,0.05)" }}
                      whileTap={{ scale: 0.95 }}
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "13px 0", width: "100%", borderRadius: 10, background: ti === activeTab ? "rgba(37,99,235,0.22)" : "transparent", cursor: "pointer", transition: "background 0.2s ease" }}
                    >
                      <tab.icon size={20} color={ti === activeTab ? "#60a5fa" : "#475569"} strokeWidth={1.8} />
                      <span style={{ fontSize: 9, color: ti === activeTab ? "#60a5fa" : "#475569", fontWeight: 700, textAlign: "center" }}>{tab.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "#111d30", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <button onClick={() => setActiveSlide(s => Math.max(0, s - 1))} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 7, padding: "7px 10px", cursor: "pointer", display: "flex", color: "#94a3b8" }}>
                  <ChevronRight size={14} style={{ transform: "rotate(180deg)" }} />
                </button>
                <div style={{ flex: 1, display: "flex", gap: 10 }}>
                  {MOCKUP_SLIDES.map((s, si) => (
                    <motion.div
                      key={si}
                      onClick={() => setActiveSlide(si)}
                      whileHover={{ scale: 1.08, opacity: 1 }}
                      style={{
                        width: 80, height: 54, borderRadius: 9, overflow: "hidden", cursor: "pointer", flexShrink: 0,
                        border: `2.5px solid ${si === activeSlide ? "#2563eb" : "rgba(255,255,255,0.08)"}`,
                        opacity: si === activeSlide ? 1 : 0.5,
                        transition: "all 0.22s ease",
                        boxShadow: si === activeSlide ? "0 6px 18px rgba(37,99,235,0.45)" : "none",
                      }}
                    >
                      <div style={{ width: "100%", height: "100%", background: "#0f1e38", overflow: "hidden" }}>
                        <img src={s.image} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <button onClick={() => setActiveSlide(s => Math.min(MOCKUP_SLIDES.length - 1, s + 1))} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 7, padding: "7px 10px", cursor: "pointer", display: "flex", color: "#94a3b8" }}>
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* ── Explore across subjects + Bottom banner ── */}
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 20px 16px" : isTablet ? "0 32px 20px" : "0 60px 20px" }}>

          {/* Explore across subjects */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 900, color: "#001a4d", margin: "0 0 28px" }}>Explore across subjects</h3>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(6, 1fr)", gap: isMobile ? 12 : 16 }}>
              {EXPLORE_SUBJECT_CARDS.map((card, ci) => (
                <motion.div
                  key={ci}
                  {...fadeUp(ci * 0.08)}
                  whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
                  style={{ background: "transparent", borderRadius: 18, overflow: "hidden", cursor: "default" }}
                >
                  <div style={{ height: 100, overflow: "hidden", position: "relative" }}>
                    <img src={card.image} alt={card.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                    <div style={{ position: "absolute", top: 8, left: 8, width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                      <card.icon size={16} color={card.color} strokeWidth={2} />
                    </div>
                  </div>
                  <div style={{ padding: "12px 12px 14px" }}>
                    <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 900, color: card.color, margin: "0 0 3px" }}>{card.name}</p>
                    <p style={{ fontSize: 10, color: "#64748b", fontWeight: 500, margin: "0 0 10px", lineHeight: 1.4 }}>{card.range} • {card.topics}</p>
                    <div style={{ height: 3, background: "#f1f5f9", borderRadius: 4, marginBottom: 5 }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${card.pct}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: ci * 0.08, ease: "easeOut" }}
                        style={{ height: "100%", background: card.color, borderRadius: 4 }}
                      />
                    </div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: card.color, margin: 0 }}>{card.pct}% Completed</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom banner */}
          <motion.div {...fadeUp(0.3)} style={{
            display: "flex", alignItems: "center",
            gap: 24, background: "#ffffff", borderRadius: 20,
            padding: isMobile ? "20px" : "22px 40px",
            border: "1.5px solid rgba(0,82,204,0.08)",
            boxShadow: "0 4px 20px rgba(0,26,77,0.04)",
          }}>
            <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <GraduationCap size={24} color="#fff" strokeWidth={2} />
            </div>
            <div>
              <p style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: "#001a4d", margin: "0 0 3px" }}>Aligned. Structured. Immersive.</p>
              <p style={{ fontSize: isMobile ? 11 : 13, color: "#64748b", fontWeight: 500, margin: 0, lineHeight: 1.5 }}>Every module is mapped to your curriculum to ensure clarity, continuity and confidence.</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

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
        backgroundColor: isMobile ? "#f8fafc" : "#ffffff",
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
            ? "100px 20px 36px"
            : isTablet
              ? "140px 32px 180px"
              : "140px 60px 220px",
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

              {/* Each module label + grid + info card — desktop/tablet only */}
              {!isMobile && (
                <>
                  <motion.p {...fadeUp(0.26)} style={{ fontSize: 16, fontWeight: 900, color: "#001a4d", margin: "0 0 18px" }}>
                    Each module:
                  </motion.p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px", marginBottom: 30 }}>
                    {MODULE_FEATURES.map((f, i) => (
                      <motion.div
                        key={i}
                        {...fadeUp(0.3 + i * 0.08)}
                        whileHover={{ scale: 1.04, y: -3 }}
                        transition={{ type: "spring", stiffness: 280, damping: 18 }}
                        style={{ display: "flex", alignItems: "flex-start", gap: 13, cursor: "default" }}
                      >
                        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#eff6ff", border: "1.5px solid rgba(0,82,204,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc", flexShrink: 0 }}>
                          <f.icon size={22} strokeWidth={2} />
                        </div>
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", margin: "0 0 2px" }}>{f.title}</p>
                          <p style={{ fontSize: 13, color: "#64748b", fontWeight: 500, margin: 0 }}>{f.sub}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    {...fadeUp(0.52)}
                    whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
                    style={{ display: "flex", alignItems: "center", gap: 18, background: "transparent", border: "1.5px solid rgba(0,82,204,0.12)", borderRadius: 20, padding: "22px 28px", cursor: "default", boxShadow: "0 4px 20px rgba(0,26,77,0.06)" }}
                  >
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#001a4d", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", flexShrink: 0 }}>
                      <GraduationCap size={28} strokeWidth={2} />
                    </div>
                    <div>
                      <p style={{ fontSize: 16, fontWeight: 900, color: "#001a4d", margin: "0 0 4px" }}>This is not video playback.</p>
                      <p style={{ fontSize: 14, fontWeight: 600, color: "#2563eb", margin: 0 }}>It is interactive guided learning.</p>
                    </div>
                  </motion.div>
                </>
              )}

            </div>
          </div>
        </div>

        {/* ── Flow steps card ── */}
        <motion.div
          {...fadeUp(0.5)}
          style={isMobile ? {
            position: "relative",
            zIndex: 4,
            background: "#ffffff",
            borderRadius: 24,
            boxShadow: "0 8px 32px rgba(0,26,77,0.08)",
            border: "1px solid rgba(0,82,204,0.06)",
            padding: "28px 20px 32px",
            margin: "0 20px 40px",
          } : {
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            zIndex: 4,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(16px)",
            borderRadius: isTablet ? "20px 20px 0 0" : "28px 28px 0 0",
            boxShadow: "0 -8px 40px rgba(0,26,77,0.08)",
            padding: isTablet ? "28px 32px 32px" : "28px 60px 36px",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            {isMobile ? (
              /* ── Mobile: vertical timeline ── */
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: 13, fontWeight: 900, color: "#0052cc", letterSpacing: "0.12em", margin: "0 0 20px" }}>EACH MODULE</p>
                {FLOW_STEPS.map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
                    {/* Left column: icon + line */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 52, flexShrink: 0 }}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: EASE }}
                        style={{
                          width: 48, height: 48, borderRadius: "50%",
                          background: "#eff6ff", border: "1.5px solid rgba(0,82,204,0.2)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#0052cc", flexShrink: 0,
                          boxShadow: "0 4px 14px rgba(0,82,204,0.1)",
                        }}
                      >
                        <step.icon size={22} strokeWidth={1.7} />
                      </motion.div>
                      {i < FLOW_STEPS.length - 1 && (
                        <div style={{ flex: 1, width: 2, minHeight: 20, background: "repeating-linear-gradient(to bottom, rgba(0,82,204,0.3) 0px, rgba(0,82,204,0.3) 5px, transparent 5px, transparent 9px)", margin: "4px 0" }} />
                      )}
                    </div>
                    {/* Right: text */}
                    <motion.div
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: 0.32 + i * 0.08, duration: 0.5, ease: EASE }}
                      style={{ paddingLeft: 16, paddingBottom: i < FLOW_STEPS.length - 1 ? 20 : 0, paddingTop: 10 }}
                    >
                      <p style={{ fontSize: 15, fontWeight: 800, color: "#0052cc", margin: "0 0 3px" }}>{step.title}</p>
                      <p style={{ fontSize: 12, color: "#64748b", fontWeight: 500, margin: 0 }}>{step.sub}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            ) : (
              /* ── Desktop/Tablet: horizontal row ── */
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                {FLOW_STEPS.map((step, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: EASE }}
                      whileHover={{ scale: 1.08, y: -5 }}
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, flex: 1, padding: "0 6px", cursor: "default" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.07, 1], boxShadow: ["0 4px 14px rgba(0,82,204,0.1)", "0 8px 28px rgba(0,82,204,0.22)", "0 4px 14px rgba(0,82,204,0.1)"] }}
                        transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                        whileHover={{ scale: 1.18, boxShadow: "0 12px 36px rgba(0,82,204,0.28)", background: "#dbeafe" }}
                        style={{ width: 68, height: 68, borderRadius: "50%", background: "#eff6ff", border: "1.5px solid rgba(0,82,204,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc", flexShrink: 0, boxShadow: "0 4px 14px rgba(0,82,204,0.1)" }}
                      >
                        <step.icon size={30} strokeWidth={1.6} />
                      </motion.div>
                      <div>
                        <p style={{ fontSize: 16, fontWeight: 800, color: "#0052cc", margin: "0 0 4px" }}>{step.title}</p>
                        <p style={{ fontSize: 13, color: "#64748b", fontWeight: 500, margin: 0 }}>{step.sub}</p>
                      </div>
                    </motion.div>
                    {i < FLOW_STEPS.length - 1 && (
                      <div style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0, paddingBottom: 30 }}>
                        <div style={{ width: 24, height: 0, borderTop: "2px dashed rgba(0,82,204,0.35)" }} />
                        <div style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid rgba(0,82,204,0.4)" }} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
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
          padding: isMobile ? "60px 20px 0" : isTablet ? "80px 32px 180px" : "140px 60px 220px",
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
                  {...fadeUp(0.28 + i * 0.08)}
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
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "32px 20px 0" : isTablet ? "28px 32px 0" : "28px 60px 0" }}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 20 : 0,
            justifyContent: "space-between",
          }}>
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.08)}
                whileHover={{ scale: 1.04, y: -4 }}
                style={{ display: "flex", alignItems: "flex-start", gap: 14, flex: 1, padding: isMobile ? 0 : "0 8px", cursor: "default" }}
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
          SECTION 3 — RICH CURRICULUM VISUALS
      ══════════════════════════════════════════ */}
      <CurriculumVisualsSection isMobile={isMobile} isTablet={isTablet} />

      {/* ══════════════════════════════════════════
          SECTION 4 — IMPACT IN THE CLASSROOM
      ══════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", overflow: "hidden" }}>

        {/* Part 1: Left text + Right image */}
        <div style={{ position: "relative" }}>
          <div style={{ display: isMobile ? "block" : "grid", gridTemplateColumns: "42% 58%", alignItems: "start", maxWidth: isMobile ? "100%" : 1400, margin: "0 auto" }}>

          {/* Left text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: isMobile ? "28px 20px" : isTablet ? "28px 32px" : "32px 60px" }}>

            <motion.h2 {...fadeLeft(0.1)} style={{ fontSize: isMobile ? "clamp(22px,5.5vw,30px)" : "clamp(26px,2.2vw,38px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
              Built for classrooms.<br />Designed for <span style={{ color: "#2563eb" }}>outcomes.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.18)} style={{ fontSize: isMobile ? 13 : 14, color: "#475569", lineHeight: 1.6, fontWeight: 500, maxWidth: 420, margin: 0 }}>
              SparkVR seamlessly integrates into teaching and learning to improve understanding, boost engagement and strengthen academic performance.
            </motion.p>
          </div>

          {/* Right: image full fill with absolute positioning */}
          {!isMobile && (
            <div style={{ position: "relative", minHeight: 540, overflow: "hidden" }}>
              {/* Full fill image */}
              <img
                src="/teacher1.png"
                alt="SparkVR Classroom"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
              {/* Subtle left gradient for blend */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 20%)" }} />

              {/* Left floating cards */}
              <div style={{ position: "absolute", left: 16, top: 16, display: "flex", flexDirection: "column", gap: 10, zIndex: 2 }}>
                {([
                  { icon: MonitorPlay, title: "Seamless Classroom Integration", desc: "Easy to implement. Easy to teach." },
                  { icon: BookOpen, title: "Reinforces Classroom Teaching", desc: "Perfect for introduction, explanation and revision." },
                  { icon: Brain, title: "Improves Concept Retention", desc: "Students remember what they experience." },
                ] as { icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>; title: string; desc: string }[]).map((card, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: EASE }}
                    style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(14px)", borderRadius: 12, padding: "10px 13px", width: 210, boxShadow: "0 4px 18px rgba(0,26,77,0.15)", display: "flex", gap: 10, alignItems: "flex-start" }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <card.icon size={16} color="#2563eb" strokeWidth={2} />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 800, color: "#001a4d", margin: "0 0 2px", lineHeight: 1.3 }}>{card.title}</p>
                      <p style={{ fontSize: 10.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right floating cards */}
              <div style={{ position: "absolute", right: 16, top: 16, display: "flex", flexDirection: "column", gap: 10, zIndex: 2 }}>
                {([
                  { icon: CheckCircle2, title: "Exam Aligned", desc: "Mapped to syllabus. Supports exam readiness." },
                  { icon: Users, title: "Boosts Participation", desc: "Every student stays engaged." },
                  { icon: GraduationCap, title: "Teacher Guided", desc: "You teach. SparkVR enhances." },
                ] as { icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>; title: string; desc: string }[]).map((card, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease: EASE }}
                    style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(14px)", borderRadius: 12, padding: "10px 13px", width: 210, boxShadow: "0 4px 18px rgba(0,26,77,0.15)", display: "flex", gap: 10, alignItems: "flex-start" }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <card.icon size={16} color="#2563eb" strokeWidth={2} />
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 800, color: "#001a4d", margin: "0 0 2px", lineHeight: 1.3 }}>{card.title}</p>
                      <p style={{ fontSize: 10.5, color: "#64748b", margin: 0, lineHeight: 1.45 }}>{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Part 2: 6 feature cards — starts from bottom of image */}
        <div style={{ background: "transparent", position: "relative", zIndex: 2, marginTop: isMobile ? 0 : -160 }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "36px 20px 40px" : isTablet ? "0 32px 48px" : "0 60px 48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(6, 1fr)", gap: isMobile ? 14 : 18 }}>
              {([
                { icon: School, color: "#16a34a", title: "Supports Classroom Teaching", desc: "Complements lesson plans and teaching strategies." },
                { icon: BookOpen, color: "#7c3aed", title: "Clarifies Complex Topics", desc: "Breaks down difficult concepts into observable understanding." },
                { icon: Target, color: "#2563eb", title: "Reinforces Exam Relevance", desc: "Strengthens syllabus coverage and exam preparedness." },
                { icon: Brain, color: "#d97706", title: "Encourages Conceptual Mastery", desc: "From rote learning to real understanding and application." },
                { icon: BarChart3, color: "#059669", title: "Improves Learning Outcomes", desc: "Better retention. Better performance. Better results." },
                { icon: Users, color: "#7c3aed", title: "Inclusive & Accessible", desc: "Supports diverse learning styles and abilities." },
              ] as { icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>; color: string; title: string; desc: string }[]).map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)}
                  whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
                  style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", borderRadius: 16, padding: isMobile ? "18px 14px" : "26px 18px", display: "flex", flexDirection: "column", gap: 10, boxShadow: "0 4px 20px rgba(0,26,77,0.08)", border: "1px solid rgba(255,255,255,0.9)", cursor: "default" }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: item.color + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <item.icon size={24} color={item.color} strokeWidth={1.8} />
                  </div>
                  <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 800, color: "#001a4d", margin: 0, lineHeight: 1.3 }}>{item.title}</p>
                  <p style={{ fontSize: isMobile ? 10 : 11, color: "#64748b", margin: 0, lineHeight: 1.5, flex: 1 }}>{item.desc}</p>
                  <div style={{ height: 3, width: 28, background: item.color, borderRadius: 2 }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 3: Proven Impact stats */}
        <div style={{ background: "transparent" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "16px 20px 28px" : isTablet ? "0 32px 28px" : "0 60px 28px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 28 : 32, alignItems: "center" }}>
            {/* Label */}
            <div style={{ flexShrink: 0, minWidth: 160 }}>
              <p style={{ fontSize: 14, fontWeight: 800, color: "#2563eb", margin: "0 0 6px" }}>Proven Impact</p>
              <p style={{ fontSize: 12, color: "#64748b", margin: 0, lineHeight: 1.6 }}>Real results from real classrooms using SparkVR.</p>
            </div>
            {/* Stat circles */}
            <div style={{ flex: 1, display: "flex", flexWrap: isMobile ? "wrap" : "nowrap", gap: isMobile ? 24 : 0, justifyContent: "space-around", alignItems: "center" }}>
              {[
                { pct: 82, color: "#16a34a", label: "Better Concept\nUnderstanding" },
                { pct: 76, color: "#7c3aed", label: "Improved\nRetention" },
                { pct: 71, color: "#2563eb", label: "Higher Student\nEngagement" },
                { pct: 68, color: "#d97706", label: "Better Performance\nin Assessments" },
                { pct: 90, color: "#db2777", label: "Teachers Recommend\nSparkVR" },
              ].map((stat, i) => {
                const r = 36; const circ = 2 * Math.PI * r;
                return (
                  <motion.div key={i} {...fadeUp(i * 0.08)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ position: "relative", width: 88, height: 88 }}>
                      <svg width="88" height="88" viewBox="0 0 88 88">
                        <circle cx="44" cy="44" r={r} fill="none" stroke="#e2e8f0" strokeWidth="6" />
                        <motion.circle cx="44" cy="44" r={r} fill="none" stroke={stat.color} strokeWidth="6"
                          strokeLinecap="round" strokeDasharray={circ}
                          initial={{ strokeDashoffset: circ }}
                          whileInView={{ strokeDashoffset: circ - (stat.pct / 100) * circ }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 1.4, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                          style={{ transformOrigin: "44px 44px", transform: "rotate(-90deg)" }}
                        />
                      </svg>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 18, fontWeight: 900, color: stat.color }}>{stat.pct}%</span>
                      </div>
                    </div>
                    <p style={{ fontSize: 10, fontWeight: 600, color: "#475569", textAlign: "center", maxWidth: 90, margin: 0, lineHeight: 1.4, whiteSpace: "pre-line" }}>{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
            {/* Bar chart decoration */}
            {!isMobile && (
              <motion.div {...fadeUp(0.3)} style={{ flexShrink: 0 }}>
                <svg width="72" height="72" viewBox="0 0 72 72">
                  <rect x="4" y="46" width="12" height="22" rx="3" fill="#dbeafe" />
                  <rect x="20" y="34" width="12" height="34" rx="3" fill="#93c5fd" />
                  <rect x="36" y="20" width="12" height="48" rx="3" fill="#3b82f6" />
                  <rect x="52" y="28" width="12" height="40" rx="3" fill="#60a5fa" />
                  <polyline points="10,46 26,34 42,20 58,28" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polygon points="58,16 60.2,21.5 66,21.5 61.4,24.7 63.6,30.2 58,27 52.4,30.2 54.6,24.7 50,21.5 55.8,21.5" fill="#fbbf24" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        {/* Part 4: Trust banner */}
        <div style={{ background: "#ffffff", borderTop: "1px solid rgba(0,82,204,0.06)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "24px 20px" : isTablet ? "24px 32px" : "24px 60px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 20 : 24, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ShieldCheck size={24} color="#fff" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontSize: isMobile ? 13 : 15, fontWeight: 800, color: "#001a4d", margin: "0 0 2px" }}>Trusted by forward-thinking schools and educators.</p>
                <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0 }}>SparkVR is used by <span style={{ color: "#2563eb", fontWeight: 700 }}>500+ schools</span> across India and beyond.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              {([{ icon: Landmark, label: "Curriculum\nAligned" }, { icon: ShieldCheck, label: "Safe & Secure\nPlatform" }, { icon: Star, label: "Quality\nAssured" }] as { icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>; label: string }[]).map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                  <item.icon size={22} color="#64748b" strokeWidth={1.8} />
                  <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.4 }}>{item.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: isMobile ? "flex-start" : "flex-end" }}>
              <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(29,78,216,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", borderRadius: 40, background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)", color: "#ffffff", cursor: "pointer", fontWeight: 700, letterSpacing: "0.14em", boxShadow: "0 10px 28px rgba(29,78,216,0.3)", textDecoration: "none" }}
                >
                  See SparkVR in Action <ArrowRight size={16} strokeWidth={2.5} />
                </motion.div>
              </Link>
              <Link href="/contact#contact-form" style={{ fontSize: 12, color: "#2563eb", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                Schedule a Guided Demo <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

      </section>


    </main>
  );
}
