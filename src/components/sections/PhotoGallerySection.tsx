"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const AUTOPLAY_MS = 4000;

const PHOTOS = [
  "/photos/sparkvr (1).jpeg",
  "/photos/sparkvr (2).jpeg",
  "/photos/sparkvr (3).jpeg",
  "/photos/sparkvr (4).jpeg",
  "/photos/sparkvr (5).jpeg",
  "/photos/sparkvr (6).jpeg",
  "/photos/sparkvr (7).jpeg",
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const PHOTO_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/photos/sparkvr (1).jpeg": { width: 1892, height: 3363 },
  "/photos/sparkvr (2).jpeg": { width: 2304, height: 4096 },
  "/photos/sparkvr (3).jpeg": { width: 1832, height: 3258 },
  "/photos/sparkvr (4).jpeg": { width: 2071, height: 3681 },
  "/photos/sparkvr (5).jpeg": { width: 1976, height: 3514 },
  "/photos/sparkvr (6).jpeg": { width: 3000, height: 4000 },
  "/photos/sparkvr (7).jpeg": { width: 2000, height: 1500 },
};

function useCardSize() {
  const [w, setW] = useState(280);
  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth;
      setW(vw < 480 ? 100 : vw < 768 ? 190 : vw < 1400 ? 280 : 360);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return w;
}

function navBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 0,
    transform: "translateY(-50%)",
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "none",
    background: "#ffffff",
    boxShadow: "0 8px 20px rgba(0,40,120,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0b1a3b",
    cursor: "pointer",
    zIndex: 20,
  };
}

function lightboxBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 0,
    transform: "translateY(-50%)",
    width: 52,
    height: 52,
    borderRadius: "50%",
    border: "none",
    background: "rgba(255,255,255,0.12)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
  };
}

export default function PhotoGallerySection() {
  const visibleCount = 3;
  const windowMax = PHOTOS.length - visibleCount;
  const [windowStart, setWindowStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardW = useCardSize();
  const cardH = Math.round(cardW * 1.33);
  const gap = Math.round(cardW * 0.12);
  const arrowZone = 56;
  const activeScale = 1.06;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxDir, setLightboxDir] = useState(1);
  const lightboxOpen = lightboxIndex !== null;

  const next = useCallback(() => {
    setWindowStart((w) => (w + 1) % (windowMax + 1));
  }, [windowMax]);

  const prev = useCallback(() => {
    setWindowStart((w) => (w - 1 + windowMax + 1) % (windowMax + 1));
  }, [windowMax]);

  const goTo = useCallback((i: number) => {
    setWindowStart(Math.min(Math.max(i - 1, 0), windowMax));
  }, [windowMax]);

  const openLightbox = useCallback((i: number) => {
    goTo(i);
    setLightboxIndex(i);
  }, [goTo]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const lightboxNext = useCallback(() => {
    setLightboxDir(1);
    setLightboxIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length));
  }, []);

  const lightboxPrev = useCallback(() => {
    setLightboxDir(-1);
    setLightboxIndex((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length));
  }, []);

  useEffect(() => {
    if (paused || lightboxOpen) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, lightboxOpen, windowStart, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "ArrowLeft") lightboxPrev();
        if (e.key === "ArrowRight") lightboxNext();
        if (e.key === "Escape") closeLightbox();
      } else {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, lightboxOpen, lightboxNext, lightboxPrev, closeLightbox]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const trackOffset = windowStart * (cardW + gap);
  const trackHeight = Math.round(cardH * activeScale) + 20;
  const trackWidth = visibleCount * cardW + (visibleCount - 1) * gap;
  const carouselWidth = trackWidth + arrowZone * 2;

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0 100px",
        background: "#ffffff",
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
        {/* Header Title */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
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
            Behind The Scenes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            style={{
              fontSize: "clamp(34px, min(4.2vw, 6.2vh), 60px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#0b1a3b",
              margin: 0,
              fontFamily: "'VAG Rounded', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Moments From Our VR Classrooms
          </motion.h2>
        </div>
      </div>

      {/* Carousel — arrows hug the visible photos */}
      <div
        style={{ position: "relative", width: carouselWidth, maxWidth: "100%", margin: "0 auto" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button onClick={prev} aria-label="Previous photo" style={navBtnStyle("left")}>
          <ChevronLeft size={22} />
        </button>
        <button onClick={next} aria-label="Next photo" style={navBtnStyle("right")}>
          <ChevronRight size={22} />
        </button>

        <div
          style={{
            position: "relative",
            height: trackHeight,
            width: trackWidth,
            maxWidth: "100%",
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap,
            }}
            animate={{ x: -trackOffset }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {PHOTOS.map((src, i) => {
              const isInWindow = i >= windowStart && i <= windowStart + visibleCount - 1;
              const isActive = i === windowStart + 1;
              const scale = isActive ? activeScale : 1;
              const opacity = isInWindow ? 1 : 0;

              return (
                <motion.div
                  key={src}
                  onClick={() => openLightbox(i)}
                  animate={{ scale, opacity }}
                  transition={{ duration: 0.4, ease: EASE }}
                  style={{
                    flex: `0 0 ${cardW}px`,
                    width: cardW,
                    height: cardH,
                    borderRadius: 18,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    boxShadow: isActive
                      ? "0 30px 60px rgba(0, 40, 120, 0.28)"
                      : "0 10px 25px rgba(0, 40, 120, 0.1)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`SparkVR classroom moment ${i + 1}`}
                    fill
                    sizes={`${cardW}px`}
                    loading={i === 0 ? undefined : "lazy"}
                    priority={i === 0}
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 26 }}>
          {PHOTOS.map((src, i) => {
            const isActive = i === windowStart + 1;
            return (
              <button
                key={src}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                style={{
                  width: isActive ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: isActive ? "#0052cc" : "rgba(0, 82, 204, 0.25)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(6, 12, 30, 0.94)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 20,
              }}
            >
              <X size={22} />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(90vw, 780px)",
                height: "min(84vh, 900px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button onClick={lightboxPrev} aria-label="Previous photo" style={lightboxBtnStyle("left")}>
                <ChevronLeft size={26} />
              </button>
              <button onClick={lightboxNext} aria-label="Next photo" style={lightboxBtnStyle("right")}>
                <ChevronRight size={26} />
              </button>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AnimatePresence custom={lightboxDir} mode="wait" initial={false}>
                  <motion.div
                    key={PHOTOS[lightboxIndex]}
                    custom={lightboxDir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: EASE }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={PHOTOS[lightboxIndex]}
                      alt={`SparkVR classroom moment ${lightboxIndex + 1}`}
                      width={PHOTO_DIMENSIONS[PHOTOS[lightboxIndex]].width}
                      height={PHOTO_DIMENSIONS[PHOTOS[lightboxIndex]].height}
                      sizes="90vw"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 28,
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.75)",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              {lightboxIndex + 1} / {PHOTOS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
