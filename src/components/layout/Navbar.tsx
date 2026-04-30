"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "VISION",         href: "/#vision" },
  { label: "CURRICULUM",     href: "/#curriculum" },
  { label: "INFRASTRUCTURE", href: "/#infrastructure" },
  { label: "OUTCOMES",       href: "/#outcomes" },
  { label: "ABOUT US",       href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
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
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, zIndex: 1000,
          height: 140,
          background: scrolled ? "rgba(255,255,255,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
          transition: "background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s",
        }}
      >
        <div style={{
          maxWidth: 1440, margin: "0 auto", height: "100%",
          padding: "0 48px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* LOGO */}
          <Link href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none", flexShrink:0 }}>
            <img src="/logo.png" alt="SparkVR" style={{ height: 130, objectFit:"contain" }} />
          </Link>

          {/* RIGHT: CTA + Hamburger */}
          <div style={{ display:"flex", alignItems:"center", gap:16, flexShrink:0 }}>
            <Link href="/contact" style={{ textDecoration:"none" }}>
              <motion.div
                whileHover={{ scale:1.04, boxShadow:"0 12px 28px rgba(0,100,255,0.35)" }}
                whileTap={{ scale:0.96 }}
                style={{
                  background:"#0066ff",
                  borderRadius:30, padding:"11px 22px",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  boxShadow:"0 6px 18px rgba(0,102,255,0.28)",
                  cursor:"pointer",
                }}
              >
                <span style={{
                  fontFamily:"'AR One Sans',sans-serif",
                  color:"#fff", fontSize:11, fontWeight:700,
                  letterSpacing:"0.1em", lineHeight:1, whiteSpace:"nowrap",
                }}>BOOK FREE WORKSHOP</span>
              </motion.div>
            </Link>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                width:44, height:44, borderRadius:"50%",
                background: menuOpen ? "#0052cc" : "rgba(255,255,255,0.9)",
                border: menuOpen ? "none" : "1px solid rgba(0,0,0,0.08)",
                display:"flex", flexDirection:"column",
                alignItems:"center", justifyContent:"center", gap: menuOpen ? 0 : 5,
                cursor:"pointer",
                boxShadow:"0 2px 10px rgba(0,0,0,0.07)",
                position: "relative",
                zIndex: 1002,
                transition: "background 0.3s, border 0.3s",
              }}
            >
              {/* Animated hamburger → X */}
              <motion.div
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                transition={{ duration: 0.25 }}
                style={{ width:15, height:2, background: menuOpen ? "#fff" : "#334155", borderRadius:2, position: menuOpen ? "absolute" : "relative" }}
              />
              <motion.div
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                style={{ width:15, height:2, background:"#334155", borderRadius:2 }}
              />
              <motion.div
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
                transition={{ duration: 0.25 }}
                style={{ width:15, height:2, background: menuOpen ? "#fff" : "#334155", borderRadius:2, position: menuOpen ? "absolute" : "relative" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ═══════════════════════════════════════════
          FULL-SCREEN MENU OVERLAY
      ═══════════════════════════════════════════ */}
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
                width: "clamp(320px, 40vw, 460px)",
                zIndex: 999,
                background: "linear-gradient(195deg, rgba(0,26,77,0.97) 0%, rgba(0,40,110,0.98) 100%)",
                backdropFilter: "blur(24px)",
                display: "flex", flexDirection: "column",
                padding: "120px 48px 48px",
                boxShadow: "-20px 0 60px rgba(0,0,0,0.25)",
              }}
            >
              {/* Decorative floating glow inside menu */}
              <motion.div
                animate={{ y:[0,-15,0], opacity:[0.15,0.3,0.15] }}
                transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }}
                style={{ position:"absolute",top:"15%",left:"10%",width:100,height:100,borderRadius:"50%",background:"rgba(31,179,255,0.1)",filter:"blur(40px)",pointerEvents:"none" }}
              />
              <motion.div
                animate={{ y:[0,10,0], opacity:[0.1,0.2,0.1] }}
                transition={{ duration:10, repeat:Infinity, ease:"easeInOut", delay:3 }}
                style={{ position:"absolute",bottom:"20%",right:"15%",width:80,height:80,borderRadius:"50%",background:"rgba(204,47,255,0.08)",filter:"blur(35px)",pointerEvents:"none" }}
              />

              {/* Nav links */}
              <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", gap: 16,
                        padding: "18px 20px",
                        borderRadius: 16,
                        textDecoration: "none",
                        fontFamily: "'AR One Sans',sans-serif",
                        fontSize: 15, fontWeight: 600, letterSpacing: "0.08em",
                        color: "rgba(255,255,255,0.7)",
                        transition: "all 0.25s ease",
                        background: "transparent",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.transform = "translateX(8px)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      {/* Accent dot */}
                      <div style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "#1fb3ff",
                        boxShadow: "0 0 8px rgba(31,179,255,0.5)",
                        flexShrink: 0,
                      }} />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom section: CTA + tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration:"none" }}>
                  <motion.div
                    whileHover={{ scale:1.03, boxShadow:"0 12px 28px rgba(0,100,255,0.45)" }}
                    whileTap={{ scale:0.97 }}
                    style={{
                      background: "linear-gradient(135deg, #0052cc 0%, #1d8cf8 100%)",
                      borderRadius: 30, padding: "16px 0",
                      textAlign: "center", cursor: "pointer",
                      boxShadow: "0 8px 24px rgba(0,82,204,0.35)",
                      marginBottom: 24,
                    }}
                  >
                    <span style={{
                      fontFamily:"'AR One Sans',sans-serif",
                      color:"#fff", fontSize:12, fontWeight:700,
                      letterSpacing:"0.12em",
                    }}>BOOK FREE WORKSHOP</span>
                  </motion.div>
                </Link>

                <p style={{
                  fontFamily:"'AR One Sans',sans-serif",
                  fontSize: 12, color: "rgba(255,255,255,0.2)",
                  textAlign: "center", letterSpacing: "0.1em",
                }}>
                  Every Idea Begins With A Spark ✦
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
