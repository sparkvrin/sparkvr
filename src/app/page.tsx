"use client";

import React, { useEffect, useRef } from "react";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import SparkButton from "@/components/SparkButton";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, TrendingUp, BookOpen, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "4x",   label: "Higher student focus",     sub: "in immersive learning environments",          icon: Zap,        color: "#1fb3ff" },
  { value: "27%",  label: "Higher learning gains",    sub: "in immersive classroom interventions",         icon: TrendingUp, color: "#0052cc" },
  { value: "32%",  label: "Academic performance lift", sub: "reported in visual learning groups",          icon: BookOpen,   color: "#cc2fff" },
  { value: "275%", label: "Increase in confidence",   sub: "to apply knowledge after immersive sessions",  icon: BarChart3,  color: "#ff8c00" },
];

function StatCard({ s, i }: { s: typeof STATS[0], i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.8 }}
      style={{
        rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1000,
        borderRadius: 20, padding: "36px 28px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow accent */}
      <div style={{
        position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%",
        background: `${s.color}15`, filter: "blur(30px)", pointerEvents: "none",
      }} />
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        style={{
          transform: "translateZ(30px)", width: 52, height: 52, borderRadius: 14,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 28, background: `${s.color}1a`, color: s.color,
        }}
      >
        <s.icon size={24} />
      </motion.div>
      <p style={{ transform: "translateZ(50px)", fontSize: 56, fontWeight: 700, color: s.color, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 12 }}>{s.value}</p>
      <p style={{ transform: "translateZ(30px)", fontSize: 15, fontWeight: 600, color: "#ffffff", marginBottom: 8, letterSpacing: "-0.01em" }}>{s.label}</p>
      <p style={{ transform: "translateZ(20px)", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.55 }}>{s.sub}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />

      {/* ═══════════════════════════════════════════
          STATS — deep navy glassmorphic section
      ═══════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(180deg, rgba(0,26,77,0.88) 0%, rgba(0,45,122,0.88) 100%)",
        backdropFilter: "blur(16px)",
        padding: "128px 24px",
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
      }}>
        {/* Animated bg triangle */}
        <motion.div
          animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: -100, right: -100, pointerEvents: "none" }}
        >
          <svg width="600" height="600" viewBox="0 0 200 200" style={{ opacity: 0.03 }}>
            <polygon points="200,0 200,200 0,0" fill="#1fb3ff" />
          </svg>
        </motion.div>

        {/* Floating decorative glow */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "20%", left: "5%", width: 150, height: 150, borderRadius: "50%", background: "rgba(31,179,255,0.06)", filter: "blur(50px)", pointerEvents: "none" }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ position: "absolute", bottom: "10%", right: "8%", width: 120, height: 120, borderRadius: "50%", background: "rgba(204,47,255,0.06)", filter: "blur(40px)", pointerEvents: "none" }}
        />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <motion.p initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
              className="section-label" style={{ marginBottom: 20 }}>Research-backed outcomes</motion.p>
            <motion.h2 initial={{ opacity:0,y:28 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
              transition={{ delay:0.1 }}
              style={{ fontSize:"clamp(36px,5vw,64px)",fontWeight:700,color:"#ffffff",letterSpacing:"-0.02em",lineHeight:1.1 }}>
              The impact is <span className="text-gradient-primary">measurable.</span>
            </motion.h2>
            <motion.p initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
              transition={{ delay:0.2 }}
              style={{ marginTop:24,fontSize:18,color:"rgba(255,255,255,0.5)",maxWidth:580,margin:"24px auto 0",lineHeight:1.6 }}>
              Immersive learning doesn&apos;t just engage — it fundamentally rewires how students retain and apply knowledge.
            </motion.p>
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px,1fr))",gap:24 }}>
            {STATS.map((s, i) => (
              <StatCard key={i} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA — animated rings + glassmorphic
      ═══════════════════════════════════════════ */}
      <section style={{
        background: "rgba(245,245,245,0.35)",
        backdropFilter: "blur(24px)",
        padding: "128px 24px",
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
      }}>
        {/* Geometric accent */}
        <div style={{ position:"absolute",bottom:0,left:0,pointerEvents:"none" }}>
          <svg width="240" height="240" viewBox="0 0 180 180" style={{ opacity:0.04 }}>
            <polygon points="0,0 180,180 0,180" fill="#0052cc" />
          </svg>
        </div>

        {/* Animated concentric rings */}
        {[1,2,3].map(n => (
          <motion.div key={n}
            style={{
              position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
              width:n*320,height:n*320,borderRadius:"50%",
              border:`1.5px solid rgba(0,82,204,${0.08/n})`,
              pointerEvents:"none",
            }}
            animate={{ scale:[1,1.04,1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration:5+n*2,repeat:Infinity,ease:"easeInOut",delay:n*0.7 }}
          />
        ))}

        {/* Floating decorative glows */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "15%", right: "10%", width: 80, height: 80, borderRadius: "50%", background: "rgba(0,82,204,0.06)", filter: "blur(30px)", pointerEvents: "none" }}
        />

        <div style={{ maxWidth:820,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1 }}>
          <motion.p initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
            className="section-label" style={{ marginBottom:24 }}>Join the movement</motion.p>
          <motion.h2 initial={{ opacity:0,y:36 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
            style={{ fontSize:"clamp(36px,5vw,64px)",fontWeight:700,color:"#001a4d",letterSpacing:"-0.02em",lineHeight:1.1,marginBottom:28 }}>
            Experiential learning <span className="text-gradient-primary">is the new standard.</span>
          </motion.h2>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            transition={{ delay:0.2 }}
            style={{ fontSize:22,color:"#001a4d",opacity:0.6,marginBottom:56,lineHeight:1.6 }}>
            The only question is — who adopts first?
          </motion.p>
          <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
            transition={{ delay:0.3 }}
            style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:20 }}>
            <SparkButton href="/contact" text="BOOK FREE WORKSHOP" large />
            <SparkButton href="/about" text="LEARN MORE ABOUT US" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
