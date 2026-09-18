"use client";

import { Users, FileSearch, Camera, MapPin, DollarSign } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: Users,
    desc: "Our land acquisition specialists, legal coordinators, and site staff work for ZYPER directly, not through subcontracted layers, so there is one point of accountability for every corporate land acquisition.",
  },
  {
    icon: DollarSign,
    desc: "A detailed cost breakdown before the acquisition begins, covering land value, statutory charges, and transaction fees, with no hidden costs once the land takeover is underway.",
  },
  {
    icon: FileSearch,
    desc: "Every ZYPER acquisition is backed by thorough title verification and legal due diligence, covering ownership records, encumbrances, and statutory approvals.",
  },
  {
    icon: Camera,
    desc: "Photo and document updates at every milestone of the acquisition, so you stay informed on your land takeover without having to follow up constantly.",
  },
  {
    icon: MapPin,
    desc: "Years of hands-on experience with Bengaluru and Karnataka land records, KIADB processes, zoning norms, and civic approval requirements.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        paddingBlock: "clamp(120px, 14vw, 220px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
      }}
    >
      <div>
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          style={{ marginBottom: "clamp(64px, 7vw, 96px)" }}
        >
          <div>
            <Reveal delay={0.1}>
              <h2
                className="text-white font-medium"
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.035em",
                  maxWidth: "560px",
                }}
              >
                Why choose{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.55) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 600,
                  }}
                >
                  ZYPER Construction?
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p
              className="text-white/55 font-normal"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                lineHeight: "1.65",
                maxWidth: "460px",
              }}
            >
              Our land acquisition specialists, legal coordinators, and site
              staff work for ZYPER directly — one team, one point of
              accountability.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((r, i) => {
            const IconComp = r.icon;
            return (
              <Reveal key={i} delay={i * 0.08} className="h-full">
                <div
                  className="h-full rounded-3xl border border-white/8 hover:border-white/15 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    padding: "clamp(24px, 2.5vw, 36px)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/8 flex items-center justify-center mb-5">
                    <IconComp className="w-4 h-4 text-white/70" />
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "14.5px",
                      lineHeight: "1.7",
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
