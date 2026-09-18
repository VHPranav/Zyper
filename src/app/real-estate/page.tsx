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
  title: "Corporate Land Acquisition & Industrial Land Takeover | ZYPER VENTURES",
  description:
    "Looking for real estate in Bangalore? ZYPER offers corporate land acquisition, industrial land takeover & real estate solutions across Bengaluru & Karnataka.",
  keywords: "corporate land acquisition",
};

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          label="01 / Real Estate"
          title={["THE RIGHT LAND,", "ACQUIRED RIGHT."]}
          subtitle="End-to-end land acquisition and land takeover solutions for corporate and industrial real estate requirements across Bengaluru and Karnataka."
          videoUrl="/videos/realestate.mp4"
          posterUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        />
        <RealEstateAbout />
        <PropertyTypesSection />
        <SignatureProjectsSection />
        <AdvantagesSection />
        <ProcessSection />
        <CTASection
          theme="dark"
          heading="Let's talk about what you're building."
          body="We love to communicate and discuss. If you have any questions regarding our land acquisition projects, industrial investments, or corporate property requirements, book a call to learn more or send us an inquiry."
        />
      </main>
      <Footer />
    </>
  );
}
