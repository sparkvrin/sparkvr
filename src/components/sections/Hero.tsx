"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
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
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.8} roughness={0.1} metalness={0.4} />
      </mesh>
      {/* 3 orbital rings + electrons */}
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
      {/* Planet body */}
      <mesh>
        <sphereGeometry args={[0.52, 32, 32]} />
        <meshStandardMaterial color="#d4a055" roughness={0.55} metalness={0.05} />
      </mesh>
      {/* Ring 1 */}
      <mesh rotation={[Math.PI / 2.15, 0, 0]}>
        <torusGeometry args={[0.9, 0.13, 2, 80]} />
        <meshStandardMaterial color="#c0893a" roughness={0.6} transparent opacity={0.92} />
      </mesh>
      {/* Ring 2 */}
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
   BACKGROUND ORBS (Floating dots like the reference)
═══════════════════════════════════════════════════════ */
const BG_ORBS = [
  // top row
  { top: "8%",  left: "20%",  size: 22, color: "#f472b6" },
  { top: "6%",  left: "36%",  size: 14, color: "#22d3ee" },
  { top: "9%",  left: "58%",  size: 18, color: "#3b82f6" },
  { top: "5%",  left: "70%",  size: 11, color: "#e0f2fe" },
  { top: "7%",  left: "82%",  size: 26, color: "#f472b6" },
  { top: "10%", left: "91%",  size: 12, color: "#38bdf8" },
  // left side
  { top: "22%", left: "4%",   size: 40, color: "#3b82f6" },
  { top: "38%", left: "2%",   size: 20, color: "#f9a8d4" },
  { top: "58%", left: "3%",   size: 12, color: "#22d3ee" },
  { top: "70%", left: "8%",   size: 50, color: "#93c5fd" },
  // right side
  { top: "18%", left: "92%",  size: 14, color: "#818cf8" },
  { top: "30%", left: "96%",  size: 11, color: "#22d3ee" },
  { top: "52%", left: "94%",  size: 16, color: "#818cf8" },
  { top: "65%", left: "88%",  size: 44, color: "#fb923c" },
  { top: "72%", left: "96%",  size: 18, color: "#f472b6" },
  // mid scatter
  { top: "20%", left: "26%",  size: 16, color: "#f9a8d4" },
  { top: "28%", left: "80%",  size: 14, color: "#e879f9" },
  { top: "42%", left: "15%",  size: 12, color: "#fbbf24" },
  { top: "75%", left: "20%",  size: 28, color: "#fb923c" },
  { top: "78%", left: "60%",  size: 20, color: "#f472b6" },
  { top: "82%", left: "40%",  size: 38, color: "#60a5fa" },
];

