"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SparkButtonProps {
  href?: string;
  text?: string;
  large?: boolean;
  variant?: "primary" | "white";
  secondary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
  className?: string;
}

export default function SparkButton({
  href,
  text = "Book free workshop",
  large = false,
  variant = "primary",
  secondary = false,
  onClick,
  type = "button",
  fullWidth = false,
  className = "",
}: SparkButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  
  /* 3D Motion Values */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const fontSize = large ? 12 : 10;
  const padX     = large ? 32 : 24;

  const isSecondary = secondary || variant === "white";

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: large ? 220 : 179,
        width: fullWidth ? "100%" : undefined,
        padding: `14px ${padX}px`,
        /* Variant Styling */
        background: isSecondary
          ? "rgba(255,255,255,0.5)"
          : "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
        border: isSecondary ? "2px solid #2563eb" : "none",
        borderRadius: 40,
        color: isSecondary ? "#2563eb" : "#ffffff",
        cursor: "pointer",
        position: "relative",
        boxShadow: isSecondary
          ? "none"
          : "0 10px 28px rgba(29,78,216,0.3)",
        zIndex: 1,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textDecoration: "none",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: isSecondary
          ? "none"
          : "0 16px 40px rgba(29,78,216,0.4)",
      }}
      whileTap={{ scale: 0.97 }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize,
          lineHeight: 1,
          letterSpacing: "0.14em",
          color: isSecondary ? "#2563eb" : "#ffffff",
          textAlign: "center",
          whiteSpace: "nowrap",
          textTransform: "uppercase",
          transform: "translateZ(20px)", /* 3D pop */
          pointerEvents: "none",
        }}
      >
        {text}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", display: "inline-block", width: fullWidth ? "100%" : "auto" }}>
        {content}
      </Link>
    );
  }

  return (
    <div style={{ display: "inline-block", width: fullWidth ? "100%" : "auto" }} onClick={onClick}>
      {content}
    </div>
  );
}
