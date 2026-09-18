"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { stats } from "@/data/siteData";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative"
      style={{
        background: "#FAF7F2",
        paddingBlock: "clamp(100px, 12vw, 180px)",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
      }}
      aria-label="Company statistics"
    >
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12"
        style={{
          paddingInline: "clamp(32px, 5vw, 96px)",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        {stats.map((stat, i) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function StatItem({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  // Extract the numeric portion and any trailing suffix (e.g. "14+" -> 14 and "+")
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? numericMatch[2] : "";

  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (!inView || targetNumber === null) return;

    const controls = animate(0, targetNumber, {
      duration: 1.6,
      delay: delay + 0.15,
      ease: [0.16, 1, 0.3, 1], // Smooth premium ease-out curve
      onUpdate: (latest) => {
        setDisplayNumber(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [inView, targetNumber, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <span
        className="font-medium tabular-nums text-[#0A0A0A]"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(3.2rem, 5.5vw, 5.8rem)",
          letterSpacing: "-0.055em",
          lineHeight: 1,
        }}
      >
        {targetNumber !== null ? `${displayNumber}${suffix}` : value}
      </span>
      <span
        className="mt-3 uppercase tracking-widest font-mono text-black/50"
        style={{ fontSize: "11px", letterSpacing: "0.12em" }}
      >
        {label}
      </span>
    </motion.div>
  );
}
