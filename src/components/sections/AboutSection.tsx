"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: "var(--charcoal)",
        paddingBlock: "clamp(120px, 14vw, 220px)",
      }}
      aria-labelledby="about-heading"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14"
        style={{ paddingInline: "clamp(32px, 5vw, 96px)" }}
      >
        {/* Left column: description + CTA */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-12 lg:gap-16">
          <div className="flex flex-col gap-8">

            <Reveal delay={0.15} className="mb-6">
              <p
                className="text-white/60"
                style={{
                  fontSize: "clamp(1rem, 1.3vw, 1.35rem)",
                  lineHeight: "1.6",
                  maxWidth: "440px",
                }}
              >
                ZYPER is a diversified business group with strong interests in
                Real Estate, Construction, and Liquor &amp; Beverages. Built on
                the principles of trust, quality, and long-term value.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p
                className="text-white/40"
                style={{
                  fontSize: "clamp(0.9rem, 1.1vw, 1.15rem)",
                  lineHeight: "1.65",
                  maxWidth: "440px",
                }}
              >
                Our strength lies in our experienced teams, structured
                operations, and a clear vision for sustainable growth across
                multiple sectors.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <Link
                href="/#contact"
                className="btn btn-light"
              >
                <span>More about us</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>

          {/* Divider metric */}
          <Reveal delay={0.45}>
            <div className="flex gap-12">
              <div>
                <p
                  className="text-white font-semibold"
                  style={{ fontSize: "2.5rem", letterSpacing: "-0.04em" }}
                >
                  15+
                </p>
                <p className="text-white/40 text-sm mt-1">Years active</p>
              </div>
              <div>
                <p
                  className="text-white font-semibold"
                  style={{ fontSize: "2.5rem", letterSpacing: "-0.04em" }}
                >
                  3
                </p>
                <p className="text-white/40 text-sm mt-1">Divisions</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right column: large editorial statement */}
        <div className="lg:col-span-8 flex items-center lg:justify-end">
          <div>
            <h2
              id="about-heading"
              className="heading-xl font-medium flex flex-col gap-4"
              style={{ lineHeight: "0.95", letterSpacing: "-0.055em" }}
            >
              <EditorialLine
                text="Built with"
                highlight="purpose."
                delay={0}
              />
              <EditorialLine
                text="designed"
                highlight="for life."
                delay={0.1}
              />
            </h2>
          </div>
        </div>
      </div>

      {/* Subtle divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--line-dark)" }}
        aria-hidden="true"
      />
    </section>
  );
}

function EditorialLine({
  text,
  highlight,
  delay,
}: {
  text: string;
  highlight: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="overflow-visible">
      <span className="block">
        <span className="text-white/35">{text} </span>
        <span className="heading-gradient-light font-medium">{highlight}</span>
      </span>
    </Reveal>
  );
}
