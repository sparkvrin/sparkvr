"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SparkButton from "@/components/SparkButton";

const SUBJECTS = [
  { label: "Fungi",           img: "/fungi_proper.png",  accent: "#1fb3ff", grade: "Grades 6–9",  desc: "Explore spore formation, hyphae networks and decomposition cycles in immersive 3D." },
  { label: "Cells",           img: "/cell_proper.png",   accent: "#0052cc", grade: "Grades 6–10", desc: "Walk through organelles, membranes and mitosis with spatial understanding." },
  { label: "Human Anatomy",   img: "/anatomy.png",       accent: "#cc2fff", grade: "Grades 7–12", desc: "Observe cardiac chambers, pulmonary systems and skeletal joints at full scale." },
  { label: "Bio-Social Systems", img: "/neural.png",     accent: "#00b894", grade: "Grades 9–12", desc: "Map neural pathways, synaptic transmissions and brain-body feedback loops." },
];

const SYSTEM_FEATURES = [
  { text: "Curriculum-aligned",  icon: "📘" },
  { text: "40-minute sessions",  icon: "⏱️" },
  { text: "Teacher-guided",      icon: "👨‍🏫" },
  { text: "Offline stability",   icon: "📡" },
  { text: "Scalable expansion",  icon: "🚀" },
];

/* ══════════════════════════════════════════════
   PROBLEM SECTION — SVG Illustrations v2
══════════════════════════════════════════════ */
function TeacherIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
    </svg>
  );
}
function MedalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="6"/><path d="M7.5 5.5L5 8l7 2 7-2-2.5-2.5"/><path d="M7 8l5 1 5-1"/>
    </svg>
  );
}

/* Subject image components — real PNGs, cover the card area */
function ForcesSVG() {
  return (
    <img src="/forces.png" alt="Forces"
      style={{ width:"100%", height:"100%", objectFit:"contain",
        filter:"drop-shadow(0 4px 14px rgba(29,78,216,0.22))" }} />
  );
}
function AnatomySVG() {
  return (
    <img src="/human_anatomy.png" alt="Human Anatomy"
      style={{ width:"100%", height:"100%", objectFit:"contain",
        filter:"drop-shadow(0 4px 14px rgba(220,38,38,0.24))" }} />
  );
}
function CellSVG() {
  return (
    <img src="/cell1.png" alt="Cell"
      style={{ width:"100%", height:"100%", objectFit:"contain",
        filter:"drop-shadow(0 4px 14px rgba(109,40,217,0.24))" }} />
  );
}
function PlantCellSVG() {
  return (
    <img src="/biological_systems.png" alt="Biological Systems"
      style={{ width:"100%", height:"100%", objectFit:"contain",
        filter:"drop-shadow(0 4px 14px rgba(21,128,61,0.24))" }} />
  );
}

