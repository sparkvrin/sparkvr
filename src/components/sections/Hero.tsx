"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  fontFamily: "'AR One Sans', sans-serif",
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
  { top: "9%",  left: "58%",  size: 18, color: "#3b82f6" },
  { top: "5%",  left: "70%",  size: 11, color: "#e0f2fe" },
  { top: "7%",  left: "82%",  size: 26, color: "#f472b6" },
  { top: "10%", left: "91%",  size: 12, color: "#38bdf8" },
  { top: "18%", left: "92%",  size: 14, color: "#818cf8" },
  { top: "30%", left: "96%",  size: 11, color: "#22d3ee" },
  { top: "52%", left: "94%",  size: 16, color: "#818cf8" },
  { top: "65%", left: "88%",  size: 44, color: "#fb923c" },
  { top: "72%", left: "96%",  size: 18, color: "#f472b6" },
  { top: "28%", left: "80%",  size: 14, color: "#e879f9" },
  { top: "78%", left: "60%",  size: 20, color: "#f472b6" },
];

/* ═══════════════════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════════════════ */
export default function Hero() {
  /* ── MULTI-DEPTH MOUSE PARALLAX ── */
  const mX = useMotionValue(0.5);
  const mY = useMotionValue(0.5);

  /* Depth 0 — background blobs (very subtle) */
  const bgX  = useSpring(useTransform(mX, [0,1], [-8,   8]),  { stiffness: 35, damping: 20 });
  const bgY  = useSpring(useTransform(mY, [0,1], [-5,   5]),  { stiffness: 35, damping: 20 });

  /* Depth 1 — BG orbs (most movement) */
  const orbX = useSpring(useTransform(mX, [0,1], [-52,  52]), { stiffness: 75, damping: 16 });
  const orbY = useSpring(useTransform(mY, [0,1], [-34,  34]), { stiffness: 75, damping: 16 });

  /* Depth 2 — student image */
  const imgX = useSpring(useTransform(mX, [0,1], [-20,  20]), { stiffness: 55, damping: 18 });
  const imgY = useSpring(useTransform(mY, [0,1], [-13,  13]), { stiffness: 55, damping: 18 });

  /* Depth 3 — atom + cell bubbles */
  const b1X  = useSpring(useTransform(mX, [0,1], [-34,  34]), { stiffness: 62, damping: 17 });
  const b1Y  = useSpring(useTransform(mY, [0,1], [-22,  22]), { stiffness: 62, damping: 17 });

  /* Depth 4 — anatomy + saturn bubbles (further, more parallax) */
  const b2X  = useSpring(useTransform(mX, [0,1], [-44,  44]), { stiffness: 68, damping: 17 });
  const b2Y  = useSpring(useTransform(mY, [0,1], [-28,  28]), { stiffness: 68, damping: 17 });

  /* Depth -1 — text column (counter-parallax for depth illusion) */
  const txtX = useSpring(useTransform(mX, [0,1], [15, -15]),  { stiffness: 30, damping: 22 });
  const txtY = useSpring(useTransform(mY, [0,1], [8,  -8]),   { stiffness: 30, damping: 22 });
  const txtRotX = useSpring(useTransform(mY, [0,1], [10, -10]), { stiffness: 40, damping: 20 });
  const txtRotY = useSpring(useTransform(mX, [0,1], [-10, 10]), { stiffness: 40, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mX.set(e.clientX / r.width);
    mY.set(e.clientY / r.height);
  };
  const onMouseLeave = () => { mX.set(0.5); mY.set(0.5); };

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        background: "url('/hero-background.webp') center/cover no-repeat",
        backgroundColor: "#f6f8ff",
        fontFamily: "'AR One Sans', sans-serif",
      }}
    >
      {/* ── BACKGROUND (gradient + glow blobs) with subtle parallax ── */}
      <motion.div style={{ x: bgX, y: bgY, position: "absolute", inset: "-3%", zIndex: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", inset: "3%",
          background: "linear-gradient(180deg, rgba(246,248,255,0.1) 0%, rgba(240,244,255,0.3) 40%, rgba(220,232,255,0.2) 65%, rgba(199,184,245,0.3) 82%, rgba(176,200,248,0.4) 100%)",
        }} />
        <div style={{
          position: "absolute", top: "8%", left: "35%",
          width: "60%", height: "75%",
          background: "radial-gradient(ellipse at 55% 45%, rgba(196,181,253,0.45) 0%, rgba(147,197,253,0.25) 45%, transparent 70%)",
          filter: "blur(55px)",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", left: "-5%", right: "-5%",
          height: "55%",
          background: "linear-gradient(180deg, transparent 0%, rgba(196,181,253,0.55) 35%, rgba(147,197,253,0.75) 65%, rgba(125,211,252,0.85) 100%)",
          filter: "blur(30px)",
          borderRadius: "50% 50% 0 0 / 30% 30% 0 0",
        }} />
      </motion.div>

      {/* ── DEPTH RINGS (slow counter-rotating, adds premium depth) ── */}
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

      {/* ── BG ORBS GROUP with parallax ── */}
      <motion.div className="hero-bg-orbs" style={{ x: orbX, y: orbY, position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        {BG_ORBS.map((o, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, i % 2 === 0 ? -14 : 14, 0], x: [0, i % 3 === 0 ? 6 : -6, 0] }}
            transition={{ duration: 5 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
            style={{
              position: "absolute",
              top: o.top, left: o.left,
              width: o.size, height: o.size,
              borderRadius: "50%",
              background: o.color,
              opacity: 0.82,
              filter: "blur(0.5px)",
              boxShadow: `0 2px 12px ${o.color}55`,
            }}
          />
        ))}
      </motion.div>

      {/* ── STUDENT IMAGE with parallax wrapper ── */}
      <div className="hero-student-img" style={{
        position: "absolute",
        bottom: -28, left: "31.50%",
        transform: "translateX(+7%)",
        zIndex: 10, pointerEvents: "none",
      }}>
        <motion.div style={{ x: imgX, y: imgY, perspective: 1000, transformStyle: "preserve-3d" }}>
          <motion.img
            loading="eager"
            decoding="async"
            fetchPriority="low"
            src="/student_proper.webp"
            alt="Student with VR headset"
            animate={{ 
              y: [0, -18, 0],
              rotateX: [0, 3, 0, -3, 0],
              rotateY: [0, -3, 0, 3, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              height: "88vh",
              objectFit: "contain",
              objectPosition: "top",
              display: "block",
              filter: "drop-shadow(0 30px 60px rgba(60,40,150,0.3))",
              transform: "translateZ(50px)"
            }}
          />
        </motion.div>
      </div>

      {/* ── ATOMS (Top-Left) with parallax ── */}
      <div className="hero-bubble" style={{ position: "absolute", top: "14%", left: "48%", zIndex: 12, pointerEvents: "none" }}>
        <motion.div style={{ x: b1X, y: b1Y, perspective: 800 }}>
          <motion.div
            animate={{ y: [0, -18, 0], rotateX: [0, 5, 0], rotateY: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.09, boxShadow: "0 28px 64px rgba(59,130,246,0.28), inset 0 2px 24px rgba(255,255,255,0.95)" }}
              transition={{ duration: 0.3 }}
              style={{ ...GLASS_STYLE, width: 168, height: 168 }}
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
        </motion.div>
      </div>

      {/* ── HUMAN ANATOMY (Top-Right) with parallax ── */}
      <div className="hero-bubble" style={{ position: "absolute", top: "14%", left: "80%", zIndex: 12, pointerEvents: "none" }}>
        <motion.div style={{ x: b2X, y: b2Y, perspective: 800 }}>
          <motion.div
            animate={{ y: [0, -14, 0], rotateX: [0, -4, 0], rotateY: [0, 4, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.09, boxShadow: "0 28px 64px rgba(220,50,50,0.22), inset 0 2px 24px rgba(255,255,255,0.95)" }}
              transition={{ duration: 0.3 }}
              style={{ ...GLASS_STYLE, width: 148, height: 148 }}
            >
              <div style={{
                position: "absolute", width: "76%", height: "76%", borderRadius: "50%",
                background: "rgba(255,255,255,0.6)",
              }} />
              <img loading="lazy" decoding="async"
                src="/anatomy.webp"
                alt="Human Anatomy"
                style={{
                  width: "78%", height: "78%",
                  objectFit: "contain",
                  position: "relative", zIndex: 1,
                  filter: "drop-shadow(0 6px 18px rgba(220,50,50,0.22)) contrast(1.05) brightness(1.1)",
                }}
              />
            </motion.div>
            <div style={{ ...LABEL_STYLE, bottom: -14, color: "#7c3aed" }}>HUMAN ANATOMY</div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── CELLS (Mid-Left) with parallax ── */}
      <div className="hero-bubble" style={{ position: "absolute", top: "50%", left: "47%", zIndex: 12, pointerEvents: "none" }}>
        <motion.div style={{ x: b1X, y: b1Y, perspective: 800 }}>
          <motion.div
            animate={{ y: [0, 16, 0], rotateX: [0, 6, 0], rotateY: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.09, boxShadow: "0 28px 64px rgba(80,200,120,0.24), inset 0 2px 24px rgba(255,255,255,0.95)" }}
              transition={{ duration: 0.3 }}
              style={{ ...GLASS_STYLE, width: 155, height: 155 }}
            >
              <div style={{
                position: "absolute", width: "80%", height: "80%", borderRadius: "50%",
                background: "rgba(255,255,255,0.55)",
              }} />
              <img loading="lazy" decoding="async"
                src="/cell_proper.webp"
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
        </motion.div>
      </div>

      {/* ── SPACE / SATURN (Mid-Right) with parallax ── */}
      <div className="hero-bubble" style={{ position: "absolute", top: "50%", left: "84%", zIndex: 12, pointerEvents: "none" }}>
        <motion.div style={{ x: b2X, y: b2Y, perspective: 800 }}>
          <motion.div
            animate={{ y: [0, 14, 0], rotateX: [0, -5, 0], rotateY: [0, 5, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ scale: 1.09, boxShadow: "0 28px 64px rgba(180,130,50,0.22), inset 0 2px 24px rgba(255,255,255,0.95)" }}
              transition={{ duration: 0.3 }}
              style={{ ...GLASS_STYLE, width: 155, height: 155 }}
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
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════
          LEFT TEXT COLUMN — counter-parallax
      ══════════════════════════════════════════════ */}
      <div
        className="hero-text-column"
        style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          display: "flex", alignItems: "center",
          zIndex: 30,
          paddingLeft: "clamp(24px, 5.5vw, 80px)",
          paddingBottom: "80px",
        }}
      >
        <motion.div style={{ x: txtX, y: txtY, rotateX: txtRotX, rotateY: txtRotY, transformStyle: "preserve-3d" }}>
          <div style={{ maxWidth: 600, transform: "translateZ(40px)" }}>
            <motion.h1
              initial={{ opacity: 0, y: 32, rotateX: 18 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.1, ease: [0.215, 0.61, 0.355, 1] }}
              style={{
                fontSize: "clamp(42px, 4.5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#0f172a",
                margin: "0 0 24px",
                letterSpacing: "-0.02em",
                transformPerspective: 700,
              }}
            >
              What if students didn&#39;t have to <br />
              <span style={{
                background: "linear-gradient(90deg, #e040fb 0%, #7c3aed 55%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                imagine
              </span>{" "}anymore?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.95, delay: 0.18, ease: [0.215, 0.61, 0.355, 1] }}
              style={{
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.6,
                color: "#475569",
                margin: "0 0 40px",
                maxWidth: 500,
                transformPerspective: 600,
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
                href="/services"
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
                  transformStyle: "preserve-3d"
                }}
              >
                <motion.div animate={{ rotateY: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ transform: "translateZ(10px)" }}>✨</motion.div>
                BOOK FREE WORKSHOP
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div
        className="hero-stats-bar"
        style={{
          position: "absolute",
          bottom: 15,
          left: "62%",
          transform: "translateX(-50%)",
          width: "72%",
          maxWidth: 880,
          zIndex: 40,
        }}
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 24px",
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderTop: "1.5px solid rgba(255, 255, 255, 0.3)",
            borderRadius: 24,
            boxShadow: "0 20px 40px rgba(0,0,0,0.05), inset 0 2px 10px rgba(255,255,255,0.2)",
          }}
        >
          {[
            { val: "500+",   label: "Curriculum-aligned\nmodules",       grad: "linear-gradient(90deg,#3b82f6,#8b5cf6)" },
            { val: "40-min", label: "Structured\nsessions",               grad: "linear-gradient(90deg,#ec4899,#8b5cf6)" },
            { val: "8",      label: "Teacher-guided\ndelivery",            grad: "linear-gradient(90deg,#f59e0b,#ef4444)" },
            { val: "10,000+",label: "Students Engaged",                   grad: "linear-gradient(90deg,#10b981,#3b82f6)" },
            { val: "260",    label: "Schools Partnered",                   grad: "linear-gradient(90deg,#8b5cf6,#ec4899)" },
            { val: "95%",    label: "Concept Clarity\nimprovement",        grad: "linear-gradient(90deg,#06b6d4,#3b82f6)" },
          ].map((s, i) => (
            <React.Fragment key={i}>
              <motion.div
                whileHover={{ y: -12, scale: 1.15, rotateX: 15, rotateY: -10, z: 20 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                style={{ display: "flex", flexDirection: "column", gap: 2, transformStyle: "preserve-3d", cursor: "pointer", padding: "10px" }}
              >
                <h3 style={{ fontSize: 19, fontWeight: 800, margin: 0, lineHeight: 1, background: s.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", transform: "translateZ(20px)" }}>{s.val}</h3>
                <p style={{ fontSize: 10.5, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.3, maxWidth: 110, whiteSpace: "pre-line", transform: "translateZ(10px)" }}>{s.label}</p>
              </motion.div>
              {i < 5 && <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.2)" }} />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ── PAGINATION DOTS ── */}
      <div
        className="hero-pagination-dots"
        style={{
          position: "absolute", right: 22, top: "50%",
          transform: "translateY(-50%)", zIndex: 30,
          display: "flex", flexDirection: "column", gap: 10,
        }}
      >
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
  );
}
