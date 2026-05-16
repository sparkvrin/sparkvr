"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, GraduationCap, ArrowRight, BookOpen, Users, BarChart3, Calendar, Microscope, Calculator, Globe2, Rocket } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════
   3D: ATOM
═══════════════════════════════════════════════════════ */
function Atom3D() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.rotation.y = clock.getElapsedTime() * 0.9;
    g.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.3;
  });
  return (
    <group ref={g} scale={1.15}>
      <mesh>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.8} roughness={0.1} metalness={0.4} />
      </mesh>
      {[
        [0, 0, 0],
        [Math.PI / 3, Math.PI / 4, 0],
        [-Math.PI / 3, -Math.PI / 4, 0],
      ].map((rot, i) => (
        <group key={i} rotation={rot as [number, number, number]}>
          <mesh>
            <torusGeometry args={[0.72, 0.012, 16, 80]} />
            <meshStandardMaterial color="#93c5fd" emissive="#60a5fa" emissiveIntensity={0.5} />
          </mesh>
          <ElectronDot seed={i * 2.09} r={0.72} />
        </group>
      ))}
    </group>
  );
}

function ElectronDot({ seed, r }: { seed: number; r: number }) {
  const m = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!m.current) return;
    const t = clock.getElapsedTime() * 2.2 + seed;
    m.current.position.set(Math.cos(t) * r, 0, Math.sin(t) * r);
  });
  return (
    <mesh ref={m}>
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════════
   3D: SATURN
═══════════════════════════════════════════════════════ */
function Saturn3D() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.rotation.y = clock.getElapsedTime() * 0.25;
    g.current.rotation.x = 0.35 + Math.sin(clock.getElapsedTime() * 0.4) * 0.08;
  });
  return (
    <group ref={g} scale={1.05}>
      <mesh>
        <sphereGeometry args={[0.52, 32, 32]} />
        <meshStandardMaterial color="#d4a055" roughness={0.55} metalness={0.05} />
      </mesh>
      <mesh rotation={[Math.PI / 2.15, 0, 0]}>
        <torusGeometry args={[0.9, 0.13, 2, 80]} />
        <meshStandardMaterial color="#c0893a" roughness={0.6} transparent opacity={0.92} />
      </mesh>
      <mesh rotation={[Math.PI / 2.15, 0, 0]}>
        <torusGeometry args={[1.15, 0.055, 2, 80]} />
        <meshStandardMaterial color="#e8c07a" roughness={0.5} transparent opacity={0.72} />
      </mesh>
    </group>
  );
}

