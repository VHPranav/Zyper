"use client";

import { Compass, Sparkles, ShieldCheck, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const advantages = [
  {
    number: "01",
    icon: Compass,
    title: "Prime Strategic Locations",
    desc: "Every site is curated for connectivity, neighborhood prestige, infrastructure growth, and long-term capital appreciation across Kerala's top corridors.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Thoughtful Architectural Design",
    desc: "We marry tropical modernism with timeless aesthetics, prioritizing natural airflow, expansive ceiling heights, and practical luxury for modern living.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "100% Regulatory & Legal Clarity",
    desc: "Zero ambiguity. Every project strictly adheres to government sanctions, clear land titles, environmental norms, and complete RERA compliance.",
  },
  {
    number: "04",
    icon: Award,
    title: "End-to-End Investment Value",
    desc: "Properties engineered for high yield and enduring value — supported by transparent pricing, on-time delivery, and lifetime property care.",
  },
];

export default function AdvantagesSection() {
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
                  maxWidth: "520px",
                }}
              >
                Why choose{" "}
                <span className="heading-gradient-dark font-semibold">
                  ZYPER Real Estate.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p
              className="text-black/60 font-normal"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                lineHeight: "1.65",
                maxWidth: "460px",
              }}
            >
              A rigorous commitment to architectural integrity, strict compliance, and lifetime asset value.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advantages.map((a, i) => {
            const IconComp = a.icon;
            return (
              <Reveal key={a.number} delay={i * 0.1} className="h-full">
                <div
                  className="flex flex-col justify-between h-full rounded-3xl bg-[#F9F9F8] border border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
                  style={{
                    padding: "clamp(24px, 2.2vw, 36px)",
                    minHeight: "260px",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-[#C28224] tracking-wider">
                        {a.number}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center text-[var(--brown-black)]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3
                      className="text-[var(--brown-black)] font-semibold mb-3"
                      style={{ fontSize: "1.15rem", letterSpacing: "-0.02em", lineHeight: "1.3" }}
                    >
                      {a.title}
                    </h3>
                    <p
                      className="text-[var(--muted-dark)] font-normal"
                      style={{ fontSize: "14px", lineHeight: "1.65" }}
                    >
                      {a.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
