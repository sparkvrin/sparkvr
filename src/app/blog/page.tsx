"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Users, FileText, Target, ChevronRight } from "lucide-react";
import Link from "next/link";

function useScreenWidth() {
  const [width, setWidth] = React.useState(1200);
  React.useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { delay, duration, ease: EASE },
});

const BLOG_POSTS = [
  {
    slug: "vr-modern-classrooms",
    title: "How VR is Transforming Modern Classrooms",
    desc: "Explore the shift from textbook learning to immersive 3D explorations.",
    category: "EDUCATION",
    image: "/blog_vr.webp",
    date: "May 4, 2024"
  },
  {
    slug: "future-cognitive-learning",
    title: "The Future of Cognitive Learning & Tech",
    desc: "Understanding the neural impact of interactive virtual environments.",
    category: "RESEARCH",
    image: "/blog_tech.webp",
    date: "April 28, 2024"
  },
  {
    slug: "science-lab-evolution",
    title: "Evolution of the Science Lab: From Bunsen to Bits",
    desc: "Why virtual labs are becoming the safer, more scalable alternative.",
    category: "INNOVATION",
    image: "/blog1.webp",
    date: "April 15, 2024"
  }
];

export default function BlogPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: "relative", width: "100%", minHeight: "100vh",
        display: "flex", flexDirection: "column",
        overflow: "hidden", background: "#ffffff",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: isMobile ? undefined : "url('/blog1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          zIndex: 0,
        }} />

        <div style={{
          position: "absolute", inset: 0,
          background: isMobile ? "transparent" : "linear-gradient(to right, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,0) 85%)",
          zIndex: 1,
        }} />

        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 1400, margin: "0 auto", width: "100%",
          padding: isMobile ? "100px 20px 60px" : isTablet ? "110px 32px 60px" : "110px 60px 60px",
          flex: 1, display: "flex", flexDirection: "column",
        }}>
          <div style={{ maxWidth: 680 }}>
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ fontSize: 14, fontWeight: 900, color: "#0052cc", letterSpacing: "0.2em" }}>BLOG</p>
              <div style={{ width: 44, height: 2.5, background: "#0052cc", borderRadius: 4 }} />
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              style={{
                fontSize: "clamp(44px, 6vw, 76px)",
                fontWeight: 900, color: "#001a4d",
                lineHeight: 1.02, letterSpacing: "-0.035em",
                marginBottom: 28,
              }}
            >
              Insights for the <br />
              future of <span className="text-gradient-primary">education.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              style={{
                fontSize: 17, color: "#475569", lineHeight: 1.6,
                marginBottom: 48, maxWidth: 580, fontWeight: 500
              }}
            >
              Ideas, research and real perspectives on experiential learning, classroom innovation and the future of Indian education.
            </motion.p>

            <motion.div {...fadeUp(0.4)}>
              <Link href="#articles" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 12,
                    background: "#0052cc", borderRadius: 14,
                    padding: "16px 34px", color: "#fff",
                    boxShadow: "0 8px 24px rgba(0,82,204,0.2)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 800 }}>Explore Articles</span>
                  <ChevronRight size={20} strokeWidth={2.8} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom category bar */}
        <div style={{
          position: "relative", zIndex: 20,
          maxWidth: 1400, margin: "0 auto", width: "100%",
          padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 60px", marginBottom: 50, marginTop: "auto"
        }}>
          <motion.div
            {...fadeUp(0.5)}
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(24px)",
              borderRadius: 24,
              padding: isMobile ? "20px 20px" : isTablet ? "24px 32px" : "32px 48px",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: isMobile ? 20 : isTablet ? 24 : 36,
              boxShadow: "0 20px 60px rgba(0,26,77,0.05)",
              border: "1px solid rgba(0,82,204,0.06)",
            }}
          >
            {[
              { icon: Book, title: "Research & Insights", desc: "Evidence-based perspectives." },
              { icon: Users, title: "Classroom Innovation", desc: "Practical ideas from educators." },
              { icon: FileText, title: "Policy & Education", desc: "Updates on policy reforms." },
              { icon: Target, title: "Future Ready", desc: "Trends shaping learning." }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.6 + i * 0.08)}
                style={{ display: "flex", alignItems: "center", gap: 20 }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "rgba(0,82,204,0.06)",
                  border: "1.5px solid rgba(0,82,204,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#0052cc", flexShrink: 0
                }}>
                  <item.icon size={22} strokeWidth={2} />
                </div>
                <div style={{ width: 1.5, height: 36, background: "rgba(0,26,77,0.08)", borderRadius: 1 }} />
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 900, color: "#001a4d", marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.4, fontWeight: 500 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section id="articles" style={{ background: "#f8faff", padding: isMobile ? "48px 0 60px" : "60px 0 80px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 60px" }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: isMobile ? 40 : 56 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#0052cc", letterSpacing: "0.2em", display: "block", marginBottom: 16 }}>
              OUR PERSPECTIVES
            </span>
            <h2 style={{ fontSize: isMobile ? "clamp(26px, 7vw, 36px)" : "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#001a4d", marginBottom: 20 }}>
              Latest from the <span className="text-gradient-primary">Spark Lab.</span>
            </h2>
            <div style={{ width: 60, height: 3, background: "#0052cc", margin: "0 auto", borderRadius: 4 }} />
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: isMobile ? 24 : 32
          }}>
            {BLOG_POSTS.map((post, i) => (
              <motion.div key={post.slug} {...fadeUp(0.1 + i * 0.1)}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,26,77,0.1)" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{
                      background: "#ffffff",
                      borderRadius: 28,
                      overflow: "hidden",
                      border: "1px solid rgba(0,82,204,0.06)",
                      boxShadow: "0 8px 30px rgba(0,26,77,0.05)",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                      <img
                        loading="lazy" decoding="async"
                        src={post.image}
                        alt={post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div style={{
                        position: "absolute", top: 20, left: 20,
                        padding: "6px 14px", background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(8px)", borderRadius: 10,
                        fontSize: 10, fontWeight: 900, color: "#0052cc", letterSpacing: "0.1em"
                      }}>
                        {post.category}
                      </div>
                    </div>

                    <div style={{ padding: isMobile ? "24px 20px" : "32px 36px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <p style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600, marginBottom: 10 }}>{post.date}</p>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#001a4d", lineHeight: 1.3, marginBottom: 14 }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, marginBottom: 28, flex: 1 }}>
                        {post.desc}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#0052cc", fontWeight: 800, fontSize: 14 }}>
                        <span>Read Full Article</span>
                        <ChevronRight size={16} strokeWidth={2.5} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
