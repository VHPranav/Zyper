"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    title: "Integrity",
    desc: "We say what we'll do, and we do it. Every client, vendor, and partner relationship at ZYPER is built on straight answers and honoured commitments, not sales talk.",
  },
  {
    title: "Craftsmanship",
    desc: "Whether it's a structural beam or a bottling line, quality isn't a checkbox for us. We hold our materials, our processes, and our people to a standard higher than what's expected.",
  },
  {
    title: "Forward Thinking",
    desc: "Bengaluru doesn't stand still, and neither do we. We invest in better methods, smarter processes, and ideas that keep our divisions ahead of the curve.",
  },
  {
    title: "Responsibility",
    desc: "We build with the next twenty years in mind, for our clients, for the communities around our projects, and for the environment we're building in.",
  },
];

export default function AboutFullContent() {
  return (
    <>
      {/* SECTION 2: Our Story */}
      <section
        style={{
          background: "var(--charcoal, #111111)",
          paddingBlock: "clamp(120px, 14vw, 200px)",
          paddingInline: "clamp(32px, 5vw, 96px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal delay={0.05}>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#C28224",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                Our Story
              </span>
            </Reveal>

            <Reveal delay={0.1} className="mb-8 lg:mb-10">
              <h2
                className="text-white font-medium"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.035em",
                  maxWidth: "600px",
                }}
              >
                A group built for Bengaluru,{" "}
                <span style={{ color: "rgba(255,255,255,0.45)" }}>built to last.</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6" style={{ maxWidth: "560px" }}>
              <Reveal delay={0.15}>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                    lineHeight: "1.75",
                    color: "rgba(255, 255, 255, 0.85)",
                  }}
                >
                  ZYPER VENTURES started with a simple belief. A city growing as fast as Bengaluru deserves businesses that don&apos;t cut corners. What began as a focused effort in [real estate or construction, confirm which came first] has grown into a group operating across three connected industries, Real Estate, Construction, and Beverages, each held to the same standard of quality and follow-through.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                    lineHeight: "1.75",
                    color: "rgba(255, 255, 255, 0.55)",
                  }}
                >
                  We&apos;re based in Bengaluru and we build for it. Every project we take on, every structure we deliver, and every partnership we form is shaped by an understanding of this city, its pace, its people, and what they expect from the businesses they choose to work with.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                    lineHeight: "1.75",
                    color: "rgba(255, 255, 255, 0.55)",
                  }}
                >
                  Today, ZYPER operates as a single group with three specialised divisions, unified not by size but by a shared commitment to getting the details right.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Full-width Image */}
          <div className="lg:col-span-6 w-full">
            <Reveal delay={0.15}>
              <div
                className="relative overflow-hidden shadow-2xl w-full"
                style={{
                  borderRadius: "28px",
                  aspectRatio: "16/11",
                  minHeight: "440px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
                  alt="ZYPER VENTURES architecture and presence in Bengaluru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.75)",
                      textTransform: "uppercase",
                    }}
                  >
                    BENGALURU, KARNATAKA · GROUP HEADQUARTERS
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: What Drives Us */}
      <section
        style={{
          background: "#FAF7F2",
          paddingBlock: "clamp(120px, 14vw, 200px)",
          paddingInline: "clamp(32px, 5vw, 96px)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Centered headline block */}
          <div
            className="flex flex-col items-center text-center"
            style={{ marginBottom: "clamp(64px, 8vw, 110px)" }}
          >
            <Reveal delay={0.05}>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#C28224",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                What Drives Us
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(2.4rem, 4.8vw, 4rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.035em",
                  color: "#111111",
                  maxWidth: "760px",
                }}
              >
                What we won&apos;t compromise on.
              </h2>
            </Reveal>
          </div>

          {/* Clean 2×2 editorial grid without heavy boxes */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{
              rowGap: "clamp(48px, 6vw, 80px)",
              columnGap: "clamp(48px, 6vw, 96px)",
            }}
          >
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.1 + i * 0.08}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#C28224",
                      letterSpacing: "0.08em",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
                      letterSpacing: "-0.02em",
                      color: "#111111",
                      margin: 0,
                    }}
                  >
                    {v.title}.
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                      lineHeight: "1.75",
                      color: "rgba(17,17,17,0.65)",
                      margin: 0,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
