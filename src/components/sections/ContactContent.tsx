"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, Loader2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";

interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Real Estate" | "Construction" | "Beverages";
}

const faqData: FAQItem[] = [
  {
    category: "General",
    question: "What kind of businesses typically partner with ZYPER?",
    answer:
      "We partner with individual investors, commercial enterprises, retail brands, licensed distributors, and institutional clients looking for high-quality real estate assets, construction delivery, and beverage distribution across Bengaluru and Karnataka.",
  },
  {
    category: "General",
    question: "How do I schedule an in-person consultation or site walkthrough?",
    answer:
      "You can book a free 20-minute discovery call using our booking link or contact us directly via email or phone. Our team will coordinate an executive walkthrough tailored to your schedule.",
  },
  {
    category: "Real Estate",
    question: "What properties are currently available under ZYPER Real Estate?",
    answer:
      "Our portfolio includes signature luxury villas at The Azure Cove (Indiranagar, Bengaluru), Grade-A commercial suites at Zyper Heights One (MG Road, CBD Bengaluru), and eco-luxe residences at Serene Meadow Estates (Whitefield, Bengaluru).",
  },
  {
    category: "Real Estate",
    question: "Are all real estate titles verified and RERA registered?",
    answer:
      "Yes. Every ZYPER property comes with a 100% clear title guarantee, complete legal verifications, and compliance with Karnataka RERA and environmental sustainability guidelines.",
  },
  {
    category: "Construction",
    question: "How does ZYPER handle turnkey construction and timelines?",
    answer:
      "We implement CPM/PERT milestone tracking and geotechnical audits from foundation to final fit-out, guaranteeing fixed-price transparency with zero project time overruns.",
  },
  {
    category: "Construction",
    question: "Do you offer structural engineering and architectural remodeling?",
    answer:
      "Yes, our specialized engineering teams manage bespoke residential villas, high-density residential complexes, commercial office buildings, and heritage restorations.",
  },
  {
    category: "Beverages",
    question: "What are the regulatory compliances for ZYPER Beverages?",
    answer:
      "Our operations strictly follow state excise permits, bonded warehouse laws, cold-chain temperature control, and end-to-end anti-counterfeit batch verification.",
  },
  {
    category: "Beverages",
    question: "How can authorized retailers partner for regional distribution?",
    answer:
      "Authorized and licensed vendors can connect with our distribution team through the inquiry form or via direct email to discuss regional trade logistics.",
  },
];

