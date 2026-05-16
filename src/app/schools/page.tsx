"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  School, WifiOff, Users, Wrench, Calendar, ShieldCheck,
  GraduationCap, Headset, ChevronRight, Atom, Globe, Zap,
  AlertCircle, CheckCircle2, ArrowRight, LayoutTemplate, Box,
  User, UserCheck, LayoutDashboard, BatteryCharging, ClipboardList,
  MousePointerClick, BarChart, BadgeCheck, Plug, Package, Maximize,
  MonitorPlay, BookOpen, Target, MousePointer2, Clock, Heart, RefreshCw, BarChart2,
  MessageSquare, Truck, Presentation, Rocket, TrendingUp, Puzzle, TabletSmartphone, Lightbulb, Handshake
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

const scaleUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true as const, margin: "-100px" },
  transition: { delay, duration: 0.8, ease: EASE },
});

const float = (delay = 0, yOffset = -20) => ({
  animate: {
    y: [0, yOffset, 0],
    rotateZ: [0, 5, -5, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    delay,
    ease: "easeInOut",
  },
});

/* ─────────────────────────────────────────── */
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

export default function SchoolHubPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <main style={{ background: "#f8f9fc", overflow: "hidden" }}>

      {/* ══════════════════════════════════════
          HERO SECTION  —  32% text | 68% image
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        marginBottom: isMobile ? 40 : 80,
      }}>
        {/* ── LEFT PANEL (32%) ── */}
        <div style={{
          position: "relative",
          width: isMobile ? "100%" : "32%",
          minWidth: isMobile ? "100%" : "min(100%, 450px)",
          minHeight: isMobile ? "auto" : "100vh",
          background: "#f0f5ff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile ? "88px 20px 40px" : "120px 40px 120px 60px",
          zIndex: 10,
          flexShrink: 0,
        }}>

          <div style={{ position: "relative" }}>


            <motion.h1 {...fadeLeft(0.1)} style={{ fontSize: "clamp(32px, 3vw, 52px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20, margin: "0 0 20px 0" }}>
              A VR Lab designed <br />
              for <span style={{ color: "#0052cc" }}>real schools</span> —<br />
              not future fantasies.
            </motion.h1>

            <motion.p {...fadeUp(0.2)} style={{ fontSize: 16, color: "#475569", lineHeight: 1.65, marginBottom: 36, fontWeight: 500 }}>
              Built to fit within existing infrastructure,<br />schedules, and teaching systems.
            </motion.p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 20px", marginBottom: 40 }}>
              {[
                { icon: School, label: "No structural\nchanges" },
                { icon: WifiOff, label: "No internet\ndependency" },
                { icon: Users, label: "Teacher\nsupervised" },
                { icon: Wrench, label: "Predictable\nmaintenance" },
              ].map((feat, i) => (
                <motion.div key={i} {...fadeUp(0.28 + i * 0.08)} whileHover={{ scale: 1.05, y: -5 }} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, cursor: "default" }}>
                  <motion.div whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }} style={{ width: 48, height: 48, borderRadius: 14, background: "#fff", boxShadow: "0 8px 20px rgba(0,82,204,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc", border: "1px solid rgba(0,82,204,0.1)", flexShrink: 0 }}>
                    <feat.icon size={22} strokeWidth={2} />
                  </motion.div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#001a4d", lineHeight: 1.45, whiteSpace: "pre-line" }}>
                    {feat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.7)}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{ boxShadow: ["0 10px 25px rgba(0,82,204,0.3)", "0 15px 35px rgba(0,82,204,0.5)", "0 10px 25px rgba(0,82,204,0.3)"] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 14, padding: "16px 30px", borderRadius: 12, background: "linear-gradient(135deg, #0052cc 0%, #003d99 100%)", color: "#fff", cursor: "pointer", overflow: "hidden" }}
                >
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
                    style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "30%", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)", transform: "skewX(-20deg)" }}
                  />
                  <Calendar size={18} style={{ position: "relative", zIndex: 2 }} />
                  <span style={{ position: "relative", zIndex: 2, fontWeight: 800, fontSize: 13, letterSpacing: "0.08em" }}>
                    SCHEDULE A GUIDED DEMONSTRATION
                  </span>
                  <ChevronRight size={18} strokeWidth={3} style={{ position: "relative", zIndex: 2 }} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT PANEL (68%) ── */}
        <div style={{ position: "relative", flex: 1, minHeight: isMobile ? "55vw" : "100vh", maxHeight: isMobile ? "320px" : undefined }}>
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            style={{ position: "absolute", inset: 0, backgroundImage: "url('/backgroundimageschoolhub.webp')", backgroundSize: "cover", backgroundPosition: "center center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #f0f5ff 0%, rgba(240,245,255,0.4) 10%, transparent 25%)" }} />
        </div>

        {/* ── BOTTOM STATS BAR ── */}
        <div style={{ position: isMobile ? "relative" : "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, padding: isMobile ? "20px" : "0 40px", transform: isMobile ? "none" : "translateY(50%)" }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}
            style={{ maxWidth: 1040, margin: "0 auto", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", borderRadius: 24, padding: "26px 50px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 16px 40px rgba(0,0,0,0.1)", border: "1px solid rgba(255,255,255,0.8)", flexWrap: "wrap", gap: 24 }}
          >
            {[
              { icon: ShieldCheck, top: "Trusted by", bottom: "250+ Schools", accent: false },
              { icon: Users, top: "10,000+", bottom: "Students Impacted", accent: false },
              { icon: GraduationCap, top: "Curriculum", bottom: "Aligned Content", accent: true },
              { icon: Headset, top: "Reliable Support", bottom: "Every Step of the Way", accent: true },
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} style={{ display: "flex", alignItems: "center", gap: 16, cursor: "default" }}>
                <div style={{ color: "#0052cc" }}><stat.icon size={32} /></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: stat.accent ? 16 : 14, fontWeight: 800, color: stat.accent ? "#0052cc" : "#001a4d", lineHeight: 1.2 }}>{stat.top}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#64748b" }}>{stat.bottom}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          REALITIES SECTION (What schools worry about vs How SparkVR solves it)
      ══════════════════════════════════════ */}
      <section style={{ padding: "80px 20px 40px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 20 }}>
              Built for <span style={{ color: "#0052cc" }}>real school</span> realities.
            </motion.h2>
            <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: "#64748b", lineHeight: 1.6, fontWeight: 500 }}>
              We understand the challenges schools face every day.<br />
              Here's how SparkVR turns those concerns into simple, reliable solutions.
            </motion.p>
          </div>

          {/* Comparison Cards */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 40, position: "relative" }}>

            {/* Left Column: Worry (Red Theme) */}
            <motion.div {...scaleUp(0.4)} style={{ flex: 1, background: "#fff", borderRadius: 24, border: "1px solid #fee2e2", boxShadow: "0 20px 40px rgba(220,38,38,0.05)", overflow: "hidden" }}>
              <div style={{ background: "#fef2f2", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, borderBottom: "1px solid #fee2e2" }}>
                <AlertCircle size={28} color="#dc2626" />
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#b91c1c" }}>What schools worry about</h3>
              </div>

              <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", gap: 32 }}>
                {[
                  {
                    image: "/school_empty_room.webp",
                    icon: <LayoutTemplate size={24} color="#dc2626" />,
                    title: "We don't have enough\nspace or infrastructure.",
                    desc: "Setting up a new lab seems difficult\nand expensive."
                  },
                  {
                    image: "/school_router_offline.webp",
                    icon: <WifiOff size={24} color="#dc2626" />,
                    title: "It will need constant\ninternet connectivity.",
                    desc: "Our internet is unreliable and\ndowntime will disrupt learning."
                  },
                  {
                    image: "/school_teacher_stressed.webp",
                    icon: <User size={24} color="#dc2626" />,
                    title: "Teachers may find it\ndifficult to manage.",
                    desc: "New technology means more\ntraining and extra workload."
                  },
                  {
                    image: "/school_vr_repair.webp",
                    icon: <Wrench size={24} color="#dc2626" />,
                    title: "Maintenance will be\ncomplex and costly.",
                    desc: "We worry about breakdowns,\nrepairs and hidden costs."
                  }
                ].map((item, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.02, x: 8, y: -4, boxShadow: "0 15px 30px rgba(220,38,38,0.1)" }} transition={{ type: "spring", stiffness: 300 }} style={{ display: "flex", alignItems: "center", gap: 20, padding: 10, borderRadius: 16 }}>
                    <div style={{ width: 140, height: 90, borderRadius: 12, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                      <img loading="lazy" decoding="async" src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 24, background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", lineHeight: 1.3, marginBottom: 6, whiteSpace: "pre-line" }}>{item.title}</h4>
                        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.5, whiteSpace: "pre-line" }}>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Center Arrows */}
            <div style={{ position: "absolute", left: "50%", top: "120px", bottom: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", transform: "translateX(-50%)", padding: "40px 0" }}>
              {[1, 2, 3, 4].map((i) => (
                <motion.div key={i} animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }} style={{ width: 40, height: 40, borderRadius: 20, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc", boxShadow: "0 4px 12px rgba(0,82,204,0.1)", zIndex: 10 }}>
                  <ArrowRight size={20} />
                </motion.div>
              ))}
            </div>

            {/* Right Column: Solution (Green Theme) */}
            <motion.div {...scaleUp(0.6)} style={{ flex: 1, background: "#fff", borderRadius: 24, border: "1px solid #dcfce7", boxShadow: "0 20px 40px rgba(34,197,94,0.05)", overflow: "hidden" }}>
              <div style={{ background: "#f0fdf4", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, borderBottom: "1px solid #dcfce7" }}>
                <CheckCircle2 size={28} color="#16a34a" />
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#15803d" }}>How SparkVR solves it</h3>
              </div>

              <div style={{ padding: "32px 24px", display: "flex", flexDirection: "column", gap: 32 }}>
                {[
                  {
                    image: "/sparkvr_classroom.webp",
                    icon: <Box size={24} color="#16a34a" />,
                    title: "Uses existing rooms\nand infrastructure.",
                    desc: "SparkVR fits into your current\nclassrooms. No construction,\nno structural changes."
                  },
                  {
                    image: "/sparkvr_kid_smiling.webp",
                    icon: <WifiOff size={24} color="#16a34a" />,
                    title: "Fully offline content.\nNo internet during sessions.",
                    desc: "All experiences run locally on\nour devices. Learning never stops."
                  },
                  {
                    image: "/backgroundimageschoolhub.webp",
                    icon: <UserCheck size={24} color="#16a34a" />,
                    title: "Teacher-friendly system\nwith simple controls.",
                    desc: "Intuitive dashboard, guided sessions\nand easy classroom management."
                  },
                  {
                    image: "/backgroundimageschoolhub.webp",
                    icon: <ShieldCheck size={24} color="#16a34a" />,
                    title: "Predictable maintenance\nflow with local support.",
                    desc: "Durable devices, safe storage,\nregular checkups and local\nservice you can rely on."
                  }
                ].map((item, idx) => (
                  <motion.div key={idx} whileHover={{ x: -5 }} style={{ display: "flex", alignItems: "center", gap: 20, flexDirection: "row-reverse" }}>
                    <div style={{ width: 140, height: 90, borderRadius: 12, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                      <img loading="lazy" decoding="async" src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ display: "flex", gap: 16, flexDirection: "row-reverse", textAlign: "right" }}>
                      <div style={{ width: 48, height: 48, borderRadius: 24, background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", lineHeight: 1.3, marginBottom: 6, whiteSpace: "pre-line" }}>{item.title}</h4>
                        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.5, whiteSpace: "pre-line" }}>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Bottom Summary Banner */}
          <motion.div {...fadeUp(0.8)} style={{ marginTop: 60, background: "#f0f5ff", borderRadius: 16, padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <ShieldCheck size={28} color="#0052cc" />
            <p style={{ fontSize: 18, fontWeight: 600, color: "#001a4d", margin: 0 }}>
              SparkVR is designed around what schools truly need — <span style={{ color: "#0052cc" }}>practical, reliable and easy to implement.</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          IMPLEMENTATION FLOW SECTION (How it works inside your school)
      ══════════════════════════════════════ */}
      <section style={{ padding: "20px 20px 40px", background: "#ffffff", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 80 }}>

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 20 }}>
              How it works <span style={{ color: "#0052cc" }}>inside your school</span>
            </motion.h2>
            <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: "#64748b", lineHeight: 1.6, fontWeight: 500, maxWidth: 600, margin: "0 auto" }}>
              A simple, structured process that makes VR learning easy to run and sustainable every single day.
            </motion.p>
          </div>

          {/* 4 Steps Flow */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 24, position: "relative" }}>

            {/* Connecting Dotted Line (Background) */}
            <div style={{ position: "absolute", top: 40, left: "12%", right: "12%", height: 2, background: "transparent", borderTop: "2px dashed #bfdbfe", zIndex: 0 }} />

            {[
              {
                num: 1,
                topIcon: <Users size={32} color="#0052cc" />,
                title: "Batch rotation system",
                desc: "Students learn in small batches\nwith a fixed schedule so every\nchild gets equal access.",
                image: "/sparkvr_kid_smiling.webp",
                btmIcon: <Calendar size={20} color="#0052cc" />,
                btmText: "Small batches.\nMaximum impact."
              },
              {
                num: 2,
                topIcon: <LayoutDashboard size={32} color="#0052cc" />,
                title: "Teacher control panel",
                desc: "Teachers manage sessions,\ncontent and students from an\neasy-to-use dashboard.",
                image: "/backgroundimageschoolhub.webp",
                btmIcon: <MousePointerClick size={20} color="#0052cc" />,
                btmText: "Full control.\nZero complexity."
              },
              {
                num: 3,
                topIcon: <BatteryCharging size={32} color="#0052cc" />,
                title: "Safe storage & charging",
                desc: "Devices are safely stored and\ncharged in a smart cart that's\nbuilt for schools.",
                image: "/backgroundimageschoolhub.webp",
                btmIcon: <ShieldCheck size={20} color="#0052cc" />,
                btmText: "Safe. Secured.\nAlways ready."
              },
              {
                num: 4,
                topIcon: <ClipboardList size={32} color="#0052cc" />,
                title: "Structured lab management",
                desc: "Clear usage tracking, reporting\nand maintenance flow keeps\neverything running smoothly.",
                image: "/sparkvr_classroom.webp",
                btmIcon: <BarChart size={20} color="#0052cc" />,
                btmText: "Track. Monitor.\nImprove continuously."
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(0.2 + idx * 0.1)}
                whileHover={{ y: -15, scale: 1.04, rotateY: 5, rotateX: 5, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}
              >

                {/* Top Icon Circle */}
                <div style={{ width: 80, height: 80, borderRadius: 40, background: "#fff", border: "2px solid #eff6ff", boxShadow: "0 10px 30px rgba(0,82,204,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, position: "relative", zIndex: 2 }}>
                  {step.topIcon}
                </div>

                {/* Number Badge (Placed outside to prevent clipping) */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: -14, position: "relative", zIndex: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 14, background: "#0052cc", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, border: "2px solid #fff", boxShadow: "0 4px 10px rgba(0,82,204,0.2)" }}>
                    {step.num}
                  </div>
                </div>

                {/* Card */}
                <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", boxShadow: "0 10px 40px rgba(0,0,0,0.06)", overflow: "hidden", display: "flex", flexDirection: "column", width: "100%", height: "100%", paddingTop: 14 }}>

                  <div style={{ padding: "20px 20px 0", textAlign: "center", flex: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 16 }}>{step.title}</h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, whiteSpace: "pre-line", marginBottom: 24 }}>{step.desc}</p>
                  </div>

                  {/* Image */}
                  <div style={{ width: "100%", height: 160, position: "relative", background: "#f8f9fc" }}>
                    <img loading="lazy" decoding="async" src={step.image} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>

                  {/* Bottom Text Block */}
                  <div style={{ background: "#f8fbff", padding: "20px", display: "flex", alignItems: "flex-start", gap: 12, borderTop: "1px solid #eff6ff" }}>
                    <div style={{ background: "#fff", borderRadius: 8, padding: 8, boxShadow: "0 4px 12px rgba(0,82,204,0.05)" }}>
                      {step.btmIcon}
                    </div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#001a4d", lineHeight: 1.4, margin: 0, whiteSpace: "pre-line" }}>
                      {step.btmText}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.6)} style={{ marginTop: 80, background: "#f8fbff", borderRadius: 16, padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <BadgeCheck size={32} color="#0052cc" />
              <span style={{ fontSize: 18, fontWeight: 800, color: "#0052cc" }}>Clarity removes hesitation.</span>
            </div>
            <div style={{ width: 1, height: 24, background: "#cbd5e1" }} />
            <span style={{ fontSize: 18, fontWeight: 600, color: "#001a4d" }}>A proven process that fits perfectly into your school.</span>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          INFRASTRUCTURE SIMPLICITY SECTION
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "20px 20px 40px", zIndex: 1, overflow: "hidden", background: "#f8f9fc" }}>

        {/* Background Gradient/Image for Top Half */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "60vh", backgroundImage: "url('/backgroundimageschoolhub.webp')", backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.1, zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "60vh", background: "linear-gradient(to right, #f8f9fc 30%, rgba(248,249,252,0.6) 60%, transparent)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "60vh", background: "linear-gradient(to bottom, transparent 60%, #f8f9fc)", zIndex: 0 }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 2 }}>

          {/* Top Hero-ish Area */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 24 : 60, alignItems: "center", marginBottom: isMobile ? 40 : 80 }}>
            {/* Left Content */}
            <div style={{ flex: 1, minWidth: "min(100%, 400px)" }}>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Simple infrastructure.<br />
                <span style={{ color: "#0052cc" }}>Maximum impact.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 18, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 32 }}>
                SparkVR Labs are designed to work in real school<br />
                environments with minimal space, power and setup<br />
                requirements.
              </motion.p>

              <motion.div {...fadeLeft(0.4)} style={{ display: "flex", alignItems: "center", gap: 20, background: "#eff6ff", padding: "20px 24px", borderRadius: 16, border: "1px solid #dbeafe" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc" }}>
                  <Plug size={32} />
                </div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#001a4d", margin: 0, lineHeight: 1.5 }}>
                  Plug-and-play installation means your lab<br />
                  is ready to inspire from <span style={{ color: "#0052cc" }}>day one.</span>
                </p>
              </motion.div>
            </div>

            {/* Right Large Image (Simulated by crop of background image) */}
            <motion.div {...scaleUp(0.5)} style={{ flex: 1.2, height: 440, borderRadius: 24, overflow: "hidden", position: "relative", boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}>
              <img loading="lazy" decoding="async" src="/backgroundimageschoolhub.webp" alt="SparkVR Cart" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center" }} />
            </motion.div>
          </div>

          {/* 4 Cards Row */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 24, marginBottom: isMobile ? 40 : 80 }}>
            {[
              {
                icon: <Package size={32} color="#0052cc" />,
                title: "Plug-and-play setup",
                desc: "Pre-configured devices and systems\nensure quick installation with\nminimal effort.",
                image: "/backgroundimageschoolhub.webp"
              },
              {
                icon: <Maximize size={32} color="#0052cc" />,
                title: "Minimal space requirement",
                desc: "Works in standard classrooms\nor labs without the need for\nstructural modifications.",
                image: "/classroom_stock.webp"
              },
              {
                icon: <Zap size={32} color="#0052cc" />,
                title: "No complex wiring",
                desc: "Runs on standard power outlets\nwith optimized power usage\nfor safety and efficiency.",
                image: "/power_socket_stock.webp"
              },
              {
                icon: <ShieldCheck size={32} color="#0052cc" />,
                title: "Safe & durable design",
                desc: "Built for everyday school use\nwith child-safe materials\nand sturdy construction.",
                image: "/vr_headset_stock.webp"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(0.3 + idx * 0.1)}
                whileHover={{ y: -15, scale: 1.04, rotateY: -5, rotateX: 5, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ background: "#fff", borderRadius: 20, border: "1px solid #f1f5f9", boxShadow: "0 10px 40px rgba(0,0,0,0.06)", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}
              >
                <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1 }}>

                  {/* Icon Square/Circle */}
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    {card.icon}
                  </div>

                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, whiteSpace: "pre-line", margin: 0 }}>{card.desc}</p>
                </div>

                <div style={{ width: "100%", height: 130, position: "relative" }}>
                  <img loading="lazy" decoding="async" src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: idx === 0 ? "right center" : "center" }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.6)} style={{ background: "#f0f5ff", borderRadius: 16, padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "center", gap: 24, border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,82,204,0.1)" }}>
                <ShieldCheck size={24} color="#0052cc" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#001a4d" }}>Built to fit your school. Designed to last.</span>
            </div>

            <div style={{ width: 2, height: 24, background: "#cbd5e1" }} />

            <p style={{ fontSize: 16, fontWeight: 600, color: "#475569", margin: 0 }}>
              Reliable infrastructure that stays in the background,<br />
              <span style={{ color: "#0052cc" }}>so learning stays in the spotlight.</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          TEACHER EXPERIENCE SECTION (Designed for teachers)
      ══════════════════════════════════════ */}
      <section style={{ padding: "20px 20px 40px", background: "#ffffff", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 24 : 60, alignItems: "center", marginBottom: isMobile ? 40 : 80 }}>

            {/* Left Content */}
            <div style={{ flex: 1, minWidth: "min(100%, 450px)" }}>
              <motion.div {...fadeLeft(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "8px 16px", background: "#eff6ff", borderRadius: 8 }}>
                <User size={18} color="#0052cc" />
                <span style={{ fontSize: 13, fontWeight: 800, color: "#0052cc", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  TEACHER EXPERIENCE
                </span>
              </motion.div>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Designed for teachers —<br />
                <span style={{ color: "#0052cc" }}>not technicians.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 18, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 40 }}>
                SparkVR puts teachers in control with simple tools,<br />
                guided workflows, and complete academic alignment.
              </motion.p>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {[
                  {
                    icon: <MonitorPlay size={24} color="#0052cc" />,
                    title: "Simple control interface",
                    desc: "An intuitive dashboard lets you start sessions,\nmanage content, and monitor progress with ease."
                  },
                  {
                    icon: <BookOpen size={24} color="#0052cc" />,
                    title: "Guided session flow",
                    desc: "Step-by-step workflows help you run every session\nconfidently, even if it's your first time."
                  },
                  {
                    icon: <GraduationCap size={24} color="#0052cc" />,
                    title: "No technical expertise required",
                    desc: "SparkVR is built for educators. No coding, no complex\nsetup — just teach."
                  },
                  {
                    icon: <Target size={24} color="#0052cc" />,
                    title: "Full academic alignment",
                    desc: "All content is curriculum-aligned and designed to\nsupport your learning objectives."
                  }
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeLeft(0.4 + idx * 0.1)} style={{ display: "flex", gap: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 24, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid #dbeafe" }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 17, fontWeight: 800, color: "#001a4d", marginBottom: 8 }}>{item.title}</h4>
                      <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.5, margin: 0, whiteSpace: "pre-line" }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Large Image with Floating Quote */}
            <motion.div
              {...scaleUp(0.5)}
              whileHover={{ rotateY: -3, rotateX: 2, scale: 1.02, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ flex: 1.2, height: 600, borderRadius: 24, position: "relative", perspective: 1000 }}
            >
              <div style={{ width: "100%", height: "100%", borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,82,204,0.15)" }}>
                <img loading="lazy" decoding="async" src="/teacher_tablet.webp" alt="Teacher Dashboard" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>

              {/* Floating Quote */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ position: "absolute", bottom: -20, right: 40, background: "#fff", borderRadius: 16, padding: "24px 32px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", maxWidth: 380, border: "1px solid #f1f5f9" }}
              >
                <p style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", margin: "0 0 12px 0", lineHeight: 1.4 }}>
                  <span style={{ color: "#0052cc", fontSize: 24, lineHeight: 0.5, verticalAlign: "bottom" }}>"</span>
                  Everything I need, right where I need it.
                  <span style={{ color: "#0052cc", fontSize: 24, lineHeight: 0.5, verticalAlign: "bottom" }}>"</span>
                </p>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0, fontWeight: 600 }}>- Teacher, DPS Bangalore</p>
              </motion.div>
            </motion.div>
          </div>

          {/* 4 Feature Columns Bar */}
          <motion.div {...fadeUp(0.6)} style={{ background: "#f8f9fc", borderRadius: 20, padding: isMobile ? "24px 16px" : "40px", display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 24, marginBottom: 40, border: "1px solid #f1f5f9" }}>
            {[
              {
                icon: <MousePointer2 size={24} color="#0052cc" />,
                title: "Easy to learn",
                desc: "Get started in minutes with\nminimal training."
              },
              {
                icon: <Users size={24} color="#0052cc" />,
                title: "Easy to teach",
                desc: "Focus on teaching while\nSparkVR handles the rest."
              },
              {
                icon: <Clock size={24} color="#0052cc" />,
                title: "Saves time",
                desc: "Pre-planned sessions and tools\nreduce preparation hours."
              },
              {
                icon: <ShieldCheck size={24} color="#0052cc" />,
                title: "Always supported",
                desc: "Our team is always here\nwhen you need us."
              }
            ].map((feat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.05, rotateX: 5, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ display: "flex", gap: 16, cursor: "default", perspective: 1000 }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 24, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(0,82,204,0.05)" }}>
                  {feat.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", marginBottom: 6 }}>{feat.title}</h4>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, margin: 0, whiteSpace: "pre-line" }}>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.7)} style={{ background: "#f0f5ff", borderRadius: 100, padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "center", gap: 16, maxWidth: "fit-content", margin: "0 auto", border: "1px solid #dbeafe" }}>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: "#0052cc", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,82,204,0.3)" }}>
              <Heart size={18} color="#fff" fill="#fff" />
            </div>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#001a4d", margin: 0 }}>
              Empowering teachers to deliver the future of learning — <span style={{ color: "#0052cc", fontWeight: 800 }}>today.</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          OPERATIONAL CLARITY SECTION
      ══════════════════════════════════════ */}
      <section style={{ padding: "40px 20px 40px", background: "#fdfdff", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 0 }}>

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Predictable operations.<br />
              <span style={{ color: "#0052cc" }}>Smooth learning every day.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: "#475569", lineHeight: 1.6, fontWeight: 500, maxWidth: 650, margin: "0 auto" }}>
              A clear operational structure that keeps everything running<br />
              efficiently and on schedule.
            </motion.p>
          </div>

          {/* 4 Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 20, marginBottom: 60 }}>

            {/* Card 1: Fixed Session Duration */}
            <motion.div
              {...fadeUp(0.4)}
              whileHover={{ y: -12, scale: 1.02, rotateX: 2, rotateY: 2, boxShadow: "0 25px 50px rgba(0,82,204,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ background: "#fff", borderRadius: 24, border: "1px solid #f1f5f9", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", perspective: 1000 }}
            >
              <div style={{ padding: "40px 24px 24px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 32, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Clock size={28} color="#0052cc" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>Fixed Session Duration</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Optimized time slots for<br />focused and effective learning.</p>
              </div>
              <div style={{ flex: 1, padding: "0 16px 16px", display: "flex", alignItems: "flex-end" }}>
                <div style={{ width: "100%", height: 200, borderRadius: 16, overflow: "hidden", position: "relative", background: "#0f172a" }}>
                  <img loading="lazy" decoding="async" src="/sparkvr_classroom.webp" alt="Classroom" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#38bdf8", letterSpacing: "0.1em", marginBottom: 4 }}>SESSION IN PROGRESS</div>
                    <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1 }}>40:00</div>
                    <div style={{ fontSize: 9, fontWeight: 600, color: "#cbd5e1", marginTop: 4 }}>MINUTES</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Planned Rotations */}
            <motion.div
              {...fadeUp(0.5)}
              whileHover={{ y: -12, scale: 1.02, rotateX: 2, rotateY: 2, boxShadow: "0 25px 50px rgba(0,82,204,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ background: "#fff", borderRadius: 24, border: "1px solid #f1f5f9", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", perspective: 1000 }}
            >
              <div style={{ padding: "40px 24px 24px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 32, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Users size={28} color="#0052cc" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>Planned Rotations</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Structured batches ensure every<br />student gets equal access.</p>
              </div>
              <div style={{ flex: 1, padding: "0 16px 16px", display: "flex", alignItems: "flex-end" }}>
                <div style={{ width: "100%", height: 200, borderRadius: 16, background: "#f8fafc", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "relative", width: 220, height: 160 }}>
                    {/* Batch A */}
                    <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 6, padding: "6px 10px", textAlign: "center", width: 95, zIndex: 2 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#1d4ed8" }}>Batch A</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: "#64748b" }}>9:00 - 9:40 AM</div>
                    </div>
                    {/* Batch B */}
                    <div style={{ position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6, padding: "6px 10px", textAlign: "center", width: 95, zIndex: 2 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#15803d" }}>Batch B</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: "#64748b" }}>9:45 - 10:25 AM</div>
                    </div>
                    {/* Batch C */}
                    <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 6, padding: "6px 10px", textAlign: "center", width: 95, zIndex: 2 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#c2410c" }}>Batch C</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: "#64748b" }}>10:30 - 11:10 AM</div>
                    </div>
                    {/* Batch D */}
                    <div style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", background: "#faf5ff", border: "1px solid #e9d5ff", borderRadius: 6, padding: "6px 10px", textAlign: "center", width: 95, zIndex: 2 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#7e22ce" }}>Batch D</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: "#64748b" }}>11:15 - 11:55 AM</div>
                    </div>
                    {/* Center Arrows */}
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#94a3b8", zIndex: 1 }}>
                      <RefreshCw size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Clear Scheduling */}
            <motion.div
              {...fadeUp(0.6)}
              whileHover={{ y: -12, scale: 1.02, rotateX: 2, rotateY: 2, boxShadow: "0 25px 50px rgba(0,82,204,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ background: "#fff", borderRadius: 24, border: "1px solid #f1f5f9", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", perspective: 1000 }}
            >
              <div style={{ padding: "40px 24px 24px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 32, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Calendar size={28} color="#0052cc" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>Clear Scheduling</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Easy-to-manage timetable that<br />fits your school day.</p>
              </div>
              <div style={{ flex: 1, padding: "0 16px 16px", display: "flex", alignItems: "flex-end" }}>
                <div style={{ width: "100%", height: 200, borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden", display: "flex", flexDirection: "column", background: "#fff" }}>
                  {[
                    { time: "09:00 - 09:40", batch: "Batch A", class: "Grade 6 - Science", color: "#2563eb", bg: "#eff6ff" },
                    { time: "09:45 - 10:25", batch: "Batch B", class: "Grade 7 - Geo", color: "#16a34a", bg: "#f0fdf4" },
                    { time: "10:30 - 11:10", batch: "Batch C", class: "Grade 8 - Bio", color: "#ea580c", bg: "#fff7ed" },
                    { time: "11:15 - 11:55", batch: "Batch D", class: "Grade 9 - Physics", color: "#9333ea", bg: "#faf5ff" },
                    { time: "12:00 - 12:40", batch: "Batch A", class: "Grade 6 - History", color: "#2563eb", bg: "#eff6ff" },
                  ].map((row, i) => (
                    <div key={i} style={{ display: "flex", borderBottom: i === 4 ? "none" : "1px solid #f1f5f9", flex: 1, alignItems: "center", padding: "0 12px", fontSize: 10, fontWeight: 600 }}>
                      <div style={{ flex: 1, color: "#64748b", fontSize: 9 }}>{row.time}</div>
                      <div style={{ width: 45, color: row.color, fontWeight: 800, fontSize: 10 }}>{row.batch}</div>
                      <div style={{ flex: 1.2, color: "#475569", textAlign: "right", fontSize: 9, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.class}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 4: Defined Roles */}
            <motion.div
              {...fadeUp(0.7)}
              whileHover={{ y: -12, scale: 1.02, rotateX: 2, rotateY: 2, boxShadow: "0 25px 50px rgba(0,82,204,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ background: "#fff", borderRadius: 24, border: "1px solid #f1f5f9", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", perspective: 1000 }}
            >
              <div style={{ padding: "40px 24px 24px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 32, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <UserCheck size={28} color="#0052cc" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>Defined Roles</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Clear responsibilities make<br />implementation simple.</p>
              </div>
              <div style={{ flex: 1, padding: "0 16px 16px", display: "flex", alignItems: "flex-end" }}>
                <div style={{ width: "100%", height: 200, display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f8fafc", borderRadius: 16, padding: "16px 12px", border: "1px solid #f1f5f9" }}>
                  {[
                    { icon: User, title: "Teacher", desc: "Conducts sessions\nand manages students" },
                    { icon: Users, title: "Lab Assistant", desc: "Prepares devices\nand supports sessions" },
                    { icon: ShieldCheck, title: "IT / Support", desc: "Handles maintenance\nand technical support" },
                    { icon: BarChart2, title: "Admin", desc: "Monitors usage\nand reviews reports" },
                  ].map((role, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", borderBottom: i === 3 ? "none" : "1px solid #e2e8f0", paddingBottom: i === 3 ? 0 : 8 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                        <role.icon size={16} color="#0052cc" />
                      </div>
                      <div style={{ width: 64, fontSize: 11, fontWeight: 800, color: "#001a4d" }}>{role.title}</div>
                      <div style={{ flex: 1, fontSize: 9, color: "#64748b", lineHeight: 1.4, whiteSpace: "pre-line" }}>{role.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.8)} style={{ background: "#f8f9fc", borderRadius: 16, padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 16, border: "1px solid #f1f5f9" }}>
            <CheckCircle2 size={28} color="#0052cc" />
            <p style={{ fontSize: 18, fontWeight: 700, color: "#001a4d", margin: 0 }}>
              Clear structure. Defined process. <span style={{ color: "#0052cc" }}>Better learning outcomes.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONSISTENT EXCELLENCE SECTION (7th)
      ══════════════════════════════════════ */}
      <section style={{ padding: "20px 20px 40px", background: "#ffffff", position: "relative", zIndex: 1, overflow: "hidden" }}>

        {/* Background Image with Fade */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE }}
          style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "700px", zIndex: 0 }}
        >
          <img loading="lazy" decoding="async" src="/section7.webp" alt="Consistent Experience" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top right" }} />
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "30%", background: "linear-gradient(to right, #ffffff 0%, transparent 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, #ffffff 0%, transparent 100%)" }} />
        </motion.div>

        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 2 }}>

          {/* Header */}
          <div style={{ marginBottom: 180, maxWidth: 650 }}>
            <motion.div {...fadeUp(0.1)} style={{ display: "inline-flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>

              <div style={{ width: 40, height: 2, background: "#0052cc", borderRadius: 2 }} />
            </motion.div>

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Consistent experience.<br />
              <span style={{ color: "#0052cc" }}>Every time.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.3)} style={{ fontSize: 20, color: "#475569", lineHeight: 1.6, fontWeight: 500, maxWidth: 500 }}>
              SparkVR Labs ensure the same high-quality learning experience for every student, every session.
            </motion.p>
          </div>

          {/* 5 Vertical Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 24 }}>

            {[
              { icon: ShieldCheck, title: "Standardized Quality", desc: "Every session follows proven standards for the best learning experience." },
              { icon: BarChart, title: "Performance Tracking", desc: "Monitor usage, progress and engagement with easy reports." },
              { icon: Headset, title: "Reliable Support", desc: "Our team is always ready to help you, whenever you need us." },
              { icon: RefreshCw, title: "Continuous Updates", desc: "Regular content and system updates keep learning fresh and relevant." },
              { icon: Users, title: "Scalable & Future Ready", desc: "Built to grow with your school and adapt to future learning needs." }
            ].map((feat, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(0.4 + idx * 0.1)}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,82,204,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ background: "#fff", borderRadius: 24, border: "1px solid #f1f5f9", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: 72, height: 72, borderRadius: 36, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}
                >
                  <feat.icon size={32} color="#0052cc" strokeWidth={1.5} />
                </motion.div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", marginBottom: 16 }}>{feat.title}</h3>
                <div style={{ width: 32, height: 2, background: "#0052cc", borderRadius: 2, marginBottom: 20 }} />
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner (Split) */}
          <motion.div
            {...fadeUp(0.9)}
            style={{ background: "#f8f9fc", borderRadius: 16, border: "1px solid #f1f5f9", padding: "24px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}
          >
            {/* Left Side */}
            <div style={{ display: "flex", alignItems: "center", gap: 20, flex: 1 }}>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{ width: 48, height: 48, borderRadius: 24, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
              >
                <BadgeCheck size={24} color="#0052cc" strokeWidth={1.5} />
              </motion.div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", margin: "0 0 4px 0" }}>Consistency builds confidence.</p>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#0052cc", margin: 0 }}>Confidence drives better learning outcomes.</p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 40, background: "#cbd5e1" }} />

            {/* Right Side */}
            <div style={{ display: "flex", alignItems: "center", gap: 20, flex: 1 }}>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{ width: 48, height: 48, borderRadius: 24, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
              >
                <GraduationCap size={24} color="#0052cc" strokeWidth={1.5} />
              </motion.div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#475569", margin: 0 }}>
                Same experience. Every student. Every session.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          EASY SETUP SECTION (8th)
      ══════════════════════════════════════ */}
      <section style={{ padding: "40px 0 40px", background: "#f8f9fc", position: "relative", zIndex: 1, overflow: "hidden" }}>

        {/* Full-bleed background image for the top half */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE }}
          style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "500px", zIndex: 0 }}
        >
          <img loading="lazy" decoding="async" src="/teacher_tablet.webp" alt="Setup Classroom" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left" }} />
          {/* Gradients to fade it seamlessly into the page background */}
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "40%", background: "linear-gradient(to right, #f8f9fc 0%, transparent 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, #f8f9fc 0%, transparent 100%)" }} />
        </motion.div>

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 2 }}>

          {/* Header Layout */}
          <div style={{ marginBottom: 120, paddingTop: 40 }}>
            {/* Header Content */}
            <div style={{ maxWidth: 600 }}>
              <motion.div {...fadeLeft(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#0052cc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  SIMPLE TO GET STARTED
                </span>
              </motion.div>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Easy setup.<br />
                <span style={{ color: "#0052cc" }}>We handle the rest.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 20, color: "#475569", lineHeight: 1.6, fontWeight: 500, maxWidth: 500 }}>
                From planning to launch and beyond,<br /> SparkVR makes it effortless for your school.
              </motion.p>
            </div>
          </div>

          {/* Steps Timeline Container (Below the Image) */}
          <div style={{ position: "relative", marginBottom: 60 }}>
            {/* Connecting Dotted Line */}
            <div style={{ position: "absolute", top: 80, left: 100, right: 100, height: 2, borderTop: "2px dashed #cbd5e1", zIndex: 0 }} />

            {/* 5 Process Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, position: "relative", zIndex: 1 }}>

              {[
                { num: "1", icon: MessageSquare, title: "Consult", desc: "We understand your goals and recommend the right solution." },
                { num: "2", icon: ClipboardList, title: "Plan", desc: "We plan the setup, content, and schedule as per your needs." },
                { num: "3", icon: Truck, title: "Deliver & Setup", desc: "We deliver, install, and set up everything at your school." },
                { num: "4", icon: Presentation, title: "Train & Launch", desc: "We train your team and help you launch with confidence." },
                { num: "5", icon: Headset, title: "Support & Grow", desc: "We're with you always, supporting and helping you grow." }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  {...fadeUp(0.2 + idx * 0.1)}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,82,204,0.08)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ background: "#fff", borderRadius: 24, padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", position: "relative" }}
                >
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 + idx * 0.1 }}
                    style={{ position: "absolute", top: 24, left: 24, width: 28, height: 28, borderRadius: 14, background: "#0052cc", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, zIndex: 2 }}
                  >
                    {step.num}
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ width: 80, height: 80, borderRadius: 40, background: "#fff", border: "2px solid #eff6ff", boxShadow: "0 10px 20px rgba(0,82,204,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32, marginTop: 10, position: "relative", zIndex: 2 }}
                  >
                    <step.icon size={36} color="#0052cc" strokeWidth={1.5} />
                  </motion.div>

                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 16 }}>{step.title}</h3>
                  <div style={{ width: 32, height: 2, background: "#0052cc", borderRadius: 2, marginBottom: 20 }} />
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <motion.div
            {...fadeUp(0.8)}
            style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #f1f5f9", padding: "24px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}
          >
            {/* Left Side: Rocket & Main Text */}
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <motion.div
                whileHover={{ y: -10, scale: 1.1, rotate: 15 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ width: 64, height: 64, borderRadius: 32, background: "#0052cc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,82,204,0.2)" }}
              >
                <Rocket size={32} color="#ffffff" strokeWidth={1.5} />
              </motion.div>
              <div>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#001a4d", margin: "0 0 4px 0" }}>
                  From day one to every day after — we've got you.
                </p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#0052cc", margin: 0 }}>
                  You focus on teaching. We take care of everything else.
                </p>
              </div>
            </div>

            {/* Right Side: Features */}
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <motion.div whileHover={{ scale: 1.05 }} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <ShieldCheck size={28} color="#0052cc" strokeWidth={1.5} />
                <p style={{ fontSize: 14, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.2 }}>Hassle-free<br />experience</p>
              </motion.div>
              <div style={{ width: 1, height: 32, background: "#cbd5e1" }} />
              <motion.div whileHover={{ scale: 1.05 }} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Users size={28} color="#0052cc" strokeWidth={1.5} />
                <p style={{ fontSize: 14, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.2 }}>Dedicated<br />support</p>
              </motion.div>
              <div style={{ width: 1, height: 32, background: "#cbd5e1" }} />
              <motion.div whileHover={{ scale: 1.05 }} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <TrendingUp size={28} color="#0052cc" strokeWidth={1.5} />
                <p style={{ fontSize: 14, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.2 }}>Long-term<br />partnership</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          BUILT FOR SCHOOLS SECTION (9th)
      ══════════════════════════════════════ */}
      <section style={{ padding: "40px 0 40px", background: "#f8f9fc", position: "relative", zIndex: 1, overflow: "hidden" }}>

        {/* Full-bleed background image for the top half */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE }}
          style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "500px", zIndex: 0 }}
        >
          <img loading="lazy" decoding="async" src="/section7.webp" alt="Students in VR" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          {/* Gradients to fade it seamlessly into the page background */}
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "40%", background: "linear-gradient(to right, #f8f9fc 0%, transparent 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, #f8f9fc 0%, transparent 100%)" }} />
        </motion.div>

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 2 }}>

          {/* Header Layout */}
          <div style={{ marginBottom: 120, paddingTop: 40 }}>
            {/* Header Content */}
            <div style={{ maxWidth: 600 }}>
              <motion.div {...fadeLeft(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#0052cc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  BUILT FOR SCHOOLS
                </span>
                <div style={{ width: 40, height: 2, background: "#0052cc", marginTop: 8 }} />
              </motion.div>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Designed for today.<br />
                Ready for <span style={{ color: "#0052cc" }}>tomorrow.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 20, color: "#475569", lineHeight: 1.6, fontWeight: 500, maxWidth: 500 }}>
                SparkVR Labs fit seamlessly into your school<br />and grow with your needs.
              </motion.p>
            </div>
          </div>

          {/* 5 Process Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, position: "relative", zIndex: 1, marginBottom: 60 }}>

            {[
              { icon: ShieldCheck, title: "Safe & Secure", desc: "Student safety and data privacy are always our priority." },
              { icon: Puzzle, title: "Curriculum Aligned", desc: "Content designed to support learning goals across subjects." },
              { icon: BarChart, title: "Measurable Impact", desc: "Track engagement and progress with simple, easy reports." },
              { icon: TabletSmartphone, title: "Easy to Use", desc: "Intuitive for teachers. Engaging for students." },
              { icon: TrendingUp, title: "Future Ready", desc: "Scalable solutions that evolve with technology and your school." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(0.2 + idx * 0.1)}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,82,204,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ background: "#fff", borderRadius: 24, padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: 80, height: 80, borderRadius: 40, background: "#fff", border: "2px solid #eff6ff", boxShadow: "0 10px 20px rgba(0,82,204,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}
                >
                  <step.icon size={36} color="#0052cc" strokeWidth={1.5} />
                </motion.div>

                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 16 }}>{step.title}</h3>
                <div style={{ width: 32, height: 2, background: "#0052cc", borderRadius: 2, marginBottom: 20 }} />
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div
            {...fadeUp(0.8)}
            style={{ background: "#eff6ff", borderRadius: 16, border: "1px solid #e0e7ff", padding: "24px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}
          >
            {/* Left Side: Cap & Main Text */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, flex: 1 }}>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring" }}
                style={{ width: 64, height: 64, borderRadius: 32, background: "#0052cc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,82,204,0.2)" }}
              >
                <GraduationCap size={32} color="#ffffff" strokeWidth={1.5} />
              </motion.div>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#001a4d", margin: 0, lineHeight: 1.4 }}>
                Empowering schools to deliver unforgettable learning experiences<br />
                that <span style={{ color: "#0052cc" }}>prepare students for the future.</span>
              </p>
            </div>

            {/* Right Side: Features */}
            <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
              <motion.div whileHover={{ y: -5, scale: 1.1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <Lightbulb size={28} color="#0052cc" strokeWidth={1.5} />
                <p style={{ fontSize: 14, fontWeight: 700, color: "#475569", margin: 0 }}>Engage</p>
              </motion.div>
              <div style={{ width: 1, height: 48, background: "#cbd5e1" }} />
              <motion.div whileHover={{ y: -5, scale: 1.1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <Heart size={28} color="#0052cc" strokeWidth={1.5} />
                <p style={{ fontSize: 14, fontWeight: 700, color: "#475569", margin: 0 }}>Inspire</p>
              </motion.div>
              <div style={{ width: 1, height: 48, background: "#cbd5e1" }} />
              <motion.div whileHover={{ y: -5, scale: 1.1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <Rocket size={28} color="#0052cc" strokeWidth={1.5} />
                <p style={{ fontSize: 14, fontWeight: 700, color: "#475569", margin: 0 }}>Empower</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          READY TO GET STARTED SECTION (10th)
      ══════════════════════════════════════ */}
      <section style={{ padding: "40px 0 120px", background: "#ffffff", position: "relative", zIndex: 1, overflow: "hidden" }}>

        {/* Right Side Large Arc/Circle Image */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0, x: 100 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{ position: "absolute", top: 0, right: 0, width: "65%", height: "100%", zIndex: 0 }}
        >
          {/* Big curved shape for the image */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", overflow: "hidden", borderTopLeftRadius: "40% 100%" }}>
            <img loading="lazy" decoding="async" src="/vr_girl_pointing.webp" alt="VR Learning" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>
          {/* Faint overlay to ensure text/bubbles pop if overlapping */}
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "40%", background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.8) 40%, transparent 100%)" }} />
        </motion.div>

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 2 }}>

          <div style={{ display: "flex", alignItems: "center", minHeight: 600 }}>
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: 500 }}>
              {/* READY TO GET STARTED */}
              <motion.div {...fadeLeft(0.1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#0052cc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  READY TO GET STARTED?
                </span>
                <div style={{ width: 40, height: 2, background: "#0052cc", marginTop: 8 }} />
              </motion.div>

              {/* Heading */}
              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(48px, 5vw, 64px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Let's bring<br />
                VR learning to<br />
                <span style={{ color: "#0052cc" }}>your school.</span>
              </motion.h2>

              {/* Subheading */}
              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 20, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 40 }}>
                Join schools embracing immersive learning and see the difference it makes.
              </motion.p>

              {/* Button */}
              <motion.div {...fadeLeft(0.4)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block", marginBottom: 24 }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#0052cc", color: "#fff", padding: "18px 40px", borderRadius: 12, fontSize: 18, fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 25px rgba(0,82,204,0.3)" }}>
                  <Calendar size={24} />
                  Book a Free Demo
                </Link>
              </motion.div>

              {/* Badges/Text below button */}
              <motion.div {...fadeLeft(0.5)} style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 14, fontWeight: 600 }}>
                <ShieldCheck size={20} color="#0052cc" />
                <span>No commitment &nbsp;&bull;&nbsp; Quick setup &nbsp;&bull;&nbsp; Expert support</span>
              </motion.div>
            </div>

            {/* Spacer for Right side */}
            <div style={{ flex: 1.2, position: "relative" }}>
                {/* Floating Bubbles on the right image */}
              <div style={{ position: "absolute", top: -200, left: -50, width: "110%", height: 500, zIndex: 2, pointerEvents: "none" }}>
                {/* SVG Dotted Arc connecting the bubbles */}
                <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }} viewBox="0 0 600 500">
                  <path d="M 100 200 Q 300 -50 550 120" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
                </svg>

                {/* Bubble 1: Engaged Students */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} style={{ position: "absolute", top: 160, left: "12%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, pointerEvents: "auto" }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: 15 }} style={{ width: 64, height: 64, borderRadius: 32, background: "#fff", border: "1px solid #eff6ff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.06)" }}>
                    <Rocket size={28} color="#0052cc" />
                  </motion.div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#001a4d", textAlign: "center", background: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>Engaged<br />Students</span>
                </motion.div>

                {/* Bubble 2: Better Results */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} style={{ position: "absolute", top: 10, left: "38%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, pointerEvents: "auto" }}>
                  <motion.div whileHover={{ scale: 1.2, y: -10 }} style={{ width: 64, height: 64, borderRadius: 32, background: "#fff", border: "1px solid #eff6ff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.06)" }}>
                    <TrendingUp size={28} color="#0052cc" />
                  </motion.div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#001a4d", textAlign: "center", background: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>Better<br />Results</span>
                </motion.div>

                {/* Bubble 3: Future Ready */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }} style={{ position: "absolute", top: 0, left: "64%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, pointerEvents: "auto" }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: -15 }} style={{ width: 64, height: 64, borderRadius: 32, background: "#fff", border: "1px solid #eff6ff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.06)" }}>
                    <GraduationCap size={28} color="#0052cc" />
                  </motion.div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#001a4d", textAlign: "center", background: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>Future<br />Ready</span>
                </motion.div>

                {/* Bubble 4: Limitless Possibilities */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 1.1 }} style={{ position: "absolute", top: 80, left: "88%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, pointerEvents: "auto" }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: 180 }} transition={{ duration: 0.6 }} style={{ width: 64, height: 64, borderRadius: 32, background: "#fff", border: "1px solid #eff6ff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.06)" }}>
                    <Globe size={28} color="#0052cc" />
                  </motion.div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#001a4d", textAlign: "center", background: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>Limitless<br />Possibilities</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <motion.div
            {...fadeUp(0.6)}
            style={{ background: "#f8f9fc", borderRadius: 12, padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 100, position: "relative", zIndex: 10 }}
          >
            {/* 4 Items */}
            {[
              { icon: MessageSquare, title: "Talk to an Expert", desc: "Get answers to your\nquestions." },
              { icon: School, title: "See It in Action", desc: "Experience VR learning\nfirsthand." },
              { icon: ClipboardList, title: "Customized for You", desc: "Solutions tailored to\nyour school's needs." },
              { icon: Handshake, title: "Partner for Success", desc: "We're with you every\nstep of the way." }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5, scale: 1.02 }} style={{ display: "flex", gap: 16, alignItems: "flex-start", position: "relative" }}>
                <motion.div whileHover={{ rotate: 15 }} style={{ width: 40, height: 40, borderRadius: 20, background: "#fff", border: "2px solid #eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 10px rgba(0,82,204,0.05)" }}>
                  <item.icon size={20} color="#0052cc" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", margin: "0 0 4px 0" }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0, whiteSpace: "pre-line", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
                {/* Divider for first 3 */}
                {idx < 3 && <div style={{ position: "absolute", right: -8, top: "10%", bottom: "10%", width: 1, background: "#cbd5e1" }} />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
