"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/" || !pathname) return null;

  const segments = pathname.split("/").filter(Boolean);

  // Map path segment to readable display label
  const getLabel = (segment: string) => {
    switch (segment.toLowerCase()) {
      case "learning-outcome":
        return "Learning Outcome";
      case "subject-expansion":
        return "Subject Expansion";
      case "timetable":
        return "Timetable";
      case "curriculum":
        return "Curriculum";
      case "about":
        return "About";
      case "contact":
        return "Contact";
      case "schools":
        return "For Schools";
      case "teachers":
        return "For Teachers";
      case "parents":
        return "For Parents";
      case "blog":
        return "Blog";
      default:
        // Capitalize words and replace hyphens/underscores with spaces
        return segment
          .replace(/[-_]+/g, " ")
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
    }
  };

  return (
    <nav
      aria-label="breadcrumb"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "6px",
        marginBottom: "24px",
        fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      <Link
        href="/"
        style={{
          color: "#94a3b8",
          textDecoration: "none",
          fontWeight: 700,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0052cc")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
      >
        Home
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;
        const label = getLabel(segment);

        return (
          <React.Fragment key={href}>
            <ChevronRight size={12} style={{ color: "#cbd5e1", flexShrink: 0 }} />
            {isLast ? (
              <span style={{ color: "#0052cc", fontWeight: 800 }}>
                {label}
              </span>
            ) : (
              <Link
                href={href}
                style={{
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontWeight: 700,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0052cc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
