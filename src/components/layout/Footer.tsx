"use client";
// Force rebuild to sync Light Footer UI

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Package, Building2, BookOpen, ChevronRight, ShieldCheck 
} from "lucide-react";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #e0e7ff 100%)",
      position: "relative",
      overflow: "hidden",
      paddingTop: 80,
      paddingBottom: 40,
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* ── Background Graphics (Arcs & Floating Orbs) ── */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, pointerEvents: "none" }}>
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
        { size: 8,  color: "#ef4444", top: "22%", right: "5%",  delay: 1 },
        { size: 14, color: "#3b82f6", top: "45%", right: "3%",  delay: 0.2 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
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
          width: 550, opacity: 0.7, pointerEvents: "none",
          mixBlendMode: "multiply",
          zIndex: 0
        }}
      >
        <motion.img 
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          src="/vr_wireframe.png" alt="" style={{ width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(59,130,246,0.15))" }} 
        />
      </div>


      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 10 }}>
        
        {/* ── Top Main Content ── */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 60, marginBottom: 60 }}>
          
          {/* Left Column: Brand & Socials */}
          <div style={{ maxWidth: 350, flexShrink: 0 }}>
            <Link href="/" style={{ display: "inline-block", marginBottom: -10 }}>
              <img src="/logo.png" alt="SparkVR" style={{ height: 140, objectFit: "contain", transform: "translateX(-15px)" }} />
            </Link>
            <p style={{ fontSize: 19, color: "#334155", lineHeight: 1.6, marginBottom: 40, fontWeight: 500, transform: "translateX(-8px)" }}>
              Transforming abstract learning into observable understanding through immersive experiences.
            </p>
            
            {/* Social Icons */}
            <div style={{ display: "flex", gap: 16 }}>
              {[FacebookIcon, LinkedinIcon, YoutubeIcon, InstagramIcon].map((Icon, i) => (
                <motion.a
                  key={i} href="#"
                  whileHover={{ y: -5, scale: 1.05, boxShadow: "0 10px 20px rgba(37,99,235,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 44, height: 44, borderRadius: "50%",
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
            display: "flex", flex: 1, justifyContent: "space-between", 
            paddingTop: 10, gap: 20
          }}>
            {[
              {
                title: "Product", icon: Package,
                links: ["Why SparkVR", "How It Works", "Curriculum", "Outcomes"]
              },
              {
                title: "Solutions", icon: Building2,
                links: ["For Schools", "For Teachers", "VR Labs", "Subjects & Grades"]
              },
              {
                title: "Resources", icon: BookOpen,
                links: ["Case Studies", "Blog", "Help Center", "Contact"]
              }
            ].map((col, idx) => (
              <div key={col.title} style={{ 
                flex: 1, 
                borderLeft: idx !== 0 ? "1px solid rgba(59,130,246,0.15)" : "none",
                paddingLeft: idx !== 0 ? 40 : 0
              }}>
                
                {/* Column Header */}
                <motion.div 
                  whileHover={{ scale: 1.05, x: 5 }}
                  style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, cursor: "default" }}
                >
                  <motion.div 
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: 42, height: 42, borderRadius: "50%",
                      background: "#eff6ff", border: "1px solid #dbeafe",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#2563eb", boxShadow: "0 4px 10px rgba(59,130,246,0.1), inset 0 2px 4px white"
                    }}
                  >
                    <col.icon size={20} strokeWidth={2} />
                  </motion.div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    {col.title}
                  </h4>
                </motion.div>

                {/* Column Links */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 8, color: "#2563eb" }}
                        style={{
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          fontSize: 15, color: "#475569", textDecoration: "none", fontWeight: 500,
                          cursor: "pointer", borderBottom: "1px solid rgba(59,130,246,0.08)", paddingBottom: 10,
                          transition: "color 0.2s"
                        }}
                      >
                        {link}
                        <motion.div whileHover={{ x: 3 }}>
                          <ChevronRight size={16} color="#94a3b8" />
                        </motion.div>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div style={{ 
          borderTop: "1px solid rgba(59,130,246,0.15)", paddingTop: 28,
          display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20
        }}>
          {/* Copyright */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "#eff6ff", border: "1px solid #dbeafe",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb"
            }}>
              <ShieldCheck size={18} strokeWidth={2} />
            </div>
            <p style={{ fontSize: 14, color: "#475569", margin: 0, fontWeight: 500 }}>
              © {new Date().getFullYear()} SparkVR EdTech Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item, i) => (
              <React.Fragment key={item}>
                <a href="#" style={{ fontSize: 14, color: "#475569", textDecoration: "none", fontWeight: 500 }}>
                  {item}
                </a>
                {i < 2 && <span style={{ color: "#cbd5e1" }}>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
