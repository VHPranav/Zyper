"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Building2, Wine, Landmark } from "lucide-react";

export default function RegulatoryContent() {
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
      <div style={{ maxWidth: "840px", margin: "0 auto" }}>
        {/* Category badge */}
        <Reveal delay={0.02}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(194, 130, 36, 0.10)",
              border: "1px solid rgba(194, 130, 36, 0.25)",
              marginBottom: "20px",
            }}
          >
            <ShieldCheck size={14} style={{ color: "#C28224" }} />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#C28224",
                textTransform: "uppercase",
              }}
            >
              Statutory Governance &amp; Compliance
            </span>
          </div>
        </Reveal>

        {/* Page Title */}
        <Reveal delay={0.05}>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
              color: "#111111",
              marginBottom: "28px",
            }}
          >
            Regulatory &amp; RERA
          </h1>
        </Reveal>

        {/* Regulatory Content Card */}
        <Reveal delay={0.1}>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              padding: "clamp(28px, 4vw, 44px)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                lineHeight: "1.85",
                fontWeight: 400,
                color: "#111111",
                margin: 0,
              }}
            >
              Zyper works within the regulatory framework set by the Government of Karnataka. Our real estate projects follow the Real Estate (Regulation and Development) Act, 2016 and the Karnataka Real Estate (Regulation and Development) Rules, 2017, under which any project on land above 500 square metres or with more than eight units must be registered with Karnataka RERA before it is marketed or sold. Seventy percent of buyer payments stays in a separate account, as the law requires, and every registration can be verified on{" "}
              <a
                href="https://rera.karnataka.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#C28224",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                rera.karnataka.gov.in
              </a>
              . Construction begins only after plan sanction from the Greater Bengaluru Authority, the Bangalore Development Authority or the relevant local planning body. Our beverage division operates on licences issued under the Karnataka Excise Act, 1965.
            </p>
          </div>
        </Reveal>

        {/* Supplementary Governance & Compliance Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          {/* Point 1: RERA Numbers */}
          <Reveal delay={0.12}>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 36px)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#111111",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Building2 size={18} style={{ color: "#C28224" }} />
                <span>RERA Registration Numbers</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "rgba(17,17,17,0.78)",
                  margin: 0,
                }}
              >
                All active residential and commercial projects developed by Zyper are registered with the Karnataka Real Estate Regulatory Authority (K-RERA) in compliance with the RERA Act, 2016. Registration details and statutory disclosures are made accessible on dedicated project pages and verifiable through the official K-RERA registry.
              </p>
            </div>
          </Reveal>

          {/* Point 2: Beverages Licensing Scope */}
          <Reveal delay={0.14}>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 36px)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#111111",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Wine size={18} style={{ color: "#C28224" }} />
                <span>Beverages Licensing &amp; Statutory Classification</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "rgba(17,17,17,0.78)",
                  margin: 0,
                }}
              >
                Zyper’s beverages operations are conducted strictly in accordance with statutory licensing granted under the Karnataka Excise Act, 1965. Distribution operations cater to licensed retail, hospitality, and corporate partners in full conformity with state excise regulations.
              </p>
            </div>
          </Reveal>

          {/* Point 3: Greater Bengaluru Authority Transition */}
          <Reveal delay={0.16}>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 36px)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#111111",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Landmark size={18} style={{ color: "#C28224" }} />
                <span>Greater Bengaluru Authority (GBA) &amp; Municipal Sanctions</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "rgba(17,17,17,0.78)",
                  margin: 0,
                }}
              >
                All construction and infrastructure planning adheres strictly to sanctions, zoning frameworks, and statutory clearances mandated by the Greater Bengaluru Authority (GBA), Bangalore Development Authority (BDA), and respective municipal planning authorities.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Footer Navigation Note */}
        <Reveal delay={0.18}>
          <div
            style={{
              paddingTop: "clamp(24px, 3vw, 36px)",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                lineHeight: "1.7",
                color: "rgba(17,17,17,0.45)",
                margin: 0,
              }}
            >
              Statutory governance framework under the laws of Karnataka, India.{" "}
              <Link href="/terms" style={{ color: "rgba(17,17,17,0.65)", textDecoration: "underline" }}>
                Terms &amp; Conditions
              </Link>{" "}
              ·{" "}
              <Link href="/privacy" style={{ color: "rgba(17,17,17,0.65)", textDecoration: "underline" }}>
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/contact" style={{ color: "rgba(17,17,17,0.65)", textDecoration: "underline" }}>
                Contact Us
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
