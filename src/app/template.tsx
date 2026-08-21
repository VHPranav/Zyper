"use client";

import React, { useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  // Always force scroll position to the very top before and during transition
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  // Top-to-Bottom Bended SVG Paths:
  const initialCurve = "M 0 0 Q 50 0 100 0 L 100 100 L 0 100 Z";
  const targetCurve = "M 0 100 Q 50 140 100 100 L 100 100 L 0 100 Z";

  return (
    <>
      {/* ── Top-to-Bottom Bended SVG Wipe Overlay ── */}
      <svg
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          pointerEvents: "none",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Warm Amber/Gold Trailing Curve (Follows slightly behind) */}
        <motion.path
          fill="#ffffffff"
          initial={{ d: initialCurve }}
          animate={{ d: targetCurve }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.08,
          }}
        />

        {/* Layer 2: Obsidian Main Curtain Sweeping from Top to Bottom */}
        <motion.path
          fill="#ffffffff"
          initial={{ d: initialCurve }}
          animate={{ d: targetCurve }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      </svg>

      {/* ── Page Content Entrance ── */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.15,
        }}
        style={{ width: "100%", minHeight: "100svh" }}
      >
        {children}
      </motion.div>
    </>
  );
}
