"use client";
import React, { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
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
      <meshBasicMaterial color="#ec4899" />
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

/* ═══════════════════════════════════════════════════════
   GLASS BUBBLE WRAPPER
═══════════════════════════════════════════════════════ */
const GLASS_STYLE: React.CSSProperties = {
  borderRadius: "50%",
  background:
    "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.35) 45%, rgba(220,235,255,0.08) 100%)",
  boxShadow:
    "inset 0 2px 24px rgba(255,255,255,0.95), 0 12px 40px rgba(80,120,220,0.13), inset 0 -6px 18px rgba(100,170,255,0.32)",
  border: "1.5px solid rgba(255,255,255,0.88)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
};

const LABEL_STYLE: React.CSSProperties = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#ffffff",
  borderRadius: 30,
  boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
  color: "#0052cc",
  fontFamily: "'VAG Rounded', sans-serif",
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "0.13em",
  whiteSpace: "nowrap",
  padding: "6px 18px",
};

/* ═══════════════════════════════════════════════════════
   BACKGROUND ORBS
═══════════════════════════════════════════════════════ */
const BG_ORBS = [
  { top: "9%", left: "58%", size: 18, color: "#3b82f6" },
  { top: "5%", left: "70%", size: 11, color: "#e0f2fe" },
  { top: "7%", left: "82%", size: 26, color: "#f472b6" },
  { top: "10%", left: "91%", size: 12, color: "#38bdf8" },
  { top: "18%", left: "92%", size: 14, color: "#818cf8" },
  { top: "30%", left: "96%", size: 11, color: "#22d3ee" },
  { top: "52%", left: "94%", size: 16, color: "#818cf8" },
  { top: "65%", left: "88%", size: 44, color: "#fb923c" },
  { top: "72%", left: "96%", size: 18, color: "#f472b6" },
  { top: "28%", left: "80%", size: 14, color: "#e879f9" },
  { top: "78%", left: "60%", size: 20, color: "#f472b6" },
];

/* ═══════════════════════════════════════════════════════
   RESPONSIVE HOOK
═══════════════════════════════════════════════════════ */
function useScreenSize() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return { isMobile: width < 768, isTablet: width >= 768 && width < 1024, width };
}

/* ═══════════════════════════════════════════════════════
   3D BACKGROUND PARTICLES
═══════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════
   SHARED BACKGROUND
═══════════════════════════════════════════════════════ */
function HeroBackground() {
  return (
    <>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "65%",
          width: "min(100%, 680px)", height: 680, marginTop: -340, marginLeft: -340,
          borderRadius: "50%",
          border: "1.5px solid rgba(147,197,253,0.2)",
          zIndex: 0, pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "65%",
          width: "min(100%, 960px)", height: 960, marginTop: -480, marginLeft: -480,
          borderRadius: "50%",
          border: "1px solid rgba(196,181,253,0.11)",
          zIndex: 0, pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 320, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "65%",
          width: "min(100%, 1240px)", height: 1240, marginTop: -620, marginLeft: -620,
          borderRadius: "50%",
          border: "0.5px solid rgba(147,197,253,0.07)",
          zIndex: 0, pointerEvents: "none",
        }}
      />

      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        {BG_ORBS.map((o, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: o.top, left: o.left,
              width: o.size, height: o.size,
              borderRadius: "50%",
              background: o.color,
              opacity: 0.82,
              boxShadow: `0 2px 12px ${o.color}55`,
            }}
          />
        ))}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════════════════ */
const STATS = [
  { val: "500+", label: "Curriculum-aligned\nmodules", grad: "linear-gradient(90deg,#3b82f6,#8b5cf6)" },
  { val: "40-min", label: "Structured\nsessions", grad: "linear-gradient(90deg,#ec4899,#8b5cf6)" },
  { val: "8", label: "Teacher-guided\ndelivery", grad: "linear-gradient(90deg,#f59e0b,#ef4444)" },
  { val: "10,000+", label: "Students Engaged", grad: "linear-gradient(90deg,#10b981,#3b82f6)" },
  { val: "260", label: "Schools Partnered", grad: "linear-gradient(90deg,#8b5cf6,#ec4899)" },
  { val: "95%", label: "Concept Clarity\nimprovement", grad: "linear-gradient(90deg,#06b6d4,#3b82f6)" },
];

