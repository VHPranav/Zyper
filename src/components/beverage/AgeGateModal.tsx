"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const emptySubscribe = () => () => {};

export default function AgeGateModal() {
  const router = useRouter();
  const pathname = usePathname();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isVerifiedState, setIsVerifiedState] = useState(false);

  const isVerified =
    isVerifiedState ||
    (typeof window !== "undefined" &&
      (sessionStorage.getItem("zyper_age_verified") === "true" ||
        localStorage.getItem("zyper_age_verified") === "true"));

  const isOpen = mounted && pathname === "/liquor" && !isVerified;

  // Lock body scroll when age gate is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleConfirm = () => {
    try {
      sessionStorage.setItem("zyper_age_verified", "true");
      localStorage.setItem("zyper_age_verified", "true");
    } catch {}
    setIsVerifiedState(true);
  };

  const handleReject = () => {
    router.push("/");
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(24px, 5vw, 48px)",
            background: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(28px)",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            style={{
              maxWidth: "680px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

            {/* Main Headline */}
            <h1
              id="age-gate-title"
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: "clamp(32px, 5vw, 44px)",
                textShadow: "0 4px 24px rgba(0, 0, 0, 0.8)",
              }}
            >
              You must be 18+ to enter
            </h1>

            {/* Action Buttons Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(20px, 3.5vw, 36px)",
                marginBottom: "clamp(36px, 5vw, 56px)",
                flexWrap: "wrap",
              }}
            >
              {/* YES, I AM Button */}
              <button
                type="button"
                onClick={handleConfirm}
                style={{
                  background: "#D4FA22",
                  color: "#000000",
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "13.5px",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  padding: "15px 34px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  boxShadow: "0 8px 30px rgba(212, 250, 34, 0.35)",
                  transition: "transform 0.15s ease, filter 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.filter = "brightness(1.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              >
                YES, I AM
              </button>

              {/* I AM NOT Button */}
              <button
                type="button"
                onClick={handleReject}
                style={{
                  background: "transparent",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "13.5px",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  padding: "15px 20px",
                  border: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  transition: "opacity 0.15s ease",
                  opacity: 0.9,
                  textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                }}
              >
                I AM NOT
              </button>
            </div>

            {/* Terms and Privacy Disclaimer */}
            <p
              style={{
                maxWidth: "400px",
                textAlign: "center",
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "12.5px",
                lineHeight: "1.75",
                color: "rgba(255, 255, 255, 0.7)",
                margin: "0 auto",
                textShadow: "0 2px 14px rgba(0, 0, 0, 0.8)",
              }}
            >
              By clicking yes you also confirm that you have read and agree to{" "}
              <Link
                href="/terms"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                Zyper&apos;s Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
