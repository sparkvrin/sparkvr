"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

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
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, school name, and city when you submit a contact or demo request form. We may also collect usage data including pages visited, time spent, and device information to improve our services.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect to respond to your enquiries and demo requests, send you relevant updates about SparkVR products and educational programmes, improve our platform and user experience, and comply with legal obligations. We do not sell or rent your personal data to third parties.",
  },
  {
    title: "3. Data Sharing",
    body: "We may share your information with trusted service providers who assist us in operating our website and business, subject to confidentiality agreements. We may also disclose information when required by law or to protect the rights and safety of SparkVR, its users, or the public.",
  },
  {
    title: "4. Cookies",
    body: "We use cookies and similar tracking technologies to enhance your browsing experience and analyse website traffic. You can control cookie settings through your browser. Please see our Cookie Policy for more details.",
  },
  {
    title: "5. Data Security",
    body: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "6. Data Retention",
    body: "We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.",
  },
  {
    title: "7. Your Rights",
    body: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain types of processing. To exercise these rights, please contact us at hello@sparkvr.in.",
  },
  {
    title: "8. Children's Privacy",
    body: "SparkVR's platform is intended for use in schools under teacher supervision. We do not knowingly collect personal data directly from children under 13. Any student data collected through our platform is managed by the school as the data controller.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. Your continued use of SparkVR after changes become effective constitutes your acceptance of the revised policy.",
  },
  {
    title: "10. Contact Us",
    body: "If you have questions about this Privacy Policy or our data practices, please contact us at hello@sparkvr.in or call +91 73892 92658.",
  },
];

export default function PrivacyPolicyPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,82,204,0.07)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "100px 20px 48px" : "120px 60px 60px" }}>
          <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(0,82,204,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ShieldCheck size={18} color="#0052cc" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#0052cc", letterSpacing: "0.18em" }}>LEGAL</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.15)} style={{ fontSize: isMobile ? "clamp(28px,7vw,40px)" : "clamp(36px,4vw,52px)", fontWeight: 900, color: "#001a4d", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
            Privacy Policy
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
            SparkVR ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
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
