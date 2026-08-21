import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/hero/PageHero";
import {
  RealEstateAbout,
  PropertyTypesSection,
  SignatureProjectsSection,
  AdvantagesSection,
  ProcessSection,
} from "@/components/realestate";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Real Estate",
  description:
    "ZYPER Real Estate — premium residential and commercial properties in Kerala. Transparent, quality-first, customer-centric.",
};

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          label="01 / Real Estate"
          title={["YOUR VISION", "OF ELEVATED", "LIVING."]}
          subtitle="Premium residential and commercial spaces designed for the way you live today."
          videoUrl="/videos/realestate.mp4"
          posterUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        />
        <RealEstateAbout />
        <PropertyTypesSection />
        <SignatureProjectsSection />
        <AdvantagesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
