"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    number: "01",
    title: "Structural Integrity",
    desc: "Every project begins with rigorous site analysis and structural planning to ensure long-lasting quality.",
  },
  {
    number: "02",
    title: "Timely Delivery",
    desc: "We maintain strict timelines through efficient project management and experienced on-site supervision.",
  },
  {
    number: "03",
    title: "Sustainable Materials",
    desc: "We source high-quality, eco-conscious materials that reduce environmental impact without compromising durability.",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    desc: "Clear cost structures and no hidden charges — we believe honest business is the foundation of trust.",
  },
];

const capabilities = [
  "Residential Bungalows",
  "Apartment Complexes",
  "Commercial Buildings",
  "Renovation & Restoration",
  "Structural Consulting",
  "Interior Finishing",
];

export default function ConstructionContent() {
  return (
    <>
      {/* About Construction */}
      <section
        style={{
          background: "var(--charcoal)",
          paddingBlock: "clamp(80px, 9vw, 160px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal className="mb-6">
              <p className="section-label text-white/40">About Construction</p>
            </Reveal>
            <Reveal delay={0.1} className="mb-6">
              <h2
                className="heading-lg text-white font-medium"
                style={{ maxWidth: "480px" }}
              >
                Engineering the future, one structure at a time.
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="mb-6">
              <p
                className="text-white/50"
                style={{
                  fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                  lineHeight: "1.7",
                }}
              >
                ZYPER Construction is built on a philosophy of excellence, precision,
                and integrity. We handle every phase of construction — from land
                assessment to final handover — with the same commitment to quality.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p
                className="text-white/35"
                style={{
                  fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                  lineHeight: "1.7",
                }}
              >
                Our teams operate across Kerala with a deep understanding of local
                terrain, climate, and regulatory requirements.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "24px", aspectRatio: "16/10" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
                  alt="ZYPER Construction project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section
        style={{
          background: "var(--concrete)",
          paddingBlock: "clamp(80px, 9vw, 160px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
        }}
      >
        <Reveal>
          <p className="section-label text-[var(--muted-dark)] mb-4">What sets us apart</p>
          <h2
            className="heading-lg text-[var(--brown-black)] font-medium mb-16"
            style={{ maxWidth: "480px" }}
          >
            Our construction philosophy.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Reveal key={f.number} delay={i * 0.1}>
              <div
                className="flex flex-col gap-5 p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(48,39,31,0.1)",
                }}
              >
                <span
                  className="text-[var(--muted-dark)] text-sm tabular-nums"
                >
                  {f.number}
                </span>
                <h3
                  className="text-[var(--brown-black)] font-semibold"
                  style={{ fontSize: "1.15rem", letterSpacing: "-0.02em" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[var(--muted-dark)]"
                  style={{ fontSize: "14px", lineHeight: "1.65" }}
                >
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
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
              <p className="section-label text-white/40 mb-6">Capabilities</p>
              <h2
                className="heading-lg text-white font-medium"
                style={{ maxWidth: "400px" }}
              >
                What we build.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="flex flex-col">
              {capabilities.map((cap, i) => (
                <Reveal key={cap} delay={i * 0.08}>
                  <li
                    className="py-5 border-b text-white flex items-center justify-between group"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                      fontSize: "clamp(1.1rem, 1.8vw, 1.8rem)",
                      letterSpacing: "-0.025em",
                      fontWeight: 400,
                    }}
                  >
                    <span>{cap}</span>
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
    </>
  );
}
