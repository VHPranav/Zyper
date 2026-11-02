"use client";

import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    number: "01",
    title: "Doorstep Scrap Collection from Homes & Apartments",
    desc: "We collect all types of household scrap directly from your doorstep, from flats, villas, independent houses and residential complexes. Whether it's old newspapers, metal, plastic, e-waste or furniture, just give us a call and we will be there.",
  },
  {
    number: "02",
    title: "Government & Corporate Scrap Vehicle Disposal",
    desc: "We specialise in scrap vehicles and industrial scrap from Government departments and private companies. We follow all legal procedures, documentation and eco-friendly disposal norms for condemned vehicles, machinery and office scrap.",
  },
  {
    number: "03",
    title: "All Types of Old Scrap",
    desc: "If it's old and unused, we will take it. We buy and collect everything from vehicles and spare parts to metal, electronics, furniture and industrial waste.",
  },
];

export default function ScrapServices() {
  return (
    <section
      style={{
        background: "var(--concrete)",
        paddingBlock: "clamp(80px, 9vw, 160px)",
        paddingInline: "clamp(24px, 3.2vw, 64px)",
      }}
    >
      <Reveal>
        <p className="section-label text-[var(--muted-dark)] mb-4">What we do</p>
        <h2
          className="heading-lg text-[var(--brown-black)] font-medium mb-16"
          style={{ maxWidth: "520px" }}
        >
          Three ways we clear your scrap.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Reveal key={s.number} delay={i * 0.1} className="h-full">
            <div
              className="flex flex-col gap-5 p-8 rounded-2xl h-full"
              style={{ background: "rgba(255,255,255,0.35)", border: "1px solid rgba(48,39,31,0.1)" }}
            >
              <span className="text-[var(--muted-dark)] text-sm tabular-nums">{s.number}</span>
              <h3
                className="text-[var(--brown-black)] font-semibold"
                style={{ fontSize: "1.25rem", lineHeight: "1.3", letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h3>
              <p className="text-[var(--muted-dark)]" style={{ fontSize: "14.5px", lineHeight: "1.7" }}>
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
