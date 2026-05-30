"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.5, ease: EASE },
});

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

const SECTIONS = [
  {
    title: "1. What Are Cookies?",
    body: "Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience. Cookies do not contain personally identifiable information on their own.",
  },
  {
    title: "2. Types of Cookies We Use",
    body: "We use the following types of cookies: Essential Cookies — required for the website to function correctly (e.g., session management, security). Analytics Cookies — help us understand how visitors interact with our website so we can improve it. Preference Cookies — remember your settings and preferences for future visits. Marketing Cookies — used to show relevant content and track the effectiveness of our outreach (used sparingly).",
  },
  {
    title: "3. How We Use Cookies",
    body: "We use cookies to keep you logged in during a session, remember your language and display preferences, analyse site traffic and page performance, understand which pages and content are most useful to our visitors, and improve the overall functionality of our platform.",
  },
  {
    title: "4. Third-Party Cookies",
    body: "Some cookies on our website are placed by third-party services such as Google Analytics. These third parties may use cookies to collect information about your online activities across websites. We do not control third-party cookies and recommend reviewing their respective privacy policies.",
  },
  {
    title: "5. Managing Cookies",
    body: "You can control or delete cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or set preferences for specific websites. Please note that disabling certain cookies may affect the functionality of parts of our website.",
  },
  {
    title: "6. Cookie Consent",
    body: "By continuing to use the SparkVR website, you consent to our use of cookies as described in this policy. Where required by law, we will ask for your explicit consent before placing non-essential cookies.",
  },
  {
    title: "7. Updates to This Policy",
    body: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our services. Any changes will be posted on this page with a revised effective date.",
  },
  {
    title: "8. Contact Us",
    body: "If you have any questions about our use of cookies, please contact us at hello@sparkvr.in or call +91 73892 92658.",
  },
];

export default function CookiePolicyPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,82,204,0.07)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "100px 20px 48px" : "120px 60px 60px" }}>
          <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(0,82,204,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Cookie size={18} color="#0052cc" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#0052cc", letterSpacing: "0.18em" }}>LEGAL</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.15)} style={{ fontSize: isMobile ? "clamp(28px,7vw,40px)" : "clamp(36px,4vw,52px)", fontWeight: 900, color: "#001a4d", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
            Cookie Policy
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ fontSize: isMobile ? 13 : 15, color: "#64748b", fontWeight: 500, margin: 0 }}>
            Last updated: January 1, 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: isMobile ? "40px 20px 80px" : "60px 60px 100px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          <motion.p {...fadeUp(0.1)} style={{ fontSize: isMobile ? 14 : 16, color: "#475569", lineHeight: 1.8, fontWeight: 500, marginBottom: 48, padding: isMobile ? "20px" : "28px 36px", background: "#ffffff", borderRadius: 16, border: "1px solid rgba(0,82,204,0.08)", boxShadow: "0 4px 20px rgba(0,26,77,0.04)" }}>
            This Cookie Policy explains how SparkVR uses cookies and similar technologies when you visit our website. It describes what these technologies are, why we use them, and your rights to control their use.
          </motion.p>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {SECTIONS.map((sec, i) => (
              <motion.div key={i} {...fadeUp(0.05 * i)} style={{ background: "#ffffff", borderRadius: 16, padding: isMobile ? "24px 20px" : "32px 36px", border: "1px solid rgba(0,82,204,0.06)", boxShadow: "0 2px 12px rgba(0,26,77,0.03)" }}>
                <h2 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 900, color: "#001a4d", margin: "0 0 12px" }}>{sec.title}</h2>
                <p style={{ fontSize: isMobile ? 13 : 15, color: "#475569", lineHeight: 1.8, margin: 0, fontWeight: 500 }}>{sec.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
