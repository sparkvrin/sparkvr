"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "VISION", href: "/#vision" },
  { label: "FOR SCHOOLS", href: "/schools" },
  { label: "FOR TEACHERS", href: "/teachers" },
  // { label: "VR LABS",           href: "/vr-labs" },
  // { label: "SUBJECTS & GRADES", href: "/subjects" },
  { label: "SUBJECT EXPANSION", href: "/subject-expansion" },
  { label: "TIMETABLE", href: "/timetable" },
  // { label: "CASE STUDIES",      href: "/case-studies" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT", href: "/about" },
  // { label: "HELP CENTER", href: "/help" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, zIndex: 1000,
          height: isMobile ? 72 : 100,
          display: "flex", alignItems: "center",
          background: "transparent",
        }}
      >
        <div style={{
          maxWidth: 1440, margin: "0 auto", width: "100%", height: "100%",
          padding: isMobile ? "0 16px" : "0 60px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", height: "100%" }}>
            <img loading="lazy" decoding="async"
              src="/logo.webp"
              alt="SparkVR"
              style={{ height: isMobile ? 62 : 90, width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* RIGHT SIDE: CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 24 }}>
            {/* Hide CTA button on mobile — it lives in the menu */}
            {!isMobile && (
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2, boxShadow: "0 12px 28px rgba(0,102,255,0.3)" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    background: "#0052cc",
                    borderRadius: 30, padding: "13px 28px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(0,82,204,0.2)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{
                    color: "#fff", fontSize: 11, fontWeight: 800,
                    letterSpacing: "0.12em", lineHeight: 1, whiteSpace: "nowrap",
                  }}>BOOK FREE WORKSHOP</span>
                </motion.div>
              </Link>
            )}

            {/* Hamburger button — chhota size */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                width: 38, height: 38, borderRadius: "50%",
                background: menuOpen ? "#0052cc" : "rgba(255,255,255,0.85)",
                border: "1px solid rgba(0,0,0,0.06)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: menuOpen ? 0 : 5,
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                position: "relative",
                zIndex: 1002,
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}
            >
              <motion.div
                animate={menuOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: 0 }}
                style={{ width: 14, height: 1.8, background: menuOpen ? "#fff" : "#001a4d", borderRadius: 2, position: menuOpen ? "absolute" : "relative" }}
              />
              {!menuOpen && <div style={{ width: 14, height: 1.8, background: "#001a4d", borderRadius: 2 }} />}
              <motion.div
                animate={menuOpen ? { rotate: -45, y: -1 } : { rotate: 0, y: 0 }}
                style={{ width: 14, height: 1.8, background: menuOpen ? "#fff" : "#001a4d", borderRadius: 2, position: menuOpen ? "absolute" : "relative" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 998,
                background: "rgba(0,20,60,0.55)",
                backdropFilter: "blur(8px)",
              }}
            />

            {/* Menu panel — slides in from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: isMobile ? "100vw" : "clamp(320px, 40vw, 460px)",
                zIndex: 999,
                background: "linear-gradient(195deg, rgba(0,26,77,0.97) 0%, rgba(0,40,110,0.98) 100%)",
                backdropFilter: "blur(24px)",
                display: "flex", flexDirection: "column",
                padding: isMobile ? "80px 28px 40px" : "120px 48px 48px",
                boxShadow: "-20px 0 60px rgba(0,0,0,0.25)",
              }}
            >
              {/* Decorative floating glow inside menu */}
              <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: "15%", left: "10%", width: 100, height: 100, borderRadius: "50%", background: "rgba(31,179,255,0.1)", filter: "blur(40px)", pointerEvents: "none" }}
              />

              {/* Nav links — scrollable so all items visible */}
              <nav style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 4, paddingRight: 4 }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <motion.div whileHover={{ x: 10, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: "flex", alignItems: "center", gap: 14,
                          padding: "13px 16px",
                          borderRadius: 12,
                          textDecoration: "none",
                          fontSize: 14, fontWeight: 600, letterSpacing: "0.07em",
                          color: "rgba(255,255,255,0.75)",
                          transition: "all 0.25s ease",
                        }}
                      >
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1fb3ff" }} />
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom section: CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: "0 12px 28px rgba(0,100,255,0.45)" }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: "linear-gradient(135deg, #0052cc 0%, #1d8cf8 100%)",
                      borderRadius: 30, padding: "16px 0",
                      textAlign: "center", cursor: "pointer",
                      boxShadow: "0 8px 24px rgba(0,82,204,0.35)",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}>
                      BOOK FREE WORKSHOP
                    </span>
                  </motion.div>
                </Link>
                <div style={{ marginTop: 24, textAlign: "center" }}>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>© 2024 SPARKVR EDUCATION</p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
