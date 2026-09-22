import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/hero/PageHero";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import AboutFullContent from "@/components/sections/AboutFullContent";
import AboutIndustries from "@/components/sections/AboutIndustries";

export const metadata: Metadata = {
  title: {
    absolute: "About Zyper Ventures | Real Estate, Construction and Beverages in Bengaluru",
  },
  description:
    "Get to know Zyper Ventures, a Bengaluru based group spanning real estate, construction and premium beverages, built on integrity, craftsmanship and long term value.",
  keywords: "About Zyper Ventures",
  openGraph: {
    title: "About Zyper Ventures | Real Estate, Construction and Beverages in Bengaluru",
    description:
      "Get to know Zyper Ventures, a Bengaluru based group spanning real estate, construction and premium beverages, built on integrity, craftsmanship and long term value.",
  },
  twitter: {
    title: "About Zyper Ventures | Real Estate, Construction and Beverages in Bengaluru",
    description:
      "Get to know Zyper Ventures, a Bengaluru based group spanning real estate, construction and premium beverages, built on integrity, craftsmanship and long term value.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* SECTION 1: Hero Section */}
        <PageHero
          label="About ZYPER VENTURES"
          title={["BUILT ON WORK", "THAT SPEAKS FOR ITSELF."]}
          subtitle="A group bringing together real estate, construction, and premium beverages, built on execution you can see and trust you can measure."
          videoUrl="/videos/about.mp4"
          posterUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        />

        {/* SECTION 2: Our Story & SECTION 3: What Drives Us */}
        <AboutFullContent />

        {/* SECTION 4: Stats */}
        <StatsSection />

        {/* SECTION 5: Three industries. One standard. */}
        <AboutIndustries />

        {/* SECTION 6 (second Section 5): Let's connect */}
        <CTASection
          heading="Let's connect"
          body="Whether it's acquiring land, taking over an existing site, planning a construction project, or placing a beverage order, we're happy to walk you through how ZYPER works. Book a call or drop us a line, and we'll get back to you directly."
        />
      </main>
      <Footer />
    </>
  );
}
