"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical, Calculator, Landmark, Globe, Settings,
  BookOpen, Target, Users, CheckCircle2, ArrowRight,
  GraduationCap, Layers, ShieldCheck, ChevronRight,
  BarChart3, Calendar, School, MonitorPlay, Lightbulb,
  Brain, BookMarked, Glasses,
  Eye, Headphones, Hand, Star
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

const MOCKUP_SLIDES = [
  {
    image: "/human_anatomy.webp",
    label: "The Human Heart",
    subject: "Science • Class 8 • Chapter 6",
    desc: "Explore the structure and function of the human heart through an immersive 3D experience.",
    annotations: [
      { title: "Aorta",             desc: "Carries oxygenated blood to the body." },
      { title: "Pulmonary Artery",  desc: "Carries blood to the lungs."           },
      { title: "Left Ventricle",    desc: "Pumps oxygenated blood to the body."   },
    ],
  },
  {
    image: "/earth_core.webp",
    label: "Earth's Core",
    subject: "Geography • Class 9 • Chapter 3",
    desc: "Discover the layers of the Earth and understand how heat and pressure shape our planet.",
    annotations: [
      { title: "Inner Core", desc: "Solid iron and nickel at extreme temperatures." },
      { title: "Mantle",     desc: "Semi-molten rock driving tectonic movement."    },
      { title: "Crust",      desc: "The thin outer layer where life exists."        },
    ],
  },
  {
    image: "/space.webp",
    label: "The Solar System",
    subject: "Science • Class 6 • Chapter 5",
    desc: "Journey through our solar system and explore each planet's unique characteristics.",
    annotations: [
      { title: "Inner Planets",  desc: "Rocky worlds close to the Sun."                   },
      { title: "Asteroid Belt",  desc: "A ring of space rocks between Mars and Jupiter."  },
      { title: "Outer Giants",   desc: "Gas giants in the outer solar system."            },
    ],
  },
  {
    image: "/biological_systems.webp",
    label: "DNA Structure",
    subject: "Biology • Class 10 • Chapter 2",
    desc: "Unravel the double helix and understand how genetic information is encoded and passed on.",
    annotations: [
      { title: "Base Pairs",       desc: "The genetic code written in four letters."        },
      { title: "Sugar-Phosphate",  desc: "The backbone that holds the helix together."      },
      { title: "Double Helix",     desc: "Two strands twisted into a spiral."               },
    ],
  },
  {
    image: "/cell_proper.webp",
    label: "Cell Structure",
    subject: "Biology • Class 8 • Chapter 1",
    desc: "Explore the living cell and understand the function of each organelle in detail.",
    annotations: [
      { title: "Nucleus",        desc: "Control centre of the cell."                    },
      { title: "Mitochondria",   desc: "Produces energy for the cell."                  },
      { title: "Cell Membrane",  desc: "Regulates what enters and exits the cell."      },
    ],
  },
];

