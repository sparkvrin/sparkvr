"use client";

import React, { useRef, useState, useEffect, Suspense, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, CalendarDays, ArrowRight, GraduationCap, BarChart3, Users, Building2, Lightbulb, ShieldCheck, UserCog, Headset, TrendingUp } from "lucide-react";


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
      {children}
    </motion.div>
  );
}

function FloatingLabel({ 
  title, desc, icon: Icon, color, delay, top, left, right, bottom, isTapped 
}: { 
  title: string, desc: string, icon: any, color: string, delay: number, top?: string|number, left?: string|number, right?: string|number, bottom?: string|number, isTapped?: boolean 
}) {
  return (
    <div style={{ position: "absolute", top, left, right, bottom, zIndex: 20 }}>
      <Floating3DWrapper delay={delay} floatAmp={isTapped ? 4 : 12} rotateAmp={4} duration={5 + delay}>
        <TiltCard>
          {isTapped && (
            <motion.div
              animate={{ opacity: [0.8, 0], scale: [1, 1.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute", top: -10, left: -10, right: -10, bottom: -10,
                borderRadius: 40, border: `2px solid ${color}`, zIndex: 0,
                pointerEvents: "none"
              }}
            />
          )}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ 
              scale: 1.08, 
              boxShadow: "0 35px 70px rgba(0,40,120,0.25)",
              y: -10
            }}
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              border: "1.5px solid rgba(255, 255, 255, 0.8)",
              borderRadius: 32,
              padding: "24px",
              width: 320,
              minHeight: 200,
              boxShadow: "0 15px 45px rgba(0,30,80,0.1), inset 0 2px 15px rgba(255,255,255,0.7)",
              transformStyle: "preserve-3d",
              display: "flex",
              flexDirection: "column",
              gap: 16
            }}
          >
            {/* Header: Icon Bubble + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* 3D-style Speech Bubble Icon Container */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{ 
                  width: 60, height: 60, borderRadius: "50%", 
                  background: `linear-gradient(135deg, ${color} 0%, #1d4ed8 100%)`, 
                  display: "flex", alignItems: "center", justifyContent: "center", 
                  color: "white", 
                  boxShadow: `0 10px 25px ${color}55, inset 0 2px 8px rgba(255,255,255,0.4)`,
                  position: "relative",
                  zIndex: 2
                }}>
                  <Icon size={28} strokeWidth={2.5} />
                </div>
                {/* Speech Bubble "Tail" */}
                <div style={{
                  position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%) rotate(45deg)",
                  width: 14, height: 14, background: "#1d4ed8", zIndex: 1, borderRadius: 2
                }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h4 style={{ 
                  fontSize: 18, fontWeight: 900, color: "#1e293b", 
                  lineHeight: 1.1, margin: 0, textTransform: "none",
                  letterSpacing: "-0.02em"
                }}>
                  {title.split('\n').map((t, i) => <React.Fragment key={i}>{t}<br/></React.Fragment>)}
                </h4>
                {/* Underline Decoration */}
                <div style={{ width: 45, height: 3, background: "#3b82f6", borderRadius: 4 }} />
              </div>
            </div>

            {/* Description */}
            <p style={{ 
              fontSize: 14, color: "#475569", margin: 0, 
              lineHeight: 1.5, fontWeight: 500,
              transform: "translateZ(20px)"
            }}>
              {desc}
            </p>
          </motion.div>
        </TiltCard>
      </Floating3DWrapper>
    </div>
  );
}

