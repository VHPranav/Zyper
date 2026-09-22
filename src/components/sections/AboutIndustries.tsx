"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, HardHat, Wine } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    number: "01",
    title: "Real Estate",
    description:
      "Premium residential and commercial properties across Bengaluru, developed with the buyer's long-term value in mind, not just the sale.",
    href: "/real-estate",
    icon: Building2,
    tag: "Land Acquisition & Development",
  },
  {
    number: "02",
    title: "Construction",
    description:
      "Turnkey structural and civil engineering, from independent villas to larger commercial builds, backed by an in-house team that owns the project from foundation to finish.",
    href: "/construction",
    icon: HardHat,
    tag: "Civil & Turnkey Builds",
  },
  {
    number: "03",
    title: "Beverages",
    description:
      "A curated distribution arm bringing premium spirits and beverages to the Bengaluru market and across East Africa, run with the same discipline and compliance rigor as our other divisions.",
    href: "/liquor",
    icon: Wine,
    tag: "Licensed Distribution",
  },
];

export default function AboutIndustries() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        paddingBlock: "clamp(120px, 14vw, 200px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div>
        {/* Centered Section Header */}
        <div
          className="flex flex-col items-center text-center"
          style={{
            marginBottom: "clamp(64px, 8vw, 100px)",
            maxWidth: "780px",
            marginInline: "auto",
          }}
        >
          <Reveal delay={0.05}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#C28224",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              Our Divisions
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
                marginBottom: "18px",
              }}
            >
              Three industries.{" "}
              <span style={{ color: "rgba(255,255,255,0.4)" }}>One standard.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
                lineHeight: "1.75",
                color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}
            >
              A unified standard of execution across distinct verticals, built with long-term value, regulatory discipline, and transparent accountability.
            </p>
          </Reveal>
        </div>

        {/* 3 Full-Width Grid Division Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.title} delay={0.1 + i * 0.08}>
                <Link
                  href={ind.href}
                  className="group block transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "28px",
                    padding: "clamp(32px, 3.8vw, 48px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(194,130,36,0.4)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div>
                    {/* Top Row: Monospace index and Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#C28224",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {ind.number}
                      </span>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "14px",
                          background: "rgba(194, 130, 36, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#C28224",
                        }}
                      >
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* Tag */}
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        color: "#C28224",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      {ind.tag}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(1.5rem, 1.8vw, 1.85rem)",
                        letterSpacing: "-0.02em",
                        color: "#FFFFFF",
                        marginBottom: "14px",
                      }}
                    >
                      {ind.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
                        lineHeight: "1.75",
                        color: "rgba(255,255,255,0.65)",
                        margin: 0,
                      }}
                    >
                      {ind.description}
                    </p>
                  </div>

                  {/* Bottom link label with interactive arrow */}
                  <div
                    style={{
                      marginTop: "36px",
                      paddingTop: "20px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "#FFFFFF",
                      fontSize: "13.5px",
                      fontWeight: 500,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      width: "100%",
                    }}
                  >
                    <span>Explore {ind.title}</span>
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      <ArrowUpRight size={14} style={{ color: "#C28224" }} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