const EXPLORE_SUBJECT_CARDS = [
  { icon: FlaskConical, color: "#16a34a", name: "Biology",        range: "Class 6–12", topics: "48 Topics", pct: 78, image: "/biological_systems.webp" },
  { icon: FlaskConical, color: "#7c3aed", name: "Chemistry",      range: "Class 8–12", topics: "52 Topics", pct: 65, image: "/atoms.webp"              },
  { icon: Layers,       color: "#2563eb", name: "Physics",        range: "Class 9–12", topics: "46 Topics", pct: 72, image: "/forces.webp"              },
  { icon: Landmark,     color: "#ea580c", name: "Social Science", range: "Class 6–10", topics: "40 Topics", pct: 68, image: "/history_card.webp"        },
  { icon: Calculator,   color: "#1d4ed8", name: "Mathematics",    range: "Class 6–12", topics: "60 Topics", pct: 80, image: "/math_3d_card.webp"        },
  { icon: Globe,        color: "#16a34a", name: "Geography",      range: "Class 6–10", topics: "38 Topics", pct: 70, image: "/geography_card.webp"      },
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


const BENEFITS = [
  { icon: Target,    color: "#2563eb", bg: "#eff6ff", title: "Improves Focus",       desc: "Immersive lessons keep students engaged and attentive." },
  { icon: BarChart3, color: "#059669", bg: "#ecfdf5", title: "Boosts Participation", desc: "Interactive experiences encourage active involvement." },
  { icon: Brain,     color: "#7c3aed", bg: "#f5f3ff", title: "Enhances Retention",   desc: "Experiential learning improves long-term memory and recall." },
  { icon: Users,     color: "#d97706", bg: "#fffbeb", title: "Builds Confidence",    desc: "Understanding concepts deeply leads to greater academic confidence." },
  { icon: Star,      color: "#0891b2", bg: "#ecfeff", title: "Encourages Curiosity", desc: "Exploration-driven learning sparks curiosity and a love for learning." },
];

function CurriculumVisualsSection({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slide = MOCKUP_SLIDES[activeSlide];

  const leftFeatures = [
    { icon: Glasses,   title: "Immersive 3D Visuals",         desc: "Experience concepts in 3D that make complex topics easy to grasp."             },
    { icon: Hand,      title: "Interactive Exploration",       desc: "Rotate, zoom, manipulate and explore to build deeper understanding."           },
    { icon: BarChart3, title: "Concept-Focused Assessments",  desc: "Built-in quizzes and activities to reinforce learning and track progress."    },
  ];

  const sidebarTabs = [
    { icon: MonitorPlay,  label: "Explore",  active: true  },
    { icon: CheckCircle2, label: "Quiz",     active: false },
    { icon: BookOpen,     label: "Notes",    active: false },
    { icon: BarChart3,    label: "Assess",   active: false },
  ];

  return (
    <section style={{ padding: isMobile ? "60px 20px 40px" : isTablet ? "80px 40px 60px" : "100px 60px 80px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* ── Top: left text + right dark UI mockup ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "38% 1fr",
          gap: isMobile ? 40 : 60,
          alignItems: "center",
          marginBottom: isMobile ? 48 : 72,
        }}>

          {/* LEFT */}
          <div>
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
              SparkVR immersive modules bring curriculum to life with stunning 3D visuals, interactive exploration and concept-focused learning.
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {leftFeatures.map((f, i) => (
                <motion.div
                  key={i} {...fadeUp(0.24 + i * 0.07)}
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
              boxShadow: "0 40px 100px rgba(0,26,77,0.28)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {/* Top bar */}
              <div style={{ display: "flex", alignItems: "center", padding: "10px 18px", gap: 14, background: "#111d30", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
                  <ChevronRight size={13} color="#64748b" style={{ transform: "rotate(180deg)" }} />
                  <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600 }}>Back to Modules</span>
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>{slide.subject}</span>
                </div>
                <div style={{ padding: "3px 10px", background: "rgba(37,99,235,0.22)", borderRadius: 6 }}>
                  <span style={{ fontSize: 10, color: "#60a5fa", fontWeight: 700 }}>Explore</span>
                </div>
              </div>

              {/* Main area */}
              <div style={{ display: "flex" }}>
                {/* Left info panel */}
                <div style={{ width: 186, flexShrink: 0, padding: "18px 14px", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 800, color: "#ffffff", margin: "0 0 6px", lineHeight: 1.25 }}>{slide.label}</h4>
                    <p style={{ fontSize: 10, color: "#94a3b8", lineHeight: 1.55, margin: 0 }}>{slide.desc}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {["3D Interactive Model", "Guided Learning", "In-built Assessment"].map((feat, fi) => (
                      <div key={fi} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <div style={{ width: 15, height: 15, borderRadius: "50%", background: (["rgba(74,222,128,0.15)", "rgba(96,165,250,0.15)", "rgba(167,139,250,0.15)"])[fi], display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: (["#4ade80", "#60a5fa", "#a78bfa"])[fi] }} />
                        </div>
                        <span style={{ fontSize: 10, color: "#cbd5e1", fontWeight: 600 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#2563eb", borderRadius: 30, padding: "7px 14px", cursor: "pointer" }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Start Exploring</span>
                    <ArrowRight size={12} color="#fff" strokeWidth={2.5} />
                  </motion.div>
                </div>

                {/* Center — main image + annotations */}
                <div style={{ flex: 1, position: "relative", height: 280, background: "#0a1020", overflow: "hidden" }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSlide}
                      src={slide.image}
                      alt={slide.label}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                    />
                  </AnimatePresence>

                  {/* Annotation labels */}
                  <div style={{ position: "absolute", right: 10, top: "8%", display: "flex", flexDirection: "column", gap: 10, zIndex: 2 }}>
                    {slide.annotations.map((ann, ai) => (
                      <AnimatePresence key={`${activeSlide}-${ai}`} mode="wait">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ delay: ai * 0.08, duration: 0.3 }}
                          style={{
                            background: "rgba(10,16,32,0.82)", backdropFilter: "blur(8px)",
                            borderRadius: 8, padding: "5px 9px",
                            border: "1px solid rgba(255,255,255,0.1)", maxWidth: 128,
                          }}
                        >
                          <p style={{ fontSize: 10, fontWeight: 800, color: "#ffffff", margin: "0 0 2px" }}>{ann.title}</p>
                          <p style={{ fontSize: 9, color: "#94a3b8", fontWeight: 500, margin: 0, lineHeight: 1.4 }}>{ann.desc}</p>
                        </motion.div>
                      </AnimatePresence>
                    ))}
                  </div>

                  {/* Bottom controls */}
                  <div style={{ position: "absolute", bottom: 8, right: 8, display: "flex", gap: 5, zIndex: 2 }}>
                    {["360°", "♪", "⛶"].map((c, ci) => (
                      <div key={ci} style={{ background: "rgba(10,16,32,0.75)", borderRadius: 5, padding: "3px 7px", fontSize: 10, color: "#94a3b8", fontWeight: 700, cursor: "pointer" }}>{c}</div>
                    ))}
                  </div>
                </div>

                {/* Right sidebar tabs */}
                <div style={{ width: 58, flexShrink: 0, borderLeft: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 4px", gap: 2, background: "#111d30" }}>
                  {sidebarTabs.map((tab, ti) => (
                    <div key={ti} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "9px 0", width: "100%", borderRadius: 8, background: tab.active ? "rgba(37,99,235,0.2)" : "transparent", cursor: "pointer" }}>
                      <tab.icon size={15} color={tab.active ? "#60a5fa" : "#475569"} strokeWidth={1.8} />
                      <span style={{ fontSize: 9, color: tab.active ? "#60a5fa" : "#475569", fontWeight: 700, textAlign: "center" }}>{tab.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: "#111d30", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <button onClick={() => setActiveSlide(s => Math.max(0, s - 1))} style={{ background: "rgba(255,255,255,0.07)", border: "none", borderRadius: 6, padding: "5px 8px", cursor: "pointer", display: "flex", color: "#64748b" }}>
                  <ChevronRight size={13} style={{ transform: "rotate(180deg)" }} />
                </button>
                <div style={{ flex: 1, display: "flex", gap: 8 }}>
                  {MOCKUP_SLIDES.map((s, si) => (
                    <motion.div
                      key={si}
                      onClick={() => setActiveSlide(si)}
                      whileHover={{ scale: 1.07, opacity: 1 }}
                      style={{
                        width: 62, height: 44, borderRadius: 7, overflow: "hidden", cursor: "pointer", flexShrink: 0,
                        border: `2px solid ${si === activeSlide ? "#2563eb" : "rgba(255,255,255,0.08)"}`,
                        opacity: si === activeSlide ? 1 : 0.52,
                        transition: "all 0.22s ease",
                        boxShadow: si === activeSlide ? "0 4px 14px rgba(37,99,235,0.4)" : "none",
                      }}
                    >
                      <img src={s.image} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </motion.div>
                  ))}
                </div>
                <button onClick={() => setActiveSlide(s => Math.min(MOCKUP_SLIDES.length - 1, s + 1))} style={{ background: "rgba(255,255,255,0.07)", border: "none", borderRadius: 6, padding: "5px 8px", cursor: "pointer", display: "flex", color: "#64748b" }}>
                  <ChevronRight size={13} />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* ── Explore across subjects ── */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: isMobile ? 20 : 28 }}>
            <h3 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 900, color: "#001a4d", margin: 0 }}>Explore across subjects</h3>
            <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: "#2563eb", textDecoration: "none" }}>
              View all modules <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(6, 1fr)", gap: isMobile ? 12 : 16 }}>
            {EXPLORE_SUBJECT_CARDS.map((card, ci) => (
              <motion.div
                key={ci}
                {...fadeUp(ci * 0.06)}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,26,77,0.12)" }}
                style={{ background: "#ffffff", borderRadius: 18, overflow: "hidden", border: "1.5px solid rgba(0,82,204,0.06)", boxShadow: "0 4px 16px rgba(0,26,77,0.04)", cursor: "default" }}
              >
                <div style={{ height: 100, overflow: "hidden", position: "relative" }}>
                  <img src={card.image} alt={card.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 8, left: 8, width: 26, height: 26, borderRadius: "50%", background: card.color + "30", border: `1.5px solid ${card.color}50`, backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <card.icon size={12} color={card.color} strokeWidth={2} />
                  </div>
                </div>
                <div style={{ padding: "12px 12px 14px" }}>
                  <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 900, color: card.color, margin: "0 0 3px" }}>{card.name}</p>
                  <p style={{ fontSize: 10, color: "#64748b", fontWeight: 500, margin: "0 0 10px", lineHeight: 1.4 }}>{card.range} • {card.topics}</p>
                  <div style={{ height: 3, background: "#f1f5f9", borderRadius: 4, marginBottom: 5 }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${card.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: ci * 0.08, ease: "easeOut" }}
                      style={{ height: "100%", background: card.color, borderRadius: 4 }}
                    />
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: card.color, margin: 0 }}>{card.pct}% Completed</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom banner ── */}
        <motion.div {...fadeUp(0.3)} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, background: "#ffffff", borderRadius: 20,
          padding: isMobile ? "20px" : "22px 40px",
          border: "1.5px solid rgba(0,82,204,0.08)",
          boxShadow: "0 4px 20px rgba(0,26,77,0.04)", flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <GraduationCap size={24} color="#fff" strokeWidth={2} />
            </div>
            <div>
              <p style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: "#001a4d", margin: "0 0 3px" }}>Aligned. Structured. Immersive.</p>
              <p style={{ fontSize: isMobile ? 11 : 13, color: "#64748b", fontWeight: 500, margin: 0, lineHeight: 1.5 }}>Every module is mapped to your curriculum to ensure clarity, continuity and confidence.</p>
            </div>
          </div>
          <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: "#2563eb", textDecoration: "none", whiteSpace: "nowrap" }}>
            See curriculum mapping <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </motion.div>

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
          SECTION 3 — RICH CURRICULUM VISUALS
      ══════════════════════════════════════════ */}
      <CurriculumVisualsSection isMobile={isMobile} isTablet={isTablet} />

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
