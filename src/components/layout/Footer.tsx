"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import SparkButton from "@/components/SparkButton";

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(180deg, rgba(0,26,77,0.92) 0%, rgba(0,18,55,0.96) 100%)",
      backdropFilter: "blur(12px)",
      position: "relative",
      overflow: "hidden",
      zIndex: 2,
    }}>
      {/* Floating decorative glows */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "10%", right: "15%", width: 180, height: 180, borderRadius: "50%", background: "rgba(31,179,255,0.06)", filter: "blur(60px)", pointerEvents: "none" }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{ position: "absolute", bottom: "20%", left: "8%", width: 140, height: 140, borderRadius: "50%", background: "rgba(204,47,255,0.05)", filter: "blur(50px)", pointerEvents: "none" }}
      />

      {/* Top wave */}
      <div style={{ marginTop: -1 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(245,245,245,0.35)" />
              <stop offset="50%" stopColor="rgba(220,230,255,0.3)" />
              <stop offset="100%" stopColor="rgba(245,245,245,0.35)" />
            </linearGradient>
          </defs>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="url(#waveGrad)" />
        </svg>
      </div>

      {/* Geometric accents */}
      <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }}>
        <svg width="220" height="220" viewBox="0 0 220 220" style={{ opacity: 0.05 }}>
          <polygon points="220,0 220,220 0,0" fill="#1fb3ff" />
        </svg>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, pointerEvents: "none" }}>
        <svg width="160" height="160" viewBox="0 0 160 160" style={{ opacity: 0.04 }}>
          <polygon points="0,160 160,160 0,0" fill="#0052cc" />
        </svg>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 40px", position: "relative", zIndex: 1 }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 80, alignItems: "start" }}>

          {/* Brand */}
          <div style={{ maxWidth: 380 }}>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ marginBottom: 24 }}
            >
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
                <img src="/logo.png" alt="SparkVR" style={{ width: 93, height: 64, objectFit: "contain" }} />
              </Link>
            </motion.div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 32 }}>
              Every idea begins with a spark. SparkVR transforms abstract textbook concepts into unforgettable 3D explorations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { Icon: Mail,   text: "hello@sparkvr.in" },
                { Icon: Phone,  text: "+91 98765 43210" },
                { Icon: MapPin, text: "Bangalore, Karnataka, India" },
              ].map(({ Icon, text }) => (
                <motion.div
                  key={text}
                  whileHover={{ x: 4 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, cursor: "default" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "rgba(31,179,255,0.1)",
                      border: "1px solid rgba(31,179,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color="#1fb3ff" />
                  </motion.div>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Card — glassmorphic */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 24,
              padding: "48px 40px",
              backdropFilter: "blur(16px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>Ready to transform learning?</p>
            <h3 style={{ fontSize: 28, fontWeight: 700, color: "#ffffff", lineHeight: 1.3, marginBottom: 32, letterSpacing: "-0.01em" }}>
              Book a free workshop for your school.
            </h3>
            <SparkButton href="/contact" text="BOOK FREE WORKSHOP" large />
          </motion.div>
        </div>

        {/* Links row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 48 }}>
          {[
            { title: "Company", links: [{ l:"About Us",  h:"/about" },{ l:"Services",h:"/services"},{ l:"Contact Us", h:"/contact" }] },
            { title: "Explore", links: [{ l:"Curriculum",h:"#"},{ l:"Case Studies",h:"#"},{ l:"Research",h:"#"}] },
            { title: "Legal",   links: [{ l:"Privacy Policy",h:"#"},{ l:"Terms of Service",h:"#"},{ l:"Cookie Policy",h:"#"}] },
          ].map(({ title, links }) => (
            <div key={title}>
              <p style={{ fontSize:11,fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:24 }}>{title}</p>
              <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:16 }}>
                {links.map(({ l, h }) => (
                  <li key={l}>
                    <Link href={h} style={{ fontSize:14,color:"rgba(255,255,255,0.45)",textDecoration: "none", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color="#1fb3ff"; e.currentTarget.style.transform="translateX(4px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color="rgba(255,255,255,0.45)"; e.currentTarget.style.transform="translateX(0)"; }}
                    >{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop:24,borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12 }}>
          <p style={{ fontSize:13,color:"rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} SparkVR. All rights reserved.</p>
          <motion.p
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontSize:13,color:"rgba(255,255,255,0.25)" }}
          >
            Every Idea Begins With A Spark ✦
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
