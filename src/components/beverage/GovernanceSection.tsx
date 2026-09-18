"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, FileCheck, Lock, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const governanceItems = [
  {
    title: "State Excise Compliance",
    desc: "Every shipment moves under valid excise clearance and transport permits, fully documented from warehouse to final delivery.",
    icon: ShieldCheck,
  },
  {
    title: "FSSAI Safety Standards",
    desc: "Storage and handling follow certified food safety protocols, with shelf life tracked from arrival through to dispatch.",
    icon: FileCheck,
  },
  {
    title: "Anti-Counterfeit Protocols",
    desc: "Serialized dispatch records and authenticity checks keep counterfeit or unverified stock out of the supply chain entirely.",
    icon: Lock,
  },
  {
    title: "Authorized Channel Sourcing",
    desc: "Every brand relationship runs through direct, authorized partnerships, with no parallel imports or unverified stock anywhere in the chain.",
    icon: PackageCheck,
  },
];

export default function GovernanceSection() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        paddingBlock: "clamp(120px, 14vw, 220px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1} className="mb-8">
            <h2
              className="font-medium text-white"
              style={{
                fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                lineHeight: "1.12",
                letterSpacing: "-0.035em",
                maxWidth: "440px",
              }}
            >
              Responsible commerce is our{" "}
              <span className="heading-gradient-light font-semibold">
                benchmark.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="mb-10">
            <p
              className="font-normal"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                lineHeight: "1.75",
                maxWidth: "440px",
              }}
            >
              Every operation, from bonded procurement to final delivery, is
              audited against state and national regulation, because this
              business carries a responsibility that goes beyond simply moving
              stock.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/contact"
              className="btn btn-light w-fit"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Right Column: 2x2 Cards Grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {governanceItems.map((item, i) => {
              const IconComp = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.09} className="h-full">
                  <div
                    className="rounded-3xl flex flex-col justify-between h-full transition-all duration-300 bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    style={{
                      padding: "clamp(24px, 2.5vw, 36px)",
                      minHeight: "220px",
                    }}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-white/[0.06] text-[#DF9D32]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3
                        className="text-white font-medium text-base sm:text-lg mb-2"
                        style={{ letterSpacing: "-0.015em" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.65" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
