"use client";

import { Reveal } from "@/components/ui/Reveal";

const materials = [
  "Old Vehicles & Spare Parts",
  "Iron & Metal Scrap",
  "E-Waste, Computers, Electronics",
  "Office Furniture & Equipment",
  "Plastic, Paper & Cardboard",
  "Construction & Industrial Waste",
];

export default function ScrapMaterials() {
  return (
    <section
      style={{
        background: "var(--charcoal-2)",
        paddingBlock: "clamp(80px, 9vw, 160px)",
        paddingInline: "clamp(24px, 3.2vw, 64px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="section-label text-white/40 mb-6">What we buy &amp; collect</p>
            <h2 className="heading-lg text-white font-medium" style={{ maxWidth: "400px" }}>
              If it&apos;s old and unused, we&apos;ll take it.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <ul className="flex flex-col">
            {materials.map((m, i) => (
              <Reveal key={m} delay={i * 0.08}>
                <li
                  className="py-5 border-b text-white flex items-center justify-between group"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.8rem)",
                    letterSpacing: "-0.025em",
                    fontWeight: 400,
                  }}
                >
                  <span>{m}</span>
                  <span className="text-white/20 text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
