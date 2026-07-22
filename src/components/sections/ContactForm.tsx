"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  School,
  MapPin,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

/* ─── ANIMATION CONSTANTS ─── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactForm() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    schoolName: "",
    mobileNumber: "",
    emailId: "",
    city: "",
    state: "",
    board: "",
    otherBoard: "",
    studentStrength: "",
    grades: "",
  });

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Input Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Direct Option Selectors (Board, Student Strength, Grades)
  const handleSelectOption = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Form Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.designation.trim()) errors.designation = "Designation is required";
    if (!formData.schoolName.trim()) errors.schoolName = "School Name is required";
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.mobileNumber.trim())) {
      errors.mobileNumber = "Please enter a valid phone number";
    }

    if (formData.emailId.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId.trim())) {
      errors.emailId = "Please enter a valid email address";
    }

    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.state.trim()) errors.state = "State is required";
    if (!formData.board) errors.board = "Please select a Board";
    if (formData.board === "Other" && !formData.otherBoard.trim()) {
      errors.otherBoard = "Please specify your board";
    }
    if (!formData.studentStrength) errors.studentStrength = "Please select student strength";
    if (!formData.grades) errors.grades = "Please select school grades";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to the first error
      const firstError = Object.keys(validationErrors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          fullName: "",
          designation: "",
          schoolName: "",
          mobileNumber: "",
          emailId: "",
          city: "",
          state: "",
          board: "",
          otherBoard: "",
          studentStrength: "",
          grades: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form status for a new submission
  const handleReset = () => {
    setSubmitStatus("idle");
    setErrorMessage("");
    setValidationErrors({});
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          /* SUCCESS STATE */
          <motion.div
            key="success-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: EASE, duration: 0.5 }}
            style={{
              background: "#ffffff",
              borderRadius: 24,
              padding: "48px 32px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,26,77,0.06)",
              border: "1.5px solid rgba(0,82,204,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 500,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
                marginBottom: 28,
              }}
            >
              <CheckCircle2 size={44} strokeWidth={2.5} />
            </motion.div>

            <h3
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: "#001a4d",
                marginBottom: 16,
                letterSpacing: "-0.01em",
              }}
            >
              Thank you for reaching out!
            </h3>

            <p
              style={{
                fontSize: 16,
                color: "#64748b",
                fontWeight: 500,
                lineHeight: 1.6,
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              We have successfully received your demo request. A SparkVR representative will contact you
              within <strong style={{ color: "#001a4d" }}>24 working hours</strong> to schedule your guided interactive tour.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              style={{
                padding: "14px 28px",
                borderRadius: 40,
                background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.08em",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 24px rgba(29,78,216,0.3)",
              }}
            >
              SUBMIT ANOTHER RESPONSE
            </motion.button>
          </motion.div>
        ) : (
          /* FORM STATE */
          <motion.form
            key="contact-form-body"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            noValidate
            style={{
              background: "#ffffff",
              borderRadius: 28,
              padding: "40px 32px",
              boxShadow: "0 20px 50px rgba(0,26,77,0.06)",
              border: "1.5px solid rgba(0,82,204,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {/* Optional Description / Subheader */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#0052cc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Interactive Demo Request
              </span>
              <p style={{ fontSize: 14, color: "#64748b", fontWeight: 500, margin: 0 }}>
                Please fill in the details below. Required fields are marked with an asterisk (*).
              </p>
            </div>

            {/* Input Grid: Name & Designation */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {/* Full Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>Full Name</label>
                  <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>Optional</span>
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#f8fafc",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: "1.5px solid rgba(0,82,204,0.08)",
                  transition: "all 0.2s ease-in-out",
                }}
                className="input-container-focus"
                >
                  <User size={18} color="#0052cc" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  />
                </div>
              </div>

              {/* Designation */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>
                  Designation <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#f8fafc",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: validationErrors.designation ? "1.5px solid #ef4444" : "1.5px solid rgba(0,82,204,0.08)",
                  transition: "all 0.2s ease-in-out",
                }}
                className="input-container-focus"
                >
                  <Building size={18} color="#0052cc" />
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. Principal, Director, Teacher"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  />
                </div>
                {validationErrors.designation && (
                  <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} /> {validationErrors.designation}
                  </span>
                )}
              </div>
            </div>

            {/* Input Grid: School Name & Mobile Number */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {/* School Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>
                  School Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#f8fafc",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: validationErrors.schoolName ? "1.5px solid #ef4444" : "1.5px solid rgba(0,82,204,0.08)",
                  transition: "all 0.2s ease-in-out",
                }}
                className="input-container-focus"
                >
                  <School size={18} color="#0052cc" />
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="Enter your school name"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  />
                </div>
                {validationErrors.schoolName && (
                  <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} /> {validationErrors.schoolName}
                  </span>
                )}
              </div>

              {/* Mobile Number */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>
                  Mobile Number <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#f8fafc",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: validationErrors.mobileNumber ? "1.5px solid #ef4444" : "1.5px solid rgba(0,82,204,0.08)",
                  transition: "all 0.2s ease-in-out",
                }}
                className="input-container-focus"
                >
                  <Phone size={18} color="#0052cc" />
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  />
                </div>
                {validationErrors.mobileNumber && (
                  <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} /> {validationErrors.mobileNumber}
                  </span>
                )}
              </div>
            </div>

            {/* Email ID & Location Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20 }}>
              {/* Email ID */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "span 2" }} className="col-span-full-mobile">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>Email ID</label>
                  <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>Optional</span>
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#f8fafc",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: validationErrors.emailId ? "1.5px solid #ef4444" : "1.5px solid rgba(0,82,204,0.08)",
                  transition: "all 0.2s ease-in-out",
                }}
                className="input-container-focus"
                >
                  <Mail size={18} color="#0052cc" />
                  <input
                    type="email"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  />
                </div>
                {validationErrors.emailId && (
                  <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} /> {validationErrors.emailId}
                  </span>
                )}
              </div>

              {/* City */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>
                  City <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#f8fafc",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: validationErrors.city ? "1.5px solid #ef4444" : "1.5px solid rgba(0,82,204,0.08)",
                  transition: "all 0.2s ease-in-out",
                }}
                className="input-container-focus"
                >
                  <MapPin size={18} color="#0052cc" />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  />
                </div>
                {validationErrors.city && (
                  <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} /> {validationErrors.city}
                  </span>
                )}
              </div>

              {/* State */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>
                  State <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#f8fafc",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: validationErrors.state ? "1.5px solid #ef4444" : "1.5px solid rgba(0,82,204,0.08)",
                  transition: "all 0.2s ease-in-out",
                }}
                className="input-container-focus"
                >
                  <MapPin size={18} color="#0052cc" />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  />
                </div>
                {validationErrors.state && (
                  <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} /> {validationErrors.state}
                  </span>
                )}
              </div>
            </div>

            {/* Board Selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>
                Board <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                gap: 10,
              }}>
                {["CBSE", "ICSE", "IB", "Cambridge", "State Board", "Other"].map((boardOption) => {
                  const isSelected = formData.board === boardOption;
                  return (
                    <button
                      key={boardOption}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleSelectOption("board", boardOption)}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 12,
                        border: isSelected ? "2px solid #0052cc" : "1.5px solid rgba(0,82,204,0.08)",
                        background: isSelected ? "rgba(0,82,204,0.04)" : "#ffffff",
                        color: isSelected ? "#0052cc" : "#475569",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.15s ease-in-out",
                      }}
                      className={!isSelected ? "option-pill-hover" : ""}
                    >
                      {boardOption === "IB" ? "IB (International)" : boardOption}
                    </button>
                  );
                })}
              </div>
              {validationErrors.board && (
                <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                  <AlertCircle size={12} /> {validationErrors.board}
                </span>
              )}

              {/* Conditional OTHER Board Input */}
              <AnimatePresence>
                {formData.board === "Other" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ ease: EASE, duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 10 }}>
                      <label style={{ fontSize: 11, fontWeight: 800, color: "#001a4d" }}>
                        Specify Board <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background: "#f8fafc",
                        padding: "12px 18px",
                        borderRadius: 14,
                        border: validationErrors.otherBoard ? "1.5px solid #ef4444" : "1.5px solid rgba(0,82,204,0.08)",
                      }}>
                        <input
                          type="text"
                          name="otherBoard"
                          value={formData.otherBoard}
                          onChange={handleChange}
                          placeholder="Please enter your school's board"
                          disabled={isSubmitting}
                          style={{
                            width: "100%",
                            background: "none",
                            border: "none",
                            outline: "none",
                            fontSize: 14,
                            color: "#0f172a",
                            fontWeight: 600,
                          }}
                        />
                      </div>
                      {validationErrors.otherBoard && (
                        <span style={{ fontSize: 11, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                          <AlertCircle size={11} /> {validationErrors.otherBoard}
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Student Strength Selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>
                Total Student Strength <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: 10,
              }}>
                {["Less than 500", "500-1000", "1000-2000", "Above 2000"].map((strengthOption) => {
                  const isSelected = formData.studentStrength === strengthOption;
                  return (
                    <button
                      key={strengthOption}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleSelectOption("studentStrength", strengthOption)}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 12,
                        border: isSelected ? "2px solid #0052cc" : "1.5px solid rgba(0,82,204,0.08)",
                        background: isSelected ? "rgba(0,82,204,0.04)" : "#ffffff",
                        color: isSelected ? "#0052cc" : "#475569",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.15s ease-in-out",
                      }}
                      className={!isSelected ? "option-pill-hover" : ""}
                    >
                      {strengthOption}
                    </button>
                  );
                })}
              </div>
              {validationErrors.studentStrength && (
                <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                  <AlertCircle size={12} /> {validationErrors.studentStrength}
                </span>
              )}
            </div>

            {/* School Grades Selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 800, color: "#001a4d" }}>
                Which grades does your school have? <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 10,
              }}>
                {["Pre Primary", "Primary", "Middle School", "Secondary", "Senior Secondary"].map((gradeOption) => {
                  const isSelected = formData.grades === gradeOption;
                  return (
                    <button
                      key={gradeOption}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleSelectOption("grades", gradeOption)}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 12,
                        border: isSelected ? "2px solid #0052cc" : "1.5px solid rgba(0,82,204,0.08)",
                        background: isSelected ? "rgba(0,82,204,0.04)" : "#ffffff",
                        color: isSelected ? "#0052cc" : "#475569",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.15s ease-in-out",
                      }}
                      className={!isSelected ? "option-pill-hover" : ""}
                    >
                      {gradeOption}
                    </button>
                  );
                })}
              </div>
              {validationErrors.grades && (
                <span style={{ fontSize: 12, color: "#ef4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                  <AlertCircle size={12} /> {validationErrors.grades}
                </span>
              )}
            </div>

            {/* Global Error Banner */}
            <AnimatePresence>
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    background: "#fef2f2",
                    border: "1.5px solid #fca5a5",
                    padding: "14px 20px",
                    borderRadius: 16,
                    color: "#b91c1c",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <ShieldAlert size={20} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              whileHover={isSubmitting ? {} : { scale: 1.02 }}
              whileTap={isSubmitting ? {} : { scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "16px 32px",
                borderRadius: 40,
                background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #38bdf8 100%)",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: "0.1em",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                boxShadow: "0 10px 28px rgba(29,78,216,0.3)",
                marginTop: 10,
                position: "relative",
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  SENDING REQUEST...
                </>
              ) : (
                <>
                  SUBMIT DEMO REQUEST
                  <ArrowRight size={18} strokeWidth={2.5} />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Embedded CSS styles for focus rings, hover lift & spin animation */}
      <style jsx global>{`
        .input-container-focus:focus-within {
          border-color: #0052cc !important;
          background: #ffffff !important;
          box-shadow: 0 0 0 4px rgba(0, 82, 204, 0.1), 0 4px 12px rgba(0,26,77,0.03) !important;
        }
        .option-pill-hover:hover {
          border-color: rgba(0, 82, 204, 0.3) !important;
          color: #0052cc !important;
          background: rgba(0, 82, 204, 0.01) !important;
          transform: translateY(-1px);
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 640px) {
          .col-span-full-mobile {
            grid-column: span 1 / span 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
