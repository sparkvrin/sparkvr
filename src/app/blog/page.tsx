"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Book, Users, FileText, Target, ChevronRight } from "lucide-react";
import Link from "next/link";

/* ─── ANIMATION VARIANTS ─── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { delay, duration, ease: EASE },
});

const fadeUpRotate = (delay = 0) => ({
  initial: { opacity: 0, y: 36, rotateX: 16 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.95, ease: EASE },
});

/* ─── COMPACT 3D ICON WRAPPER ─── */
function FloatLoop({ children, y = 10, duration = 4, delay = 0 }: any) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0], rotateZ: [0, 1, -1, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function GlowIcon({ icon: Icon, size = 36, radius = 10, color = "#0052cc", delay = 0 }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotateY: 180 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <FloatLoop y={6} duration={4 + delay * 0.4} delay={delay}>
        <div style={{
          width: size, height: size, borderRadius: radius,
          background: `linear-gradient(135deg, ${color}14 0%, ${color}08 100%)`,
          border: `1.5px solid ${color}20`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color, boxShadow: `0 8px 24px ${color}12`
        }}>
          <Icon size={size * 0.48} strokeWidth={2.1} />
        </div>
      </FloatLoop>
    </motion.div>
  );
}

/* ─── 3D TILT CARD ─── */
function TiltCard({ children, style }: any) {
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mY, [-40, 40], [8, -8]), { stiffness: 220, damping: 18 });
  const rotateY = useSpring(useTransform(mX, [-100, 100], [-10, 10]), { stiffness: 220, damping: 18 });

  return (
    <motion.div
      onMouseMove={(e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mX.set(e.clientX - rect.left - rect.width / 2);
        mY.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { mX.set(0); mY.set(0); }}
      style={{ ...style, rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      whileHover={{ scale: 1.025 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── 3D FLOATING BACKGROUND ASSETS ─── */
function FloatingAsset({ icon: Icon, top, right, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
      animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
      transition={{ delay: delay + 0.8, duration: 1, ease: EASE }}
      style={{ position: "absolute", top, right, zIndex: 1, pointerEvents: "none" }}
    >
      <FloatLoop y={20} duration={6 + delay}>
         <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "rgba(255,255,255,0.4)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#0052cc", boxShadow: "0 20px 40px rgba(0,82,204,0.08)"
         }}>
            <Icon size={32} strokeWidth={1.5} />
         </div>
      </FloatLoop>
    </motion.div>
  );
}

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
  return (
    <>
      <section style={{
        position: "relative", width: "100%", minHeight: "100vh",
        display: "flex", flexDirection: "column",
        overflow: "hidden", background: "#ffffff",
      }}>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/blog1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            zIndex: 0,
          }}
        />

        <FloatingAsset icon={Book} top="20%" right="15%" delay={0} />
        <FloatingAsset icon={Target} top="45%" right="25%" delay={1} />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,0) 85%)",
          zIndex: 1,
        }} />

        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 1440, margin: "0 auto", width: "100%",
          padding: "160px 60px 40px",
          flex: 1, display: "flex", flexDirection: "column",
        }}>
          
          

          <div style={{ maxWidth: 680 }}>
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ fontSize: 14, fontWeight: 900, color: "#0052cc", letterSpacing: "0.2em" }}>BLOG</p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 44 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ height: 2.5, background: "#0052cc", borderRadius: 4 }} 
              />
            </motion.div>

            <motion.h1
              {...fadeUpRotate(0.25)}
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
              {...fadeUp(0.4)}
              style={{
                fontSize: 17, color: "#475569", lineHeight: 1.6,
                marginBottom: 48, maxWidth: 580, fontWeight: 500
              }}
            >
              Ideas, research and real perspectives on experiential learning, classroom innovation and the future of Indian education.
            </motion.p>

            <motion.div {...fadeUp(0.6)}>
              <Link href="#articles" style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.06, rotateX: 5, boxShadow: "0 20px 40px rgba(0,82,204,0.3)" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 12,
                    background: "#0052cc", borderRadius: 14,
                    padding: "16px 34px", color: "#fff",
                    boxShadow: "0 8px 24px rgba(0,82,204,0.2)",
                    cursor: "pointer", perspective: 500
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 800 }}>Explore Articles</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronRight size={20} strokeWidth={2.8} />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div style={{
          position: "relative", zIndex: 20,
          maxWidth: 1440, margin: "0 auto", width: "100%",
          padding: "0 60px", marginBottom: 50, marginTop: "auto"
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: EASE }}
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(24px)",
              borderRadius: 30,
              padding: "36px 54px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
              boxShadow: "0 20px 60px rgba(0,26,77,0.05)",
              border: "1px solid #ffffff",
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: 20 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                   <GlowIcon icon={item.icon} size={48} radius={14} delay={i * 0.3} />
                   <div style={{ width: 1.5, height: 40, background: "rgba(0,26,77,0.08)", borderRadius: 1 }} />
                </div>

                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 900, color: "#001a4d", marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.4, fontWeight: 500 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="articles" style={{ minHeight: "100vh", background: "#f8faff", padding: "120px 60px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
           <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: 80 }}>
              <motion.span 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                style={{ fontSize: 13, fontWeight: 800, color: "#0052cc", letterSpacing: "0.2em", display: "block", marginBottom: 16 }}
              >
                OUR PERSPECTIVES
              </motion.span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#001a4d", marginBottom: 24 }}>
                Latest from the <span className="text-gradient-primary">Spark Lab.</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: 80 }} 
                transition={{ duration: 1 }} 
                style={{ height: 3, background: "#0052cc", margin: "0 auto", borderRadius: 4 }} 
              />
           </motion.div>

           <div style={{
             display: "grid",
             gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
             gap: 40
           }}>
             {BLOG_POSTS.map((post, i) => (
               <motion.div
                 key={post.slug}
                 {...fadeUp(0.2 + i * 0.1)}
               >
                 <TiltCard style={{ height: "100%" }}>
                   <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                     <div style={{
                       background: "#ffffff",
                       borderRadius: 32,
                       overflow: "hidden",
                       height: "100%",
                       border: "1px solid rgba(0,82,204,0.06)",
                       boxShadow: "0 20px 50px rgba(0,26,77,0.04)",
                       display: "flex",
                       flexDirection: "column"
                     }}>
                       <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
                         <motion.img loading="lazy" decoding="async" 
                           whileHover={{ scale: 1.1 }}
                           transition={{ duration: 0.8 }}
                           src={post.image} 
                           alt={post.title} 
                           style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                         />
                         <div style={{
                           position: "absolute", top: 24, left: 24,
                           padding: "8px 16px", background: "rgba(255,255,255,0.9)",
                           backdropFilter: "blur(8px)", borderRadius: 12,
                           fontSize: 10, fontWeight: 900, color: "#0052cc", letterSpacing: "0.1em"
                         }}>
                           {post.category}
                         </div>
                       </div>

                       <div style={{ padding: 40, flex: 1, display: "flex", flexDirection: "column" }}>
                         <p style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600, marginBottom: 12 }}>{post.date}</p>
                         <h3 style={{ fontSize: 22, fontWeight: 800, color: "#001a4d", lineHeight: 1.3, marginBottom: 16 }}>
                           {post.title}
                         </h3>
                         <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.6, marginBottom: 32, flex: 1 }}>
                           {post.desc}
                         </p>
                         
                         <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#0052cc", fontWeight: 800, fontSize: 14 }}>
                           <span>Read Full Article</span>
                           <motion.div whileHover={{ x: 5 }}>
                             <ChevronRight size={18} />
                           </motion.div>
                         </div>
                       </div>
                     </div>
                   </Link>
                 </TiltCard>
               </motion.div>
             ))}
           </div>
        </div>
      </section>
    </>
  );
}
