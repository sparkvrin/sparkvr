"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function VideoScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // useScroll to track progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll progress - lowered stiffness for a more 'cinematic' faster scrub
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleUpdate = (v: number) => {
      if (video.duration) {
        // Precise scrubbing
        video.currentTime = v * video.duration;
      }
    };

    const unsubscribe = smoothProgress.on("change", handleUpdate);
    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "relative", 
        height: "400vh", // Reduced height = faster video playback (4 screens instead of 8)
        backgroundColor: "#000",
        zIndex: 10
      }}
    >
      <div style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        overflow: "hidden"
      }}>
        {/* THE VIDEO - Full Screen */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        >
          <source src="/video_project.mp4" type="video/mp4" />
        </video>

        {/* HUD Elements - Clean and Powerful */}
        <div style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 20
        }}>
          {/* Corner Brackets */}
          <div style={{ position: "absolute", top: 40, left: 40, width: 40, height: 40, borderTop: "2px solid #3b82f6", borderLeft: "2px solid #3b82f6", opacity: 0.6 }} />
          <div style={{ position: "absolute", top: 40, right: 40, width: 40, height: 40, borderTop: "2px solid #3b82f6", borderRight: "2px solid #3b82f6", opacity: 0.6 }} />
          <div style={{ position: "absolute", bottom: 40, left: 40, width: 40, height: 40, borderBottom: "2px solid #3b82f6", borderLeft: "2px solid #3b82f6", opacity: 0.6 }} />
          <div style={{ position: "absolute", bottom: 40, right: 40, width: 40, height: 40, borderBottom: "2px solid #3b82f6", borderRight: "2px solid #3b82f6", opacity: 0.6 }} />

          {/* Centered Headline */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.h2 
              style={{ 
                color: "white", 
                fontSize: "clamp(40px, 8vw, 120px)", 
                fontWeight: 900,
                textAlign: "center",
                textShadow: "0 0 30px rgba(59,130,246,0.6)",
                fontFamily: "sans-serif",
                opacity: useTransform(smoothProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]),
                y: useTransform(smoothProgress, [0.1, 0.9], [50, -50])
              }}
            >
              SPARK NEW <br/><span style={{ color: "#3b82f6" }}>REALITIES</span>
            </motion.h2>
          </div>

          {/* Left Side Status */}
          <motion.div 
            style={{ 
              position: "absolute", 
              left: 60, 
              top: "50%", 
              translateY: "-50%",
              opacity: useTransform(smoothProgress, [0.2, 0.8], [0, 1])
            }}
          >
             <div style={{ color: "#3b82f6", fontSize: "10px", fontWeight: 900, letterSpacing: "4px" }}>VR_CORE_ENGAGED</div>
             <div style={{ height: "2px", width: "100px", background: "#3b82f6", marginTop: "5px" }} />
          </motion.div>

          {/* Subtle Bottom Progress Line */}
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "4px", background: "rgba(255,255,255,0.05)" }}>
            <motion.div 
              style={{ 
                height: "100%", 
                background: "#3b82f6", 
                width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                boxShadow: "0 0 20px #3b82f6"
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
