"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TESTIMONIALS = [
  { id: 1, title: "Classroom VR Integration", src: "/testimonials/testimonials%20(1).MP4", color: "#2563eb" },
  { id: 2, title: "Immersive Biology Lesson", src: "/testimonials/testimonials%20(2).MP4", color: "#7c3aed" },
  { id: 3, title: "Physics Concept Visualization", src: "/testimonials/testimonials%20(3).MP4", color: "#059669" },
  { id: 4, title: "Teacher Delivery Demonstration", src: "/testimonials/testimonials%20(4).MP4", color: "#e11d48" },
  { id: 5, title: "Active Student Engagement", src: "/testimonials/testimonials%20(5).MP4", color: "#ea580c" },
  { id: 6, title: "VR Lab Experience", src: "/testimonials/testimonials%20(6).mp4", color: "#0891b2" },
  { id: 7, title: "Understanding Electromagnetism", src: "/testimonials/testimonials%20(7).mp4", color: "#4f46e5" },
  { id: 8, title: "Virtual Space Exploration", src: "/testimonials/testimonials%20(8).mp4", color: "#db2777" },
  { id: 9, title: "Curriculum Integration Review", src: "/testimonials/testimonials%20(9).mp4", color: "#16a34a" },
  { id: 10, title: "Teacher Feedback Session", src: "/testimonials/testimonials%20(10).mp4", color: "#475569" },
];

function useScreenWidth() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = useScreenWidth();
  
  const isMobile = screenWidth < 640;
  const isTablet = screenWidth >= 640 && screenWidth < 1024;
  const isDesktopMedium = screenWidth >= 1024 && screenWidth < 1440;
  const visibleCards = isMobile ? 1 : isTablet ? 2 : isDesktopMedium ? 3 : 4;
  const gap = 24;

  const maxIndex = TESTIMONIALS.length - visibleCards;

  // Handles sliding logic
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Keep currentIndex in bounds if visibleCards changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  return (
    <section
      style={{
        position: "relative",
        padding: "100px 0 80px",
        background: "linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Header Title + Navigation Arrows */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            marginBottom: 48,
            gap: 20,
          }}
        >
          <div>
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
              Testimonial Videos
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
              Voices from the VR Classroom
            </motion.h3>
          </div>

          {/* Slider controls */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1.5px solid rgba(0, 82, 204, 0.15)",
                background: currentIndex === 0 ? "rgba(255,255,255,0.4)" : "#ffffff",
                color: currentIndex === 0 ? "#cbd5e1" : "#0052cc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                boxShadow: currentIndex === 0 ? "none" : "0 4px 12px rgba(0, 26, 77, 0.03)",
                transition: "all 0.2s ease",
              }}
              className="carousel-nav-btn"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1.5px solid rgba(0, 82, 204, 0.15)",
                background: currentIndex === maxIndex ? "rgba(255,255,255,0.4)" : "#ffffff",
                color: currentIndex === maxIndex ? "#cbd5e1" : "#0052cc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
                boxShadow: currentIndex === maxIndex ? "none" : "0 4px 12px rgba(0, 26, 77, 0.03)",
                transition: "all 0.2s ease",
              }}
              className="carousel-nav-btn"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div style={{ overflow: "visible", position: "relative", width: "100%" }}>
          <div
            style={{
              display: "flex",
              gap: `${gap}px`,
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: `translateX(calc(-${currentIndex} * (100% + ${gap}px) / ${visibleCards}))`,
            }}
          >
            {TESTIMONIALS.map((t, index) => (
              <div
                key={t.id}
                style={{
                  flex: isMobile
                    ? "0 0 100%"
                    : isTablet
                    ? "0 0 calc((100% - 24px) / 2)"
                    : isDesktopMedium
                    ? "0 0 calc((100% - 48px) / 3)"
                    : "0 0 calc((100% - 72px) / 4)",
                  position: "relative",
                  borderRadius: 24,
                  boxShadow: "0 10px 30px rgba(0, 40, 120, 0.03)",
                  border: "1.5px solid rgba(220, 235, 255, 0.7)",
                  overflow: "hidden",
                  aspectRatio: "9/16",
                  background: "#000000",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                className="testimonial-card-hover"
              >
                <video
                  controls
                  preload="metadata"
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                >
                  <source src={t.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* Bullet Pagination Indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 40,
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: currentIndex === idx ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: currentIndex === idx ? "#0052cc" : "#cbd5e1",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              title={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonial-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(0, 40, 120, 0.06) !important;
        }
        .carousel-nav-btn:hover:not(:disabled) {
          border-color: #0052cc !important;
          background: #0052cc !important;
          color: #ffffff !important;
          box-shadow: 0 6px 16px rgba(0, 82, 204, 0.25) !important;
        }
      `}</style>
    </section>
  );
}
