"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  y?: number;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.85,
  className = "",
  style,
  y = 40,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── Line-by-line reveal for headings ───
interface SplitRevealProps {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
}

export function SplitReveal({
  lines,
  className = "",
  delay = 0,
  stagger = 0.12,
}: SplitRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="reveal-line">
          <span
            className="reveal-line-inner"
            style={{
              transitionDelay: isInView ? `${delay + i * stagger}s` : "0s",
              transform: isInView ? "translateY(0)" : "translateY(110%)",
            }}
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  );
}
