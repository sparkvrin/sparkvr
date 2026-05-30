"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Clock, User, ChevronRight, 
  Share2, Link as LinkIcon, CheckCircle2 
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

/* ─── CUSTOM SOCIAL ICONS (SVG) ─── */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

/* ─── ANIMATION VARIANTS ─── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease: EASE },
});

/* ─── BLOG POSTS DATA (ENHANCED CHUNKS) ─── */
const BLOG_POSTS: Record<string, any> = {
  "how-experiential-learning-improves-concept-retention": {
    slug: "how-experiential-learning-improves-concept-retention",
    category: "RESEARCH",
    title: "How Experiential Learning Improves Concept Retention",
    subtitle: "New research shows how immersive experiences strengthen understanding and long-term retention in students.",
    date: "May 24, 2024",
    readTime: "5 min read",
    author: "By SparkVR Editorial Team",
    image: "/blog_vr.webp",
    tags: ["Experiential Learning", "Concept Retention", "Education Research", "Immersive Learning"],
    contentChunks: [
      { type: "p", content: "For decades, education has relied on explanation. Teachers explain brilliantly. The curriculum is structured. Examinations are rigorous. Yet many concepts remain abstract. Students are asked to imagine." },
      { type: "p", content: "What if they didn't have to? What if learning could be experienced instead of imagined?" },
      { type: "p", content: "Emerging research in experiential learning shows that when students actively engage with concepts through immersive and interactive experiences, their understanding deepens significantly—and more importantly, they remember longer." },
      { type: "h3", content: "The Science Behind Experiential Learning" },
      { type: "p", content: "Studies from cognitive science and educational psychology consistently highlight that experiential learning activates multiple areas of the brain. This multi-sensory engagement helps students form stronger neural connections, leading to improved retention and application of knowledge." },
      { type: "quote", content: "Students remember 75% of what they experience, compared to only 10% of what they read.", author: "National Training Laboratories" },
      { type: "h3", content: "Why It Matters in Classrooms" },
      { type: "p", content: "When abstract topics—like the human heart, planetary motion, or chemical reactions—are experienced in a safe, immersive environment, students move from passive reception to active discovery." },
      { type: "list", items: ["Concepts become visible.", "Thinking becomes deeper.", "Confidence grows naturally."] },
      { type: "p", content: "At SparkVR, we design experiences that fit seamlessly into the school day and curriculum—making conceptual clarity a reality for every student." }
    ]
  },
  "vr-modern-classrooms": {
     slug: "vr-modern-classrooms", category: "EDUCATION", title: "How VR is Transforming Modern Classrooms", subtitle: "Explore the shift from textbook learning to immersive 3D explorations.", date: "May 4, 2024", readTime: "8 min read", author: "By SparkVR Editorial Team", image: "/blog_vr.webp", tags: ["VR", "Classroom", "Tech"],
     contentChunks: [
       { type: "p", content: "Virtual Reality (VR) is no longer a futuristic concept—it's here, and it's changing the way students learn. By stepping inside a cell or walking through ancient Rome, history and science come alive in ways books never could." },
       { type: "h3", content: "Beyond the Textbook" },
       { type: "p", content: "Traditional teaching methods, while effective, often struggle to convey the scale and complexity of certain subjects. VR bridges this gap by providing a 1:1 scale experience of everything from atomic structures to the vastness of space." },
       { type: "quote", content: "Education is not the learning of facts, but the training of the mind to think.", author: "Albert Einstein" },
       { type: "p", content: "In a modern SparkVR-enabled classroom, students are not just spectators; they are explorers. This shift from passive to active learning is the cornerstone of the modern educational revolution." }
     ]
  },
  "future-cognitive-learning": {
     slug: "future-cognitive-learning", category: "RESEARCH", title: "The Future of Cognitive Learning & Tech", subtitle: "Understanding the neural impact of interactive virtual environments.", date: "April 28, 2024", readTime: "12 min read", author: "By Sanya Verma", image: "/blog_tech.webp", tags: ["Cognitive", "AI", "Neuroscience"],
     contentChunks: [
       { type: "p", content: "Cognitive learning is evolving at a rapid pace, driven by breakthroughs in neuroscience and immersive technology. Interactive virtual environments are proving to be powerful tools for cognitive development." },
       { type: "h3", content: "Neural Mapping in VR" },
       { type: "p", content: "Recent data suggests that the brain processes virtual experiences with a high degree of 'presence,' leading to the same neural pathways being activated as in real-world scenarios. This has profound implications for skill acquisition and emotional intelligence." },
       { type: "p", content: "As we move toward more personalized, AI-driven learning paths, the integration of VR will become standard, offering a customized pace for every unique learner." }
     ]
  }
};

