"use client";

import { Clock, IndianRupee, ShieldCheck, Recycle, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  { icon: Clock, title: "On-Time Doorstep Service", desc: "We arrive when we say we will and collect from your doorstep, so you never have to haul scrap anywhere." },
  { icon: IndianRupee, title: "Best Market Price", desc: "Get a fair, quick valuation for your scrap, so you earn from what you no longer need." },
  { icon: ShieldCheck, title: "Government Approved & Compliant", desc: "A compliant process with the proper documentation, including for condemned vehicles and industrial scrap." },
  { icon: Recycle, title: "Eco-Friendly & Responsible", desc: "Responsible recycling and disposal that recovers value and reduces environmental impact." },
  { icon: Users, title: "Trusted Across Sectors", desc: "Trusted by flats, houses, companies and Government sectors across Bengaluru." },
];

export default function ScrapWhyChoose() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        paddingBlock: "clamp(120px, 14vw, 220px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
      }}
    >
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        style={{ marginBottom: "clamp(64px, 7vw, 96px)" }}
      >
        <Reveal delay={0.1}>
          <h2
            className="text-white font-medium"
            style={{ fontSize: "clamp(2rem, 3.2vw, 3.2rem)", lineHeight: "1.1", letterSpacing: "-0.035em", maxWidth: "560px" }}
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
              Zyper Scrap?
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="text-white/55"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)", lineHeight: "1.65", maxWidth: "460px" }}
          >
            Easy for you, fair on price and responsible with every kilo we collect.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {reasons.map((r, i) => {
          const Icon = r.icon;
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
                  <Icon className="w-4 h-4 text-white/70" />
                </div>
                <h3 className="text-white font-medium mb-2" style={{ fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                  {r.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14.5px", lineHeight: "1.7" }}>
                  {r.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
