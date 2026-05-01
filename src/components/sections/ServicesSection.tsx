"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   THE PROBLEM  —  icons
───────────────────────────────────────────────────────── */
function TeacherIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function BookListIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="1"/>
      <line x1="9" y1="12" x2="15" y2="12"/>
      <line x1="9" y1="16" x2="13" y2="16"/>
    </svg>
  );
}
function MedalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="6"/>
      <path d="M7.5 5.5L5 8l7 2 7-2-2.5-2.5"/>
      <path d="M7 8l5 1 5-1"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   THE PROBLEM  —  subject image floaters
───────────────────────────────────────────────────────── */
const imgStyle: React.CSSProperties = { width:"100%", height:"100%", objectFit:"contain" };
function ForcesSVG()    { return <img src="/forces.png"            alt="Forces"    style={{ ...imgStyle, filter:"drop-shadow(0 4px 14px rgba(29,78,216,0.22))" }} />; }
function AnatomySVG()   { return <img src="/human_anatomy.png"     alt="Anatomy"   style={{ ...imgStyle, filter:"drop-shadow(0 4px 14px rgba(220,38,38,0.24))"  }} />; }
function CellSVG()      { return <img src="/cell1.png"             alt="Cell"      style={{ ...imgStyle, filter:"drop-shadow(0 4px 14px rgba(109,40,217,0.24))"  }} />; }
function PlantCellSVG() { return <img src="/biological_systems.png" alt="Bio"      style={{ ...imgStyle, filter:"drop-shadow(0 4px 14px rgba(21,128,61,0.24))"   }} />; }

function SubjectBubble({ label, children, pos, delay, dir = -1, w = 210 }: {
  label: string; children: React.ReactNode; pos: React.CSSProperties;
  delay: number; dir?: number; w?: number;
}) {
  return (
    <motion.div
      initial={{ opacity:0, scale:0.65, y:18 }} whileInView={{ opacity:1, scale:1, y:0 }}
      viewport={{ once:true }} transition={{ delay, duration:0.78, ease:[0.34,1.56,0.64,1] }}
      style={{ position:"absolute", zIndex:10, ...pos, perspective: 800 }}
    >
      <motion.div 
        animate={{ y:[0,dir*14,0], rotateX: [0, 6, 0, -6, 0], rotateY: [0, -6, 0, 6, 0] }} 
        transition={{ duration:5.5+delay*0.45, repeat:Infinity, ease:"easeInOut", delay:delay*0.25 }} 
        style={{ position:"relative", transformStyle: "preserve-3d" }}
      >
        <div style={{ position:"absolute", inset:-10, borderRadius:"50%", background:"radial-gradient(circle,rgba(160,210,255,0.42) 0%,transparent 68%)", filter:"blur(14px)", pointerEvents:"none" }}/>
        <div style={{ position:"relative", background:"rgba(255,255,255,0.18)", backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)", borderRadius:42, boxShadow:"0 22px 58px rgba(0,50,140,0.18),inset 0 2px 0 rgba(255,255,255,0.7)", border:"2px solid rgba(255,255,255,0.5)", width:w, height:w*0.8, display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", padding:4 }}>
          <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>{children}</div>
        </div>
        <div style={{ position:"absolute", top:-42, left:"50%", transform:"translateX(-50%)", zIndex:20 }}>
          <motion.div 
            animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
            style={{ background:"rgba(255,255,255,0.95)", borderRadius:30, padding:"6px 20px", boxShadow:"0 8px 24px rgba(0,60,160,0.14)", whiteSpace:"nowrap", border:"1px solid rgba(255,255,255,0.9)", transformStyle: "preserve-3d" }}
          >
            <span style={{ fontSize:11, fontWeight:800, letterSpacing:"0.1em", color:"#1d4ed8", textTransform:"uppercase", fontFamily:"'AR One Sans',sans-serif" }}>{label}</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   3-D tilt card wrapper
───────────────────────────────────────────────────────── */
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx  = useMotionValue(0);
  const my  = useMotionValue(0);
  const rx  = useSpring(useTransform(my, [-0.5,0.5],[ 7,-7]), { stiffness:200, damping:25 });
  const ry  = useSpring(useTransform(mx, [-0.5,0.5],[-7, 7]), { stiffness:200, damping:25 });
  return (
    <motion.div ref={ref}
      onMouseMove={e => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width  - 0.5);
        my.set((e.clientY - r.top)  / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX:rx, rotateY:ry, transformStyle:"preserve-3d", perspective:900, ...style }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   THE HOW  —  orbital data
   5 cards × 72° = perfectly equal spacing, starting at top (-90°)
   -90 → -18 → 54 → 126 → 198
───────────────────────────────────────────────────────── */
const ORBIT_CX    = 380;   // true centre of 760×760 canvas
const ORBIT_CY    = 380;
const ORBIT_SVG   = 265;   // orbit ring — cards sit exactly on this ring
const CARD_R      = 265;   // cards ON the orbit ring (same radius)
const INDICATOR_R = 175;   // glowing dots in gap between logo (r≈124) and cards

const CARDS = [
  {
    angle: -90,   // top
    lines: ["Curriculum-aligned", "modules"],
    dotColor: "#00d4ff",
    floatAmp:  8, floatDur: 5.5,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    angle: -18,   // top-right
    lines: ["Structured in", "40-minute sessions"],
    dotColor: "#1d4ed8",
    floatAmp: -8, floatDur: 6.3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    angle: 54,    // bottom-right
    lines: ["Teacher-guided", "delivery"],
    dotColor: "#e91e9c",
    floatAmp:  8, floatDur: 6.8,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    angle: 126,   // bottom-left
    lines: ["Offline", "stability"],
    dotColor: "#ff9800",
    floatAmp: -8, floatDur: 5.2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    angle: 198,   // left
    lines: ["Scalable subject", "expansion"],
    dotColor: "#00b894",
    floatAmp:  8, floatDur: 7.1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6"  y1="20" x2="6"  y2="14"/>
      </svg>
    ),
  },
] as const;

function orbitXY(r: number, angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: ORBIT_CX + r * Math.cos(a), y: ORBIT_CY + r * Math.sin(a) };
}

