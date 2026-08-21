"use client";

import { ShieldCheck, Award, Layers, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Licensed Operations",
    desc: "All trading and logistics activities strictly operate under state excise permits and central regulatory clearances.",
  },
  {
    number: "02",
    icon: Award,
    title: "Rigorous Quality Assurance",
    desc: "Comprehensive batch testing, temperature-regulated warehousing, and seal-validation protocols at every transit phase.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Ethical Sourcing",
    desc: "Direct partnerships with verified, accredited distillers and beverage houses guaranteeing authentic batch provenance.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Responsible Distribution",
    desc: "Uncompromising enforcement of legal age limits, authorized vendor supply chains, and socially responsible commerce.",
  },
];

export default function PrinciplesSection() {
  return (
    <section
      style={{
        background: "#0A0A0A",
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
                className="font-medium text-white"
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.035em",
                  maxWidth: "520px",
                }}
              >
                Our operating{" "}
                <span className="heading-gradient-light font-semibold">
                  principles.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p
              className="text-white/60 font-normal"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                lineHeight: "1.65",
                maxWidth: "460px",
              }}
            >
              Upholding integrity, security, and traceability throughout the entire supply cycle.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {principles.map((p, i) => {
            const IconComp = p.icon;
            return (
              <Reveal key={p.number} delay={i * 0.1} className="h-full">
                <div
                  className="flex flex-col justify-between h-full rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  style={{
                    padding: "clamp(24px, 2.2vw, 36px)",
                    minHeight: "260px",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-xs font-mono font-bold tracking-wider text-[#DF9D32]"
                      >
                        {p.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white/[0.06] text-[#DF9D32]"
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3
                      className="text-white font-medium mb-3"
                      style={{ fontSize: "1.15rem", letterSpacing: "-0.02em", lineHeight: "1.3" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-white/50 font-normal"
                      style={{ fontSize: "14px", lineHeight: "1.65" }}
                    >
                      {p.desc}
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
