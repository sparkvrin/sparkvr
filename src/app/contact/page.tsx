"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import SparkButton from "@/components/SparkButton";
import TiltCard from "@/components/TiltCard";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", school: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(180deg, rgba(0,26,77,0.92) 0%, rgba(0,45,122,0.90) 100%)",
        backdropFilter: "blur(12px)",
        padding: "160px 24px 96px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }}>
          <svg width="220" height="220" viewBox="0 0 220 220" style={{ opacity: 0.08 }}>
            <polygon points="220,0 220,220 0,0" fill="#1fb3ff" />
          </svg>
        </div>
        {[1, 2, 3].map(n => (
          <motion.div key={n}
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: n * 240, height: n * 240, borderRadius: "50%", border: `1px solid rgba(31,179,255,${0.12 / n})`, pointerEvents: "none" }}
            animate={{ scale: [1, 1.05, 1], rotate: [0, n % 2 === 0 ? 360 : -360] }}
            transition={{ scale: { duration: 4 + n, repeat: Infinity, ease: "easeInOut", delay: n * 0.5 }, rotate: { duration: 45 + n * 15, repeat: Infinity, ease: "linear" } }}
          />
        ))}
        <motion.div animate={{ y: [0, -15, 0], opacity: [0.15, 0.34, 0.15], scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "30%", right: "15%", width: 140, height: 140, borderRadius: "50%", background: "rgba(31,179,255,0.08)", filter: "blur(52px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="section-label" style={{ marginBottom: 20 }}>Get in touch</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.15, transformPerspective: 800 }}
          >
            Book a free <span className="text-gradient-primary">workshop.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "24px auto 0", lineHeight: 1.7 }}>
            Let your students see what they have only been asked to imagine. No commitment — just an experience.
          </motion.p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: "rgba(0,45,122,0.90)", marginBottom: -1 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
          <defs><linearGradient id="wG3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" /><stop offset="100%" stopColor="rgba(240,248,255,0.25)" />
          </linearGradient></defs>
          <path d="M0,40 C480,80 960,0 1440,60 L1440,80 L0,80 Z" fill="url(#wG3)" />
        </svg>
      </div>

      {/* ── Form + Info ── */}
      <section style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(24px)", padding: "96px 24px 128px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 3fr", gap: 48 }}>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -36, rotateY: 12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ transformPerspective: 900 }}
          >
            <p className="section-label" style={{ marginBottom: 24 }}>Contact details</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {[
                { Icon: Mail,   label: "Email",    val: "hello@sparkvr.in" },
                { Icon: Phone,  label: "Phone",    val: "+91 98765 43210" },
                { Icon: MapPin, label: "Location", val: "Bangalore, Karnataka, India" },
              ].map(({ Icon, label, val }) => (
                <motion.div key={label} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 14, cursor: "default" }}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12, boxShadow: "0 8px 24px rgba(0,82,204,0.18)" }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "rgba(0,82,204,0.08)", backdropFilter: "blur(8px)", border: "1px solid rgba(0,82,204,0.08)", color: "#0052cc" }}>
                    <Icon size={18} />
                  </motion.div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#001a4d", opacity: 0.4, marginBottom: 4 }}>{label}</p>
                    <p style={{ fontSize: 15, fontWeight: 500, color: "#001a4d" }}>{val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <TiltCard maxTilt={6} style={{ borderRadius: 20, display: "block" }}>
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  background: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)",
                  borderRadius: 20, padding: "28px 24px",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                }}
              >
                <p className="section-label" style={{ marginBottom: 20 }}>What happens next</p>
                {[
                  "Our team reaches out within 24 hours",
                  "We schedule a 30-minute discovery call",
                  "Your school gets a free pilot session",
                  "Students experience SparkVR firsthand",
                ].map((step, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: i < 3 ? 16 : 0 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.25, rotate: 10, background: "rgba(0,82,204,0.15)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(0,82,204,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}
                    >
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#0052cc" }}>{i + 1}</span>
                    </motion.div>
                    <p style={{ fontSize: 14, color: "#333", lineHeight: 1.55 }}>{step}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TiltCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 36, rotateY: -12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            style={{ transformPerspective: 900 }}
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9, rotateX: 12 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                style={{
                  background: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)",
                  borderRadius: 24, padding: "80px 40px",
                  border: "1px solid rgba(255,255,255,0.5)",
                  textAlign: "center", height: "100%",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20,
                  transformPerspective: 800,
                }}>
                <motion.div
                  animate={{ scale: [1, 1.12, 1], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(0,82,204,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <CheckCircle size={36} color="#0052cc" />
                </motion.div>
                <h3 style={{ fontSize: 28, fontWeight: 700, color: "#001a4d" }}>We will be in touch!</h3>
                <p style={{ fontSize: 16, color: "#333", opacity: 0.7 }}>Our team will reach out within 24 hours to schedule your free workshop.</p>
              </motion.div>
            ) : (
              <TiltCard maxTilt={5} style={{ borderRadius: 24, display: "block" }}>
                <motion.form onSubmit={handleSubmit}
                  whileHover={{ y: -3 }}
                  style={{
                    background: "rgba(255,255,255,0.65)", backdropFilter: "blur(16px)",
                    borderRadius: 24, padding: "40px 32px",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                  }}>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#001a4d", opacity: 0.35, marginBottom: 32 }}>
                    Workshop request form
                  </p>

                  {[
                    { id: "name",   label: "Your name",            type: "text",  ph: "Dr. Priya Sharma" },
                    { id: "school", label: "School / institution",  type: "text",  ph: "Greenfield Academy" },
                    { id: "email",  label: "Email address",         type: "email", ph: "priya@school.edu.in" },
                    { id: "phone",  label: "Phone number",          type: "tel",   ph: "+91 98765 43210" },
                  ].map((f) => (
                    <div key={f.id} style={{ marginBottom: 20 }}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#001a4d", marginBottom: 8 }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.ph}
                        required
                        value={form[f.id as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                        className="spark-input"
                        style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,82,204,0.1)" }}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: 32 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#001a4d", marginBottom: 8 }}>Message (optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your school..."
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="spark-textarea"
                      style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(0,82,204,0.1)" }}
                    />
                  </div>

                  <SparkButton type="submit" text="Submit workshop request" large fullWidth />
                </motion.form>
              </TiltCard>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
