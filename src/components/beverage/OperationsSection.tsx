"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const areas = [
  {
    name: "Kenya",
    hub: "A market where imported premium spirits are steadily replacing local alternatives, supplied through confirmed letter of credit trade terms.",
  },
  {
    name: "Tanzania",
    hub: "One of the more established African destinations for alcohol imports from India, served under the same compliance standards used domestically.",
  },
  {
    name: "Djibouti",
    hub: "A strategic gateway into the wider Horn of Africa trade corridor, supporting onward movement of shipments across the region.",
  },
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
              From distribution hubs across Bengaluru&apos;s key transit
              corridors to export markets across East Africa, ZYPER Beverages
              moves stock through channels built for speed, compliance and
              consistency, wherever the order is headed.
            </p>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.35)",
                fontSize: "clamp(0.85rem, 1vw, 1rem)",
                lineHeight: "1.65",
                maxWidth: "440px",
                fontWeight: 400,
                marginBottom: "40px",
              }}
            >
              Across Africa
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link href="/contact" className="btn btn-light w-fit">
              <span>Partner With Us</span>
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
                className="group transition-colors hover:bg-white/[0.03] rounded-2xl flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/[0.05] flex items-center justify-center text-[#DF9D32] shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-white font-medium group-hover:text-[#DF9D32] transition-colors mb-2"
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
                      lineHeight: "1.65",
                    }}
                  >
                    {area.hub}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
