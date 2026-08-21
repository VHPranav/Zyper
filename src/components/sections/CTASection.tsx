"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";

interface CTASectionProps {
  theme?: "dark" | "light"; // "light" = white background with dark text (default); "dark" = black background with light text
}

export default function CTASection({ theme = "light" }: CTASectionProps) {
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      style={{
        background: isDark ? "#0A0A0A" : "#FAF7F2",
        paddingBlock: "clamp(90px, 11vw, 160px)",
        paddingInline: "clamp(32px, 5vw, 96px)",
      }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1400px] mx-auto flex justify-center">
        {/* Horizontally centered container with left-aligned text */}
        <div className="w-full text-left" style={{ maxWidth: "740px" }}>
          {/* Editorial Heading Statement */}
          <Reveal delay={0.1}>
            <h2
              id="cta-heading"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)",
                lineHeight: "1.28",
                letterSpacing: "-0.36px",
              }}
            >
              <span style={{ color: isDark ? "#FFFFFF" : "#000000" }}>
                We love to communicate and discuss.
              </span>{" "}
              <span style={{ color: isDark ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.4)" }}>
                If you have any questions regarding our projects, investments, or group divisions, book a call to learn more or send us an inquiry.
              </span>
            </h2>
          </Reveal>

          {/* 2 Left-Aligned Buttons inside Centered Column */}
          <Reveal delay={0.2}>
            <div
              className="flex flex-wrap items-center justify-start gap-4"
              style={{ marginTop: "clamp(32px, 4vw, 44px)" }}
            >
              {/* Primary Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 transition-all duration-300"
                style={{
                  height: "56px",
                  paddingInline: "28px",
                  borderRadius: "100px",
                  background: isDark ? "#FFFFFF" : "#000000",
                  color: isDark ? "#0A0A0A" : "#FCF8F1",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14.4px",
                  fontWeight: 500,
                  boxShadow: isDark ? "0 4px 16px rgba(255, 255, 255, 0.15)" : "0 4px 16px rgba(0, 0, 0, 0.12)",
                }}
              >
                <span>Book a free call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Outline Button */}
              <a
                href={`mailto:${siteConfig.email}`}
                className={`inline-flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  isDark ? "hover:bg-white/10" : "hover:bg-black/5"
                }`}
                style={{
                  height: "56px",
                  paddingInline: "28px",
                  borderRadius: "100px",
                  background: "transparent",
                  border: isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.18)",
                  color: isDark ? "#FFFFFF" : "#000000",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "14.4px",
                  fontWeight: 500,
                }}
              >
                <Mail className={`w-4 h-4 ${isDark ? "text-white/60" : "text-black/60"}`} />
                <span>Email Us</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
