"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/* ── All links (used in mobile full menu) ── */
const ALL_LINKS = [
  { label: "For Schools",        href: "/schools" },
  { label: "For Teachers",       href: "/teachers" },
  { label: "For Parents",        href: "/parents" },
  { label: "Subject Expansion",  href: "/subject-expansion" },
  { label: "Timetable",          href: "/timetable" },
  { label: "Curriculum",         href: "/curriculum" },
  { label: "Learning Outcome",   href: "/learning-outcome" },
  { label: "Blog",               href: "/blog" },
  { label: "About",              href: "/about" },
  { label: "Contact",            href: "/contact" },
];

/* ── Links shown directly in the desktop bar ── */
const DESKTOP_LINKS = [
  { label: "Schools",         href: "/schools" },
  { label: "Teachers",        href: "/teachers" },
  { label: "Parents",         href: "/parents" },
  { label: "Curriculum",      href: "/curriculum" },
  { label: "About",           href: "/about" },
  { label: "Blog",            href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [isMobile, setIsMobile]   = useState(false);
  const [isTablet, setIsTablet]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  /* close menu on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* ═══════════════ NAV BAR ═══════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          height: isMobile ? 68 : 76,
          transition: "background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease",
          background: scrolled
            ? "rgba(255,255,255,0.94)"
            : "rgba(255,255,255,0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled
            ? "0 1px 0 rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)"
            : "none",
          display: "flex", alignItems: "center",
        }}
      >
        <div style={{
          maxWidth: 1400, margin: "0 auto", width: "100%",
          paddingLeft: isMobile ? 20 : 60,
          paddingRight: isMobile ? 20 : 60,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16,
        }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <img
              src="/logo1.png"
              alt="SparkVR"
              style={{ height: isMobile ? 40 : 50, width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* ── DESKTOP NAV LINKS (hidden on mobile/tablet) ── */}
          {!isMobile && !isTablet && (
            <nav style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}>
              {DESKTOP_LINKS.map(link => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ textDecoration: "none", position: "relative", padding: "8px 14px", borderRadius: 10 }}
                  >
                    <motion.div
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                      style={{ position: "relative" }}
                    >
                      <motion.span
                        variants={{
                          rest:  { color: active ? "#2563eb" : scrolled ? "#1e293b" : "#1e293b" },
                          hover: { color: "#2563eb" },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{
                          fontSize: 13.5,
                          fontWeight: active ? 700 : 500,
                          letterSpacing: "0.02em",
                          fontFamily: "'VAG Rounded', sans-serif",
                          display: "block",
                        }}
                      >
                        {link.label}
                      </motion.span>
                      {/* animated underline */}
                      <motion.div
                        variants={{
                          rest:  { scaleX: active ? 1 : 0, opacity: active ? 1 : 0 },
                          hover: { scaleX: 1, opacity: 1 },
                        }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          position: "absolute", bottom: -2, left: 14, right: 14,
                          height: 2, borderRadius: 2,
                          background: "linear-gradient(90deg, #2563eb, #38bdf8)",
                          transformOrigin: "left",
                        }}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </nav>
          )}

          {/* ── RIGHT: CTA + HAMBURGER ── */}
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 16, flexShrink: 0 }}>

            {/* CTA button — hidden on mobile */}
            {!isMobile && (
              <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(29,78,216,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                    borderRadius: 40,
                    padding: isTablet ? "10px 20px" : "11px 26px",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(29,78,216,0.25)",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{
                    color: "#ffffff",
                    fontSize: isTablet ? 10 : 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    fontFamily: "'VAG Rounded', sans-serif",
                  }}>
                    BOOK FREE WORKSHOP
                  </span>
                </motion.div>
              </Link>
            )}

            {/* Hamburger toggle */}
            <motion.button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              style={{
                width: isMobile ? 44 : 48,
                height: isMobile ? 44 : 48,
                borderRadius: 14,
                background: menuOpen
                  ? "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)"
                  : scrolled
                    ? "rgba(241,245,249,0.9)"
                    : "rgba(255,255,255,0.15)",
                border: menuOpen ? "none" : `1.5px solid ${scrolled ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.3)"}`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: menuOpen ? 0 : 5,
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "background 0.3s ease, border 0.3s ease",
                position: "relative",
                zIndex: 1002,
              }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 1, width: 18 } : { rotate: 0, y: 0, width: 18 }}
                style={{ display: "block", height: 2, background: menuOpen ? "#fff" : scrolled ? "#1e293b" : "#1e293b", borderRadius: 2, position: menuOpen ? "absolute" : "relative", transformOrigin: "center" }}
              />
              {!menuOpen && (
                <span style={{ display: "block", width: 12, height: 2, background: "#1e293b", borderRadius: 2, alignSelf: "center", marginLeft: -3 }} />
              )}
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -1, width: 18 } : { rotate: 0, y: 0, width: 18 }}
                style={{ display: "block", height: 2, background: menuOpen ? "#fff" : scrolled ? "#1e293b" : "#1e293b", borderRadius: 2, position: menuOpen ? "absolute" : "relative", transformOrigin: "center" }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ═══════════════ MOBILE / FULL MENU PANEL ═══════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 998, background: "rgba(2,8,32,0.6)", backdropFilter: "blur(6px)" }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: isMobile ? "100vw" : "min(440px, 42vw)",
                zIndex: 999,
                background: "linear-gradient(160deg, #0a1628 0%, #0f2347 50%, #071122 100%)",
                display: "flex", flexDirection: "column",
                overflowY: "auto",
                boxShadow: "-24px 0 80px rgba(0,0,0,0.4)",
              }}
            >
              {/* Decorative glows */}
              <div style={{ position: "absolute", top: "8%", right: "12%", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "18%", left: "8%", width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

              {/* Header row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "20px 24px" : "24px 36px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                  <img src="/logo1.png" alt="SparkVR" style={{ height: 38, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
                </Link>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.1, background: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.9 }}
                  style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.button>
              </div>

              {/* Nav links */}
              <nav style={{ flex: 1, padding: isMobile ? "16px 24px" : "20px 36px", display: "flex", flexDirection: "column", gap: 2 }}>
                {ALL_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 32 }}
                      transition={{ delay: 0.06 + i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        <motion.div
                          whileHover={{ x: 8, background: "rgba(255,255,255,0.05)" }}
                          whileTap={{ scale: 0.97 }}
                          style={{
                            display: "flex", alignItems: "center", gap: 14,
                            padding: isMobile ? "12px 16px" : "14px 18px",
                            borderRadius: 14,
                            background: active ? "rgba(37,99,235,0.18)" : "transparent",
                            border: active ? "1px solid rgba(37,99,235,0.3)" : "1px solid transparent",
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                          }}
                        >
                          <div style={{
                            width: 6, height: 6, borderRadius: "50%",
                            background: active ? "#38bdf8" : "rgba(255,255,255,0.25)",
                            flexShrink: 0,
                          }} />
                          <span style={{
                            fontSize: isMobile ? 15 : 16,
                            fontWeight: active ? 700 : 500,
                            color: active ? "#ffffff" : "rgba(255,255,255,0.65)",
                            fontFamily: "'VAG Rounded', sans-serif",
                            letterSpacing: "0.02em",
                            transition: "color 0.2s ease",
                          }}>
                            {link.label}
                          </span>
                          {active && (
                            <div style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "#38bdf8" }} />
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ padding: isMobile ? "16px 24px 32px" : "20px 36px 40px", borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <Link href="/contact#contact-form" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: "0 16px 40px rgba(29,78,216,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                      borderRadius: 16, padding: "16px 0",
                      textAlign: "center", cursor: "pointer",
                      boxShadow: "0 8px 32px rgba(29,78,216,0.4)",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", fontFamily: "'VAG Rounded', sans-serif" }}>
                      BOOK FREE WORKSHOP
                    </span>
                  </motion.div>
                </Link>
                <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.3)", margin: "14px 0 0", fontWeight: 500 }}>
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
