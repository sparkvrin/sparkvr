"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
import {
  Package, Building2, BookOpen, ChevronRight, ShieldCheck
} from "lucide-react";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M4 20L20 4" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <footer style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #e0e7ff 100%)",
      position: "relative",
      overflow: "hidden",
      paddingTop: isMobile ? 48 : 80,
      paddingBottom: isMobile ? 32 : 40,
      fontFamily: "'VAG Rounded', sans-serif"
    }}>
      {/* ── Background Graphics (Arcs & Floating Orbs) ── */}
      <div style={{ position: "absolute", top: -100, right: -100, width: "min(100%, 600px)", height: 600, pointerEvents: "none" }}>
        {[400, 500, 600].map((size, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: size, height: size, borderRadius: "50%",
              border: `1px solid rgba(59,130,246,${0.15 - i * 0.04})`,
            }}
          />
        ))}
      </div>

      {/* Floating orbs in background */}
      {[
        { size: 10, color: "#3b82f6", top: "10%", right: "20%", delay: 0 },
        { size: 12, color: "#a855f7", top: "25%", right: "12%", delay: 0.5 },
        { size: 8, color: "#ef4444", top: "22%", right: "5%", delay: 1 },
        { size: 14, color: "#3b82f6", top: "45%", right: "3%", delay: 0.2 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute", top: orb.top, right: orb.right,
            width: orb.size, height: orb.size, borderRadius: "50%",
            background: orb.color,
            boxShadow: `0 0 10px ${orb.color}88`,
            pointerEvents: "none"
          }}
        />
      ))}

      {/* VR Headset Wireframe Background Image */}
      <div
        style={{
          position: "absolute", top: "10%", right: "-12%",
          width: "min(100%, 550px)", opacity: 0.7, pointerEvents: "none",
          mixBlendMode: "multiply",
          zIndex: 0
        }}
      >
        <motion.img loading="lazy" decoding="async"
          src="/vr_wireframe.webp" alt="" style={{ width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(59,130,246,0.15))" }}
        />
      </div>


      <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 60px", position: "relative", zIndex: 10 }}>

        {/* ── Top Main Content ── */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", flexWrap: isMobile ? "nowrap" : "wrap", justifyContent: "space-between", gap: isMobile ? 32 : 60, marginBottom: isMobile ? 36 : 60 }}>

          {/* Left Column: Brand & Socials */}
          <div style={{ maxWidth: isMobile ? "100%" : 350, flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: isMobile ? "row" : "column", alignItems: isMobile ? "center" : "flex-start", gap: isMobile ? 14 : 0, marginBottom: isMobile ? 20 : 0 }}>
              <Link href="/" style={{ display: "inline-block", flexShrink: 0, marginBottom: isMobile ? 0 : 12 }}>
                <img loading="lazy" decoding="async" src="/logo1.png" alt="SparkVR" style={{ height: isMobile ? 44 : 75, objectFit: "contain" }} />
              </Link>
              <p style={{ fontSize: isMobile ? 13 : 19, color: "#334155", lineHeight: 1.5, marginBottom: isMobile ? 0 : 40, fontWeight: 500, margin: isMobile ? 0 : undefined }}>
                Transforming abstract learning into observable understanding through immersive experiences.
              </p>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { Icon: FacebookIcon,  href: "https://www.facebook.com/profile.php?id=100084532397318" },
                { Icon: LinkedinIcon,  href: "https://www.linkedin.com/company/sparkvr2/" },
                { Icon: TwitterIcon,   href: "https://x.com/sparkvr22" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/sparkvr.in/" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.08, boxShadow: "0 10px 20px rgba(37,99,235,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: isMobile ? 40 : 44, height: isMobile ? 40 : 44, borderRadius: "50%",
                    background: "white", border: "1px solid rgba(59,130,246,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#1e3a8a", boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
                    transition: "color 0.3s", cursor: "pointer"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#3b82f6"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#1e3a8a"}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Columns: Links Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr 1fr" : "repeat(3,1fr)",
            flex: isMobile ? undefined : 1,
            gap: isMobile ? "24px 16px" : 20,
            paddingTop: isMobile ? 0 : 10,
          }}>
            {[
              {
                title: "Product", icon: Package,
                links: [
                  { label: "FOR SCHOOLS", href: "/schools" },
                  { label: "FOR TEACHERS", href: "/teachers" },
                  { label: "FOR PARENTS", href: "/parents" }
                ]
              },
              {
                title: "Solutions", icon: Building2,
                links: [
                  { label: "SUBJECT EXPANSION", href: "/subject-expansion" },
                  { label: "TIMETABLE", href: "/timetable" },
                  { label: "CURRICULUM", href: "/curriculum" },
                  { label: "LEARNING OUTCOME", href: "/learning-outcome" },
                  { label: "BLOG", href: "/blog" }
                ]
              },
              {
                title: "Resources", icon: BookOpen,
                links: [
                  { label: "ABOUT", href: "/about" },
                  { label: "CONTACT", href: "/contact" }
                ]
              }
            ].map((col, idx) => (
              <div key={col.title}>
                {/* Column Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: isMobile ? 16 : 28 }}>
                  <div style={{
                    width: isMobile ? 34 : 42, height: isMobile ? 34 : 42, borderRadius: "50%",
                    background: "#eff6ff", border: "1px solid #dbeafe",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#2563eb", flexShrink: 0,
                  }}>
                    <col.icon size={isMobile ? 16 : 20} strokeWidth={2} />
                  </div>
                  <h4 style={{ fontSize: isMobile ? 14 : 18, fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    {col.title}
                  </h4>
                </div>

                {/* Column Links */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: isMobile ? 12 : 18 }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} style={{ textDecoration: "none" }}>
                        <motion.div
                          whileHover={{ x: 6, color: "#2563eb" }}
                          style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            fontSize: isMobile ? 12 : 15, color: "#475569", fontWeight: 500,
                            cursor: "pointer", borderBottom: "1px solid rgba(59,130,246,0.08)", paddingBottom: isMobile ? 8 : 10,
                            transition: "color 0.2s"
                          }}
                        >
                          {link.label}
                          <ChevronRight size={14} color="#94a3b8" />
                        </motion.div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div style={{
          borderTop: "1px solid rgba(59,130,246,0.15)", paddingTop: isMobile ? 20 : 28,
          display: "flex", flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 16 : 20
        }}>
          {/* Copyright */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "#eff6ff", border: "1px solid #dbeafe",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0,
            }}>
              <ShieldCheck size={16} strokeWidth={2} />
            </div>
            <p style={{ fontSize: isMobile ? 12 : 14, color: "#475569", margin: 0, fontWeight: 500 }}>
              © {new Date().getFullYear()} SparkVR EdTech Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 20, flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use", href: "/terms-of-use" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ].map((item, i) => (
              <React.Fragment key={item.label}>
                <Link href={item.href} style={{ fontSize: isMobile ? 11 : 14, color: "#475569", textDecoration: "none", fontWeight: 500 }}>
                  {item.label}
                </Link>
                {i < 2 && <span style={{ color: "#cbd5e1" }}>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
