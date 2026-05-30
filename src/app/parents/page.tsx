"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Clock, BookOpen, Smartphone, Network,
  ShieldCheck, Star, Heart, Eye, Target, BarChart3,
  Lightbulb, TrendingUp, HelpCircle, ChevronDown,
  ArrowRight, Monitor, GraduationCap, CheckCircle2,
  Lock, Hourglass, Rocket, Mail, Headphones, MessageSquare, Settings, Zap,
} from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = (delay = 0, dur = 0.7) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-60px" },
  transition: { delay, duration: dur, ease: EASE },
});
const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const, margin: "-60px" },
  transition: { delay, duration: 0.5, ease: EASE },
});
const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true as const, margin: "-60px" },
  transition: { delay, duration: 0.5, ease: EASE },
});

function useScreenWidth() {
  const [w, setW] = React.useState(1200);
  React.useEffect(() => {
    const fn = () => setW(window.innerWidth);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

/* ─── Shared feature-row component ─── */
function FeatureRow({ icon: Icon, color, title, desc, delay = 0 }: {
  icon: React.FC<{ size?: number; color?: string; strokeWidth?: number }>; color: string; title: string; desc: string; delay?: number;
}) {
  const isMobile = useScreenWidth() < 768;
  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={{ x: 5, boxShadow: "0 6px 24px rgba(99,55,237,0.08)" }}
      style={{
        display: "flex", alignItems: "flex-start", gap: 14,
        background: "#ffffff", borderRadius: 14,
        padding: isMobile ? "14px 16px" : "16px 20px",
        border: "1px solid rgba(124,58,237,0.08)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
        transition: "all 0.25s ease",
      }}
    >
      <div style={{
        width: isMobile ? 38 : 44, height: isMobile ? 38 : 44, borderRadius: "50%",
        background: `${color}15`, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={isMobile ? 18 : 20} color={color} strokeWidth={1.8} />
      </div>
      <div style={{ paddingTop: 2 }}>
        <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#7c3aed", margin: "0 0 4px" }}>{title}</p>
        <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{desc}</p>
      </div>
    </motion.div>
  );
}

const FAQS = [
  { q: "Is SparkVR safe for my child?", a: "Yes. SparkVR is used inside school classrooms under teacher supervision. Sessions are short (under 40 minutes), curriculum-aligned, and content is carefully curated for students aged 11–18." },
  { q: "Will it replace traditional teaching?", a: "No — SparkVR complements your child's existing lessons. Teachers remain in full control. SparkVR simply makes abstract concepts visible and interactive, helping students understand faster and remember longer." },
  { q: "Which subjects and grades does it cover?", a: "SparkVR currently covers Science (Physics, Chemistry, Biology) for Grades 6–12, with 430+ NCERT-aligned modules. New subjects are added regularly." },
  { q: "How will I know if it's helping my child?", a: "Schools track student progress through in-built assessments. Parents can expect improved engagement, better concept clarity, and stronger exam performance over time." },
  { q: "How can I get SparkVR in my child's school?", a: "Reach out to us directly — we'll connect with your school management and arrange a free guided demonstration for the school to experience SparkVR first-hand." },
];

export default function ParentsPage() {
  const sw = useScreenWidth();
  const isMobile = sw < 768;
  const isTablet = sw >= 768 && sw < 1024;
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const sectionFeatures1 = [
    { icon: Clock, color: "#7c3aed", title: "Short sessions", desc: "Designed for focused learning in just the right amount of time." },
    { icon: BookOpen, color: "#7c3aed", title: "Curriculum-aligned", desc: "Aligned with school curriculum and learning objectives." },
    { icon: Smartphone, color: "#7c3aed", title: "Less mobile dependency", desc: "Encourages deeper understanding beyond mobile screens." },
    { icon: Users, color: "#7c3aed", title: "Supervised", desc: "Teacher-guided and classroom-supervised experiences." },
    { icon: Network, color: "#7c3aed", title: "Structured", desc: "Every session has a clear flow, goal, and learning outcome." },
  ];

  const sectionFeatures3 = [
    { icon: Monitor, color: "#7c3aed", title: "Teacher-guided experiences", desc: "Teachers lead every session and facilitate learning." },
    { icon: Clock, color: "#7c3aed", title: "Controlled session timing", desc: "Short, focused sessions designed for effective learning." },
    { icon: Target, color: "#7c3aed", title: "Clear learning objectives", desc: "Each experience has a clear goal and expected outcome." },
    { icon: ShieldCheck, color: "#7c3aed", title: "Safe and monitored environment", desc: "School-approved content in a secure, distraction-free setting." },
    { icon: Users, color: "#7c3aed", title: "Classroom-first approach", desc: "Built for schools, aligned with teaching practices and classroom needs." },
  ];

  const sectionFeatures4 = [
    { icon: Lightbulb, color: "#7c3aed", title: "Concepts come to life", desc: "Immersive 3D visuals make tough topics easy to grasp." },
    { icon: BookOpen, color: "#7c3aed", title: "Curriculum-aligned learning", desc: "Every experience is mapped to real academic standards." },
    { icon: TrendingUp, color: "#7c3aed", title: "Better retention", desc: "Kids understand deeper and remember longer." },
    { icon: Star, color: "#7c3aed", title: "Increased confidence", desc: "When kids understand more, they believe in themselves." },
  ];

  const sectionFeatures5 = [
    { icon: Clock, color: "#7c3aed", title: "Short, focused sessions", desc: "Built for short learning bursts that keep kids engaged without overexposure." },
    { icon: ShieldCheck, color: "#7c3aed", title: "Safe and age-appropriate", desc: "Carefully curated content made for students, in a secure environment." },
    { icon: Eye, color: "#7c3aed", title: "Healthy screen balance", desc: "Encourages balanced routines with study, play, rest, and creativity." },
    { icon: BarChart3, color: "#7c3aed", title: "Track with confidence", desc: "Simple insights help you stay informed and in control." },
  ];

  /* Gradient overlay shared across sections */
  const overlayLeft = isTablet
    ? "linear-gradient(to right,#f5f3ff 0%,#f5f3ff 30%,rgba(245,243,255,0.9)46%,rgba(245,243,255,0.3)62%,rgba(245,243,255,0)76%)"
    : "linear-gradient(to right,#f5f3ff 0%,#f5f3ff 34%,rgba(245,243,255,0.88)50%,rgba(245,243,255,0.2)64%,rgba(245,243,255,0)76%)";

  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'VAG Rounded', sans-serif" }}>

      {/* ══════════════════════════════════════════════════
          SECTION 1 — Screen time with purpose
          Background: parentbackground1.webp (80% width, right)
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        backgroundColor: "#ffffff",
        backgroundImage: isMobile ? "none" : "url('/parentbackground1.webp')",
        backgroundSize: "80% auto",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex", flexDirection: "column",
      }}>
        {/* White solid → fades at 20% to reveal image */}
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#ffffff 0%,#ffffff 22%,rgba(255,255,255,0.96)32%,rgba(255,255,255,0.65)44%,rgba(255,255,255,0.08)60%,rgba(255,255,255,0)72%)"
              : "linear-gradient(to right,#ffffff 0%,#ffffff 20%,rgba(255,255,255,0.96)30%,rgba(255,255,255,0.6)42%,rgba(255,255,255,0.06)58%,rgba(255,255,255,0)70%)",
          }} />
        )}

        <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{
            maxWidth: 1400, margin: "0 auto", width: "100%",
            padding: isMobile ? "110px 20px 0" : isTablet ? "120px 32px 0" : "130px 60px 0",
          }}>
            <div style={{ width: isMobile ? "100%" : isTablet ? "52%" : "44%" }}>


              {/* Heading */}
              <motion.h1 {...fadeLeft(0.1)} style={{
                fontSize: isMobile ? "clamp(34px,10vw,48px)" : isTablet ? "clamp(36px,4.8vw,54px)" : "clamp(42px,4.2vw,66px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.05,
                margin: "0 0 18px", letterSpacing: "-0.022em",
              }}>
                Screen time<br />with{" "}
                <span style={{ color: "#7c3aed" }}>purpose.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p {...fadeLeft(0.16)} style={{
                fontSize: isMobile ? 13 : 15, color: "#64748b",
                lineHeight: 1.7, margin: "0 0 26px", fontWeight: 500, maxWidth: 380,
              }}>
                SparkVR turns screen time into valuable learning time through immersive, curriculum-aligned experiences.
              </motion.p>

              {/* 5 feature cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 10, maxWidth: isMobile ? "100%" : 380 }}>
                {sectionFeatures1.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: 0.2 + i * 0.09, duration: 0.55, ease: EASE }}
                    whileHover={{ x: 5, boxShadow: "0 6px 20px rgba(124,58,237,0.1)" }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      background: "#ffffff", borderRadius: 12,
                      border: "1px solid rgba(124,58,237,0.1)",
                      padding: isMobile ? "13px 14px" : "15px 16px",
                      minHeight: isMobile ? "auto" : 66,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.22s ease",
                    }}
                  >
                    <div style={{
                      width: isMobile ? 36 : 42, height: isMobile ? 36 : 42,
                      borderRadius: "50%", flexShrink: 0,
                      background: "rgba(124,58,237,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 17 : 19} color="#7c3aed" strokeWidth={1.8} />
                    </div>
                    <div style={{ paddingTop: 1 }}>
                      <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 3px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile image strip */}
          {isMobile && (
            <div style={{ width: "100%", height: 280, backgroundImage: "url('/parentbackground1.webp')", backgroundSize: "cover", backgroundPosition: "center top" }} />
          )}

          {/* Bottom strip */}
          <motion.div {...fadeUp(0.2)} style={{ background: "#ede9fe" }}>
            <div style={{
              maxWidth: 1400, margin: "0 auto",
              padding: isMobile ? "20px 20px" : isTablet ? "24px 32px" : "28px 60px",
              display: "flex", alignItems: "center", gap: isMobile ? 14 : 22,
            }}>
              <motion.div
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: isMobile ? 52 : 64, height: isMobile ? 52 : 64,
                  borderRadius: "50%", flexShrink: 0,
                  background: "#7c3aed",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 28px rgba(124,58,237,0.35)",
                }}
              >
                <ShieldCheck size={isMobile ? 26 : 32} color="#fff" strokeWidth={2} />
              </motion.div>
              <div>
                <p style={{ fontSize: isMobile ? 15 : 20, fontWeight: 900, color: "#0f172a", margin: 0, lineHeight: 1.35 }}>
                  Parents see{" "}
                  <span style={{ color: "#7c3aed" }}>meaningful innovation</span>
                </p>
                <p style={{ fontSize: isMobile ? 15 : 20, fontWeight: 900, color: "#0f172a", margin: 0 }}>not distraction.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — Screen time with purpose (variant)
          Background: parentbackground2.webp (80% width, right)
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        backgroundColor: "#ffffff",
        backgroundImage: isMobile ? "none" : "url('/parentbackground2.webp')",
        backgroundSize: "80% auto",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex", flexDirection: "column",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#ffffff 0%,#ffffff 22%,rgba(255,255,255,0.96)32%,rgba(255,255,255,0.65)44%,rgba(255,255,255,0.08)60%,rgba(255,255,255,0)72%)"
              : "linear-gradient(to right,#ffffff 0%,#ffffff 20%,rgba(255,255,255,0.96)30%,rgba(255,255,255,0.6)42%,rgba(255,255,255,0.06)58%,rgba(255,255,255,0)70%)",
          }} />
        )}
        <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{
            maxWidth: 1400, margin: "0 auto", width: "100%",
            padding: isMobile ? "110px 20px 0" : isTablet ? "88px 32px 0" : "96px 60px 0",
          }}>
            <div style={{ width: isMobile ? "100%" : isTablet ? "52%" : "44%" }}>



              <motion.h2 {...fadeLeft(0.1)} style={{
                fontSize: isMobile ? "clamp(34px,10vw,48px)" : isTablet ? "clamp(36px,4.8vw,54px)" : "clamp(42px,4.2vw,66px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.05,
                margin: "0 0 18px", letterSpacing: "-0.022em",
              }}>
                Screen time<br />with{" "}
                <span style={{ color: "#7c3aed" }}>purpose.</span>
              </motion.h2>

              <motion.p {...fadeLeft(0.16)} style={{
                fontSize: isMobile ? 13 : 15, color: "#64748b",
                lineHeight: 1.7, margin: "0 0 26px", fontWeight: 500, maxWidth: 380,
              }}>
                SparkVR turns screen time into meaningful learning through immersive, curriculum-aligned experiences your child will love.
              </motion.p>

              {/* 5 feature cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 10, maxWidth: isMobile ? "100%" : 400 }}>
                {sectionFeatures1.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: 0.2 + i * 0.09, duration: 0.55, ease: EASE }}
                    whileHover={{ x: 5, boxShadow: "0 6px 20px rgba(124,58,237,0.1)" }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      background: "#ffffff", borderRadius: 12,
                      border: "1px solid rgba(124,58,237,0.1)",
                      padding: isMobile ? "13px 14px" : "15px 16px",
                      minHeight: isMobile ? "auto" : 66,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.22s ease",
                    }}
                  >
                    <div style={{
                      width: isMobile ? 36 : 42, height: isMobile ? 36 : 42,
                      borderRadius: "50%", flexShrink: 0,
                      background: "rgba(124,58,237,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 17 : 19} color="#7c3aed" strokeWidth={1.8} />
                    </div>
                    <div style={{ paddingTop: 1 }}>
                      <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 800, color: "#0f172a", margin: "0 0 3px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 11 : 12, color: "#64748b", margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {isMobile && (
            <div style={{ width: "100%", height: 280, backgroundImage: "url('/parentbackground2.webp')", backgroundSize: "cover", backgroundPosition: "center top" }} />
          )}

          {/* Bottom strip — two columns */}
          <motion.div {...fadeUp(0.1)} style={{ background: "#ede9fe" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "22px 20px" : isTablet ? "26px 32px" : "30px 60px" }}>
              <div style={{
                display: "flex", flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                justifyContent: "space-between",
                gap: isMobile ? 16 : 0,
              }}>

                {/* Left: Shield+Heart icon + text */}
                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 14 : 20, flex: isMobile ? "none" : "0 0 auto" }}>
                  {/* Shield with heart layered inside */}
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: isMobile ? 52 : 68, height: isMobile ? 52 : 68,
                      borderRadius: "50%", flexShrink: 0,
                      background: "#7c3aed",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 8px 28px rgba(124,58,237,0.35)",
                      position: "relative",
                    }}
                  >
                    {/* Shield outline (faint) */}
                    <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ShieldCheck size={isMobile ? 30 : 38} color="rgba(255,255,255,0.22)" strokeWidth={1.5} />
                    </div>
                    {/* Heart on top */}
                    <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Heart size={isMobile ? 15 : 18} color="#ffffff" fill="#ffffff" strokeWidth={0} />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div>
                    <p style={{ fontSize: isMobile ? 15 : 18, fontWeight: 900, color: "#0f172a", margin: 0, lineHeight: 1.35 }}>
                      Parents see{" "}
                      <span style={{ color: "#7c3aed" }}>meaningful innovation</span>
                    </p>
                    <p style={{ fontSize: isMobile ? 15 : 18, fontWeight: 900, color: "#0f172a", margin: 0 }}>
                      not distraction.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {!isMobile && (
                  <div style={{ width: 1, height: 56, background: "rgba(124,58,237,0.25)", margin: "0 52px", flexShrink: 0 }} />
                )}

                {/* Right: text + family icon */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, flex: 1 }}>
                  <p style={{ fontSize: isMobile ? 13 : 15, color: "#475569", fontWeight: 500, margin: 0, lineHeight: 1.65 }}>
                    SparkVR is built for learning, designed for classrooms,<br />
                    and trusted by teachers and parents.
                  </p>
                  {!isMobile && (
                    <div style={{ flexShrink: 0, opacity: 0.65 }}>
                      {/* Family outline SVG */}
                      <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22" cy="13" r="7" stroke="#7c3aed" strokeWidth="1.8" />
                        <path d="M8 42c0-7.732 6.268-14 14-14h1c7.732 0 14 6.268 14 14" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
                        <circle cx="46" cy="16" r="5.5" stroke="#7c3aed" strokeWidth="1.8" />
                        <path d="M36 42c0-5.523 4.477-10 10-10h1" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M32 6c1.2-1.8 3.2-2.5 4.8-1.6 1.6.9 2 3 .8 4.8L32 14l-5.6-4.8c-1.2-1.8-.8-3.9.8-4.8 1.6-.9 3.6-.2 4.8 1.6z" fill="#7c3aed" opacity="0.7" />
                      </svg>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — Every session is guided & supervised
          Background: parentbackground3.webp (80% width, right)
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        backgroundColor: "#ffffff",
        backgroundImage: isMobile ? "none" : "url('/parentbackground3.webp')",
        backgroundSize: "80% auto",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex", flexDirection: "column",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#ffffff 0%,#ffffff 22%,rgba(255,255,255,0.96)32%,rgba(255,255,255,0.65)44%,rgba(255,255,255,0.08)60%,rgba(255,255,255,0)72%)"
              : "linear-gradient(to right,#ffffff 0%,#ffffff 20%,rgba(255,255,255,0.96)30%,rgba(255,255,255,0.6)42%,rgba(255,255,255,0.06)58%,rgba(255,255,255,0)70%)",
          }} />
        )}
        <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{
            maxWidth: 1400, margin: "0 auto", width: "100%",
            padding: isMobile ? "110px 20px 0" : isTablet ? "120px 32px 0" : "130px 60px 0",
            flex: 1, position: "relative",
          }}>
            <div style={{ width: isMobile ? "100%" : isTablet ? "52%" : "44%" }}>






              {/* Heading */}
              <motion.h2 {...fadeLeft(0.1)} style={{
                fontSize: isMobile ? "clamp(30px,9vw,44px)" : isTablet ? "clamp(32px,4.5vw,50px)" : "clamp(38px,4vw,60px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.08,
                margin: "0 0 14px", letterSpacing: "-0.02em",
              }}>
                Every session is{" "}
                <span style={{ color: "#7c3aed" }}>guided and supervised.</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p {...fadeLeft(0.15)} style={{
                fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7,
                margin: "0 0 18px", fontWeight: 500, maxWidth: 340,
              }}>
                SparkVR is designed for classrooms, with teachers in control and learning at the center.
              </motion.p>

              {/* 5 feature cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 9, maxWidth: isMobile ? "100%" : 380 }}>
                {sectionFeatures3.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: 0.18 + i * 0.08, duration: 0.55, ease: EASE }}
                    whileHover={{ x: 5, boxShadow: "0 6px 20px rgba(124,58,237,0.1)" }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      background: "#ffffff", borderRadius: 12,
                      border: "1px solid rgba(124,58,237,0.1)",
                      padding: isMobile ? "12px 14px" : "13px 15px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.22s ease",
                    }}
                  >
                    <div style={{
                      width: isMobile ? 34 : 40, height: isMobile ? 34 : 40, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 16 : 18} color="#7c3aed" strokeWidth={1.8} />
                    </div>
                    <div style={{ paddingTop: 2 }}>
                      <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 800, color: "#7c3aed", margin: "0 0 2px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 10 : 11, color: "#64748b", margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating safety card — desktop only */}
            {!isMobile && !isTablet && (
              <motion.div
                {...fadeRight(0.35)}
                whileHover={{ y: -4, boxShadow: "0 20px 56px rgba(124,58,237,0.18)" }}
                style={{
                  position: "absolute", right: isTablet ? 32 : 60, bottom: 32,
                  width: isTablet ? 230 : 268,
                  background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
                  borderRadius: 20, border: "1.5px solid rgba(124,58,237,0.14)",
                  padding: "22px 20px 18px",
                  boxShadow: "0 12px 48px rgba(124,58,237,0.13)",
                  transition: "all 0.28s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", background: "#7c3aed", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 6px 18px rgba(124,58,237,0.3)",
                  }}>
                    <ShieldCheck size={20} color="#fff" strokeWidth={2} />
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 900, color: "#0f172a", margin: 0, lineHeight: 1.35 }}>
                    Safety and supervision<br />come first.
                  </p>
                </div>
                <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 14px", lineHeight: 1.65, fontWeight: 500 }}>
                  SparkVR is used in a structured classroom environment where teachers guide, monitor, and ensure meaningful learning.
                </p>

              </motion.div>
            )}
          </div>

          {isMobile && (
            <div style={{ width: "100%", height: 280, backgroundImage: "url('/parentbackground3.webp')", backgroundSize: "cover", backgroundPosition: "center top" }} />
          )}

          {/* Bottom strip */}
          <motion.div {...fadeUp(0.1)} style={{ background: "#ede9fe" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "20px 20px" : isTablet ? "24px 32px" : "26px 60px" }}>
              <div style={{
                display: "flex", flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                justifyContent: "space-between", gap: isMobile ? 20 : 0,
              }}>
                {/* Left: heart + two-line text */}
                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 14 : 18, flexShrink: 0 }}>
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: isMobile ? 52 : 64, height: isMobile ? 52 : 64, borderRadius: "50%",
                      background: "#7c3aed", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 8px 28px rgba(124,58,237,0.35)",
                    }}
                  >
                    <Heart size={isMobile ? 24 : 30} color="#fff" fill="#fff" strokeWidth={0} />
                  </motion.div>
                  <div>
                    <p style={{ fontSize: isMobile ? 15 : 18, fontWeight: 900, color: "#0f172a", margin: 0 }}>Guided by teachers.</p>
                    <p style={{ fontSize: isMobile ? 14 : 17, fontWeight: 900, color: "#7c3aed", margin: 0 }}>Focused on learning.</p>
                  </div>
                </div>

                {/* Divider */}
                {!isMobile && <div style={{ width: 1, height: 52, background: "rgba(124,58,237,0.25)", flexShrink: 0 }} />}

                {/* Right: 5 small icon items */}
                {!isMobile && (
                  <div style={{ display: "flex", gap: isTablet ? 22 : 32, alignItems: "flex-start" }}>
                    {[
                      { icon: Monitor, label: "Teacher\nin control" },
                      { icon: Clock, label: "Short and\nstructured" },
                      { icon: Target, label: "Goal-oriented\nlearning" },
                      { icon: ShieldCheck, label: "Safe and\nmonitored" },
                      { icon: TrendingUp, label: "Better learning\noutcomes" },
                    ].map(({ icon: Icon, label }, i) => (
                      <motion.div key={label} {...fadeUp(0.08 + i * 0.06)}
                        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, textAlign: "center" }}
                      >
                        <div style={{
                          width: 40, height: 40, borderRadius: "50%",
                          background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Icon size={20} color="#7c3aed" strokeWidth={1.8} />
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 600, color: "#475569", maxWidth: 72, whiteSpace: "pre-line", lineHeight: 1.4 }}>{label}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — Better understanding today
          Background: parentbackground4.webp (80% width, right)
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        backgroundColor: "#ffffff",
        backgroundImage: isMobile ? "none" : "url('/parentbackground4.webp')",
        backgroundSize: "80% auto",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex", flexDirection: "column",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#ffffff 0%,#ffffff 22%,rgba(255,255,255,0.96)32%,rgba(255,255,255,0.65)44%,rgba(255,255,255,0.08)60%,rgba(255,255,255,0)72%)"
              : "linear-gradient(to right,#ffffff 0%,#ffffff 20%,rgba(255,255,255,0.96)30%,rgba(255,255,255,0.6)42%,rgba(255,255,255,0.06)58%,rgba(255,255,255,0)70%)",
          }} />
        )}

        <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{
            maxWidth: 1400, margin: "0 auto", width: "100%",
            padding: isMobile ? "110px 20px 0" : isTablet ? "120px 32px 0" : "130px 60px 0",
            flex: 1, position: "relative",
          }}>

            {/* Right-side floating text — desktop only */}
            {!isMobile && !isTablet && (
              <motion.div {...fadeRight(0.15)} style={{
                position: "absolute",
                right: isTablet ? 32 : 60,
                top: isTablet ? 48 : 52,
                maxWidth: isTablet ? 260 : 320,
              }}>

              </motion.div>
            )}

            <div style={{ width: isMobile ? "100%" : isTablet ? "52%" : "44%" }}>
              {/* Heading */}
              <motion.h2 {...fadeLeft(0.1)} style={{
                fontSize: isMobile ? "clamp(30px,9vw,44px)" : isTablet ? "clamp(32px,4.5vw,50px)" : "clamp(38px,4vw,60px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.08,
                margin: "0 0 16px", letterSpacing: "-0.02em",
              }}>
                Better understanding<br />today.{" "}
                <span style={{ color: "#7c3aed" }}>Stronger<br />learning tomorrow.</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p {...fadeLeft(0.15)} style={{
                fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7,
                margin: "0 0 20px", fontWeight: 500, maxWidth: 340,
              }}>
                SparkVR makes complex concepts easy to understand and helps kids learn better, remember more, and stay curious.
              </motion.p>

              {/* 4 feature cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 9, maxWidth: isMobile ? "100%" : 380 }}>
                {sectionFeatures4.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: 0.18 + i * 0.08, duration: 0.55, ease: EASE }}
                    whileHover={{ x: 5, boxShadow: "0 6px 20px rgba(124,58,237,0.1)" }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      background: "#ffffff", borderRadius: 12,
                      border: "1px solid rgba(124,58,237,0.1)",
                      padding: isMobile ? "12px 14px" : "13px 15px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.22s ease",
                    }}
                  >
                    <div style={{
                      width: isMobile ? 34 : 40, height: isMobile ? 34 : 40, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 16 : 18} color="#7c3aed" strokeWidth={1.8} />
                    </div>
                    <div style={{ paddingTop: 2 }}>
                      <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 800, color: "#7c3aed", margin: "0 0 2px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 10 : 11, color: "#64748b", margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {isMobile && (
            <div style={{ width: "100%", height: 280, backgroundImage: "url('/parentbackground4.webp')", backgroundSize: "cover", backgroundPosition: "center top" }} />
          )}

          {/* Bottom strip — 5 small items, white bg */}
          <motion.div {...fadeUp(0.1)} style={{ background: "#ffffff", borderTop: "1px solid #f3e8ff" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "24px 20px" : isTablet ? "28px 32px" : "32px 60px" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)",
                gap: isMobile ? 16 : 20,
              }}>
                {[
                  { icon: GraduationCap, label: "Improved\nunderstanding", desc: "Complex topics made simple." },
                  { icon: Target, label: "Academic\nperformance", desc: "Better understanding leads to better results." },
                  { icon: Lightbulb, label: "Critical thinking\n& curiosity", desc: "Encourages questions, exploration and imagination." },
                  { icon: Clock, label: "Study\nefficiency", desc: "Less time memorizing, more time understanding." },
                  { icon: Heart, label: "Love for\nlearning", desc: "Makes learning an experience, not a task." },
                ].map(({ icon: Icon, label, desc }, i) => (
                  <motion.div key={label} {...fadeUp(0.08 + i * 0.06)}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 8 }}
                  >
                    <div style={{
                      width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: "50%",
                      background: "#f3e8ff", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 20 : 24} color="#7c3aed" strokeWidth={1.8} />
                    </div>
                    <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 800, color: "#7c3aed", margin: 0, whiteSpace: "pre-line", lineHeight: 1.3 }}>{label}</p>
                    <p style={{ fontSize: isMobile ? 10 : 11, color: "#64748b", margin: 0, lineHeight: 1.5 }}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — Technology that fits healthy habits
          Background: parentbackground5.webp (80% width, right)
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        backgroundColor: "#ffffff",
        backgroundImage: isMobile ? "none" : "url('/parentbackground5.webp')",
        backgroundSize: "80% auto",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex", flexDirection: "column",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#ffffff 0%,#ffffff 22%,rgba(255,255,255,0.96)32%,rgba(255,255,255,0.65)44%,rgba(255,255,255,0.08)60%,rgba(255,255,255,0)72%)"
              : "linear-gradient(to right,#ffffff 0%,#ffffff 20%,rgba(255,255,255,0.96)30%,rgba(255,255,255,0.6)42%,rgba(255,255,255,0.06)58%,rgba(255,255,255,0)70%)",
          }} />
        )}
        <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{
            maxWidth: 1400, margin: "0 auto", width: "100%",
            padding: isMobile ? "110px 20px 0" : isTablet ? "120px 32px 0" : "130px 60px 0",
            flex: 1, position: "relative",
          }}>



            <div style={{ width: isMobile ? "100%" : isTablet ? "52%" : "44%" }}>
              {/* Heading */}
              <motion.h2 {...fadeLeft(0.1)} style={{
                fontSize: isMobile ? "clamp(28px,8vw,42px)" : isTablet ? "clamp(30px,4.2vw,48px)" : "clamp(34px,3.5vw,54px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.08,
                margin: "0 0 16px", letterSpacing: "-0.02em",
              }}>
                Technology that fits{" "}
                <span style={{ color: "#7c3aed" }}>healthy habits.<br />Balanced for real life.</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p {...fadeLeft(0.15)} style={{
                fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7,
                margin: "0 0 20px", fontWeight: 500, maxWidth: 340,
              }}>
                SparkVR is designed to support your child&apos;s learning without disrupting their well-being, routine, or everyday life.
              </motion.p>

              {/* 4 feature cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 9, maxWidth: isMobile ? "100%" : 380 }}>
                {sectionFeatures5.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: 0.18 + i * 0.08, duration: 0.55, ease: EASE }}
                    whileHover={{ x: 5, boxShadow: "0 6px 20px rgba(124,58,237,0.1)" }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      background: "#ffffff", borderRadius: 12,
                      border: "1px solid rgba(124,58,237,0.1)",
                      padding: isMobile ? "12px 14px" : "13px 15px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.22s ease",
                    }}
                  >
                    <div style={{
                      width: isMobile ? 34 : 40, height: isMobile ? 34 : 40, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={isMobile ? 16 : 18} color="#7c3aed" strokeWidth={1.8} />
                    </div>
                    <div style={{ paddingTop: 2 }}>
                      <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 800, color: "#7c3aed", margin: "0 0 2px" }}>{title}</p>
                      <p style={{ fontSize: isMobile ? 10 : 11, color: "#64748b", margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {isMobile && (
            <div style={{ width: "100%", height: 280, backgroundImage: "url('/parentbackground5.webp')", backgroundSize: "cover", backgroundPosition: "center top" }} />
          )}

          {/* Bottom strip — 5 small items */}
          <motion.div {...fadeUp(0.1)} style={{ background: "#ede9fe" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "24px 20px" : isTablet ? "28px 32px" : "32px 60px" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)",
                gap: isMobile ? 16 : 24,
              }}>
                {[
                  { icon: Hourglass, label: "Right amount\nof screen time" },
                  { icon: Heart, label: "Better habits\nfor better focus" },
                  { icon: Lock, label: "Safe content,\nsecure experience" },
                  { icon: Users, label: "Your child's\nwell-being comes first" },
                  { icon: Star, label: "Technology that\nsupports, not replaces" },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.div key={label} {...fadeUp(0.08 + i * 0.06)}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 8 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -3 }}
                      style={{
                        width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: "50%",
                        background: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 4px 14px rgba(124,58,237,0.12)",
                      }}
                    >
                      <Icon size={isMobile ? 20 : 24} color="#7c3aed" strokeWidth={1.8} />
                    </motion.div>
                    <p style={{ fontSize: isMobile ? 11 : 12, fontWeight: 700, color: "#4c1d95", margin: 0, lineHeight: 1.4, whiteSpace: "pre-line" }}>{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — Parent Confidence & Trust
          Background: parentbackground6.webp
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        backgroundColor: "#ffffff",
        backgroundImage: isMobile ? "none" : "url('/parentbackground6.webp')",
        backgroundSize: "80% auto", backgroundPosition: "right top", backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "auto" : "100vh", display: "flex", flexDirection: "column",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#ffffff 0%,#ffffff 22%,rgba(255,255,255,0.96)32%,rgba(255,255,255,0.65)44%,rgba(255,255,255,0.08)60%,rgba(255,255,255,0)72%)"
              : "linear-gradient(to right,#ffffff 0%,#ffffff 20%,rgba(255,255,255,0.96)30%,rgba(255,255,255,0.6)42%,rgba(255,255,255,0.06)58%,rgba(255,255,255,0)70%)",
          }} />
        )}
        <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", padding: isMobile ? "110px 20px 0" : isTablet ? "120px 32px 0" : "130px 60px 0", flex: 1, position: "relative" }}>

            {/* ── Parent Dashboard floating card ── */}
            {!isMobile && !isTablet && (
              <motion.div {...fadeRight(0.18)} style={{
                position: "absolute", left: isTablet ? "44%" : "42%", top: 0,
                width: isTablet ? 220 : 260,
                background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
                borderRadius: 20, border: "1.5px solid rgba(124,58,237,0.12)",
                padding: "20px 18px", boxShadow: "0 12px 40px rgba(124,58,237,0.14)",
              }}>
                <p style={{ fontSize: 14, fontWeight: 900, color: "#0f172a", margin: "0 0 2px" }}>Parent Dashboard</p>
                <p style={{ fontSize: 11, color: "#64748b", margin: "0 0 14px", fontWeight: 500 }}>Real insights. Real progress.</p>
                {[
                  { icon: Clock, label: "Total Learning Time", value: "3h 45m", valueColor: "#7c3aed", bars: [3, 5, 4, 6, 5, 7, 6] },
                  { icon: CheckCircle2, label: "Sessions Completed", value: "12", valueColor: "#059669", bars: [2, 4, 3, 5, 4, 6, 5] },
                  { icon: Star, label: "Topics Explored", value: "8", valueColor: "#2563eb", bars: [1, 3, 2, 4, 3, 5, 4] },
                ].map(({ icon: Icon, label, value, valueColor, bars }) => (
                  <div key={label} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 0", borderBottom: "1px solid #f3e8ff",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${valueColor}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={15} color={valueColor} strokeWidth={2} />
                      </div>
                      <div>
                        <p style={{ fontSize: 11, color: "#64748b", margin: 0, fontWeight: 500 }}>{label}</p>
                        <p style={{ fontSize: 14, fontWeight: 900, color: valueColor, margin: 0, lineHeight: 1 }}>{value}</p>
                        <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>This week</p>
                      </div>
                    </div>
                    {/* Mini bar chart */}
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 24 }}>
                      {bars.map((h, i) => (
                        <div key={i} style={{ width: 4, height: `${h * 14}%`, background: i === bars.length - 1 ? valueColor : `${valueColor}40`, borderRadius: 2, minHeight: 4 }} />
                      ))}
                    </div>
                  </div>
                ))}
                {/* Streak card */}
                <div style={{ background: "#f3e8ff", borderRadius: 12, padding: "10px 12px", marginTop: 10, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Heart size={13} color="#fff" fill="#fff" strokeWidth={0} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 800, color: "#7c3aed", margin: 0 }}>Great job! 🎉</p>
                    <p style={{ fontSize: 10, color: "#6d28d9", margin: 0, lineHeight: 1.4 }}>Your child is on a 5-day learning streak!</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── What parents love card ── */}
            {!isMobile && !isTablet && (
              <motion.div {...fadeRight(0.28)} style={{
                position: "absolute", right: 0,
                top: isTablet ? "82%" : "80%", width: isTablet ? 180 : 210,
                background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
                borderRadius: 18, border: "1.5px solid rgba(124,58,237,0.12)",
                padding: "16px 14px", boxShadow: "0 12px 40px rgba(124,58,237,0.14)",
              }}>
                <p style={{ fontSize: 13, fontWeight: 900, color: "#0f172a", margin: "0 0 12px" }}>What parents love</p>
                {[
                  { icon: ShieldCheck, color: "#2563eb", bg: "#dbeafe", title: "Safe and secure", desc: "Curated, ad-free content in a protected environment." },
                  { icon: BarChart3, color: "#7c3aed", bg: "#f3e8ff", title: "Meaningful progress", desc: "See real learning outcomes and improvements." },
                  { icon: Heart, color: "#7c3aed", bg: "#f3e8ff", title: "Peace of mind", desc: "Know your child is using technology the right way." },
                ].map(({ icon: Icon, color, bg, title, desc }, i) => (
                  <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: i < 2 ? 10 : 0, paddingBottom: i < 2 ? 10 : 0, borderBottom: i < 2 ? "1px solid #f3e8ff" : "none" }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={12} color={color} strokeWidth={2} />
                    </div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 800, color: "#7c3aed", margin: "0 0 2px" }}>{title}</p>
                      <p style={{ fontSize: 10, color: "#64748b", margin: 0, lineHeight: 1.4, fontWeight: 500 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Left content */}
            <div style={{ width: isMobile ? "100%" : isTablet ? "52%" : "44%" }}>

              <motion.h2 {...fadeLeft(0.1)} style={{
                fontSize: isMobile ? "clamp(30px,9vw,44px)" : isTablet ? "clamp(32px,4.5vw,50px)" : "clamp(36px,3.8vw,56px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.08, margin: "0 0 4px", letterSpacing: "-0.02em",
              }}>
                Confidence comes<br />from clarity.
              </motion.h2>
              <motion.h2 {...fadeLeft(0.14)} style={{
                fontSize: isMobile ? "clamp(28px,8vw,42px)" : isTablet ? "clamp(30px,4.2vw,48px)" : "clamp(34px,3.5vw,52px)",
                fontWeight: 900, color: "#7c3aed", lineHeight: 1.08, margin: "0 0 16px", letterSpacing: "-0.02em",
              }}>
                You see it.<br />You trust it.
              </motion.h2>
              <motion.p {...fadeLeft(0.18)} style={{ fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7, margin: "0 0 24px", fontWeight: 500, maxWidth: 320 }}>
                SparkVR keeps you informed with real insights, so you always know your child is learning, growing, and thriving.
              </motion.p>
              {/* Trust card */}
              <motion.div {...fadeLeft(0.22)} style={{
                background: "#f5f3ff", borderRadius: 16, padding: "18px 20px",
                border: "1.5px solid #ede9fe", display: "flex", alignItems: "flex-start", gap: 14,
                maxWidth: 320,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck size={22} color="#fff" strokeWidth={2} />
                </div>
                <div>
                  <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 900, color: "#7c3aed", margin: "0 0 4px", lineHeight: 1.4 }}>
                    Built for trust.<br />Designed for parents.<br />Loved by kids.
                  </p>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0, fontWeight: 500 }}>Transparency you deserve. Learning they value.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {isMobile && (
            <div style={{ width: "100%", height: 280, backgroundImage: "url('/parentbackground6.webp')", backgroundSize: "cover", backgroundPosition: "center top" }} />
          )}

          {/* Middle strip — lavender */}
          <motion.div {...fadeUp(0.1)} style={{ background: "#ede9fe", marginTop: isMobile ? 0 : 200 }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "24px 20px" : isTablet ? "28px 32px" : "32px 60px" }}>
              <motion.p {...fadeUp(0.05)} style={{ fontSize: isMobile ? 14 : 17, fontWeight: 900, color: "#7c3aed", textAlign: "center", margin: "0 0 24px" }}>
                You&apos;re part of your child&apos;s journey—every step of the way.
              </motion.p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)", gap: isMobile ? 16 : 20 }}>
                {[
                  { icon: Eye, label: "Stay informed", desc: "Clear dashboards keep you updated anytime." },
                  { icon: Heart, label: "Celebrate growth", desc: "Track achievements and encourage their curiosity." },
                  { icon: Users, label: "Be involved", desc: "Engage in their learning and conversations." },
                  { icon: ShieldCheck, label: "Trust the process", desc: "Backed by research and built for real learning." },
                  { icon: Zap, label: "Stronger together", desc: "SparkVR + You = Bright futures." },
                ].map(({ icon: Icon, label, desc }, i) => (
                  <motion.div key={label} {...fadeUp(0.08 + i * 0.06)} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 8 }}>
                    <motion.div whileHover={{ scale: 1.1 }} style={{ width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: "50%", background: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={isMobile ? 20 : 24} color="#7c3aed" strokeWidth={1.8} />
                    </motion.div>
                    <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 800, color: "#4c1d95", margin: 0 }}>{label}</p>
                    <p style={{ fontSize: isMobile ? 10 : 11, color: "#6d28d9", margin: 0, lineHeight: 1.5, opacity: 0.8 }}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom white strip */}
          <motion.div {...fadeUp(0.1)} style={{ background: "#ffffff" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "24px 20px" : isTablet ? "28px 32px" : "32px 60px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? 20 : 48 }}>
              {/* Left */}
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <motion.div animate={{ scale: [1, 1.07, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ width: isMobile ? 56 : 68, height: isMobile ? 56 : 68, borderRadius: "50%", background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 8px 28px rgba(124,58,237,0.35)" }}>
                  <Heart size={isMobile ? 26 : 32} color="#fff" fill="#fff" strokeWidth={0} />
                </motion.div>
                <div>
                  <p style={{ fontSize: isMobile ? 15 : 18, fontWeight: 900, color: "#0f172a", margin: "0 0 4px" }}>Your trust inspires their future.</p>
                  <p style={{ fontSize: isMobile ? 12 : 13, color: "#64748b", margin: 0, fontWeight: 500 }}>SparkVR makes learning meaningful, measurable, and trustworthy.</p>
                </div>
              </div>
              {/* Right — hand-heart illustration + text */}
              {!isMobile && (
                <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
                  <svg width="80" height="72" viewBox="0 0 80 72" fill="none">
                    <path d="M40 60C38 58 12 42 12 26c0-8 6-14 14-14 4 0 8 2 11 5 1.5 1.8 3 1.8 6 0 3-3 7-5 11-5 8 0 14 6 14 14 0 16-26 32-28 34z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
                    <path d="M24 20c-3 0-6 3-6 6" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="40" cy="32" r="6" fill="#7c3aed" opacity="0.3" />
                    <path d="M34 52c4 4 8 6 6 0" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#7c3aed", margin: 0, fontStyle: "italic", lineHeight: 1.5 }}>
                      You trust SparkVR.<br />They love SparkVR.<br />Learning happens.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — Ready to Get Started?
          Background: parentbackground7.webp
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        backgroundColor: "#ffffff",
        backgroundImage: isMobile ? "none" : "url('/parentbackground7.webp')",
        backgroundSize: "80% auto", backgroundPosition: "right top", backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "auto" : "100vh", display: "flex", flexDirection: "column",
      }}>
        {!isMobile && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            background: isTablet
              ? "linear-gradient(to right,#ffffff 0%,#ffffff 22%,rgba(255,255,255,0.96)32%,rgba(255,255,255,0.65)44%,rgba(255,255,255,0.08)60%,rgba(255,255,255,0)72%)"
              : "linear-gradient(to right,#ffffff 0%,#ffffff 20%,rgba(255,255,255,0.96)30%,rgba(255,255,255,0.6)42%,rgba(255,255,255,0.06)58%,rgba(255,255,255,0)70%)",
          }} />
        )}
        <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", padding: isMobile ? "110px 20px 0" : isTablet ? "120px 32px 0" : "130px 60px 0", flex: 1, position: "relative" }}>

            {/* "A smarter choice" floating card — right side */}
            {!isMobile && !isTablet && (
              <motion.div {...fadeRight(0.25)} style={{
                position: "absolute", right: isTablet ? 32 : 60, top: "78%",
                background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)",
                borderRadius: 40, border: "1.5px solid rgba(124,58,237,0.12)",
                padding: "14px 20px", boxShadow: "0 8px 32px rgba(124,58,237,0.12)",
                display: "flex", alignItems: "center", gap: 12, maxWidth: 260,
              }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#f3e8ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Heart size={17} color="#7c3aed" fill="#7c3aed" strokeWidth={0} />
                </div>
                <p style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", margin: 0, lineHeight: 1.35 }}>A smarter choice<br />for a brighter future.</p>
              </motion.div>
            )}

            {/* Left content */}
            <div style={{ width: isMobile ? "100%" : isTablet ? "52%" : "44%" }}>


              <motion.h2 {...fadeLeft(0.1)} style={{
                fontSize: isMobile ? "clamp(30px,9vw,44px)" : isTablet ? "clamp(32px,4.5vw,50px)" : "clamp(36px,3.8vw,56px)",
                fontWeight: 900, color: "#0f172a", lineHeight: 1.08, margin: "0 0 16px", letterSpacing: "-0.02em",
              }}>
                Give your child{" "}
                <span style={{ color: "#7c3aed" }}>screen time that truly matters.</span>
              </motion.h2>
              <motion.p {...fadeLeft(0.15)} style={{ fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.7, margin: "0 0 28px", fontWeight: 500, maxWidth: 360 }}>
                SparkVR turns every minute into meaningful learning, curiosity, and confidence.
              </motion.p>
              {/* 4 feature items */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, auto)", gap: isMobile ? 16 : 20, maxWidth: isMobile ? "100%" : 440 }}>
                {[
                  { icon: Rocket, bg: "#7c3aed", title: "Easy to start", desc: "Quick setup, big impact." },
                  { icon: ShieldCheck, bg: "#059669", title: "Safe & secure", desc: "Designed with your child's safety in mind." },
                  { icon: TrendingUp, bg: "#d97706", title: "Real results", desc: "Track progress and see them grow." },
                  { icon: Heart, bg: "#2563eb", title: "Loved by parents & kids", desc: "Trusted by families like yours." },
                ].map(({ icon: Icon, bg, title, desc }, i) => (
                  <motion.div key={title} {...fadeUp(0.18 + i * 0.07)} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={isMobile ? 20 : 24} color="#fff" strokeWidth={1.8} fill={title.includes("Loved") ? "#fff" : "none"} />
                    </div>
                    <p style={{ fontSize: isMobile ? 12 : 13, fontWeight: 800, color: "#0f172a", margin: 0 }}>{title}</p>
                    <p style={{ fontSize: isMobile ? 10 : 11, color: "#64748b", margin: 0, lineHeight: 1.5 }}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {isMobile && (
            <div style={{ width: "100%", height: 260, backgroundImage: "url('/parentbackground7.webp')", backgroundSize: "cover", backgroundPosition: "center top" }} />
          )}

          {/* Dark purple CTA bar */}
          <motion.div {...fadeUp(0.1)} style={{ background: "linear-gradient(135deg,#4c1d95 0%,#6d28d9 60%,#7c3aed 100%)", margin: isMobile ? "24px 16px" : "32px 0 0", borderRadius: isMobile ? 20 : "20px 20px 0 0" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "28px 24px" : isTablet ? "32px 32px" : "36px 60px" }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 20 : 40 }}>
                {/* Left: rocket + text */}
                <div style={{ display: "flex", alignItems: "center", gap: 18, flex: isMobile ? "none" : 1 }}>
                  <div style={{ width: isMobile ? 56 : 72, height: isMobile ? 56 : 72, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Rocket size={isMobile ? 26 : 34} color="#fff" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p style={{ fontSize: isMobile ? 16 : 20, fontWeight: 900, color: "#fff", margin: "0 0 4px" }}>Start their learning journey today.</p>
                    <p style={{ fontSize: isMobile ? 12 : 14, color: "rgba(255,255,255,0.75)", margin: 0, fontWeight: 500 }}>Meaningful today. Successful tomorrow.</p>
                  </div>
                </div>
                {/* Buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#ffffff", borderRadius: 40, padding: isMobile ? "12px 22px" : "14px 28px", cursor: "pointer" }}>
                        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <ArrowRight size={14} color="#fff" strokeWidth={2.5} />
                        </div>
                        <span style={{ fontSize: isMobile ? 13 : 15, fontWeight: 800, color: "#4c1d95" }}>Get Started with SparkVR</span>
                      </motion.div>
                    </Link>
                    <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-flex", alignItems: "center", background: "transparent", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 40, padding: isMobile ? "12px 22px" : "14px 28px", cursor: "pointer" }}>
                        <span style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#fff" }}>Book a Demo</span>
                      </motion.div>
                    </Link>
                  </div>
                  {/* Trust items */}
                  <div style={{ display: "flex", gap: isMobile ? 12 : 20, flexWrap: "wrap" }}>
                    {[
                      { icon: ShieldCheck, label: "No hidden fees" },
                      { icon: CheckCircle2, label: "Cancel anytime" },
                      { icon: ShieldCheck, label: "7-day free trial" },
                      { icon: Settings, label: "Works with most VR headsets" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <Icon size={13} color="rgba(255,255,255,0.7)" strokeWidth={2} />
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
