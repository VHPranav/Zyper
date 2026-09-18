"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, CheckCircle2, Building2, HardHat, Wine, ExternalLink, AlertTriangle } from "lucide-react";

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
              marginBottom: "20px",
            }}
          >
            Regulatory &amp; RERA
          </h1>
        </Reveal>

        {/* Primary Statement / Preamble */}
        <Reveal delay={0.1}>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              padding: "clamp(28px, 4vw, 44px)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
              marginBottom: "clamp(40px, 5vw, 64px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.05rem, 1.35vw, 1.25rem)",
                lineHeight: "1.8",
                fontWeight: 400,
                color: "#111111",
                marginBottom: "20px",
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                fontSize: "12.5px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(17,17,17,0.5)",
              }}
            >
              <span>Regulatory reference:</span>
              <a
                href="https://aecord.com/how-to/get-rera-approval-karnataka"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#111111",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  textDecoration: "underline",
                }}
              >
                Karnataka RERA Approval Guide (AECORD)
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* 3 Governance Pillars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "clamp(48px, 6vw, 72px)" }}>
          
          {/* Pillar 1: Real Estate & Karnataka RERA */}
          <Reveal delay={0.12}>
            <div
              style={{
                background: "#EDE7DF",
                borderRadius: "20px",
                padding: "clamp(24px, 3vw, 36px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <Building2 size={20} style={{ color: "#C28224" }} />
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
                    color: "#111111",
                    margin: 0,
                  }}
                >
                  Real Estate &amp; Karnataka RERA Compliance
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
                  lineHeight: "1.8",
                  color: "rgba(17,17,17,0.72)",
                  marginBottom: "16px",
                }}
              >
                The Real Estate (Regulation and Development) Act, 2016 (RERA) and Karnataka Real Estate (Regulation and Development) Rules, 2017 govern every commercial and residential undertaking. Under statutory provisions:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Mandatory Registration: Any project developed on land exceeding 500 square metres, or comprising more than eight units/apartments, must secure valid registration with Karnataka RERA prior to any marketing, advertising, booking, or sale.",
                  "70% Escrow Account Safeguard: Exactly 70% of all amounts realised from purchasers is maintained in an exclusive, scheduled bank account. Funds can only be withdrawn proportionally to cover construction and land costs after certification by an engineer, architect, and chartered accountant.",
                  "Title & Public Disclosure: All sanctioned plans, phase timelines, quarterly progress reports, approvals, encumbrance certificates, and proforma agreements are maintained transparently on the official K-RERA web portal.",
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={16} style={{ color: "#C28224", flexShrink: 0, marginTop: "4px" }} />
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(0.88rem, 1vw, 0.95rem)",
                        lineHeight: "1.7",
                        color: "rgba(17,17,17,0.75)",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Pillar 2: Construction & Plan Sanction */}
          <Reveal delay={0.14}>
            <div
              style={{
                background: "#EDE7DF",
                borderRadius: "20px",
                padding: "clamp(24px, 3vw, 36px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <HardHat size={20} style={{ color: "#C28224" }} />
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
                    color: "#111111",
                    margin: 0,
                  }}
                >
                  Construction &amp; Municipal Plan Sanction
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
                  lineHeight: "1.8",
                  color: "rgba(17,17,17,0.72)",
                  marginBottom: "16px",
                }}
              >
                Physical construction begins exclusively subsequent to obtaining official plan sanctions, Commencement Certificates (CC), and statutory clearances from competent planning bodies:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Greater Bengaluru Authority (GBA): Formed to govern Bengaluru's urban administration with five dedicated city corporations (succeeding the erstwhile BBMP following its dissolution in September 2025). Sanction jurisdiction corresponds to the respective zonal city corporation where the site is situated.",
                  "Bangalore Development Authority (BDA): Overseeing comprehensive development plans, layout approvals, master planning, and zonal clearance for peripheral urban jurisdictions.",
                  "Local Planning Authorities: For regional parcels outside metropolitan limits (including BMRDA, BIAPPA, and taluk planning authorities), approvals follow all applicable Master Plan zoning and conversion clearances.",
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={16} style={{ color: "#C28224", flexShrink: 0, marginTop: "4px" }} />
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(0.88rem, 1vw, 0.95rem)",
                        lineHeight: "1.7",
                        color: "rgba(17,17,17,0.75)",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Pillar 3: Beverage Division Licensing */}
          <Reveal delay={0.16}>
            <div
              style={{
                background: "#EDE7DF",
                borderRadius: "20px",
                padding: "clamp(24px, 3vw, 36px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <Wine size={20} style={{ color: "#C28224" }} />
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
                    color: "#111111",
                    margin: 0,
                  }}
                >
                  Beverages &amp; Karnataka Excise Compliance
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
                  lineHeight: "1.8",
                  color: "rgba(17,17,17,0.72)",
                  marginBottom: "16px",
                }}
              >
                Our beverage operations are conducted strictly within the framework established by the Karnataka Excise Act, 1965 and the Karnataka Excise Rules:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "State Monopoly Distribution Model: In Karnataka, wholesale liquor procurement and distribution is a state-governed monopoly administered by the Karnataka State Beverages Corporation Ltd (KSBCL). All private market operations are structured via certified retail, on-premise, or hospitality licences (such as CL-2 retail, CL-7 hotel/lodging, or CL-9 bar & restaurant licences).",
                  "No Digital Direct-to-Consumer Sales: Zyper does not engage in online retail sales, direct delivery, or digital transactions for alcoholic beverages. Website content is strictly educational and B2B informational.",
                  "Responsible Handling & Age Verification: Complete compliance with the statutory legal drinking age of 21 years in Karnataka, mandatory health notices, and state excise transportation permits.",
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={16} style={{ color: "#C28224", flexShrink: 0, marginTop: "4px" }} />
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(0.88rem, 1vw, 0.95rem)",
                        lineHeight: "1.7",
                        color: "rgba(17,17,17,0.75)",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>

        {/* Project RERA Registry Table / Card */}
        <Reveal delay={0.18}>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              padding: "clamp(24px, 3.5vw, 40px)",
              border: "1px solid rgba(0,0,0,0.08)",
              marginBottom: "clamp(48px, 6vw, 72px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.1rem, 1.35vw, 1.3rem)",
                  color: "#111111",
                  margin: 0,
                }}
              >
                Project K-RERA Registration Registry
              </h3>
              <a
                href="https://rera.karnataka.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "#C28224",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  textDecoration: "underline",
                }}
              >
                Verify on Karnataka RERA Portal
                <ExternalLink size={12} />
              </a>
            </div>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13.5px",
                lineHeight: "1.7",
                color: "rgba(17,17,17,0.65)",
                marginBottom: "20px",
              }}
            >
              Every active and upcoming development under Zyper Real Estate is registered with the Karnataka Real Estate Regulatory Authority. Buyers can input these registration numbers directly on the authority&apos;s portal to review sanctions, encumbrances, and quarterly disclosures.
            </p>

            {/* Note highlighting client confirmation */}
            <div
              style={{
                background: "rgba(194,130,36,0.06)",
                borderLeft: "3px solid #C28224",
                borderRadius: "10px",
                padding: "14px 18px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "13px",
                  lineHeight: "1.7",
                  color: "rgba(194,130,36,0.9)",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                [CLIENT TO CONFIRM: Insert verified K-RERA numbers for each active Zyper real estate development here prior to public rollout. Clear listing of project numbers ensures full transparency and compliance scrutiny.]
              </p>
            </div>
          </div>
        </Reveal>

        {/* Pre-Launch Verification Checklist Box (Amber) */}
        <Reveal delay={0.2}>
          <div
            style={{
              background: "rgba(194,130,36,0.06)",
              border: "1px solid rgba(194,130,36,0.25)",
              borderRadius: "24px",
              padding: "clamp(24px, 3.5vw, 40px)",
              marginBottom: "clamp(40px, 5vw, 60px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <AlertTriangle size={18} style={{ color: "#C28224" }} />
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  color: "#C28224",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Three Things to Confirm Before This Goes Live (Client Action Required)
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  num: "1",
                  title: "RERA numbers.",
                  body: "The claim only works if actual K-RERA registration numbers for each Zyper project sit below this paragraph. A page that says \"RERA compliant\" without listed numbers reads as filler and buyers do check.",
                },
                {
                  num: "2",
                  title: "Deliberate beverages wording.",
                  body: "In Karnataka, wholesale liquor is a state monopoly held by Karnataka State Beverages Corporation Ltd (KSBCL), and private players hold retail or on-premise licences such as CL-2, CL-7 and CL-9. Zyper should not describe itself anywhere on the site as a wholesaler or wholesale distributor. Please confirm which licence category the division actually holds so the copy can name it correctly.",
                },
                {
                  num: "3",
                  title: "BBMP replacement by Greater Bengaluru Authority.",
                  body: "BBMP no longer exists. It was dissolved in September 2025 and replaced by the Greater Bengaluru Authority with five city corporations. Any older Zyper copy still naming BBMP should be updated, and during this transition the approving corporation depends on where the site falls.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#C28224",
                      background: "rgba(194,130,36,0.12)",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {item.num}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "13.5px",
                      lineHeight: "1.75",
                      color: "rgba(17,17,17,0.72)",
                      margin: 0,
                    }}
                  >
                    <strong style={{ color: "#111111" }}>{item.title}</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Footer Navigation Note */}
        <Reveal delay={0.22}>
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