export default function CTASection() {
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
      style={{ 
        position: "relative", 
        width: "100%", 
        minHeight: "100vh", 
        padding: "clamp(60px, 8vh, 120px) clamp(24px, 5vw, 60px)",
        backgroundImage: "url('/backgroundimagesecsion5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >


      <div className="cta-layout" style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", width: "100%", display: "flex", flexWrap: "nowrap", gap: 30, alignItems: "center" }}>
        
        {/* ─────────────────────────────────────────────────────────
            LEFT COLUMN - TEXT & CTA
        ───────────────────────────────────────────────────────── */}
        <div style={{ flex: "1 1 45%", minWidth: 350, maxWidth: 600, paddingBottom: 40 }}>
         

          <motion.h2 
            initial={{ opacity: 0, y: 30, rotateX: 20 }} 
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1, duration: 0.9, type: "spring" }}
            style={{ fontSize: "clamp(42px, 5vw, 68px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, marginBottom: 40, transformPerspective: 800, letterSpacing: "-0.03em" }}
          >
            Experiential learning <br/>
            will become <br/>
            <motion.span 
              animate={{ color: ["#2563eb", "#3b82f6", "#2563eb"] }} transition={{ duration: 4, repeat: Infinity }}
              style={{ color: "#2563eb" }}
            >
              standard.
            </motion.span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2, type: "spring" }}
            style={{ marginBottom: 40 }}
          >
            <p style={{ fontSize: 26, color: "#1e293b", fontWeight: 500, lineHeight: 1.4, margin: 0, letterSpacing: "-0.01em" }}>
              The only question is — <br/>
              <span style={{ color: "#2563eb", fontWeight: 700 }}>who adopts first?</span>
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative", overflow: "hidden",
                background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                color: "white", border: "none", padding: "12px 12px 12px 24px",
                borderRadius: 100, fontSize: 17, fontWeight: 600,
                display: "inline-flex", alignItems: "center", gap: 16,
                cursor: "pointer", boxShadow: "0 15px 35px rgba(37,99,235,0.3)",
                marginBottom: 28, transformStyle: "preserve-3d"
              }}
            >
              <motion.div 
                animate={{ x: ["-100%", "200%"] }} 
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)", transform: "skewX(-20deg)" }}
              />
              <CalendarDays size={20} style={{ opacity: 0.9 }} />
              <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.2)" }} />
              <span style={{ position: "relative", zIndex: 2, marginRight: 8 }}>Schedule a Guided Demonstration</span>
              <motion.div animate={{ rotate: [0, 90, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ display: "flex", background: "white", color: "#2563eb", borderRadius: "50%", padding: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <ArrowRight size={20} strokeWidth={3} />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
             <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                <CheckCircle2 size={14} strokeWidth={3} />
             </div>
             <span style={{ fontSize: 14, fontWeight: 700, color: "#475569" }}>Trusted by schools. Proven in classrooms. Built for learning.</span>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            RIGHT COLUMN - STUDENT & CARDS
        ───────────────────────────────────────────────────────── */}
        <div className="cta-right-container" style={{ flex: "1 1 55%", minWidth: 0, position: "relative", height: 600, perspective: 1200 }}>
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 1600px) {
              .cta-wrapper { transform: scale(0.85); transform-origin: center center; }
              .cta-right-container { height: 510px !important; }
            }
            @media (max-width: 1400px) {
              .cta-wrapper { transform: scale(0.75); }
              .cta-right-container { height: 450px !important; }
            }
            @media (max-width: 1100px) {
              .cta-wrapper { transform: scale(0.65); }
              .cta-right-container { height: 390px !important; }
            }
            @media (max-width: 900px) {
              .cta-wrapper { transform: scale(0.55); }
              .cta-right-container { height: 330px !important; }
            }
            @media (max-width: 700px) {
              .cta-wrapper { transform: scale(0.4); }
              .cta-right-container { height: 240px !important; }
              .cta-layout { gap: 10px !important; }
            }
          `}} />
          
          <div className="cta-wrapper" style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div 
              animate={{ rotateX: mousePos.y * 0.1, rotateY: mousePos.x * 0.1 }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
              style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}
            >
            {/* Student Image (Static so finger aligns with card) */}
            <motion.div 
              style={{ position: "absolute", bottom: "-25%", left: "0%", right: "10%", height: "170%", zIndex: 10, display: "flex", justifyContent: "center" }}
            >
               <img src="/girl_vr_tapping.png" alt="Girl student tapping with VR headset" style={{ height: "110%", maxWidth: "110%", objectFit: "contain", filter: "drop-shadow(0 40px 80px rgba(0,30,90,0.35))" }} />
            </motion.div>

            {/* Floating Cards (Properly Spaced) */}
            <FloatingLabel 
              title="Deeper Understanding" desc="Students learn by seeing, doing and experiencing."
              icon={GraduationCap} color="#3b82f6" delay={0}
              top="-30%" left="-12%" isTapped={true}
            />

            <FloatingLabel 
              title="Stronger Outcomes" desc="Better engagement. Better retention. Better results."
              icon={TrendingUp} color="#6366f1" delay={0.2}
              top="-30%" right="-8%"
            />

            <FloatingLabel 
              title="Future Ready" desc="Preparing students today for the world of tomorrow."
              icon={Users} color="#10b981" delay={0.4}
              top="50%" left="-18%"
            />

            <FloatingLabel 
              title="Scalable Impact" desc="Designed for schools to adopt, scale and succeed."
              icon={Building2} color="#f59e0b" delay={0.6}
              top="50%" right="-18%"
            />
          </motion.div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          BOTTOM BAR (Glassmorphic 4-Items)
      ───────────────────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        viewport={{ once: true }} 
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        style={{ 
          margin: "0 auto 0", maxWidth: 1150, width: "100%",
          background: "rgba(219, 234, 254, 0.35)", backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(255,255,255,0.7)", borderRadius: 100,
          padding: "14px 40px", display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "center", gap: 24, boxShadow: "0 10px 40px rgba(59,130,246,0.08), inset 0 2px 10px rgba(255,255,255,0.5)",
          position: "relative", zIndex: 10, transformStyle: "preserve-3d"
        }}
      >
        <motion.div 
          animate={{ x: ["0%", "100%", "0%"] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: 0, left: 0, height: 2, width: "15%", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)" }} 
        />
        {[
          { icon: ShieldCheck, title: "Curriculum Aligned", desc: "Built for academic goals", color: "#3b82f6" },
          { icon: UserCog, title: "Teacher Empowered", desc: "Easy to teach.\nEasy to deliver.", color: "#6366f1" },
          { icon: Headset, title: "Student Inspired", desc: "Learning that connects\nand transforms.", color: "#8b5cf6" },
          { icon: BarChart3, title: "Future Focused", desc: "Building confident,\ncurious learners.", color: "#3b82f6" }
        ].map((item, i) => (
          <React.Fragment key={i}>
            <motion.div 
              whileHover={{ scale: 1.1, y: -5 }} transition={{ type: "spring" }}
              style={{ display: "flex", alignItems: "center", gap: 16, cursor: "default" }}
            >
              <Floating3DWrapper delay={i * 0.2} floatAmp={4} rotateAmp={0} duration={3}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, rgba(${i===0?'59,130,246':i===1?'99,102,241':i===2?'139,92,246':'59,130,246'}, 0.1) 0%, rgba(${i===0?'59,130,246':i===1?'99,102,241':i===2?'139,92,246':'59,130,246'}, 0.2) 100%)`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, boxShadow: `0 8px 20px rgba(37,99,235,0.1), inset 0 2px 4px rgba(255,255,255,0.8)` }}>
                  <item.icon size={26} strokeWidth={2.5} />
                </div>
              </Floating3DWrapper>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12.5, fontWeight: 500, color: "#64748b", lineHeight: 1.4 }}>
                  {item.desc.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>)}
                </div>
              </div>
            </motion.div>
            {i < 3 && <div style={{ width: 1.5, height: 44, background: "linear-gradient(180deg, transparent, rgba(37,99,235,0.15), transparent)" }} />}
          </React.Fragment>
        ))}
      </motion.div>

    </section>
  );
}
