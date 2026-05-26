"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Download, ShieldCheck, GraduationCap, Users, School, 
  MapPin, User, Phone, Mail, MessageSquare, Lock, Clock, ChevronRight 
} from "lucide-react";

/* ─── ANIMATION VARIANTS ─── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { delay, duration, ease: EASE },
});

const fadeUpRotate = (delay = 0) => ({
  initial: { opacity: 0, y: 30, rotateX: 10 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true as const },
  transition: { delay, duration: 0.9, ease: EASE },
});

function useScreenWidth() {
  const [width, setWidth] = React.useState(1200);
  React.useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

/* ─── HELPER COMPONENTS ─── */
function InteractiveButton({ children, primary = false, icon: Icon, href }: any) {
  const btn = (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "16px 34px", borderRadius: 14,
        background: primary ? "#0052cc" : "transparent",
        border: primary ? "none" : "2px solid #0052cc",
        color: primary ? "#fff" : "#0052cc",
        cursor: "pointer", fontWeight: 800, fontSize: 15,
        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
      }}
    >
      <Icon size={20} strokeWidth={2.5} />
      {children}
    </motion.div>
  );
  return href ? <a href={href} style={{ textDecoration: "none" }}>{btn}</a> : btn;
}

function FormInput({ label, placeholder, icon: Icon }: any) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 14,
      background: "#f8fafc", padding: "16px 22px",
      borderRadius: 16, border: "1.5px solid rgba(0,82,204,0.08)",
      boxShadow: "0 4px 12px rgba(0,26,77,0.02)",
    }}>
      <Icon size={20} color="#0052cc" strokeWidth={2.2} />
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 11, fontWeight: 900, color: "#001a4d", marginBottom: 3, opacity: 0.8 }}>{label}</p>
        <input placeholder={placeholder} style={{ width: "100%", background: "none", border: "none", outline: "none", fontSize: 14, color: "#1e293b", fontWeight: 500 }} />
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }: any) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        color: "#0052cc", boxShadow: "0 10px 25px rgba(0,26,77,0.05)",
        border: "1px solid rgba(0,82,204,0.05)"
      }}>
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <div>
        <p style={{ fontSize: 13, fontWeight: 900, color: "#001a4d", marginBottom: 4 }}>{label}</p>
        <p style={{ fontSize: 14, color: "#64748b", fontWeight: 600 }}>{value}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768;

  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#fff" }}>
      
      {/* ─── SECTION 1: HERO ─── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: isMobile ? undefined : "url('/backgroundcontact.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            zIndex: 0,
          }}
        />

        <div style={{
          position: "absolute", inset: 0,
          background: isMobile ? "transparent" : "linear-gradient(to right, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,0) 90%)",
          zIndex: 1,
        }} />

        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 1400, margin: "0 auto", width: "100%",
          padding: isMobile ? "100px 20px 60px" : "110px 60px 60px",
          flex: 1,
          display: "flex", flexDirection: "column",
        }}>
          
          <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
             <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0052cc" }} />
             <span style={{ fontSize: 12, fontWeight: 900, color: "#0052cc", letterSpacing: "0.2em" }}>CONTACT US</span>
             <div style={{ width: 40, height: 1.5, background: "#0052cc", opacity: 0.2, borderRadius: 4 }} />
          </motion.div>

          <div style={{ maxWidth: 680, marginBottom: 80 }}>
            <motion.h1
              {...fadeUpRotate(0.2)}
              style={{
                fontSize: "clamp(44px, 5vw, 60px)",
                fontWeight: 900, color: "#001a4d",
                lineHeight: 1.05, letterSpacing: "-0.03em",
                marginBottom: 28,
              }}
            >
              Let's explore how SparkVR <br />
              can transform learning <br />
              in <span className="text-gradient-primary">your school.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              style={{
                fontSize: 18, color: "#475569", lineHeight: 1.6,
                marginBottom: 56, maxWidth: 580, fontWeight: 500
              }}
            >
              Request a guided demonstration and experience curriculum-aligned immersive learning.
            </motion.p>

            <motion.div {...fadeUp(0.5)} style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
               <InteractiveButton primary icon={Calendar} href="#contact-form">Schedule a Demo</InteractiveButton>
               <InteractiveButton icon={Download} href="/contact#contact-form">Download Brochure</InteractiveButton>
            </motion.div>
          </div>

          {/* Bottom Module Layered Pop-In */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: EASE }}
            style={{
              marginTop: "auto",
              marginBottom: 60,
              background: "#ffffff",
              borderRadius: 28,
              padding: isMobile ? "20px 16px" : "28px 40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              boxShadow: "0 20px 60px rgba(0,26,77,0.05)",
              border: "1px solid #fff",
            }}
          >
            {[
              { icon: ShieldCheck, text: "Trusted by Schools" },
              { icon: GraduationCap, text: "Curriculum Aligned" },
              { icon: Users, text: "Teacher Guided" },
              { icon: School, text: "Incubated at IIT Indore" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 18, borderRight: (!isMobile && i < 3) ? "1px solid rgba(0,26,77,0.06)" : "none" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(0,82,204,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0052cc" }}>
                  <item.icon size={22} strokeWidth={2} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#001a4d" }}>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: CONVERSATION & FORM ─── */}
      <section id="contact-form" style={{ background: "#ffffff", padding: "60px 0", position: "relative" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(0,82,204,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 20px" : "0 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.3fr 1fr", gap: isMobile ? 24 : 60, alignItems: "start" }}>
            
            {/* LEFT SIDE: FORM */}
            <motion.div {...fadeUp(0.1)}>
              <h2 style={{ fontSize: isMobile ? "clamp(26px,6vw,36px)" : "clamp(32px,4vw,46px)", fontWeight: 900, color: "#001a4d", marginBottom: 28, letterSpacing: "-0.02em" }}>
                Let's start a conversation.
              </h2>
              <div style={{ width: 48, height: 4, background: "#0052cc", borderRadius: 4, marginBottom: 32 }} />
              <p style={{ fontSize: 17, color: "#64748b", fontWeight: 500, marginBottom: 56, maxWidth: 520, lineHeight: 1.6 }}>
                Fill in your details and our academic team will get in touch to schedule your guided demonstration.
              </p>

              <form style={{ display: "grid", gap: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
                   <FormInput label="School Name" placeholder="Enter school name" icon={School} />
                   <FormInput label="City" placeholder="Enter your city" icon={MapPin} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
                   <FormInput label="Contact Person" placeholder="Your full name" icon={User} />
                   <FormInput label="Phone Number" placeholder="Enter phone number" icon={Phone} />
                </div>
                <FormInput label="Email Address" placeholder="Enter email address" icon={Mail} />
                
                <div>
                  <div style={{
                    display: "flex", alignItems: "flex-start", gap: 14, 
                    background: "#f8fafc", padding: "20px 22px", 
                    borderRadius: 20, border: "1.5px solid rgba(0,82,204,0.06)",
                    boxShadow: "0 4px 12px rgba(0,26,77,0.02)"
                  }}>
                     <MessageSquare size={20} color="#0052cc" style={{ marginTop: 4 }} strokeWidth={2.2} />
                     <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 11, fontWeight: 900, color: "#001a4d", marginBottom: 6, opacity: 0.8 }}>Message (Optional)</p>
                        <textarea placeholder="Tell us about your requirements or any specific questions." style={{ width: "100%", background: "none", border: "none", outline: "none", fontSize: 14, color: "#1e293b", fontWeight: 500, resize: "none", height: isMobile ? 80 : 100 }} />
                     </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? 20 : 0, marginTop: 32 }}>
                   <div style={{ display: "flex", alignItems: "center", gap: 14, maxWidth: 320 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Lock size={16} color="#94a3b8" strokeWidth={2.5} />
                      </div>
                      <p style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5, fontWeight: 500 }}>
                        We respect your privacy. Your information will only be used to connect with you regarding your demo request.
                      </p>
                   </div>
                   <InteractiveButton primary icon={ChevronRight}>Request a Demo</InteractiveButton>
                </div>
              </form>
            </motion.div>

            {/* RIGHT SIDE: INFO BOX */}
            <motion.div {...fadeUp(0.3)}>
               <div style={{
                 background: "#f8fafc",
                 borderRadius: 40,
                 padding: isMobile ? "32px 20px" : "48px 40px",
                 border: "1.5px solid #fff",
                 boxShadow: "0 30px 70px rgba(0,26,77,0.05)",
                 position: "relative", overflow: "hidden"
               }}>
                  <h3 style={{ fontSize: 26, fontWeight: 900, color: "#001a4d", marginBottom: 20 }}>We're here to help</h3>
                  <div style={{ width: 50, height: 4, background: "#0052cc", borderRadius: 4, marginBottom: 48 }} />
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: 36, marginBottom: 56 }}>
                     <InfoItem icon={Phone} label="Call Us" value="+91 79990 12345" />
                     <InfoItem icon={Mail} label="Email Us" value="hello@sparkvr.in" />
                     <InfoItem icon={Clock} label="Response Time" value="Within 24 working hours" />
                     <InfoItem icon={MapPin} label="Head Office" value="IIT Indore Research Park, Indore, Madhya Pradesh, India" />
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", border: "4px solid #fff" }}
                  >
                     <img loading="lazy" decoding="async" src="/backgroundcontact.webp" alt="VR Experience" style={{ width: "100%", height: 200, objectFit: "cover" }} />
                  </motion.div>
               </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.2, ease: EASE }}
            style={{
              marginTop: isMobile ? 60 : 120,
              background: "#f8fafc",
              borderRadius: 36,
              padding: isMobile ? "32px 20px" : "48px 60px",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? 24 : 40,
              border: "1px solid rgba(0,82,204,0.04)",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.01)"
            }}
          >
            {[
              { icon: ShieldCheck, title: "No Commitment", desc: "Request a demo with no obligation." },
              { icon: Users, title: "Academic Focused", desc: "Designed for real classrooms." },
              { icon: Lock, title: "Secure & Private", desc: "We value your privacy." },
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 24, borderRight: (!isMobile && i < 2) ? "1px solid rgba(0,0,0,0.06)" : "none" }}
              >
                 <div style={{ 
                   width: 56, height: 56, borderRadius: 16, 
                   background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", 
                   color: "#0052cc", boxShadow: "0 10px 20px rgba(0,26,77,0.04)" 
                 }}>
                    <item.icon size={26} strokeWidth={2.2} />
                 </div>
                 <div>
                    <h4 style={{ fontSize: 17, fontWeight: 900, color: "#001a4d", marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>{item.desc}</p>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .text-gradient-primary {
          background: linear-gradient(135deg, #0052cc 0%, #001a4d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </main>
  );
}
