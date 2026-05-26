"use client";

import React, { useRef, Suspense, useState, useEffect } from "react";

function useScreenWidth() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ═══════════════════════════════════════════
   ELECTRON DOT
═══════════════════════════════════════════ */
function ElectronDot({ seed, r, color = "#a78bfa" }: { seed: number; r: number; color?: string }) {
  const m = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!m.current) return;
    const t = clock.getElapsedTime() * 1.1 + seed;
    m.current.position.set(Math.cos(t) * r, Math.sin(t) * r * 0.35, Math.sin(t) * r);
  });
  return (
    <mesh ref={m}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
}

/* ═══════════════════════════════════════════
   LARGE 3D ATOM
═══════════════════════════════════════════ */
function BigAtom3D() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.rotation.y = clock.getElapsedTime() * 0.6;
    g.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.25) * 0.2;
  });

  const orbits = [
    { rot: [0, 0, 0] as [number,number,number],         r: 1.5, color: "#60a5fa", eColor: "#a855f7" },
    { rot: [Math.PI/3, Math.PI/4, 0] as [number,number,number], r: 1.5, color: "#93c5fd", eColor: "#3b82f6" },
    { rot: [-Math.PI/3,-Math.PI/4,0] as [number,number,number],r: 1.5, color: "#a5b4fc", eColor: "#ec4899" },
  ];

  const floatingOrbs = [
    { pos: [2.2, 1.0, 0.3] as [number,number,number],  color: "#a855f7", size: 0.18, seed: 0 },
    { pos: [-2.0, 1.2, 0.1] as [number,number,number], color: "#ec4899", size: 0.14, seed: 1 },
    { pos: [1.0, -2.0, 0.4] as [number,number,number], color: "#3b82f6", size: 0.13, seed: 2 },
    { pos: [-1.5, -1.6,-0.2] as [number,number,number],color: "#10b981", size: 0.12, seed: 3 },
    { pos: [2.5, -0.5,-0.3] as [number,number,number], color: "#f59e0b", size: 0.16, seed: 4 },
    { pos: [-0.5, 2.2, 0.5] as [number,number,number], color: "#60a5fa", size: 0.11, seed: 5 },
    { pos: [0.8, 2.4,-0.1] as [number,number,number],  color: "#f472b6", size: 0.10, seed: 6 },
    { pos: [-2.4,-0.8, 0.2] as [number,number,number], color: "#34d399", size: 0.15, seed: 7 },
  ];

  return (
    <group ref={g}>
      {/* Nucleus core */}
      <mesh>
        <sphereGeometry args={[0.45, 64, 64]} />
        <meshStandardMaterial
          color="#2563eb" emissive="#1d4ed8" emissiveIntensity={1.2}
          roughness={0.05} metalness={0.7}
        />
      </mesh>
      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#93c5fd" emissive="#60a5fa" emissiveIntensity={0.4} transparent opacity={0.15} />
      </mesh>

      {/* Orbital rings + electrons */}
      {orbits.map((orb, i) => (
        <group key={i} rotation={orb.rot}>
          <mesh>
            <torusGeometry args={[orb.r, 0.018, 16, 140]} />
            <meshStandardMaterial
              color={orb.color} emissive={orb.color} emissiveIntensity={0.9}
              transparent opacity={0.85}
            />
          </mesh>
          <ElectronDot seed={i * 2.1} r={orb.r} color={orb.eColor} />
        </group>
      ))}

      {/* Floating colored orbs */}
      {floatingOrbs.map((orb, i) => (
        <FloatingOrb key={i} pos={orb.pos} color={orb.color} size={orb.size} seed={orb.seed} />
      ))}
    </group>
  );
}

function FloatingOrb({ pos, color, size, seed }: { pos: [number,number,number]; color: string; size: number; seed: number }) {
  const m = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!m.current) return;
    const t = clock.getElapsedTime() * 0.4 + seed * 1.5;
    m.current.position.set(
      pos[0] + Math.sin(t) * 0.2,
      pos[1] + Math.cos(t * 1.3) * 0.2,
      pos[2]
    );
  });
  return (
    <mesh ref={m} position={pos}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} roughness={0.05} metalness={0.2} />
    </mesh>
  );
}

