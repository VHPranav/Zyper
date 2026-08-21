"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

// Curated high-resolution stock images from Pexels & Unsplash representing Zypher's divisions
const column1Images = [
  {
    src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Modern residential architecture",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Contemporary villa exterior",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Modern home architecture",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Minimalist residential facade",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Luxury estate architecture",
    aspect: "aspect-[4/5]",
  },
];

const column2Images = [
  {
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Interior design excellence",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Modern luxury living space",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Premium kitchen interior",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Contemporary living room",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Master bedroom suite design",
    aspect: "aspect-[3/4]",
  },
];

const column3Images = [
  {
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Construction precision and engineering",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Architectural glass facade",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Luxury swimming pool and patio",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Minimalist spiral staircase",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Contemporary architectural exterior",
    aspect: "aspect-[4/5]",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative"
      style={{
        background: "#FAF7F2",
        paddingBlock: "clamp(80px, 10vw, 140px)",
        paddingInline: "clamp(20px, 4vw, 80px)",
      }}
      aria-labelledby="gallery-heading"
    >
      <Reveal>
          {/* Main Card Container — full width within section padding */}
          <div
            className="w-full relative overflow-hidden bg-[#FAF7F2] transition-all duration-300"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "36px",
              minHeight: "520px",
              boxShadow: "0 8px 40px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch h-full">
              {/* Left Side: 3-Column Vertical Carousel (7 of 12 cols) */}
              <div className="lg:col-span-7 h-[400px] sm:h-[460px] lg:h-[520px] relative overflow-hidden">
                {/* Right-edge fade — wide enough to dissolve col 3 images before text */}
                <div
                  className="absolute inset-y-0 right-0 w-32 pointer-events-none z-20"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(250,247,242,0) 0%, rgba(250,247,242,0.6) 40%, #FAF7F2 100%)",
                  }}
                />
                {/* Top gradient */}
                <div
                  className="absolute inset-x-0 top-0 h-20 pointer-events-none z-20"
                  style={{
                    background:
                      "linear-gradient(180deg, #FAF7F2 0%, rgba(250, 247, 242, 0.85) 40%, rgba(250, 247, 242, 0) 100%)",
                  }}
                />
                {/* Bottom gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 h-20 pointer-events-none z-20"
                  style={{
                    background:
                      "linear-gradient(0deg, #FAF7F2 0%, rgba(250, 247, 242, 0.85) 40%, rgba(250, 247, 242, 0) 100%)",
                  }}
                />

                {/* 3 Animated Columns */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 h-full px-4 pt-4 pb-4 gallery-carousel-wrap">
                  {/* Column 1: Up */}
                  <div className="flex flex-col gap-2.5 sm:gap-3 gallery-col-up">
                    {[...column1Images, ...column1Images].map((item, idx) => (
                      <div
                        key={`c1-${idx}`}
                        className={`relative w-full ${item.aspect} rounded-xl overflow-hidden shrink-0 group`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 30vw, 14vw"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Column 2: Down */}
                  <div className="flex flex-col gap-2.5 sm:gap-3 gallery-col-down -mt-16">
                    {[...column2Images, ...column2Images].map((item, idx) => (
                      <div
                        key={`c2-${idx}`}
                        className={`relative w-full ${item.aspect} rounded-xl overflow-hidden shrink-0 group`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 30vw, 14vw"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Column 3: Up slow */}
                  <div className="flex flex-col gap-2.5 sm:gap-3 gallery-col-up-slow -mt-8">
                    {[...column3Images, ...column3Images].map((item, idx) => (
                      <div
                        key={`c3-${idx}`}
                        className={`relative w-full ${item.aspect} rounded-xl overflow-hidden shrink-0 group`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 30vw, 14vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Typography & CTA (5 of 12 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center py-10 px-6 lg:px-10 xl:px-12 relative z-10 bg-[#FAF7F2]">
                <div style={{ width: "100%", maxWidth: "340px" }}>
                  {/* Heading */}
                  <Reveal delay={0.2} className="mb-4">
                    <h2
                      id="gallery-heading"
                      className="font-semibold tracking-[-0.025em]"
                      style={{
                        fontSize: "clamp(1.2rem, 1.6vw, 1.75rem)",
                        lineHeight: "1.3",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      <span className="heading-gradient-dark font-semibold">
                        Our work speaks for itself.
                      </span>{" "}
                      <span style={{ color: "rgba(0, 0, 0, 0.4)", fontWeight: 500 }}>
                        A curated look at our mission across all divisions.
                      </span>
                    </h2>
                  </Reveal>
                  {/* Body */}
                  <Reveal delay={0.3} className="mb-7">
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "0.875rem",
                        lineHeight: "1.7",
                        color: "rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Completed and ongoing projects across residential architecture,
                      interior design, and construction precision — all in one place.
                    </p>
                  </Reveal>
                  {/* CTA */}
                  <Reveal delay={0.4}>
                    <Link
                      href="/real-estate"
                      className="btn btn-dark w-fit group"
                    >
                      <span>Explore Projects</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
    </section>
  );
}
