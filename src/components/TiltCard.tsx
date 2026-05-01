"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  maxTilt?: number;
  shine?: boolean;
}

export default function TiltCard({ children, style, className, maxTilt = 12, shine = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 220, damping: 26 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 220, damping: 26 });
  const shine_x = useTransform(mx, [-0.5, 0.5], ["10%", "90%"]);
  const shine_y = useTransform(my, [-0.5, 0.5], ["10%", "90%"]);
  const shineGradient = useMotionTemplate`radial-gradient(circle at ${shine_x} ${shine_y}, rgba(255,255,255,0.18) 0%, transparent 65%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={e => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{
        rotateX: rx, rotateY: ry,
        transformStyle: "preserve-3d",
        perspective: 1000,
        position: "relative",
        ...style,
      }}
      className={className}
    >
      {shine && (
        <motion.div
          style={{
            position: "absolute", inset: 0,
            borderRadius: "inherit",
            background: shineGradient,
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
