"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap, Target, Settings, BookOpen, ShieldCheck,
  Users, MessageSquare, ClipboardList, TrendingUp, Presentation,
  Calendar, Layers, CheckCircle2, MonitorPlay, Globe,
  Rocket, Search, ShieldAlert, Award, Clock,
  Headphones, Mail, Star, Heart, RefreshCcw, Glasses, Lightbulb, BarChart2, Quote, ArrowRight, Link2
} from "lucide-react";

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

const float = {
  animate: {
    y: [0, -8, 0] as any,
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
  }
};

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

export default function TeachersPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isDesktop = screenWidth >= 1024;

  const px = isMobile ? "0 20px" : isTablet ? "0 40px" : "0 60px";
  const sectionPy = "60px 0";

  return (
    <main style={{ minHeight: "100vh", background: "#f8f9fc" }}>

      {/* ══ SECTION 1 ══ */}
      <section style={{ padding: isMobile ? "80px 0 60px" : isTablet ? "110px 0 60px" : "120px 0 60px", background: "#ffffff", position: "relative" }}>
        {!isMobile && (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <img loading="eager" decoding="async" fetchPriority="high"
                src="/teacher1.png" alt="VR Learning"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: isTablet ? "70%" : "55%", background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.97) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)" }} />
          </div>
        )}
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: px, position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: isMobile ? "100%" : isTablet ? "60%" : "45%" }}>
            <motion.h2 {...fadeLeft(0.1)} style={{ fontSize: isMobile ? 28 : isTablet ? 34 : "clamp(32px,4vw,40px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 14 }}>
              Technology that<br /><span style={{ color: "#6366f1" }}>respects teaching.</span>
            </motion.h2>
            <motion.p {...fadeLeft(0.2)} style={{ fontSize: isMobile ? 14 : 16, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 24 }}>
              SparkVR is designed to support how you teach, engage your students, and achieve your learning goals.
            </motion.p>
            <motion.div {...fadeLeft(0.3)} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 24 }}>
              {[
                { icon: Users, title: "Teacher-guided sessions", desc: "You lead the class. We enhance it." },
                { icon: Target, title: "Clear learning objectives", desc: "Every experience has a purpose." },
                { icon: Settings, title: "Minimal technical complexity", desc: "Easy to use. Easy to manage." },
                { icon: BookOpen, title: "Academic alignment", desc: "Mapped to curriculum. Built for classrooms." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#f8faff", padding: "12px", borderRadius: 12, border: "1px solid #e0e7ff" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 18, background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#4f46e5" }}>
                    <motion.div {...float}><item.icon size={18} strokeWidth={1.5} /></motion.div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 800, color: "#001a4d", margin: "0 0 3px 0" }}>{item.title}</h4>
                    <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.3 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div {...fadeLeft(0.4)} style={{ background: "#f8fafc", borderRadius: 14, padding: "16px 20px", border: "1px solid #e2e8f0", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: 22, background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ShieldCheck size={24} color="#4f46e5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ fontSize: isMobile ? 13 : 15, fontWeight: 800, color: "#0f172a", marginBottom: 3 }}>SparkVR empowers teachers. <span style={{ color: "#4f46e5" }}>It does not replace them.</span></h3>
                <p style={{ fontSize: 13, color: "#475569", margin: 0, fontWeight: 500 }}>We support your expertise. <span style={{ color: "#4f46e5" }}>You inspire learning.</span></p>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.5)} style={{ background: "#f8f9fc", borderRadius: 18, padding: isMobile ? "16px" : "20px 36px", display: "flex", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? 16 : 32, marginTop: 36, marginBottom: -30, border: "1px solid #e2e8f0", flexDirection: isMobile ? "column" : "row", position: "relative", zIndex: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 24, background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5", flexShrink: 0 }}>
                <Users size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: "#001a4d", margin: "0 0 3px 0" }}>Real teachers. Real classrooms. Real impact.</h4>
                <p style={{ fontSize: isMobile ? 12 : 14, color: "#6366f1", margin: 0, fontWeight: 600 }}>SparkVR is built for educators, by people who understand education.</p>
              </div>
            </div>
            {!isMobile && <div style={{ width: 1, height: 36, background: "#cbd5e1", flexShrink: 0 }} />}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <GraduationCap size={28} color="#4f46e5" strokeWidth={1.5} />
              <p style={{ fontSize: 13, color: "#475569", fontWeight: 500, margin: 0 }}>Teaching remains at the heart of everything we do.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 2 ══ */}
      <section style={{ padding: isMobile ? "60px 0" : "90px 0 60px", background: "#ffffff", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <img loading="lazy" decoding="async" src="/teacher2.png" alt="VR Learning"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: isTablet ? "70%" : "55%", background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.97) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)" }} />
          </div>
        )}
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: px, position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: isMobile ? "100%" : isTablet ? "60%" : "45%", minHeight: isMobile ? "auto" : 500 }}>
            <motion.div {...fadeLeft(0.1)} style={{ width: 36, height: 3, background: "#4f46e5", borderRadius: 2, marginBottom: 14 }} />
            <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: isMobile ? 26 : isTablet ? 32 : "clamp(30px,4vw,40px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 14 }}>
              Teachers remain<br />at the <span style={{ color: "#6366f1" }}>center of learning.</span>
            </motion.h2>
            <motion.p {...fadeLeft(0.3)} style={{ fontSize: isMobile ? 14 : 15, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 22 }}>
              SparkVR enhances your teaching. You lead the classroom. You guide the experience.
            </motion.p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: Presentation, title: "Introduce concepts", desc: "You set the context and spark curiosity." },
                { icon: MessageSquare, title: "Guide exploration", desc: "Students experience while you facilitate meaningful learning." },
                { icon: Users, title: "Lead discussions", desc: "You connect experiences to real-world understanding." },
                { icon: ClipboardList, title: "Assess understanding", desc: "You evaluate, clarify, and reinforce key concepts." },
                { icon: Target, title: "Achieve learning goals", desc: "You drive outcomes aligned with your curriculum." }
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeLeft(0.35 + idx * 0.08)} whileHover={{ x: 6 }} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.9)", padding: "10px 14px", borderRadius: 12, border: "1px solid #f1f5f9", maxWidth: isMobile ? "100%" : 360 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 19, background: "#f0f0ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#4f46e5" }}>
                    <motion.div {...float}><item.icon size={20} strokeWidth={1.5} /></motion.div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", margin: "0 0 2px 0" }}>{item.title}</h4>
                    <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp(0.5)} style={{ display: "flex", gap: isMobile ? 16 : 20, marginTop: 36, flexDirection: isMobile ? "column" : "row" }}>
            <div style={{ flex: 1, background: "linear-gradient(135deg, #818cf8 0%, #a855f7 100%)", borderRadius: 16, padding: isMobile ? "20px 16px" : "24px 32px", display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ width: 52, height: 52, borderRadius: 26, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                <Users size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h4 style={{ fontSize: isMobile ? 15 : 17, fontWeight: 800, color: "#ffffff", margin: "0 0 6px 0" }}>You are the educator. SparkVR is your ally.</h4>
                <p style={{ fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.9)", margin: 0, fontWeight: 500 }}>Technology that empowers your expertise.</p>
              </div>
            </div>
            <div style={{ flex: 1, background: "#ffffff", borderRadius: 16, padding: isMobile ? "20px 16px" : "24px 32px", display: "flex", alignItems: "center", gap: 18, border: "1px solid #e2e8f0" }}>
              <MessageSquare size={36} color="#4f46e5" strokeWidth={1.5} style={{ flexShrink: 0 }} />
              <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: "#0f172a", margin: 0 }}>Great learning happens when<br /><span style={{ color: "#4f46e5" }}>great teaching leads the way.</span></h4>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 3 ══ */}
      <section style={{ padding: sectionPy, background: "#ffffff", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <img loading="lazy" decoding="async" src="/teacher3.png" alt="VR Learning Flow"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: isTablet ? "70%" : "55%", background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.97) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)" }} />
          </div>
        )}
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: px, position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: isMobile ? "100%" : isTablet ? "60%" : 500, minHeight: isMobile ? "auto" : 420 }}>
            <motion.div {...fadeLeft(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <BookOpen size={18} color="#0052cc" />
              <span style={{ fontSize: 12, fontWeight: 800, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase" }}>GUIDED CLASSROOM FLOW</span>
            </motion.div>
            <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: isMobile ? 26 : isTablet ? 32 : "clamp(30px,4vw,44px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 14 }}>
              A structured flow.<br /><span style={{ color: "#4f46e5" }}>Meaningful learning.</span>
            </motion.h2>
            <motion.p {...fadeLeft(0.3)} style={{ fontSize: isMobile ? 14 : 15, color: "#475569", lineHeight: 1.5, fontWeight: 500, marginBottom: 22 }}>
              SparkVR provides a simple, guided flow that helps you deliver engaging VR lessons with confidence and clarity.
            </motion.p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: Presentation, title: "Plan with purpose", desc: "Preview lessons, objectives, and key outcomes before class.", color: "#8b5cf6" },
                { icon: Users, title: "Teach with confidence", desc: "Facilitate immersive experiences while staying in control.", color: "#10b981" },
                { icon: MessageSquare, title: "Discuss and connect", desc: "Guide reflection and discussion to connect VR experiences to real-world concepts.", color: "#f59e0b" },
                { icon: ClipboardList, title: "Assess and reinforce", desc: "Check understanding and reinforce learning with built-in assessments.", color: "#3b82f6" }
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeLeft(0.35 + idx * 0.08)} whileHover={{ x: 8 }} style={{ display: "flex", alignItems: "center", gap: 14, background: "#ffffff", padding: "12px 16px", borderRadius: 14, boxShadow: "0 4px 14px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9", maxWidth: isMobile ? "100%" : 380 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 20, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: item.color, margin: "0 0 2px 0" }}>{item.title}</h4>
                    <p style={{ fontSize: 12, color: "#64748b", margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp(0.5)} style={{ background: "#ffffff", borderRadius: 18, padding: isMobile ? "14px" : "14px 24px", marginTop: 28, border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", textAlign: "center", marginBottom: 14 }}>Your guided classroom flow</h3>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: isMobile ? 10 : 0, position: "relative" }}>
              {!isMobile && <div style={{ position: "absolute", top: 22, left: "5%", right: "5%", height: 1, borderTop: "2px dotted #cbd5e1", zIndex: 0 }} />}
              {[
                { num: 1, title: "Before Class", desc: "Preview lesson.", icon: Calendar },
                { num: 2, title: "Explore", desc: "Engage in VR.", icon: MonitorPlay },
                { num: 3, title: "Discuss", desc: "Key concepts.", icon: Users },
                { num: 4, title: "Assess", desc: "Activities.", icon: ClipboardList },
                { num: 5, title: "Reinforce", desc: "Resources.", icon: Rocket }
              ].map((step, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 7, background: "#4f46e5", color: "#fff", fontSize: 8, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>{step.num}</div>
                  <div style={{ width: isMobile ? 36 : 42, height: isMobile ? 36 : 42, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: 6, border: "1px solid #f1f5f9" }}>
                    <step.icon size={isMobile ? 16 : 20} color="#4f46e5" strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: isMobile ? 10 : 12, fontWeight: 800, color: "#0f172a", marginBottom: 2 }}>{step.title}</h4>
                  <p style={{ fontSize: isMobile ? 9 : 10, color: "#64748b", margin: 0, lineHeight: 1.2 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.6)} style={{ background: "#f8faff", borderRadius: 14, padding: isMobile ? "14px 16px" : "14px 28px", marginTop: 16, border: "1px solid #e0e7ff", display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 14, background: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Award size={16} color="#fff" /></div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#001a4d", margin: 0 }}>A clear flow for every lesson. Better engagement. Stronger outcomes.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Users size={20} color="#4f46e5" />
              <p style={{ fontSize: 13, fontWeight: 700, color: "#4f46e5", margin: 0 }}>You lead. SparkVR supports. Students succeed.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 4 ══ */}
      <section style={{ padding: sectionPy, background: "#f8f9fc", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <img loading="lazy" decoding="async" src="/teacher4.png" alt="VR Learning Effortless"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: isTablet ? "70%" : "55%", background: "linear-gradient(to right, #f8f9fc 0%, rgba(248,249,252,0.97) 50%, rgba(248,249,252,0.6) 80%, transparent 100%)" }} />
          </div>
        )}
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: px, position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: isMobile ? "100%" : isTablet ? "65%" : 680, minHeight: isMobile ? "auto" : 480 }}>
            <motion.div {...fadeLeft(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Rocket size={16} color="#4f46e5" />
              <span style={{ fontSize: 12, fontWeight: 800, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase" }}>SIMPLE TO USE</span>
            </motion.div>
            <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: isMobile ? 26 : isTablet ? 32 : "clamp(30px,4vw,44px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 14 }}>
              Powerful learning.<br /><span style={{ color: "#4f46e5" }}>Effortless for teachers.</span>
            </motion.h2>
            <motion.p {...fadeLeft(0.3)} style={{ fontSize: isMobile ? 14 : 15, color: "#475569", lineHeight: 1.5, fontWeight: 500, marginBottom: 24 }}>
              SparkVR is designed to be intuitive, so you can focus on teaching, not technology.
            </motion.p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)", gap: 10, maxWidth: isMobile ? "100%" : 560 }}>
              {[
                { icon: Search, title: "Intuitive interface", desc: "Everything you need is easy to find and easy to use.", color: "#8b5cf6" },
                { icon: Clock, title: "Quick to set up", desc: "Start a session in just a few clicks. Save time, every time.", color: "#10b981" },
                { icon: MonitorPlay, title: "Works across devices", desc: "Compatible with your existing devices and classroom setup.", color: "#f59e0b" },
                { icon: ShieldAlert, title: "Built for classrooms", desc: "Reliable, stable, and easy to manage in real environments.", color: "#3b82f6" }
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeLeft(0.35 + idx * 0.08)} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "#ffffff", padding: "12px 14px", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 18, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: item.color, margin: "0 0 2px 0" }}>{item.title}</h4>
                    <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp(0.5)} style={{ background: "#ffffff", borderRadius: 20, padding: isMobile ? "14px" : "14px 36px", marginTop: 24, border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", textAlign: "center", marginBottom: 14 }}>Get started in 4 easy steps</h3>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 16 : 0, position: "relative" }}>
              {!isMobile && <div style={{ position: "absolute", top: 24, left: "8%", right: "8%", height: 1, borderTop: "2px dotted #cbd5e1", zIndex: 0 }} />}
              {[
                { num: 1, title: "Choose a lesson", desc: "Select curriculum lessons.", icon: BookOpen },
                { num: 2, title: "Review content", desc: "Preview & adjust settings.", icon: Settings },
                { num: 3, title: "Launch session", desc: "Start the VR experience.", icon: MonitorPlay },
                { num: 4, title: "Teach & assess", desc: "Guide and assess students.", icon: TrendingUp }
              ].map((step, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 7, background: "#4f46e5", color: "#fff", fontSize: 8, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>{step.num}</div>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: 8, border: "1px solid #f1f5f9" }}>
                    <step.icon size={20} color="#4f46e5" strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: 12, fontWeight: 800, color: "#0f172a", marginBottom: 2 }}>{step.title}</h4>
                  <p style={{ fontSize: 10, color: "#64748b", margin: 0, lineHeight: 1.2 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.6)} style={{ background: "#f8faff", borderRadius: 14, padding: isMobile ? "14px 16px" : "14px 28px", marginTop: 16, border: "1px solid #e0e7ff", display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 0, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 14, background: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Award size={16} color="#fff" /></div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#001a4d", margin: 0 }}>Simple for you. Powerful for your students.</p>
            </div>
            {!isMobile && (
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                {[
                  { icon: Rocket, label: "Easy to learn", desc: "No complex training." },
                  { icon: Clock, label: "Saves time", desc: "Streamlined tools." },
                  { icon: ShieldCheck, label: "Stress-free", desc: "Reliable technology." }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <item.icon size={20} color="#4f46e5" />
                    <div>
                      <h5 style={{ fontSize: 12, fontWeight: 800, color: "#001a4d", margin: 0 }}>{item.label}</h5>
                      <p style={{ fontSize: 10, color: "#64748b", margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 5 ══ */}
      <section style={{ padding: "60px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <img loading="lazy" decoding="async" src="/teacher5.png" alt="VR Curriculum Alignment"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: isTablet ? "70%" : "55%", background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.98) 50%, rgba(255,255,255,0.7) 78%, transparent 100%)" }} />
          </div>
        )}
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: px, position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "center", minHeight: isMobile ? "auto" : 520, gap: 40, flexDirection: "row" }}>
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : isTablet ? "60%" : "46%" }}>
              <motion.div {...fadeLeft(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <GraduationCap size={18} color="#4f46e5" />
                <span style={{ fontSize: 12, fontWeight: 800, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase" }}>ACADEMIC ALIGNMENT</span>
              </motion.div>
              <motion.div {...fadeLeft(0.1)} style={{ width: 36, height: 3, background: "#4f46e5", borderRadius: 2, marginBottom: 14 }} />
              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: isMobile ? 26 : isTablet ? 32 : "clamp(30px,4vw,44px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 14 }}>
                Aligned with curriculum.<br /><span style={{ color: "#6366f1" }}>Focused on outcomes.</span>
              </motion.h2>
              <motion.p {...fadeLeft(0.3)} style={{ fontSize: isMobile ? 14 : 15, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 20 }}>
                SparkVR experiences are built to support your teaching goals and academic standards.
              </motion.p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: isMobile ? "100%" : 420 }}>
                {[
                  { icon: BookOpen,     title: "Curriculum aligned",       desc: "Experiences mapped to key concepts and learning outcomes.",          color: "#6366f1" },
                  { icon: Target,       title: "Clear learning objectives", desc: "Each lesson includes objectives you can teach and assess.",          color: "#10b981" },
                  { icon: ClipboardList,title: "Assessment ready",          desc: "Built-in activities and discussion prompts to check understanding.", color: "#f59e0b" },
                  { icon: Link2,        title: "Supports real learning",    desc: "Encourages critical thinking, curiosity, and deeper understanding.", color: "#3b82f6" },
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeLeft(0.3 + idx * 0.08)} whileHover={{ x: 5 }} style={{ display: "flex", alignItems: "center", gap: 12, background: "#ffffff", padding: "10px 14px", borderRadius: 12, border: "1px solid #f1f5f9", boxShadow: "0 4px 10px rgba(0,0,0,0.04)", transition: "all 0.3s ease" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 18, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                      <item.icon size={17} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: item.color, margin: "0 0 2px 0" }}>{item.title}</h4>
                      <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {isDesktop && (
              <div style={{ flex: 1, position: "relative", alignSelf: "stretch" }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
                  style={{ position: "absolute", bottom: -10, right: "4%", background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", padding: "20px 24px", borderRadius: 20, boxShadow: "0 20px 50px rgba(0,0,0,0.12)", maxWidth: 290, zIndex: 10, border: "1px solid rgba(99,102,241,0.15)" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 24, background: "#f0f0ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <GraduationCap size={26} color="#4f46e5" strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 900, color: "#001a4d", margin: 0, lineHeight: 1.3 }}>Built for classrooms.<br /><span style={{ color: "#4f46e5" }}>Backed by pedagogy.</span></h3>
                  </div>
                  <p style={{ fontSize: 12, color: "#475569", margin: 0, fontWeight: 500, lineHeight: 1.5 }}>SparkVR aligns with educational standards and supports what matters most—student learning.</p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM ALIGNMENT BANNER ══ */}
      <section style={{ padding: "60px 0", background: "#f8f9fc" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: px, position: "relative", zIndex: 2 }}>
          <motion.div {...fadeUp(0.2)} style={{ background: "#ffffff", borderRadius: 20, padding: isMobile ? "20px 16px" : "20px 36px", border: "1px solid #e2e8f0", boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
            <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 900, color: "#001a4d", textAlign: "center", marginBottom: 18, letterSpacing: "-0.01em" }}>Aligned where it matters</h3>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: isMobile ? 14 : 16, marginBottom: 20 }}>
              {[
                { icon: BookOpen, title: "Subject coverage", desc: "Science, maths, & more." },
                { icon: ClipboardList, title: "Grade appropriate", desc: "Designed for all stages." },
                { icon: Layers, title: "Standards support", desc: "National frameworks." },
                { icon: CheckCircle2, title: "Teacher confidence", desc: "Teach with certainty." },
                { icon: TrendingUp, title: "Measurable impact", desc: "Improve outcomes." }
              ].map((step, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5", marginBottom: 2 }}>
                    <step.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", margin: 0 }}>{step.title}</h4>
                  <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.3 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", padding: isMobile ? "14px" : "14px 28px", background: "linear-gradient(90deg, #f0f5ff 0%, #ffffff 100%)", borderRadius: 16, border: "1px solid #e0e7ff", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 14 : 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 20, background: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><ShieldCheck size={20} color="#fff" /></div>
                <div>
                  <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: "#001a4d", margin: "0 0 2px 0" }}>Academic alignment you can trust.</h4>
                  <p style={{ fontSize: 12, color: "#4f46e5", fontWeight: 700, margin: 0 }}>Better teaching. Better outcomes.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: isMobile ? 16 : 28, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Target size={18} color="#4f46e5" />
                  <h5 style={{ fontSize: 12, fontWeight: 800, color: "#001a4d", margin: 0 }}>Teach with purpose</h5>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Users size={18} color="#4f46e5" />
                  <h5 style={{ fontSize: 12, fontWeight: 800, color: "#001a4d", margin: 0 }}>Engage with confidence</h5>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 6 ══ */}
      <section style={{ padding: sectionPy, background: "#f8fafc", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <img loading="lazy" decoding="async" src="/teacher6.png" alt="SparkVR Training"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            </div>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: isTablet ? "70%" : "55%", background: "linear-gradient(to right, #f8fafc 0%, rgba(248,250,252,0.98) 50%, rgba(248,250,252,0.7) 78%, transparent 100%)" }} />
          </div>
        )}
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: px, position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", gap: isMobile ? 0 : 40, alignItems: "stretch", marginBottom: 36, flexDirection: isMobile ? "column" : "row" }}>
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : isTablet ? "60%" : "46%", marginBottom: isMobile ? 28 : 0 }}>
              <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <Headphones size={20} color="#6366f1" strokeWidth={2} />
                <span style={{ fontSize: 12, fontWeight: 800, color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase" }}>SUPPORT &amp; TRAINING</span>
              </motion.div>
              <motion.div {...fadeLeft(0.1)} style={{ width: 36, height: 3, background: "#6366f1", borderRadius: 2, marginBottom: 14 }} />
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: isMobile ? 26 : isTablet ? 32 : "clamp(30px,4vw,44px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 14 }}>
                You're never alone.<br /><span style={{ color: "#6366f1" }}>We're here to help you succeed.</span>
              </motion.h2>
              <motion.p {...fadeUp(0.3)} style={{ fontSize: isMobile ? 14 : 15, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 22 }}>
                SparkVR provides ongoing support and training so you can teach with confidence.
              </motion.p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: Presentation, title: "Comprehensive training", desc: "Hands-on training to help you get started and go further.", color: "#8b5cf6" },
                  { icon: Headphones,   title: "Dedicated support",      desc: "Our support team is always ready to assist you.",               color: "#10b981" },
                  { icon: BookOpen,     title: "Teaching resources",     desc: "Access lesson guides, worksheets, and best practices.",         color: "#f59e0b" },
                  { icon: TrendingUp,   title: "Continuous growth",      desc: "Workshops, webinars, and updates to keep your skills ahead.",   color: "#3b82f6" }
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeLeft(0.35 + idx * 0.08)} whileHover={{ x: 5 }} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "#ffffff", padding: "12px 14px", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.04)", border: "1px solid #f1f5f9", transition: "all 0.3s ease" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 19, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: item.color, margin: "0 0 3px 0" }}>{item.title}</h4>
                      <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {isDesktop && (
              <div style={{ flex: 1, position: "relative", minHeight: 480, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
                  style={{ maxWidth: 380, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(10px)", padding: "18px 22px", borderRadius: 16, boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(79,70,229,0.1)", display: "flex", gap: 14, alignItems: "center" }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 24, background: "linear-gradient(135deg, #f0f5ff 0%, #e0e7ff 100%)", border: "1px solid #c7d2fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ShieldCheck size={24} color="#4f46e5" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 900, color: "#0f172a", margin: "0 0 2px 0" }}>Your success is our priority.</h4>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#4f46e5", margin: "0 0 3px 0" }}>We support you at every step.</p>
                    <p style={{ fontSize: 11, color: "#475569", margin: 0, fontWeight: 500 }}>So you can focus on what matters most—your students.</p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Mobile: success card inline */}
          {isMobile && (
            <motion.div {...fadeUp(0.4)} style={{ background: "rgba(255,255,255,0.97)", padding: "16px 18px", borderRadius: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.06)", border: "1px solid rgba(79,70,229,0.1)", display: "flex", gap: 14, alignItems: "center", marginBottom: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 22, background: "linear-gradient(135deg, #f0f5ff 0%, #e0e7ff 100%)", border: "1px solid #c7d2fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ShieldCheck size={22} color="#4f46e5" />
              </div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 900, color: "#0f172a", margin: "0 0 2px 0" }}>Your success is our priority.</h4>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#4f46e5", margin: 0 }}>We support you at every step.</p>
              </div>
            </motion.div>
          )}

          <motion.div {...fadeUp(0.5)} style={{ background: "#f0f5ff", borderRadius: 20, padding: isMobile ? "18px 16px" : "26px", border: "1px solid #e0e7ff" }}>
            <h3 style={{ fontSize: isMobile ? 15 : 17, fontWeight: 800, color: "#0f172a", textAlign: "center", marginBottom: 20 }}>Support that empowers educators</h3>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: isMobile ? 16 : 20, marginBottom: 20 }}>
              {[
                { icon: Users,      title: "Onboarding & Training",  desc: "Get up to speed with guided sessions and hands-on practice." },
                { icon: Headphones, title: "Help & Troubleshooting",  desc: "Fast, friendly support whenever you need it." },
                { icon: BookOpen,   title: "Resource Library",        desc: "Access lesson plans, guides, and classroom materials." },
                { icon: Calendar,   title: "Webinars & Workshops",    desc: "Stay updated with expert sessions and peer learning." },
                { icon: RefreshCcw, title: "Updates & Innovations",   desc: "Regular feature updates to enhance your teaching." }
              ].map((step, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 20, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366f1", marginBottom: 2, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                    <step.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", margin: 0 }}>{step.title}</h4>
                  <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.4, fontWeight: 500 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: "#ffffff", borderRadius: 14, padding: isMobile ? "14px" : "14px 22px", display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", border: "1px solid #e2e8f0", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Heart size={18} color="#6366f1" />
                <h4 style={{ fontSize: isMobile ? 13 : 15, fontWeight: 800, color: "#0f172a", margin: 0 }}>We're more than a platform. We're your teaching partner.</h4>
              </div>
              <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 700, color: "#6366f1", margin: 0 }}>Together, we create better learning experiences.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 7: CTA ══ */}
      <section style={{ padding: sectionPy, background: "#ffffff", overflow: "hidden" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: px }}>
          <div style={{ display: "flex", gap: isMobile ? 0 : isTablet ? 40 : 60, alignItems: "stretch", marginBottom: 48, flexDirection: isMobile ? "column" : "row" }}>
            <div style={{ flex: 1, maxWidth: isMobile ? "100%" : "45%", marginBottom: isMobile ? 28 : 0 }}>
              <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <Rocket size={20} color="#6366f1" strokeWidth={2} />
                <span style={{ fontSize: 12, fontWeight: 800, color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase" }}>GET STARTED WITH SPARKVR</span>
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} style={{ fontSize: isMobile ? 28 : isTablet ? 34 : "clamp(32px,4.5vw,48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 18 }}>
                Ready to transform<br /><span style={{ color: "#6366f1" }}>the way you teach?</span>
              </motion.h2>
              <motion.p {...fadeUp(0.3)} style={{ fontSize: isMobile ? 14 : 16, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 28 }}>
                Join thousands of teachers creating engaging, effective, and meaningful learning experiences with SparkVR.
              </motion.p>
              <motion.div {...fadeUp(0.4)} style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)", borderRadius: 20, padding: isMobile ? "22px 18px" : "28px", border: "1px solid #e2e8f0", boxShadow: "0 8px 24px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                  <div style={{ width: isMobile ? 60 : 72, height: isMobile ? 60 : 72, borderRadius: 18, background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Rocket size={isMobile ? 30 : 36} color="#ffffff" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: "#0f172a", margin: "0 0 4px 0" }}>Let's create better</h3>
                    <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: "#6366f1", margin: 0 }}>learning together.</h3>
                  </div>
                </div>
                <p style={{ fontSize: isMobile ? 13 : 15, color: "#475569", fontWeight: 600, marginBottom: 20 }}>Get started in minutes and see the impact in every class.</p>
                <a href="/contact" style={{ textDecoration: "none", width: "100%", padding: "14px 20px", background: "linear-gradient(90deg, #4f46e5 0%, #6366f1 100%)", color: "#ffffff", borderRadius: 12, fontSize: isMobile ? 15 : 17, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 8px 20px rgba(99,102,241,0.3)" }}>
                  Get Started Now <ArrowRight size={18} strokeWidth={2.5} />
                </a>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 14 }}>
                  <ShieldCheck size={14} color="#475569" />
                  <span style={{ fontSize: 12, color: "#475569", fontWeight: 600 }}>Trusted by educators. Built for classrooms.</span>
                </div>
              </motion.div>
            </div>

            <div style={{ flex: 1, position: "relative", minHeight: isMobile ? 240 : 420 }}>
              <motion.div {...fadeUp(0.3)} style={{ position: "absolute", inset: 0, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
                <img loading="lazy" decoding="async" src="/teacher_2.webp" alt="SparkVR Classroom" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </motion.div>
              {!isMobile && (
                <motion.div
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } }}
                  style={{ position: "absolute", top: 30, right: 0, display: "flex", flexDirection: "column", gap: 8, zIndex: 10 }}
                >
                  {[
                    { icon: Users,    text: "Engage", color: "#8b5cf6" },
                    { icon: Glasses,  text: "Explore", color: "#3b82f6" },
                    { icon: Lightbulb,text: "Explain", color: "#10b981" },
                    { icon: BarChart2,text: "Excel",   color: "#f59e0b" }
                  ].map((it, i) => (
                    <motion.div key={i} variants={{ initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 } }} style={{ background: "#ffffff", padding: isTablet ? "10px 16px" : "10px 20px", borderRadius: 12, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 8px 16px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0", borderLeft: `4px solid ${it.color}` }}>
                      <it.icon size={18} color={it.color} />
                      <span style={{ fontSize: isTablet ? 13 : 15, fontWeight: 800, color: "#0f172a" }}>{it.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <motion.div {...fadeUp(0.5)} style={{ background: "#f8fafc", borderRadius: 20, padding: isMobile ? "18px 16px" : "26px", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ height: 2, width: 36, background: "#cbd5e1" }} />
              <h3 style={{ fontSize: isMobile ? 15 : 17, fontWeight: 800, color: "#0f172a", textAlign: "center", margin: 0 }}>Why teachers choose SparkVR</h3>
              <div style={{ height: 2, width: 36, background: "#cbd5e1" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: isMobile ? 10 : 14, marginBottom: 24 }}>
              {[
                { icon: ShieldCheck, title: "Teacher-guided", desc: "and in control" },
                { icon: Target,      title: "Aligned with",   desc: "curriculum" },
                { icon: Users,       title: "Engaging for",   desc: "every student" },
                { icon: Settings,    title: "Simple, reliable,", desc: "and easy to use" },
                { icon: Headphones,  title: "Support that",   desc: "empowers you" }
              ].map((step, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, background: "#ffffff", padding: "12px", borderRadius: 14, border: "1px solid #e2e8f0" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#4f46e5", flexShrink: 0 }}>
                    <step.icon size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 800, color: "#0f172a", margin: "0 0 1px 0", lineHeight: 1.2 }}>{step.title}</h4>
                    <p style={{ fontSize: 11, color: "#64748b", margin: 0, fontWeight: 500 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#ffffff", borderRadius: 16, padding: isMobile ? "18px 14px" : "22px 28px", display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", border: "1px solid #e2e8f0", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 20 : 0 }}>
              <div style={{ flex: 1, display: "flex", gap: 14, borderRight: isMobile ? "none" : "1px solid #e2e8f0", paddingRight: isMobile ? 0 : 28, borderBottom: isMobile ? "1px solid #e2e8f0" : "none", paddingBottom: isMobile ? 20 : 0 }}>
                <Quote size={32} color="#8b5cf6" style={{ opacity: 0.3, flexShrink: 0, marginTop: -6 }} />
                <div>
                  <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 700, color: "#0f172a", margin: "0 0 10px 0", lineHeight: 1.5, fontStyle: "italic" }}>"SparkVR empowers me to teach better and helps my students learn deeper."</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 22, height: 22, borderRadius: 11, background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}><Users size={11} color="#64748b" /></div>
                    <p style={{ fontSize: 12, color: "#64748b", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 800 }}>A Teacher</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 16, paddingLeft: isMobile ? 0 : 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><ShieldCheck size={24} color="#fff" /></div>
                <div>
                  <h4 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 900, color: "#0f172a", margin: "0 0 3px 0" }}>You teach. We support.</h4>
                  <p style={{ fontSize: isMobile ? 13 : 14, color: "#6366f1", fontWeight: 800, margin: 0 }}>Together, we create better learning.</p>
                </div>
              </div>
              {!isMobile && (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", paddingLeft: 28 }}>
                  <div style={{ padding: "14px 24px", background: "#0f172a", color: "#ffffff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    Start Your Journey <ArrowRight size={16} strokeWidth={2.5} />
                  </div>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0, fontWeight: 600 }}>Better teaching. Better outcomes.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
