"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { divisions } from "@/data/siteData";
import { Reveal } from "@/components/ui/Reveal";

export default function DivisionsSection() {
  const [activeId, setActiveId] = useState(divisions[0].id);
  const active = divisions.find((d) => d.id === activeId)!;

  return (
    <section
      id="divisions"
      style={{
        background: "#FAF7F2",
        paddingBlock: "clamp(120px, 13vw, 200px)",
      }}
      aria-labelledby="divisions-heading"
    >
      <div style={{ paddingInline: "clamp(32px, 5vw, 96px)" }}>
        {/* Top grid: categories left, heading right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 lg:mb-20">
          {/* Category list */}
          <div className="lg:col-span-4">
            <Reveal delay={0}>
              <ul className="flex flex-col gap-2" role="tablist" aria-label="Divisions">
                {divisions.map((div) => (
                  <li key={div.id} role="presentation">
                    <button
                      role="tab"
                      aria-selected={activeId === div.id}
                      aria-controls={`division-panel-${div.id}`}
                      onClick={() => setActiveId(div.id)}
                      className="text-left w-full group transition-all duration-200"
                      style={{
                        fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                        fontWeight: activeId === div.id ? 600 : 400,
                        color:
                          activeId === div.id
                            ? "var(--brown-black)"
                            : "var(--muted-dark)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <motion.span
                          animate={{ x: activeId === div.id ? 4 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {div.label}
                        </motion.span>
                        {activeId === div.id && (
                          <motion.span
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[var(--muted-dark)]"
                          >
                            →
                          </motion.span>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Heading + description */}
          <div className="lg:col-span-8 flex flex-col lg:items-end lg:text-right">
            <AnimatePresence mode="wait">
              <motion.h2
                id="divisions-heading"
                key={`h-${activeId}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="heading-lg"
                style={{ maxWidth: "640px" }}
              >
                <span className="heading-gradient-dark font-medium">
                  {active.headline}
                </span>
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>

        {/* Image gallery + description row */}
        <div
          id={`division-panel-${activeId}`}
          role="tabpanel"
          aria-label={active.label}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Images */}
            <div className="lg:col-span-8 flex gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img1-${activeId}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 overflow-hidden group"
                  style={{ borderRadius: "16px", aspectRatio: "4/5" }}
                >
                  <Image
                    src={active.image1}
                    alt={active.label}
                    width={600}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`img2-${activeId}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 overflow-hidden group"
                  style={{ borderRadius: "16px", aspectRatio: "4/5" }}
                >
                  <Image
                    src={active.image2}
                    alt={active.label}
                    width={600}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description + CTA */}
            <div className="lg:col-span-4 flex flex-col justify-end gap-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeId}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[var(--muted-dark)]"
                  style={{
                    fontSize: "clamp(0.95rem, 1.1vw, 1.15rem)",
                    lineHeight: "1.65",
                  }}
                >
                  {active.description}
                </motion.p>
              </AnimatePresence>

              <div>
                <Link
                  href={active.href}
                  className="btn btn-dark"
                >
                  <span>Explore {active.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
