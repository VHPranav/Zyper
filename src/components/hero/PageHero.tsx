"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string[];
  subtitle?: string;
  videoUrl: string;
  posterUrl: string;
}

export default function PageHero({ label, title, subtitle, videoUrl, posterUrl }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden w-full"
      style={{ minHeight: "100svh", height: "100svh" }}
      aria-label={`${label} hero`}
    >
      {/* Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoUrl} type="video/mp4" />
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
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        {subtitle && (
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
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
