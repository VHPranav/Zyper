"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const propertyTypes = [
  {
    tag: "Residential Luxury",
    title: "Bespoke Luxury Villas",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    desc: "Custom-designed private residences and gated villa enclaves featuring landscaped courtyards, private swimming pools, and high-end artisanal finishes.",
    features: ["Private Garden & Deck", "Double-Height Atriums", "24/7 Gated Security"],
  },
  {
    tag: "Urban Living",
    title: "Premium Apartments & Townhomes",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    desc: "Contemporary residences in prime metropolitan hubs designed with open-concept floor plans, smart home integration, and resort-style lifestyle amenities.",
    features: ["Infinity Pool & Clubhouse", "Smart Home Automation", "City Center Access"],
  },
  {
    tag: "Commercial & Enterprise",
    title: "Commercial Spaces & Retail Hubs",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    desc: "Grade-A corporate suites, modern office campuses, and high-street retail environments built for high footfall, business prestige, and optimum rental yields.",
    features: ["Grade-A Structural Spec", "High Footfall Frontage", "Scalable Modular Layouts"],
  },
];

export default function PropertyTypesSection() {
  return (
    <section
      style={{
        background: "#FAF7F2",
        paddingBlock: "clamp(120px, 14vw, 220px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
      }}
    >
      <div>
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          style={{ marginBottom: "clamp(64px, 7vw, 96px)" }}
        >
          <div>
            <Reveal delay={0.1}>
              <h2
                className="text-[var(--brown-black)] font-medium"
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.035em",
                  maxWidth: "560px",
                }}
              >
                <span className="heading-gradient-dark font-semibold">
                  Tailored spaces
                </span>{" "}
                for every requirement.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p
              className="text-[var(--muted-dark)] font-normal"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                lineHeight: "1.65",
                maxWidth: "460px",
              }}
            >
              From custom waterfront villas to enterprise-grade commercial environments, discover our structured real estate solutions.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {propertyTypes.map((pt, i) => (
            <Reveal key={pt.title} delay={i * 0.12}>
              <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300">
                {/* Image container */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    src={pt.image}
                    alt={pt.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

              {/* Card Body */}
                <div
                  style={{
                    padding: "clamp(20px, 2.5vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                    gap: "0",
                  }}
                >
                  <div>
                    <h3
                      className="text-[var(--brown-black)] font-medium"
                      style={{ fontSize: "1.2rem", letterSpacing: "-0.025em", marginBottom: "10px" }}
                    >
                      {pt.title}
                    </h3>
                    <p
                      className="text-[var(--muted-dark)] font-normal"
                      style={{ fontSize: "13.5px", lineHeight: "1.65", marginBottom: "20px" }}
                    >
                      {pt.desc}
                    </p>
                  </div>

                  {/* Features list */}
                  <div style={{ paddingTop: "18px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                      {pt.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                          <span
                            style={{
                              fontSize: "12px",
                              color: "var(--brown-black)",
                              fontWeight: 500,
                              opacity: 0.8,
                            }}
                          >
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--brown-black)] tracking-wider uppercase group-hover:text-amber-800 transition-colors"
                    >
                      <span>Inquire Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
