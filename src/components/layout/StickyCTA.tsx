"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky CTA after scrolling past the hero fold (300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call handler immediately on mount to check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/contact") {
      e.preventDefault();
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Hide the sticky CTA on the contact page to prevent screen clutter
  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={isMobile ? { opacity: 0, y: 80 } : { opacity: 0, scale: 0.8, y: 50 }}
          animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
          exit={isMobile ? { opacity: 0, y: 80 } : { opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={isMobile ? {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 99999,
          } : {
            position: "fixed",
            bottom: "24px",
            left: "24px",
            zIndex: 99999,
          }}
        >
          {isMobile ? (
            /* Unified Mobile Bottom Bar */
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 20px",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(0, 0, 0, 0.08)",
              boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.08)",
              width: "100%",
            }}>
              {/* Integrated Mobile WhatsApp Button */}
              <Link href="https://wa.me/917389292658" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <motion.div
                  whileTap={{ scale: 0.92 }}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    boxShadow: "0 6px 16px rgba(37,211,102,0.25)",
                    cursor: "pointer",
                    border: "1.5px solid #ffffff",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.div>
              </Link>

              {/* Booking Button */}
              <Link href="/contact#contact-form" onClick={handleClick} style={{ textDecoration: "none", flex: 1 }}>
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    height: "48px",
                    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                    borderRadius: "30px",
                    color: "#ffffff",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(29, 78, 216, 0.25)",
                    border: "none",
                  }}
                >
                  <Calendar size={16} style={{ color: "#ffffff" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                      fontWeight: 800,
                      fontSize: "12px",
                      lineHeight: 1,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Book Free Demo
                  </span>
                </motion.div>
              </Link>
            </div>
          ) : (
            /* Desktop Floating Button */
            <Link href="/contact#contact-form" onClick={handleClick} style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 16px 40px rgba(29, 78, 216, 0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 24px",
                  background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                  borderRadius: "40px",
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                  cursor: "pointer",
                  boxShadow: "0 10px 28px rgba(29, 78, 216, 0.35)",
                }}
              >
                {/* Pulsing ring animation inside button */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    inset: -4,
                    borderRadius: "40px",
                    border: "2px solid #38bdf8",
                    pointerEvents: "none",
                  }}
                />

                <Calendar size={16} style={{ color: "#ffffff" }} />
                
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                    fontWeight: 800,
                    fontSize: "11px",
                    lineHeight: 1,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Book Free Demo
                </span>
              </motion.div>
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

}
