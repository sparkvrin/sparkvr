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

  const h        = large ? 52 : 44;
  const fontSize = large ? 12 : 11;
  const padX     = large ? 36 : 28;

  const isWhite = variant === "white";

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
        height: h,
        minWidth: large ? 240 : 180,
        width: fullWidth ? "100%" : undefined,
        padding: `0 ${padX}px`,
        /* Variant Styling */
        backgroundImage: (isWhite || secondary) ? "none" : "url('/c.png')",
        backgroundColor: secondary ? "transparent" : (isWhite ? "#ffffff" : "transparent"),
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        borderRadius: h / 2,
        border: secondary ? "1.5px solid rgba(0,82,204,0.3)" : (isWhite ? "1px solid rgba(0,82,204,0.1)" : "none"),
        cursor: "pointer",
        position: "relative",
        boxShadow: secondary 
          ? "0 4px 15px rgba(0,82,204,0.05)" 
          : (isWhite ? "0 4px 15px rgba(0,0,0,0.05)" : "0 6px 20px rgba(0,82,204,0.35)"),
        zIndex: 1,
      }}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: secondary ? "rgba(0,82,204,0.03)" : undefined,
        borderColor: secondary ? "#0052cc" : undefined,
        boxShadow: secondary
          ? "0 8px 25px rgba(0,82,204,0.12)"
          : (isWhite ? "0 8px 25px rgba(0,0,0,0.1)" : "0 10px 30px rgba(0,82,204,0.5)") 
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span
        style={{
          fontFamily: "'AR One Sans', sans-serif",
          fontWeight: 800,
          fontSize,
          lineHeight: 1,
          letterSpacing: "0.15em",
          color: secondary ? "#0052cc" : (isWhite ? "#0052cc" : "#ffffff"),
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
