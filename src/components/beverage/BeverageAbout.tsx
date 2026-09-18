"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export default function BeverageAbout() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        paddingBlock: "clamp(120px, 14vw, 220px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Reveal delay={0.1} className="mb-10 lg:mb-12">
            <h2
              className="text-white font-medium"
              style={{
                fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                lineHeight: "1.12",
                letterSpacing: "-0.035em",
                maxWidth: "520px",
              }}
            >
              <span className="heading-gradient-light font-semibold">
                The Care Behind Every Bottle We Deliver
              </span>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-8" style={{ maxWidth: "480px" }}>
            <Reveal delay={0.2}>
              <p
                className="text-white/80 font-normal"
                style={{
                  fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)",
                  lineHeight: "1.75",
                  letterSpacing: "-0.01em",
                }}
              >
                ZYPER Beverages manages the licensed trading and distribution of
                wine, spirits and beer across Bengaluru and Karnataka, at a
                moment when the state&apos;s beverage market is changing faster
                than it has in years. Bengaluru&apos;s reputation as one of
                India&apos;s most active craft beer markets keeps growing, and
                rising incomes among the city&apos;s professional base are
                driving steady demand for premium and imported labels.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                className="text-white/50 font-normal"
                style={{
                  fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                  lineHeight: "1.7",
                  letterSpacing: "-0.01em",
                }}
              >
                ZYPER Beverages was built for exactly this kind of market,
                moving fast enough to keep up with shifting demand while never
                loosening its grip on compliance, provenance or storage quality
                along the way. The same standards extend beyond Karnataka too,
                with export shipments reaching markets like Tanzania, Kenya and
                Djibouti under confirmed letter of credit arrangements.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div
              className="relative overflow-hidden group shadow-2xl"
              style={{
                borderRadius: "28px",
                aspectRatio: "16/10",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&q=80"
                alt="Premium spirits collection"
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
