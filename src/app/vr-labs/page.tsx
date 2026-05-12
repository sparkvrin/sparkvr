import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VRLabsPage() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center", background: "#f8f9fc" }}>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#001a4d", marginBottom: 16 }}>VR Labs</h1>
      <p style={{ fontSize: 20, color: "#475569", marginBottom: 32 }}>Explore our comprehensive VR lab setups and hardware solutions.</p>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#0052cc", color: "#fff", textDecoration: "none", borderRadius: 8, fontWeight: 700 }}>
        <ArrowLeft size={20} /> Back to Home
      </Link>
    </div>
  );
}
