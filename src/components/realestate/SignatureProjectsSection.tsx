"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const signatureProjects = [
  {
    name: "The Azure Cove",
    location: "Marine Drive / Kochi",
    type: "Waterfront Luxury Villas",
    specs: "4 & 5 BHK · 4,200 – 6,500 sq.ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    name: "Zyper Heights One",
    location: "MG Road / Ernakulam",
    type: "Grade-A Commercial Tower",
    specs: "Corporate Suites & High-Street Retail",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    name: "Serene Meadow Estates",
    location: "Puzhakkal / Thrissur",
    type: "Eco-Luxe Gated Enclave",
    specs: "3 & 4 BHK Luxury Residences",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
];

export default function SignatureProjectsSection() {
  return (
    <section
      style={{
        background: "#FAF7F2",
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
                className="text-[#0A0A0A] font-medium"
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.035em",
                  maxWidth: "560px",
                }}
              >
                <span className="heading-gradient-dark font-semibold">
                  Signature developments.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p
              className="text-black/60 font-normal"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
                lineHeight: "1.65",
                maxWidth: "460px",
              }}
            >
              Explore landmark residential addresses and commercial flagships setting new benchmarks in Kerala.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {signatureProjects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.12}>
              <div className="group rounded-3xl overflow-hidden bg-[#F9F9F8] border border-black/8 hover:border-black/15 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/11" }}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div
                  style={{
                    padding: "clamp(20px, 2.5vw, 32px)",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-black/50 mb-2 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#C28224]" />
                      <span>{project.location}</span>
                    </div>
                    <h3
                      className="text-[#0A0A0A] font-medium mb-1.5"
                      style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-black/60 text-xs mb-4">{project.type}</p>
                  </div>

                  <div className="pt-4 border-t border-black/8 flex items-center justify-between">
                    <span className="text-xs text-black/50 font-normal">
                      {project.specs}
                    </span>
                    <Link
                      href="/contact"
                      className="w-9 h-9 rounded-full bg-black/5 text-[#0A0A0A] flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-white transition-all"
                      aria-label={`Inquire about ${project.name}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
