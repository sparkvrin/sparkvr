"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.7, ease: EASE },
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
    title: "1. Acceptance of Terms",
    body: "By accessing or using the SparkVR website and services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
  },
  {
    title: "2. Use of the Platform",
    body: "SparkVR provides immersive VR-based educational content for school students and educators. You agree to use the platform solely for lawful educational purposes and in accordance with these terms. You must not misuse, reverse-engineer, or attempt to gain unauthorised access to any part of the platform.",
  },
  {
    title: "3. Accounts and Access",
    body: "Access to SparkVR's platform is provided to schools and institutions through a formal agreement. School administrators are responsible for managing user accounts within their institution. You are responsible for maintaining the confidentiality of your access credentials.",
  },
  {
    title: "4. Intellectual Property",
    body: "All content on the SparkVR platform, including 3D models, curriculum modules, animations, text, graphics, and software, is the exclusive property of SparkVR or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without prior written consent.",
  },
  {
    title: "5. Content and Conduct",
    body: "You agree not to upload, transmit, or share any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable. SparkVR reserves the right to remove any content that violates these terms and to suspend or terminate accounts accordingly.",
  },
  {
    title: "6. Third-Party Links",
    body: "Our platform may contain links to third-party websites or services. SparkVR is not responsible for the content or privacy practices of those sites. We encourage you to review the terms and privacy policies of any third-party sites you visit.",
  },
  {
    title: "7. Disclaimer of Warranties",
    body: "SparkVR provides the platform on an 'as is' and 'as available' basis without warranties of any kind, either express or implied. We do not warrant that the platform will be uninterrupted, error-free, or free of viruses or other harmful components.",
  },
  {
    title: "8. Limitation of Liability",
    body: "To the fullest extent permitted by law, SparkVR shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the platform or its content.",
  },
  {
    title: "9. Modifications to Terms",
    body: "SparkVR reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the platform after any changes constitutes your acceptance of the new terms.",
  },
  {
    title: "10. Governing Law",
    body: "These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.",
  },
  {
    title: "11. Contact",
    body: "For questions regarding these Terms of Use, please contact us at hello@sparkvr.in or call +91 73892 92658.",
  },
];

export default function TermsOfUsePage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,82,204,0.07)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "100px 20px 48px" : "120px 60px 60px" }}>
          <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(0,82,204,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText size={18} color="#0052cc" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#0052cc", letterSpacing: "0.18em" }}>LEGAL</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.15)} style={{ fontSize: isMobile ? "clamp(28px,7vw,40px)" : "clamp(36px,4vw,52px)", fontWeight: 900, color: "#001a4d", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
            Terms of Use
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
            Please read these Terms of Use carefully before using the SparkVR website and platform. By accessing our services, you confirm that you have read, understood, and agreed to be bound by these terms.
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