/* ═══════════════════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════════════════ */
export default function Hero() {
  const { isMobile, isTablet } = useScreenSize();

  const containerBase: React.CSSProperties = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    background: "url('/hero-background.webp') center/cover no-repeat",
    backgroundColor: "#f6f8ff",
    fontFamily: "'VAG Rounded', sans-serif",
  };

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    return (
      <div id="vision" style={{ ...containerBase, minHeight: "100vh" }}>
        <HeroBackground />

        <div style={{
          position: "relative",
          zIndex: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px 20px 32px",
          gap: 0,
        }}>
          {/* ── TEXT ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ width: "100%", textAlign: "center" }}
          >

            <h1 style={{
              fontSize: "clamp(32px, 8.5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#0f172a",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}>
              What if students<br />
              didn&#39;t have to{" "}
              <span style={{
                background: "linear-gradient(90deg, #e040fb 0%, #7c3aed 55%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                imagine
              </span><br />
              anymore?
            </h1>

            <p style={{
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 1.6,
              color: "#475569",
              margin: "0 0 28px",
            }}>
              We believe clarity begins with experience.{" "}
              SparkVR transforms abstract concepts into observable understanding.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center", marginBottom: 40 }}>
              <motion.a
                href="#spark-features"
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                  color: "#ffffff",
                  padding: "14px 32px",
                  borderRadius: 40,
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.14em",
                  textDecoration: "none",
                  boxShadow: "0 10px 28px rgba(29,78,216,0.3)",
                }}
              >
                SEE IT DIFFERENTLY
              </motion.a>

              <motion.a
                href="/contact"
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "rgba(255,255,255,0.5)",
                  border: "2px solid #ffffff",
                  color: "#1e293b",
                  padding: "12px 32px",
                  borderRadius: 40,
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.14em",
                  textDecoration: "none",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                }}
              >
                <motion.span animate={{ rotateY: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>✨</motion.span>
                BOOK FREE WORKSHOP
              </motion.a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 16, marginBottom: 8 }}>
              {[
                { label: "Curriculum-aligned\nmodules", icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>) },
                { label: "40-minute\nstructured sessions", icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>) },
                { label: "Teacher-guided\ndelivery", icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "8px 4px", textAlign: "center" }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,82,204,0.08)", flexShrink: 0 }}>{f.icon}</div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#1e293b", lineHeight: 1.3, whiteSpace: "pre-line" }}>{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 2×2 MODULE GRID ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px 24px",
            justifyItems: "center",
            width: "100%",
            marginBottom: 40,
          }}>
            {/* ATOMS */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
            >
              <div style={{ ...GLASS_STYLE, width: 130, height: 130 }}>
                <Canvas camera={{ position: [0, 0, 3.6], fov: 42 }} gl={{ alpha: true, antialias: true }}
                  style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                  <ambientLight intensity={2.2} />
                  <directionalLight position={[5, 6, 5]} intensity={3.2} />
                  <Suspense fallback={null}><Atom3D /></Suspense>
                </Canvas>
              </div>
              <div style={{ ...LABEL_STYLE, position: "relative", left: "auto", transform: "none", marginTop: 10 }}>ATOMS</div>
            </motion.div>

            {/* HUMAN ANATOMY */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
            >
              <div style={{ ...GLASS_STYLE, width: 120, height: 120 }}>
                <div style={{ position: "absolute", width: "76%", height: "76%", borderRadius: "50%", background: "rgba(255,255,255,0.6)" }} />
                <img loading="lazy" decoding="async" src="/anatomy.webp" alt="Human Anatomy"
                  style={{
                    width: "78%", height: "78%", objectFit: "contain", position: "relative", zIndex: 1,
                    filter: "drop-shadow(0 6px 18px rgba(220,50,50,0.22)) contrast(1.05) brightness(1.1)"
                  }} />
              </div>
              <div style={{ ...LABEL_STYLE, position: "relative", left: "auto", transform: "none", marginTop: 10, color: "#7c3aed" }}>HUMAN ANATOMY</div>
            </motion.div>

            {/* CELLS */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
            >
              <div style={{ ...GLASS_STYLE, width: 120, height: 120 }}>
                <div style={{ position: "absolute", width: "80%", height: "80%", borderRadius: "50%", background: "rgba(255,255,255,0.55)" }} />
                <img loading="lazy" decoding="async" src="cell1.webp" alt="Cell Structure"
                  style={{
                    width: "82%", height: "82%", objectFit: "contain", position: "relative", zIndex: 1,
                    filter: "drop-shadow(0 6px 16px rgba(80,200,120,0.3)) contrast(1.05) brightness(1.1)"
                  }} />
              </div>
              <div style={{ ...LABEL_STYLE, position: "relative", left: "auto", transform: "none", marginTop: 10 }}>CELLS</div>
            </motion.div>

            {/* SPACE / SATURN */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
            >
              <div style={{ ...GLASS_STYLE, width: 130, height: 130 }}>
                <Canvas camera={{ position: [0, 0, 3.8], fov: 42 }} gl={{ alpha: true, antialias: true }}
                  style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                  <ambientLight intensity={1.8} />
                  <directionalLight position={[-5, 6, 5]} intensity={3.5} />
                  <Suspense fallback={null}><Saturn3D /></Suspense>
                </Canvas>
              </div>
              <div style={{ ...LABEL_STYLE, position: "relative", left: "auto", transform: "none", marginTop: 10, color: "#7c3aed" }}>SPACE</div>
            </motion.div>
          </div>

          {/* ── STATS (3×2 grid on mobile) ── */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px 6px",
              padding: "12px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(220,230,255,0.2))",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 24,
              boxShadow: "0 12px 30px rgba(60,40,150,0.06)",
            }}
          >
            {STATS.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center", justifyContent: "center", textAlign: "center", padding: "10px 4px" }}>
                <span style={{ fontSize: 17, fontWeight: 800, lineHeight: 1, background: s.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.val}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#334155", lineHeight: 1.3, whiteSpace: "pre-line" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  /* ── TABLET LAYOUT ── */
  if (isTablet) {
    const bubSz = 118;
    return (
      <div id="vision" style={{ ...containerBase, height: "100vh", minHeight: 600 }}>
        <HeroBackground />

        {/* Student image — smaller, shifted left */}
        <div style={{ position: "absolute", bottom: -30, left: "28%", transform: "translateX(-8%)", zIndex: 10, pointerEvents: "none" }}>
          <motion.img loading="eager" decoding="async" fetchPriority="high" src="/student_proper.webp" alt="Student with VR headset"
            style={{
              height: "85vh", objectFit: "contain", objectPosition: "top", display: "block",
              filter: "drop-shadow(0 20px 40px rgba(60,40,150,0.28))",
            }} />
        </div>

        {/* Bubbles — 2 top, 2 bottom */}
        <div style={{ position: "absolute", top: "12%", left: "50%", zIndex: 12, pointerEvents: "auto" }}>
          <motion.div style={{ transformStyle: "preserve-3d" }}>
            <div style={{ ...GLASS_STYLE, width: bubSz, height: bubSz }}>
              <Canvas camera={{ position: [0, 0, 3.6], fov: 42 }} gl={{ alpha: true, antialias: true }} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                <ambientLight intensity={2.2} /><directionalLight position={[5, 6, 5]} intensity={3.2} />
                <Suspense fallback={null}><Atom3D /></Suspense>
              </Canvas>
            </div>
            <div style={{ ...LABEL_STYLE, bottom: -14 }}>ATOMS</div>
          </motion.div>
        </div>
        <div style={{ position: "absolute", top: "12%", left: "76%", zIndex: 12, pointerEvents: "auto" }}>
          <motion.div style={{ transformStyle: "preserve-3d" }}>
            <div style={{ ...GLASS_STYLE, width: bubSz - 10, height: bubSz - 10 }}>
              <div style={{ position: "absolute", width: "76%", height: "76%", borderRadius: "50%", background: "rgba(255,255,255,0.6)" }} />
              <img loading="lazy" decoding="async" src="/anatomy.webp" alt="Human Anatomy" style={{ width: "78%", height: "78%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 6px 18px rgba(220,50,50,0.22))" }} />
            </div>
            <div style={{ ...LABEL_STYLE, bottom: -14, color: "#7c3aed", fontSize: 9 }}>HUMAN ANATOMY</div>
          </motion.div>
        </div>
        <div style={{ position: "absolute", top: "54%", left: "48%", zIndex: 12, pointerEvents: "auto" }}>
          <motion.div style={{ transformStyle: "preserve-3d" }}>
            <div style={{ ...GLASS_STYLE, width: bubSz, height: bubSz }}>
              <div style={{ position: "absolute", width: "80%", height: "80%", borderRadius: "50%", background: "rgba(255,255,255,0.55)" }} />
              <img loading="lazy" decoding="async" src="/cell1.webp" alt="Cell Structure" style={{ width: "82%", height: "82%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 6px 16px rgba(80,200,120,0.3))" }} />
            </div>
            <div style={{ ...LABEL_STYLE, bottom: -14 }}>CELLS</div>
          </motion.div>
        </div>
        <div style={{ position: "absolute", top: "54%", left: "78%", zIndex: 12, pointerEvents: "auto" }}>
          <motion.div style={{ transformStyle: "preserve-3d" }}>
            <div style={{ ...GLASS_STYLE, width: bubSz, height: bubSz }}>
              <Canvas camera={{ position: [0, 0, 3.8], fov: 42 }} gl={{ alpha: true, antialias: true }} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                <ambientLight intensity={1.8} /><directionalLight position={[-5, 6, 5]} intensity={3.5} />
                <Suspense fallback={null}><Saturn3D /></Suspense>
              </Canvas>
            </div>
            <div style={{ ...LABEL_STYLE, bottom: -14, color: "#7c3aed" }}>SPACE</div>
          </motion.div>
        </div>

        {/* Text — left column, narrower on tablet */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column", zIndex: 30, paddingLeft: "clamp(20px,4vw,40px)", paddingTop: "clamp(120px,16vh,160px)", paddingBottom: "80px", maxWidth: "46%" }}>
          <div>

            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
              style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.18, color: "#0f172a", margin: "0 0 18px", letterSpacing: "-0.02em" }}>
              What if students<br />
              didn&#39;t have to{" "}
              <span style={{ background: "linear-gradient(90deg,#e040fb 0%,#7c3aed 55%,#38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>imagine</span><br />
              anymore?
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.18 }}
              style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.6, color: "#475569", margin: "0 0 28px" }}>
              We believe clarity begins with experience. SparkVR transforms abstract concepts into observable understanding.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <motion.a href="#spark-features" whileTap={{ scale: 0.97 }} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#1d4ed8 0%,#2563eb 60%,#38bdf8 100%)", color: "#fff", padding: "13px 28px", borderRadius: 40, fontSize: 12, fontWeight: 700, letterSpacing: "0.13em", textDecoration: "none", boxShadow: "0 10px 28px rgba(29,78,216,0.3)" }}>
                SEE IT DIFFERENTLY
              </motion.a>
              <motion.a href="/contact" whileTap={{ scale: 0.97 }} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.5)", border: "2px solid #fff", color: "#1e293b", padding: "11px 28px", borderRadius: 40, fontSize: 12, fontWeight: 700, letterSpacing: "0.13em", textDecoration: "none", backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
                ✨ BOOK FREE WORKSHOP
              </motion.a>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 24, marginBottom: 8 }}>
              {[
                { label: "Curriculum-aligned\nmodules", icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>) },
                { label: "40-minute\nstructured sessions", icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>) },
                { label: "Teacher-guided\ndelivery", icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6, padding: "8px 0" }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,82,204,0.08)", flexShrink: 0 }}>{f.icon}</div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#1e293b", lineHeight: 1.3, whiteSpace: "pre-line" }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar — aligned right at bottom, on top of student */}
        <div style={{ position: "absolute", bottom: 5, left: "52%", right: "2%", zIndex: 40 }}>
          <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "6px", padding: "8px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.6), rgba(220,230,255,0.3))",
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.7)", borderRadius: 20,
              boxShadow: "0 12px 30px rgba(60,40,150,0.08)"
            }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                display: "flex", flexDirection: "column", gap: 4,
                alignItems: "center", textAlign: "center",
                padding: "16px 10px",
                background: "rgba(255,255,255,0.45)",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.6)",
              }}>
                <span style={{ fontSize: 17, fontWeight: 900, lineHeight: 1, background: s.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.val}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#334155", lineHeight: 1.4, whiteSpace: "pre-line" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  /* ── DESKTOP LAYOUT (unchanged) ── */
  return (
    <div
      id="vision"
      style={{
        ...containerBase,
        height: "100vh",
        minHeight: 640,
      }}
    >
      <HeroBackground />

      <div style={{
        position: "relative",
        maxWidth: 1400,
        margin: "0 auto",
        width: "100%",
        height: "100%",
      }}>

        {/* ── STUDENT IMAGE ── */}
        <div style={{
          position: "absolute",
          bottom: 0, left: "32%",
          transform: "translateX(+8%)",
          zIndex: 10, pointerEvents: "none",
        }}>
          <motion.div style={{ perspective: 1000, transformStyle: "preserve-3d" }}>
            <motion.img loading="lazy" decoding="async"
              src="/student_proper.webp"
              alt="Student with VR headset"
              style={{
                height: "92vh",
                objectFit: "contain",
                objectPosition: "bottom",
                display: "block",
                filter: "drop-shadow(0 30px 60px rgba(60,40,150,0.3))",
              }}
            />
          </motion.div>
        </div>

        {/* ── ATOMS (Top-Left) ── */}
        <div style={{ position: "absolute", top: "14%", left: "48%", zIndex: 12, pointerEvents: "auto" }}>
          <motion.div
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.15, y: -10, boxShadow: "0 28px 64px rgba(59,130,246,0.45), inset 0 2px 24px rgba(255,255,255,0.95)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ ...GLASS_STYLE, width: 168, height: 168, cursor: "pointer" }}
            >
              <Canvas
                camera={{ position: [0, 0, 3.6], fov: 42 }}
                gl={{ alpha: true, antialias: true }}
                style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
              >
                <ambientLight intensity={2.2} />
                <directionalLight position={[5, 6, 5]} intensity={3.2} />
                <Suspense fallback={null}><Atom3D /></Suspense>
              </Canvas>
            </motion.div>
            <div style={{ ...LABEL_STYLE, bottom: -14 }}>ATOMS</div>
          </motion.div>
        </div>

        {/* ── HUMAN ANATOMY (Top-Right) ── */}
        <div style={{ position: "absolute", top: "14%", left: "80%", zIndex: 12, pointerEvents: "auto" }}>
          <motion.div
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.15, y: -10, boxShadow: "0 28px 64px rgba(220,50,50,0.35), inset 0 2px 24px rgba(255,255,255,0.95)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ ...GLASS_STYLE, width: 148, height: 148, cursor: "pointer" }}
            >
              <div style={{
                position: "absolute", width: "76%", height: "76%", borderRadius: "50%",
                background: "rgba(255,255,255,0.6)",
              }} />
              <img loading="lazy" decoding="async"
                src="/anatomy.webp"
                alt="Human Anatomy"
                style={{
                  width: "90%", height: "90%",
                  objectFit: "contain",
                  position: "relative", zIndex: 1,
                  filter: "drop-shadow(0 6px 18px rgba(220,50,50,0.22)) contrast(1.05) brightness(1.1)",
                }}
              />
            </motion.div>
            <div style={{ ...LABEL_STYLE, bottom: -14, color: "#7c3aed" }}>HUMAN ANATOMY</div>
          </motion.div>
        </div>

        {/* ── CELLS (Mid-Left) ── */}
        <div style={{ position: "absolute", top: "50%", left: "47%", zIndex: 12, pointerEvents: "auto" }}>
          <motion.div
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.15, y: -10, boxShadow: "0 28px 64px rgba(80,200,120,0.35), inset 0 2px 24px rgba(255,255,255,0.95)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ ...GLASS_STYLE, width: 155, height: 155, cursor: "pointer" }}
            >
              <div style={{
                position: "absolute", width: "80%", height: "80%", borderRadius: "50%",
                background: "rgba(255,255,255,0.55)",
              }} />
              <img loading="lazy" decoding="async"
                src="/cell1.webp"
                alt="Cell Structure"
                style={{
                  width: "82%", height: "82%",
                  objectFit: "contain",
                  position: "relative", zIndex: 1,
                  filter: "drop-shadow(0 6px 16px rgba(80,200,120,0.3)) contrast(1.05) brightness(1.1)",
                }}
              />
            </motion.div>
            <div style={{ ...LABEL_STYLE, bottom: -14 }}>CELLS</div>
          </motion.div>
        </div>

        {/* ── SPACE / SATURN (Mid-Right) ── */}
        <div style={{ position: "absolute", top: "50%", left: "84%", zIndex: 12, pointerEvents: "auto" }}>
          <motion.div
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.15, y: -10, boxShadow: "0 28px 64px rgba(180,130,50,0.35), inset 0 2px 24px rgba(255,255,255,0.95)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ ...GLASS_STYLE, width: 155, height: 155, cursor: "pointer" }}
            >
              <Canvas
                camera={{ position: [0, 0, 3.8], fov: 42 }}
                gl={{ alpha: true, antialias: true }}
                style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
              >
                <ambientLight intensity={1.8} />
                <directionalLight position={[-5, 6, 5]} intensity={3.5} />
                <Suspense fallback={null}><Saturn3D /></Suspense>
              </Canvas>
            </motion.div>
            <div style={{ ...LABEL_STYLE, bottom: -14, color: "#7c3aed" }}>SPACE</div>
          </motion.div>
        </div>

        {/* ── LEFT TEXT COLUMN ── */}
        <div style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          display: "flex", alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          zIndex: 30,
          paddingLeft: "clamp(20px, 4vw, 60px)",
          paddingTop: "clamp(100px, 14vh, 160px)",
          paddingBottom: "60px",
          maxWidth: "50%",
        }}>
          <div>
            <div style={{ maxWidth: "min(560px, 100%)" }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}
              >

              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
                style={{
                  fontSize: "clamp(42px, 4.5vw, 64px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: "#0f172a",
                  margin: "0 0 24px",
                  letterSpacing: "-0.02em",
                }}
              >
                What if students<br />
                didn&#39;t have to{" "}
                <span style={{
                  background: "linear-gradient(90deg, #e040fb 0%, #7c3aed 55%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  imagine
                </span><br />
                anymore?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "#475569",
                  margin: "0 0 40px",
                  maxWidth: 500,
                }}
              >
                We believe clarity begins with experience.<br />
                SparkVR transforms abstract concepts into observable understanding.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.32, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ display: "flex", alignItems: "center", gap: 20 }}
              >
                <motion.a
                  href="#spark-features"
                  whileHover={{ scale: 1.07, y: -4, boxShadow: "0 24px 50px rgba(29,78,216,0.42)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 12,
                    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                    color: "#ffffff",
                    padding: "16px 36px",
                    borderRadius: 40,
                    fontSize: 13, fontWeight: 700, letterSpacing: "0.14em",
                    textDecoration: "none",
                    boxShadow: "0 10px 28px rgba(29,78,216,0.3)",
                    cursor: "pointer",
                  }}
                >
                  SEE IT DIFFERENTLY
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.07, backgroundColor: "#ffffff", y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 12,
                    background: "rgba(255,255,255,0.5)",
                    border: "2px solid #ffffff",
                    color: "#1e293b",
                    padding: "14px 36px",
                    borderRadius: 40,
                    fontSize: 13, fontWeight: 700, letterSpacing: "0.14em",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  <motion.div animate={{ rotateY: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>✨</motion.div>
                  BOOK FREE WORKSHOP
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 32 }}
              >
                {[
                  { label: "Curriculum-aligned\nmodules", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>) },
                  { label: "40-minute\nstructured sessions", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>) },
                  { label: "Teacher-guided\ndelivery", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0052cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
                ].map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,82,204,0.08)", flexShrink: 0 }}>{f.icon}</div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#1e293b", lineHeight: 1.4, whiteSpace: "pre-line" }}>{f.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          right: 0,
          zIndex: 40,
        }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 32px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.65), rgba(220,230,255,0.35))",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1.5px solid rgba(255,255,255,0.75)",
              borderRadius: 24,
              boxShadow: "0 20px 50px rgba(60,40,150,0.08)",
            }}
          >
            {STATS.map((s, i) => (
              <React.Fragment key={i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.04 }}
                  style={{ display: "flex", flexDirection: "column", gap: 3, cursor: "pointer", padding: "4px 8px" }}
                >
                  <h3 style={{ fontSize: 23, fontWeight: 800, margin: 0, lineHeight: 1, background: s.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.val}</h3>
                  <p style={{ fontSize: 12.5, fontWeight: 700, color: "#334155", margin: 0, lineHeight: 1.3, maxWidth: 140, whiteSpace: "pre-line" }}>{s.label}</p>
                </motion.div>
                {i < 5 && <div style={{ width: 1, height: 34, background: "rgba(0,0,0,0.12)" }} />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* ── PAGINATION DOTS ── */}
        <div style={{
          position: "absolute", right: 22, top: "50%",
          transform: "translateY(-50%)", zIndex: 30,
          display: "flex", flexDirection: "column", gap: 10,
        }}>
          {[true, false, false, false].map((active, i) => (
            <motion.div
              key={i}
              animate={active ? { scale: [1, 1.4, 1], boxShadow: ["0 0 0px rgba(29,78,216,0)", "0 0 14px rgba(29,78,216,0.6)", "0 0 0px rgba(29,78,216,0)"] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              style={{
                width: active ? 9 : 7, height: active ? 9 : 7,
                borderRadius: "50%",
                background: active ? "#1d4ed8" : "rgba(100,116,139,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
