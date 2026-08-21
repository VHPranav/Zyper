"use client";

import { HardHat, Clock, Leaf, ShieldAlert } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    number: "01",
    icon: HardHat,
    title: "Structural Integrity",
    desc: "Every build begins with geotechnical soil tests and computer-modeled structural engineering to guarantee decades of resilient stability.",
  },
  {
    number: "02",
    icon: Clock,
    title: "Strict Timeline Execution",
    desc: "We utilize CPM/PERT project management workflows to track daily milestones, ensuring zero project overruns and on-time completion.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Sustainable & Low-Carbon",
    desc: "We source certified green materials, optimize thermal efficiency, and minimize construction footprint without compromising durability.",
  },
  {
    number: "04",
    icon: ShieldAlert,
    title: "Transparent Fixed Pricing",
    desc: "Detailed bill of quantities (BOQ) with guaranteed cost certainty, eliminating unexpected surprise fees throughout execution.",
  },
];

export default function ConstructionPhilosophy() {
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
                Our{" "}
                <span className="heading-gradient-dark font-semibold">
                  construction philosophy.
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
              Setting the standard for modern civil engineering, safety compliance, and architectural accuracy.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => {
            const IconComp = f.icon;
            return (
              <Reveal key={f.number} delay={i * 0.1} className="h-full">
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
                        {f.number}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center text-[var(--brown-black)]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3
                      className="text-[var(--brown-black)] font-semibold mb-3"
                      style={{ fontSize: "1.15rem", letterSpacing: "-0.02em", lineHeight: "1.3" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-[var(--muted-dark)] font-normal"
                      style={{ fontSize: "14px", lineHeight: "1.65" }}
                    >
                      {f.desc}
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
