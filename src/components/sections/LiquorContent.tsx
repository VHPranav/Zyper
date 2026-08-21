"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  { number: "01", title: "Licensed Operations", desc: "All activities conducted under valid state and central licensing frameworks." },
  { number: "02", title: "Quality Assurance", desc: "Rigorous checks at every stage of procurement, storage, and distribution." },
  { number: "03", title: "Ethical Sourcing", desc: "We partner only with brands that meet our standards of authenticity and quality." },
  { number: "04", title: "Responsible Distribution", desc: "Compliance with all regulatory requirements for responsible alcohol distribution." },
];

const areas = [
  "Kochi Metropolitan Area",
  "Thrissur District",
  "Ernakulam & Surrounding",
  "Kozhikode Region",
  "Trivandrum City",
];

export default function LiquorContent() {
  const darkSection = { background: "#0d0b08" };
  const deepSection = { background: "#080604" };

  return (
    <>
      {/* About Beverages */}
      <section
        style={{
          ...darkSection,
          paddingBlock: "clamp(80px, 9vw, 160px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal className="mb-6">
              <p
                className="uppercase tracking-[0.18em]"
                style={{ fontSize: "11px", color: "var(--amber-light)" }}
              >
                About Beverages
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mb-6">
              <h2
                className="font-medium text-white"
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 4rem)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.04em",
                  maxWidth: "440px",
                }}
              >
                Premium spirits, responsibly distributed.
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="mb-6">
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                  lineHeight: "1.7",
                }}
              >
                ZYPER&apos;s Beverages division is engaged in the licensed trading
                and distribution of premium alcoholic products. We operate with
                strict regulatory compliance, quality controls, and an unwavering
                commitment to ethical business practices.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                  lineHeight: "1.7",
                }}
              >
                Our team brings deep industry knowledge and strong distribution
                networks across Kerala, ensuring seamless supply chain operations.
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
                  src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&q=80"
                  alt="Premium spirits collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(8,6,4,0.2)" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        style={{
          ...deepSection,
          paddingBlock: "clamp(80px, 9vw, 160px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
          borderTop: "1px solid rgba(184,134,11,0.12)",
        }}
      >
        <Reveal>
          <p
            className="mb-6 uppercase tracking-[0.18em]"
            style={{ fontSize: "11px", color: "var(--amber-light)" }}
          >
            Quality & Compliance
          </p>
          <h2
            className="font-medium mb-16 text-white"
            style={{
              fontSize: "clamp(2rem, 3.2vw, 3.8rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.04em",
              maxWidth: "500px",
            }}
          >
            Our operating principles.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={i * 0.1}>
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{
                  background: "rgba(184,134,11,0.06)",
                  border: "1px solid rgba(184,134,11,0.14)",
                }}
              >
                <span
                  style={{ color: "var(--amber)", fontSize: "11px", letterSpacing: "0.1em" }}
                >
                  {p.number}
                </span>
                <h3
                  className="text-white font-semibold"
                  style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}
                >
                  {p.title}
                </h3>
                <p
                  style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: "1.65" }}
                >
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Areas of operation */}
      <section
        style={{
          ...darkSection,
          paddingBlock: "clamp(80px, 9vw, 160px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
          borderTop: "1px solid rgba(184,134,11,0.08)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p
                className="mb-6 uppercase tracking-[0.18em]"
                style={{ fontSize: "11px", color: "var(--amber-light)" }}
              >
                Areas of Operation
              </p>
              <h2
                className="font-medium text-white"
                style={{
                  fontSize: "clamp(2rem, 3vw, 3.5rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.04em",
                }}
              >
                Where we operate.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <ul className="flex flex-col">
              {areas.map((area, i) => (
                <Reveal key={area} delay={i * 0.08}>
                  <li
                    className="py-5 flex items-center justify-between group border-b"
                    style={{
                      borderColor: "rgba(184,134,11,0.12)",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "clamp(1.1rem, 1.8vw, 1.8rem)",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    <span className="group-hover:text-white transition-colors duration-200">
                      {area}
                    </span>
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: "var(--amber)" }}
                    >
                      →
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section
        style={{
          ...deepSection,
          paddingBlock: "clamp(80px, 9vw, 140px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
          borderTop: "1px solid rgba(184,134,11,0.08)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <p
                className="mb-6 uppercase tracking-[0.18em]"
                style={{ fontSize: "11px", color: "var(--amber-light)" }}
              >
                Governance & Responsibility
              </p>
              <h2
                className="font-medium text-white mb-8"
                style={{
                  fontSize: "clamp(1.8rem, 2.8vw, 3.2rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.04em",
                  maxWidth: "440px",
                }}
              >
                Responsible commerce is our standard.
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "clamp(0.95rem, 1.1vw, 1.15rem)",
                  lineHeight: "1.7",
                  maxWidth: "440px",
                }}
              >
                We believe that the beverages business carries a social responsibility.
                Every aspect of our distribution — from sourcing to delivery — is conducted
                under full regulatory oversight and ethical frameworks.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col gap-5">
            {["State Excise Compliance", "FSSAI Standards", "Ethical Brand Partnerships", "Anti-Counterfeit Protocols"].map((item, i) => (
              <Reveal key={item} delay={i * 0.09}>
                <div
                  className="flex items-center gap-4 py-4 border-b"
                  style={{ borderColor: "rgba(184,134,11,0.12)" }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--amber)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-white"
                    style={{ fontSize: "clamp(1rem, 1.3vw, 1.25rem)", letterSpacing: "-0.02em" }}
                  >
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <div className="mt-8">
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#000000",
                    background: "linear-gradient(180deg, #FFFFFF 0%, #E2E2E2 100%)",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                    pointerEvents: "auto",
                    transition: "transform 0.2s ease, boxShadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
                  }}
                >
                  <span>Get in touch</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
