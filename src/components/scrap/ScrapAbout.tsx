"use client";

import { Home, Landmark, Recycle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { icon: Home, label: "Homes & apartments", desc: "Doorstep collection from flats, villas and residential complexes." },
  { icon: Landmark, label: "Government & corporate", desc: "Scrap vehicles, machinery and office scrap, handled legally." },
  { icon: Recycle, label: "Responsible recycling", desc: "Eco-friendly disposal and recovery of value from old scrap." },
];

export default function ScrapAbout() {
  return (
    <section
      style={{
        background: "var(--charcoal)",
        paddingBlock: "clamp(80px, 9vw, 160px)",
        paddingInline: "clamp(24px, 3.2vw, 64px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <Reveal className="mb-6">
            <p className="section-label text-white/40">About Zyper Scrap Solutions</p>
          </Reveal>
          <Reveal delay={0.1} className="mb-6">
            <h2 className="heading-lg text-white font-medium" style={{ maxWidth: "520px" }}>
              Our newest vertical, built to make scrap simple.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mb-6">
            <p
              className="text-white/50"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)", lineHeight: "1.7" }}
            >
              Zyper Scrap Solutions is a professional and eco-friendly scrap collection and
              recycling service. We believe that old scrap is not waste. It&apos;s value waiting to
              be recovered.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p
              className="text-white/35"
              style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)", lineHeight: "1.7" }}
            >
              Our mission is to make scrap disposal easy, profitable and responsible for everyone,
              from a single household to a Government department.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.label} delay={0.1 + i * 0.1}>
                <div
                  className="rounded-3xl border border-white/8 flex items-center gap-5"
                  style={{ background: "rgba(255,255,255,0.04)", padding: "clamp(20px, 2.2vw, 32px)" }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium" style={{ fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                      {p.label}
                    </h3>
                    <p className="text-white/55 mt-1" style={{ fontSize: "14.5px", lineHeight: "1.55" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