/* ═══════════════════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        background: "#f6f8ff",
        fontFamily: "'AR One Sans', sans-serif",
      }}
    >
      {/* ── BACKGROUND: TOP WHITE → BOTTOM PURPLE-BLUE WAVE ── */}
      {/* Base gradient matching reference exactly */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(180deg, #f6f8ff 0%, #f0f4ff 40%, #dce8ff 65%, #c7b8f5 82%, #b0c8f8 92%, #a8d8f0 100%)",
      }} />
      {/* Extra glow blob center-right */}
      <div style={{
        position: "absolute", top: "8%", left: "35%",
        width: "60%", height: "75%",
        background: "radial-gradient(ellipse at 55% 45%, rgba(196,181,253,0.45) 0%, rgba(147,197,253,0.25) 45%, transparent 70%)",
        filter: "blur(55px)", zIndex: 0,
      }} />
      {/* Bottom large wave glow */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%", right: "-5%",
        height: "55%",
        background: "linear-gradient(180deg, transparent 0%, rgba(196,181,253,0.55) 35%, rgba(147,197,253,0.75) 65%, rgba(125,211,252,0.85) 100%)",
        filter: "blur(30px)",
        borderRadius: "50% 50% 0 0 / 30% 30% 0 0",
        zIndex: 0,
      }} />

      {/* ── FLOATING BACKGROUND ORBS ── */}
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
            zIndex: 1,
            pointerEvents: "none",
            boxShadow: `0 2px 12px ${o.color}55`,
          }}
        />
      ))}

      {/* ── STUDENT IMAGE (positioned right of center ~55% from left) ── */}
      <motion.img
        src="/student_proper.png"
        alt="Student with VR headset"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: 76,
          left: "31.50%",
          transform: "translateX(-50%)",
          height: "88vh",
          objectFit: "contain",
          objectPosition: "top",
          zIndex: 10,
          pointerEvents: "none",
          filter: "drop-shadow(0 20px 48px rgba(60,40,150,0.18))",
        }}
      />


      {/* ── ATOMS (Top-Left) ── */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        style={{ position: "absolute", top: "14%", left: "48%", zIndex: 12, pointerEvents: "none" }}
      >
        <div style={{ ...GLASS_STYLE, width: 168, height: 168 }}>
          <Canvas
            camera={{ position: [0, 0, 3.6], fov: 42 }}
            gl={{ alpha: true, antialias: true }}
            style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
          >
            <ambientLight intensity={2.2} />
            <directionalLight position={[5, 6, 5]} intensity={3.2} />
            <Suspense fallback={null}>
              <Atom3D />
            </Suspense>
          </Canvas>
        </div>
        <div style={{ ...LABEL_STYLE, bottom: -14 }}>ATOMS</div>
      </motion.div>

      {/* ── HUMAN ANATOMY (Top-Right) ── */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{ position: "absolute", top: "14%", left: "80%", zIndex: 12, pointerEvents: "none" }}
      >
        <div style={{ ...GLASS_STYLE, width: 148, height: 148 }}>
          {/* White backing to eliminate image background */}
          <div style={{
            position: "absolute", width: "76%", height: "76%", borderRadius: "50%",
            background: "rgba(255,255,255,0.6)",
          }} />
          <img
            src="/anatomy.png"
            alt="Human Anatomy"
            style={{
              width: "78%", height: "78%",
              objectFit: "contain",
              position: "relative", zIndex: 1,
              filter: "drop-shadow(0 6px 18px rgba(220,50,50,0.22)) contrast(1.05) brightness(1.1)",
            }}
          />
        </div>
        <div style={{ ...LABEL_STYLE, bottom: -14, color: "#7c3aed" }}>HUMAN ANATOMY</div>
      </motion.div>

      {/* ── CELLS (Mid-Left) ── */}
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", top: "50%", left: "47%", zIndex: 12, pointerEvents: "none" }}
      >
        <div style={{ ...GLASS_STYLE, width: 155, height: 155 }}>
          <div style={{
            position: "absolute", width: "80%", height: "80%", borderRadius: "50%",
            background: "rgba(255,255,255,0.55)",
          }} />
          <img
            src="/cell_proper.png"
            alt="Cell Structure"
            style={{
              width: "82%", height: "82%",
              objectFit: "contain",
              position: "relative", zIndex: 1,
              filter: "drop-shadow(0 6px 16px rgba(80,200,120,0.3)) contrast(1.05) brightness(1.1)",
            }}
          />
        </div>
        <div style={{ ...LABEL_STYLE, bottom: -14 }}>CELLS</div>
      </motion.div>

      {/* ── SPACE / SATURN (Mid-Right) ── */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ position: "absolute", top: "50%", left: "84%", zIndex: 12, pointerEvents: "none" }}
      >
        <div style={{ ...GLASS_STYLE, width: 155, height: 155 }}>
          <Canvas
            camera={{ position: [0, 0, 3.8], fov: 42 }}
            gl={{ alpha: true, antialias: true }}
            style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
          >
            <ambientLight intensity={1.8} />
            <directionalLight position={[-5, 6, 5]} intensity={3.5} />
            <Suspense fallback={null}>
              <Saturn3D />
            </Suspense>
          </Canvas>
        </div>
        <div style={{ ...LABEL_STYLE, bottom: -14, color: "#7c3aed" }}>SPACE</div>
      </motion.div>

      {/* ══════════════════════════════════════════════
          LEFT TEXT COLUMN — exactly as per reference
      ══════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          display: "flex", alignItems: "center",
          zIndex: 30,
          paddingLeft: "clamp(24px, 5.5vw, 80px)",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: 600 }}>

          {/* Badge pill */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(0,82,204,0.15)",
            borderRadius: 30, padding: "8px 20px",
            marginBottom: 28,
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", color: "#1d4ed8", textTransform: "uppercase" }}>
              THE FUTURE OF LEARNING
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: "clamp(42px, 4.5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#0f172a",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}>
            What if students didn&#39;t have to <br />
            <span style={{
              background: "linear-gradient(90deg, #e040fb 0%, #7c3aed 55%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              imagine
            </span>{" "}anymore?
          </h1>

          {/* Sub-text */}
          <p style={{
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.6,
            color: "#475569",
            margin: "0 0 40px",
            maxWidth: 500,
          }}>
            We believe clarity begins with experience.<br />
            SparkVR transforms abstract concepts into observable understanding.
          </p>

          {/* Buttons row */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* CTA Button 1 */}
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05, boxShadow: "0 18px 40px rgba(29,78,216,0.4)" }}
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

            {/* CTA Button 2 */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
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
              BOOK FREE WORKSHOP
            </motion.a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM STATS BAR (Transparent / Glassmorphic) Overlapping Student ── */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "62%",
        transform: "translateX(-50%)",
        width: "82%",
        maxWidth: 1000,
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
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            borderRadius: 20,
            boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
          }}
        >
          {/* Stat 1 */}
          <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
             <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, lineHeight: 1, background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>500+</h3>
             <p style={{ fontSize: 11, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.3, maxWidth: 120 }}>Curriculum-aligned<br/>modules</p>
          </motion.div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.7)" }} />

          {/* Stat 2 */}
          <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
             <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, lineHeight: 1, background: "linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>40-min</h3>
             <p style={{ fontSize: 11, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.3, maxWidth: 120 }}>Structured<br/>sessions</p>
          </motion.div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.7)" }} />

          {/* Stat 3 */}
          <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
             <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, lineHeight: 1, background: "linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>8</h3>
             <p style={{ fontSize: 11, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.3, maxWidth: 120 }}>Teacher-guided<br/>delivery</p>
          </motion.div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.7)" }} />

          {/* Stat 4 */}
          <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
             <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, lineHeight: 1, background: "linear-gradient(90deg, #10b981 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>10,000+</h3>
             <p style={{ fontSize: 11, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.3 }}>Students Engaged</p>
          </motion.div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.7)" }} />

          {/* Stat 5 */}
          <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
             <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, lineHeight: 1, background: "linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>260</h3>
             <p style={{ fontSize: 11, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.3 }}>Schools Partnered</p>
          </motion.div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.7)" }} />

          {/* Stat 6 */}
          <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
             <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, lineHeight: 1, background: "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>95%</h3>
             <p style={{ fontSize: 11, fontWeight: 700, color: "#475569", margin: 0, lineHeight: 1.3, maxWidth: 120 }}>Concept Clarity<br/>improvement</p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── PAGINATION DOTS (Right edge, vertical) ── */}
      <div style={{
        position: "absolute", right: 22, top: "50%",
        transform: "translateY(-50%)", zIndex: 30,
        display: "flex", flexDirection: "column", gap: 10,
      }}>
        {[true, false, false, false].map((active, i) => (
          <div key={i} style={{
            width: active ? 9 : 7, height: active ? 9 : 7,
            borderRadius: "50%",
            background: active ? "#1d4ed8" : "rgba(100,116,139,0.3)",
            transition: "all 0.3s",
          }} />
        ))}
      </div>



    </div>
  );
}
