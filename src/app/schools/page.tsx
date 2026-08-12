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
  MessageSquare, Truck, Presentation, Rocket, TrendingUp, Puzzle, TabletSmartphone, Lightbulb, Handshake,
  Wifi, HelpCircle, ChevronDown, Layers
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/seo";
import "./schools.css";

/* ─── ANIMATION VARIANTS ─── */
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

const scaleUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true as const, margin: "-60px" },
  transition: { delay, duration: 0.5, ease: EASE },
});

export default function SchoolHubPage() {
  return (
    <main className="schools-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "For Schools", path: "/schools" }])) }}
      />

      {/* ══════════════════════════════════════
          HERO SECTION  —  32% text | 68% image
      ══════════════════════════════════════ */}
      <section className="schools-hero">
        {/* ── LEFT PANEL (32%) ── */}
        <div className="schools-hero-left">

          <div style={{ position: "relative" }}>

            <motion.h1 {...fadeLeft(0.1)} style={{ fontSize: "clamp(32px, 3vw, 52px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20, margin: "0 0 20px 0" }}>
              A Curriculum-Aligned <br />
              VR Lab for Schools<br />
              built for real classrooms.
            </motion.h1>

            <motion.p {...fadeUp(0.2)} style={{ fontSize: 16, color: "#475569", lineHeight: 1.65, marginBottom: 36, fontWeight: 500 }}>
              One of the growing number of VR labs in schools, built to fit within existing infrastructure,<br />schedules, and teaching systems. Discover how our <Link href="/curriculum" style={{ color: "#0052cc", fontWeight: 700, textDecoration: "underline" }}>structured VR curriculum</Link> enhances student <Link href="/learning-outcome" style={{ color: "#0052cc", fontWeight: 700, textDecoration: "underline" }}>learning outcomes</Link>, or <Link href="/contact" style={{ color: "#0052cc", fontWeight: 700, textDecoration: "underline" }}>contact our academic team</Link> directly to explore setup options.
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
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
            whileHover={{ y: -5, boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}
            className="schools-hero-stats-bar"
          >
            {[
              { icon: ShieldCheck, top: "Trusted by", bottom: "260+ Schools", accent: false },
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

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 800, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 20 }}>
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
                    <div className="schools-realities-item-img" style={{ position: "relative" }}>
                      <Image src={item.image} alt={item.title} fill loading="lazy" style={{ objectFit: "cover" }} />
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
                    <div className="schools-realities-item-img" style={{ position: "relative" }}>
                      <Image src={item.image} alt={item.title} fill loading="lazy" style={{ objectFit: "cover" }} />
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

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 800, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 20 }}>
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
                {...fadeUp(0.2 + idx * 0.08)}
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
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
                  <div className="schools-flow-card-img" style={{ position: "relative" }}>
                    <Image src={step.image} alt={step.title} fill loading="lazy" style={{ objectFit: "cover" }} />
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

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
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
            <motion.div {...scaleUp(0.5)} className="schools-infra-image" style={{ position: "relative" }}>
              <Image src="/backgroundimageschoolhub.webp" alt="SparkVR VR headset storage and charging cart for schools" fill loading="lazy" style={{ objectFit: "cover", objectPosition: "right center" }} />
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
                {...fadeUp(0.3 + idx * 0.08)}
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
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

                <div className="schools-infra-card-img" style={{ position: "relative" }}>
                  <Image src={card.image} alt={card.title} fill loading="lazy" style={{ objectFit: "cover", objectPosition: idx === 0 ? "right center" : "center" }} />
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

              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
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
                  <motion.div key={idx} {...fadeLeft(0.4 + idx * 0.08)} className="schools-teacher-feature-item">
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
              <div className="schools-teacher-image" style={{ position: "relative" }}>
                <Image src="/teacher_tablet.webp" alt="Teacher using the SparkVR classroom control dashboard on a tablet" fill loading="lazy" style={{ objectFit: "cover" }} />
              </div>

              {/* Floating Quote */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.8, duration: 0.5 }}
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
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
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
              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
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
              <Image
                loading="lazy"
                src="/sparkvr_classroom.webp"
                alt="Teacher guiding a VR lesson in a SparkVR-equipped classroom"
                className="schools-flow-image"
                width={1024}
                height={1024}
                style={{ width: "100%", height: "auto" }}
              />
              {/* Floating quote card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.8, duration: 0.5 }}
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

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
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
              whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
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
                  <Image src="/sparkvr_classroom.webp" alt="SparkVR classroom during a timed VR learning session" fill loading="lazy" style={{ objectFit: "cover", opacity: 0.6 }} />
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
              whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
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
              whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
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
              whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
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
          WHAT IS A VR LAB / SPACE / INTERNET / SAFETY / STORAGE
      ══════════════════════════════════════ */}
      <section className="schools-section" style={{ background: "#f8f9fc" }}>
        <div className="schools-container">

          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <motion.h2 {...fadeUp(0.1)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 800, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Everything schools ask <span style={{ color: "#0052cc" }}>before saying yes.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} style={{ fontSize: 18, color: "#64748b", lineHeight: 1.6, fontWeight: 500, maxWidth: 700, margin: "0 auto" }}>
              Clear answers on what a VR lab actually is, what it needs, and how it fits into daily school life.
            </motion.p>
          </div>

          <div className="schools-info-grid">

            <motion.div {...fadeUp(0.2)} className="schools-info-card">
              <div className="schools-info-card-icon"><HelpCircle size={26} color="#0052cc" /></div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#001a4d", marginBottom: 10 }}>What Is a VR Lab for Schools?</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                A VR lab for schools is a dedicated setup — headsets, a teacher dashboard and a storage cart — that lets students explore <Link href="/curriculum" style={{ color: "#0052cc", fontWeight: 700, textDecoration: "underline" }}>curriculum-aligned VR modules</Link> in 3D instead of only reading about them. Rather than replacing the classroom, it adds an immersive layer to lessons already on the timetable, with a teacher guiding every session from start to finish.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.28)} className="schools-info-card">
              <div className="schools-info-card-icon"><Maximize size={26} color="#0052cc" /></div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#001a4d", marginBottom: 10 }}>Space and Infrastructure Required</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                A SparkVR lab fits inside a standard classroom or resource room — no structural changes, extra flooring or dedicated hall required. A compact corner is enough for the storage cart, and students use headsets in small rotating batches rather than needing every desk equipped at once, which keeps the footprint minimal.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.36)} className="schools-info-card">
              <div className="schools-info-card-icon"><Wifi size={26} color="#0052cc" /></div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#001a4d", marginBottom: 10 }}>Does a VR Lab Require Internet?</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                No — SparkVR content runs fully offline once loaded, so an unreliable connection never interrupts a lesson. A network is only useful occasionally, for syncing content updates or usage reports, not for running day-to-day sessions. This is core to how <Link href="/timetable" style={{ color: "#0052cc", fontWeight: 700, textDecoration: "underline" }}>VR sessions in the school timetable</Link> stay predictable.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.44)} className="schools-info-card">
              <div className="schools-info-card-icon"><ShieldCheck size={26} color="#0052cc" /></div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#001a4d", marginBottom: 10 }}>Student Safety and Supervised Learning</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                Every session is short, time-boxed and led by a teacher who can see and manage every headset from a single dashboard. Content is age-appropriate and built specifically for classroom use, students stay seated or in a fixed position throughout, and <Link href="/teachers" style={{ color: "#0052cc", fontWeight: 700, textDecoration: "underline" }}>teacher-guided VR lessons</Link> mean no student ever uses a headset unsupervised.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.52)} className="schools-info-card">
              <div className="schools-info-card-icon"><BatteryCharging size={26} color="#0052cc" /></div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#001a4d", marginBottom: 10 }}>VR Headset Storage, Charging and Maintenance</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                Headsets live in a lockable storage-and-charging cart between sessions, so they're always cleaned, charged and ready for the next batch without teachers managing cables individually. Routine upkeep and any repairs are handled as part of ongoing support, keeping maintenance predictable rather than a hidden cost.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="schools-info-card">
              <div className="schools-info-card-icon"><Layers size={26} color="#0052cc" /></div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#001a4d", marginBottom: 10 }}>Built to Grow With Your School</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                As a school's needs grow, the lab grows with it — more headsets, more batches, and <Link href="/subject-expansion" style={{ color: "#0052cc", fontWeight: 700, textDecoration: "underline" }}>VR learning across subjects</Link> beyond the initial rollout. The same storage, scheduling and supervision model scales up without requiring a redesign of the space.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VR LAB VS SMART CLASSROOM COMPARISON
      ══════════════════════════════════════ */}
      <section className="schools-section" style={{ background: "#ffffff" }}>
        <div className="schools-container">

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <motion.h2 {...fadeUp(0.1)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 800, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 16 }}>
              VR Lab vs <span style={{ color: "#0052cc" }}>Smart Classroom.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} style={{ fontSize: 18, color: "#64748b", lineHeight: 1.6, fontWeight: 500, maxWidth: 700, margin: "0 auto" }}>
              Not a replacement for smart classrooms — a complementary layer for concepts that are hard to visualize on a shared screen.
            </motion.p>
          </div>

          <motion.div {...fadeUp(0.3)} className="schools-compare-wrap">
            <table className="schools-compare-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>VR Lab</th>
                  <th>Smart Classroom</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Core experience</td>
                  <td>Students explore concepts in immersive 3D, from inside the subject matter</td>
                  <td>Students view digital content on a shared screen</td>
                </tr>
                <tr>
                  <td>Interaction</td>
                  <td>Individual, hands-on exploration per student via headset</td>
                  <td>Whole-class viewing, typically teacher-led</td>
                </tr>
                <tr>
                  <td>Internet dependency</td>
                  <td>Runs offline once content is loaded</td>
                  <td>Often needs a stable connection for streaming content</td>
                </tr>
                <tr>
                  <td>Best suited for</td>
                  <td>Spatial, hard-to-visualize concepts like anatomy, geography or physics</td>
                  <td>General presentations, videos and shared reference material</td>
                </tr>
                <tr>
                  <td>Session format</td>
                  <td>Small batch rotation with a fixed duration</td>
                  <td>Whole class together for the full period</td>
                </tr>
                <tr>
                  <td>Supervision</td>
                  <td>Teacher guides and monitors each headset via a dashboard</td>
                  <td>Teacher controls a single shared display</td>
                </tr>
              </tbody>
            </table>
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
          <Image src="/section7.webp" alt="Students using SparkVR headsets in a consistent, standardized classroom setup" fill loading="lazy" style={{ objectFit: "cover", objectPosition: "top right" }} />
          <div className="schools-excellence-bg-image-fade-left" />
          <div className="schools-excellence-bg-image-fade-bottom" />
        </motion.div>

        <div className="schools-container" style={{ position: "relative", zIndex: 2 }}>

          {/* Header */}
          <div className="schools-excellence-header">
            <motion.div {...fadeUp(0.1)} style={{ display: "inline-flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              <div style={{ width: 40, height: 2, background: "#0052cc", borderRadius: 2 }} />
            </motion.div>

            <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
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
                {...fadeUp(0.4 + idx * 0.08)}
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
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
          <Image src="/teacher_tablet.webp" alt="Teacher setting up a SparkVR classroom session on a tablet" fill loading="lazy" style={{ objectFit: "cover", objectPosition: "left" }} />
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
                  {...fadeUp(0.2 + idx * 0.08)}
                  whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,26,77,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="schools-setup-card"
                >
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 + idx * 0.08 }}
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
          <Image src="/section7.webp" alt="Students engaged in a VR learning session with SparkVR headsets" fill loading="lazy" style={{ objectFit: "cover" }} />
          {/* Gradients to fade it seamlessly into the page background */}
          <div className="schools-setup-bg-image-fade-left" />
          <div className="schools-setup-bg-image-fade-bottom" />
        </motion.div>

        <div className="schools-container" style={{ position: "relative", zIndex: 2 }}>

          {/* Header Layout */}
          <div className="schools-built-header">
            {/* Header Content */}
            <div style={{ maxWidth: 600 }}>
              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
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
                {...fadeUp(0.2 + idx * 0.08)}
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
          FAQ SECTION
      ══════════════════════════════════════ */}
      <SchoolsFAQSection />

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
              <motion.h2 {...fadeLeft(0.2)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 900, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
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
                <Image src="/vr_girl_pointing.webp" alt="Student pointing during an immersive VR lesson with SparkVR" fill loading="lazy" style={{ objectFit: "cover" }} />
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
                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.5, duration: 0.5, ease: EASE }} className="schools-ready-bubble-item" style={{ top: 220, left: "12%" }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: 15 }} className="schools-ready-bubble-icon">
                    <Rocket size={28} color="#0052cc" />
                  </motion.div>
                  <span className="schools-ready-bubble-text">Engaged<br />Students</span>
                </motion.div>

                {/* Bubble 2: Better Results */}
                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.7, duration: 0.5, ease: EASE }} className="schools-ready-bubble-item" style={{ top: 80, left: "38%" }}>
                  <motion.div whileHover={{ scale: 1.2, y: -10 }} className="schools-ready-bubble-icon">
                    <TrendingUp size={28} color="#0052cc" />
                  </motion.div>
                  <span className="schools-ready-bubble-text">Better<br />Results</span>
                </motion.div>

                {/* Bubble 3: Future Ready */}
                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.9, duration: 0.5, ease: EASE }} className="schools-ready-bubble-item" style={{ top: 60, left: "64%" }}>
                  <motion.div whileHover={{ scale: 1.2, rotate: -15 }} className="schools-ready-bubble-icon">
                    <GraduationCap size={28} color="#0052cc" />
                  </motion.div>
                  <span className="schools-ready-bubble-text">Future<br />Ready</span>
                </motion.div>

                {/* Bubble 4: Limitless Possibilities */}
                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: 1.1, duration: 0.5, ease: EASE }} className="schools-ready-bubble-item" style={{ top: 160, left: "84%" }}>
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

