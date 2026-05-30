"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, X, ArrowRight,
  GraduationCap, Users, Heart, BookOpen,
  Layers, Clock, TrendingUp, Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Nav data ──────────────────────────────────────── */
type Child = { label: string; href: string; desc: string; icon: React.ElementType };
type NavItem = { label: string; href?: string; children?: Child[] };

const NAV: NavItem[] = [
  {
    label: "Who It's For",
    children: [
      { label: "For Schools",  href: "/schools",  desc: "VR labs designed for real classrooms",     icon: GraduationCap },
      { label: "For Teachers", href: "/teachers", desc: "Tools that make teaching more impactful",  icon: Users         },
      { label: "For Parents",  href: "/parents",  desc: "Help your child learn and grow",           icon: Heart         },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "Curriculum",        href: "/curriculum",         desc: "430+ NCERT-aligned 3D modules",      icon: BookOpen   },
      { label: "Subject Expansion", href: "/subject-expansion",  desc: "Science, Geography, History & more", icon: Layers     },
      { label: "Timetable",         href: "/timetable",          desc: "Structured 40-minute sessions",      icon: Clock      },
      { label: "Learning Outcome",  href: "/learning-outcome",   desc: "Measurable academic impact",         icon: TrendingUp },
    ],
  },
  { label: "Blog",  href: "/blog"   },
  { label: "About", href: "/about"  },
];

