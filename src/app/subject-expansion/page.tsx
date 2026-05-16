"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical, Calculator, Landmark, Globe, Settings,
  BookOpen, Target, Users, Rocket, Layers, ShieldCheck, CheckCircle2, ArrowRight,
  Headset, Eye, BrainCircuit, TrendingUp, HeartHandshake, CheckCircle,
  PlusCircle, Cpu, GraduationCap, Award, Shield, LineChart,
  ChevronRight, School, ThumbsUp, ClipboardList, Box,
  Calendar, MessageSquare, Heart, Dna, Atom, Mountain
} from "lucide-react";

// Exact colors matching the image design
const COLORS = {
  navy: "#0a1930",
  blue: "#0056d2",
  textGray: "#475569",
  cardBg: "#ffffff",
  bottomBanner: "#0f1c3f",
  icons: {
    science: "#1d4ed8", // dark blue
    math: "#059669",    // green
    history: "#7c3aed", // purple
    geo: "#f59e0b",     // orange/yellow
    stem: "#db2777",    // pink/red
  }
};

const PILLS = [
  { title: "Science", icon: FlaskConical, color: COLORS.icons.science },
  { title: "Mathematics", icon: Calculator, color: COLORS.icons.math },
  { title: "History & Civics", icon: Landmark, color: COLORS.icons.history },
  { title: "Geography", icon: Globe, color: COLORS.icons.geo },
  { title: "STEM Integration", icon: Settings, color: COLORS.icons.stem },
];

const FEATURES_BANNER_1 = [
  { title: "Curriculum Aligned", desc: "Mapped to national education standards", icon: BookOpen, color: "#2563eb" },
  { title: "Immersive Learning", desc: "Concepts come alive through experience", icon: Target, color: "#10b981" },
  { title: "Engaging for All", desc: "Designed to inspire curiosity across learners", icon: Users, color: "#8b5cf6" },
  { title: "Future Ready", desc: "Preparing students for a dynamic world", icon: Rocket, color: "#f59e0b" }
];

const ECOSYSTEM_CARDS = [
  {
    subject: "Science", icon: FlaskConical, color: COLORS.icons.science, image: "/science_card.webp",
    desc: "Explore the wonders of the natural world through immersive simulations and 3D visualizations.",
    modules: "120+ Modules", grades: "Grades 6 - 12", alignment: "Aligned to NCERT",
    btnBg: "#eff6ff"
  },
  {
    subject: "Mathematics", icon: Calculator, color: COLORS.icons.math, image: "/math_card.webp",
    desc: "Visualize abstract concepts, solve complex problems and strengthen conceptual clarity.",
    modules: "100+ Modules", grades: "Grades 6 - 12", alignment: "Aligned to NCERT",
    btnBg: "#ecfdf5"
  },
  {
    subject: "History & Civics", icon: Landmark, color: COLORS.icons.history, image: "/history_card.webp",
    desc: "Step into timelines, events and civilizations that shaped our world and our nation.",
    modules: "80+ Modules", grades: "Grades 6 - 12", alignment: "Aligned to NCERT",
    btnBg: "#f5f3ff"
  },
  {
    subject: "Geography", icon: Globe, color: COLORS.icons.geo, image: "/geography_card.webp",
    desc: "Understand Earth's systems, landscapes and cultures through immersive visual journeys.",
    modules: "90+ Modules", grades: "Grades 6 - 12", alignment: "Aligned to NCERT",
    btnBg: "#fffbeb"
  },
  {
    subject: "STEM Integration", icon: Settings, color: COLORS.icons.stem, image: "/stem_card.webp",
    desc: "Bring science, technology, engineering and math together to build real-world skills and innovation.",
    modules: "110+ Modules", grades: "Grades 6 - 12", alignment: "Project & Problem Based",
    btnBg: "#fdf2f8"
  }
];

const BOTTOM_FEATURES = [
  { title: "Curriculum Aligned", desc: "Mapped to national education standards and frameworks.", icon: BookOpen, color: "#eff6ff", iconColor: "#2563eb" },
  { title: "Continuously Expanding", desc: "New modules and subjects added regularly.", icon: Layers, color: "#ecfdf5", iconColor: "#10b981" },
  { title: "Grade Appropriate", desc: "Designed for different grade levels and learning stages.", icon: Users, color: "#f5f3ff", iconColor: "#8b5cf6" },
  { title: "Assessment Ready", desc: "Includes quizzes, practice and concept checks.", icon: Target, color: "#fffbeb", iconColor: "#f59e0b" },
  { title: "Future Focused", desc: "Preparing students for a dynamic world.", icon: ShieldCheck, color: "#fdf2f8", iconColor: "#db2777" }
];

const EXAMPLES_CARDS = [
  {
    subject: "SCIENCE", title: "Human Heart", color: "#1d4ed8", icon: FlaskConical, image: "/science_3d_card.webp",
    desc: "Explore the structure and function of the human heart in 3D.",
    points: ["3D Structure Exploration", "Interactive Labels", "Process Simulation"]
  },
  {
    subject: "MATHEMATICS", title: "Geometry in 3D", color: "#059669", icon: Calculator, image: "/math_3d_card.webp",
    desc: "Visualize angles, shapes and solids to understand complex concepts.",
    points: ["3D Shape Manipulation", "Formula Visualization", "Problem Solving"]
  },
  {
    subject: "HISTORY & CIVICS", title: "Ancient Civilizations", color: "#7c3aed", icon: Landmark, image: "/history_3d_card.webp",
    desc: "Walk through historical places and experience events that shaped history.",
    points: ["Virtual Walkthroughs", "Historical Timelines", "Event Reconstruction"]
  },
  {
    subject: "GEOGRAPHY", title: "Layers of Earth", color: "#d97706", icon: Globe, image: "/geography_3d_card.webp",
    desc: "Explore Earth's layers, landforms and natural phenomena interactively.",
    points: ["Interactive Models", "Geospatial Exploration", "Real-world Connections"]
  },
  {
    subject: "STEM INTEGRATION", title: "Robotics Lab", color: "#db2777", icon: Settings, image: "/stem_3d_card.webp",
    desc: "Build, test and experiment with real-world STEM concepts in VR.",
    points: ["Design & Build", "Simulate & Test", "Innovate & Iterate"]
  }
];

const EXAMPLES_BOTTOM = [
  { title: "Better Understanding", desc: "Visualize. Experience. Remember longer.", icon: Eye },
  { title: "Higher Engagement", desc: "Students stay curious and participate more.", icon: Target },
  { title: "Stronger Retention", desc: "Experiential learning helps build lasting concepts.", icon: BrainCircuit },
  { title: "Exam Relevance", desc: "Concept clarity that improves performance.", icon: TrendingUp },
  { title: "Real Impact", desc: "Real learning that builds real confidence.", icon: HeartHandshake }
];

// Consistent Site Animations
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-50px" },
  transition: { delay, duration, ease: EASE },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.9, ease: EASE },
});

const floatAnim = {
  animate: {
    y: [0, -6, 0] as any,
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const }
  }
};

