"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

interface SlideData {
  id: number;
  counter: string;
  video: string;
  poster: string;
  title: string;
  description: string;
  pillTagline: string;
  buttonText: string;
  buttonHref: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    counter: "01 / 03",
    video: "/videos/construction.mp4",
    poster: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    title: "ENGINEERING PRECISION FROM THE GROUND UP",
    description:
      "ZYPER Construction delivers high-grade residential and commercial structures with structural integrity, sustainable engineering, and on-time execution.",
    pillTagline: "Planning your next major construction project?",
    buttonText: "Explore Construction",
    buttonHref: "/construction",
  },
  {
    id: 2,
    counter: "02 / 03",
    video: "/videos/realestate.mp4",
    poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    title: "YOUR VISION OF ELEVATED LIVING",
    description:
      "ZYPER Real Estate develops luxury residential villas, townhouses, and modern commercial spaces crafted with purpose, quality, and timeless architectural design.",
    pillTagline: "Searching for a luxury home or investment?",
    buttonText: "Explore Real Estate",
    buttonHref: "/real-estate",
  },
  {
    id: 3,
    counter: "03 / 03",
    video: "/videos/beverages.mp4",
    poster: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1920&q=80",
    title: "CRAFTED FOR DISCERNING TASTE",
    description:
      "ZYPER Beverages oversees licensed trading and distribution of fine spirits and beverages across Kerala, adhering to strict compliance and ethical standards.",
    pillTagline: "Interested in premium beverage distribution?",
    buttonText: "Explore Beverages",
    buttonHref: "/liquor",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Custom directional cursor state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLeftOfCenter, setIsLeftOfCenter] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [isOverInteractive, setIsOverInteractive] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide || isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [currentSlide, isAnimating]
  );

  const handleNextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const handlePrevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto slide every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [handleNextSlide, isPaused]);

  // Play/pause background HTML5 videos without stream reset
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        video.muted = true;
        if (idx === currentSlide) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  // Custom cursor handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    setMousePos({ x, y });
    setIsLeftOfCenter(x < window.innerWidth / 2);

    const target = e.target as HTMLElement;
    const hoverInteractive = !!(
      target.closest("button") ||
      target.closest("a") ||
      target.closest(".hero-pill-container")
    );
    setIsOverInteractive(hoverInteractive);
  };

  const handleHeroClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest(".hero-pill-container")
    ) {
      return;
    }
    if (isLeftOfCenter) {
      handlePrevSlide();
    } else {
      handleNextSlide();
    }
  };

  const active = slides[currentSlide];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onClick={handleHeroClick}
      onMouseEnter={() => {
        setShowCustomCursor(true);
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        setShowCustomCursor(false);
        setIsPaused(false);
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "720px",
        overflow: "hidden",
        background: "#0d0b08",
        cursor: showCustomCursor && !isOverInteractive ? "none" : "default",
      }}
      aria-label="Hero carousel"
    >
      {/* ── CUSTOM DIRECTIONAL CURSOR ── */}
      <div
        style={{
          position: "fixed",
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          pointerEvents: "none",
          zIndex: 999,
          opacity: showCustomCursor && !isOverInteractive ? 1 : 0,
          transition: "opacity 0.2s ease, transform 0.1s ease-out",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        {isLeftOfCenter ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </div>

      {/* ── CAROUSEL BACKGROUND VIDEOS (3 SLIDES WITH POSTER FALLBACKS) ── */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;

        return (
          <div
            key={slide.id}
            style={{
              position: "absolute",
              inset: 0,
              opacity: isActive ? 1 : 0,
              transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            {/* Poster image fallback */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.poster}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* HTML5 Video element */}
            <video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              poster={slide.poster}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transform: isActive ? "scale(1.02)" : "scale(1.08)",
                transition: "transform 7s ease-out",
              }}
            />
          </div>
        );
      })}

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "8.5rem 3.5rem 4rem 3.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
        className="hero-main-container"
      >
        <div
          key={currentSlide}
          className="hero-text-content"
          style={{
            maxWidth: "980px",
            animation: "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              marginBottom: "1.75rem",
              textTransform: "uppercase",
            }}
          >
            {active.title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
              fontWeight: 400,
              lineHeight: "28px",
              color: "rgba(255, 255, 255, 0.85)",
              marginBottom: "2.5rem",
              maxWidth: "760px",
            }}
          >
            {active.description}
          </p>

          {/* Two Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={active.buttonHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "12px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#000000",
                background: "linear-gradient(180deg, #FFFFFF 0%, #E2E2E2 100%)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                pointerEvents: "auto",
                transition: "transform 0.2s ease, boxShadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
              }}
            >
              <span>{active.buttonText}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "12px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#FFFFFF",
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                pointerEvents: "auto",
                transition:
                  "transform 0.2s ease, boxShadow 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.background = "rgba(255, 255, 255, 0.22)";
                el.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255, 255, 255, 0.12)";
                el.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
              }}
            >
              <span>Start a Chat</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .hero-main-container {
            padding: 7rem 1.5rem 6rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
