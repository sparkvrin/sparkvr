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
import "./schools.css";

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

export default function SchoolHubPage() {
  return (
    <main className="schools-main">

      {/* ══════════════════════════════════════
          HERO SECTION  —  32% text | 68% image
      ══════════════════════════════════════ */}
      <section className="schools-hero">
        {/* ── LEFT PANEL (32%) ── */}
        <div className="schools-hero-left">

          <div style={{ position: "relative" }}>

            <motion.h1 {...fadeLeft(0.1)} style={{ fontSize: "clamp(32px, 3vw, 52px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20, margin: "0 0 20px 0" }}>
              A VR Lab designed <br />
              for real schools<br />
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
              <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(29,78,216,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", borderRadius: 40, background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)", color: "#ffffff", cursor: "pointer", fontWeight: 700, letterSpacing: "0.14em", boxShadow: "0 10px 28px rgba(29,78,216,0.3)", textDecoration: "none" }}
                >
                  <Calendar size={18} />
                  SCHEDULE A GUIDED DEMONSTRATION
                  <ChevronRight size={18} strokeWidth={3} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT PANEL (68%) ── */}
        <div className="schools-hero-right">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            style={{ position: "absolute", inset: 0, backgroundImage: "url('/backgroundimageschoolhub.webp')", backgroundSize: "cover", backgroundPosition: "center center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #f0f5ff 0%, rgba(240,245,255,0.4) 10%, transparent 25%)" }} />
        </div>

        {/* ── BOTTOM STATS BAR ── */}
        <div className="schools-hero-stats-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}
            className="schools-hero-stats-bar"
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
      <section className="schools-section">
        <div className="schools-container">

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
          <div className="schools-realities-comparison">

            {/* Left Column: Worry (Red Theme) */}
            <motion.div {...scaleUp(0.4)} className="schools-realities-column schools-realities-column-worry">
              <div style={{ background: "#fef2f2", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, borderBottom: "1px solid #fee2e2" }}>
                <AlertCircle size={28} color="#dc2626" />
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#b91c1c" }}>What schools worry about</h3>
              </div>

              <div className="schools-realities-list">
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
                  <motion.div key={idx} whileHover={{ scale: 1.02, y: -4, boxShadow: "0 15px 30px rgba(220,38,38,0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="schools-realities-item">
                    {/* Image */}
                    <div className="schools-realities-item-img">
                      <img loading="lazy" decoding="async" src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    {/* Icon + Text */}
                    <div className="schools-realities-item-body">
                      <div className="schools-realities-item-icon">
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", lineHeight: 1.35, marginBottom: 6, whiteSpace: "pre-line" }}>{item.title}</h4>
                        <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55, whiteSpace: "pre-line", margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Center Arrows */}
            <div className="schools-realities-arrows">
              {[1, 2, 3, 4].map((i) => (
                <motion.div key={i} animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }} className="schools-realities-arrows-item">
                  <ArrowRight size={20} />
                </motion.div>
              ))}
            </div>

            {/* Right Column: Solution (Green Theme) */}
            <motion.div {...scaleUp(0.6)} className="schools-realities-column schools-realities-column-solve">
              <div style={{ background: "#f0fdf4", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, borderBottom: "1px solid #dcfce7" }}>
                <CheckCircle2 size={28} color="#16a34a" />
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#15803d" }}>How SparkVR solves it</h3>
              </div>

              <div className="schools-realities-list">
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
                  <motion.div key={idx} whileHover={{ scale: 1.02, y: -4, boxShadow: "0 15px 30px rgba(34,197,94,0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="schools-realities-item schools-realities-item-solve">
                    {/* Image */}
                    <div className="schools-realities-item-img">
                      <img loading="lazy" decoding="async" src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    {/* Icon + Text */}
                    <div className="schools-realities-item-body">
                      <div className="schools-realities-item-icon">
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", lineHeight: 1.35, marginBottom: 6, whiteSpace: "pre-line" }}>{item.title}</h4>
                        <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55, whiteSpace: "pre-line", margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Bottom Summary Banner */}
          <motion.div {...fadeUp(0.8)} className="schools-realities-banner">
            <ShieldCheck size={28} color="#0052cc" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: 18, fontWeight: 600, color: "#001a4d", margin: 0, lineHeight: 1.5 }}>
              SparkVR is designed around what schools truly need — <span style={{ color: "#0052cc" }}>practical, reliable and easy to implement.</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          IMPLEMENTATION FLOW SECTION (How it works inside your school)
      ══════════════════════════════════════ */}
      <section className="schools-section" style={{ background: "#ffffff" }}>
        <div className="schools-container">

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 20 }}>
              How it works <span style={{ color: "#0052cc" }}>inside your school</span>
            </motion.h2>
            <motion.p {...fadeUp(0.3)} style={{ fontSize: 18, color: "#64748b", lineHeight: 1.6, fontWeight: 500, maxWidth: 600, margin: "0 auto" }}>
              A simple, structured process that makes VR learning easy to run and sustainable every single day.
            </motion.p>
          </div>

          {/* 4 Steps Flow */}
          <div className="schools-flow-grid">

            {/* Connecting Dotted Line (Background) */}
            <div className="schools-flow-line" />

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
                className="schools-flow-step"
              >

                {/* Top Icon Circle */}
                <div className="schools-flow-icon-circle">
                  {step.topIcon}
                </div>

                {/* Number Badge */}
                <div className="schools-flow-badge-container">
                  <div className="schools-flow-badge">
                    {step.num}
                  </div>
                </div>

                {/* Card */}
                <div className="schools-flow-card">

                  <div className="schools-flow-card-body">
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 16 }}>{step.title}</h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, whiteSpace: "pre-line", marginBottom: 24 }}>{step.desc}</p>
                  </div>

                  {/* Image */}
                  <div className="schools-flow-card-img">
                    <img loading="lazy" decoding="async" src={step.image} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>

                  {/* Bottom Text Block */}
                  <div className="schools-flow-card-footer">
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
          <motion.div {...fadeUp(0.6)} className="schools-flow-banner">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <BadgeCheck size={32} color="#0052cc" />
              <span style={{ fontSize: 18, fontWeight: 800, color: "#0052cc" }}>Clarity removes hesitation.</span>
            </div>
            <div className="schools-flow-banner-divider" />
            <span style={{ fontSize: 18, fontWeight: 600, color: "#001a4d" }}>A proven process that fits perfectly into your school.</span>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          INFRASTRUCTURE SIMPLICITY SECTION
      ══════════════════════════════════════ */}
      <section className="schools-section" style={{ overflow: "hidden", background: "#f8f9fc" }}>

        {/* Background Gradient/Image for Top Half */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "60vh", backgroundImage: "url('/backgroundimageschoolhub.webp')", backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.1, zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "60vh", background: "linear-gradient(to right, #f8f9fc 30%, rgba(248,249,252,0.6) 60%, transparent)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "60vh", background: "linear-gradient(to bottom, transparent 60%, #f8f9fc)", zIndex: 0 }} />

        <div className="schools-container" style={{ position: "relative", zIndex: 2 }}>

          {/* Top Hero-ish Area */}
          <div className="schools-infra-hero">
            {/* Left Content */}
            <div className="schools-infra-content">

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Simple infrastructure.<br />
                <span style={{ color: "#0052cc" }}>Maximum impact.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 18, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 32 }}>
                SparkVR Labs are designed to work in real school<br />
                environments with minimal space, power and setup<br />
                requirements.
              </motion.p>

              <motion.div {...fadeLeft(0.4)} className="schools-infra-banner">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc" }}>
                  <Plug size={32} />
                </div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#001a4d", margin: 0, lineHeight: 1.5 }}>
                  Plug-and-play installation means your lab<br />
                  is ready to inspire from <span style={{ color: "#0052cc" }}>day one.</span>
                </p>
              </motion.div>
            </div>

            {/* Right Large Image */}
            <motion.div {...scaleUp(0.5)} className="schools-infra-image">
              <img loading="lazy" decoding="async" src="/backgroundimageschoolhub.webp" alt="SparkVR Cart" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center" }} />
            </motion.div>
          </div>

          {/* 4 Cards Row */}
          <div className="schools-infra-grid">
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
                className="schools-infra-card"
              >
                <div className="schools-infra-card-body">

                  {/* Icon Square/Circle */}
                  <div className="schools-infra-card-icon">
                    {card.icon}
                  </div>

                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, whiteSpace: "pre-line", margin: 0 }}>{card.desc}</p>
                </div>

                <div className="schools-infra-card-img">
                  <img loading="lazy" decoding="async" src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: idx === 0 ? "right center" : "center" }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.6)} className="schools-infra-bottom-banner">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,82,204,0.1)" }}>
                <ShieldCheck size={24} color="#0052cc" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#001a4d" }}>Built to fit your school. Designed to last.</span>
            </div>

            <div className="schools-infra-bottom-banner-divider" />

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
      <section className="schools-section" style={{ background: "#ffffff" }}>
        <div className="schools-container">

          <div className="schools-teacher-hero">

            {/* Left Content */}
            <div className="schools-teacher-content">
              <motion.div {...fadeLeft(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "8px 16px", background: "#eff6ff", borderRadius: 8 }}>
                <User size={18} color="#0052cc" />
                <span style={{ fontSize: 13, fontWeight: 800, color: "#0052cc", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  TEACHER EXPERIENCE
                </span>
              </motion.div>

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                <br />
                <span style={{ color: "#0052cc" }}>not technicians.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 18, color: "#475569", lineHeight: 1.6, fontWeight: 500, marginBottom: 40 }}>
                SparkVR puts teachers in control with simple tools,<br />
                guided workflows, and complete academic alignment.
              </motion.p>

              <div className="schools-teacher-features">
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
                  <motion.div key={idx} {...fadeLeft(0.4 + idx * 0.1)} className="schools-teacher-feature-item">
                    <div className="schools-teacher-feature-icon">
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
              className="schools-teacher-image-container"
            >
              <div className="schools-teacher-image">
                <img loading="lazy" decoding="async" src="/teacher_tablet.webp" alt="Teacher Dashboard" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* Floating Quote */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="schools-teacher-quote"
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
          <motion.div {...fadeUp(0.6)} className="schools-teacher-grid">
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
                className="schools-teacher-grid-item"
                style={{ perspective: 1000 }}
              >
                <div className="schools-teacher-grid-icon">
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
          <motion.div {...fadeUp(0.7)} className="schools-teacher-bottom-banner">
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
          GUIDED CLASSROOM FLOW SECTION
      ══════════════════════════════════════ */}
      <section className="schools-section" style={{ background: "#f8f9fc", paddingBottom: 0 }}>
        <div className="schools-container">

          {/* ── Two-column hero row ── */}
          <div className="schools-flow-hero">

            {/* Left: Text + Feature Cards */}
            <div className="schools-flow-left">

              {/* Badge */}
              <motion.div {...fadeLeft(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24, padding: "8px 16px", background: "#eff6ff", borderRadius: 8 }}>
                <LayoutTemplate size={16} color="#0052cc" />
                <span style={{ fontSize: 12, fontWeight: 800, color: "#0052cc", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  GUIDED CLASSROOM FLOW
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                A structured flow.<br />
                <span style={{ color: "#0052cc" }}>Meaningful learning.</span>
              </motion.h2>

              {/* Description */}
              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 17, color: "#475569", lineHeight: 1.65, fontWeight: 500, marginBottom: 32 }}>
                SparkVR provides a simple, guided flow that helps you deliver engaging VR lessons with confidence and clarity.
              </motion.p>

              {/* 4 Feature Cards */}
              <div className="schools-flow-features">
                {[
                  { icon: <Calendar size={20} />, color: "#7c3aed", bg: "#f3eeff", title: "Plan with purpose", desc: "Preview lessons, objectives, and key outcomes before class." },
                  { icon: <Users size={20} />, color: "#059669", bg: "#ecfdf5", title: "Teach with confidence", desc: "Facilitate immersive experiences while staying in control." },
                  { icon: <MessageSquare size={20} />, color: "#d97706", bg: "#fffbeb", title: "Discuss and connect", desc: "Guide reflection and discussion to connect VR experiences to real-world concepts." },
                  { icon: <ClipboardList size={20} />, color: "#0052cc", bg: "#eff6ff", title: "Assess and reinforce", desc: "Check understanding and reinforce learning with built-in assessments and activities." }
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeLeft(0.4 + idx * 0.08)} className="schools-flow-feature-card">
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 800, color: item.color, margin: "0 0 4px 0" }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Full image (not cut, centered) + floating quote */}
            <motion.div {...scaleUp(0.4)} className="schools-flow-right">
              <img
                loading="lazy"
                decoding="async"
                src="/sparkvr_classroom.webp"
                alt="Guided Classroom Flow"
                className="schools-flow-image"
              />
              {/* Floating quote card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="schools-flow-floating"
              >
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck size={20} color="#0052cc" />
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", margin: "0 0 6px 0", lineHeight: 1.4 }}>
                    You guide.<br />They explore.<br />
                    <span style={{ color: "#0052cc" }}>Real learning happens together.</span>
                  </p>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    SparkVR supports your teaching from start to finish.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Your Guided Classroom Flow – 5 Steps ── */}
          <motion.div {...fadeUp(0.5)} className="schools-flow-steps-section">
            <p className="schools-flow-steps-label">Your guided classroom flow</p>

            <div className="schools-flow-steps">
              {[
                { num: "1", color: "#7c3aed", bg: "#f3eeff", icon: <Calendar size={26} color="#7c3aed" />, step: "Before Class", desc: "Preview lesson and\nset learning objectives." },
                { num: "2", color: "#059669", bg: "#ecfdf5", icon: <Headset size={26} color="#059669" />, step: "During Class – Explore", desc: "Students engage in immersive\nVR experiences." },
                { num: "3", color: "#d97706", bg: "#fffbeb", icon: <Users size={26} color="#d97706" />, step: "During Class – Discuss", desc: "Facilitate discussion and\nconnect to key concepts." },
                { num: "4", color: "#0052cc", bg: "#eff6ff", icon: <ClipboardList size={26} color="#0052cc" />, step: "After Class – Assess", desc: "Assess understanding with\nquizzes and activities." },
                { num: "5", color: "#7c3aed", bg: "#f3eeff", icon: <TrendingUp size={26} color="#7c3aed" />, step: "After Class – Reinforce", desc: "Reinforce learning with\nresources and next steps." }
              ].map((s, idx) => (
                <React.Fragment key={idx}>
                  <motion.div {...fadeUp(0.55 + idx * 0.08)} className="schools-flow-step">
                    <div style={{ width: 34, height: 34, borderRadius: 17, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, boxShadow: `0 4px 12px ${s.color}50`, position: "relative", zIndex: 1 }}>
                      <span style={{ fontSize: 15, fontWeight: 900, color: "#fff" }}>{s.num}</span>
                    </div>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                      {s.icon}
                    </div>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: "#001a4d", margin: "0 0 6px 0", textAlign: "center" }}>{s.step}</h4>
                    <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5, margin: 0, textAlign: "center", whiteSpace: "pre-line" }}>{s.desc}</p>
                  </motion.div>
                  {idx < 4 && (
                    <div className="schools-flow-step-arrow">
                      <ChevronRight size={20} color="#cbd5e1" strokeWidth={2.5} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* ── Bottom Banner ── */}
          <motion.div {...fadeUp(0.9)} className="schools-flow-banner">
            <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: "#0052cc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Lightbulb size={20} color="#fff" />
              </div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#001a4d", margin: 0 }}>
                A clear flow for every lesson. Better engagement. <span style={{ color: "#0052cc" }}>Stronger outcomes.</span>
              </p>
            </div>
            <div className="schools-flow-banner-divider" />
            <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Users size={20} color="#0052cc" />
              </div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#001a4d", margin: 0 }}>
                You lead. SparkVR supports. <span style={{ color: "#0052cc" }}>Students succeed.</span>
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          OPERATIONAL CLARITY SECTION
      ══════════════════════════════════════ */}
      <section className="schools-section" style={{ background: "#fdfdff" }}>
        <div className="schools-container">

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
          <div className="schools-ops-grid">

            {/* Card 1: Fixed Session Duration */}
            <motion.div
              {...fadeUp(0.4)}
              whileHover={{ y: -12, scale: 1.02, rotateX: 2, rotateY: 2, boxShadow: "0 25px 50px rgba(0,82,204,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="schools-ops-card"
              style={{ perspective: 1000 }}
            >
              <div className="schools-ops-card-body">
                <div style={{ width: 64, height: 64, borderRadius: 32, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Clock size={28} color="#0052cc" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>Fixed Session Duration</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Optimized time slots for<br />focused and effective learning.</p>
              </div>
              <div className="schools-ops-card-visual">
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
              className="schools-ops-card"
              style={{ perspective: 1000 }}
            >
              <div className="schools-ops-card-body">
                <div style={{ width: 64, height: 64, borderRadius: 32, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Users size={28} color="#0052cc" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>Planned Rotations</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Structured batches ensure every<br />student gets equal access.</p>
              </div>
              <div className="schools-ops-card-visual">
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
              className="schools-ops-card"
              style={{ perspective: 1000 }}
            >
              <div className="schools-ops-card-body">
                <div style={{ width: 64, height: 64, borderRadius: 32, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Calendar size={28} color="#0052cc" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>Clear Scheduling</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Easy-to-manage timetable that<br />fits your school day.</p>
              </div>
              <div className="schools-ops-card-visual">
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
              className="schools-ops-card"
              style={{ perspective: 1000 }}
            >
              <div className="schools-ops-card-body">
                <div style={{ width: 64, height: 64, borderRadius: 32, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <UserCheck size={28} color="#0052cc" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a4d", marginBottom: 12 }}>Defined Roles</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Clear responsibilities make<br />implementation simple.</p>
              </div>
              <div className="schools-ops-card-visual">
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
      <section className="schools-section" style={{ background: "#ffffff" }}>

        {/* Background Image with Fade */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE }}
          className="schools-excellence-bg-image"
        >
          <img loading="lazy" decoding="async" src="/section7.webp" alt="Consistent Experience" />
          <div className="schools-excellence-bg-image-fade-left" />
          <div className="schools-excellence-bg-image-fade-bottom" />
        </motion.div>

        <div className="schools-container" style={{ position: "relative", zIndex: 2 }}>

          {/* Header */}
          <div className="schools-excellence-header">
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
          <div className="schools-excellence-grid">

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
                className="schools-excellence-card"
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
          <motion.div {...fadeUp(0.9)} className="schools-excellence-banner">
            <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6, type: "spring" }}
                style={{ width: 48, height: 48, borderRadius: 24, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <BadgeCheck size={24} color="#0052cc" strokeWidth={1.5} />
              </motion.div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#001a4d", margin: "0 0 4px 0" }}>Consistency builds confidence.</p>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#0052cc", margin: 0 }}>Confidence drives better learning outcomes.</p>
              </div>
            </div>
            <div className="schools-excellence-banner-divider" />
            <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6, type: "spring" }}
                style={{ width: 48, height: 48, borderRadius: 24, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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
      <section className="schools-section" style={{ background: "#f8f9fc" }}>

        {/* Full-bleed background image for the top half */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE }}
          className="schools-setup-bg-image"
        >
          <img loading="lazy" decoding="async" src="/teacher_tablet.webp" alt="Setup Classroom" />
          {/* Gradients to fade it seamlessly into the page background */}
          <div className="schools-setup-bg-image-fade-left" />
          <div className="schools-setup-bg-image-fade-bottom" />
        </motion.div>

        <div className="schools-container" style={{ position: "relative", zIndex: 2 }}>

          {/* Header Layout */}
          <div className="schools-setup-header">
            {/* Header Content */}
            <div style={{ maxWidth: 600 }}>

              <motion.p {...fadeLeft(0.3)} style={{ fontSize: 20, color: "#475569", lineHeight: 1.6, fontWeight: 500, maxWidth: 500 }}>
                From planning to launch and beyond,<br /> SparkVR makes it effortless for your school.
              </motion.p>
            </div>
          </div>

          {/* Steps Timeline Container */}
          <div className="schools-setup-timeline">
            {/* Connecting Dotted Line */}
            <div className="schools-setup-timeline-line" />

            {/* 5 Process Cards */}
            <div className="schools-setup-grid">

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
                  className="schools-setup-card"
                >
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 + idx * 0.1 }}
                    className="schools-setup-badge"
                  >
                    {step.num}
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="schools-setup-icon-circle"
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
          <motion.div {...fadeUp(0.8)} className="schools-setup-bottom-banner">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <motion.div whileHover={{ y: -10, scale: 1.1, rotate: 15 }} transition={{ type: "spring", stiffness: 400 }}
                style={{ width: 56, height: 56, borderRadius: 28, background: "#0052cc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,82,204,0.2)" }}>
                <Rocket size={28} color="#ffffff" strokeWidth={1.5} />
              </motion.div>
              <div>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#001a4d", margin: "0 0 4px 0" }}>From day one to every day after — we've got you.</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#0052cc", margin: 0 }}>You focus on teaching. We take care of everything else.</p>
              </div>
            </div>
            <div className="schools-setup-banner-features">
              {[{ Icon: ShieldCheck, label: "Hassle-free\nexperience" }, { Icon: Users, label: "Dedicated\nsupport" }, { Icon: TrendingUp, label: "Long-term\npartnership" }].map(({ Icon, label }, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="schools-setup-banner-divider" />}
                  <motion.div whileHover={{ scale: 1.05 }} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Icon size={24} color="#0052cc" strokeWidth={1.5} />
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.2, whiteSpace: "pre-line" }}>{label}</p>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          BUILT FOR SCHOOLS SECTION (9th)
      ══════════════════════════════════════ */}
      <section className="schools-section" style={{ background: "#f8f9fc" }}>

        {/* Full-bleed background image for the top half */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE }}
          className="schools-built-bg-image"
        >
          <img loading="lazy" decoding="async" src="/section7.webp" alt="Students in VR" />
          {/* Gradients to fade it seamlessly into the page background */}
          <div className="schools-setup-bg-image-fade-left" />
          <div className="schools-setup-bg-image-fade-bottom" />
        </motion.div>

        <div className="schools-container" style={{ position: "relative", zIndex: 2 }}>

          {/* Header Layout */}
          <div className="schools-built-header">
            {/* Header Content */}
            <div style={{ maxWidth: 600 }}>
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
          <div className="schools-built-grid">

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
                className="schools-setup-card"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="schools-setup-icon-circle"
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
          <motion.div {...fadeUp(0.8)} className="schools-built-bottom-banner">
            <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
              <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring" }}
                style={{ width: 56, height: 56, borderRadius: 28, background: "#0052cc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,82,204,0.2)" }}>
                <GraduationCap size={28} color="#ffffff" strokeWidth={1.5} />
              </motion.div>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#001a4d", margin: 0, lineHeight: 1.4 }}>
                Empowering schools to deliver unforgettable learning experiences that <span style={{ color: "#0052cc" }}>prepare students for the future.</span>
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
              {[{ Icon: Lightbulb, label: "Engage" }, { Icon: Heart, label: "Inspire" }, { Icon: Rocket, label: "Empower" }].map(({ Icon, label }, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="schools-built-banner-divider" />}
                  <motion.div whileHover={{ y: -5, scale: 1.1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <Icon size={24} color="#0052cc" strokeWidth={1.5} />
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#475569", margin: 0 }}>{label}</p>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          READY TO GET STARTED SECTION (10th)
      ══════════════════════════════════════ */}
      <section className="schools-section" style={{ background: "#ffffff" }}>
        <div className="schools-container">

          <div className="schools-ready-hero">
            {/* Left Content */}
            <div className="schools-ready-content">
              {/* READY TO GET STARTED */}


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
              <motion.div {...fadeLeft(0.4)} style={{ display: "inline-block", marginBottom: 24 }}>
                <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(29,78,216,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", borderRadius: 40, background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)", color: "#ffffff", cursor: "pointer", fontWeight: 700, letterSpacing: "0.14em", boxShadow: "0 10px 28px rgba(29,78,216,0.3)", textDecoration: "none" }}
                  >
                    <Calendar size={20} />
                    Book a Free Demo
                  </motion.div>
                </Link>
              </motion.div>

              {/* Badges/Text below button */}
              <motion.div {...fadeLeft(0.5)} style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 14, fontWeight: 600 }}>
                <ShieldCheck size={20} color="#0052cc" />
                <span>No commitment &nbsp;&bull;&nbsp; Quick setup &nbsp;&bull;&nbsp; Expert support</span>
              </motion.div>
            </div>

            {/* Spacer for Right side */}
            <div className="schools-ready-image-container">
              <div className="schools-ready-image-arc">
                <img loading="lazy" decoding="async" src="/vr_girl_pointing.webp" alt="VR Learning" />
              </div>
              <div className="schools-ready-image-fade" />

              {/* Floating Bubbles */}
              <div className="schools-ready-bubbles">
                {/* SVG: dashed path + dot traveling through each bubble center */}
                <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }} viewBox="0 0 600 500">
                  <defs>
                    <filter id="dot-glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  {/* Dashed guide path through all 4 bubble centers */}
                  <path
                    id="bp"
                    d="M 104 252 C 170 200, 210 80, 260 112 C 310 148, 365 55, 416 92 C 460 125, 520 165, 560 192"
                    fill="none" stroke="#bfdbfe" strokeWidth="2.5" strokeDasharray="7 9" opacity="0.9"
                  />

                  {/* Glowing dot traveling from Bubble1 to Bubble4 */}
                  <circle r="7" fill="#0052cc" filter="url(#dot-glow)">
                    <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#bp" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;1;0" keyTimes="0;0.06;0.45;0.92;1" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="r" values="4;7;7;7;4" keyTimes="0;0.06;0.45;0.92;1" dur="3s" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* Bubble 1: Engaged Students */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="schools-ready-bubble-item" style={{ top: 220, left: "12%" }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: 15 }} className="schools-ready-bubble-icon">
                    <Rocket size={28} color="#0052cc" />
                  </motion.div>
                  <span className="schools-ready-bubble-text">Engaged<br />Students</span>
                </motion.div>

                {/* Bubble 2: Better Results */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="schools-ready-bubble-item" style={{ top: 80, left: "38%" }}>
                  <motion.div whileHover={{ scale: 1.2, y: -10 }} className="schools-ready-bubble-icon">
                    <TrendingUp size={28} color="#0052cc" />
                  </motion.div>
                  <span className="schools-ready-bubble-text">Better<br />Results</span>
                </motion.div>

                {/* Bubble 3: Future Ready */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }} className="schools-ready-bubble-item" style={{ top: 60, left: "64%" }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: -15 }} className="schools-ready-bubble-icon">
                    <GraduationCap size={28} color="#0052cc" />
                  </motion.div>
                  <span className="schools-ready-bubble-text">Future<br />Ready</span>
                </motion.div>

                {/* Bubble 4: Limitless Possibilities */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 1.1 }} className="schools-ready-bubble-item" style={{ top: 160, left: "84%" }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: 180 }} transition={{ duration: 0.6 }} className="schools-ready-bubble-icon">
                    <Globe size={28} color="#0052cc" />
                  </motion.div>
                  <span className="schools-ready-bubble-text">Limitless<br />Possibilities</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <motion.div {...fadeUp(0.6)} className="schools-ready-bottom-banner">
            {[
              { icon: MessageSquare, title: "Talk to an Expert", desc: "Get answers to your\nquestions." },
              { icon: School, title: "See It in Action", desc: "Experience VR learning\nfirsthand." },
              { icon: ClipboardList, title: "Customized for You", desc: "Solutions tailored to\nyour school's needs." },
              { icon: Handshake, title: "Partner for Success", desc: "We're with you every\nstep of the way." }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5, scale: 1.02 }} className="schools-ready-banner-item">
                <motion.div whileHover={{ rotate: 15 }} className="schools-ready-banner-icon">
                  <item.icon size={20} color="#0052cc" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: "#001a4d", margin: "0 0 4px 0" }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0, whiteSpace: "pre-line", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
                {/* Divider for first 3 */}
                {idx < 3 && <div className="schools-ready-banner-divider" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
