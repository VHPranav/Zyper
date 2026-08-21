"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/data/siteData";

const emptySubscribe = () => () => {};

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 30;

      setIsScrolled(currentScrollY > scrollThreshold);

      // /liquor is always dark themed
      if (pathname === "/liquor") {
        setIsLightBg(false);
      } else if (pathname === "/contact") {
        // /contact starts directly as a white page from top
        setIsLightBg(true);
      } else {
        // On pages with a dark 100svh Hero (/, /about, /real-estate, /construction):
        // When scrollY >= window.innerHeight - 90, user has entered the white content!
        if (currentScrollY >= window.innerHeight - 90) {
          setIsLightBg(true);
        } else {
          setIsLightBg(false);
        }
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, pathname]);

  interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
    key?: string;
  }

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Construction", href: "/construction" },
    { name: "Beverages", href: "/liquor" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesList = [
    {
      title: "Real Estate Development",
      desc: "Luxury residential villas, townhouses, and commercial developments.",
      icon: "🏢",
      href: "/real-estate",
    },
    {
      title: "Turnkey Construction",
      desc: "High-grade structural engineering, planning, and on-time builds.",
      icon: "🏗️",
      href: "/construction",
    },
    {
      title: "Beverages & Spirits",
      desc: "Licensed distribution of premium alcoholic beverages across Kerala.",
      icon: "🍷",
      href: "/liquor",
    },
    {
      title: "Interior Architecture",
      desc: "Bespoke interior design, spatial layout, and custom lighting.",
      icon: "✨",
      href: "/real-estate",
    },
    {
      title: "Landscape Curation",
      desc: "Private botanical gardens, infinity pools, and outdoor dining lounges.",
      icon: "🌿",
      href: "/construction",
    },
    {
      title: "Asset & Property Care",
      desc: "Comprehensive real estate management, leasing, and maintenance.",
      icon: "🗝️",
      href: "/real-estate",
    },
  ];

  const handleAction = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    router.push("/contact");
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          opacity: isVisible ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        <div style={{ width: "100%", padding: "16px 24px 8px" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "64px",
              position: "relative",
              pointerEvents: "auto",
            }}
          >
            {/* ── LEFT: LOGO ── */}
            <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", pointerEvents: "auto" }}>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  pointerEvents: "auto",
                  transition: "all 0.3s ease",
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: isLightBg ? "#0A0A0A" : "#FFFFFF",
                    textTransform: "uppercase",
                    transition: "color 0.3s ease",
                  }}
                >
                  {siteConfig.name}
                </span>
                <span
                  style={{
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    letterSpacing: "0.25em",
                    color: isLightBg ? "rgba(10, 10, 10, 0.55)" : "rgba(255, 255, 255, 0.6)",
                    textTransform: "uppercase",
                    marginTop: "-2px",
                    transition: "color 0.3s ease",
                  }}
                >
                  VENTURES
                </span>
              </Link>
            </div>

            {/* ── CENTER: INFOSYS GLASSMORPHISM NAV CAPSULE ── */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <nav
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  padding: isScrolled ? "10px 24px" : "12px 28px",
                  borderRadius: "62.5rem",
                  border: isScrolled
                    ? "1px solid rgba(255, 255, 255, 0.22)"
                    : "1px solid rgba(255, 255, 255, 0.15)",
                  background: isScrolled
                    ? "rgba(18, 18, 18, 0.88)"
                    : "rgba(18, 18, 18, 0.55)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  boxShadow: isScrolled
                    ? "0 16px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : "0 10px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  pointerEvents: "auto",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="desktop-glass-nav"
              >
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname?.startsWith(item.href));

                  if (item.hasDropdown) {
                    return (
                      <div
                        key={item.name}
                        style={{ position: "relative" }}
                        onMouseEnter={() => setActiveDropdown(item.key || null)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <Link
                          href={item.href}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: isActive ? 700 : 600,
                            color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.75)",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            padding: "4px 0",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              (e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.75)";
                            }
                          }}
                        >
                          <span>{item.name}</span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              transition: "transform 0.3s ease",
                              transform: activeDropdown === item.key ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </Link>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.75)",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        padding: "4px 0",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.75)";
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* ── RIGHT: INFOSYS CTA BUTTON + MOBILE TOGGLE ── */}
            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", pointerEvents: "auto" }}>
              <button
                type="button"
                onClick={handleAction}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: isLightBg ? "#FFFFFF" : "#000000",
                  background: isLightBg ? "#000000" : "linear-gradient(180deg, #FFFFFF 0%, #E2E2E2 100%)",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: isLightBg ? "0 8px 20px rgba(0, 0, 0, 0.15)" : "0 8px 20px rgba(0, 0, 0, 0.3)",
                  pointerEvents: "auto",
                  transition: "all 0.3s ease",
                }}
                className="desktop-cta-btn"
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = isLightBg ? "0 12px 28px rgba(0, 0, 0, 0.25)" : "0 12px 28px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = isLightBg ? "0 8px 20px rgba(0, 0, 0, 0.15)" : "0 8px 20px rgba(0, 0, 0, 0.3)";
                }}
              >
                <span>Start a Chat</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isLightBg ? "#FFFFFF" : "#000000"} strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                style={{
                  minWidth: "44px",
                  minHeight: "44px",
                  padding: "10px",
                  borderRadius: "12px",
                  background: isLightBg ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.18)",
                  color: isLightBg ? "#0A0A0A" : "#FFFFFF",
                  border: isLightBg ? "1px solid rgba(0, 0, 0, 0.12)" : "1px solid rgba(255, 255, 255, 0.25)",
                  cursor: "pointer",
                  pointerEvents: "auto",
                  touchAction: "manipulation",
                  position: "relative",
                  zIndex: 120,
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                  WebkitTapHighlightColor: "transparent",
                }}
                className="mobile-toggle-btn"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── SERVICES GLASS PORTAL DROPDOWN ── */}
      {mounted &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: "84px",
              left: "50%",
              width: "90vw",
              maxWidth: "840px",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              background: "rgba(20, 20, 20, 0.95)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              zIndex: 9999,
              overflow: "hidden",
              pointerEvents: "auto",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              opacity: activeDropdown === "services" ? 1 : 0,
              visibility: activeDropdown === "services" ? "visible" : "hidden",
              transform: activeDropdown === "services" ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-10px)",
            }}
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* Background Ambient Orbs */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
                opacity: 0.2,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 10,
                padding: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "14px",
              }}
              className="services-portal-grid"
            >
              {servicesList.map((svc) => (
                <Link
                  key={svc.title}
                  href={svc.href}
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "16px",
                    borderRadius: "1rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255, 255, 255, 0.1)";
                    el.style.borderColor = "rgba(255, 255, 255, 0.25)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255, 255, 255, 0.04)";
                    el.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {svc.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255, 255, 255, 0.55)",
                        marginTop: "4px",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {svc.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>,
          document.body
        )}

      {/* ── MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "auto" }}>
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            style={{
              position: "fixed",
              top: "80px",
              left: "16px",
              right: "16px",
              background: "rgba(24, 24, 24, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: "1.5rem",
              padding: "24px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    textDecoration: "none",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              onClick={handleAction}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                background: "#FFFFFF",
                color: "#000000",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Start a Chat →
            </button>
          </div>
        </div>
      )}

      <style>{`
        .mobile-toggle-btn { display: none !important; }
        @media (max-width: 900px) {
          .desktop-glass-nav, .desktop-cta-btn { display: none !important; }
          .mobile-toggle-btn { display: inline-flex !important; }
          .services-portal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
