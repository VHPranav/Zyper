import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/sections/ContactContent";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Zyper Ventures | Real Estate, Construction & Beverages in Bengaluru",
  },
  description:
    "Talk to the Zyper Ventures team in Bengaluru about plots, villas, apartments, commercial spaces, construction projects and licensed beverage distribution across Karnataka. Call, write or visit us.",
  keywords: "Contact Zyper Ventures",
  openGraph: {
    title: "Contact Zyper Ventures | Real Estate, Construction & Beverages in Bengaluru",
    description:
      "Talk to the Zyper Ventures team in Bengaluru about plots, villas, apartments, commercial spaces, construction projects and licensed beverage distribution across Karnataka. Call, write or visit us.",
  },
  twitter: {
    title: "Contact Zyper Ventures | Real Estate, Construction & Beverages in Bengaluru",
    description:
      "Talk to the Zyper Ventures team in Bengaluru about plots, villas, apartments, commercial spaces, construction projects and licensed beverage distribution across Karnataka. Call, write or visit us.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactContent />
        <CTASection
          heading="Let's connect"
          body="Whether it's acquiring land, taking over an existing site, planning a construction project, or placing a beverage order, we're happy to walk you through how ZYPER works. Book a call or drop us a line, and we'll get back to you directly."
        />
      </main>
      <Footer />
    </>
  );
}
