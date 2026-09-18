import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/sections/AboutSection";
import DivisionsSection from "@/components/sections/DivisionsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "ZYPER Ventures | Real Estate, Construction & Beverages in Bengaluru",
  description:
    "ZYPER Ventures is a diversified business group in Bengaluru, working across real estate, construction, and premium beverage distribution. Explore our projects, our divisions, and what drives us.",
  keywords: "ZYPER Ventures",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <DivisionsSection />
        <ServicesSection />
        <StatsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
