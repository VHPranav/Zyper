"use client";

import { motion } from "framer-motion";

export default function LiquorHero() {
  return (
    <section
      className="relative overflow-hidden w-full"
      style={{ minHeight: "100svh", height: "100svh" }}
      aria-label="Beverages hero"
    >
      {/* Dark background + video */}
      <div className="absolute inset-0" style={{ background: "#0a0804" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("hero-video-ready"));
            }
          }}
          onPlaying={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("hero-video-ready"));
            }
          }}
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source
            src="/videos/beverages.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-end h-full"
        style={{
          minHeight: "100svh",
          paddingTop: "140px",
          paddingBottom: "clamp(64px, 8vw, 100px)",
          paddingInline: "clamp(32px, 5vw, 96px)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-medium mb-6"
          style={{
            fontSize: "clamp(2.25rem, 4.2vw, 4.25rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            maxWidth: "750px",
          }}
        >
          <span className="block">CRAFTED FOR</span>
          <span className="block" style={{ color: "var(--amber-light)" }}>DISCERNING</span>
          <span className="block">TASTE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 font-normal"
          style={{
            fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
            maxWidth: "680px",
            lineHeight: "1.65",
          }}
        >
          Licensed distribution of premium spirits and beverages across Kerala — quality assured, ethically operated.
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 right-10 flex items-center gap-3"
          style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", letterSpacing: "0.12em" }}
        >
          <span>SCROLL</span>
          <div className="w-12 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
        </motion.div>
      </div>
    </section>
  );
}