/* ═══════════════════════════════════════════
   BANNER SECTION
═══════════════════════════════════════════ */
export default function BannerSection() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 300,
        overflow: "hidden",
        background: "linear-gradient(130deg, #dbeafe 0%, #eff6ff 45%, #e0f2fe 80%, #d1fae5 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── Large rotating circular rings (background halo) ── */}
      {[500, 700, 900, 1100].map((sz, i) => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "50%", left: "18%",
            transform: "translate(-50%, -50%)",
            width: sz, height: sz,
            borderRadius: "50%",
            border: `1px solid rgba(59,130,246,${0.12 - i * 0.025})`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* ── Glowing light swooshes ── */}
      <motion.div
        animate={{ x: ["-40%", "120%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        style={{
          position: "absolute", top: "35%", left: 0,
          width: "50%", height: 2.5,
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(59,130,246,0.6), transparent)",
          borderRadius: 99, pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ x: ["120%", "-40%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3, repeatDelay: 0.5 }}
        style={{
          position: "absolute", top: "62%", left: 0,
          width: "45%", height: 2,
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)",
          borderRadius: 99, pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ x: ["-20%", "150%"] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{
          position: "absolute", bottom: "20%", left: 0,
          width: "35%", height: 1.5,
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent)",
          borderRadius: 99, pointerEvents: "none",
        }}
      />

      {/* ── Scattered CSS orbs (right side) ── */}
      {[
        { size: 16, color: "#3b82f6", top: "12%", right: "6%" , delay: 0   },
        { size: 11, color: "#a855f7", top: "35%", right: "3%" , delay: 0.5 },
        { size: 9,  color: "#ec4899", top: "70%", right: "8%" , delay: 1   },
        { size: 13, color: "#10b981", top: "80%", right: "18%", delay: 0.3 },
        { size: 8,  color: "#f59e0b", top: "55%", right: "1%" , delay: 0.8 },
        { size: 7,  color: "#60a5fa", top: "22%", right: "22%", delay: 1.2 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3 + orb.delay * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
          style={{
            position: "absolute",
            top: orb.top, right: (orb as any).right,
            width: orb.size, height: orb.size, borderRadius: "50%",
            background: orb.color,
            boxShadow: `0 0 ${orb.size * 2.5}px ${orb.color}99`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* ── MAIN LAYOUT ── */}
      <div style={{
        position: "relative", zIndex: 5,
        maxWidth: 1400, margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "center",
        padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 60px",
        gap: isMobile ? 20 : 0,
        textAlign: isMobile ? "center" : "left",
      }}>

        {/* 3D Atom Canvas */}
        <div style={{
          width: isMobile ? 200 : isTablet ? 280 : "min(100%, 420px)",
          height: isMobile ? 200 : 300,
          flexShrink: 0,
          position: "relative",
          marginLeft: isMobile ? 0 : -40,
          overflow: "visible",
        }}>
          <Canvas
            camera={{ position: [0, 0, 6.5], fov: 52 }}
            gl={{ alpha: true, antialias: true }}
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <ambientLight intensity={1.8} />
            <directionalLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
            <pointLight position={[-4, -2, -2]} intensity={2} color="#a855f7" />
            <pointLight position={[4, 2, 2]} intensity={1.5} color="#3b82f6" />
            <Suspense fallback={null}>
              <BigAtom3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Text block */}
        <div style={{ flex: 1, paddingLeft: isMobile ? 0 : 20, paddingRight: isMobile ? 0 : 40 }}>
          <motion.h2
            initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: isMobile ? "clamp(22px,6vw,30px)" : "clamp(24px, 2.8vw, 40px)",
              fontWeight: 900, color: "#0f172a",
              lineHeight: 1.2, margin: 0, marginBottom: 8,
            }}
          >
            Experiential learning<br />
            will become{" "}
            <motion.span
              animate={{ color: ["#2563eb", "#6366f1", "#3b82f6", "#2563eb"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              standard.
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            style={{ height: 4, background: "linear-gradient(90deg, #2563eb, #6366f1)", borderRadius: 99, marginBottom: 14, marginLeft: isMobile ? "auto" : 0, marginRight: isMobile ? "auto" : 0 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ fontSize: isMobile ? 14 : 16, color: "#475569", margin: 0, fontWeight: 500 }}
          >
            The only question is - who adopts first?
          </motion.p>
        </div>

        {/* Vertical divider — desktop only */}
        {!isMobile && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ width: 1.5, height: 90, flexShrink: 0, marginRight: 40, background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.35), transparent)" }}
          />
        )}

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 10 : 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.06, boxShadow: "0 25px 60px rgba(37,99,235,0.5)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "flex", alignItems: "center", gap: isMobile ? 10 : 14,
            background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
            color: "white", border: "none", borderRadius: 60,
            padding: isMobile ? "14px 24px" : "18px 36px",
            fontSize: isMobile ? 13 : 15, fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 15px 40px rgba(37,99,235,0.4)",
            whiteSpace: "nowrap", flexShrink: 0,
            position: "relative", overflow: "hidden",
            letterSpacing: "0.01em",
            marginBottom: isMobile ? 24 : 0,
          }}
        >
          <motion.div
            animate={{ x: ["-100%", "220%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
            style={{ position: "absolute", top: 0, left: 0, width: "40%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)", pointerEvents: "none" }}
          />
          <Calendar size={isMobile ? 16 : 20} strokeWidth={2} />
          {isMobile ? "Schedule Demo" : "Schedule a Guided Demonstration"}
          <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowRight size={isMobile ? 16 : 20} strokeWidth={2.5} />
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
}
