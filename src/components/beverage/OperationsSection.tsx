"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const areas = [
  { name: "Kochi Metropolitan Area", hub: "Primary Central Distribution Hub" },
  { name: "Ernakulam District & Ports", hub: "Logistics, Warehousing & Inland Depots" },
  { name: "Thrissur Cultural Belt", hub: "Regional Distribution Facility" },
  { name: "Kozhikode & Malabar Belt", hub: "Northern Transit Depot" },
  { name: "Trivandrum Capital Region", hub: "Southern Operations & Liaison Center" },
];

export default function OperationsSection() {
  return (
    <section
      style={{
        background: "#0A0A0A",
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
              className="heading-gradient-light"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                lineHeight: "1.12",
                letterSpacing: "-0.035em",
                maxWidth: "440px",
                fontWeight: 600,
                marginBottom: "32px",
              }}
            >
              Where we operate.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.60)",
                fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
                lineHeight: "1.75",
                maxWidth: "440px",
                fontWeight: 400,
                marginBottom: "40px",
              }}
            >
              Strategic distribution hubs situated across Kerala&apos;s key transit routes, providing rapid, compliant turnaround for authorized trade.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link href="/contact" className="btn btn-light w-fit">
              <span>Inquire Distribution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Right list column */}
        <div className="lg:col-span-7">
          {areas.map((area, i) => (
            <Reveal key={area.name} delay={i * 0.08}>
              <div
                style={{
                  paddingTop: "clamp(24px, 2.5vw, 36px)",
                  paddingBottom: "clamp(24px, 2.5vw, 36px)",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  borderTop: i === 0 ? "1px solid rgba(255, 255, 255, 0.10)" : "none",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
                  cursor: "default",
                }}
                className="group transition-colors hover:bg-white/[0.03] rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] flex items-center justify-center text-[#DF9D32] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3
                      className="text-white font-medium group-hover:text-[#DF9D32] transition-colors"
                      style={{
                        fontSize: "clamp(1.1rem, 1.35vw, 1.35rem)",
                        letterSpacing: "-0.015em",
                        lineHeight: "1.3",
                      }}
                    >
                      {area.name}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.45)",
                        fontSize: "14px",
                        marginTop: "4px",
                      }}
                    >
                      {area.hub}
                    </p>
                  </div>
                </div>
                <span
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1.5 text-[#DF9D32] pr-2"
                >
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
