"use client";

import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Call us",
    desc: "Tell us what scrap you have, how much, and where it is. Homes, apartments, offices and sites are all welcome.",
  },
  {
    title: "Instant valuation",
    desc: "We give you a quick valuation for your scrap, so you know what to expect before we arrive.",
  },
  {
    title: "Doorstep pickup",
    desc: "Our team arrives on time, collects the scrap and clears your space. Vehicles and industrial scrap follow the required documentation.",
  },
  {
    title: "Responsible recycling",
    desc: "Everything we collect is routed for eco-friendly recycling or disposal, so value is recovered and waste is kept out of landfill.",
  },
];

export default function ScrapProcess() {
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
        style={{ gap: "clamp(48px, 6vw, 96px)" }}
      >
        <div className="lg:col-span-5 lg:sticky self-start" style={{ top: "140px" }}>
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
              How It Works
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              style={{
                color: "rgba(10,10,10,0.60)",
                fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
                lineHeight: "1.75",
                maxWidth: "440px",
              }}
            >
              Clearing your scrap should take one call, not a week of chasing vendors. Here is how we make it quick.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 flex flex-col">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div
                className="flex gap-6"
                style={{ paddingBlock: "28px", borderBottom: "1px solid rgba(10,10,10,0.1)" }}
              >
                <span
                  className="tabular-nums shrink-0"
                  style={{ color: "rgba(10,10,10,0.35)", fontSize: "14px", paddingTop: "6px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    style={{
                      color: "#0A0A0A",
                      fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                      fontWeight: 500,
                      letterSpacing: "-0.025em",
                      marginBottom: "8px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ color: "rgba(10,10,10,0.6)", fontSize: "15px", lineHeight: "1.7" }}>
                    {s.desc}
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
