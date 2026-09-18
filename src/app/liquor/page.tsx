import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiquorHero from "@/components/hero/LiquorHero";
import {
  BeverageAbout,
  PrinciplesSection,
  OperationsSection,
  GovernanceSection,
} from "@/components/beverage";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Zyper Beverages | Licensed Liquor Distributor in Bengaluru",
  description:
    "Zyper Beverages is a licensed distributor of wine, spirits and beer across Bengaluru and Karnataka, built on verified sourcing and reliable delivery.",
  keywords: "Zyper Beverages",
};

export default function LiquorPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <LiquorHero />
        <BeverageAbout />
        <PrinciplesSection />
        <OperationsSection />
        <GovernanceSection />
        <CTASection
          theme="dark"
          heading="Let's talk about what you're building."
          body="Whether you're a retailer, a hospitality partner, or a brand principal exploring Karnataka or East Africa, we're happy to walk you through how ZYPER Beverages works. Book a call or drop us a line, and we'll get back to you directly."
        />
      </main>
      <Footer theme="light" />
    </>
  );
}
