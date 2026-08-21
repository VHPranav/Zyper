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
  title: "ZYPER VENTURES — Real Estate · Construction · Beverages",
  description:
    "ZYPER VENTURES is a diversified group excelling in Real Estate, Construction, and Premium Beverages across Kerala. Built on trust, quality, and long-term value.",
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