/* Subject Bubble — glass card matching reference exactly */
function SubjectBubble({ label, children, pos, delay, dir = -1, w = 210, h = 178 }: {
  label: string; children: React.ReactNode; pos: React.CSSProperties;
  delay: number; dir?: number; w?: number; h?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.65, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.78, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ position: "absolute", zIndex: 10, ...pos }}
    >
      <motion.div
        animate={{ y: [0, dir * 14, 0] }}
        transition={{ duration: 5.5 + delay * 0.45, repeat: Infinity, ease: "easeInOut", delay: delay * 0.25 }}
        style={{ position: "relative" }}
      >
        {/* Outer glow halo */}
        <div style={{
          position: "absolute", inset: -10, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(160,210,255,0.42) 0%, transparent 68%)",
          filter: "blur(14px)", pointerEvents: "none",
        }}/>
        {/* Glass card (Circular) */}
        <div style={{
          position: "relative" as const,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          borderRadius: "50%",
          boxShadow: "0 18px 52px rgba(0,50,140,0.22), inset 0 1.5px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(180,210,255,0.35)",
          border: "1.5px solid rgba(255,255,255,0.4)",
          width: w, height: w,
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden" as const,
          padding: 16,
        }}>
          {/* Image area */}
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {children}
          </div>
        </div>

        {/* Label row (Top Center Pill) */}
        <div style={{ 
          position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
          background: "#ffffff", borderRadius: 30, padding: "6px 18px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.10)", zIndex: 20, whiteSpace: "nowrap"
        }}>
          <span style={{
            fontSize: 10, fontWeight: 800, letterSpacing: "0.15em",
            color: "#0052cc", textTransform: "uppercase" as const,
            fontFamily: "'AR One Sans',sans-serif",
          }}>
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── 3D Tilt Card ── */
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 25 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 25 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        if (!cardRef.current) return;
        const r = cardRef.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1000, ...style }}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>

      {/* ═══════════════════════════════════════════
          SECTION 1 — THE PROBLEM  (pixel-matched)
      ═══════════════════════════════════════════ */}
      <section style={{
        position: "relative", width: "100%", minHeight: "100vh",
        display: "flex", flexDirection: "row", alignItems: "stretch",
        overflow: "hidden", background: "#ffffff",
      }}>

        {/* ════════════════════ LEFT COLUMN ════════════════════ */}
        <div style={{
          width: "38%", flexShrink: 0,
          padding: "clamp(48px, 7vh, 88px) clamp(32px, 5.5vw, 72px)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          background: "transparent",
          position: "relative", zIndex: 4,
        }}>

          {/* THE PROBLEM — label row */}
          <motion.div initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
            <span style={{ fontSize:10, fontWeight:800, letterSpacing:"0.22em", color:"#1d4ed8",
              textTransform:"uppercase", fontFamily:"'AR One Sans',sans-serif" }}>THE PROBLEM</span>
            <div style={{ height:2, width:48, background:"#1d4ed8", borderRadius:2, flexShrink:0 }}/>
          </motion.div>

          {/* Heading */}
          <motion.h2 initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ delay:0.08 }}
            style={{ fontSize:"clamp(30px,3.6vw,52px)", fontWeight:800, lineHeight:1.2,
              color:"#0b1a3b", margin:"0 0 36px", fontFamily:"'AR One Sans',sans-serif" }}>
            For decades, education has relied on{" "}
            <span style={{ color:"#1d4ed8" }}>explanation.</span>
          </motion.h2>

          {/* Bullet rows */}
          <div style={{ display:"flex", flexDirection:"column", gap:18, marginBottom:36 }}>
            {([
              { Icon: TeacherIcon,   text:"Teachers explain brilliantly." },
              { Icon: BookIcon,      text:"The curriculum is structured." },
              { Icon: ClipboardIcon, text:"Examinations are rigorous." },
              { Icon: MedalIcon,     text:"Yet many concepts remain abstract." },
            ] as { Icon:()=>React.ReactNode; text:string }[]).map(({ Icon, text }, i) => (
              <motion.div key={i} initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ delay:0.12+i*0.1 }}
                style={{ display:"flex", alignItems:"center", gap:16 }}>
                <div style={{
                  width:48, height:48, borderRadius:"50%", flexShrink:0,
                  background:"rgba(29,78,216,0.07)", border:"1.5px solid rgba(29,78,216,0.13)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  <Icon />
                </div>
                <p style={{ fontSize:"clamp(14px,1.35vw,17px)", fontWeight:500,
                  color:"#1a2a4a", margin:0, fontFamily:"'AR One Sans',sans-serif", lineHeight:1.45 }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* "Students are asked to imagine" box */}
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:0.55 }}
            style={{
              border:"1.5px solid rgba(29,78,216,0.17)", borderRadius:16,
              padding:"18px 22px", display:"flex", alignItems:"center", gap:18,
              background:"rgba(255,255,255,0.95)", boxShadow:"0 4px 22px rgba(29,78,216,0.07)",
            }}>
            <div style={{
              width:52, height:52, borderRadius:"50%", flexShrink:0,
              border:"2px solid rgba(29,78,216,0.22)", background:"rgba(29,78,216,0.04)",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <span style={{ fontSize:28, fontWeight:700, color:"#1d4ed8", lineHeight:1 }}>?</span>
            </div>
            <div>
              <p style={{ fontSize:"clamp(13px,1.25vw,16px)", fontWeight:600,
                color:"#0b1a3b", margin:"0 0 4px", fontFamily:"'AR One Sans',sans-serif" }}>
                Students are asked to imagine.
              </p>
              <p style={{ fontSize:"clamp(13px,1.25vw,16px)", fontWeight:800,
                color:"#1d4ed8", margin:0, fontFamily:"'AR One Sans',sans-serif" }}>
                What if they didn&apos;t have to?
              </p>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════ WAVE DIVIDER ════════════════════ */}
        {/* sits on the seam: left-column ends at 46%, wave starts a touch before */}
        <div style={{
          position:"absolute", top:0, bottom:0, zIndex:5,
          left:"calc(38% - 60px)", width:120, pointerEvents:"none", display:"none",
        }}>
          <svg width="120" height="100%" viewBox="0 0 120 1000"
            preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wv2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#edf2ff"/>
                <stop offset="100%" stopColor="transparent"/>
              </linearGradient>
            </defs>
            {/* S-curve identical to reference: fully fills left side */}
            <path
              d="M120,0
                 C70,80  90,200  65,340
                 C40,480  80,580  55,720
                 C30,820  60,900  120,1000
                 L120,0 Z"
              fill="url(#wv2)"/>
          </svg>
        </div>

        {/* ════════════════════ RIGHT COLUMN (background image) ════════════════════ */}
        <div style={{
          flex:1, position:"relative", overflow:"hidden", minHeight:"100vh",
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>



          {/* ── Student image (centred, bottom-anchored) ── */}
          <img src="/student.png" alt="Student"
            style={{
              position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)",
              height:"48%", objectFit:"contain", objectPosition:"bottom center",
              zIndex:6, pointerEvents:"none",
              filter:"drop-shadow(0 30px 60px rgba(0,40,130,0.25))",
            }}/>

          {/* ── Question mark cloud (centred, floating) ── */}
          <motion.div
            animate={{ scale:[1,1.09,1], opacity:[0.72,1,0.72], y:[0,-12,0] }}
            transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
            style={{
              position:"absolute", top:"25%", left:"35%",
              transform:"translate(-50%,-50%)", zIndex:7, pointerEvents:"none",
            }}>
            <img src="/quastion.png" alt="Question cloud"
              style={{
                width:240, height:"auto",
                filter:"drop-shadow(0 0 32px rgba(180,220,255,0.9)) drop-shadow(0 0 18px rgba(255,255,255,0.75))",
              }}/>
          </motion.div>

          {/* ════ FORCES — top-left of blue panel ════ */}
          <SubjectBubble label="FORCES"
            pos={{ top:"14%", left:"36%" }} delay={0.2} dir={-1} w={150}>
            <ForcesSVG />
          </SubjectBubble>

          {/* ════ HUMAN ANATOMY — top-right ════ */}
          <SubjectBubble label="HUMAN ANATOMY"
            pos={{ top:"3%", right:"3%" }} delay={1.2} dir={-1} w={140}>
            <AnatomySVG />
          </SubjectBubble>

          {/* ════ CELL — mid-left, largest ════ */}
          <SubjectBubble label="CELL"
            pos={{ top:"42%", left:"0%" }} delay={1.8} dir={1} w={170}>
            <CellSVG />
          </SubjectBubble>

          {/* ════ BIOLOGICAL SYSTEMS — mid-right ════ */}
          <SubjectBubble label="BIOLOGICAL SYSTEMS"
            pos={{ top:"52%", right:"3%" }} delay={0.6} dir={1} w={150}>
            <PlantCellSVG />
          </SubjectBubble>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: 3D Subject Cards — glassmorphic cards with floating images
      ═══════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(240,249,255,0.25) 100%)",
        backdropFilter: "blur(20px)",
        padding: "128px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative floating orbs for this section */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "8%", right: "6%", width: 80, height: 80, borderRadius: "50%", background: "rgba(31,179,255,0.12)", filter: "blur(30px)", pointerEvents: "none" }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -8, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", bottom: "15%", left: "4%", width: 100, height: 100, borderRadius: "50%", background: "rgba(204,47,255,0.08)", filter: "blur(35px)", pointerEvents: "none" }}
        />

        <div style={{ maxWidth: 1438, margin: "0 auto", position: "relative", zIndex: 1 }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, marginBottom: 96 }}>
            {SUBJECTS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
              >
                <TiltCard style={{
                  height: 500, borderRadius: 24, overflow: "hidden",
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.5)",
                }}>
                  <div style={{ position: "relative", width: "100%", height: "100%", padding: 28, display: "flex", flexDirection: "column" }}>

                    <div style={{ transform: "translateZ(40px)", marginBottom: 20 }}>
                      <span className="section-label" style={{ color: s.accent }}>{s.grade}</span>
                      <h3 style={{ fontSize: 22, fontWeight: 700, color: "#001a4d", marginTop: 6 }}>{s.label}</h3>
                      <p style={{ fontSize: 13, color: "#64748b", marginTop: 8, lineHeight: 1.55 }}>{s.desc}</p>
                    </div>

                    <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <motion.img
                        src={s.img}
                        alt={s.label}
                        style={{
                          width: "88%", height: "auto",
                          transform: "translateZ(60px)",
                          filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.10))",
                          borderRadius: 12,
                        }}
                        animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>

                    {/* Accent bar */}
                    <div style={{ transform: "translateZ(20px)", height: 3, width: 48, background: s.accent, borderRadius: 2 }} />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <h2 style={{ fontSize: "clamp(32px, 5.5vw, 72px)", fontWeight: 700, color: "#001a4d", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Students are asked to imagine. <br />
              <span className="text-gradient-primary">What if they didn&apos;t have to?</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: System Features — floating glass pills
      ═══════════════════════════════════════════ */}
      <section style={{
        background: "rgba(255,255,255,0.3)",
        backdropFilter: "blur(24px)",
        padding: "128px 24px",
        position: "relative",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
            style={{ marginBottom: 32 }}
          >
            HOW IT WORKS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 700, color: "#001a4d", lineHeight: 1.2, marginBottom: 64 }}
          >
            Making concepts observable — <br />without disrupting schools.
          </motion.h2>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginBottom: 80 }}>
            {SYSTEM_FEATURES.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.06, y: -3, boxShadow: "0 12px 28px rgba(0,82,204,0.12)" }}
                style={{
                  padding: "14px 28px",
                  borderRadius: 40,
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(0,82,204,0.08)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#0052cc",
                  display: "flex", alignItems: "center", gap: 8,
                  cursor: "default",
                  transition: "all 0.25s ease",
                }}
              >
                <span>{f.icon}</span> {f.text}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <SparkButton href="/services" text="EXPLORE THE SYSTEM" large />
          </motion.div>

          <div style={{ marginTop: 128, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, textAlign: "left", paddingTop: 48, borderTop: "1px solid rgba(0,82,204,0.08)" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#0052cc", marginBottom: 12 }}>MISSION</p>
              <p style={{ fontSize: 16, color: "#444", lineHeight: 1.6 }}>Technology supports quietly, allowing teachers to lead confidently and students to learn deeply.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: "right" }}
            >
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#0052cc", marginBottom: 12 }}>OUTCOME</p>
              <p style={{ fontSize: 16, color: "#444", lineHeight: 1.6 }}>Measurable learning gains through immersive 3D classroom interventions.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
