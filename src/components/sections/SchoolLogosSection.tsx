"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const LOGOS = [
  {
    name: "GD Goenka Public School",
    src: "/schoollogos/GD goenka.png",
  },
  {
    name: "Shivpuri Public School",
    src: "/schoollogos/Shivpuri public school logo.png",
  },
  {
    name: "Venus Public School Gwalior",
    src: "/schoollogos/Venus public school gwalior.png",
  },
  {
    name: "Satya Prakash Public School",
    src: "/schoollogos/satya prakash public school.png",
  },
];

export default function SchoolLogosSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 20px",
        background: "linear-gradient(to bottom, #d8eaff 0%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Header Title */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.18em",
              color: "#0052cc",
              textTransform: "uppercase",
              fontFamily: "'VAG Rounded', sans-serif",
              display: "block",
              marginBottom: 12,
            }}
          >
            Trusted by Progressive Schools
          </motion.span>
          
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#0b1a3b",
              margin: 0,
              fontFamily: "'VAG Rounded', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Empowering Classrooms in Leading Institutions
          </motion.h3>
        </div>

        {/* Logos Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {LOGOS.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0, 40, 120, 0.08)",
                  borderColor: "rgba(0, 82, 204, 0.25)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  background: "#ffffff",
                  borderRadius: 24,
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 180,
                  boxShadow: "0 10px 30px rgba(0, 40, 120, 0.03)",
                  border: "1.5px solid rgba(220, 235, 255, 0.7)",
                  cursor: "default",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  loading="lazy"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.03))",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur Spheres */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-10%",
          width: "30%",
          height: "60%",
          background: "radial-gradient(circle, rgba(0,82,204,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "35%",
          height: "70%",
          background: "radial-gradient(circle, rgba(0,82,204,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </section>
  );
}