/* ─── SIDEBAR RELATED ARTICLES DATA ─── */
const RELATED_ARTICLES = [
  { title: "NEP 2020 in Action: Why Experiential Learning Matters", date: "May 16, 2024", readTime: "6 min read", image: "/blog_vr.webp" },
  { title: "Designing Classrooms for the Future", date: "May 08, 2024", readTime: "4 min read", image: "/blog_tech.webp" },
  { title: "The Role of VR in STEM Education", date: "Apr 30, 2024", readTime: "5 min read", image: "/blog1.webp" },
  { title: "From Imagination to Understanding", date: "Apr 22, 2024", readTime: "5 min read", image: "/blog_vr.webp" },
  { title: "Empowering Teachers with the Right Tools", date: "Apr 15, 2024", readTime: "4 min read", image: "/blog_tech.webp" },
];

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

export default function BlogDetailPage() {
  const params = useParams();
  const rawSlug = params.slug as string;
  const post = BLOG_POSTS[rawSlug] || BLOG_POSTS["how-experiential-learning-improves-concept-retention"];

  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1100;

  return (
    <main style={{ background: "#ffffff", color: "#001a4d", minHeight: "100vh", paddingTop: isMobile ? 90 : 120, paddingBottom: isMobile ? 60 : 100 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 60px" }}>
        
        {/* Breadcrumb */}
        
        {/* ─── 2-COLUMN LAYOUT ─── */}
        <div className="blog-layout">
          
          {/* ─── LEFT: MAIN CONTENT ─── */}
          <article className="blog-main">
            <motion.div {...fadeUp(0.1)}>
              <span className="blog-category-badge">{post.category}</span>
              <h1 className="blog-title">{post.title}</h1>
              <p className="blog-subtitle">{post.subtitle}</p>
              
              <div className="blog-meta-row">
                <div className="meta-item"><Calendar size={15} strokeWidth={2.5} className="meta-icon" /> {post.date}</div>
                <div className="meta-item"><Clock size={15} strokeWidth={2.5} className="meta-icon" /> {post.readTime}</div>
                <div className="meta-item"><User size={15} strokeWidth={2.5} className="meta-icon" /> {post.author}</div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div {...fadeUp(0.2)} className="blog-hero-image-container">
              <img loading="lazy" decoding="async"
                src={post.image}
                alt={post.title}
                className="blog-hero-image"
              />
            </motion.div>

            <div className="blog-content">
              {post.contentChunks.map((chunk: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
                >
                  {chunk.type === "p" && <p>{chunk.content}</p>}
                  {chunk.type === "h3" && <h3>{chunk.content}</h3>}
                  {chunk.type === "quote" && (
                    <div className="custom-blockquote">
                      <div className="quote-icon">“</div>
                      <div className="quote-content">
                        <p className="quote-text">{chunk.content}</p>
                        <p className="quote-author">– {chunk.author}</p>
                      </div>
                    </div>
                  )}
                  {chunk.type === "list" && (
                    <ul className="custom-list">
                      {chunk.items.map((item: string, j: number) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Tags & Share */}
            <motion.div {...fadeUp(0.4)}>
              <div className="blog-divider" />
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
                <div className="tags-row">
                  <span style={{ fontWeight: 800, fontSize: 13, color: "#001a4d", marginRight: 8, letterSpacing: "0.05em" }}>TAGS:</span>
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="share-row">
                  <span style={{ fontWeight: 800, fontSize: 13, color: "#001a4d", marginRight: 8, letterSpacing: "0.05em" }}>SHARE:</span>
                  <motion.div whileHover={{ scale: 1.2, color: "#0052cc" }} className="share-icon"><FacebookIcon /></motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: "#00acee" }} className="share-icon"><TwitterIcon /></motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: "#0077b5" }} className="share-icon"><LinkedinIcon /></motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: "#0052cc" }} className="share-icon"><LinkIcon size={16} /></motion.div>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }} className="author-box">
                <div className="author-logo">
                   <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #0052cc 0%, #1d8cf8 100%)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #fff", boxShadow: "0 8px 20px rgba(0,82,204,0.2)" }}>
                      <span style={{ color: "#fff", fontWeight: 900, fontSize: 14 }}>SVR</span>
                   </div>
                </div>
                <div>
                  <h4 style={{ fontSize: 17, fontWeight: 900, color: "#001a4d", marginBottom: 6 }}>SparkVR Editorial Team</h4>
                  <p style={{ fontSize: 14, color: "#64748b", fontWeight: 500, lineHeight: 1.6 }}>
                    Passionate about transforming education through immersive learning and sharing insights that shape the future of classrooms worldwide.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </article>

          {/* ─── RIGHT: SIDEBAR (3D STICKY) ─── */}
          <aside className="blog-sidebar">
            <motion.div {...fadeUp(0.3)} className="related-articles-box">
              <h3 className="sidebar-title">RELATED STORIES</h3>
              <div className="related-list">
                {RELATED_ARTICLES.map((article, i) => (
                  <Link href={`/blog/post-${i}`} key={i} style={{ textDecoration: "none" }}>
                    <motion.div 
                      className="related-item" 
                      whileHover={{ x: 8, scale: 1.02 }} 
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <img loading="lazy" decoding="async" src={article.image} alt={article.title} className="related-img" />
                      <div className="related-text">
                        <h4>{article.title}</h4>
                        <p>{article.date} • {article.readTime}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="view-all-link">
                VIEW ALL ARTICLES <ChevronRight size={16} strokeWidth={3} />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="cta-box"
            >
              <div className="cta-icon-wrapper">
                <Calendar size={26} color="#0052cc" strokeWidth={2.5} />
              </div>
              <h3 className="cta-title">Experience the Impact in Your School</h3>
              <p className="cta-desc">Book a free, no-obligation workshop and explore how SparkVR can transform learning.</p>
              <Link href="/contact#contact-form" style={{ textDecoration: "none" }}>
                <button className="cta-button">
                  BOOK FREE WORKSHOP <ChevronRight size={18} strokeWidth={3} />
                </button>
              </Link>
              <div className="cta-wave-bg"></div>
            </motion.div>
          </aside>
        </div>
      </div>

      <style jsx global>{`
        /* ── Layout ── */
        .blog-layout { display: grid; grid-template-columns: 1fr 340px; gap: 60px; align-items: start; }
        @media (max-width: 1100px) { .blog-layout { grid-template-columns: 1fr; gap: 40px; } }

        /* ── Main article — no card, content aligns with header/footer ── */
        .blog-main { background: transparent; padding: 0; border-radius: 0; box-shadow: none; border: none; }

        /* ── Category + Title ── */
        .blog-category-badge { display: inline-block; background: #f0f7ff; color: #0052cc; font-size: 11px; font-weight: 900; letter-spacing: 0.15em; padding: 7px 14px; border-radius: 8px; margin-bottom: 20px; }
        .blog-title { font-size: clamp(28px, 4vw, 52px); font-weight: 900; color: #001a4d; line-height: 1.06; letter-spacing: -0.03em; margin-bottom: 20px; }
        .blog-subtitle { font-size: 17px; color: #64748b; line-height: 1.65; margin-bottom: 28px; font-weight: 500; border-left: 3px solid #dbeafe; padding-left: 20px; }
        .blog-meta-row { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; margin-bottom: 40px; border-bottom: 1px solid #f1f5f9; padding-bottom: 24px; }
        .meta-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #64748b; font-weight: 700; }

        /* ── Hero image ── */
        .blog-hero-image-container { width: 100%; border-radius: 16px; overflow: hidden; margin-bottom: 40px; box-shadow: 0 12px 40px rgba(0,26,77,0.08); }
        .blog-hero-image { width: 100%; height: auto; display: block; }

        /* ── Body content ── */
        .blog-content { font-size: 16px; line-height: 1.9; color: #334155; }
        .blog-content p { margin-bottom: 24px; }
        .blog-content h3 { font-size: clamp(18px, 2.5vw, 24px); font-weight: 900; color: #001a4d; margin: 44px 0 18px; letter-spacing: -0.01em; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; }

        /* ── Blockquote ── */
        .custom-blockquote { display: flex; background: #f8fafc; border-radius: 16px; padding: 28px 32px; margin: 36px 0; gap: 20px; border-left: 5px solid #0052cc; }
        @media (max-width: 768px) { .custom-blockquote { padding: 20px; flex-direction: column; gap: 8px; } .quote-icon { font-size: 48px; margin-top: -8px; } }
        .quote-icon { font-size: 64px; color: #0052cc; line-height: 1; opacity: 0.12; margin-top: -16px; flex-shrink: 0; }
        .quote-text { font-size: 18px; color: #001a4d; font-weight: 700; line-height: 1.55; font-style: italic; margin-bottom: 12px !important; }
        .quote-author { font-size: 13px; color: #0052cc; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0 !important; }

        /* ── List ── */
        .custom-list { list-style: none; padding: 0; margin: 28px 0 36px; display: grid; gap: 14px; }
        .custom-list li { display: flex; align-items: center; gap: 16px; font-weight: 700; color: #334155; font-size: 16px; }
        .custom-list li::before { content: "✓"; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: #eff6ff; color: #0052cc; font-size: 12px; flex-shrink: 0; }

        /* ── Tags & share ── */
        .blog-divider { height: 1px; background: #f1f5f9; margin: 40px 0 32px; }
        .tags-row { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; }
        .share-row { display: flex; align-items: center; gap: 10px; }
        .tag-pill { background: #f8fafc; color: #64748b; font-size: 11px; font-weight: 800; padding: 7px 16px; border-radius: 20px; border: 1px solid #e2e8f0; cursor: default; transition: all 0.2s; }
        .tag-pill:hover { background: #0052cc; color: #fff; border-color: #0052cc; }
        .share-icon { width: 40px; height: 40px; border-radius: 50%; background: #fff; border: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: center; color: #94a3b8; cursor: pointer; transition: all 0.2s; }
        .share-icon:hover { border-color: #0052cc; color: #0052cc; }
        .author-box { display: flex; align-items: center; gap: 24px; background: #f8fafc; padding: 28px 32px; border-radius: 16px; margin-top: 40px; border: 1px solid rgba(0,82,204,0.06); }
        @media (max-width: 768px) { .author-box { flex-direction: column; align-items: flex-start; gap: 16px; padding: 20px; border-radius: 14px; } }

        /* ── Sidebar ── */
        .blog-sidebar { display: flex; flex-direction: column; gap: 28px; position: sticky; top: 120px; }
        @media (max-width: 768px) { .blog-sidebar { position: relative; top: 0; } }
        .related-articles-box { background: #fff; border-radius: 24px; padding: 32px 28px; border: 1px solid rgba(0,82,204,0.06); box-shadow: 0 8px 32px rgba(0,26,77,0.03); }
        @media (max-width: 768px) { .related-articles-box { padding: 24px 20px; border-radius: 16px; } }
        .sidebar-title { font-size: 12px; font-weight: 900; color: #0052cc; letter-spacing: 0.18em; margin-bottom: 24px; border-bottom: 2px solid #eff6ff; padding-bottom: 10px; display: inline-block; }
        .related-list { display: flex; flex-direction: column; gap: 20px; }
        .related-item { display: flex; align-items: center; gap: 16px; }
        .related-img { width: 68px; height: 68px; border-radius: 12px; object-fit: cover; flex-shrink: 0; }
        .related-text h4 { font-size: 14px; font-weight: 800; color: #001a4d; line-height: 1.35; margin-bottom: 5px; }
        .related-text p { font-size: 11px; color: #94a3b8; font-weight: 700; }
        .view-all-link { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 28px; font-size: 12px; font-weight: 900; color: #0052cc; text-decoration: none; letter-spacing: 0.1em; transition: gap 0.2s; }
        .view-all-link:hover { gap: 16px; }

        /* ── CTA box ── */
        .cta-box { background: #001a4d; border-radius: 24px; padding: 40px 32px; text-align: center; position: relative; overflow: hidden; box-shadow: 0 20px 60px rgba(0,26,77,0.25); }
        .cta-icon-wrapper { width: 60px; height: 60px; border-radius: 18px; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
        .cta-title { font-size: 20px; font-weight: 900; color: #ffffff; line-height: 1.3; margin-bottom: 14px; }
        .cta-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.6; margin-bottom: 28px; font-weight: 500; }
        .cta-button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 14px 32px; background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%); color: #ffffff; border: none; border-radius: 40px; font-weight: 700; font-size: 13px; cursor: pointer; transition: all 0.25s; letter-spacing: 0.14em; box-shadow: 0 10px 28px rgba(29,78,216,0.3); }
        .cta-button:hover { transform: scale(1.05); box-shadow: 0 16px 40px rgba(29,78,216,0.4); }
        .cta-button:active { transform: scale(0.97); }
        .cta-wave-bg { position: absolute; inset: 0; background: radial-gradient(circle at top right, rgba(0,82,204,0.18) 0%, transparent 70%); pointer-events: none; }
      `}</style>
    </main>
  );
}
