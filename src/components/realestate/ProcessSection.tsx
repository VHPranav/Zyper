"use client";

import { Reveal } from "@/components/ui/Reveal";

const processSteps = [
  {
    step: "01",
    title: "Personalized Discovery",
    desc: "We analyze your lifestyle preferences, investment objectives, and spatial requirements to curate matching opportunities.",
  },
  {
    step: "02",
    title: "Site Tour & Architecture",
    desc: "Comprehensive site visits, blueprint reviews, structural walkthroughs, and material specification previews.",
  },
  {
    step: "03",
    title: "Transparent Due Diligence",
    desc: "Direct access to title deeds, government approvals, RERA registrations, and transparent milestone schedules.",
  },
  {
    step: "04",
    title: "Seamless Handover & Care",
    desc: "Timely possession with thorough quality audits, asset documentation, and long-term property management support.",
  },
];

export default function ProcessSection() {
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-left"
          style={{ marginBottom: "clamp(64px, 7vw, 96px)" }}
        >
          <div>
            <Reveal delay={0.1}>
              <h2
                className="text-[#0A0A0A] font-medium"
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.035em",
                  maxWidth: "520px",
                }}
              >
                Your{" "}
                <span className="heading-gradient-dark font-semibold">
                  acquisition journey.
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
              From initial consultation to key handover, our streamlined four-stage protocol ensures total transparency.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 0.1} className="h-full">
              <div
                className="rounded-3xl bg-[#F9F9F8] border border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between h-full"
                style={{
                  padding: "clamp(24px, 2.2vw, 36px)",
                  minHeight: "220px",
                }}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#C28224] mb-5 block">
                    PHASE {step.step}
                  </span>
                  <h3
                    className="text-[#0A0A0A] font-medium text-lg mb-3 tracking-tight"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {step.desc}
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