/* ══════════════════════════════════════
    FAQ SECTION COMPONENT
════════════════════════════════════════ */
const SCHOOL_FAQS: { q: string; a: string; aNode?: React.ReactNode }[] = [
  {
    q: "What is a VR lab in a school?",
    a: "A VR lab is a dedicated space where students use headsets to explore curriculum-aligned 3D content instead of relying only on textbooks and diagrams. At a school VR lab, small batches of students step inside subjects like the human body, planetary systems, or historical events under a teacher's guidance. SparkVR's VR lab for schools uses existing classrooms or resource rooms, works entirely offline during sessions, and follows a structured, curriculum-aligned approach so every session maps directly to what's being taught that term.",
  },
  {
    q: "What equipment is included in a school VR lab?",
    a: "A SparkVR lab includes VR headsets for students, a teacher control tablet or dashboard to manage sessions, a storage-and-charging cart, and pre-loaded curriculum content covering Science, Maths and Social Studies. Everything is delivered, installed and configured by our team, so schools don't need to source or maintain separate hardware. The setup is designed to be plug-and-play, with content organized by grade and chapter so teachers can start a guided lesson without extra technical setup each time.",
  },
  {
    q: "How much space does a VR lab require?",
    a: "SparkVR labs are built to fit inside a standard classroom or resource room — there's no need for structural changes, special flooring, or a dedicated large hall. A compact area is enough for a batch of students to use headsets safely while seated or standing in place, with the storage cart positioned along a wall. Because sessions run in small rotating batches rather than requiring every desk to be replaced, most schools can set up a lab within their existing infrastructure.",
  },
  {
    q: "Does a SparkVR lab require continuous internet connectivity?",
    a: "No. SparkVR content runs fully offline once it's loaded onto the headsets, so an unreliable or absent internet connection won't interrupt a lesson. This matters for schools where broadband can be inconsistent — sessions continue smoothly regardless of network status. Occasional connectivity is only needed for content updates or syncing usage reports, not for day-to-day teaching, which keeps implementation predictable and low-maintenance.",
  },
  {
    q: "Which subjects can students learn using VR?",
    a: "SparkVR currently covers Science, Maths and Social Studies for Classes 6–12, with modules mapped chapter-by-chapter to what students are already studying. Topics like human anatomy, cell structure, physics concepts, geography and historical events are presented as interactive 3D experiences rather than static diagrams. The library continues to grow — explore how VR learning across subjects is expanding to see upcoming additions to the curriculum.",
  },
  {
    q: "Is SparkVR aligned with CBSE, ICSE and school curriculum?",
    a: "Yes. SparkVR's modules are designed around CBSE and ICSE curriculum structures, so each VR experience corresponds to specific chapters and learning objectives rather than standing apart from what's being taught. Teachers can slot a session into a topic they're already covering, and students see the same concepts they'll be assessed on — just experienced immersively instead of only read about. This alignment is core to how our curriculum-aligned VR modules are built.",
  },
  {
    q: "How long is a typical VR learning session?",
    a: "A standard SparkVR session runs for 40 minutes, matching a typical school period. This includes time for students to put on headsets, go through the guided experience, and take part in a short teacher-led discussion afterward to reinforce what they explored. The fixed duration makes it easy to plan VR sessions in the school timetable without disrupting the rest of the day's schedule.",
  },
  {
    q: "How do teachers manage students using VR headsets?",
    a: "Teachers use a simple control dashboard to start, pause and monitor sessions across all headsets in the room at once, so no student is ever unsupervised. The dashboard shows which module each student is in, allows the teacher to guide pacing, and supports classroom discussion once headsets come off. Because the interface is built for educators rather than technicians, teacher-guided VR lessons don't require coding knowledge or IT support to run.",
  },
  {
    q: "Is VR learning safe for school students?",
    a: "Yes — SparkVR sessions are short, teacher-supervised, and use age-appropriate content designed specifically for classroom use rather than general consumer VR apps. Students remain seated or in a fixed position during use, sessions are time-boxed to reduce extended exposure, and a teacher is present throughout to monitor comfort and behavior. Devices are cleaned and maintained between uses as part of standard lab operating procedure.",
  },
  {
    q: "How are VR headsets stored and charged?",
    a: "Headsets are kept in a dedicated storage-and-charging cart that locks the devices safely between sessions and charges them automatically so they're ready for the next class. This keeps headsets organized, protected from damage, and consistently available throughout the school day without teachers needing to manage cables or chargers individually. The cart is compact enough to fit against a classroom wall.",
  },
  {
    q: "How long does VR lab setup take?",
    a: "Once a school confirms its requirements, SparkVR typically completes delivery, installation and configuration within a short, scheduled window — most labs are ready to run their first sessions within days, not months. Our team handles the physical setup, loads the curriculum content, and configures the teacher dashboard before handover, so there's minimal disruption to the school's regular routine during installation.",
  },
  {
    q: "What training does SparkVR provide teachers?",
    a: "Every school receives hands-on training for teachers on how to start sessions, manage the batch rotation, use the control dashboard, and lead post-session discussions. Training is designed for educators with no technical background, and our team remains available for ongoing support as teachers become more confident running sessions independently. Refresher sessions and support are available as new modules are added.",
  },
  {
    q: "Can a VR lab fit into an existing school timetable?",
    a: "Yes. SparkVR sessions are built around a fixed 40-minute duration with batch rotation, so a VR lab can be scheduled like any other period — for example, one batch of students at a time during a science or social studies slot — without extending the school day or disrupting other classes. See how VR sessions in the school timetable typically fit into a full day of rotating batches.",
  },
  {
    q: "What is the cost of setting up a VR lab for a school?",
    a: "Cost depends on factors like the number of headsets, the size of student batches, curriculum coverage, and the level of training and ongoing support a school needs — so there isn't a single fixed price that applies to every school. The most accurate way to get a quote tailored to your school's size and requirements is to book a school VR demonstration, where our team can walk through options and provide a proposal based on your specific setup.",
    aNode: (
      <>
        Cost depends on factors like the number of headsets, the size of student batches, curriculum coverage, and the level of training and ongoing support a school needs — so there isn't a single fixed price that applies to every school. The most accurate way to get a quote tailored to your school's size and requirements is to{" "}
        <Link href="/contact#contact-form" style={{ color: "#0052cc", fontWeight: 700, textDecoration: "underline" }}>book a school VR demonstration</Link>, where our team can walk through options and provide a proposal based on your specific setup.
      </>
    ),
  },
];

function SchoolsFAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": SCHOOL_FAQS.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <section className="schools-section" style={{ background: "#f8f9fc" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="schools-container">

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.h2 {...fadeUp(0.1)} style={{ fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)", fontWeight: 800, color: "#001a4d", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Frequently Asked Questions <span style={{ color: "#0052cc" }}>About VR Labs for Schools</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} style={{ fontSize: 18, color: "#64748b", lineHeight: 1.6, fontWeight: 500, maxWidth: 700, margin: "0 auto" }}>
            Straight answers for school leaders evaluating a VR lab for the first time.
          </motion.p>
        </div>

        <div className="schools-faq-list">
          {SCHOOL_FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div key={idx} {...fadeUp(0.05 * idx, 0.5)} className="schools-faq-item">
                <button
                  type="button"
                  className="schools-faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="schools-faq-question-text">{item.q}</span>
                  <span className="schools-faq-icon" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <ChevronDown size={16} />
                  </span>
                </button>
                <motion.div
                  className="schools-faq-answer"
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <div className="schools-faq-answer-inner">{item.aNode ?? item.a}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
