"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
        style={{ paddingInline: "clamp(32px, 5vw, 96px)" }}
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      <span
        className="font-medium tabular-nums text-[#0A0A0A]"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(3rem, 5vw, 5.5rem)",
          letterSpacing: "-0.055em",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        className="mt-3 uppercase tracking-widest font-mono text-black/45"
        style={{ fontSize: "11px" }}
      >
        {label}
      </span>
    </motion.div>
  );
}
