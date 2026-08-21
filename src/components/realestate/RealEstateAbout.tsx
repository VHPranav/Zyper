"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export default function RealEstateAbout() {
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
                Spaces that reflect how you live.
              </span>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-8" style={{ maxWidth: "480px" }}>
            <Reveal delay={0.2}>
              <p
                className="text-black/80"
                style={{
                  fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)",
                  lineHeight: "1.75",
                  letterSpacing: "-0.01em",
                }}
              >
                ZYPER Real Estate creates landmark properties at the intersection of architectural elegance and enduring livability.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                className="text-black/55"
                style={{
                  fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                  lineHeight: "1.7",
                  letterSpacing: "-0.01em",
                }}
              >
                We operate with absolute transparency across title clarity, timelines, and building standards — ensuring confidence from day one.
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
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80"
                alt="ZYPER Real Estate interior"
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
