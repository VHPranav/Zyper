"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FULL_TEXT = "Real Estate · Construction · Beverages";

export default function BrandPreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [startExit, setStartExit] = useState(false);

  // SVG Curved/Bended Paths (matching template.tsx)
  const initialCurve = "M 0 0 Q 50 0 100 0 L 100 100 L 0 100 Z";
  const targetCurve = "M 0 100 Q 50 140 100 100 L 100 100 L 0 100 Z";

  // 1. Typing animation for tagline
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      index++;
      setDisplayedText(FULL_TEXT.slice(0, index));
      if (index >= FULL_TEXT.length) {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  // 2. Progress counter & video ready sync
  useEffect(() => {
    let currentProgress = 0;
    let isVideoReady = false;

    const handleVideoReady = () => {
      isVideoReady = true;
    };

    window.addEventListener("hero-video-ready", handleVideoReady);

    const checkExistingVideos = () => {
      const videos = document.querySelectorAll("video");
      for (const v of Array.from(videos)) {
        if (v.readyState >= 3) {
          handleVideoReady();
          break;
        }
      }
    };

    checkExistingVideos();

    const interval = setInterval(() => {
      checkExistingVideos();

      if (isVideoReady) {
        currentProgress += 3;
      } else {
        if (currentProgress < 90) {
          currentProgress += 2;
        }
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        setStartExit(true);
        setTimeout(() => {
          setIsLoaded(true);
        }, 900);
      } else {
        setProgress(currentProgress);
      }
    }, 45);

    const safetyTimeout = setTimeout(() => {
      isVideoReady = true;
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      window.removeEventListener("hero-video-ready", handleVideoReady);
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        pointerEvents: startExit ? "none" : "auto",
      }}
    >
      {/* ── Bended SVG Wipe Curtains (Off-White #FAF7F2 + Amber Rim) ── */}
      {startExit ? (
        <svg
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Warm Amber Trailing Curve */}
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

          {/* Layer 2: Main Off-White #FAF7F2 Curtain Sweeping Downward */}
          <motion.path
            fill="#FAF7F2"
            initial={{ d: initialCurve }}
            animate={{ d: targetCurve }}
            transition={{
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </svg>
      ) : null}

      {/* ── Preloader Content Layout ── */}
      <motion.div
        animate={{
          opacity: startExit ? 0 : 1,
          y: startExit ? 30 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          position: "fixed",
          inset: 0,
          background: "#FAF7F2",
          color: "#111111",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(36px, 6vw, 72px)",
        }}
      >
        {/* Top Spacer */}
        <div />

        {/* Center: Typewriter Animated Tagline */}
        <div className="text-center">
          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "clamp(1.35rem, 2.6vw, 2.2rem)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              color: "#111111",
              lineHeight: "1.25",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "2.8rem",
            }}
          >
            <span>{displayedText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.7,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.2em",
                background: "#DF9D32",
                marginLeft: "4px",
                verticalAlign: "middle",
              }}
            />
          </h2>
        </div>

        {/* Bottom: Minimal Numeric Counter & Progress Bar */}
        <div>
          <div className="flex justify-end mb-3.5">
            <span
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                color: "#111111",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {progress}%
            </span>
          </div>

          {/* Progress Bar Line */}
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "rgba(17, 17, 17, 0.08)",
              borderRadius: "2px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #111111 0%, #DF9D32 100%)",
                boxShadow: "0 0 10px rgba(223, 157, 50, 0.4)",
                transition: "width 0.1s linear",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