/* ─────────────────────────────────────────────────────────
   Continuous 3D Floating Wrapper
───────────────────────────────────────────────────────── */
function Floating3DWrapper({ children, delay = 0, floatAmp = 15, rotateAmp = 5, duration = 6, className = "" }: { 
  children: React.ReactNode; delay?: number; floatAmp?: number; rotateAmp?: number; duration?: number; className?: string;
}) {
  return (
    <motion.div
      animate={{ 
        y: [0, -floatAmp, 0],
        rotateX: [0, rotateAmp, 0, -rotateAmp, 0],
        rotateY: [0, -rotateAmp, 0, rotateAmp, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Mouse-Responsive 3D Tilt Card
───────────────────────────────────────────────────────── */
function TiltCard({ children, style, className = "" }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [18, -18]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 150, damping: 20 });
  const shine_x = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const shine_y = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1200, position: "relative", ...style }}
      className={className}
    >
      <motion.div 
        style={{
          position: "absolute", inset: 0, zIndex: 20, pointerEvents: "none", borderRadius: "inherit",
          background: `radial-gradient(circle at ${shine_x} ${shine_y}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Subject Card Component (Exact Match)
───────────────────────────────────────────────────────── */
function SubjectCard({ 
  title, desc, imgSrc, gradient, delay, icon: Icon, threeDNode 
}: { 
  title: string, desc: string, imgSrc?: string, gradient: string, delay: number, icon: any, threeDNode?: React.ReactNode 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.9, type: "spring", stiffness: 100, damping: 15 }}
      style={{ width: 360, height: 260, position: "relative", zIndex: 10 }}
    >
      <Floating3DWrapper delay={delay} floatAmp={10} rotateAmp={4} duration={7 + delay}>
        <TiltCard style={{ width: "100%", height: "100%", borderRadius: 28 }}>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 40px 80px rgba(0,30,100,0.3)" }}
            transition={{ duration: 0.4 }}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 28,
              background: gradient,
              padding: "24px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,20,80,0.15), inset 0 2px 5px rgba(255,255,255,0.4)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Dynamic Background Glows inside card */}
            <motion.div 
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }} 
              transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: -20, left: -20, width: 100, height: 100, background: "rgba(255,255,255,0.3)", filter: "blur(30px)", borderRadius: "50%" }}
            />
            
            {/* Top Left Icon */}
            <div style={{ transform: "translateZ(30px)", marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
                <Icon size={20} color="#1d4ed8" strokeWidth={2.5} />
              </div>
            </div>

            <div style={{ position: "relative", zIndex: 2, maxWidth: "70%", transform: "translateZ(40px)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "0.05em", marginBottom: 10, textTransform: "uppercase" }}>{title}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", lineHeight: 1.4, fontWeight: 500 }}>
                {desc.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
              </p>
            </div>
            
            {/* 3D Image Object */}
            {threeDNode ? (
              <div style={{ 
                position: "absolute", right: -20, bottom: -10, width: "85%", height: 180, 
                transform: "translateZ(70px)", pointerEvents: "none" 
              }}>
                {threeDNode}
              </div>
            ) : (
              imgSrc && (
                <motion.img loading="lazy" decoding="async" 
                  src={imgSrc} 
                  alt={title} 
                  animate={{ y: [0, -12, 0], rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut" }}
                  style={{ 
                    position: "absolute", right: -30, bottom: -20, width: "75%", height: "auto", objectFit: "contain",
                    transform: "translateZ(70px)", filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.4))",
                    pointerEvents: "none"
                  }} 
                />
              )
            )}
          </motion.div>
        </TiltCard>
      </Floating3DWrapper>
    </motion.div>
  );
}

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      style={{ 
        position: "relative", 
        width: "100%", 
        minHeight: "100vh", 
        padding: "clamp(60px, 8vh, 120px) clamp(24px, 5vw, 60px)",
        background: "radial-gradient(circle at 70% 50%, #f4f8ff 0%, #e2eeff 50%, #cce0ff 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      {/* ─────────────────────────────────────────────────────────
          Background Animated Particles & Network Nodes
      ───────────────────────────────────────────────────────── */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {/* Parallax moving background grid/dots */}
        <motion.div 
          animate={{ x: -mousePos.x * 0.5, y: -mousePos.y * 0.5 }}
          style={{ position: "absolute", inset: -100, backgroundImage: "radial-gradient(#93c5fd 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.15 }}
        />
        
        {/* Glowing Orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} style={{ position: "absolute", top: "10%", left: "40%", width: 300, height: 300, background: "rgba(59, 130, 246, 0.15)", filter: "blur(80px)", borderRadius: "50%" }} />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} style={{ position: "absolute", bottom: "10%", right: "20%", width: "min(100%, 400px)", height: 400, background: "rgba(139, 92, 246, 0.15)", filter: "blur(100px)", borderRadius: "50%" }} />

        {/* Small floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100 - (i % 5) * 10],
              x: [0, (i % 2 === 0 ? 1 : -1) * (15 + (i % 3) * 5)],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ duration: 5 + (i % 5), repeat: Infinity, ease: "linear", delay: i * 0.4 }}
            style={{
              position: "absolute",
              top: `${10 + (i * 17) % 80}%`,
              left: `${5 + (i * 23) % 90}%`,
              width: 4 + (i % 3) * 2, height: 4 + (i % 3) * 2,
              borderRadius: "50%",
              background: ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"][i % 4],
              filter: "blur(1px)",
              boxShadow: `0 0 10px ${["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"][i % 4]}`
            }}
          />
        ))}
      </div>

      <div className="solution-layout" style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", width: "100%", display: "flex", flexWrap: "nowrap", gap: 40, alignItems: "center" }}>
        
        {/* ─────────────────────────────────────────────────────────
            LEFT COLUMN - CONTENT
        ───────────────────────────────────────────────────────── */}
        <div style={{ flex: "1 1 45%", minWidth: "min(100%, 350px)", maxWidth: 600, paddingBottom: 60 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <motion.div 
                animate={{ width: [40, 60, 40] }} transition={{ duration: 3, repeat: Infinity }}
                style={{ height: 2, background: "#1d4ed8" }} 
              />
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30, rotateX: 20 }} 
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1, duration: 0.9, type: "spring" }}
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, marginBottom: 32, transformPerspective: 800 }}
          >
            A structured immersive curriculum <br/>
            <motion.span 
              animate={{ color: ["#2563eb", "#3b82f6", "#2563eb"] }} transition={{ duration: 4, repeat: Infinity }}
              style={{ color: "#2563eb" }}
            >
              across subjects and grades.
            </motion.span>
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {["Built chapter by chapter.", "Aligned lesson by lesson.", "Integrated period by period."].map((text, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
                style={{ display: "flex", alignItems: "center", gap: 16 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                  style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 6px 16px rgba(37,99,235,0.4)" }}
                >
                  <CheckCircle2 size={18} strokeWidth={3} />
                </motion.div>
                <span style={{ fontSize: 20, fontWeight: 600, color: "#1e3a8a" }}>{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            whileInView={{ opacity: 1, scale: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.6, type: "spring" }}
          >
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,40,120,0.1)" }}
              style={{ 
                background: "rgba(255,255,255,0.8)", backdropFilter: "blur(20px)", 
                border: "1px solid rgba(255,255,255,1)", borderRadius: 100, 
                padding: "16px 28px", display: "inline-flex", alignItems: "center", gap: 18, 
                marginBottom: 44, boxShadow: "0 10px 25px rgba(0,30,80,0.06)", cursor: "default"
              }}
            >
              <motion.div 
                animate={{ rotateY: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, boxShadow: "0 4px 12px rgba(37,99,235,0.4)" }}
              >
                <GraduationCap size={24} />
              </motion.div>
              <p style={{ margin: 0, fontSize: 16.5, color: "#1e3a8a", fontWeight: 500, lineHeight: 1.4 }}>
                This is academic infrastructure — <br/>
                <strong style={{ fontWeight: 800 }}>not entertainment.</strong>
              </p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative", overflow: "hidden",
                background: "linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)",
                color: "white", border: "none", padding: "20px 40px",
                borderRadius: 100, fontSize: 18, fontWeight: 700,
                display: "inline-flex", alignItems: "center", gap: 14,
                cursor: "pointer", boxShadow: "0 15px 35px rgba(37,99,235,0.3)"
              }}
            >
              <motion.div 
                animate={{ x: ["-100%", "200%"] }} 
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", transform: "skewX(-20deg)" }}
              />
              <span style={{ position: "relative", zIndex: 2 }}>Experience SparkVR in Your School</span>
              <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ display: "flex" }}>
                <ArrowRight size={22} strokeWidth={3} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            RIGHT COLUMN - 3D INTERACTIVE ORBITAL GRID
        ───────────────────────────────────────────────────────── */}
        <div className="orbital-container" style={{ flex: "1 1 55%", minWidth: 0, position: "relative", height: 800, display: "flex", alignItems: "center", justifyContent: "center", perspective: 1500 }}>
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 1600px) {
              .orbital-wrapper { transform: scale(0.85); transform-origin: center center; }
              .orbital-container { height: 680px !important; }
            }
            @media (max-width: 1400px) {
              .orbital-wrapper { transform: scale(0.75); }
              .orbital-container { height: 600px !important; }
            }
            @media (max-width: 1100px) {
              .orbital-wrapper { transform: scale(0.65); }
              .orbital-container { height: 520px !important; }
            }
            @media (max-width: 900px) {
              .orbital-wrapper { transform: scale(0.55); }
              .orbital-container { height: 440px !important; }
            }
            @media (max-width: 700px) {
              .orbital-wrapper { transform: scale(0.4); }
              .orbital-container { height: 320px !important; }
              .solution-layout { gap: 10px !important; }
            }
          `}} />
          
          <div className="orbital-wrapper" style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div 
              animate={{ rotateX: mousePos.y * 0.2, rotateY: mousePos.x * 0.2 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", transformStyle: "preserve-3d" }}
            >
            {/* Animated SVG Dashed Connecting Lines */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1, transform: "translateZ(-20px)" }} viewBox="0 0 700 700" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="glowLine1" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
                </linearGradient>
                <linearGradient id="glowLine2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(139,92,246,0.8)" />
                  <stop offset="100%" stopColor="rgba(139,92,246,0.1)" />
                </linearGradient>
                <linearGradient id="glowLine3" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(16,185,129,0.8)" />
                  <stop offset="100%" stopColor="rgba(16,185,129,0.1)" />
                </linearGradient>
                <linearGradient id="glowLine4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(245,158,11,0.8)" />
                  <stop offset="100%" stopColor="rgba(245,158,11,0.1)" />
                </linearGradient>
                <filter id="glowBlur">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Path 1: Center to Top-Left */}
              <motion.path d="M 350 350 L 150 160" stroke="url(#glowLine1)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glowBlur)" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              {/* Path 2: Center to Top-Right */}
              <motion.path d="M 350 350 L 550 160" stroke="url(#glowLine2)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glowBlur)" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              {/* Path 3: Center to Bottom-Left */}
              <motion.path d="M 350 350 L 150 540" stroke="url(#glowLine3)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glowBlur)" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              {/* Path 4: Center to Bottom-Right */}
              <motion.path d="M 350 350 L 550 540" stroke="url(#glowLine4)" strokeWidth="2.5" fill="none" strokeDasharray="8 8" filter="url(#glowBlur)" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            </svg>

            {/* Central Glowing Orb (SparkVR Logo) */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 15, transformStyle: "preserve-3d" }}>
              <Floating3DWrapper floatAmp={6} rotateAmp={0} duration={8}>
                
                {/* The precise glowing glass ring from the image */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: 270, height: 270, borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.9)",
                  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)",
                  boxShadow: "0 0 35px rgba(59,130,246,0.6), inset 0 0 25px rgba(255,255,255,1)",
                  backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                  zIndex: 1
                }} />
                
                {/* The main white circle */}
                <motion.div
                  animate={{ boxShadow: ["0 15px 35px rgba(0,40,150,0.15), inset 0 0 40px rgba(255,255,255,1), inset 0 0 10px rgba(59,130,246,0.3)"] }}
                  style={{
                    width: 220, height: 220, borderRadius: "50%", background: "#ffffff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,1)",
                    transform: "translateZ(30px)",
                    position: "relative", zIndex: 2
                  }}
                >
                  <img loading="lazy" decoding="async" src="/logo.webp" alt="SparkVR Logo" style={{ width: 120, objectFit: "contain" }} />
                </motion.div>
                
              </Floating3DWrapper>
            </div>

            {/* 4 Cards Positioning (Strictly Equidistant from Center) */}
            {/* Top Left - Science */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(calc(-50% - 235px), calc(-50% - 240px))" }}>
              <SubjectCard 
                title="SCIENCE" 
                desc="Explore the unseen.\nUnderstand the real." 
                gradient="linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)" 
                delay={0.2} icon={Microscope}
                threeDNode={
                  <Canvas camera={{ position: [0, 0, 3.6], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                    <ambientLight intensity={2.2} />
                    <directionalLight position={[5, 6, 5]} intensity={3.2} />
                    <Suspense fallback={null}><Atom3D /></Suspense>
                  </Canvas>
                }
              />
            </div>
            
            {/* Top Right - Mathematics */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(calc(-50% + 235px), calc(-50% - 240px))" }}>
              <SubjectCard 
                title="MATHEMATICS" 
                desc="Visualize.\nReason.\nSolve with clarity." 
                imgSrc="/forces.webp" 
                gradient="linear-gradient(135deg, #2e1065 0%, #5b21b6 50%, #8b5cf6 100%)" 
                delay={0.4} icon={Calculator}
              />
            </div>

            {/* Bottom Left - Social Studies */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(calc(-50% - 260px), calc(-50% + 290px))" }}>
              <SubjectCard 
                title="SOCIAL STUDIES" 
                desc="Walk through history.\nConnect with civilizations." 
                imgSrc="/student.webp" 
                gradient="linear-gradient(135deg, #064e3b 0%, #0f766e 50%, #14b8a6 100%)" 
                delay={0.6} icon={Globe2}
              />
            </div>

            {/* Bottom Right - Future Subjects */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(calc(-50% + 260px), calc(-50% + 290px))" }}>
              <SubjectCard 
                title="INTERDISCIPLINARY" 
                desc="Preparing students for the future of knowledge." 
                gradient="linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)" 
                delay={0.8} icon={Rocket}
                threeDNode={
                  <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                    <ambientLight intensity={1.8} />
                    <directionalLight position={[-5, 6, 5]} intensity={3.5} />
                    <Suspense fallback={null}><Saturn3D /></Suspense>
                  </Canvas>
                }
              />
            </div>
          </motion.div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          BOTTOM FEATURES BAR
      ───────────────────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        viewport={{ once: true }} 
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        style={{ 
          margin: "80px auto 0", maxWidth: 1050, width: "100%",
          background: "rgba(255,255,255,0.75)", backdropFilter: "blur(25px)",
          border: "1.5px solid rgba(255,255,255,1)", borderRadius: 32,
          padding: "28px 48px", display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "center", gap: 24, boxShadow: "0 30px 60px rgba(0,30,100,0.08), inset 0 2px 10px rgba(255,255,255,0.8)",
          position: "relative", zIndex: 10, transformStyle: "preserve-3d"
        }}
      >
        <motion.div 
          animate={{ x: ["0%", "100%", "0%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: 0, left: 0, height: 2, width: "30%", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)" }} 
        />
        {[
          { icon: BookOpen, text: "Curriculum\nAligned" },
          { icon: Users, text: "Across\nSubjects" },
          { icon: BarChart3, text: "Across\nGrades" },
          { icon: Calendar, text: "Integrated\nPeriod by Period" }
        ].map((item, i) => (
          <React.Fragment key={i}>
            <motion.div 
              whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring" }}
              style={{ display: "flex", alignItems: "center", gap: 18, cursor: "default" }}
            >
              <Floating3DWrapper delay={i * 0.2} floatAmp={4} rotateAmp={0} duration={3}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0.2) 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d4ed8", boxShadow: "0 8px 20px rgba(37,99,235,0.15), inset 0 2px 4px rgba(255,255,255,0.8)" }}>
                  <item.icon size={28} strokeWidth={2.5} />
                </div>
              </Floating3DWrapper>
              <span style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", lineHeight: 1.3, whiteSpace: "pre-line", letterSpacing: "0.02em" }}>{item.text}</span>
            </motion.div>
            {i < 3 && <div style={{ width: 2, height: 48, background: "linear-gradient(180deg, transparent, rgba(37,99,235,0.15), transparent)" }} />}
          </React.Fragment>
        ))}
      </motion.div>

    </section>
  );
}
