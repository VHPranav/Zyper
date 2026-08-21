"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const advantages = [
  {
    number: "01",
    title: "Prime Locations",
    desc: "Strategically selected sites that offer connectivity, growth potential, and lifestyle convenience.",
  },
  {
    number: "02",
    title: "Thoughtful Design",
    desc: "Spaces that balance aesthetics, functionality, and long-term livability for modern families.",
  },
  {
    number: "03",
    title: "Regulatory Compliance",
    desc: "Every project meets and exceeds local building codes, environmental norms, and legal requirements.",
  },
  {
    number: "04",
    title: "Investment Value",
    desc: "Properties built for appreciation — strong locations, quality construction, lasting demand.",
  },
];

const propertyTypes = [
  {
    title: "Residential Villas",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    desc: "Custom-designed homes with premium finishes",
  },
  {
    title: "Apartments",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    desc: "Modern living in thoughtfully planned complexes",
  },
  {
    title: "Commercial Spaces",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    desc: "Professional environments for growing businesses",
  },
];

export default function RealEstateContent() {
  return (
    <>
      {/* About RE */}
      <section
        style={{
          background: "var(--charcoal)",
          paddingBlock: "clamp(80px, 9vw, 160px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal className="mb-6">
              <p className="section-label text-white/40">About Real Estate</p>
            </Reveal>
            <Reveal delay={0.1} className="mb-6">
              <h2
                className="heading-lg text-white font-medium"
                style={{ maxWidth: "500px" }}
              >
                Spaces that reflect how you live.
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
                ZYPER Real Estate develops properties that stand at the intersection
                of design ambition and practical necessity. Every project is conceived with
                the end user&apos;s life in mind — not just the structure.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p
                className="text-white/35"
                style={{
                  fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                  lineHeight: "1.7",
                }}
              >
                We operate with full transparency in pricing, timelines, and documentation
                — because trust is built long before construction begins.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "24px", aspectRatio: "4/3" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80"
                alt="ZYPER Real Estate interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Property types */}
      <section
        style={{
          background: "var(--warm-white)",
          paddingBlock: "clamp(80px, 9vw, 160px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
        }}
      >
        <Reveal>
          <p className="section-label text-[var(--muted-dark)] mb-4">Property Types</p>
          <h2
            className="heading-lg text-[var(--brown-black)] font-medium mb-12"
            style={{ maxWidth: "480px" }}
          >
            What we offer.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {propertyTypes.map((pt, i) => (
            <Reveal key={pt.title} delay={i * 0.12}>
              <div className="group cursor-pointer">
                <div
                  className="relative overflow-hidden mb-5"
                  style={{ borderRadius: "20px", aspectRatio: "4/3" }}
                >
                  <Image
                    src={pt.image}
                    alt={pt.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3
                  className="text-[var(--brown-black)] font-medium mb-2"
                  style={{ fontSize: "1.2rem", letterSpacing: "-0.02em" }}
                >
                  {pt.title}
                </h3>
                <p
                  className="text-[var(--muted-dark)]"
                  style={{ fontSize: "14px", lineHeight: "1.6" }}
                >
                  {pt.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section
        style={{
          background: "var(--concrete)",
          paddingBlock: "clamp(80px, 9vw, 160px)",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
        }}
      >
        <Reveal>
          <p className="section-label text-[var(--muted-dark)] mb-4">Unique advantages</p>
          <h2
            className="heading-lg text-[var(--brown-black)] font-medium mb-12"
            style={{ maxWidth: "480px" }}
          >
            Why choose ZYPER Real Estate.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advantages.map((a, i) => (
            <Reveal key={a.number} delay={i * 0.1}>
              <div
                className="flex flex-col gap-4 p-7"
                style={{
                  borderTop: "1px solid rgba(48,39,31,0.15)",
                }}
              >
                <span className="text-[var(--muted-dark)] text-sm">{a.number}</span>
                <h3
                  className="text-[var(--brown-black)] font-semibold"
                  style={{ fontSize: "1.2rem", letterSpacing: "-0.02em" }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-[var(--muted-dark)]"
                  style={{ fontSize: "14px", lineHeight: "1.65" }}
                >
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
