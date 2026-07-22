"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, Calendar, User, Share2, Clock, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

/* ─── ANIMATION VARIANTS ─── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease: EASE },
});

/* ─── 3D TILT CARD COMPONENT ─── */
function TiltCard({ children, style }: any) {
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mY, [-20, 20], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mX, [-50, 50], [-5, 5]), { stiffness: 200, damping: 20 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mX.set(e.clientX - rect.left - rect.width / 2);
        mY.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { mX.set(0); mY.set(0); }}
      style={{ ...style, rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── FULL BLOG DATA ─── */
const BLOG_POSTS: Record<string, any> = {
  "vr-modern-classrooms": {
    slug: "vr-modern-classrooms",
    title: "How VR is Transforming Modern Classrooms",
    category: "EDUCATION",
    image: "/blog_vr.webp",
    date: "May 4, 2024",
    author: "Dr. Aryan Sharma",
    readTime: "8 min read",
    content: `
      <p>Virtual Reality (VR) is no longer a futuristic concept—it's here, and it's changing the way students learn. By transporting learners from the confines of a traditional classroom to the depths of the ocean or the surface of Mars, VR creates an immersive environment that fosters curiosity and deep understanding.</p>
      
      <h3>The Shift from Passive to Active Learning</h3>
      <p>Traditional learning often involves passive absorption of information. VR flips this script, requiring students to interact with their environment. Whether they are performing a complex virtual chemistry experiment or exploring a historical site, they are actively participating in their own education.</p>
      
      <blockquote>
        "VR allows us to fail safely, explore boundlessly, and learn experientially in ways that were previously impossible."
      </blockquote>

      <h3>Key Benefits of VR in Schools</h3>
      <p>By integrating VR, educational institutions are seeing a 35% increase in knowledge retention compared to traditional video-based learning. The key lies in the "Presence" factor—the psychological feeling of actually being inside the environment.</p>
      <ul>
        <li><strong>Enhanced Engagement:</strong> Students are more focused and motivated when they are immersed in a 3D world.</li>
        <li><strong>Safe Exploration:</strong> Conduct high-risk experiments or visit dangerous locations without any real-world risk.</li>
        <li><strong>Universal Accessibility:</strong> VR can bring expensive field trips and complex labs to any classroom, regardless of location or budget.</li>
      </ul>
    `
  },
  "future-cognitive-learning": {
    slug: "future-cognitive-learning",
    title: "The Future of Cognitive Learning & Tech",
    category: "RESEARCH",
    image: "/blog_tech.webp",
    date: "April 28, 2024",
    author: "Sanya Verma",
    readTime: "12 min read",
    content: `
      <p>Cognitive learning is evolving at a rapid pace, driven by breakthroughs in neuroscience and educational technology. We are now able to tailor educational experiences to the individual's neural patterns.</p>
      
      <h3>Neuro-Education: A New Frontier</h3>
      <p>Recent studies suggest that interactive 3D environments stimulate the hippocampus more effectively than 2D interfaces. This leads to stronger memory formation and more robust conceptual understanding.</p>

      <h3>Hyper-Personalization</h3>
      <p>With the integration of AI, the future of learning is hyper-personalized. Systems will soon be able to adjust the complexity of a VR simulation in real-time based on the student's cognitive load and emotional response.</p>
    `
  },
  "science-lab-evolution": {
    slug: "science-lab-evolution",
    title: "Evolution of the Science Lab: From Bunsen to Bits",
    category: "INNOVATION",
    image: "/blog1.webp",
    date: "April 15, 2024",
    author: "Prof. Vikram Singh",
    readTime: "10 min read",
    content: `
      <p>The traditional science lab is being reinvented. Virtual labs offer a scalable, cost-effective, and safe alternative for schools to provide high-quality STEM education.</p>

      <h3>Scaling Excellence</h3>
      <p>One of the biggest hurdles in quality science education is the cost of physical equipment. Virtual labs allow thousands of students to access a multi-million dollar laboratory setup from a single device.</p>

      <blockquote>
        "The lab of the future isn't defined by the walls of a building, but by the boundaries of our imagination."
      </blockquote>
    `
  }
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_POSTS[slug];

  // Get other posts for sidebar
  const otherPosts = Object.values(BLOG_POSTS).filter(p => p.slug !== slug);

  if (!post) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontWeight: 900, color: "#001a4d" }}>Insight Not Found</h1>
      </div>
    );
  }

  return (
    <main style={{ background: "#ffffff", color: "#001a4d" }}>
      {/* ─── BLOG HERO SECTION ─── */}
      <section style={{ position: "relative", minHeight: "65vh", overflow: "hidden" }}>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${post.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.7) 40%, transparent 100%)",
        }} />

        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 1440, margin: "0 auto", width: "100%",
          padding: "160px 60px 40px",
        }}>
          <Link href="/blog" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ x: -8 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#0052cc", fontWeight: 800, marginBottom: 40 }}
            >
              <ChevronLeft size={20} strokeWidth={3} />
              <span style={{ fontSize: 14, letterSpacing: "0.05em" }}>BACK TO BLOG</span>
            </motion.div>
          </Link>

          <motion.div {...fadeUp(0.1)} style={{ maxWidth: 900 }}>
             <span style={{ fontSize: 14, fontWeight: 900, color: "#0052cc", letterSpacing: "0.2em", display: "block", marginBottom: 24 }}>
               {post.category}
             </span>
             <h1 style={{ fontSize: "clamp(36px, 5.5vw, 68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 36, letterSpacing: "-0.03em" }}>
               {post.title}
             </h1>
          </motion.div>

          <motion.div 
            {...fadeUp(0.25)}
            style={{ display: "flex", gap: 40, color: "#64748b", fontWeight: 700, fontSize: 14 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(0,82,204,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <User size={16} color="#0052cc" />
              </div>
              <span>{post.author}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Calendar size={16} color="#0052cc" strokeWidth={2.5} />
              <span>{post.date}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Clock size={16} color="#0052cc" strokeWidth={2.5} />
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2-COLUMN ARTICLE LAYOUT ─── */}
      <section style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 60px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 80 }}>
          
          {/* Main Content Area */}
          <article>
            <motion.div 
              {...fadeUp(0.4)}
              className="blog-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{ fontSize: 18, lineHeight: 1.85, color: "#475569" }}
            />

            {/* Share Tool */}
            <motion.div 
              {...fadeUp(0.6)}
              style={{
                marginTop: 80, padding: "40px", borderRadius: 32,
                background: "#f8faff", border: "1px solid rgba(0,82,204,0.08)",
                display: "flex", alignItems: "center", justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                 <div style={{ width: 52, height: 52, borderRadius: 16, background: "#0052cc", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 10px 20px rgba(0,82,204,0.2)" }}>
                   <Share2 size={24} />
                 </div>
                 <div>
                   <p style={{ fontSize: 16, fontWeight: 900, color: "#001a4d" }}>Found this insightful?</p>
                   <p style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>Share it with your network.</p>
                 </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, background: "#0052cc" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "14px 28px", borderRadius: 14,
                  background: "#001a4d", color: "#fff",
                  border: "none", cursor: "pointer",
                  fontWeight: 800, fontSize: 14, transition: "background 0.3s ease"
                }}
              >
                COPY LINK
              </motion.button>
            </motion.div>
          </article>

          {/* Sidebar - More Articles */}
          <aside>
             <motion.div {...fadeUp(0.2)}>
                <h4 style={{ fontSize: 18, fontWeight: 900, color: "#001a4d", marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
                   <div style={{ width: 6, height: 18, background: "#0052cc", borderRadius: 4 }} />
                   MORE ARTICLES
                </h4>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  {otherPosts.map((other, idx) => (
                    <motion.div key={other.slug} {...fadeUp(0.3 + idx * 0.15)}>
                      <TiltCard>
                        <Link href={`/blog/${other.slug}`} style={{ textDecoration: "none" }}>
                          <div style={{ 
                            background: "#ffffff", borderRadius: 24, padding: 20,
                            border: "1px solid rgba(0,26,77,0.06)",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.03)",
                            transition: "all 0.3s ease"
                          }}>
                             <div style={{ height: 140, borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
                                <img loading="lazy" decoding="async" src={other.image} alt={other.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                             </div>
                             <span style={{ fontSize: 10, fontWeight: 900, color: "#0052cc", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                               {other.category}
                             </span>
                             <h5 style={{ fontSize: 15, fontWeight: 800, color: "#001a4d", lineHeight: 1.4, marginBottom: 16 }}>
                               {other.title}
                             </h5>
                             <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#0052cc", fontSize: 12, fontWeight: 800 }}>
                                <span>READ MORE</span>
                                <ChevronRight size={14} strokeWidth={3} />
                             </div>
                          </div>
                        </Link>
                      </TiltCard>
                    </motion.div>
                  ))}
                </div>

                {/* Newsletter Box */}
                <motion.div 
                  {...fadeUp(0.6)}
                  style={{ 
                    marginTop: 48, padding: 32, borderRadius: 24, 
                    background: "linear-gradient(135deg, #001a4d 0%, #002d7a 100%)",
                    color: "#fff", position: "relative", overflow: "hidden"
                  }}
                >
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <BookOpen size={32} style={{ marginBottom: 20, opacity: 0.5 }} />
                    <h5 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>Join the Lab</h5>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 24 }}>Get the latest 3D learning insights in your inbox.</p>
                    <input 
                      placeholder="Your email" 
                      style={{ 
                        width: "100%", padding: "12px 16px", borderRadius: 10, 
                        border: "none", background: "rgba(255,255,255,0.1)", 
                        color: "#fff", marginBottom: 12, fontSize: 13, outline: "none"
                      }} 
                    />
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      style={{ width: "100%", padding: "12px", borderRadius: 10, background: "#0052cc", color: "#fff", border: "none", fontWeight: 800, fontSize: 13, cursor: "pointer" }}
                    >
                      SUBSCRIBE
                    </motion.button>
                  </div>
                </motion.div>
             </motion.div>
          </aside>
        </div>
      </section>

      <style jsx global>{`
        .blog-body h3 {
          font-size: 28px;
          color: #001a4d;
          margin: 48px 0 24px;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
        .blog-body p { margin-bottom: 24px; }
        .blog-body blockquote {
          margin: 48px 0;
          padding: 40px;
          background: #f8faff;
          border-left: 6px solid #0052cc;
          font-style: italic;
          font-size: 24px;
          color: #001a4d;
          font-weight: 700;
          line-height: 1.5;
          border-radius: 0 24px 24px 0;
        }
        .blog-body ul { margin: 32px 0; padding-left: 24px; list-style: none; }
        .blog-body li {
          margin-bottom: 20px;
          position: relative;
          padding-left: 32px;
          font-weight: 500;
        }
        .blog-body li::before {
          content: "";
          position: absolute;
          left: 0; top: 10px;
          width: 8px; height: 8px;
          background: #0052cc;
          border-radius: 50%;
        }
      `}</style>
    </main>
  );
}