/* ── Hook: screen width ───────────────────────────── */
function useScreenWidth() {
  const [w, setW] = useState(1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

/* ═══════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════ */
export default function Navbar() {
  const pathname = usePathname();
  const sw = useScreenWidth();
  const isMobile = sw < 1024;          // mobile/tablet: < 1024px
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeDD,    setActiveDD]    = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const ddTimeout = useRef<ReturnType<typeof setTimeout>>();

  /* scroll listener */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* lock body on mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* close mobile menu on route change */
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  /* dropdown hover helpers */
  const openDD  = (label: string) => { clearTimeout(ddTimeout.current); setActiveDD(label); };
  const closeDD = ()               => { ddTimeout.current = setTimeout(() => setActiveDD(null), 120); };
  const keepDD  = ()               => { clearTimeout(ddTimeout.current); };

  const isActive = (href?: string) =>
    href ? (pathname === href || pathname.startsWith(href + "/")) : false;

  const isGroupActive = (item: NavItem) =>
    item.children?.some(c => isActive(c.href)) ?? false;

  return (
    <>
      {/* ══════════ NAV BAR ══════════ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          height: isMobile ? 64 : 68,
          display: "flex", alignItems: "center",
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0.0)",
          backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,26,77,0.07)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,26,77,0.06)" : "none",
          transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        <div style={{
          maxWidth: 1400, margin: "0 auto", width: "100%",
          paddingLeft: isMobile ? 20 : 60, paddingRight: isMobile ? 20 : 60,
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32,
        }}>

          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
            <motion.img
              src="/logo1.png" alt="SparkVR"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              style={{ height: isMobile ? 40 : 50, width: "auto", objectFit: "contain", display: "block" }}
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}>
              {NAV.map((item) => {
                const active = item.href ? isActive(item.href) : isGroupActive(item);
                const ddOpen = activeDD === item.label;

                return (
                  <div
                    key={item.label}
                    style={{ position: "relative" }}
                    onMouseEnter={() => item.children && openDD(item.label)}
                    onMouseLeave={closeDD}
                  >
                    {/* Link or trigger */}
                    {item.href ? (
                      <Link href={item.href} style={{ textDecoration: "none" }}>
                        <motion.div
                          whileHover={{ color: "#2563eb" }}
                          style={{
                            display: "flex", alignItems: "center", gap: 4,
                            padding: "10px 14px", borderRadius: 10, cursor: "pointer",
                            fontSize: 14, fontWeight: 600,
                            color: active ? "#2563eb" : "#0f172a",
                            position: "relative",
                            transition: "color 0.2s ease",
                          }}
                        >
                          {item.label}
                          {/* Active indicator dot */}
                          {active && (
                            <motion.div
                              layoutId="activeNavDot"
                              style={{
                                position: "absolute", bottom: 6, left: "50%",
                                transform: "translateX(-50%)",
                                width: 4, height: 4, borderRadius: "50%", background: "#2563eb",
                              }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    ) : (
                      <motion.div
                        whileHover={{ color: "#2563eb" }}
                        style={{
                          display: "flex", alignItems: "center", gap: 4,
                          padding: "10px 14px", borderRadius: 10, cursor: "default",
                          fontSize: 14, fontWeight: 600,
                          color: active ? "#2563eb" : "#0f172a",
                          position: "relative",
                          transition: "color 0.2s ease",
                          userSelect: "none",
                        }}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: ddOpen ? 180 : 0 }}
                          transition={{ duration: 0.22 }}
                        >
                          <ChevronDown size={14} strokeWidth={2.2} color={active ? "#2563eb" : "currentColor"} />
                        </motion.div>
                        {active && (
                          <motion.div
                            layoutId="activeNavDot"
                            style={{
                              position: "absolute", bottom: 6, left: "50%",
                              transform: "translateX(-50%)",
                              width: 4, height: 4, borderRadius: "50%", background: "#2563eb",
                            }}
                          />
                        )}
                      </motion.div>
                    )}

                    {/* DROPDOWN */}
                    <AnimatePresence>
                      {item.children && ddOpen && (
                        <motion.div
                          key="dropdown"
                          initial={{ opacity: 0, y: -8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0,  scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: EASE }}
                          onMouseEnter={keepDD}
                          onMouseLeave={closeDD}
                          style={{
                            position: "absolute", top: "calc(100% + 8px)",
                            left: "50%", transform: "translateX(-50%)",
                            background: "#ffffff",
                            borderRadius: 18,
                            border: "1px solid rgba(0,26,77,0.08)",
                            boxShadow: "0 16px 48px rgba(0,26,77,0.12), 0 2px 8px rgba(0,26,77,0.06)",
                            padding: "8px",
                            minWidth: item.children.length > 3 ? 480 : 260,
                            display: "grid",
                            gridTemplateColumns: item.children.length > 3 ? "1fr 1fr" : "1fr",
                            gap: 2,
                            zIndex: 100,
                          }}
                        >
                          {item.children.map((child, ci) => (
                            <Link key={child.label} href={child.href} style={{ textDecoration: "none" }}>
                              <motion.div
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: ci * 0.04, duration: 0.2 }}
                                whileHover={{ background: "#f8faff", x: 2 }}
                                style={{
                                  display: "flex", alignItems: "flex-start", gap: 12,
                                  padding: "12px 14px", borderRadius: 12,
                                  cursor: "pointer", transition: "all 0.15s ease",
                                  background: isActive(child.href) ? "#eff6ff" : "transparent",
                                }}
                                onClick={() => setActiveDD(null)}
                              >
                                <div style={{
                                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                                  background: isActive(child.href) ? "#dbeafe" : "#f0f4ff",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                  <child.icon size={17} color={isActive(child.href) ? "#2563eb" : "#475569"} strokeWidth={1.8} />
                                </div>
                                <div>
                                  <p style={{
                                    fontSize: 13, fontWeight: 700,
                                    color: isActive(child.href) ? "#2563eb" : "#0f172a",
                                    margin: 0,
                                  }}>{child.label}</p>
                                  <p style={{ fontSize: 12, color: "#64748b", margin: "2px 0 0", fontWeight: 500 }}>{child.desc}</p>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          )}

          {/* ── RIGHT: CTA + Hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>

            {/* Desktop CTA */}
            {!isMobile && (
              <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: "0 14px 36px rgba(29,78,216,0.38)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 55%, #38bdf8 100%)",
                    borderRadius: 40, padding: "11px 24px",
                    display: "inline-flex", alignItems: "center", gap: 8,
                    boxShadow: "0 8px 24px rgba(29,78,216,0.28)",
                    cursor: "pointer",
                  }}
                >
                  <Sparkles size={13} color="#fff" strokeWidth={2} />
                  <span style={{
                    color: "#fff", fontSize: 12, fontWeight: 700,
                    letterSpacing: "0.1em", whiteSpace: "nowrap",
                  }}>BOOK FREE WORKSHOP</span>
                </motion.div>
              </Link>
            )}

            {/* Hamburger (mobile) */}
            {isMobile && (
              <motion.button
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Toggle navigation"
                whileTap={{ scale: 0.93 }}
                style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: mobileOpen ? "#2563eb" : "rgba(255,255,255,0.9)",
                  border: `1px solid ${mobileOpen ? "#2563eb" : "rgba(0,26,77,0.1)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "all 0.25s ease",
                  position: "relative", zIndex: 1002,
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div key="x"
                      initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}
                    >
                      <X size={18} color="#fff" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu"
                      initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}
                      style={{ display: "flex", flexDirection: "column", gap: 5 }}
                    >
                      <div style={{ width: 18, height: 2, borderRadius: 2, background: "#0f172a" }} />
                      <div style={{ width: 13, height: 2, borderRadius: 2, background: "#0f172a" }} />
                      <div style={{ width: 18, height: 2, borderRadius: 2, background: "#0f172a" }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        </div>
      </motion.header>

      {/* ══════════ MOBILE DRAWER ══════════ */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 998,
                background: "rgba(2,8,28,0.52)",
                backdropFilter: "blur(6px)",
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: EASE }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "min(88vw, 380px)",
                zIndex: 999,
                background: "#ffffff",
                display: "flex", flexDirection: "column",
                boxShadow: "-8px 0 48px rgba(0,26,77,0.18)",
                overflowY: "auto",
              }}
            >
              {/* Drawer header */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid rgba(0,26,77,0.06)",
                position: "sticky", top: 0, background: "#ffffff", zIndex: 2,
              }}>
                <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none" }}>
                  <img src="/logo1.png" alt="SparkVR" style={{ height: 38, objectFit: "contain" }} />
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "#f1f5f9", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={16} color="#475569" strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Nav items */}
              <div style={{ flex: 1, padding: "12px 12px 0", display: "flex", flexDirection: "column", gap: 2 }}>
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.3, ease: EASE }}
                  >
                    {item.children ? (
                      /* Group with children */
                      <div>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          style={{
                            width: "100%", display: "flex", alignItems: "center",
                            justifyContent: "space-between",
                            padding: "12px 16px", borderRadius: 12,
                            background: mobileExpanded === item.label ? "#eff6ff" : "transparent",
                            border: "none", cursor: "pointer",
                            fontSize: 14, fontWeight: 700,
                            color: mobileExpanded === item.label ? "#2563eb" : "#0f172a",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {item.label}
                          <motion.div animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }} transition={{ duration: 0.22 }}>
                            <ChevronDown size={15} strokeWidth={2.2} />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              style={{ overflow: "hidden" }}
                            >
                              <div style={{ padding: "4px 0 8px 8px", display: "flex", flexDirection: "column", gap: 1 }}>
                                {item.children.map((child) => (
                                  <Link key={child.href} href={child.href} style={{ textDecoration: "none" }}
                                    onClick={() => setMobileOpen(false)}>
                                    <motion.div
                                      whileTap={{ scale: 0.97 }}
                                      style={{
                                        display: "flex", alignItems: "center", gap: 12,
                                        padding: "10px 14px", borderRadius: 10,
                                        background: isActive(child.href) ? "#eff6ff" : "transparent",
                                        transition: "background 0.15s ease",
                                      }}
                                    >
                                      <div style={{
                                        width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                                        background: isActive(child.href) ? "#dbeafe" : "#f1f5f9",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                      }}>
                                        <child.icon size={15} color={isActive(child.href) ? "#2563eb" : "#64748b"} strokeWidth={1.8} />
                                      </div>
                                      <div>
                                        <p style={{ fontSize: 13, fontWeight: 700, color: isActive(child.href) ? "#2563eb" : "#0f172a", margin: 0 }}>{child.label}</p>
                                        <p style={{ fontSize: 11, color: "#94a3b8", margin: "1px 0 0", fontWeight: 500 }}>{child.desc}</p>
                                      </div>
                                    </motion.div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* Single link */
                      <Link href={item.href!} style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                        <motion.div
                          whileTap={{ scale: 0.97 }}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "12px 16px", borderRadius: 12,
                            background: isActive(item.href) ? "#eff6ff" : "transparent",
                            fontSize: 14, fontWeight: 700,
                            color: isActive(item.href) ? "#2563eb" : "#0f172a",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {item.label}
                          <ArrowRight size={14} color={isActive(item.href) ? "#2563eb" : "#94a3b8"} strokeWidth={2} />
                        </motion.div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Drawer footer: CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                style={{ padding: "16px 16px 32px", borderTop: "1px solid rgba(0,26,77,0.06)", marginTop: 12 }}
              >
                <Link href="/contact#contact-form" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    style={{
                      background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 55%, #38bdf8 100%)",
                      borderRadius: 14, padding: "15px 0",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      cursor: "pointer",
                      boxShadow: "0 8px 24px rgba(29,78,216,0.28)",
                    }}
                  >
                    <Sparkles size={15} color="#fff" strokeWidth={2} />
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>
                      BOOK FREE WORKSHOP
                    </span>
                  </motion.div>
                </Link>

                {/* Secondary links */}
                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                  {[
                    { label: "Contact", href: "/contact#contact-form" },
                    { label: "Blog",    href: "/blog"                  },
                    { label: "About",   href: "/about"                 },
                  ].map(l => (
                    <Link key={l.label} href={l.href} style={{ textDecoration: "none", flex: 1 }}
                      onClick={() => setMobileOpen(false)}>
                      <div style={{
                        textAlign: "center", padding: "10px 0", borderRadius: 10,
                        background: "#f8faff", fontSize: 12, fontWeight: 600,
                        color: "#475569",
                      }}>
                        {l.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
