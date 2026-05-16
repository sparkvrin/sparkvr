"use client";

import React, { useRef, useEffect } from "react";

export default function VideoScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!video || !canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── State ──────────────────────────────────────────────────────────
    let containerTop = 0;
    let containerHeight = 0;
    let targetTime = 0;       // what we WANT
    let currentTime = 0;      // what we last SET
    let seeking = false;      // is video mid-seek right now?
    let rafId: number;
    let frameLoopId: number;

    // ── Layout calc ────────────────────────────────────────────────────
    const calcLayout = () => {
      let top = 0;
      let el: HTMLElement | null = container;
      while (el) { top += el.offsetTop; el = el.offsetParent as HTMLElement | null; }
      containerTop = top;
      containerHeight = container.offsetHeight - window.innerHeight;
    };

    // ── Draw current video frame to canvas ────────────────────────────
    const drawFrame = () => {
      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth || 1920;
        canvas.height = video.videoHeight || 1080;
      }
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    // ── Seek engine: queue next seek when previous finishes ───────────
    const doSeek = () => {
      if (seeking) return; // wait for current seek to finish
      const diff = Math.abs(targetTime - currentTime);
      if (diff < 0.016) return; // ~1 frame at 60fps, skip tiny diffs

      seeking = true;
      currentTime = targetTime;
      video.currentTime = targetTime;
    };

    // When seek completes, draw frame immediately & seek again if needed
    const onSeeked = () => {
      drawFrame();
      seeking = false;
      doSeek(); // pick up any pending target
    };

    // ── Scroll handler: just update targetTime, never seek directly ───
    const onScroll = () => {
      const scrolled = window.scrollY - containerTop;
      const progress = Math.min(Math.max(scrolled / containerHeight, 0), 1);

      const dur = video.duration;
      if (!dur || !isFinite(dur)) return;

      targetTime = progress * dur;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      // Kick off seek if not already seeking
      doSeek();
    };

    // ── Video loaded: setup everything ────────────────────────────────
    const onReady = () => {
      calcLayout();
      video.pause();

      // Draw first frame immediately
      video.currentTime = 0;
    };

    // ── Keep video paused always ───────────────────────────────────────
    const forceP = () => video.pause();

    // ── Resize ────────────────────────────────────────────────────────
    const onResize = () => { calcLayout(); onScroll(); };

    // ── Attach ────────────────────────────────────────────────────────
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("play", forceP);
    video.addEventListener("loadeddata", onReady);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    if (video.readyState >= 2) onReady();

    return () => {
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("play", forceP);
      video.removeEventListener("loadeddata", onReady);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(frameLoopId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "600vh",
        backgroundColor: "#000",
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        {/* Hidden video — only used for decoding */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          style={{ display: "none" }}
        >
          <source src="/video_project.mp4" type="video/mp4" />
        </video>

        {/* Canvas — shows the frames, perfectly smooth */}
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* HUD */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 20 }}>
          <div style={{ position: "absolute", top: 40, left: 40, width: 40, height: 40, borderTop: "2px solid #3b82f6", borderLeft: "2px solid #3b82f6", opacity: 0.6 }} />
          <div style={{ position: "absolute", top: 40, right: 40, width: 40, height: 40, borderTop: "2px solid #3b82f6", borderRight: "2px solid #3b82f6", opacity: 0.6 }} />
          <div style={{ position: "absolute", bottom: 40, left: 40, width: 40, height: 40, borderBottom: "2px solid #3b82f6", borderLeft: "2px solid #3b82f6", opacity: 0.6 }} />
          <div style={{ position: "absolute", bottom: 40, right: 40, width: 40, height: 40, borderBottom: "2px solid #3b82f6", borderRight: "2px solid #3b82f6", opacity: 0.6 }} />

          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "4px", background: "rgba(255,255,255,0.05)" }}>
            <div
              ref={progressRef}
              style={{ height: "100%", width: "0%", background: "#3b82f6", boxShadow: "0 0 20px #3b82f6" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}