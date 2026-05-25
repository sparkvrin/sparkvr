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
import {
  Clock, Users, UserCheck, GraduationCap, CalendarCheck, RefreshCw,
  FileText, Headset, MessageCircle, CheckCircle,
  Target, BookOpen, Shield, ShieldCheck, Settings, Zap, Archive, WifiOff, Rocket,
  ArrowRight, TrendingUp
} from "lucide-react";

const VRIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <path d="M4 14a2 2 0 0 0 2 2h2l2-3h4l2 3h2a2 2 0 0 0 2-2" />
  </svg>
);

// COLORS used throughout the page
const COLORS = {
  navy: "#0a1930",
  blue: "#3b82f6",
  darkBlue: "#1e40af",
  purple: "#8b5cf6",
  green: "#10b981",
  orange: "#f59e0b",
  textGray: "#475569",
  bgLight: "#f8fafc",
};

// Powerful Animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-50px" },
  transition: { duration: 0.8, delay, type: "spring" as const, stiffness: 70, damping: 15 }
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const, margin: "-50px" },
  transition: { duration: 0.8, delay, type: "spring" as const, stiffness: 70, damping: 15 }
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true as const, margin: "-50px" },
  transition: { duration: 1, delay, type: "spring" as const, stiffness: 60, damping: 20 }
});

