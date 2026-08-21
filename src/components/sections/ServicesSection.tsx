"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/siteData";
import { Reveal } from "@/components/ui/Reveal";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ background: "#FAF7F2", paddingBlock: "clamp(100px, 12vw, 180px)" }}
    >
      <div style={{ paddingInline: "clamp(32px, 5vw, 96px)" }}>
        <Reveal>
          <div style={{ paddingBottom: "64px" }}>
            <h2
              id="services-heading"
              className="heading-xl font-medium"
              style={{ maxWidth: "560px", lineHeight: "1.1" }}
            >
              <span className="heading-gradient-dark font-semibold">
                What we do.
              </span>
            </h2>
          </div>
        </Reveal>
      </div>

      {/* Desktop: service panels with background matching section & images visible only on hover */}
      <div
        className="hidden lg:flex relative overflow-hidden"
        style={{
          height: "70vh",
          minHeight: "540px",
          maxHeight: "720px",
          paddingInline: "clamp(32px, 5vw, 96px)",
          paddingBottom: "24px",
          gap: "24px",
        }}
        role="list"
        aria-label="Services"
      >
        {services.map((service) => (
          <ServicePanel
            key={service.id}
            service={service}
            isActive={activeId === service.id}
            isAnyActive={activeId !== null}
            onEnter={() => setActiveId(service.id)}
            onLeave={() => setActiveId(null)}
          />
        ))}
      </div>

      {/* Mobile: Accordion */}
      <div className="lg:hidden" style={{ paddingBottom: "64px" }} role="list" aria-label="Services">
        {services.map((service) => (
          <MobileServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

// ─── Desktop Service Panel ───
function ServicePanel({
  service,
  isActive,
  isAnyActive,
  onEnter,
  onLeave,
}: {
  service: (typeof services)[number];
  isActive: boolean;
  isAnyActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.article
      className="service-panel cursor-pointer"
      animate={{
        flex: isActive ? 1.5 : isAnyActive ? 0.8 : 1,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",
        border: isActive
          ? "1px solid rgba(0, 0, 0, 0.15)"
          : "1px solid rgba(0, 0, 0, 0.08)",
        background: "#F7F5F1",
        height: "100%",
        boxShadow: isActive ? "0 16px 40px rgba(0, 0, 0, 0.1)" : "none",
      }}
      role="listitem"
      aria-label={service.title}
    >
      {/* Image: ONLY visible when hovered */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="33vw"
        />
        {/* Dark overlay for crisp text legibility over image on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.55) 60%, rgba(10,8,6,0.35) 100%)",
          }}
        />
      </motion.div>

      {/* Content with guaranteed 36px bottom and 28px side padding */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "36px 28px",
          gap: "16px",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        <p
          className="uppercase font-mono"
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            margin: 0,
            color: isActive ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.4)",
            transition: "color 0.3s ease",
          }}
        >
          0{service.id}
        </p>
        <h3
          style={{
            fontSize: "clamp(1.15rem, 1.4vw, 1.65rem)",
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
            margin: 0,
            fontWeight: 500,
            color: isActive ? "#FFFFFF" : "#0A0A0A",
            transition: "color 0.3s ease",
          }}
        >
          {service.title}
        </h3>
        <motion.p
          animate={{
            opacity: isActive ? 1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.6",
            margin: 0,
            color: isActive ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.55)",
            transition: "color 0.3s ease",
          }}
        >
          {service.description}
        </motion.p>
      </div>
    </motion.article>
  );
}

// ─── Mobile Accordion Item ───
function MobileServiceItem({
  service,
}: {
  service: (typeof services)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <article role="listitem" style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between transition-colors duration-200"
        style={{
          paddingBlock: "28px",
          paddingInline: "clamp(24px, 3.2vw, 64px)",
          background: "#FAF7F2",
        }}
        aria-expanded={open}
      >
        <div className="flex items-center gap-6">
          <span className="text-black/40 text-xs tabular-nums font-mono">0{service.id}</span>
          <h3
            className="text-black font-medium"
            style={{
              fontSize: "clamp(1.2rem, 4.5vw, 1.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {service.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-black/40 text-2xl font-light"
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            style={{ background: "#F9F9F8" }}
          >
            <div
              className="relative h-56 my-6 rounded-2xl overflow-hidden border border-black/10"
              style={{ marginInline: "clamp(24px, 3.2vw, 64px)" }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <p
              className="text-black/70"
              style={{
                paddingInline: "clamp(24px, 3.2vw, 64px)",
                paddingBottom: "32px",
                fontSize: "1rem",
                lineHeight: "1.7",
              }}
            >
              {service.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
