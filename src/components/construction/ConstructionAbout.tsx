"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export default function ConstructionAbout() {
  return (
    <section
      style={{
        background: "#FAF7F2",
        paddingBlock: "clamp(120px, 14vw, 220px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Reveal delay={0.1} className="mb-10 lg:mb-12">
            <h2
              className="text-[#0A0A0A] font-medium"
              style={{
                fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                lineHeight: "1.12",
                letterSpacing: "-0.035em",
                maxWidth: "520px",
              }}
            >
              <span className="heading-gradient-dark font-semibold">
                Engineering the future, one structure at a time.
              </span>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-8" style={{ maxWidth: "480px" }}>
            <Reveal delay={0.2}>
              <p
                className="text-black/80 font-normal"
                style={{
                  fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)",
                  lineHeight: "1.75",
                  letterSpacing: "-0.01em",
                }}
              >
                ZYPER Construction delivers turnkey structural engineering and architectural execution built for enduring durability.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                className="text-black/55 font-normal"
                style={{
                  fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                  lineHeight: "1.7",
                  letterSpacing: "-0.01em",
                }}
              >
                Our specialized site engineers operate across Kerala with deep expertise in monsoon resilience, geotechnical integrity, and modern construction tech.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Image column */}
        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div
              className="relative overflow-hidden group shadow-xl"
              style={{
                borderRadius: "28px",
                aspectRatio: "16/10",
                border: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
                alt="ZYPER Construction project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