export default function TimetablePage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'VAG Rounded', sans-serif" }}>

      {/* ══════════════════════════════════════
          SECTION 1: HERO SECTION (FULL BACKGROUND)
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/section1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden"
      }}>
        {/* White fade gradient on the left side */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 35%, transparent 70%)",
          zIndex: 1
        }} />

        {/* Main Content Container */}
        <div style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: isMobile ? "88px 20px 60px" : "110px 60px 60px",
          position: "relative",
          zIndex: 2,
          width: "100%",
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>

          {/* TOP ROW: Left Panel & Right Panel */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "flex-start", alignItems: "flex-start", gap: 40, flex: 1 }}>

            {/* LEFT PANEL */}
            <div style={{ flex: isMobile ? "1 1 100%" : "0 0 35%", maxWidth: isMobile ? "100%" : 450, display: "flex", flexDirection: "column" }}>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: COLORS.darkBlue, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  
                </span>
                <div style={{ width: 30, height: 2, background: COLORS.darkBlue, marginTop: 6 }} />
              </motion.div>

              <motion.h1 {...fadeUp(0.2)} style={{ fontSize: "clamp(32px, 3vw, 44px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, marginBottom: 30, letterSpacing: "-0.02em" }}>
                Designed to fit<br />into the school day —<br />
                <span style={{ color: "#4f46e5" }}>seamlessly.</span>
              </motion.h1>

              <motion.div 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                style={{ display: "flex", flexDirection: "column", marginBottom: 30 }}
              >
                {[
                  { icon: Clock, color: COLORS.blue, text: "40-minute", sub: "structured sessions" },
                  { icon: Users, color: COLORS.purple, text: "Normal", sub: "batch rotation" },
                  { icon: UserCheck, color: COLORS.green, text: "Teacher", sub: "supervision" },
                  { icon: GraduationCap, color: COLORS.orange, text: "No extra", sub: "academic load" },
                ].map((item, i, arr) => (
                  <React.Fragment key={i}>
                    <motion.div 
                      variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                      transition={{ type: "spring", stiffness: 70, damping: 15 }}
                      whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.4)" }} 
                      style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 10px", borderRadius: 12, cursor: "default", transition: "background-color 0.3s" }}
                    >
                      <div style={{ width: 40, height: 40, borderRadius: "50%", border: `2px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, background: "#fff", boxShadow: `0 4px 10px ${item.color}15` }}>
                        <item.icon size={20} strokeWidth={2.5} />
                      </div>
                      <div>
                        <span style={{ display: "block", fontSize: 16, fontWeight: 800, color: COLORS.navy, lineHeight: 1.2 }}>{item.text}</span>
                        <span style={{ display: "block", fontSize: 14, fontWeight: 500, color: COLORS.textGray }}>{item.sub}</span>
                      </div>
                    </motion.div>
                    {i < arr.length - 1 && <div style={{ height: 1, width: "80%", background: "linear-gradient(to right, #e2e8f0, transparent)", margin: "2px 0 2px 10px" }} />}
                  </React.Fragment>
                ))}
              </motion.div>

              <motion.div 
                {...fadeUp(0.6)} 
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                style={{ background: "#fff", padding: "20px 24px", borderRadius: 16, display: "inline-block", alignSelf: "flex-start", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid rgba(255,255,255,0.8)", cursor: "default", transition: "all 0.3s" }}
              >
                <span style={{ display: "block", fontSize: 22, fontWeight: 900, color: COLORS.blue, lineHeight: 1.2 }}>No disruption.</span>
                <span style={{ display: "block", fontSize: 22, fontWeight: 900, color: "#7c3aed", lineHeight: 1.2 }}>No compromise.</span>
              </motion.div>
            </div>

            {/* RIGHT PANEL: TIMETABLE */}
            {/* 💡 MARGIN ADJUSTMENT: Yahan se marginLeft="auto" hata diya gaya hai taaki box Left mein shift ho sake */}
            <motion.div 
              {...scaleIn(0.4)} 
              whileHover={{ y: -5, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
              style={{ flex: isMobile ? "1 1 100%" : "0 0 45%", maxWidth: isMobile ? "100%" : 580, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", borderRadius: 20, padding: isMobile ? "16px" : "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", border: "1px solid rgba(255,255,255,0.8)", transition: "box-shadow 0.3s", overflowX: "auto", WebkitOverflowScrolling: "touch" }}
            >
              <h3 style={{ textAlign: "center", fontSize: 13, fontWeight: 800, color: COLORS.navy, letterSpacing: "0.05em", marginBottom: 16 }}>SCHOOL TIMETABLE</h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr repeat(5, 1fr)", gap: 4, minWidth: isMobile ? 320 : "auto" }}>
                {/* Header Row */}
                <div />
                {['MON', 'TUE', 'WED', 'THU', 'FRI'].map(day => (
                  <div key={day} style={{ textAlign: "center", fontSize: 9, fontWeight: 800, color: COLORS.textGray, paddingBottom: 4 }}>{day}</div>
                ))}

                {/* Rows */}
                {[
                  { time: "9:00 AM", cols: ["English", "Mathematics", "Science", "Social Studies", "English"] },
                  { time: "10:00 AM", cols: ["Mathematics", "Science", "English", "Mathematics", "Science"] },
                  { time: "11:00 AM", cols: ["Science", "Social Studies", "Mathematics", "English", "Social Studies"] },
                  { isHighlight: true, time: "12:00 PM\nSparkVR session\n(40 mins)", cols: ["vr", "vr", "vr", "vr", "vr"] },
                  { time: "1:00 PM", cols: ["Social Studies", "English", "Computer", "Science", "Mathematics"] },
                  { time: "2:00 PM", cols: ["Co-curricular", "Library", "Sports", "Art", "Co-curricular"] }
                ].map((row, i) => (
                  <React.Fragment key={i}>
                    <div style={{
                      fontSize: 9,
                      fontWeight: row.isHighlight ? 700 : 600,
                      color: row.isHighlight ? "#7c3aed" : COLORS.textGray,
                      display: "flex",
                      alignItems: "center",
                      whiteSpace: "pre-line",
                      lineHeight: 1.2,
                      background: row.isHighlight ? "#f3e8ff" : "transparent",
                      padding: "6px 4px",
                      borderRadius: 6
                    }}>
                      {row.time}
                    </div>
                    {row.cols.map((col, j) => (
                      <motion.div key={j} whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }} style={{
                        background: row.isHighlight ? "#f3e8ff" : "#f1f5f9",
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px 2px",
                        fontSize: 8,
                        fontWeight: row.isHighlight ? 800 : 600,
                        color: row.isHighlight ? "#7c3aed" : COLORS.textGray,
                        textAlign: "center",
                        cursor: row.isHighlight ? "pointer" : "default",
                        transition: "box-shadow 0.2s"
                      }}>
                        {col === "vr" ? <VRIcon size={16} color="#7c3aed" /> : col}
                      </motion.div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>

          {/* BOTTOM BANNER */}
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20, staggerChildren: 0.1, delayChildren: 0.4 } }
            }}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: 20,
              padding: "24px",
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: 20,
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.8)",
              marginTop: 40
            }}
          >
            {[
              { icon: CalendarCheck, color: COLORS.blue, title: "Fits into\nexisting periods", desc: "Designed for standard\nclass durations." },
              { icon: RefreshCw, color: COLORS.purple, title: "Works with your\nschedule", desc: "Seamless integration with\ntimetables." },
              { icon: ShieldCheck, color: COLORS.green, title: "Maintains academic\ncontinuity", desc: "Learning continues without\ninterruptions." },
              { icon: TrendingUp, color: COLORS.orange, title: "Enhances learning\nwithout overload", desc: "Deep engagement,\nzero extra burden." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ type: "spring", stiffness: 70, damping: 15 }}
                whileHover={{ y: -6, scale: 1.02 }} 
                style={{ display: "flex", gap: 12, alignItems: "center", cursor: "default" }}
              >
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${item.color}10`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0, boxShadow: `0 4px 12px ${item.color}15` }}>
                  <item.icon size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 800, color: COLORS.navy, margin: "0 0 4px 0", whiteSpace: "pre-line", lineHeight: 1.2 }}>{item.title}</h4>
                  <p style={{ fontSize: 11, color: COLORS.textGray, margin: 0, whiteSpace: "pre-line", lineHeight: 1.3, fontWeight: 500 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2: STRUCTURED SESSION FLOW
      ══════════════════════════════════════ */}
      <section style={{ padding: "60px 0", background: "#f8fafc", position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 20px" : "0 60px" }}>

          {/* HEADER */}
          <div style={{ display: "flex", flexDirection: (isMobile || isTablet) ? "column" : "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: isMobile ? 32 : 60, flexWrap: "wrap", gap: isMobile ? 16 : 40 }}>
            <div style={{ flex: isMobile ? "1 1 100%" : "0 0 55%" }}>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.purple, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  STRUCTURED SESSION FLOW
                </span>
                <div style={{ width: 40, height: 3, background: COLORS.purple, marginTop: 8 }} />
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 3.5vw, 48px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                A 40-minute structured<br />
                <span style={{ color: COLORS.purple }}>session. Maximum learning.</span>
              </motion.h2>
            </div>
            <motion.p {...fadeUp(0.3)} style={{ flex: (isMobile || isTablet) ? "1 1 100%" : "0 0 35%", fontSize: isMobile ? 15 : 18, color: COLORS.navy, fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
              Every SparkVR session follows a proven flow that keeps learning focused, engaging and easy to manage.
            </motion.p>
          </div>

          {/* 5-STEP PROCESS CARD */}
          <motion.div 
            {...fadeUp(0.4)}
            style={{ background: "#fff", borderRadius: isMobile ? 20 : 32, padding: isMobile ? "20px 16px" : "40px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", position: "relative", marginBottom: 30, overflowX: "hidden" }}
          >
            {/* Dashed Line */}
            {!isMobile && <div style={{ position: "absolute", top: 80, left: "10%", right: "10%", height: 1, borderTop: "2px dashed #cbd5e1", zIndex: 1 }} />}

            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: 20, position: "relative", zIndex: 2 }}
            >
              {[
                { time: "5 MIN", title: "1. Introduction", desc: "Teacher introduces the\ntopic and learning\nobjectives.", color: COLORS.blue, icon: FileText, img: "/section2/session_image_1.webp" },
                { time: "20 MIN", title: "2. VR Experience", desc: "Students explore the concept\nthrough immersive,\ninteractive content.", color: COLORS.purple, icon: null, isVR: true, img: "/section2/session_image_2.webp" },
                { time: "5 MIN", title: "3. Teacher Guidance", desc: "Teacher leads a guided\ndiscussion and checks\nunderstanding.", color: COLORS.green, icon: Users, img: "/section2/session_image_3.webp" },
                { time: "5 MIN", title: "4. Discussion", desc: "Students share observations,\nask questions and connect\nideas.", color: COLORS.orange, icon: MessageCircle, img: "/section2/session_image_4.webp" },
                { time: "5 MIN", title: "5. Concept Reinforcement", desc: "Key takeaways are\nreinforced with a quick\nrecap and reflection.", color: COLORS.blue, icon: CheckCircle, img: "/section2/session_image_5.webp" },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                  transition={{ type: "spring", stiffness: 70, damping: 15 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", height: "100%" }}
                >
                  
                  {/* Icon */}
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} style={{ width: 80, height: 80, borderRadius: "50%", background: "#fff", border: `2px solid ${step.color}20`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: `0 0 0 10px #fff`, zIndex: 2 }}>
                    {(() => {
                      const StepIcon = step.icon;
                      if (step.isVR) return <VRIcon size={36} color={step.color} />;
                      return StepIcon ? <StepIcon size={36} strokeWidth={1.5} color={step.color} /> : null;
                    })()}
                  </motion.div>

                  {/* Badge */}
                  <div style={{ background: `${step.color}10`, color: step.color, padding: "6px 20px", borderRadius: 20, fontSize: 13, fontWeight: 800, marginBottom: 24 }}>
                    {step.time}
                  </div>

                  {/* Text */}
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: COLORS.navy, marginBottom: 12, height: 44 }}>{step.title}</h4>
                  <p style={{ fontSize: 13, color: COLORS.textGray, lineHeight: 1.5, marginBottom: 30, padding: "0 10px", flexGrow: 1, whiteSpace: "pre-line" }}>{step.desc}</p>

                  {/* Image */}
                  <motion.div whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} style={{ width: "100%", height: 160, borderRadius: 16, overflow: "hidden", marginTop: "auto", transition: "box-shadow 0.3s" }}>
                    <img loading="lazy" decoding="async" src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </motion.div>

                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* BOTTOM BANNER */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
            style={{ background: "#fff", borderRadius: 24, padding: isMobile ? "20px" : isTablet ? "24px" : "30px 40px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 20 : 40 }}
          >
            {/* Left Box */}
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flex: isMobile ? "none" : "0 0 32%", borderRight: isMobile ? "none" : "1px solid #e2e8f0", paddingRight: isMobile ? 0 : 40 }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${COLORS.purple}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Clock size={30} color={COLORS.purple} strokeWidth={2.5} />
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 900, color: COLORS.navy, lineHeight: 1.3, marginBottom: 8 }}>40 minutes.<br />Complete. Structured.</h4>
                <p style={{ fontSize: 13, color: COLORS.textGray, lineHeight: 1.4, margin: 0, fontWeight: 500 }}>Designed to deliver deep understanding without disrupting the school day.</p>
              </div>
            </div>

            {/* Right Features */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)", flex: 1, gap: 16 }}>
              {[
                { icon: Target, color: COLORS.green, title: "Focused", desc: "Every minute\nhas a purpose." },
                { icon: Users, color: COLORS.purple, title: "Engaging", desc: "Immersive experiences\nthat students love." },
                { icon: BookOpen, color: COLORS.orange, title: "Effective", desc: "Built for better\nunderstanding\nand retention." },
                { icon: ShieldCheck, color: COLORS.blue, title: "Easy to Manage", desc: "Simple, predictable\nand teacher-friendly\nflow." }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -3 }} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${item.color}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={22} color={item.color} strokeWidth={2} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: 14, fontWeight: 800, color: COLORS.navy, marginBottom: 4 }}>{item.title}</h5>
                    <p style={{ fontSize: 12, color: COLORS.textGray, lineHeight: 1.4, margin: 0, fontWeight: 500, whiteSpace: "pre-line" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3: BATCH ROTATION SYSTEM
      ══════════════════════════════════════ */}
      <section style={{ padding: "60px 0", background: "#f8fafc", position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 20px" : "0 60px" }}>

          <div style={{ display: "flex", gap: isMobile ? 24 : 60, alignItems: "flex-start", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row" }}>
            
            {/* LEFT COLUMN */}
            <div style={{ flex: isMobile ? "1 1 100%" : "1 1 45%", width: "100%", minWidth: 0 }}>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.purple, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  BATCH ROTATION SYSTEM
                </span>
                <div style={{ width: 40, height: 3, background: COLORS.purple, marginTop: 8 }} />
              </motion.div>
              
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 3.5vw, 48px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
                Normal classes.<br />
                <span style={{ color: COLORS.purple }}>Smarter rotation.</span>
              </motion.h2>
              
              <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: COLORS.navy, fontWeight: 500, lineHeight: 1.5, marginBottom: 40, maxWidth: 450 }}>
                SparkVR fits into your existing classroom structure with simple batch rotation.
              </motion.p>

              {/* 4 Cards Grid */}
              <motion.div 
                initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}
              >
                {[
                  { icon: Users, color: COLORS.purple, title: "Optimized\nClassroom Flow", desc: "Smooth transitions,\nzero downtime." },
                  { icon: RefreshCw, color: COLORS.green, title: "Efficient Device\nUsage", desc: "More students,\nmore impact." },
                  { icon: CalendarCheck, color: COLORS.orange, title: "Easy\nScheduling", desc: "Fits into your\ntimetable." },
                  { icon: ShieldCheck, color: COLORS.blue, title: "Safe &\nSupervised", desc: "Every student,\nevery time." }
                ].map((item, i) => (
                  <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(0,0,0,0.08)" }} style={{ background: "#fff", borderRadius: 16, padding: "20px 12px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.02)", transition: "all 0.3s" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${item.color}10`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px auto" }}>
                      <item.icon size={22} color={item.color} strokeWidth={2} />
                    </div>
                    <h5 style={{ fontSize: 13, fontWeight: 800, color: COLORS.navy, marginBottom: 8, whiteSpace: "pre-line", height: 32 }}>{item.title}</h5>
                    <p style={{ fontSize: 11, color: COLORS.textGray, lineHeight: 1.4, margin: 0, whiteSpace: "pre-line" }}>{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Sample Rotation Cycle */}
              <motion.div {...fadeUp(0.5)}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
                  <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
                  <span style={{ padding: "0 16px", fontSize: 14, fontWeight: 800, color: COLORS.navy }}>Sample Rotation Cycle (40-Minute Period)</span>
                  <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
                </div>

                <div style={{ background: "#fff", borderRadius: 24, padding: isMobile ? "16px 12px" : "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.02)", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minWidth: isMobile ? 340 : "auto", gap: isMobile ? 8 : 0 }}>
                    
                    {[
                      { title: "First 40-Minute Period", rows: [ { g: "Group A", a: "VR Session", c: COLORS.purple }, { g: "Group B", a: "Guided Activity", c: COLORS.green }, { g: "Group C", a: "Independent Learning", c: COLORS.orange } ] },
                      { title: "Next 40-Minute Period", rows: [ { g: "Group B", a: "VR Session", c: COLORS.green }, { g: "Group C", a: "Guided Activity", c: COLORS.orange }, { g: "Group A", a: "Independent Learning", c: COLORS.purple } ] },
                      { title: "Next 40-Minute Period", rows: [ { g: "Group C", a: "VR Session", c: COLORS.orange }, { g: "Group A", a: "Guided Activity", c: COLORS.purple }, { g: "Group B", a: "Independent Learning", c: COLORS.green } ] },
                    ].map((col, i) => (
                      <React.Fragment key={i}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                          <div style={{ background: "#f3e8ff", color: COLORS.purple, fontSize: 11, fontWeight: 800, padding: "6px 12px", borderRadius: 12, textAlign: "center", alignSelf: "center" }}>
                            {col.title}
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {col.rows.map((row, j) => (
                              <div key={j} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700 }}>
                                <span style={{ color: row.c, width: 50 }}>{row.g}</span>
                                <ArrowRight size={12} color="#94a3b8" />
                                <span style={{ color: COLORS.textGray }}>{row.a}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {i < 2 && <ArrowRight size={20} color="#cbd5e1" style={{ margin: "0 10px", marginTop: 20 }} />}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Return Loop Arrow */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 30, color: COLORS.textGray }}>
                    <RefreshCw size={14} />
                    <span style={{ fontSize: 12, fontWeight: 600 }}>Continue rotation for equal exposure.</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN */}
            <div style={{ flex: isMobile ? "1 1 100%" : "1 1 45%", width: "100%", minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
              
              <motion.div {...fadeUp(0.2)}>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: COLORS.navy, margin: "0 0 4px 0" }}>Divide. Rotate. Learn.</h3>
                <p style={{ fontSize: 16, color: COLORS.textGray, margin: 0, fontWeight: 500 }}>All within the same class period.</p>
              </motion.div>

              <div style={{ display: "flex", gap: 16, alignItems: "stretch", flexDirection: isMobile ? "column" : "row" }}>
                {/* Main Classroom Image */}
                <motion.div {...scaleIn(0.4)} style={{ flex: 1, borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", minHeight: isMobile ? 200 : undefined }}>
                  <img loading="lazy" decoding="async" src="/extracted_classroom_image.webp" alt="Classroom Rotation" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </motion.div>

                {/* Vertical Panel */}
                <motion.div {...fadeLeft(0.5)} style={{ width: isMobile ? "100%" : 220, background: "#fff", borderRadius: 24, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.02)" }}>
                  
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${COLORS.purple}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock size={18} color={COLORS.purple} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h5 style={{ fontSize: 12, fontWeight: 800, color: COLORS.navy, margin: 0, lineHeight: 1.2 }}>One class.<br/>Three activities.</h5>
                      <p style={{ fontSize: 9, color: COLORS.textGray, margin: "2px 0 0 0", fontWeight: 600 }}>Maximum engagement.</p>
                    </div>
                  </div>

                  <div style={{ height: 1, background: "#f1f5f9" }} />

                  {[
                    { g: "Group A", a: "VR Session", c: COLORS.purple, icon: VRIcon },
                    { g: "Group B", a: "Guided Activity", c: COLORS.green, icon: Users },
                    { g: "Group C", a: "Independent Learning", c: COLORS.orange, icon: BookOpen }
                  ].map((item, i) => (
                    <motion.div whileHover={{ x: 5 }} key={i} style={{ display: "flex", gap: 12, alignItems: "center", cursor: "default" }}>
                      <item.icon size={22} color={item.c} strokeWidth={2} />
                      <div>
                        <h5 style={{ fontSize: 12, fontWeight: 800, color: item.c, margin: 0 }}>{item.g}</h5>
                        <p style={{ fontSize: 11, color: COLORS.navy, margin: 0, fontWeight: 600 }}>{item.a}</p>
                      </div>
                    </motion.div>
                  ))}

                  <div style={{ height: 1, background: "#f1f5f9" }} />

                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <RefreshCw size={20} color={COLORS.blue} strokeWidth={2.5} />
                    <p style={{ fontSize: 11, color: COLORS.navy, margin: 0, fontWeight: 600, lineHeight: 1.3 }}>Rotate groups in the next session.</p>
                  </div>

                </motion.div>
              </div>

              {/* Smarter Rotation Banner */}
              <motion.div {...fadeUp(0.6)} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} style={{ background: "#fff", borderRadius: 24, padding: "24px 30px", display: "flex", alignItems: "center", gap: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.02)", transition: "all 0.3s" }}>
                <div style={{ width: 50, height: 50, borderRadius: "50%", background: `${COLORS.blue}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Target size={24} color={COLORS.blue} strokeWidth={2} />
                </div>
                <div>
                  <p style={{ fontSize: 13, color: COLORS.textGray, margin: "0 0 4px 0", fontWeight: 500 }}>Every student gets equal time with immersive learning without disrupting classroom flow.</p>
                  <h4 style={{ fontSize: 18, fontWeight: 900, color: COLORS.navy, margin: 0 }}>Smarter rotation. <span style={{ color: COLORS.purple }}>Stronger learning.</span></h4>
                </div>
              </motion.div>

            </div>
          </div>

          {/* BOTTOM FULL WIDTH BANNER */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
            style={{ background: "#fff", borderRadius: 24, padding: isMobile ? "20px 16px" : "30px", marginTop: 40, display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 16 : 20, boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.02)" }}
          >
            {[
              { icon: Users, color: COLORS.purple, text: "Supports classrooms\nof all sizes" },
              { icon: Clock, color: COLORS.green, text: "No extra periods\nrequired" },
              { icon: CalendarCheck, color: COLORS.orange, text: "Fits seamlessly into\nyour schedule" },
              { icon: CheckCircle, color: COLORS.blue, text: "More learning.\nZero disruption." }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -3 }} style={{ display: "flex", alignItems: "center", gap: 16, cursor: "default" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${item.color}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.icon size={22} color={item.color} strokeWidth={2} />
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy, margin: 0, whiteSpace: "pre-line", lineHeight: 1.3 }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4: OPERATIONAL SIMPLICITY
      ══════════════════════════════════════ */}
      <section style={{ padding: "60px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 20px" : "0 60px" }}>

          {/* HEADER: 2-column layout */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: isMobile ? 24 : 60, marginBottom: 50, flexWrap: "wrap", flexDirection: isMobile ? "column" : "row" }}>
            {/* Left: Label + Heading + Subtitle */}
            <div style={{ flex: isMobile ? "1 1 100%" : "0 0 50%" }}>
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: COLORS.purple, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  OPERATIONAL SIMPLICITY
                </span>
                <div style={{ width: 40, height: 3, background: COLORS.purple, marginTop: 8 }} />
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 3.5vw, 52px)", fontWeight: 900, color: COLORS.navy, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
                Simple to manage.<br />
                <span style={{ color: COLORS.purple }}>Easy to sustain.</span>
              </motion.h2>
              <motion.p {...fadeUp(0.3)} style={{ fontSize: 16, color: COLORS.textGray, fontWeight: 500, lineHeight: 1.6, margin: 0, maxWidth: 420 }}>
                SparkVR is designed for schools. Simple setup, minimal maintenance, maximum impact.
              </motion.p>
            </div>

            {/* Vertical Divider - hide on mobile */}
            {!isMobile && <div style={{ width: 1, background: "#e2e8f0", alignSelf: "stretch", margin: "10px 0" }} />}

            {/* Right: Built for real classrooms */}
            <motion.div {...fadeUp(0.35)} style={{ flex: 1, display: "flex", gap: 24, alignItems: "flex-start", paddingTop: 10 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${COLORS.blue}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <CheckCircle size={30} color={COLORS.blue} strokeWidth={2} />
              </div>
              <div>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: COLORS.navy, margin: "0 0 10px 0" }}>Built for real classrooms.</h4>
                <p style={{ fontSize: 15, color: COLORS.textGray, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  From setup to daily use, everything is designed to be practical, reliable and school-friendly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 5 Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: 20, marginBottom: 30 }}
          >
            {[
              { icon: WifiOff, color: COLORS.purple, title: "No Internet\nDependency", desc: "Works offline once content is installed. Reliable learning, every time.", img: "/section5/operational_image_1.webp" },
              { icon: Archive, color: COLORS.green, title: "Safe Storage", desc: "Compact, durable and easy to store in classroom cabinets.", img: "/section5/operational_image_2.webp" },
              { icon: Zap, color: COLORS.orange, title: "Easy Charging", desc: "Quick charging with organized docks. Ready whenever you are.", img: "/section5/operational_image_3.webp" },
              { icon: Settings, color: COLORS.blue, title: "Predictable\nMaintenance", desc: "Designed for long-term use with minimal upkeep and maximum reliability.", img: "/section5/operational_image_4.webp" },
              { icon: Rocket, color: COLORS.purple, title: "Quick\nDeployment", desc: "Simple setup process. Get started in hours, not weeks.", img: "/section5/operational_image_5.webp" },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ type: "spring", stiffness: 70, damping: 15 }}
                whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.1)" }}
                style={{ background: "#fff", borderRadius: 24, border: "1px solid #f0f4f8", display: "flex", flexDirection: "column", overflow: "hidden", transition: "box-shadow 0.3s" }}
              >
                {/* Top: Icon + Title + Desc */}
                <div style={{ padding: "28px 20px 20px 20px", textAlign: "center", flex: 1 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${card.color}12`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
                    <card.icon size={26} color={card.color} strokeWidth={2} />
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 800, color: COLORS.navy, marginBottom: 10, whiteSpace: "pre-line", lineHeight: 1.3 }}>{card.title}</h4>
                  <p style={{ fontSize: 12, color: COLORS.textGray, lineHeight: 1.5, margin: "0 0 16px 0", fontWeight: 500 }}>{card.desc}</p>
                  <div style={{ width: 30, height: 2, background: card.color, margin: "0 auto" }} />
                </div>

                {/* Bottom: Image */}
                <motion.div whileHover={{ scale: 1.02 }} style={{ padding: "0 16px 16px 16px", overflow: "hidden" }}>
                  <img loading="lazy" decoding="async" src={card.img} alt={card.title} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 16, display: "block" }} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Banner: 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
            style={{ background: "#fff", borderRadius: 24, padding: isMobile ? "20px" : isTablet ? "24px" : "30px 40px", display: "flex", flexDirection: (isMobile || isTablet) ? "column" : "row", alignItems: (isMobile || isTablet) ? "flex-start" : "center", gap: (isMobile || isTablet) ? 20 : 0, boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid #f0f4f8" }}
          >
            {/* Left: Fewer hassles */}
            <div style={{ display: "flex", gap: 20, alignItems: "center", flex: isMobile ? "none" : "0 0 28%", paddingRight: isMobile ? 0 : 40 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${COLORS.blue}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Shield size={26} color={COLORS.blue} strokeWidth={2} />
              </div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 900, color: COLORS.navy, margin: 0, lineHeight: 1.2 }}>Fewer hassles.<br />More learning.</h4>
              </div>
            </div>

            {/* Divider */}
            {!isMobile && <div style={{ width: 1, background: "#e2e8f0", alignSelf: "stretch" }} />}

            {/* Middle: Description */}
            <motion.p {...fadeUp(0.2)} style={{ flex: 1, fontSize: 15, color: COLORS.textGray, lineHeight: 1.6, margin: 0, fontWeight: 500, padding: isMobile ? 0 : "0 40px" }}>
              We handle the complexity so you can focus on what matters— teaching and student success.
            </motion.p>

            {/* Divider */}
            {!isMobile && <div style={{ width: 1, background: "#e2e8f0", alignSelf: "stretch" }} />}

            {/* Right: Support team */}
            <div style={{ display: "flex", gap: 20, alignItems: "center", flex: isMobile ? "none" : "0 0 28%", paddingLeft: isMobile ? 0 : 40 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${COLORS.purple}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Users size={26} color={COLORS.purple} strokeWidth={2} />
              </div>
              <div>
                <h5 style={{ fontSize: 15, fontWeight: 800, color: COLORS.navy, margin: "0 0 4px 0", lineHeight: 1.2 }}>Our support team is always ready to help.</h5>
                <p style={{ fontSize: 13, color: COLORS.purple, margin: 0, fontWeight: 700 }}>You&apos;re never on your own.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