/* ─────────────────────────────────────────────────────────
   MAIN
───────────────────────────────────────────────────────── */
export default function ServicesSection() {
  /* Parallax on mouse in the HOW section */
  const rightRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* useInView fires once when the HOW section enters the viewport */
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  /* Responsive scale for the orbital canvas */
  const canvasRef = useRef<HTMLDivElement>(null);
  const [scale, setScale]   = useState(1);
  useEffect(() => {
    const update = () => {
      if (!rightRef.current) return;
      const available = rightRef.current.clientWidth - 40; // 20px padding each side
      setScale(Math.min(1, available / 760));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ position:"relative", zIndex:2 }}>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — THE PROBLEM
      ═══════════════════════════════════════════════════ */}
      <section style={{ position:"relative", width:"100%", minHeight:"100vh", display:"flex", flexDirection:"row", alignItems:"stretch", overflow:"hidden", background:"linear-gradient(135deg,#f0f4ff 0%,#d9e2ff 100%)" }}>

        {/* LEFT */}
        <div style={{ width:"38%", flexShrink:0, padding:"clamp(48px,7vh,88px) clamp(32px,5.5vw,72px)", display:"flex", flexDirection:"column", justifyContent:"center", position:"relative", zIndex:4 }}>
          <motion.div initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
            <span style={{ fontSize:10, fontWeight:800, letterSpacing:"0.22em", color:"#1d4ed8", textTransform:"uppercase", fontFamily:"'AR One Sans',sans-serif" }}></span>
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:20, rotateX: 16 }} whileInView={{ opacity:1, y:0, rotateX: 0 }} viewport={{ once:true }} transition={{ delay:0.08, duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ fontSize:"clamp(34px,4.5vw,62px)", fontWeight:800, lineHeight:1.1, color:"#0b1a3b", margin:"0 0 40px", fontFamily:"'AR One Sans',sans-serif", transformPerspective: 700 }}>
            For decades, education has relied on <br/>
            <span style={{ background:"linear-gradient(90deg,#1d4ed8 0%,#7c3aed 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>explanation.</span>
          </motion.h2>
          <div style={{ display:"flex", flexDirection:"column", gap:18, marginBottom:36 }}>
            {([
              { Icon:TeacherIcon,   text:"Teachers explain brilliantly." },
              { Icon:BookListIcon,  text:"The curriculum is structured." },
              { Icon:ClipboardIcon, text:"Examinations are rigorous." },
              { Icon:MedalIcon,     text:"Yet many concepts remain abstract." },
            ] as { Icon:()=>React.ReactNode; text:string }[]).map(({ Icon, text }, i) => (
              <motion.div key={i} initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.12+i*0.1 }}
                whileHover={{ scale: 1.05, x: 10, rotateX: 10 }}
                style={{ display:"flex", alignItems:"center", gap:16, cursor: "default", perspective: 500, transformStyle: "preserve-3d" }}>
                <motion.div 
                  animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  style={{ width:52, height:52, borderRadius:"50%", flexShrink:0, background:"linear-gradient(135deg,rgba(29,78,216,0.1) 0%,rgba(124,58,237,0.1) 100%)", border:"1.5px solid rgba(29,78,216,0.15)", display:"flex", alignItems:"center", justifyContent:"center", transform: "translateZ(20px)" }}
                >
                  <Icon />
                </motion.div>
                <p style={{ fontSize:"clamp(17px,1.6vw,21px)", fontWeight:500, color:"#1a2a4a", margin:0, fontFamily:"'AR One Sans',sans-serif", lineHeight:1.45, transform: "translateZ(10px)" }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex:1, position:"relative", overflow:"hidden", minHeight:"100vh", backgroundImage:"url('/background.png')", backgroundSize:"cover", backgroundPosition:"center" }}>
          <img src="/student.png" alt="Student" style={{ position:"absolute", bottom:0, left:"67.5%", transform:"translateX(-50%)", height:"48%", objectFit:"contain", objectPosition:"bottom center", zIndex:6, pointerEvents:"none", filter:"drop-shadow(0 30px 60px rgba(0,40,130,0.25))" }}/>
          <div style={{ position:"absolute", top:"28%", left:"67.5%", transform:"translate(-50%,-50%)", zIndex:7, pointerEvents:"none" }}>
            <motion.img animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} src="/quastion.png" alt="Question cloud" style={{ width:260, height:"auto", filter:"drop-shadow(0 0 32px rgba(180,220,255,0.9)) drop-shadow(0 0 18px rgba(255,255,255,0.75))" }}/>
          </div>
          <SubjectBubble label="FORCES"             pos={{ top:"14%",left:"28%" }}  delay={0.2} dir={-1} w={190}><ForcesSVG /></SubjectBubble>
          <SubjectBubble label="HUMAN ANATOMY"      pos={{ top:"12%",right:"4%" }}  delay={1.2} dir={-1} w={180}><AnatomySVG /></SubjectBubble>
          <SubjectBubble label="CELL"               pos={{ top:"54%",left:"26%" }}  delay={1.8} dir={1}  w={220}><CellSVG /></SubjectBubble>
          <SubjectBubble label="BIOLOGICAL SYSTEMS" pos={{ top:"56%",right:"4%" }}  delay={0.6} dir={1}  w={190}><PlantCellSVG /></SubjectBubble>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — THE HOW  (pixel-perfect orbital diagram)
      ═══════════════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        style={{ position:"relative", width:"100%", minHeight:"100vh", display:"flex", flexDirection:"row", alignItems:"center", overflow:"hidden", background:"linear-gradient(140deg,#ffffff 0%,#f4f8ff 30%,#eaf1ff 60%,#d8eaff 100%)" }}
      >
        {/* ── background wave shapes ── */}
        <div aria-hidden style={{ position:"absolute", bottom:0, left:0, right:0, height:"42%", pointerEvents:"none", zIndex:0 }}>
          <svg viewBox="0 0 1440 310" preserveAspectRatio="none" style={{ width:"100%", height:"100%" }}>
            <path d="M0,100 C300,200 600,30 900,130 C1080,185 1280,70 1440,120 L1440,310 L0,310 Z" fill="rgba(147,197,253,0.28)"/>
            <path d="M0,155 C220,80 500,230 760,155 C990,88 1220,210 1440,148 L1440,310 L0,310 Z" fill="rgba(96,165,250,0.20)"/>
            <path d="M0,215 C280,155 560,270 840,215 C1080,167 1300,250 1440,200 L1440,310 L0,310 Z" fill="rgba(59,130,246,0.13)"/>
          </svg>
        </div>

        {/* ── decorative floating dots ── */}
        <motion.div animate={{ y:[0,-9,0] }} transition={{ duration:3.8, repeat:Infinity, ease:"easeInOut" }}
          aria-hidden style={{ position:"absolute", top:"9%",  right:"7%",  width:15, height:15, borderRadius:"50%", background:"#00d4ff", boxShadow:"0 0 14px 4px rgba(0,212,255,0.5)", zIndex:1 }}/>
        <motion.div animate={{ y:[0, 9,0] }} transition={{ duration:5.1, repeat:Infinity, ease:"easeInOut", delay:1 }}
          aria-hidden style={{ position:"absolute", top:"37%", right:"4.5%",width:10, height:10, borderRadius:"50%", background:"#e91e9c", boxShadow:"0 0 10px 3px rgba(233,30,156,0.45)", zIndex:1 }}/>
        <motion.div animate={{ y:[0,-6,0] }} transition={{ duration:6,   repeat:Infinity, ease:"easeInOut", delay:2 }}
          aria-hidden style={{ position:"absolute", bottom:"30%", right:"11%", width:8, height:8, borderRadius:"50%", background:"#e91e9c", opacity:0.65, zIndex:1 }}/>
        <motion.div animate={{ x:[0, 5,0] }} transition={{ duration:7,   repeat:Infinity, ease:"easeInOut", delay:0.5 }}
          aria-hidden style={{ position:"absolute", top:"20%", right:"23%", width:6, height:6, borderRadius:"50%", background:"#7c3aed", opacity:0.45, zIndex:1 }}/>
        <motion.div animate={{ y:[0, 7,0] }} transition={{ duration:5.5, repeat:Infinity, ease:"easeInOut", delay:3 }}
          aria-hidden style={{ position:"absolute", bottom:"22%", left:"41%", width:8, height:8, borderRadius:"50%", background:"#ff9800", opacity:0.7, zIndex:1 }}/>

        {/* ── LEFT TEXT COLUMN ── */}
        <div style={{ width:"36%", flexShrink:0, padding:"clamp(40px,6vh,72px) clamp(8px,1vw,12px) clamp(24px,3vh,48px) clamp(20px,3.5vw,52px)", display:"flex", flexDirection:"column", justifyContent:"flex-start", position:"relative", zIndex:2 }}>

          <motion.p initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ fontSize:11, fontWeight:700, letterSpacing:"0.28em", color:"#1d4ed8", textTransform:"uppercase", fontFamily:"'AR One Sans',sans-serif", margin:"0 0 10px" }}>
            THE&nbsp;&nbsp;HOW
          </motion.p>

          <motion.h2 initial={{ opacity:0, y:20, rotateX: 16 }} whileInView={{ opacity:1, y:0, rotateX: 0 }} viewport={{ once:true }} transition={{ delay:0.1, duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ fontSize:"clamp(26px,2.9vw,44px)", fontWeight:800, lineHeight:1.18, color:"#0b1a3b", margin:"0 0 8px", fontFamily:"'AR One Sans',sans-serif", transformPerspective: 700 }}>
            We make concepts<br/>
            <span style={{ background:"linear-gradient(90deg,#1d4ed8 0%,#3b82f6 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>observable</span>{" "}—<br/>
            without disrupting schools.
          </motion.h2>

          <motion.p initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.18 }}
            style={{ fontSize:"clamp(15px,1.45vw,19px)", color:"#4a5f7a", lineHeight:1.55, fontFamily:"'AR One Sans',sans-serif", maxWidth:400, margin:0 }}>
            SparkVR integrates immersive learning into existing academic systems through:
          </motion.p>
        </div>

        {/* ── RIGHT COLUMN — orbital canvas ── */}
        <div
          ref={rightRef}
          onMouseMove={e => {
            if (!rightRef.current) return;
            const r = rightRef.current.getBoundingClientRect();
            setMouse({ x:((e.clientX-r.left)/r.width-0.5)*20, y:((e.clientY-r.top)/r.height-0.5)*14 });
          }}
          onMouseLeave={() => setMouse({ x:0, y:0 })}
          style={{ flex:1, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh", overflow:"visible", zIndex:2 }}
        >
          {/* parallax wrapper */}
          <motion.div
            animate={{ x:mouse.x, y:mouse.y, rotateX: mouse.y * -0.5, rotateY: mouse.x * 0.5 }}
            transition={{ type:"spring", stiffness:55, damping:16 }}
            ref={canvasRef}
            style={{
              position:"relative",
              width:760, height:760,
              flexShrink:0,
              overflow:"visible",
              transform:`scale(${scale})`,
              transformOrigin:"center center",
              transformStyle: "preserve-3d"
            }}
          >

            {/* ── orbit ring + indicator dots + spokes ── */}
            <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", overflow:"visible" }} viewBox="0 0 760 760">

              {/* Subtle spoke lines from centre → each card (direction indicators) */}
              {CARDS.map((c, i) => {
                const { x, y } = orbitXY(ORBIT_SVG, c.angle);
                return (
                  <line key={`spoke-${i}`}
                    x1={ORBIT_CX} y1={ORBIT_CY} x2={x} y2={y}
                    stroke="rgba(147,197,253,0.11)"
                    strokeWidth="1" strokeDasharray="3 7"
                  />
                );
              })}

              {/* Outer soft halo band around the orbit ring */}
              <circle cx={ORBIT_CX} cy={ORBIT_CY} r={ORBIT_SVG + 18}
                stroke="rgba(147,197,253,0.10)" strokeWidth="24" fill="none"/>

              {/* Main dashed orbit ring — cards sit ON this ring */}
              <motion.circle
                cx={ORBIT_CX} cy={ORBIT_CY} r={ORBIT_SVG}
                stroke="rgba(100,149,237,0.52)" strokeWidth="1.5" strokeDasharray="9 7" fill="none"
                animate={{ strokeDashoffset: [0, -64] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Second decorative ring (opposite flow) */}
              <motion.circle
                cx={ORBIT_CX} cy={ORBIT_CY} r={ORBIT_SVG + 18}
                stroke="rgba(147,197,253,0.13)" strokeWidth="1" strokeDasharray="4 12" fill="none"
                animate={{ strokeDashoffset: [0, 64] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing indicator dots — positioned between centre logo and each card
                  INDICATOR_R=175 sits in the gap between logo edge (r≈124) and card inner edge (r≈186) */}
              {CARDS.map((c, i) => {
                const { x, y } = orbitXY(INDICATOR_R, c.angle);
                return (
                  <g key={i}>
                    {/* pulsing outer glow */}
                    <motion.circle
                      cx={x} cy={y} r={10}
                      fill={c.dotColor} opacity={0.22}
                      animate={{ r: [10, 17, 10], opacity: [0.22, 0.50, 0.22] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    />
                    {/* solid colour dot */}
                    <circle cx={x} cy={y} r={5} fill={c.dotColor}
                      style={{ filter:`drop-shadow(0 0 8px ${c.dotColor})` }}/>
                  </g>
                );
              })}
            </svg>

            {/* ── SparkVR center element ── */}
            <div style={{ position:"absolute", left:ORBIT_CX, top:ORBIT_CY, transform:"translate(-50%,-50%)", zIndex:5 }}>
              {/* outer pulse glow */}
              <motion.div
                animate={{ scale:[1,1.18,1], opacity:[0.18,0.52,0.18] }}
                transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
                style={{ position:"absolute", inset:-40, borderRadius:"50%", background:"radial-gradient(circle,rgba(59,130,246,0.5) 0%,transparent 70%)", pointerEvents:"none" }}
              />
              {/* secondary glow ring */}
              <motion.div
                animate={{ scale:[1.1,1.25,1.1], opacity:[0.08,0.22,0.08] }}
                transition={{ duration:4.5, repeat:Infinity, ease:"easeInOut", delay:1.5 }}
                style={{ position:"absolute", inset:-60, borderRadius:"50%", background:"radial-gradient(circle,rgba(129,140,248,0.4) 0%,transparent 65%)", pointerEvents:"none" }}
              />
              {/* rotating gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ width:248, height:248, borderRadius:"50%", background:"conic-gradient(from 0deg,#60a5fa 0%,#1d4ed8 30%,#818cf8 50%,#1d4ed8 70%,#60a5fa 100%)", padding:3.5, boxShadow:"0 0 48px rgba(59,130,246,0.5),0 0 96px rgba(59,130,246,0.22)" }}
              >
                {/* counter-rotate inner content to stay upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ width:"100%", height:"100%", borderRadius:"50%", background:"#f3f8ff", display:"flex", alignItems:"center", justifyContent:"center" }}
                >
                  <div style={{ width:216, height:216, borderRadius:"50%", background:"linear-gradient(145deg,#e8f2ff 0%,#d4e8ff 100%)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"inset 0 0 28px rgba(59,130,246,0.14)" }}>
                    <div style={{ width:182, height:182, borderRadius:"50%", background:"linear-gradient(145deg,#dbeeff 0%,#c6dfff 100%)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"inset 0 0 20px rgba(59,130,246,0.1)" }}>
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        style={{ width:152, height:152, borderRadius:"50%", background:"linear-gradient(160deg,#e8f4ff 0%,#d8eeff 100%)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 6px 28px rgba(59,130,246,0.28)" }}
                      >
                        <img src="/logo.png" alt="SparkVR" style={{ width:112, height:"auto", objectFit:"contain" }}/>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* ── feature cards ── */}
            {CARDS.map((c, i) => {
              const { x, y } = orbitXY(CARD_R, c.angle);
              return (
                <div
                  key={i}
                  style={{ position:"absolute", left:x, top:y, transform:"translate(-50%,-50%)", zIndex:6 }}
                >
                  <motion.div
                    initial={{ opacity:0, scale:0.65, y:18, rotateX: 25 }}
                    animate={inView
                      ? { opacity:1, scale:1, y:0, rotateX: 0 }
                      : { opacity:0, scale:0.65, y:18, rotateX: 25 }}
                    transition={{ delay: 0.3 + i * 0.13, duration:0.75, ease:[0.34,1.56,0.64,1] }}
                    style={{ transformPerspective: 800, transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      animate={{ rotateX: [0, 4, 0, -4, 0], rotateY: [0, -4, 0, 4, 0] }}
                      transition={{ duration: c.floatDur + 1, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <TiltCard>
                        <motion.div
                          whileHover={{ scale:1.06, boxShadow:"0 20px 48px rgba(0,60,180,0.18)", z: 20 }}
                          transition={{ duration:0.22 }}
                          style={{

                          width:158, minHeight:106,
                          background:"rgba(255,255,255,0.96)",
                          backdropFilter:"blur(18px)",
                          WebkitBackdropFilter:"blur(18px)",
                          borderRadius:22,
                          padding:"16px 14px",
                          boxShadow:"0 8px 32px rgba(0,40,120,0.11),inset 0 1px 0 rgba(255,255,255,0.9)",
                          border:"1px solid rgba(220,235,255,0.8)",
                          display:"flex", flexDirection:"column", alignItems:"center", gap:10,
                          cursor:"default", textAlign:"center",
                          transformStyle:"preserve-3d",
                        }}
                      >
                        {/* icon bubble */}
                        <div style={{ width:50, height:50, borderRadius:"50%", background:"rgba(219,234,254,0.65)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          {c.icon}
                        </div>
                        {/* text */}
                        <div>
                          {c.lines.map((line, j) => (
                            <div key={j} style={{ fontSize:13.5, fontWeight:700, color:"#0b1a3b", lineHeight:1.32, fontFamily:"'AR One Sans',sans-serif" }}>
                              {line}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </TiltCard>
                  </motion.div>
                </motion.div>
              </div>
              );
            })}

          </motion.div>
        </div>
      </section>
    </div>
  );
}
