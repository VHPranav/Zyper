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
  title: "Beverages",
  description:
    "ZYPER Beverages — premium licensed spirits and beverage distribution across Kerala. Quality, compliance, sophistication.",
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
        <CTASection theme="dark" />
      </main>
      <Footer theme="light" />
    </>
  );
}
