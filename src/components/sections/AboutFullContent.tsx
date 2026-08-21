"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    title: "Trust",
    desc: "Every relationship we build — with clients, partners, and communities — is grounded in transparency and integrity.",
  },
  {
    title: "Quality",
    desc: "We never compromise on quality. From materials to methods, we set and maintain the highest standards.",
  },
  {
    title: "Innovation",
    desc: "We continuously explore new approaches, technologies, and business models to stay ahead.",
  },
  {
    title: "Sustainability",
    desc: "Long-term thinking guides every decision — for our business, our clients, and our environment.",
  },
];

export default function AboutFullContent() {
  return (
    <>
      {/* Story */}
      <section
        style={{
          background: "var(--charcoal)",
          paddingBlock: "clamp(120px, 14vw, 220px)",
          paddingInline: "clamp(32px, 5vw, 96px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal delay={0.1} className="mb-10 lg:mb-12">
              <h2
                className="heading-lg text-white font-medium"
                style={{ maxWidth: "520px", lineHeight: "1.1" }}
              >
                <span className="heading-gradient-light font-semibold">
                  A vision of comprehensive excellence.
                </span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-8" style={{ maxWidth: "480px" }}>
              <Reveal delay={0.2}>
                <p
                  className="text-white/70"
                  style={{
                    fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)",
                    lineHeight: "1.75",
                    letterSpacing: "-0.01em",
                  }}
                >
                  ZYPER was founded to build a multi-industry enterprise defined by an uncompromising commitment to quality, integrity, and lasting value.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p
                  className="text-white/40"
                  style={{
                    fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                    lineHeight: "1.7",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Today, we operate three synergistic divisions — Real Estate, Construction, and Beverages — unified under one standard of execution.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{ borderRadius: "28px", aspectRatio: "4/3" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=80"
                  alt="ZYPER VENTURES team and vision"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          background: "#FAF7F2",
          paddingBlock: "clamp(100px, 12vw, 180px)",
          paddingInline: "clamp(32px, 5vw, 96px)",
        }}
      >
        {/* Centered headline block */}
        <div
          className="flex flex-col items-center text-center"
          style={{ marginBottom: "clamp(60px, 8vw, 110px)" }}
        >
          <Reveal className="mb-4 sm:mb-5">
            <h2
              className="heading-gradient-dark"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(3rem, 6vw, 67px)",
                lineHeight: 1.18,
                letterSpacing: "-0.72px",
                display: "inline-block",
              }}
            >
              What drives us.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "16.6px",
                lineHeight: "22px",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Trust, quality, innovation, and sustainability.
            </p>
          </Reveal>
        </div>

        {/* 2×2 value grid — no cards, inline bold title */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            rowGap: "clamp(44px, 6vw, 80px)",
            columnGap: "clamp(40px, 6vw, 80px)",
          }}
        >
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16.9px",
                  lineHeight: "23px",
                  letterSpacing: "-0.18px",
                  color: "#000000",
                }}
              >
                <strong style={{ fontWeight: 600 }}>{v.title}.</strong>{" "}
                <span style={{ color: "rgba(0,0,0,0.55)" }}>{v.desc}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
