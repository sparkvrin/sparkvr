"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Package, Building2, BookOpen, ChevronRight, ShieldCheck, Mail, ArrowRight
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
      background: "#001a4d",
      position: "relative",
      overflow: "hidden",
      paddingTop: 100,
      paddingBottom: 40,
      fontFamily: "'AR One Sans', sans-serif"
    }}>
      {/* ── 3D AMBIENT BACKGROUND ── */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 800, height: 800, pointerEvents: "none" }}>
        {[400, 600, 800].map((size, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360, opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 50 + i * 15, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: size, height: size, borderRadius: "50%",
              border: `1.5px solid rgba(31,179,255,0.2)`,
            }}
          />
        ))}
      </div>

      {/* Floating 3D Orbs */}
      {[
        { size: 120, color: "rgba(0,82,204,0.15)", top: "10%", left: "5%", delay: 0 },
        { size: 150, color: "rgba(31,179,255,0.1)", bottom: "15%", right: "10%", delay: 2 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5], y: [0, -20, 0] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
          style={{
            position: "absolute", top: orb.top, left: orb.left, bottom: orb.bottom, right: orb.right,
            width: orb.size, height: orb.size, borderRadius: "50%",
            background: orb.color, filter: "blur(60px)", pointerEvents: "none"
          }}
        />
      ))}

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 10 }}>
        
        {/* ── NEWSLETTER MODULE ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            borderRadius: 32,
            padding: "48px 60px",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 80,
            boxShadow: "0 30px 60px rgba(0,0,0,0.2)"
          }}
        >
          <div style={{ maxWidth: 460 }}>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 12 }}>Stay ahead in Education.</h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>Get the latest insights on VR pedagogy and school transformation directly to your inbox.</p>
          </div>
          <div style={{ flex: 1, minWidth: 320, position: "relative" }}>
            <div style={{
              display: "flex", gap: 12, background: "rgba(255,255,255,0.05)",
              padding: 8, borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <input 
                type="email" 
                placeholder="Enter your school email"
                style={{
                  background: "transparent", border: "none", outline: "none",
                  padding: "0 20px", color: "#fff", fontSize: 14, flex: 1,
                  fontFamily: "inherit"
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#001a4d" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "#0052cc", color: "#fff", border: "none",
                  padding: "12px 24px", borderRadius: 14, fontSize: 13, fontWeight: 800,
                  cursor: "pointer", transition: "all 0.3s",
                  display: "flex", alignItems: "center", gap: 8
                }}
              >
                SUBSCRIBE <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ── MAIN LINKS SECTION ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 60, marginBottom: 80 }}>
          
          {/* Brand Info */}
          <div>
            <Link href="/">
              <img src="/logo.png" alt="SparkVR" style={{ height: 110, marginBottom: 20, filter: "brightness(0) invert(1)" }} />
            </Link>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 32 }}>
              Built at IIT Indore with a mission to bring clarity and depth to classrooms through world-class immersive pedagogy.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[FacebookIcon, LinkedinIcon, YoutubeIcon, InstagramIcon].map((Icon, i) => (
                <motion.a
                  key={i} href="#"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  style={{
                    width: 44, height: 44, borderRadius: 14,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", cursor: "pointer", transition: "all 0.3s"
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {[
            {
              title: "EXPLORE",
              links: [
                { label: "Vision", href: "/#vision" },
                { label: "About Us", href: "/about" },
                { label: "Our Blog", href: "/blog" },
                { label: "Modules", href: "/services" }
              ]
            },
            {
              title: "SOLUTIONS",
              links: [
                { label: "For Schools", href: "/contact" },
                { label: "For Teachers", href: "/contact" },
                { label: "VR Lab setup", href: "/contact" },
                { label: "Case Studies", href: "/blog" }
              ]
            },
            {
              title: "CONNECT",
              links: [
                { label: "Book Workshop", href: "/contact" },
                { label: "Contact Us", href: "/contact" },
                { label: "Help Center", href: "/contact" },
                { label: "Careers", href: "/about" }
              ]
            }
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 13, fontWeight: 800, color: "#1fb3ff", letterSpacing: "0.15em", marginBottom: 32 }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      style={{ 
                        fontSize: 15, color: "rgba(255,255,255,0.5)", textDecoration: "none", 
                        fontWeight: 600, transition: "all 0.3s", display: "flex", alignItems: "center", gap: 8 
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as any).style.color = "#fff";
                        (e.currentTarget as any).style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as any).style.color = "rgba(255,255,255,0.5)";
                        (e.currentTarget as any).style.transform = "translateX(0px)";
                      }}
                    >
                      <ChevronRight size={14} style={{ opacity: 0.5 }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM COPYRIGHT BAR ── */}
        <div style={{ 
          borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 40,
          display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <ShieldCheck size={18} color="#1fb3ff" />
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", margin: 0, fontWeight: 500 }}>
              © {new Date().getFullYear()} SparkVR EdTech Pvt. Ltd. All rights reserved.
            </p>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
              <Link 
                key={item} href="/about" 
                style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
