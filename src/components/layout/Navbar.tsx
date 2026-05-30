"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

/* ── Nav link groups ── */
const NAV_GROUPS = [
  {
    label: "For You",
    links: [
      { label: "For Schools",   href: "/schools",   desc: "VR labs built for real classrooms" },
      { label: "For Teachers",  href: "/teachers",  desc: "Tools that make teaching effortless" },
      { label: "For Parents",   href: "/parents",   desc: "Learning your child will love" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "Curriculum",        href: "/curriculum",        desc: "430+ NCERT-aligned modules" },
      { label: "Subject Expansion", href: "/subject-expansion", desc: "Science, Geography & more" },
      { label: "Timetable",         href: "/timetable",         desc: "Structured 40-min sessions" },
      { label: "Learning Outcome",  href: "/learning-outcome",  desc: "Measurable academic impact" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About",   href: "/about",   desc: "Our story and mission" },
      { label: "Blog",    href: "/blog",    desc: "Insights on EdTech & VR" },
      { label: "Contact", href: "/contact", desc: "Get in touch with us" },
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const [isMobile, setIsMobile]       = useState(false);
  const [isTablet, setIsTablet]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1100);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* close dropdown when clicking outside */
  useEffect(() => {
    if (activeGroup === null) return;
    const close = () => setActiveGroup(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [activeGroup]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const groupActive = (g: (typeof NAV_GROUPS)[0]) => g.links.some(l => isActive(l.href));

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          transition: "all 0.35s ease",
          ...(scrolled ? {
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 1px 0 rgba(0,0,0,0.06), 0 8px 32px rgba(0,26,77,0.08)",
            height: isMobile ? 68 : 72,
          } : {
            background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)",
            backdropFilter: "blur(0px)",
            height: isMobile ? 76 : 88,
          }),
        }}
      >
        <div style={{
          maxWidth: 1400, margin: "0 auto", width: "100%", height: "100%",
          paddingLeft: isMobile ? 20 : 60, paddingRight: isMobile ? 20 : 60,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <img
              src="/logo1.png" alt="SparkVR"
              style={{ height: isMobile ? 40 : scrolled ? 46 : 54, width: "auto", objectFit: "contain", transition: "height 0.3s ease" }}
            />
          </Link>

          {/* ── DESKTOP NAV GROUPS ── */}
          {!isMobile && !isTablet && (
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {NAV_GROUPS.map((group, gi) => {
                const active = groupActive(group);
                const open   = activeGroup === gi;
                return (
                  <div key={group.label} style={{ position: "relative" }}>
                    <motion.button
                      onClick={(e) => { e.stopPropagation(); setActiveGroup(open ? null : gi); }}
                      whileHover={{ background: "rgba(37,99,235,0.06)" }}
                      style={{
                        display: "flex", alignItems: "center", gap: 5,
                        padding: "8px 16px", borderRadius: 10, border: "none",
                        background: open ? "rgba(37,99,235,0.08)" : "transparent",
                        cursor: "pointer", transition: "all 0.2s ease",
                      }}
                    >
                      <span style={{
                        fontSize: 13, fontWeight: 700,
                        color: active || open ? "#2563eb" : "#1e293b",
                        letterSpacing: "0.02em", transition: "color 0.2s",
                        fontFamily: "'VAG Rounded', sans-serif",
                      }}>
                        {group.label}
                      </span>
                      <motion.svg
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke={active || open ? "#2563eb" : "#64748b"} strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </motion.svg>
                      {/* Active indicator dot */}
                      {active && !open && (
                        <div style={{ position: "absolute", bottom: 4, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#2563eb" }} />
                      )}
                    </motion.button>

                    {/* ── Dropdown ── */}
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: EASE }}
                          onClick={e => e.stopPropagation()}
                          style={{
                            position: "absolute", top: "calc(100% + 12px)", left: "50%",
                            transform: "translateX(-50%)",
                            minWidth: 240,
                            background: "rgba(255,255,255,0.97)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            borderRadius: 18,
                            border: "1px solid rgba(37,99,235,0.1)",
                            boxShadow: "0 20px 60px rgba(0,26,77,0.14), 0 0 0 1px rgba(255,255,255,0.9)",
                            padding: "10px",
                            zIndex: 100,
                          }}
                        >
                          {/* Arrow tip */}
                          <div style={{
                            position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)",
                            width: 12, height: 12, background: "rgba(255,255,255,0.97)",
                            border: "1px solid rgba(37,99,235,0.1)",
                            transform: "translateX(-50%) rotate(45deg)",
                            borderRight: "none", borderBottom: "none",
                          }} />
                          {group.links.map((link, li) => {
                            const linkActive = isActive(link.href);
                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveGroup(null)}
                                style={{ textDecoration: "none", display: "block" }}
                              >
                                <motion.div
                                  whileHover={{ background: "rgba(37,99,235,0.06)", x: 4 }}
                                  style={{
                                    display: "flex", alignItems: "center", gap: 12,
                                    padding: "10px 14px", borderRadius: 12,
                                    background: linkActive ? "rgba(37,99,235,0.06)" : "transparent",
                                    transition: "all 0.15s ease",
                                  }}
                                >
                                  <div style={{
                                    width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                                    background: linkActive ? "#2563eb" : "#e2e8f0",
                                    transition: "background 0.2s",
                                  }} />
                                  <div>
                                    <p style={{
                                      fontSize: 13, fontWeight: 700, margin: 0,
                                      color: linkActive ? "#2563eb" : "#0f172a",
                                      fontFamily: "'VAG Rounded', sans-serif",
                                    }}>{link.label}</p>
                                    <p style={{ fontSize: 11, color: "#94a3b8", margin: 0, fontWeight: 500 }}>{link.desc}</p>
                                  </div>
                                  <ChevronRight size={13} color={linkActive ? "#2563eb" : "#cbd5e1"} style={{ marginLeft: "auto", flexShrink: 0 }} />
                                </motion.div>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── RIGHT SIDE ── */}
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 16 }}>

            {/* CTA button — desktop only */}
            {!isMobile && (
              <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(29,78,216,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                    borderRadius: 40, padding: isTablet ? "11px 22px" : "12px 28px",
                    display: "inline-flex", alignItems: "center", gap: 8,
                    boxShadow: "0 8px 24px rgba(29,78,216,0.28)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{
                    color: "#fff", fontSize: isTablet ? 11 : 12, fontWeight: 700,
                    letterSpacing: "0.12em", whiteSpace: "nowrap",
                    fontFamily: "'VAG Rounded', sans-serif",
                  }}>BOOK FREE WORKSHOP</span>
                </motion.div>
              </Link>
            )}

            {/* Hamburger — premium style */}
            <motion.button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              style={{
                width: isMobile ? 44 : 46, height: isMobile ? 44 : 46,
                borderRadius: 14,
                background: menuOpen
                  ? "linear-gradient(135deg, #1d4ed8, #2563eb)"
                  : scrolled ? "rgba(241,245,249,0.9)" : "rgba(255,255,255,0.85)",
                border: menuOpen ? "none" : "1px solid rgba(0,0,0,0.07)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: menuOpen ? 0 : 5,
                cursor: "pointer",
                boxShadow: menuOpen
                  ? "0 8px 24px rgba(29,78,216,0.35)"
                  : "0 2px 8px rgba(0,0,0,0.06)",
                position: "relative", zIndex: 1002,
                transition: "all 0.3s ease",
              }}
            >
              <motion.div animate={menuOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
                style={{ width: 18, height: 2, background: menuOpen ? "#fff" : "#1e293b", borderRadius: 2, position: menuOpen ? "absolute" : "relative" }} />
              {!menuOpen && <div style={{ width: 12, height: 2, background: "#64748b", borderRadius: 2 }} />}
              <motion.div animate={menuOpen ? { rotate: -45, y: -1 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
                style={{ width: 18, height: 2, background: menuOpen ? "#fff" : "#1e293b", borderRadius: 2, position: menuOpen ? "absolute" : "relative" }} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── FULL-SCREEN MENU PANEL ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 998, background: "rgba(2,8,40,0.6)", backdropFilter: "blur(6px)" }}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.38, ease: EASE }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: isMobile ? "100vw" : "clamp(340px, 42vw, 480px)",
                zIndex: 999,
                background: "linear-gradient(160deg, #0a0f2e 0%, #0d1a4a 50%, #0a1535 100%)",
                display: "flex", flexDirection: "column",
                boxShadow: "-24px 0 80px rgba(0,0,0,0.3)",
                overflow: "hidden",
              }}
            >
              {/* Decorative glows */}
              <div style={{ position: "absolute", top: "-10%", right: "-10%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "15%", left: "-5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

              {/* Header */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: isMobile ? "20px 24px" : "28px 40px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                flexShrink: 0,
              }}>
                <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                  <img src="/logo1.png" alt="SparkVR" style={{ height: 38, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                </Link>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.08, background: "rgba(255,255,255,0.12)" }}
                  whileTap={{ scale: 0.94 }}
                  style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={18} color="rgba(255,255,255,0.8)" strokeWidth={2} />
                </motion.button>
              </div>

              {/* Nav link groups */}
              <div style={{ flex: 1, overflowY: "auto", padding: isMobile ? "16px 20px" : "20px 32px" }}>
                {NAV_GROUPS.map((group, gi) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 32 }}
                    transition={{ delay: 0.08 + gi * 0.07, duration: 0.38, ease: EASE }}
                    style={{ marginBottom: 8 }}
                  >
                    {/* Group label */}
                    <p style={{
                      fontSize: 10, fontWeight: 800, color: "rgba(56,189,248,0.7)",
                      letterSpacing: "0.2em", margin: "16px 0 8px 10px",
                      textTransform: "uppercase", fontFamily: "'VAG Rounded', sans-serif",
                    }}>{group.label}</p>

                    {/* Group links */}
                    {group.links.map((link, li) => {
                      const active = isActive(link.href);
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 24 }}
                          transition={{ delay: 0.1 + gi * 0.07 + li * 0.05, duration: 0.35, ease: EASE }}
                        >
                          <Link href={link.href} onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", display: "block" }}>
                            <motion.div
                              whileHover={{ x: 6, background: "rgba(255,255,255,0.07)" }}
                              whileTap={{ scale: 0.97 }}
                              style={{
                                display: "flex", alignItems: "center", gap: 14,
                                padding: isMobile ? "11px 14px" : "13px 14px",
                                borderRadius: 14,
                                background: active ? "rgba(37,99,235,0.2)" : "transparent",
                                border: active ? "1px solid rgba(37,99,235,0.3)" : "1px solid transparent",
                                marginBottom: 3, transition: "all 0.2s ease",
                              }}
                            >
                              <div style={{
                                width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                                background: active ? "rgba(37,99,235,0.3)" : "rgba(255,255,255,0.06)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                border: active ? "1px solid rgba(37,99,235,0.4)" : "1px solid rgba(255,255,255,0.08)",
                              }}>
                                <div style={{ width: 6, height: 6, borderRadius: "50%", background: active ? "#60a5fa" : "rgba(255,255,255,0.3)" }} />
                              </div>
                              <div style={{ flex: 1 }}>
                                <p style={{
                                  fontSize: 14, fontWeight: 700, margin: 0,
                                  color: active ? "#60a5fa" : "rgba(255,255,255,0.85)",
                                  fontFamily: "'VAG Rounded', sans-serif",
                                }}>{link.label}</p>
                                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: 0, fontWeight: 400 }}>{link.desc}</p>
                              </div>
                              <ChevronRight size={14} color={active ? "#60a5fa" : "rgba(255,255,255,0.2)"} />
                            </motion.div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                ))}
              </div>

              {/* CTA bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
                style={{
                  padding: isMobile ? "16px 20px 24px" : "20px 32px 32px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  flexShrink: 0,
                }}
              >
                <Link href="/contact#contact-form" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", display: "block" }}>
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 16px 40px rgba(29,78,216,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                      borderRadius: 16, padding: "15px 28px",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      boxShadow: "0 10px 32px rgba(29,78,216,0.4)",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", fontFamily: "'VAG Rounded', sans-serif" }}>
                      BOOK FREE WORKSHOP
                    </span>
                    <ChevronRight size={16} color="rgba(255,255,255,0.8)" strokeWidth={2.5} />
                  </motion.div>
                </Link>

                <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.25)", margin: "12px 0 0", fontWeight: 500 }}>
                  Trusted by 500+ schools across India
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
