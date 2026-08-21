"use client";

import Link from "next/link";
import {
  User,
  Bell,
  TrendingUp,
  Building2,
  HardHat,
  Wine,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface FooterProps {
  theme?: "dark" | "light"; // "dark" = dark card on white background (default); "light" = white card on black background (liquor page)
}

export default function Footer({ theme = "dark" }: FooterProps) {
  const year = new Date().getFullYear();
  const isLightCard = theme === "light";

  const socialLinks = [
    {
      label: "Instagram",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      style={{
        background: isLightCard ? "#0A0A0A" : "#FAF7F2",
        paddingBlock: "clamp(24px, 3.5vw, 48px)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      aria-label="Site footer"
    >
      {/* Floating Card */}
      <div
        className={`w-[95%] ${isLightCard ? "text-[#0A0A0A]" : "text-white"}`}
        style={{
          background: isLightCard ? "#FAF7F2" : "#000000",
          borderRadius: "32px",
          padding: "clamp(32px, 4vw, 56px)",
          border: isLightCard
            ? "1px solid rgba(0, 0, 0, 0.08)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: isLightCard
            ? "0 24px 60px rgba(0, 0, 0, 0.5)"
            : "0 24px 60px rgba(0, 0, 0, 0.35)",
        }}
      >
        {/* ── Top Section: 3-col grid ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ gap: "clamp(32px, 4vw, 60px)", marginBottom: "clamp(32px, 4vw, 44px)" }}
        >
          {/* Col 1: Brand + Key Stats (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ background: isLightCard ? "#000000" : "#FFFFFF" }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: isLightCard ? "#FFFFFF" : "#000000" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: isLightCard ? "#0A0A0A" : "#FCF8F1",
                }}
              >
                zyper.
              </span>
            </div>

            {/* Stat Bullets */}
            <div className="flex flex-col" style={{ gap: "18px" }}>
              <div className="flex items-center gap-3">
                <User
                  style={{
                    width: "18px",
                    height: "18px",
                    color: isLightCard ? "rgba(10,10,10,0.5)" : "rgba(252,248,241,0.6)",
                    flexShrink: 0,
                  }}
                  strokeWidth={1.5}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: isLightCard ? "rgba(10,10,10,0.75)" : "rgba(252,248,241,0.75)",
                  }}
                >
                  Combined across all platforms: 15k+ clients &amp; network
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Bell
                  style={{
                    width: "18px",
                    height: "18px",
                    color: isLightCard ? "rgba(10,10,10,0.5)" : "rgba(252,248,241,0.6)",
                    flexShrink: 0,
                  }}
                  strokeWidth={1.5}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: isLightCard ? "rgba(10,10,10,0.75)" : "rgba(252,248,241,0.75)",
                  }}
                >
                  Daily: Active client inquiries &amp; consultation support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp
                  style={{
                    width: "18px",
                    height: "18px",
                    color: isLightCard ? "rgba(10,10,10,0.5)" : "rgba(252,248,241,0.6)",
                    flexShrink: 0,
                  }}
                  strokeWidth={1.5}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: isLightCard ? "rgba(10,10,10,0.75)" : "rgba(252,248,241,0.75)",
                  }}
                >
                  Growth: 15+ years of continuous organic expansion
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 lg:col-start-7 flex flex-col">
            <p
              className="uppercase font-mono font-semibold"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: isLightCard ? "rgba(10,10,10,0.4)" : "rgba(252,248,241,0.35)",
                marginBottom: "20px",
              }}
            >
              Navigation
            </p>
            <ul className="flex flex-col" style={{ gap: "16px" }}>
              {[
                { label: "Real Estate", href: "/real-estate" },
                { label: "Construction", href: "/construction" },
                { label: "Beverages & Spirits", href: "/liquor" },
                { label: "About Group", href: "/#about" },
                { label: "Capabilities & Services", href: "/#services" },
                { label: "Contact Us", href: "/#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13.5px",
                      lineHeight: "18px",
                      color: isLightCard ? "#0A0A0A" : "#FCF8F1",
                      textDecoration: "none",
                      transition: "opacity 0.18s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.6"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources & Legal */}
          <div className="lg:col-span-3 lg:col-start-10 flex flex-col">
            <p
              className="uppercase font-mono font-semibold"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: isLightCard ? "rgba(10,10,10,0.4)" : "rgba(252,248,241,0.35)",
                marginBottom: "20px",
              }}
            >
              Resources &amp; Legal
            </p>
            <ul className="flex flex-col" style={{ gap: "16px" }}>
              {[
                { label: "Project Gallery", href: "/#gallery" },
                { label: "Our Philosophy", href: "/#about" },
                { label: `Contact (${siteConfig.email})`, href: `mailto:${siteConfig.email}`, external: true },
                { label: "Privacy Policy", href: "/#" },
                { label: "Terms & Conditions", href: "/#" },
                { label: "Regulatory & RERA", href: "/#" },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  {external ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13.3px",
                        lineHeight: "18px",
                        color: isLightCard ? "rgba(10,10,10,0.6)" : "rgba(242, 236, 226, 0.5)",
                        textDecoration: "none",
                        transition: "color 0.18s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = isLightCard ? "#0A0A0A" : "rgba(242,236,226,0.85)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isLightCard ? "rgba(10,10,10,0.6)" : "rgba(242,236,226,0.5)"; }}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13.3px",
                        lineHeight: "18px",
                        color: isLightCard ? "rgba(10,10,10,0.6)" : "rgba(242, 236, 226, 0.5)",
                        textDecoration: "none",
                        transition: "color 0.18s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = isLightCard ? "#0A0A0A" : "rgba(242,236,226,0.85)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isLightCard ? "rgba(10,10,10,0.6)" : "rgba(242,236,226,0.5)"; }}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Social Icons ── */}
        <div className="flex items-center gap-3 mb-5">
          {socialLinks.map(({ label, svg }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className={`flex items-center justify-center transition-colors duration-200 ${
                isLightCard
                  ? "text-[#0A0A0A] hover:bg-black/10 bg-black/5"
                  : "text-[#FCF8F1] hover:bg-white/20 bg-white/8"
              }`}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                flexShrink: 0,
              }}
            >
              {svg}
            </a>
          ))}
        </div>

        {/* ── Disclaimer ── */}
        <div
          style={{
            borderTop: isLightCard
              ? "1px solid rgba(0, 0, 0, 0.08)"
              : "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "20px",
            paddingBottom: "24px",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11.5px",
              lineHeight: "16px",
              color: isLightCard ? "rgba(10, 10, 10, 0.55)" : "rgba(252, 248, 241, 0.45)",
              maxWidth: "880px",
            }}
          >
            ZYPER VENTURES is a diversified business group operating across Real Estate, Construction, and Liquor &amp; Beverages in Kerala, India. Built on the core principles of trust, quality, transparency, and long-term value creation. All corporate content and division assets are managed under strict regulatory compliance.
          </p>
        </div>

        {/* ── Bottom Bar: Division Badges + Copyright ── */}
        <div
          className="flex flex-wrap items-center justify-between"
          style={{
            borderTop: isLightCard
              ? "1px solid rgba(0, 0, 0, 0.08)"
              : "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "20px",
            gap: "16px",
          }}
        >
          <div className="flex flex-wrap items-center" style={{ gap: "clamp(16px, 2.5vw, 32px)" }}>
            {[
              { Icon: Building2, label: "REAL ESTATE" },
              { Icon: HardHat, label: "CONSTRUCTION" },
              { Icon: Wine, label: "BEVERAGES" },
              { Icon: CheckCircle2, label: "ISO CERTIFIED" },
              { Icon: ShieldCheck, label: "KERALA OPERATIONAL" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center"
                style={{ gap: "6px" }}
              >
                <Icon
                  style={{
                    width: "13px",
                    height: "13px",
                    color: isLightCard ? "rgba(10, 10, 10, 0.45)" : "rgba(252, 248, 241, 0.45)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: isLightCard ? "rgba(10, 10, 10, 0.55)" : "rgba(252, 248, 241, 0.55)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: isLightCard ? "rgba(10, 10, 10, 0.4)" : "rgba(252, 248, 241, 0.3)",
            }}
          >
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