const ArcIcon = ({ icon: Icon, title, color, top, left, delay }: any) => (
  <div style={{ position: "absolute", top, left, transform: "translate(-50%, -50%)", zIndex: 3 }}>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring" as const, bounce: 0.4 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 0.5 }}
        whileHover={{ scale: 1.08, y: -10 }}
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          cursor: "pointer"
        }}
      >
        <div style={{
          width: 60, height: 60, borderRadius: 30, background: color,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 10px 25px ${color}60`,
          border: "4px solid #ffffff"
        }}>
          <Icon size={28} color="#ffffff" strokeWidth={2} />
        </div>
        <span style={{ fontSize: 14, fontWeight: 800, color: COLORS.navy, whiteSpace: "nowrap" }}>{title}</span>
      </motion.div>
    </motion.div>
  </div>
);

const SmallDot = ({ left, top, color, delay = 0 }: any) => (
  <div style={{ position: "absolute", left, top, transform: "translate(-50%, -50%)", zIndex: 2 }}>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 + delay, duration: 0.4 }}
    >
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], boxShadow: [`0 0 0px ${color}`, `0 0 12px ${color}`, `0 0 0px ${color}`] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const, delay }}
        style={{
          width: 12, height: 12, borderRadius: 6,
          border: `2px solid ${color}`, background: "#fff"
        }}
      />
    </motion.div>
  </div>
);

export default function SubjectExpansionPage() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#f8f9fc" }}>

      {/* ══════════════════════════════════════
          SECTION 1: HERO (Subject Expansion)
      ══════════════════════════════════════ */}
      <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Background Image Layer */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/backgroundsc.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
          }}
        />

        {/* Content Container (Left Side) */}
        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1600, margin: "0 auto", padding: "40px 60px", flex: 1, display: "flex", flexDirection: "column" }}>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 480, marginTop: "20px" }}>
            <div>
              <motion.div {...fadeLeft(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: COLORS.blue, letterSpacing: "0.12em", textTransform: "uppercase" }}>

                </span>
              </motion.div>

              <motion.h1 {...fadeLeft(0.2)} style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
                Learning should <br />
                not be limited to <br />
                <span style={{ color: COLORS.blue }}>one subject.</span>
              </motion.h1>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: "15px", color: COLORS.navy, lineHeight: 1.5, marginBottom: 32, maxWidth: 420, fontWeight: 600 }}>
                SparkVR is expanding across disciplines to build deeper understanding through immersive experiences.
              </motion.p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                {PILLS.map((pill, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeLeft(0.4 + idx * 0.1)}
                    whileHover={{ scale: 1.04, x: 10, boxShadow: "0 15px 35px rgba(0,0,0,0.12)" }}
                    style={{
                      display: "flex", alignItems: "center", gap: 14, background: COLORS.cardBg,
                      padding: "6px 20px 6px 6px", borderRadius: 100, width: "fit-content", minWidth: "min(100%, 230px)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.02)", cursor: "pointer",
                      transformOrigin: "left center"
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      style={{ width: 40, height: 40, borderRadius: 20, background: pill.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                    >
                      <pill.icon size={20} color="#fff" strokeWidth={2} />
                    </motion.div>
                    <span style={{ fontSize: 15, fontWeight: 800, color: COLORS.navy }}>{pill.title}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeLeft(0.9)}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 3, height: 18, background: COLORS.blue, borderRadius: 2 }} />
                  <p style={{ fontSize: 14, color: COLORS.textGray, fontWeight: 700, margin: 0 }}>
                    Our platform evolves with curriculum needs.
                  </p>
                </div>
                <p style={{ fontSize: 16, color: COLORS.navy, fontWeight: 800, margin: "0 0 6px 0" }}>
                  The belief remains constant:
                </p>
                <p style={{ fontSize: 20, color: COLORS.blue, fontWeight: 900, margin: 0 }}>
                  Understanding begins with experience.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            {...fadeUp(1.0)}
            style={{
              background: COLORS.bottomBanner, borderRadius: 20, padding: "24px 40px",
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24,
              marginTop: 40, boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
            }}
          > 
            {FEATURES_BANNER_1.map((feature, idx) => (
              <motion.div key={idx} whileHover={{ y: -6, scale: 1.02 }} style={{ display: "flex", alignItems: "center", gap: 16, cursor: "default" }}>
                <div>
                  <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{feature.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.3, margin: 0 }}>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          SECTION 2: SUBJECT ECOSYSTEM (New)
      ══════════════════════════════════════ */}
      <section style={{ padding: "80px 0", background: "#f8f9fc", position: "relative" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 60px" }}>

          {/* Top Hero of Ecosystem Section */}
          <div style={{ display: "flex", gap: "60px", alignItems: "center", marginBottom: "80px" }}>

            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: "500px" }}>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.blue, letterSpacing: "0.12em", textTransform: "uppercase" }}>

                </span>
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                One platform.<br />
                <span style={{ color: COLORS.blue }}>Endless subjects.</span>
              </motion.h2>
              <motion.p {...fadeUp(0.3)} style={{ fontSize: "16px", color: COLORS.textGray, lineHeight: 1.5, fontWeight: 500 }}>
                SparkVR brings together a wide ecosystem of subjects aligned with curriculum standards, designed to make learning immersive, engaging and meaningful.
              </motion.p>
            </div>

            {/* Right Graphic area */}
            <div style={{ flex: 1.5, position: "relative", height: "450px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>

              {/* SVG Dotted Arc */}
              <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, overflow: "visible" }} viewBox="0 0 1000 500" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" as const, delay: 0.1 }}
                  d="M 80 300 A 420 300 0 0 1 920 300"
                  fill="none"
                  stroke="url(#arc-gradient)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
                <defs>
                  <linearGradient id="arc-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7c3aed" />   {/* Purple */}
                    <stop offset="25%" stopColor="#10b981" />  {/* Green */}
                    <stop offset="50%" stopColor="#2563eb" />  {/* Blue */}
                    <stop offset="75%" stopColor="#f59e0b" />  {/* Orange */}
                    <stop offset="100%" stopColor="#db2777" /> {/* Pink */}
                  </linearGradient>
                </defs>
              </svg>

              {/* Glowing Dome */}
              <div style={{ position: "absolute", bottom: "0%", left: "50%", transform: "translateX(-50%)", width: "90%", height: "80%", background: "radial-gradient(circle at bottom, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 60%)", zIndex: 1, pointerEvents: "none" }} />

              {/* Boy Image */}
              <motion.img loading="lazy" decoding="async"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE }}
                src="/student_proper.webp"
                alt="Student in VR"
                style={{ position: "relative", zIndex: 2, maxHeight: "100%", objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" }}
              />

              {/* Arc Icons */}
              <ArcIcon icon={Landmark} title="History & Civics" color="#7c3aed" top="60%" left="8%" delay={0.2} />
              <ArcIcon icon={Calculator} title="Mathematics" color="#10b981" top="17.6%" left="20.3%" delay={0.4} />
              <ArcIcon icon={FlaskConical} title="Science" color="#1d4ed8" top="0%" left="50%" delay={0.6} />
              <ArcIcon icon={Globe} title="Geography" color="#f59e0b" top="17.6%" left="79.7%" delay={0.8} />
              <ArcIcon icon={Settings} title="STEM Integration" color="#db2777" top="60%" left="92%" delay={1.0} />

              {/* Small Dots */}
              <SmallDot left="13%" top="36%" color="#10b981" delay={0.3} />
              <SmallDot left="34%" top="6%" color="#2563eb" delay={0.5} />
              <SmallDot left="66%" top="6%" color="#f59e0b" delay={0.7} />
              <SmallDot left="87%" top="36%" color="#db2777" delay={0.9} />

            </div>
          </div>

          {/* Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 60, perspective: 1000 }}>
            {ECOSYSTEM_CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.7, ease: EASE }}
                whileHover="hover"
                style={{
                  background: COLORS.cardBg,
                  borderRadius: 16,
                  borderTop: `4px solid ${card.color}`,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transformStyle: "preserve-3d"
                }}
              >
                <motion.div
                  variants={{ hover: { y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" } }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "flex", flexDirection: "column", flexGrow: 1, background: "#fff" }}
                >
                  {/* Card Header */}
                  <div style={{ padding: "20px 20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                    <motion.div variants={{ hover: { rotate: 15, scale: 1.1 } }}>
                      <card.icon size={24} color={card.color} strokeWidth={2} />
                    </motion.div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: COLORS.navy, margin: 0 }}>{card.subject}</h3>
                  </div>

                  {/* Generated Image */}
                  <div style={{ padding: "0 20px", marginBottom: 16 }}>
                    <motion.div
                      variants={{ hover: { scale: 1.03 } }}
                      transition={{ duration: 0.4 }}
                      style={{ width: "100%", height: 160, borderRadius: 12, overflow: "hidden", background: "#f1f5f9" }}
                    >
                      <img loading="lazy" decoding="async" src={card.image} alt={card.subject} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <div style={{ padding: "0 20px", marginBottom: 20, flexGrow: 1 }}>
                    <p style={{ fontSize: 13, color: COLORS.textGray, lineHeight: 1.5, margin: 0, minHeight: 60 }}>
                      {card.desc}
                    </p>
                  </div>

                  {/* Features List */}
                  <div style={{ padding: "0 20px", marginBottom: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <BookOpen size={14} color={card.color} />
                      <span style={{ fontSize: 12, color: COLORS.textGray, fontWeight: 600 }}>{card.modules}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Users size={14} color={card.color} />
                      <span style={{ fontSize: 12, color: COLORS.textGray, fontWeight: 600 }}>{card.grades}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <ShieldCheck size={14} color={card.color} />
                      <span style={{ fontSize: 12, color: COLORS.textGray, fontWeight: 600 }}>{card.alignment}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div style={{ padding: "0 20px 20px" }}>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: 8,
                        background: card.btnBg,
                        color: card.color,
                        border: "none",
                        fontSize: 14,
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        cursor: "pointer"
                      }}
                    >
                      Explore {card.subject.split(' ')[0]}
                      <motion.div variants={{ hover: { x: 5 } }}>
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Features Banner */}
          <motion.div
            {...fadeUp(0.6)}
            style={{
              background: COLORS.cardBg,
              borderRadius: 20,
              border: "1px solid #f1f5f9",
              padding: "30px 40px",
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 20,
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
            }}
          >
            {BOTTOM_FEATURES.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 22, background: item.color, display: "flex", alignItems: "center", justifyContent: "center", color: item.iconColor }}>
                  <item.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: COLORS.navy, margin: "0 0 6px 0" }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: COLORS.textGray, lineHeight: 1.4, margin: 0 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3: IMMERSIVE LEARNING EXAMPLES
      ══════════════════════════════════════ */}
      <section style={{ padding: "80px 0 20px 0", background: "#f8f9fc", position: "relative" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 60px" }}>

          {/* Header Row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 50 }}>
            <div style={{ maxWidth: 700 }}>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.blue, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  IMMERSIVE LEARNING EXAMPLES
                </span>
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
                Concepts come alive <br />
                <span style={{ color: COLORS.blue }}>across every subject.</span>
              </motion.h2>
              <motion.p {...fadeUp(0.3)} style={{ fontSize: "16px", color: COLORS.textGray, lineHeight: 1.5, fontWeight: 500, maxWidth: 600 }}>
                SparkVR transforms abstract topics into immersive experiences students can see, explore and truly understand.
              </motion.p>
            </div>

            {/* Top Right VR Badge */}
            <motion.div
              {...fadeUp(0.4)}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              style={{
                background: "#fff", padding: "20px 24px", borderRadius: 16,
                display: "flex", alignItems: "center", gap: 16,
                boxShadow: "0 8px 20px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9"
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Headset size={24} color="#7c3aed" />
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 800, color: COLORS.navy, margin: "0 0 4px 0" }}>
                  Interactive • 3D • Experiential
                </p>
                <p style={{ fontSize: 13, color: COLORS.textGray, margin: 0, fontWeight: 500 }}>
                  Not just watching. <span style={{ color: COLORS.blue, fontWeight: 700 }}>Actively learning.</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* 5 Examples Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 60, perspective: 1200 }}>
            {EXAMPLES_CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.8, ease: EASE }}
                whileHover="hover"
                style={{
                  borderRadius: 16,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.05)`,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  transformStyle: "preserve-3d",
                  background: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(20px)",
                  position: "relative"
                }}
              >
                {/* Background Glow */}
                <motion.div
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "100%",
                    background: `radial-gradient(circle, ${card.color}15 0%, transparent 70%)`,
                    zIndex: 0,
                    pointerEvents: "none"
                  }}
                />

                <motion.div
                  variants={{
                    hover: {
                      y: -12,
                      scale: 1.02,
                      rotateX: 4,
                      rotateY: -4,
                      boxShadow: `0 30px 60px ${card.color}30`
                    }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                  style={{ display: "flex", flexDirection: "column", flexGrow: 1, zIndex: 1 }}
                >
                  {/* Image Section */}
                  <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                    <motion.img loading="lazy" decoding="async"
                      variants={{ hover: { scale: 1.15 } }}
                      transition={{ duration: 0.8, ease: "easeOut" as const }}
                      src={card.image}
                      alt={card.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    {/* Top Left Badge */}
                    <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: `1px solid ${card.color}40` }}>
                      <card.icon size={14} color={card.color} strokeWidth={2.5} />
                      <span style={{ fontSize: 11, fontWeight: 800, color: card.color, letterSpacing: "0.05em" }}>{card.subject}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1, background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 100%)" }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: COLORS.navy, marginBottom: 8 }}>{card.title}</h3>
                    <p style={{ fontSize: 13, color: COLORS.textGray, lineHeight: 1.5, marginBottom: 20, minHeight: 40 }}>{card.desc}</p>

                    {/* Bullet Points */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "auto" }}>
                      {card.points.map((point, pIdx) => (
                        <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <CheckCircle size={14} color={card.color} strokeWidth={2.5} />
                          <span style={{ fontSize: 12, color: COLORS.textGray, fontWeight: 600 }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner List */}
          <motion.div
            {...fadeUp(0.6)}
            style={{
              background: COLORS.cardBg,
              borderRadius: 20,
              border: "1px solid #e2e8f0",
              padding: "30px 40px",
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 20,
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
            }}
          >
            {EXAMPLES_BOTTOM.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ color: "#8b5cf6", marginTop: 2 }}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: COLORS.navy, margin: "0 0 4px 0" }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: COLORS.textGray, lineHeight: 1.4, margin: 0 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4: CROSS-DISCIPLINARY LEARNING
      ══════════════════════════════════════ */}
      <section style={{ padding: "20px 0 100px 0", background: "#f8fafc", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 60px" }}>

          <div style={{ display: "flex", gap: "60px", alignItems: "center", marginBottom: "80px" }}>

            {/* ── Left Content ── */}
            <div style={{ flex: "0 0 38%", maxWidth: "460px" }}>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 14 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#7c3aed", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  CROSS-DISCIPLINARY LEARNING
                </span>
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, marginBottom: 18, letterSpacing: "-0.02em" }}>
                Real understanding<br />happens when<br />
                <span style={{ color: "#7c3aed" }}>subjects connect.</span>
              </motion.h2>
              <motion.p {...fadeUp(0.3)} style={{ fontSize: "15px", color: COLORS.textGray, lineHeight: 1.65, fontWeight: 500, marginBottom: 36 }}>
                SparkVR bridges subjects to build deeper insights, stronger thinking and real-world application.
              </motion.p>
              <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
                {[
                  { title: "Analytical Thinking", desc: "Make connections and solve complex problems.", icon: BrainCircuit, color: "#7c3aed", bg: "#f5f3ff" },
                  { title: "Spatial Understanding", desc: "Visualize relationships in 3D and beyond.", icon: Layers, color: "#2563eb", bg: "#eff6ff" },
                  { title: "Curiosity Driven Exploration", desc: "Ask questions, explore and discover more.", icon: Eye, color: "#10b981", bg: "#ecfdf5" },
                  { title: "Applied Learning", desc: "Use knowledge across contexts and real life.", icon: Target, color: "#f59e0b", bg: "#fffbeb" },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeUp(0.4 + i * 0.08)} whileHover={{ x: 8 }} style={{ display: "flex", gap: 14, alignItems: "flex-start", cursor: "default" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 22, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 6px 14px ${item.color}18` }}>
                      <item.icon size={20} color={item.color} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: COLORS.navy, marginBottom: 3 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: COLORS.textGray, lineHeight: 1.45, margin: 0 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Right Graphic – Fixed 800×700 canvas ── */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 700 }}>
              {/*
                All coordinates are in pixels relative to this 800×700 box.
                Student centre: (400, 345)
                Node centres:
                  Science          (400,  55)  → top
                  Mathematics      ( 90, 220)  → top-left
                  Geography        (710, 220)  → top-right
                  History & Civics (155, 565)  → bottom-left
                  STEM Integration (645, 565)  → bottom-right
              */}
              <div style={{ position: "relative", width: "min(100%, 800px)", height: 740, flexShrink: 0, overflow: "visible" }}>

                {/* SVG: circles + spokes + dots */}
                <svg width="800" height="740" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
                  <defs>
                    <radialGradient id="s4glow" cx="50%" cy="49%" r="50%">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.14" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="s4spoke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.55" />
                    </linearGradient>
                  </defs>

                  {/* Soft center glow */}
                  <ellipse cx="400" cy="365" rx="150" ry="135" fill="url(#s4glow)" />

                  {/* 3 concentric dashed rings (spinning) */}
                  {[130, 215, 300].map((r, i) => (
                    <motion.g key={r} animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" as const }} style={{ transformOrigin: "400px 365px" }}>
                      <motion.circle
                        cx="400" cy="365" r={r}
                        fill="none" stroke="#c7d2fe" strokeWidth="1.2" strokeDasharray="6 8"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.1 * i }}
                      />
                    </motion.g>
                  ))}

                  {/* 5 spokes from student centre to node centres */}
                  {[
                    { x: 400, y: 130 },  // Science
                    { x: 90, y: 265 },  // Math
                    { x: 710, y: 265 },  // Geo
                    { x: 155, y: 560 },  // History
                    { x: 645, y: 560 },  // STEM
                  ].map((pt, i) => (
                    <motion.line
                      key={i} x1="400" y1="365" x2={pt.x} y2={pt.y}
                      stroke="url(#s4spoke)" strokeWidth="1.3" strokeDasharray="5 7"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -24] }}
                      viewport={{ once: true }}
                      transition={{
                        pathLength: { duration: 1.6, delay: 0.7 + i * 0.1, ease: "easeInOut" as const },
                        opacity: { duration: 1.6, delay: 0.7 + i * 0.1 },
                        strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" as const }
                      }}
                    />
                  ))}

                  {/* Glowing intersection dots at each ring × spoke */}
                  {[130, 215, 300].flatMap((r) =>
                    [-90, -162, -18, 126, 54].map((deg) => {
                      const a = (deg * Math.PI) / 180;
                      return { cx: 400 + r * Math.cos(a), cy: 345 + r * Math.sin(a) };
                    })
                  ).map((pt, i) => (
                    <motion.g key={i} animate={{ opacity: [1, 0.4, 1] as any, scale: [1, 1.25, 1] as any }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.1 }} style={{ transformOrigin: `${pt.cx}px ${pt.cy}px` }}>
                      <motion.circle
                        cx={pt.cx} cy={pt.cy} r="4.5"
                        fill="#818cf8"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 0.85, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.3 + i * 0.03 }}
                      />
                    </motion.g>
                  ))}
                </svg>

                {/* Student image – centred at (400, 345) */}
                <motion.img loading="lazy" decoding="async"
                  initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
                  whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-48%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
                  src="/studenttap.webp"
                  alt="Student in VR"
                  style={{
                    position: "absolute",
                    top: "56%", left: "40%",
                    height: "60%",
                    objectFit: "contain",
                    zIndex: 2,
                    filter: "drop-shadow(0 20px 44px rgba(0,0,0,0.16))"
                  }}
                />

                {/* Stronger Connections badge */}
                <motion.div
                  initial={{ opacity: 0, y: 14, x: "-50%" }}
                  whileInView={{ opacity: 1, y: 0, x: "-50%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  style={{
                    position: "absolute", bottom: "3%", left: "50%",
                    zIndex: 4, textAlign: "center", whiteSpace: "nowrap",
                    background: "rgba(255,255,255,0.93)", backdropFilter: "blur(14px)",
                    padding: "14px 30px", borderRadius: 14,
                    boxShadow: "0 10px 28px rgba(124,58,237,0.13)",
                    border: "1px solid rgba(124,58,237,0.16)"
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: 800, color: COLORS.navy, margin: "0 0 2px" }}>Stronger Connections</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#7c3aed", margin: 0 }}>Better Understanding</p>
                </motion.div>

                {/* 5 Subject Nodes – positioned by absolute px */}
                {[
                  { subject: "SCIENCE", desc: "Discover how the\nworld works", icon: FlaskConical, color: "#1d4ed8", image: "/science_3d_card.webp", nodeLeft: 400, nodeTop: 28 },
                  { subject: "MATHEMATICS", desc: "Solve problems\nwith logic", icon: Calculator, color: "#059669", image: "/math_3d_card.webp", nodeLeft: 60, nodeTop: 195 },
                  { subject: "GEOGRAPHY", desc: "Understand\nplaces and patterns", icon: Globe, color: "#d97706", image: "/geography_3d_card.webp", nodeLeft: 740, nodeTop: 195 },
                  { subject: "HISTORY & CIVICS", desc: "Learn from the past,\nshape the future", icon: Landmark, color: "#7c3aed", image: "/history_3d_card.webp", nodeLeft: 130, nodeTop: 500 },
                  { subject: "STEM INTEGRATION", desc: "Design, build and\ninnovate solutions", icon: Settings, color: "#db2777", image: "/stem_3d_card.webp", nodeLeft: 670, nodeTop: 500 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, x: "-50%" }}
                    whileInView={{ opacity: 1, scale: 1, x: "-50%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.13, type: "spring", stiffness: 200, damping: 18 }}
                    style={{
                      position: "absolute",
                      left: node.nodeLeft,
                      top: node.nodeTop,
                      zIndex: 3,
                      width: 148,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.07 }}
                      style={{
                        width: "100%",
                        background: "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(210,240,255,0.18) 100%)",
                        backdropFilter: "blur(22px)",
                        borderRadius: 80,
                        border: "1.5px solid rgba(255,255,255,0.72)",
                        boxShadow: `0 12px 30px ${node.color}18, inset 0 1px 3px rgba(255,255,255,0.95)`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: 14,
                        cursor: "pointer",
                        overflow: "visible",
                      }}
                    >
                      {/* Coloured pill badge – pops out of the top */}
                      <div style={{
                        background: node.color,
                        padding: "6px 14px",
                        borderRadius: 100,
                        display: "flex", alignItems: "center", gap: 5,
                        marginTop: -15,
                        boxShadow: `0 6px 16px ${node.color}50`,
                        border: "2px solid rgba(255,255,255,0.9)",
                        whiteSpace: "nowrap",
                      }}>
                        <node.icon size={13} color="#fff" strokeWidth={2.5} />
                        <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: "0.04em" }}>{node.subject}</span>
                      </div>

                      {/* Description */}
                      <p style={{
                        fontSize: 11, color: COLORS.navy, fontWeight: 700,
                        textAlign: "center", margin: "10px 8px 12px",
                        lineHeight: 1.35, whiteSpace: "pre-line",
                      }}>
                        {node.desc}
                      </p>

                      {/* Circular 3D image */}
                      <div style={{
                        width: 92, height: 92, borderRadius: "50%",
                        overflow: "hidden",
                        border: "3px solid rgba(255,255,255,0.78)",
                        boxShadow: `0 6px 18px rgba(0,0,0,0.12), inset 0 2px 4px rgba(0,0,0,0.06)`,
                      }}>
                        <img loading="lazy" decoding="async" src={node.image} alt={node.subject} style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.12)" }} />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer Banner */}
          <motion.div
            {...fadeUp(0.8)}
            style={{
              background: "#fff", borderRadius: 24, border: "1px solid #e2e8f0", padding: "36px 48px",
              display: "flex", gap: 40, alignItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              flexWrap: "wrap"
            }}
          >
            <div style={{ flex: "1 1 240px", minWidth: "min(100%, 240px)" }}>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: COLORS.navy, marginBottom: 10 }}>Learning Without Boundaries</h3>
              <p style={{ fontSize: 13, color: COLORS.textGray, lineHeight: 1.65, fontWeight: 500, margin: 0 }}>
                When subjects work together, students think deeper, explore more and understand the world as a whole.
              </p>
            </div>
            <div style={{ flex: "2 1 580px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              {[
                { title: "Connect Concepts", desc: "Relate ideas across\nsubjects.", icon: BrainCircuit, color: "#7c3aed" },
                { title: "Deepen Thinking", desc: "Strengthen reasoning\nand perspective.", icon: Target, color: "#2563eb" },
                { title: "Real World Relevance", desc: "Apply learning to real\nsituations.", icon: Layers, color: "#10b981" },
                { title: "Future Ready Skills", desc: "Prepare for tomorrow\nwith today's learning.", icon: Rocket, color: "#f59e0b" },
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <motion.div whileHover={{ y: -4 }} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: `${step.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <step.icon size={19} color={step.color} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: COLORS.navy, marginBottom: 3 }}>{step.title}</h4>
                      <p style={{ fontSize: 11, color: COLORS.textGray, lineHeight: 1.4, margin: 0, whiteSpace: "pre-line" }}>{step.desc}</p>
                    </div>
                  </motion.div>
                  {idx < 3 && <ArrowRight size={18} color="#cbd5e1" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5: FUTURE OF CURRICULUM
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        width: "100%",
        minHeight: "950px",
        backgroundImage: "url('/5thsection.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        padding: "80px 0 160px 0",
      }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 60px", position: "relative", height: "100%", minHeight: 750 }}>

          {/* Top Area: Left Text and Right Timeline */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "50px" }}>

            {/* Top Left Title */}
            <div style={{ maxWidth: 480 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ marginBottom: 14 }}
              >
                <span style={{ fontSize: 12, fontWeight: 800, color: "#7c3aed", letterSpacing: "0.14em", textTransform: "uppercase", background: "rgba(124, 58, 237, 0.1)", padding: "4px 12px", borderRadius: 20 }}>
                  FUTURE OF CURRICULUM
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.05, marginBottom: 18, letterSpacing: "-0.02em" }}
              >
                Built to evolve<br />
                <span style={{ color: "#7c3aed" }}>with education.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ fontSize: "15px", color: COLORS.textGray, lineHeight: 1.65, fontWeight: 500 }}
              >
                SparkVR is designed to grow with curriculum needs, technology advancements and the future of learning.
              </motion.p>
            </div>

            {/* Top Right Timeline */}
            <motion.div {...fadeUp(0.4)} style={{ flex: 1, marginLeft: "60px", maxWidth: 850, paddingTop: 20 }}>
              <h4 style={{ textAlign: "left", fontSize: 13, fontWeight: 800, color: COLORS.navy, marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.06em", paddingLeft: 10 }}>
                A Curriculum That Grows With Tomorrow
              </h4>

              <div style={{ display: "flex", justifyContent: "flex-start", gap: 36, alignItems: "center", position: "relative", width: "fit-content", margin: "0" }}>
                {/* Connecting Dotted Line */}
                <div style={{ position: "absolute", top: 43, left: 62, right: 62, height: 2, borderTop: "2px dashed #cbd5e1", zIndex: 0 }} />

                {[
                  { label: "TODAY", title: "Strong Foundation", desc: "Core subjects and\nconcepts", icon: Landmark, color: "#8b5cf6" },
                  { label: "TOMORROW", title: "Expanding Horizons", desc: "More topics,\ndeeper learning", icon: TrendingUp, color: "#3b82f6" },
                  { label: "FUTURE", title: "Broader Possibilities", desc: "New disciplines,\nglobal perspectives", icon: Globe, color: "#10b981" },
                  { label: "BEYOND", title: "Limitless Learning", desc: "Future skills,\nreal-world impact", icon: Rocket, color: "#f59e0b" }
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                    style={{ width: 125, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(14px)", borderRadius: 14, padding: "12px 8px", boxShadow: "0 6px 16px rgba(0,0,0,0.04)", border: "1px solid rgba(255,255,255,1)", cursor: "default" }}
                  >
                    <div style={{ fontSize: 9, fontWeight: 800, color: "#fff", background: node.color, padding: "3px 10px", borderRadius: 10, marginBottom: 8, letterSpacing: "0.05em" }}>
                      {node.label}
                    </div>
                    <motion.div animate={{ scale: [1, 1.1, 1] as any }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.5 }}>
                      <node.icon size={22} color={node.color} strokeWidth={1.5} style={{ marginBottom: 8 }} />
                    </motion.div>
                    <h5 style={{ fontSize: 11, fontWeight: 800, color: COLORS.navy, margin: "0 0 3px 0", textAlign: "center", lineHeight: 1.2 }}>{node.title}</h5>
                    <p style={{ fontSize: 10, color: COLORS.textGray, textAlign: "center", margin: 0, whiteSpace: "pre-line", lineHeight: 1.2, fontWeight: 500 }}>{node.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Left Stacked Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 360, marginTop: "20px" }}>
            {[
              { title: "Expanding Curriculum Library", desc: "New subjects, chapters and concepts\nadded continuously.", icon: BookOpen, color: "#8b5cf6", bg: "#f5f3ff" },
              { title: "Continuous Module Additions", desc: "Keeping content fresh, relevant\nand future-ready.", icon: PlusCircle, color: "#3b82f6", bg: "#eff6ff" },
              { title: "Adaptive Learning Architecture", desc: "Personalized pathways that adapt\nto every learner.", icon: Cpu, color: "#10b981", bg: "#ecfdf5" },
              { title: "Future Subject Integration", desc: "Preparing for emerging fields\nand next-generation skills.", icon: Users, color: "#f59e0b", bg: "#fffbeb" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 + i * 0.1 }}
                whileHover={{ x: 12, background: "rgba(255,255,255,0.95)", boxShadow: "0 15px 40px rgba(124, 58, 237, 0.1)" }}
                style={{ display: "flex", gap: 16, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: "18px 20px", borderRadius: 16, boxShadow: "0 8px 25px rgba(0,0,0,0.03)", border: "1px solid rgba(255,255,255,1)", cursor: "default" }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.3 }}
                  style={{ width: 42, height: 42, borderRadius: 21, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                >
                  <item.icon size={20} color={item.color} strokeWidth={2} />
                </motion.div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: COLORS.navy, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: COLORS.textGray, lineHeight: 1.45, margin: 0, whiteSpace: "pre-line" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4 Floating Glass Cards placed perfectly over the 3D Image Platforms */}
          {[
            { title: "Current Curriculum", desc: "Building strong\nconceptual foundations", bottom: 60, right: "52%" },
            { title: "Growing Content", desc: "Adding more immersive\nmodules and resources", bottom: 130, right: "36%" },
            { title: "Evolving Learning", desc: "Smarter, adaptive and\nmore personalized", bottom: 230, right: "20%" },
            { title: "Future Ready", desc: "Preparing students for\ntomorrow's challenges", bottom: 340, right: "5%" }
          ].map((card, i) => (
            <div key={i} style={{ position: "absolute", bottom: card.bottom, right: card.right, zIndex: 3 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + (i * 0.2), type: "spring", stiffness: 150 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0], rotateX: [0, 5, 0], rotateY: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.5 }}
                  whileHover={{ scale: 1.1, rotateX: 0, rotateY: 0, z: 50, boxShadow: "0 20px 50px rgba(124, 58, 237, 0.15)" }}
                  style={{
                    perspective: 1000,
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(20px)",
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1.5px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                    minWidth: "min(100%, 150px)",
                    cursor: "pointer",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <h5 style={{ fontSize: 11, fontWeight: 800, color: COLORS.navy, marginBottom: 2, transform: "translateZ(20px)" }}>{card.title}</h5>
                  <p style={{ fontSize: 9, color: COLORS.textGray, margin: 0, whiteSpace: "pre-line", lineHeight: 1.3, fontWeight: 500, transform: "translateZ(10px)" }}>{card.desc}</p>
                </motion.div>
              </motion.div>
            </div>
          ))}

          {/* Bottom Footer Banner */}
          <motion.div
            {...fadeUp(1)}
            style={{
              position: "absolute", bottom: -150, left: 60, right: 60,
              background: "rgba(255, 255, 255, 0.96)", backdropFilter: "blur(20px)",
              borderRadius: 20, padding: "32px 40px",
              display: "flex", gap: 30, alignItems: "center",
              boxShadow: "0 15px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(255,255,255,1)"
            }}
          >
            {/* Left Title */}
            <div style={{ flex: "0 0 190px", borderRight: "2px solid #e2e8f0", paddingRight: 30, position: "relative" }}>
              <div style={{ width: 4, height: 46, background: "#7c3aed", position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)", borderRadius: "0 4px 4px 0" }} />
              <h3 style={{ fontSize: 17, fontWeight: 900, color: COLORS.navy, marginBottom: 6, lineHeight: 1.25 }}>Future-focused.<br />Impact-driven.</h3>
              <p style={{ fontSize: 11, color: COLORS.textGray, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
                Empowering learners today for the opportunities of tomorrow.
              </p>
            </div>

            {/* 5 Features Grid */}
            <div style={{ flex: 1, display: "flex", justifyContent: "space-between", gap: 16 }}>
              {[
                { title: "Curriculum\nAligned", desc: "Always mapped to\nstandards", icon: GraduationCap, color: "#8b5cf6", bg: "#f5f3ff" },
                { title: "Quality\nAssured", desc: "Expert-reviewed\nand classroom-\ntested", icon: Award, color: "#3b82f6", bg: "#eff6ff" },
                { title: "Scalable\nLearning", desc: "Built to serve\nschools everywhere", icon: LineChart, color: "#10b981", bg: "#ecfdf5" },
                { title: "Sustainable\nGrowth", desc: "Future-ready\nand built to last", icon: Shield, color: "#f59e0b", bg: "#fffbeb" },
                { title: "Learner\nCentric", desc: "Designed for curiosity,\nunderstanding and\nmastery", icon: Users, color: "#db2777", bg: "#fdf2f8" }
              ].map((ft, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.4 }}
                    style={{ width: 42, height: 42, borderRadius: 12, background: ft.bg, display: "flex", alignItems: "center", justifyContent: "center", color: ft.color, flexShrink: 0 }}
                  >
                    <ft.icon size={22} strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: COLORS.navy, marginBottom: 4, whiteSpace: "pre-line", lineHeight: 1.25 }}>{ft.title}</h4>
                    <p style={{ fontSize: 11, color: COLORS.textGray, lineHeight: 1.45, margin: 0, whiteSpace: "pre-line", fontWeight: 500 }}>{ft.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6: TRUST & IMPLEMENTATION
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        width: "100%",
        background: "linear-gradient(135deg, #eef2f6 0%, #ffffff 100%)",
        padding: "0px 0 120px 0",
        marginTop: "-10px",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>

          {/* Top Half: Text Left, Image Right */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 80 }}>

            {/* Left Text */}
            <div style={{ maxWidth: 500 }}>
              <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 40, height: 2, background: COLORS.blue }} />
                <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.blue, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  TRUST & IMPLEMENTATION
                </span>
              </motion.div>

              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(40px, 4.5vw, 56px)", fontWeight: 900, color: COLORS.blue, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
                Expansion without<br />classroom disruption.
              </motion.h2>

              <motion.p {...fadeUp(0.3)} style={{ fontSize: "16px", color: COLORS.textGray, lineHeight: 1.6, fontWeight: 500 }}>
                SparkVR integrates seamlessly into your academic ecosystem—curriculum aligned, teacher guided and school ready.
              </motion.p>
            </div>

            {/* Right Image & Orbiting Icons */}
            <motion.div {...fadeUp(0.4)} style={{ position: "relative", width: "min(100%, 500px)", height: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Dotted background arc */}
              <div style={{ position: "absolute", top: 10, left: 10, width: "min(100%, 480px)", height: 480, borderRadius: "50%", border: "2px dashed #cbd5e1", zIndex: 0 }} />

              {/* The Image Wrapper */}
              <div style={{ width: 360, height: 360, borderRadius: "50%", background: "#e2e8f0", overflow: "hidden", position: "relative", zIndex: 1, boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}>
                <img loading="lazy" decoding="async" src="/teacher_2.webp" alt="Teacher and students using VR" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* Orbiting Icons */}
              {[
                { title: "Curriculum\nAligned", icon: BookOpen, color: COLORS.blue, top: 31, left: 60 },
                { title: "Secure &\nReliable", icon: ShieldCheck, color: "#8b5cf6", top: 31, left: 368 },
                { title: "Teacher\nGuided", icon: Settings, color: "#10b981", top: 368, left: 31 },
                { title: "School\nReady", icon: School, color: "#ec4899", top: 368, left: 397 }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 120 }}
                  style={{ position: "absolute", top: node.top, left: node.left, width: 72, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    style={{ width: 72, height: 72, borderRadius: 36, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
                  >
                    <node.icon size={30} color={node.color} strokeWidth={2} />
                  </motion.div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.navy, textAlign: "center", lineHeight: 1.2, whiteSpace: "pre-line" }}>{node.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Middle Row: Process Cards */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 60, gap: 12 }}>
            {[
              { num: "1", title: "Plan", desc: "We understand your goals,\ncurriculum and\ninfrastructure.", icon: ClipboardList, color: "#3b82f6" },
              { num: "2", title: "Train", desc: "Hands-on training for\nteachers and smooth\norientation.", icon: Users, color: "#10b981" },
              { num: "3", title: "Deploy", desc: "Seamless setup across\ndevices, labs and\nclassrooms.", icon: Box, color: "#8b5cf6" },
              { num: "4", title: "Integrate", desc: "Align modules with\nacademic plans and\nteaching flow.", icon: LineChart, color: "#f59e0b" },
              { num: "5", title: "Support", desc: "Ongoing support and\nresources for long-term\nsuccess.", icon: Headset, color: "#ec4899" }
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 100, damping: 15 }}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: `0 20px 40px ${step.color}15`, borderColor: step.color }}
                  style={{ flex: 1, background: "#fff", borderRadius: 16, padding: "30px 24px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: 16, border: "1px solid #f1f5f9", transition: "border-color 0.3s ease" }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    style={{ width: 56, height: 56, borderRadius: 28, background: `${step.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: step.color }}
                  >
                    <step.icon size={26} strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 800, color: step.color, marginBottom: 8 }}>{step.num}. {step.title}</h4>
                    <p style={{ fontSize: 12, color: COLORS.textGray, lineHeight: 1.5, margin: 0, whiteSpace: "pre-line", fontWeight: 600 }}>{step.desc}</p>
                  </div>
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    animate={{ x: [0, 5, 0] }}
                    style={{ color: "#cbd5e1", flexShrink: 0 }}
                  >
                    <ChevronRight size={24} strokeWidth={2.5} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Banner Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 20, padding: "24px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 30 }}
          >
            {/* Left Header */}
            <div style={{ borderRight: "2px solid #e2e8f0", paddingRight: 30, flexShrink: 0, position: "relative" }}>
              <div style={{ width: 4, height: 30, background: COLORS.blue, position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)", borderRadius: "0 4px 4px 0" }} />
              <h3 style={{ fontSize: 18, fontWeight: 900, color: COLORS.navy, marginBottom: 4 }}>Built on trust.</h3>
              <p style={{ fontSize: 13, color: COLORS.textGray, margin: 0, fontWeight: 600 }}>Every school. Every student.</p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
              {[
                { val: "500+", text: "Schools\nOnboarded", icon: School, color: "#3b82f6" },
                { val: "1M+", text: "Students\nImpacted", icon: Users, color: "#10b981" },
                { val: "2000+", text: "Immersive Modules\nand Growing", icon: Eye, color: "#8b5cf6" },
                { val: "98%", text: "Teacher\nSatisfaction", icon: ThumbsUp, color: "#f59e0b" },
                { val: "40%", text: "Improvement in\nConcept Retention", icon: TrendingUp, color: "#ec4899" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 120 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, cursor: "default" }}
                >
                  <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    style={{ width: 48, height: 48, borderRadius: 24, background: `${stat.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: stat.color, flexShrink: 0, boxShadow: `0 4px 12px ${stat.color}30` }}
                  >
                    <stat.icon size={22} strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h4 style={{ fontSize: 20, fontWeight: 900, color: stat.color, marginBottom: 2 }}>{stat.val}</h4>
                    <p style={{ fontSize: 11, color: COLORS.navy, lineHeight: 1.3, margin: 0, whiteSpace: "pre-line", fontWeight: 700 }}>{stat.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 7: CALL TO ACTION
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        width: "100%",
        background: "#f8fafc",
        padding: "80px 0 120px 0",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: "#ffffff",
              borderRadius: 32,
              boxShadow: "0 25px 60px rgba(0,0,0,0.05)",
              padding: "70px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid #f1f5f9"
            }}
          >
            {/* Top Half: Left Text & Right Image */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 60 }}>

              {/* Left Column */}
              <div style={{ maxWidth: 500, zIndex: 10 }}>
                <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 30, height: 2, background: COLORS.blue }} />
                  <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.blue, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    READY TO TRANSFORM LEARNING?
                  </span>
                </motion.div>

                <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(38px, 4vw, 52px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
                  Let's build the future<br />of <span style={{ color: "#7c3aed" }}>learning together.</span>
                </motion.h2>

                <motion.p {...fadeUp(0.3)} style={{ fontSize: "16px", color: COLORS.textGray, lineHeight: 1.6, fontWeight: 500, marginBottom: 36 }}>
                  Bring immersive, engaging and effective learning to your school with SparkVR.
                </motion.p>

                <motion.div {...fadeUp(0.4)} style={{ display: "flex", gap: 16, marginBottom: 40 }}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)", color: "#fff", border: "none", padding: "16px 32px", borderRadius: 12, fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 10, cursor: "pointer", boxShadow: "0 8px 20px rgba(124, 58, 237, 0.2)" }}
                  >
                    <Calendar size={20} strokeWidth={2.5} />
                    Book a Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, background: "#f8fafc" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: "#fff", color: COLORS.navy, border: "2px solid #e2e8f0", padding: "16px 32px", borderRadius: 12, fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
                  >
                    <MessageSquare size={20} strokeWidth={2.5} color={COLORS.blue} />
                    Talk to Our Team
                  </motion.button>
                </motion.div>

                <motion.div {...fadeUp(0.5)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                    <div style={{ height: 1, flex: 1, background: "#e2e8f0" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.textGray }}>Trusted by educators. Loved by students.</span>
                    <div style={{ height: 1, flex: 1, background: "#e2e8f0" }} />
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {[
                      { label: "Schools", icon: School, color: "#3b82f6" },
                      { label: "Educators", icon: BookOpen, color: "#10b981" },
                      { label: "Students", icon: Users, color: "#3b82f6" },
                      { label: "Parents", icon: Heart, color: "#ec4899" }
                    ].map((item, i, arr) => (
                      <React.Fragment key={i}>
                        <motion.div whileHover={{ y: -4, scale: 1.05 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: 1 }}>
                          <item.icon size={26} color={item.color} strokeWidth={1.5} />
                          <span style={{ fontSize: 12, fontWeight: 800, color: COLORS.navy }}>{item.label}</span>
                        </motion.div>
                        {i < arr.length - 1 && (
                          <div style={{ width: 1, height: 40, background: "#e2e8f0" }} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Image with Glowing Circle */}
              <motion.div {...fadeUp(0.5)} style={{ position: "relative", width: "min(100%, 500px)", height: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>

                {/* Advanced Glowing Outer Ring */}
                <div style={{ position: "absolute", width: "min(100%, 460px)", height: 460, zIndex: 0 }}>
                  <motion.svg width="460" height="460" viewBox="0 0 460 460"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
                  >
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" stopOpacity="1" />
                        <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <circle cx="230" cy="230" r="228" fill="none" stroke="url(#ringGrad)" strokeWidth="3" />
                  </motion.svg>
                </div>

                {/* Circular Image Wrapper */}
                <div style={{ width: "min(100%, 420px)", height: 420, borderRadius: "50%", background: "#0a0f2d", position: "relative", zIndex: 1, overflow: "hidden", border: "4px solid rgba(255,255,255,0.1)", boxShadow: "0 0 50px rgba(124, 58, 237, 0.4), inset 0 0 80px rgba(124, 58, 237, 0.9)" }}>

                  {/* Glowing Touch Point (Where boy points finger) */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: "absolute", top: "25%", left: "32%", width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%)", zIndex: 1, boxShadow: "0 0 40px rgba(255,255,255,0.6)" }}
                  />

                  {/* 3D Floating Hologram: DNA */}
                  <motion.div
                    animate={{ y: [-15, 15, -15], rotateZ: [10, 15, 10], rotateY: [0, 180, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ position: "absolute", top: "15%", left: "15%", zIndex: 0, opacity: 0.6, color: "#d8b4fe", filter: "drop-shadow(0 0 10px rgba(216, 180, 254, 0.8))" }}
                  >
                    <Dna size={80} strokeWidth={1.5} />
                  </motion.div>

                  {/* 3D Floating Hologram: Atom/Planet */}
                  <motion.div
                    animate={{ y: [20, -20, 20], rotateZ: [-10, -20, -10], rotateX: [0, 360, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
                    style={{ position: "absolute", top: "15%", right: "10%", zIndex: 0, opacity: 0.7, color: "#93c5fd", filter: "drop-shadow(0 0 15px rgba(147, 197, 253, 0.8))" }}
                  >
                    <Atom size={90} strokeWidth={1.5} />
                  </motion.div>

                  {/* 3D Floating Hologram: Ancient Temple */}
                  <motion.div
                    animate={{ x: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    style={{ position: "absolute", bottom: "15%", left: "5%", zIndex: 0, color: "#fcd34d", filter: "drop-shadow(0 0 10px rgba(252, 211, 77, 0.5))" }}
                  >
                    <Landmark size={90} strokeWidth={1} />
                  </motion.div>

                  {/* 3D Floating Hologram: Mountains */}
                  <motion.div
                    animate={{ y: [5, -5, 5], scale: [1, 1.05, 1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    style={{ position: "absolute", bottom: "10%", right: "5%", zIndex: 0, opacity: 0.6, color: "#6ee7b7", filter: "drop-shadow(0 0 15px rgba(110, 231, 183, 0.6))" }}
                  >
                    <Mountain size={110} strokeWidth={1} />
                  </motion.div>

                  {/* Geometric Hologram Lines */}
                  <svg style={{ position: "absolute", top: "25%", right: "25%", width: 120, height: 120, opacity: 0.4, zIndex: 0 }}>
                    <path d="M 10 100 L 60 10 L 110 100 Z" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="60" cy="70" r="25" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                  </svg>

                  {/* The Transparent Boy Image */}
                  <img loading="lazy" decoding="async" src="/student_proper.webp" alt="Student experiencing VR" style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 2 }} />
                </div>

                {/* Floating Bottom Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(20px)", borderRadius: 20, padding: "20px 30px", display: "flex", alignItems: "center", gap: 16, width: 380, zIndex: 2, boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(255,255,255,1)", cursor: "default" }}
                >
                  <div style={{ width: 50, height: 50, borderRadius: 25, background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 8px 20px rgba(124, 58, 237, 0.3)" }}>
                    <Rocket size={24} color="#fff" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 900, color: COLORS.navy, marginBottom: 4, lineHeight: 1.2 }}>The future is immersive.<br />The future is <span style={{ color: "#7c3aed" }}>SparkVR</span>.</h4>
                    <p style={{ fontSize: 12, color: COLORS.textGray, margin: 0, fontWeight: 600 }}>Let's shape it—together.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Banner Inside Card */}
            <motion.div
              {...fadeUp(0.6)}
              style={{ background: "#f8fafc", borderRadius: 24, padding: "40px", display: "flex", flexDirection: "column", gap: 30, border: "1px solid #e2e8f0" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                {[
                  { title: "Immersive", desc: "Engaging experiences\nthat bring concepts to life.", icon: Headset, color: "#8b5cf6" },
                  { title: "Effective", desc: "Better understanding.\nStronger outcomes.", icon: GraduationCap, color: "#10b981" },
                  { title: "Scalable", desc: "Built for schools of\nevery size.", icon: LineChart, color: "#3b82f6" },
                  { title: "Future-Ready", desc: "Preparing students for\ntomorrow's world.", icon: Users, color: "#ec4899" }
                ].map((ft, i, arr) => (
                  <React.Fragment key={i}>
                    <motion.div whileHover={{ y: -5, scale: 1.05 }} style={{ display: "flex", alignItems: "flex-start", gap: 16, flex: 1, padding: "0 10px" }}>
                      <div style={{ width: 44, height: 44, borderRadius: 22, background: `${ft.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: ft.color, flexShrink: 0 }}>
                        <ft.icon size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 900, color: COLORS.navy, marginBottom: 6 }}>{ft.title}</h4>
                        <p style={{ fontSize: 12, color: COLORS.textGray, lineHeight: 1.4, margin: 0, fontWeight: 600, whiteSpace: "pre-line" }}>{ft.desc}</p>
                      </div>
                    </motion.div>
                    {i < arr.length - 1 && (
                      <div style={{ width: 1, height: 50, background: "#e2e8f0", margin: "0 10px" }} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div style={{ textAlign: "center", paddingTop: 24, borderTop: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: COLORS.navy }}>
                  Ready to make a real impact? <span style={{ color: "#7c3aed" }}>We're ready when you are.</span>
                </span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}