export default function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "Real Estate",
    message: "",
    agreeToComms: false,
  });

  const [faqCategory, setFaqCategory] = useState<
    "General" | "Real Estate" | "Construction" | "Beverages"
  >("General");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, agreeToComms: e.target.checked }));
  };

  const [submittedState, setSubmittedState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedState("loading");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setSubmittedState("error");
      setErrorMessage("Form key is not configured. Please set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          interest: formState.interest,
          message: formState.message,
          agree_to_comms: formState.agreeToComms ? "Yes" : "No",
          from_name: "ZYPHER Website Contact Form",
          subject: `New Inquiry from ${formState.name} [${formState.interest}]`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmittedState("success");
        setFormState({
          name: "",
          email: "",
          interest: "Real Estate",
          message: "",
          agreeToComms: false,
        });
      } else {
        setSubmittedState("error");
        setErrorMessage(result.message || "Failed to submit. Please try again.");
      }
    } catch {
      setSubmittedState("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const filteredFaqs = faqData.filter((item) => item.category === faqCategory);

  return (
    <section
      style={{
        background: "#FAF7F2",
        minHeight: "100svh",
        paddingTop: "clamp(140px, 14vw, 180px)",
        paddingBottom: "clamp(120px, 14vw, 200px)",
        paddingInline: "clamp(24px, 5vw, 64px)",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* ── 1. Page Title ── */}
        <Reveal delay={0.1}>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(2.6rem, 4.8vw, 4.4rem)",
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
              color: "#111111",
              marginBottom: "clamp(32px, 4vw, 48px)",
            }}
          >
            Get in Touch
          </h1>
        </Reveal>

        {/* ── 2. Top Section: 2 Rounded Cards Side-by-Side ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-stretch"
          style={{
            gap: "clamp(28px, 3.5vw, 44px)",
            marginBottom: "clamp(56px, 7vw, 88px)",
          }}
        >
          {/* Left Card: Team Image */}
          <Reveal delay={0.15} className="h-full">
            <div
              style={{
                position: "relative",
                borderRadius: "32px",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                minHeight: "400px",
                aspectRatio: "1/1",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="ZYPER Ventures Executive Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>

          {/* Right Card: Gradient Social & Email Card */}
          <Reveal delay={0.2} className="h-full">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                minHeight: "400px",
                borderRadius: "32px",
                padding: "clamp(36px, 4.5vw, 52px)",
                background:
                  "linear-gradient(145deg, #7C3026 0%, #A84333 45%, #DF7F6A 100%)",
                color: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(124, 48, 38, 0.18)",
                boxSizing: "border-box",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(1.25rem, 1.85vw, 1.65rem)",
                    lineHeight: "1.38",
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}
                >
                  <span style={{ fontWeight: 400, opacity: 0.9 }}>
                    Most of our work begins with someone writing in with a half
                    formed idea. A plot they have been looking at for months, a
                    house they keep sketching on paper, a brand trying to find
                    its way into the Karnataka market.{" "}
                  </span>
                  <span style={{ fontWeight: 600 }}>
                    Write to us at the address below or find us on social media,
                    and you will hear back from the person who actually handles
                    that side of the business.
                  </span>
                </p>

                <a
                  href={`mailto:${siteConfig.email}`}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(1.1rem, 1.35vw, 1.3rem)",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    textDecoration: "underline",
                    display: "inline-block",
                    marginTop: "28px",
                    wordBreak: "break-all",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Social Icons Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginTop: "40px",
                }}
              >
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7C3026",
                    transition: "transform 0.2s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7C3026",
                    transition: "transform 0.2s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7C3026",
                    transition: "transform 0.2s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>

                {/* Podcast / Radio */}
                <a
                  href="#"
                  aria-label="Podcast"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7C3026",
                    transition: "transform 0.2s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7C3026",
                    transition: "transform 0.2s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── 3. Middle Section: Specific Request Contact Form Card ── */}
        <Reveal delay={0.25}>
          <div
            style={{
              background: "#EDE7DF",
              borderRadius: "36px",
              padding: "clamp(44px, 6vw, 76px) clamp(24px, 5vw, 64px)",
              marginBottom: "clamp(72px, 9vw, 110px)",
            }}
          >
            <div style={{ maxWidth: "560px", margin: "0 auto" }}>
              <h2
                style={{
                  textAlign: "center",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1.4rem, 1.9vw, 1.75rem)",
                  lineHeight: "1.3",
                  letterSpacing: "-0.025em",
                  color: "#111111",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                Tell Us What You Are Looking For
              </h2>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(17,17,17,0.6)",
                  lineHeight: "1.6",
                  marginBottom: "36px",
                  maxWidth: "440px",
                  margin: "0 auto 36px",
                }}
              >
                Fill in what you know so far. Even a rough idea gives us enough
                to give you a useful first answer instead of a brochure.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {/* Full Name */}
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name *"
                  value={formState.name}
                  onChange={handleInputChange}
                  style={{
                    background: "#E2DCD4",
                    borderRadius: "18px",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    padding: "16px 22px",
                    fontSize: "14px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#111111",
                    outline: "none",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                  className="placeholder:text-black/40 focus:border-black/30 transition-colors"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email *"
                  value={formState.email}
                  onChange={handleInputChange}
                  style={{
                    background: "#E2DCD4",
                    borderRadius: "18px",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    padding: "16px 22px",
                    fontSize: "14px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#111111",
                    outline: "none",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                  className="placeholder:text-black/40 focus:border-black/30 transition-colors"
                />

                {/* Area of Interest */}
                <div style={{ position: "relative" }}>
                  <select
                    name="interest"
                    value={formState.interest}
                    onChange={handleInputChange}
                    style={{
                      background: "#E2DCD4",
                      borderRadius: "18px",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      padding: "16px 22px",
                      fontSize: "14px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#111111",
                      outline: "none",
                      boxSizing: "border-box",
                      width: "100%",
                      cursor: "pointer",
                      appearance: "none",
                      WebkitAppearance: "none",
                    }}
                    className="focus:border-black/30 transition-colors"
                  >
                    <option value="Real Estate">Real Estate</option>
                    <option value="Construction">Construction</option>
                    <option value="Beverages">Beverages</option>
                    <option value="General">General Enquiry</option>
                  </select>
                  <div
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      color: "rgba(17, 17, 17, 0.5)",
                    }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Message Textarea */}
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Message"
                  value={formState.message}
                  onChange={handleInputChange}
                  style={{
                    background: "#E2DCD4",
                    borderRadius: "22px",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    padding: "18px 22px",
                    fontSize: "14px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#111111",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                  className="placeholder:text-black/40 focus:border-black/30 transition-colors"
                />

                {/* Consent Checkbox */}
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    marginTop: "6px",
                    userSelect: "none",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formState.agreeToComms}
                    onChange={handleCheckboxChange}
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      accentColor: "#000000",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "rgba(17, 17, 17, 0.65)",
                      fontWeight: 500,
                    }}
                  >
                    I agree to receive communications from ZYPER Ventures in the future.
                  </span>
                </label>

                {/* Submit Pill Button */}
                <div style={{ textAlign: "center", marginTop: "16px" }}>
                  <button
                    type="submit"
                    disabled={submittedState === "loading"}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "14px 38px",
                      borderRadius: "100px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#FFFFFF",
                      background: submittedState === "loading" ? "#444444" : "#000000",
                      border: "none",
                      cursor: submittedState === "loading" ? "not-allowed" : "pointer",
                      opacity: submittedState === "loading" ? 0.8 : 1,
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.16)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (submittedState !== "loading") {
                        (e.currentTarget as HTMLElement).style.background = "#222222";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (submittedState !== "loading") {
                        (e.currentTarget as HTMLElement).style.background = "#000000";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }
                    }}
                  >
                    {submittedState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Submission feedback */}
                  {submittedState === "success" && (
                    <p
                      style={{
                        marginTop: "16px",
                        fontSize: "14px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: "#1a6b3c",
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      Thanks for reaching out! The concerned team will connect with you shortly.
                    </p>
                  )}
                  {submittedState === "error" && (
                    <p
                      style={{
                        marginTop: "16px",
                        fontSize: "14px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: "#b91c1c",
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      {errorMessage || "Something went wrong. Please review the details and try again later."}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Reveal>

        {/* ── 4. Bottom Section: Call & FAQ Accordion ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 items-start"
          style={{
            gap: "clamp(48px, 6vw, 84px)",
          }}
        >
          {/* Left Column: Call CTA */}
          <div
            className="lg:col-span-5 lg:sticky self-start"
            style={{
              top: "140px",
            }}
          >
            <Reveal delay={0.1}>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1.2rem, 1.65vw, 1.5rem)",
                  lineHeight: "1.5",
                  letterSpacing: "-0.02em",
                  maxWidth: "420px",
                  color: "#111111",
                  marginBottom: "32px",
                }}
              >
                <span style={{ fontWeight: 400, opacity: 0.7 }}>
                  Some questions are quicker to answer out loud. Book a free
                  twenty minute call and we will talk through what you are
                  considering, what it realistically costs, and whether we are
                  the right people for it.{" "}
                </span>
                <span style={{ fontWeight: 700 }}>
                  If we are not, we will tell you that too.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 32px",
                  borderRadius: "100px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  background: "#000000",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.16)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#222222";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#000000";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <span>Book a free call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          {/* Right Column: FAQ Filter Pills & Accordion List */}
          <div className="lg:col-span-7">
            {/* Category Filter Pills */}
            <Reveal delay={0.15}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {(
                  [
                    "General",
                    "Real Estate",
                    "Construction",
                    "Beverages",
                  ] as const
                ).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFaqCategory(cat);
                      setOpenFaqIndex(null);
                    }}
                    style={{
                      padding: "9px 20px",
                      borderRadius: "100px",
                      fontSize: "12px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "none",
                      transition: "all 0.2s ease",
                      background: faqCategory === cat ? "#000000" : "#EDE7DF",
                      color: faqCategory === cat ? "#FFFFFF" : "rgba(17, 17, 17, 0.75)",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Accordion Items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <Reveal key={faq.question} delay={0.08 + idx * 0.04}>
                    <div
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      style={{
                        background: "#EDE7DF",
                        borderRadius: "20px",
                        padding: "20px 26px",
                        cursor: "pointer",
                        transition: "background 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "#E6E0D6";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "#EDE7DF";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "16px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 500,
                            color: "#111111",
                            fontSize: "15px",
                            letterSpacing: "-0.01em",
                            margin: 0,
                          }}
                        >
                          {faq.question}
                        </h3>
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "transform 0.3s ease",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            color: "rgba(17, 17, 17, 0.6)",
                          }}
                        >
                          <ArrowDown className="w-4 h-4" />
                        </div>
                      </div>

                      {isOpen && (
                        <p
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.65",
                            color: "rgba(17, 17, 17, 0.72)",
                            paddingTop: "14px",
                            marginTop: "14px",
                            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                            margin: 0,
                          }}
                        >
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
