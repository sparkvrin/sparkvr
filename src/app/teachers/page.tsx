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
  GraduationCap, Target, Settings, BookOpen, ShieldCheck,
  Users, MessageSquare, ClipboardList, TrendingUp, Presentation,
  Calendar, Layers, CheckCircle2, MonitorPlay, Zap, Globe,
  Rocket, Search, ShieldAlert, Award, Clock,
  Headphones, Mail, Star, Heart, RefreshCcw, Glasses, Lightbulb, BarChart2, Quote, ArrowRight
} from "lucide-react";

/* ─── ANIMATION VARIANTS ─── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-100px" },
  transition: { delay, duration, ease: EASE },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.9, ease: EASE },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.9, ease: EASE },
});

const float = {
  animate: {
    y: [0, -10, 0] as any,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


export default function TeachersPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <main style={{ minHeight: "100vh", background: "#f8f9fc" }}>

      {/* ══════════════════════════════════════
          SECTION 1: Technology that respects teaching
      ══════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "0" : "100px 0 20px", background: "#ffffff", position: "relative", overflow: "hidden" }}>
        {/* Right Side Image - absolute on desktop, hidden on mobile (content shown above) */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", zIndex: 0 }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", overflow: "hidden" }}>
              <motion.img loading="lazy" decoding="async"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" as const }}
                src="/teacher_1.webp" alt="VR Learning" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "40%", background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.8) 30%, transparent 100%)" }} />
          </motion.div>
        )}

        {/* Mobile Image - shown above content */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            style={{ width: "100%", height: 240, position: "relative", overflow: "hidden" }}
          >
            <motion.img loading="lazy" decoding="async"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" as const }}
              src="/teacher_1.webp" alt="VR Learning" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>
        )}

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: isMobile ? "20px 20px" : "0 20px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", minHeight: isMobile ? "auto" : 280, flexDirection: "column" }}>
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : isTablet ? "60%" : "45%", width: isMobile ? "100%" : undefined }}>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Technology that<br />
                <span style={{ color: "#6366f1" }}>respects teaching.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 16, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 24 }}>
                SparkVR is designed to support how you teach, engage your students, and achieve your learning goals.
              </motion.p>

              {/* 4 Icons Row */}
              <motion.div {...fadeLeft(0.4)} style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
                {[
                  { icon: Users, title: "Teacher-guided\nsessions", desc: "You lead the class.\nWe enhance it." },
                  { icon: Target, title: "Clear learning\nobjectives", desc: "Every experience\nhas a purpose." },
                  { icon: Settings, title: "Minimal technical\ncomplexity", desc: "Easy to use.\nEasy to manage." },
                  { icon: BookOpen, title: "Academic\nalignment", desc: "Mapped to curriculum.\nBuilt for classrooms." }
                ].map((item, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5, scale: 1.05 }} style={{ textAlign: "center" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 24, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: "#0052cc" }}>
                      <motion.div {...float}><item.icon size={24} strokeWidth={1.5} /></motion.div>
                    </div>
                    <h4 style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", whiteSpace: "pre-line", marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 12, color: "#64748b", whiteSpace: "pre-line", margin: 0 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Info Box */}
              <motion.div {...fadeLeft(0.5)} whileHover={{ x: 5, boxShadow: "0 10px 20px rgba(0,82,204,0.05)" }} style={{ background: "#f8fafc", borderRadius: 16, padding: "20px 24px", border: "1px solid #e2e8f0", display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 24, background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck size={28} color="#4f46e5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>SparkVR empowers teachers. <span style={{ color: "#4f46e5" }}>It does not replace them.</span></h3>
                  <p style={{ fontSize: 14, color: "#475569", margin: 0, fontWeight: 500 }}>We support your expertise. <span style={{ color: "#4f46e5" }}>You inspire learning.</span></p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.6)} whileHover={{ y: -5 }} style={{ background: "#f8f9fc", borderRadius: 20, padding: isMobile ? "20px" : "24px 40px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? 16 : 40, marginTop: 40, border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 28, background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5" }}>
                <Users size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 800, color: "#001a4d", margin: "0 0 4px 0" }}>Real teachers. Real classrooms. Real impact.</h4>
                <p style={{ fontSize: isMobile ? 14 : 16, color: "#6366f1", margin: 0, fontWeight: 600 }}>SparkVR is built for educators, by people who understand education.</p>
              </div>
            </div>

            {/* Divider - hide on mobile */}
            {!isMobile && <div style={{ width: 1, height: 40, background: "#cbd5e1" }} />}

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <GraduationCap size={32} color="#4f46e5" strokeWidth={1.5} />
              <p style={{ fontSize: 14, color: "#475569", fontWeight: 500, margin: 0 }}>Teaching remains<br />at the heart of<br />everything we do.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2: Teachers remain at the center
      ══════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "0" : "40px 0", background: "#f8f9fc", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", zIndex: 0 }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", overflow: "hidden" }}>
              <motion.img loading="lazy" decoding="async"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" as const }}
                src="/teacher_2.webp" alt="VR Learning" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "40%", background: "linear-gradient(to right, #f8f9fc 0%, rgba(248,249,252,0.8) 30%, transparent 100%)" }} />
          </motion.div>
        )}

        {isMobile && (
          <div style={{ width: "100%", height: 220, overflow: "hidden" }}>
            <motion.img loading="lazy" decoding="async"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" as const }}
              src="/teacher_2.webp" alt="VR Learning" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        )}

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: isMobile ? "20px 20px" : "0 20px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", minHeight: isMobile ? "auto" : 280, flexDirection: "column" }}>
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : isTablet ? "60%" : "45%", width: isMobile ? "100%" : undefined }}>
              <motion.div {...fadeLeft(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <Users size={20} color="#0052cc" />
                <span style={{ fontSize: 14, fontWeight: 800, color: "#0052cc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  TEACHERS STAY IN CONTROL
                </span>
              </motion.div>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Teachers remain<br />
                at the <span style={{ color: "#6366f1" }}>center of learning.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 16, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 24 }}>
                SparkVR enhances your teaching.<br />You lead the classroom. You guide the experience.
              </motion.p>

              {/* Steps List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: Presentation, title: "Introduce concepts", desc: "You set the context and spark curiosity." },
                  { icon: MessageSquare, title: "Guide exploration", desc: "Students experience while you facilitate meaningful learning." },
                  { icon: Users, title: "Lead discussions", desc: "You connect experiences to real-world understanding." },
                  { icon: ClipboardList, title: "Assess understanding", desc: "You evaluate, clarify, and reinforce key concepts." },
                  { icon: Target, title: "Achieve learning goals", desc: "You drive outcomes aligned with your curriculum." }
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeLeft(0.4 + idx * 0.1)} whileHover={{ x: 10, scale: 1.02, background: "#ffffff", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }} style={{ display: "flex", alignItems: "center", gap: 20, background: "rgba(255,255,255,0.6)", padding: "12px 20px", borderRadius: 12, transition: "all 0.3s" }}>
                    <div style={{ color: "#4f46e5" }}>
                      <motion.div {...float}><item.icon size={24} strokeWidth={1.5} /></motion.div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", margin: "0 0 4px 0" }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.6)} whileHover={{ y: -5 }} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 24, marginTop: 40 }}>
            <div style={{ flex: 1, background: "linear-gradient(135deg, #818cf8 0%, #a855f7 100%)", borderRadius: 16, padding: isMobile ? "24px 20px" : "32px 40px", display: "flex", alignItems: "center", gap: 24, boxShadow: "0 15px 30px rgba(139,92,246,0.2)" }}>
              <div style={{ width: 64, height: 64, borderRadius: 32, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}>
                <Users size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: "#ffffff", margin: "0 0 8px 0" }}>You are the educator. SparkVR is your ally.</h4>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", margin: 0, fontWeight: 500 }}>Technology that empowers your expertise.</p>
              </div>
            </div>

            <div style={{ flex: 1, background: "#ffffff", borderRadius: 16, padding: "32px 40px", display: "flex", alignItems: "center", gap: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
              <div style={{ color: "#4f46e5" }}><MessageSquare size={48} strokeWidth={1.5} /></div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", margin: 0 }}>Great learning happens when<br /><span style={{ color: "#4f46e5" }}>great teaching leads the way.</span></h4>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16, paddingLeft: 24, borderLeft: "1px solid #e2e8f0" }}>
                <ShieldCheck size={32} color="#4f46e5" />
                <p style={{ fontSize: 14, fontWeight: 700, color: "#475569", margin: 0 }}>You lead.<br /><span style={{ color: "#4f46e5" }}>We support.</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3: A structured flow
      ══════════════════════════════════════ */}
      {/* ══════════════════════════════════════
          SECTION 3: A structured flow (Same to Same as Image)
      ══════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "0" : "60px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
            style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "85%", zIndex: 0 }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", overflow: "hidden" }}>
              <motion.img loading="lazy" decoding="async"
                whileHover={{ scale: 1.05 }}
                src="/teacher_3.webp" alt="VR Learning Flow" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "30%", background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.5) 50%, transparent 100%)" }} />
          </motion.div>
        )}

        {isMobile && (
          <div style={{ width: "100%", height: 220, overflow: "hidden" }}>
            <motion.img loading="lazy" decoding="async"
              whileHover={{ scale: 1.05 }}
              src="/teacher_3.webp" alt="VR Learning Flow" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        )}

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: isMobile ? "20px 20px" : isTablet ? "0 32px" : "0 20px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "flex-start", minHeight: isMobile ? "auto" : 450, gap: 40, flexDirection: "column" }}>
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : isTablet ? "60%" : 500, width: isMobile ? "100%" : undefined }}>
              <motion.div {...fadeLeft(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <BookOpen size={20} color="#0052cc" />
                <span style={{ fontSize: 13, fontWeight: 800, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  GUIDED CLASSROOM FLOW
                </span>
              </motion.div>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
                A structured flow.<br />
                <span style={{ color: "#4f46e5" }}>Meaningful learning.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 16, color: "#475569", lineHeight: 1.5, fontWeight: 500, marginBottom: 32 }}>
                SparkVR provides a simple, guided flow that helps you deliver engaging VR lessons with confidence and clarity.
              </motion.p>

              {/* Vertical List - 4 Cards to match image */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: Presentation, title: "Plan with purpose", desc: "Preview lessons, objectives, and key outcomes\nbefore class.", color: "#8b5cf6" },
                  { icon: Users, title: "Teach with confidence", desc: "Facilitate immersive experiences while\nstaying in control.", color: "#10b981" },
                  { icon: MessageSquare, title: "Discuss and connect", desc: "Guide reflection and discussion to connect\nVR experiences to real-world concepts.", color: "#f59e0b" },
                  { icon: ClipboardList, title: "Assess and reinforce", desc: "Check understanding and reinforce learning\nwith built-in assessments and activities.", color: "#3b82f6" }
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeLeft(0.4 + idx * 0.1)} whileHover={{ x: 10, scale: 1.02 }} style={{ display: "flex", alignItems: "center", gap: 20, background: "#ffffff", padding: "16px 20px", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid #f1f5f9" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 22, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: item.color, margin: "0 0 2px 0" }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4, whiteSpace: "pre-line" }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Pedagogy Card - 3D Animation & Bottom Flush Position */}
          <div style={{ display: "flex", justifyContent: isMobile ? "flex-start" : "flex-end", marginBottom: -2, position: "relative", zIndex: 10, perspective: 1000 }}>
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(10px)",
                padding: "16px 24px",
                borderRadius: "16px 16px 0 0",
                maxWidth: 320,
                border: "1px solid #e2e8f0",
                borderBottom: "none",
                cursor: "pointer",
                transformStyle: "preserve-3d" as const
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <motion.div
                  animate={{ rotateZ: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
                  style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #f0f5ff 0%, #e0e7ff 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5", flexShrink: 0, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.1)" }}
                >
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", margin: "0", lineHeight: 1.2 }}>You guide. <span style={{ color: "#4f46e5" }}>They explore.</span></h3>
                  <p style={{ fontSize: 12, color: "#475569", margin: "4px 0 0 0", fontWeight: 600, lineHeight: 1.4 }}>Real learning happens together. SparkVR supports your teaching from start to finish.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Timeline - Full Width & Low Profile Height */}
          <motion.div {...fadeUp(0.6)} style={{ background: "#ffffff", borderRadius: 20, padding: "16px 24px", marginTop: 12, border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", width: "100%" }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", textAlign: "center", marginBottom: 16 }}>Your guided classroom flow</h3>

            <div style={{ display: "flex", justifyContent: "space-between", position: "relative", width: "100%" }}>
              {/* Dotted Connecting Line */}
              <div style={{ position: "absolute", top: 24, left: "5%", right: "5%", height: 1, borderTop: "2px dotted #cbd5e1", zIndex: 0 }} />

              {[
                { num: 1, title: "Before Class", desc: "Preview lesson.", icon: Calendar },
                { num: 2, title: "Explore", desc: "Engage in VR.", icon: MonitorPlay },
                { num: 3, title: "Discuss", desc: "Key concepts.", icon: Users },
                { num: 4, title: "Assess", desc: "Activities.", icon: ClipboardList },
                { num: 5, title: "Reinforce", desc: "Resources.", icon: Rocket }
              ].map((step, idx) => (
                <motion.div key={idx} whileHover={{ y: -3 }} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                  {/* Number Badge */}
                  <div style={{ width: 16, height: 16, borderRadius: 8, background: "#4f46e5", color: "#fff", fontSize: 9, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>{step.num}</div>

                  {/* Icon Box - Very Compact */}
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.04)", marginBottom: 8, border: "1px solid #f1f5f9" }}>
                    <step.icon size={20} color="#4f46e5" strokeWidth={1.5} />
                  </div>

                  {/* Text - Extra Compact */}
                  <h4 style={{ fontSize: 12, fontWeight: 800, color: "#0f172a", marginBottom: 2 }}>{step.title}</h4>
                  <p style={{ fontSize: 10, color: "#64748b", margin: 0, lineHeight: 1.2 }}>{step.desc}</p>

                  {/* Tiny arrow/dot between steps */}
                  {idx < 4 && (
                    <div style={{ position: "absolute", top: 24, right: -10, color: "#cbd5e1", opacity: 0.4 }}>
                      <Globe size={14} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Thin Summary Bar at bottom */}
          <motion.div {...fadeUp(0.7)} style={{ background: "#f8faff", borderRadius: 16, padding: isMobile ? "16px" : "16px 32px", marginTop: 20, border: "1px solid #e0e7ff", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 0, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center" }}><Award size={18} color="#fff" /></div>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#001a4d", margin: 0 }}>A clear flow for every lesson. Better engagement. Stronger outcomes.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Users size={24} color="#4f46e5" />
              <p style={{ fontSize: 14, fontWeight: 700, color: "#4f46e5", margin: 0 }}>You lead. SparkVR supports. Students succeed.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4: Powerful learning (Same to Same as Image)
      ══════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "0" : "60px 0", background: "#f8f9fc", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
            style={{ position: "absolute", top: 0, right: 0, width: "35%", height: "80%", zIndex: 0 }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", overflow: "hidden" }}>
              <motion.img loading="lazy" decoding="async"
                whileHover={{ scale: 1.05 }}
                src="/teacher_4.webp" alt="VR Learning Effortless" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "40%", background: "linear-gradient(to right, #f8f9fc 0%, rgba(248,249,252,0.5) 50%, transparent 100%)" }} />
          </motion.div>
        )}

        {isMobile && (
          <div style={{ width: "100%", height: 200, overflow: "hidden" }}>
            <motion.img loading="lazy" decoding="async"
              whileHover={{ scale: 1.05 }}
              src="/teacher_4.webp" alt="VR Learning Effortless" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        )}

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: isMobile ? "20px 20px" : "0 20px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "flex-start", minHeight: isMobile ? "auto" : 450, gap: 40, flexDirection: "column" }}>
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : 800, width: isMobile ? "100%" : undefined }}>
              <motion.div {...fadeLeft(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <Rocket size={18} color="#4f46e5" />
                <span style={{ fontSize: 13, fontWeight: 800, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  SIMPLE TO USE
                </span>
              </motion.div>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
                Powerful learning.<br />
                <span style={{ color: "#4f46e5" }}>Effortless for teachers.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 16, color: "#475569", lineHeight: 1.5, fontWeight: 500, marginBottom: 32, maxWidth: 600 }}>
                SparkVR is designed to be intuitive, so you can focus on teaching, not technology.
              </motion.p>

              {/* Vertical List - 4 Cards with 3D Animation */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16, perspective: 1000 }}>
                {[
                  { icon: Search, title: "Intuitive interface", desc: "Everything you need is easy to find\nand easy to use.", color: "#8b5cf6" },
                  { icon: Clock, title: "Quick to set up", desc: "Start a session in just a few clicks.\nSave time, every time.", color: "#10b981" },
                  { icon: MonitorPlay, title: "Works across devices", desc: "Compatible with your existing devices\nand classroom setup.", color: "#f59e0b" },
                  { icon: ShieldAlert, title: "Built for classrooms", desc: "Reliable, stable, and easy to manage\nin real classroom environments.", color: "#3b82f6" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeLeft(0.4 + idx * 0.1)}
                    whileHover={{
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      background: "#ffffff",
                      padding: "20px",
                      borderRadius: 16,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                      border: "1px solid #f1f5f9",
                      transformStyle: "preserve-3d" as const,
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 22, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: item.color, margin: "0 0 2px 0" }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4, whiteSpace: "pre-line" }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info card on mobile */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{
                  background: "rgba(255,255,255,0.95)",
                  padding: "12px 20px",
                  borderRadius: 20,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(79, 70, 229, 0.1)",
                  width: "100%",
                  marginTop: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 18, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5", flexShrink: 0 }}>
                    <CheckCircle2 size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", margin: "0 0 2px 0", lineHeight: 1.2 }}>Less setup.<br /><span style={{ color: "#4f46e5" }}>More teaching.</span></h3>
                    <p style={{ fontSize: 11, color: "#475569", margin: 0, fontWeight: 500, lineHeight: 1.3 }}>SparkVR makes learning simple and stress-free.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Desktop floating pedagogy box */}
            {!isMobile && (
            <div style={{ flex: 1.2, position: "relative", minHeight: 450, perspective: 1000 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateX: -5, rotateY: 5, scale: 1.05 }}
                style={{
                  position: "absolute",
                  bottom: "0%",
                  right: "0%",
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  padding: "12px 20px",
                  borderRadius: 20,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  maxWidth: 260,
                  zIndex: 5,
                  border: "1px solid rgba(79, 70, 229, 0.1)",
                  transformStyle: "preserve-3d" as const
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 18, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5", flexShrink: 0 }}>
                    <CheckCircle2 size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", margin: "0 0 2px 0", lineHeight: 1.2 }}>Less setup.<br /><span style={{ color: "#4f46e5" }}>More teaching.</span></h3>
                    <p style={{ fontSize: 11, color: "#475569", margin: 0, fontWeight: 500, lineHeight: 1.3 }}>SparkVR makes learning simple and stress-free.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            )}
          </div>

          {/* Bottom Step Flow - Ultra Compact Height */}
          <motion.div {...fadeUp(0.6)} style={{ background: "#ffffff", borderRadius: 24, padding: isMobile ? "12px 16px" : isTablet ? "12px 24px" : "12px 40px", marginTop: 20, border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", textAlign: "center", marginBottom: 16 }}>Get started in 4 easy steps</h3>

            <div style={{ display: "flex", justifyContent: "space-between", position: "relative", maxWidth: 1000, margin: "0 auto" }}>
              {/* Dotted Connecting Line */}
              <div style={{ position: "absolute", top: 28, left: "10%", right: "10%", height: 1, borderTop: "2px dotted #cbd5e1", zIndex: 0 }} />

              {[
                { num: 1, title: "Choose a lesson", desc: "Select curriculum lessons.", icon: BookOpen },
                { num: 2, title: "Review content", desc: "Preview & adjust settings.", icon: Settings },
                { num: 3, title: "Launch session", desc: "Start the VR experience.", icon: MonitorPlay },
                { num: 4, title: "Teach & assess", desc: "Guide and assess students.", icon: TrendingUp }
              ].map((step, idx) => (
                <motion.div key={idx} whileHover={{ y: -3 }} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                  {/* Number Badge */}
                  <div style={{ width: 16, height: 16, borderRadius: 8, background: "#4f46e5", color: "#fff", fontSize: 9, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>{step.num}</div>

                  {/* Icon Box - Shrunk to 48px */}
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.04)", marginBottom: 12, border: "1px solid #f1f5f9" }}>
                    <step.icon size={22} color="#4f46e5" strokeWidth={1.5} />
                  </div>

                  {/* Text - Optimized for height */}
                  <h4 style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", marginBottom: 2 }}>{step.title}</h4>
                  <p style={{ fontSize: 10, color: "#64748b", margin: 0, lineHeight: 1.2 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Thin Summary Bar at bottom */}
          <motion.div {...fadeUp(0.7)} style={{ background: "#f8faff", borderRadius: 16, padding: isMobile ? "16px" : "16px 32px", marginTop: 20, border: "1px solid #e0e7ff", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 16 : 0, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center" }}><Award size={18} color="#fff" /></div>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#001a4d", margin: 0 }}>Simple for you. Powerful for your students. <span style={{ fontWeight: 500, color: "#475569" }}>SparkVR fits seamlessly into your teaching.</span></p>
            </div>

            <div style={{ display: "flex", gap: isMobile ? 16 : 40, flexWrap: "wrap" }}>
              {[
                { icon: Rocket, label: "Easy to learn", desc: "No complex training." },
                { icon: Clock, label: "Saves time", desc: "Streamlined tools." },
                { icon: ShieldCheck, label: "Stress-free", desc: "Reliable technology." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <item.icon size={24} color="#4f46e5" />
                  <div>
                    <h5 style={{ fontSize: 13, fontWeight: 800, color: "#001a4d", margin: 0 }}>{item.label}</h5>
                    <p style={{ fontSize: 11, color: "#64748b", margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5: Aligned with curriculum
      ══════════════════════════════════════ */}
      <section style={{ padding: isMobile ? "0" : "40px 0 60px", background: "#ffffff", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", zIndex: 0 }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", overflow: "hidden" }}>
              <motion.img loading="lazy" decoding="async"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 11, repeat: Infinity, ease: "linear" as const }}
                src="/teacher_5.webp" alt="VR Curriculum Alignment" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "40%", background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.8) 30%, transparent 100%)" }} />
          </motion.div>
        )}

        {isMobile && (
          <div style={{ width: "100%", height: 220, overflow: "hidden" }}>
            <motion.img loading="lazy" decoding="async"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 11, repeat: Infinity, ease: "linear" as const }}
              src="/teacher_5.webp" alt="VR Curriculum Alignment" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        )}

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: isMobile ? "20px 20px" : "0 20px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", minHeight: isMobile ? "auto" : 280, flexDirection: "column" }}>
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : isTablet ? "60%" : "45%", width: isMobile ? "100%" : undefined }}>
              <motion.div {...fadeLeft(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <GraduationCap size={20} color="#0052cc" />
                <span style={{ fontSize: 14, fontWeight: 800, color: "#0052cc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ACADEMIC ALIGNMENT
                </span>
              </motion.div>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Aligned with curriculum.<br />
                <span style={{ color: "#6366f1" }}>Focused on outcomes.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 16, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 24 }}>
                SparkVR experiences are built to support your teaching goals and academic standards.
              </motion.p>

              {/* Vertical List with 3D Animation */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, perspective: 1000 }}>
                {[
                  { icon: Target, title: "Clear learning objectives", desc: "Objectives you can teach and assess.", color: "#10b981" },
                  { icon: ClipboardList, title: "Assessment ready", desc: "Built-in prompts to check understanding.", color: "#f59e0b" },
                  { icon: Zap, title: "Supports real learning", desc: "Encourages critical thinking and curiosity.", color: "#3b82f6" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeLeft(0.4 + idx * 0.1)}
                    whileHover={{
                      x: 10,
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.02,
                      background: "#ffffff",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      background: "rgba(255,255,255,0.7)",
                      padding: "12px 20px",
                      borderRadius: 14,
                      border: "1px solid #f1f5f9",
                      transition: "all 0.3s ease",
                      transformStyle: "preserve-3d" as const,
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 22, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                      <motion.div {...float}><item.icon size={22} strokeWidth={1.5} /></motion.div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 800, color: item.color, margin: "0 0 2px 0" }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM ALIGNMENT BANNER
      ══════════════════════════════════════ */}
      <div style={{ maxWidth: 1240, margin: "0 auto 60px", padding: "0 20px", position: "relative", zIndex: 2 }}>
        <motion.div {...fadeUp(0.2)} style={{ background: "#ffffff", borderRadius: 24, padding: isMobile ? "20px 16px" : isTablet ? "20px 24px" : "20px 40px", border: "1px solid #e2e8f0", boxShadow: "0 20px 50px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontSize: 18, fontWeight: 900, color: "#001a4d", textAlign: "center", marginBottom: 20, letterSpacing: "-0.01em" }}>Aligned where it matters</h3>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: 24, marginBottom: 24 }}>
            {[
              { icon: BookOpen, title: "Subject coverage", desc: "Science, maths, & more." },
              { icon: ClipboardList, title: "Grade appropriate", desc: "Designed for all stages." },
              { icon: Layers, title: "Standards support", desc: "National frameworks." },
              { icon: CheckCircle2, title: "Teacher confidence", desc: "Teach with certainty." },
              { icon: TrendingUp, title: "Measurable impact", desc: "Improve outcomes." }
            ].map((step, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5", marginBottom: 4 }}>
                  <step.icon size={22} strokeWidth={1.5} />
                </div>
                <h4 style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", margin: 0 }}>{step.title}</h4>
                <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.3 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", padding: isMobile ? "16px" : "16px 32px", background: "linear-gradient(90deg, #f0f5ff 0%, #ffffff 100%)", borderRadius: 20, border: "1px solid #e0e7ff", gap: isMobile ? 16 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 22, background: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 5px 15px rgba(79, 70, 229, 0.2)" }}><ShieldCheck size={22} color="#fff" /></div>
              <div>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "#001a4d", margin: "0 0 2px 0" }}>Academic alignment you can trust.</h4>
                <p style={{ fontSize: 13, color: "#4f46e5", fontWeight: 700, margin: 0 }}>Better teaching. Better outcomes.</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: isMobile ? 16 : 32, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Target size={20} color="#4f46e5" />
                <h5 style={{ fontSize: 13, fontWeight: 800, color: "#001a4d", margin: 0 }}>Teach with purpose</h5>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Users size={20} color="#4f46e5" />
                <h5 style={{ fontSize: 13, fontWeight: 800, color: "#001a4d", margin: 0 }}>Engage with confidence</h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 6: Support & Training
      ══════════════════════════════════════ */}
      <section style={{ padding: "60px 0", background: "#f8fafc", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 60, alignItems: "stretch", marginBottom: 40 }}>
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : "45%" }}>
              <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <Headphones size={24} color="#6366f1" strokeWidth={2} />
                <span style={{ fontSize: 14, fontWeight: 800, color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase" }}>SUPPORT &amp; TRAINING</span>
              </motion.div>
              
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
                You're never alone.<br />
                <span style={{ color: "#6366f1" }}>We're here to help you succeed.</span>
              </motion.h2>

              <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 32 }}>
                SparkVR provides ongoing support and training so you can teach with confidence.
              </motion.p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: Presentation, title: "Comprehensive training", desc: "Hands-on training to help you get started and go further.", color: "#8b5cf6" },
                  { icon: Headphones, title: "Dedicated support", desc: "Our support team is always ready to assist you.", color: "#10b981" },
                  { icon: BookOpen, title: "Teaching resources", desc: "Access lesson guides, worksheets, and best practices.", color: "#f59e0b" },
                  { icon: TrendingUp, title: "Continuous growth", desc: "Workshops, webinars, and updates to keep your skills and lessons ahead.", color: "#3b82f6" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    {...fadeLeft(0.4 + idx * 0.1)} 
                    whileHover={{ scale: 1.02, x: 5, boxShadow: "0 10px 25px rgba(0,0,0,0.05)", borderColor: `${item.color}40` }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#ffffff", padding: "16px 20px", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.03)", border: "1px solid #f1f5f9", cursor: "pointer", transition: "all 0.3s ease" }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 24, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 800, color: item.color, margin: "0 0 4px 0" }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: "#64748b", margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image Container - only on non-mobile */}
            {!isMobile && (
            <div style={{ flex: 1, position: "relative", minHeight: 500 }}>
              <motion.div {...fadeRight(0.4)} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: 24, overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}>
                <motion.img loading="lazy" decoding="async" whileHover={{ scale: 1.05 }} transition={{ duration: 1.5, ease: "easeOut" }} src="/teacher_4.webp" alt="SparkVR Training" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </motion.div>

              {/* Floating Card Right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
                style={{ position: "absolute", top: 40, right: isTablet ? -10 : -30, background: "#ffffff", borderRadius: 16, padding: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #e0e7ff", width: 240, zIndex: 10 }}
              >
                <div style={{ background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)", margin: "-20px -20px 20px -20px", padding: "16px 20px", borderTopLeftRadius: 16, borderTopRightRadius: 16, display: "flex", alignItems: "center", gap: 10 }}>
                  <Headphones size={18} color="#ffffff" />
                  <h4 style={{ color: "#ffffff", fontSize: 15, fontWeight: 800, margin: 0, letterSpacing: "0.02em" }}>We're here for you</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: MessageSquare, text: "Quick help when you need it", color: "#8b5cf6" },
                    { icon: Mail, text: "Multiple support channels", color: "#3b82f6" },
                    { icon: Users, text: "A team that understands education", color: "#10b981" },
                    { icon: Star, text: "Reliable. Responsive. Available.", color: "#f59e0b" }
                  ].map((it, i) => (
                    <motion.div key={i} whileHover={{ x: 4 }} style={{ display: "flex", alignItems: "flex-start", gap: 14, cursor: "pointer" }}>
                      <div style={{ width: 24, height: 24, borderRadius: 6, background: `${it.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <it.icon size={14} color={it.color} />
                      </div>
                      <p style={{ fontSize: 13, color: "#334155", margin: 0, fontWeight: 600, lineHeight: 1.4 }}>{it.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Card Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                style={{ position: "absolute", bottom: -20, left: isTablet ? 0 : -20, maxWidth: 360, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", padding: "16px 24px", borderRadius: 16, boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(79, 70, 229, 0.1)", display: "flex", gap: 16, alignItems: "center", zIndex: 10 }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 24, background: "linear-gradient(135deg, #f0f5ff 0%, #e0e7ff 100%)", border: "1px solid #c7d2fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck size={24} color="#4f46e5" />
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 900, color: "#0f172a", margin: "0 0 2px 0" }}>Your success is our priority.</h4>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#4f46e5", margin: "0 0 4px 0" }}>We support you at every step.</p>
                  <p style={{ fontSize: 12, color: "#475569", margin: 0, fontWeight: 500 }}>So you can focus on what matters most—your students.</p>
                </div>
              </motion.div>
            </div>
            )}
          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.6)} style={{ background: "#f0f5ff", borderRadius: 24, padding: "30px", border: "1px solid #e0e7ff" }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", textAlign: "center", marginBottom: 24 }}>Support that empowers educators</h3>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: 20, marginBottom: 24 }}>
              {[
                { icon: Users, title: "Onboarding & Training", desc: "Get up to speed with guided sessions and hands-on practice." },
                { icon: Headphones, title: "Help & Troubleshooting", desc: "Fast, friendly support whenever you need it." },
                { icon: BookOpen, title: "Resource Library", desc: "Access lesson plans, guides, and classroom materials." },
                { icon: Calendar, title: "Webinars & Workshops", desc: "Stay updated with expert sessions and peer learning." },
                { icon: RefreshCcw, title: "Updates & Innovations", desc: "Regular feature updates to enhance your teaching." }
              ].map((step, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} style={{ display: "flex", flexDirection: "column", gap: 8, cursor: "pointer" }}>
                  <motion.div whileHover={{ scale: 1.1, backgroundColor: "#6366f1", color: "#ffffff" }} transition={{ duration: 0.2 }} style={{ width: 44, height: 44, borderRadius: 22, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366f1", marginBottom: 4, boxShadow: "0 8px 15px rgba(0,0,0,0.05)" }}>
                    <step.icon size={22} strokeWidth={1.5} />
                  </motion.div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", margin: 0 }}>{step.title}</h4>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0, lineHeight: 1.4, fontWeight: 500 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div style={{ background: "#ffffff", borderRadius: 16, padding: isMobile ? "16px" : "16px 24px", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 0, border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Heart size={20} color="#6366f1" />
                <h4 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", margin: 0 }}>We're more than a platform. We're your teaching partner.</h4>
              </div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#6366f1", margin: 0 }}>Together, we create better learning experiences.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 7: Get Started / CTA
      ══════════════════════════════════════ */}
      <section style={{ padding: "80px 0 60px", background: "#ffffff", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 60, alignItems: "stretch", marginBottom: 60 }}>
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : "45%" }}>
              <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <Rocket size={24} color="#6366f1" strokeWidth={2} />
                <span style={{ fontSize: 14, fontWeight: 800, color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase" }}>GET STARTED WITH SPARKVR</span>
              </motion.div>
              
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 4.5vw, 48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Ready to transform<br />
                <span style={{ color: "#6366f1" }}>the way you teach?</span>
              </motion.h2>

              <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 40 }}>
                Join thousands of teachers who are creating engaging, effective, and meaningful learning experiences with SparkVR.
              </motion.p>

              {/* Big CTA Card */}
              <motion.div {...fadeUp(0.4)} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }} style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)", borderRadius: 24, padding: "32px", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
                  <motion.div whileHover={{ rotate: 15, scale: 1.1 }} style={{ width: 80, height: 80, borderRadius: 20, background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(79, 70, 229, 0.3)" }}>
                    <Rocket size={40} color="#ffffff" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>Let's create better</h3>
                    <h3 style={{ fontSize: 24, fontWeight: 800, color: "#6366f1", margin: 0 }}>learning together.</h3>
                  </div>
                </div>
                <p style={{ fontSize: 16, color: "#475569", fontWeight: 600, marginBottom: 24 }}>Get started in minutes and see the impact in every class.</p>
                <div style={{ position: "relative" }}>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: "100%", padding: "16px 24px", background: "linear-gradient(90deg, #4f46e5 0%, #6366f1 100%)", color: "#ffffff", border: "none", borderRadius: 12, fontSize: 18, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}>
                    Get Started Now <ArrowRight size={20} strokeWidth={2.5} />
                  </motion.div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16 }}>
                  <ShieldCheck size={16} color="#475569" />
                  <span style={{ fontSize: 13, color: "#475569", fontWeight: 600 }}>Trusted by educators. Built for classrooms.</span>
                </div>
              </motion.div>
            </div>

            {/* Right Image Container - only on non-mobile */}
            {!isMobile && (
            <div style={{ flex: 1, position: "relative", minHeight: 500 }}>
              <motion.div {...fadeLeft(0.4)} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: 24, overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}>
                <motion.img loading="lazy" decoding="async" whileHover={{ scale: 1.05 }} transition={{ duration: 1.5, ease: "easeOut" }} src="/teacher_2.webp" alt="SparkVR Classroom" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </motion.div>
              
              {/* Floating Card Right - hidden on mobile */}
              {!isMobile && <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={{
                  initial: {},
                  whileInView: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } }
                }}
                style={{ position: "absolute", top: 40, right: isTablet ? -10 : -40, display: "flex", flexDirection: "column", gap: 10, zIndex: 10 }}
              >
                {[
                  { icon: Users, text: "Engage", color: "#8b5cf6" },
                  { icon: Glasses, text: "Explore", color: "#3b82f6" },
                  { icon: Lightbulb, text: "Explain", color: "#10b981" },
                  { icon: BarChart2, text: "Excel", color: "#f59e0b" }
                ].map((it, i) => (
                  <motion.div 
                    key={i} 
                    variants={{
                      initial: { opacity: 0, x: 20 },
                      whileInView: { opacity: 1, x: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 12 }}
                    whileHover={{ x: -10, scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                    style={{ background: "#ffffff", padding: "12px 24px", borderRadius: 14, display: "flex", alignItems: "center", gap: 16, boxShadow: "0 10px 20px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0", borderLeft: `5px solid ${it.color}`, cursor: "pointer" }}
                  >
                    <it.icon size={22} color={it.color} />
                    <span style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", letterSpacing: "0.02em" }}>{it.text}</span>
                  </motion.div>
                ))}
              </motion.div>}
            </div>
            )}
          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.6)} style={{ background: "#f8fafc", borderRadius: 24, padding: "30px", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ height: 2, width: 40, background: "#cbd5e1" }}></div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", textAlign: "center", margin: 0 }}>Why teachers choose SparkVR</h3>
              <div style={{ height: 2, width: 40, background: "#cbd5e1" }}></div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: 16, marginBottom: 30 }}>
              {[
                { icon: ShieldCheck, title: "Teacher-guided", desc: "and in control" },
                { icon: Target, title: "Aligned with", desc: "curriculum" },
                { icon: Users, title: "Engaging for", desc: "every student" },
                { icon: Settings, title: "Simple, reliable,", desc: "and easy to use" },
                { icon: Headphones, title: "Support that", desc: "empowers you" }
              ].map((step, idx) => (
                <motion.div key={idx} whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.05)", borderColor: "#c7d2fe" }} style={{ display: "flex", alignItems: "center", gap: 12, background: "#ffffff", padding: "14px", borderRadius: 16, border: "1px solid #e2e8f0", cursor: "pointer", transition: "all 0.3s ease" }}>
                  <motion.div whileHover={{ rotate: 15 }} style={{ width: 40, height: 40, borderRadius: 12, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5", flexShrink: 0 }}>
                    <step.icon size={20} strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", margin: "0 0 2px 0", lineHeight: 1.2 }}>{step.title}</h4>
                    <p style={{ fontSize: 12, color: "#64748b", margin: 0, fontWeight: 500 }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.05)", borderColor: "#c7d2fe" }} style={{ background: "#ffffff", borderRadius: 20, padding: isMobile ? "20px 16px" : "24px 32px", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 20 : 0, border: "1px solid #e2e8f0", transition: "all 0.3s ease" }}>
              <div style={{ flex: 1, display: "flex", gap: 16, borderRight: isMobile ? "none" : "1px solid #e2e8f0", borderBottom: isMobile ? "1px solid #e2e8f0" : "none", paddingRight: isMobile ? 0 : 32, paddingBottom: isMobile ? 20 : 0 }}>
                <Quote size={40} color="#8b5cf6" style={{ opacity: 0.3, flexShrink: 0, marginTop: -8 }} />
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 12px 0", lineHeight: 1.5, fontStyle: "italic" }}>"SparkVR empowers me to teach better and helps my students learn deeper."</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 12, background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}><Users size={12} color="#64748b" /></div>
                    <p style={{ fontSize: 13, color: "#64748b", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 800 }}>A Teacher</p>
                  </div>
                </div>
              </div>

              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 20, paddingLeft: isMobile ? 0 : 32 }}>
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(79, 70, 229, 0.3)" }}><ShieldCheck size={28} color="#fff" /></motion.div>
                <div>
                  <h4 style={{ fontSize: 20, fontWeight: 900, color: "#0f172a", margin: "0 0 4px 0", letterSpacing: "-0.01em" }}>You teach. We support.</h4>
                  <p style={{ fontSize: 15, color: "#6366f1", fontWeight: 800, margin: 0 }}>Together, we create better learning.</p>
                </div>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end", paddingLeft: isMobile ? 0 : 32 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: "16px 28px", background: "#0f172a", color: "#ffffff", border: "none", borderRadius: 14, fontSize: 16, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 10px 20px rgba(15, 23, 42, 0.2)", marginBottom: 12 }}>
                  Start Your Journey <ArrowRight size={18} strokeWidth={2.5} />
                </motion.div>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0, fontWeight: 600 }}>Better teaching. Better outcomes.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
