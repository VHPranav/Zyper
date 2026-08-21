"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  {
    title: "Luxury Residential Villas & Bungalows",
    desc: "Bespoke structural engineering, cantilevered balconies, custom foundations, and high-spec architectural finishes.",
  },
  {
    title: "High-Density Apartment Complexes",
    desc: "Multi-story residential towers built with advanced formwork, earthquake-resistant RCC frames, and integrated utility grids.",
  },
  {
    title: "Commercial & Corporate Office Buildings",
    desc: "Modern curtain-wall façades, column-free floor plates, fire-safety automation, and enterprise electrical infrastructure.",
  },
  {
    title: "Heritage Restoration & Adaptive Renovation",
    desc: "Structural strengthening, moisture-proofing, and modern retrofitting while honoring historic Kerala vernacular architecture.",
  },
  {
    title: "Civil Engineering & Geotechnical Consulting",
    desc: "Sub-surface investigation, pile foundations, retaining wall engineering, and structural load auditing.",
  },
  {
    title: "Turnkey Interior Fit-Outs & MEP Solutions",
    desc: "Integrated mechanical, electrical, plumbing, HVAC ducting, and premium architectural interior craft.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      style={{
        background: "#FAF7F2",
        paddingBlock: "clamp(120px, 14vw, 220px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-12 items-start"
        style={{
          gap: "clamp(48px, 6vw, 96px)",
        }}
      >
        {/* Left pinned sticky column */}
        <div
          className="lg:col-span-5 lg:sticky self-start"
          style={{
            top: "140px",
          }}
        >
          <Reveal delay={0.1}>
            <h2
              className="heading-gradient-dark"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                lineHeight: "1.12",
                letterSpacing: "-0.035em",
                maxWidth: "440px",
                fontWeight: 600,
                marginBottom: "32px",
              }}
            >
              What we build.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                color: "rgba(10,10,10,0.60)",
                fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
                lineHeight: "1.75",
                maxWidth: "440px",
                fontWeight: 400,
                marginBottom: "40px",
              }}
            >
              From landmark civil infrastructure to private residential sanctuaries, our engineering teams possess comprehensive turnkey capabilities.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link href="/contact" className="btn btn-dark w-fit">
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Right list column */}
        <div className="lg:col-span-7">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.08}>
              <div
                style={{
                  paddingTop: "clamp(28px, 3vw, 44px)",
                  paddingBottom: "clamp(28px, 3vw, 44px)",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  borderTop: i === 0 ? "1px solid rgba(0,0,0,0.10)" : "none",
                  borderBottom: "1px solid rgba(0,0,0,0.10)",
                  cursor: "default",
                }}
                className="group transition-colors hover:bg-black/[0.02] rounded-2xl"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "24px",
                    marginBottom: "12px",
                  }}
                >
                  <h3
                    className="group-hover:text-[#C28224] transition-colors"
                    style={{
                      color: "#0A0A0A",
                      fontSize: "clamp(1.2rem, 1.5vw, 1.55rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: "1.3",
                      fontWeight: 500,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <span
                    style={{
                      color: "rgba(10,10,10,0.35)",
                      fontSize: "13px",
                      fontFamily: "monospace",
                      flexShrink: 0,
                      paddingTop: "4px",
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(10,10,10,0.60)",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    maxWidth: "560px",
                  }}
                >
                  {cap.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
