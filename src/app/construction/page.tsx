import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/hero/PageHero";
import {
  ConstructionAbout,
  ConstructionPhilosophy,
  CapabilitiesSection,
  WhyChooseSection,
} from "@/components/construction";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Industrial Land Acquisition Company | ZYPER Construction",
  },
  description:
    "ZYPER handles industrial land acquisition and land takeover for corporate companies in Bengaluru and Karnataka, including KIADB plots and due diligence.",
  keywords: "Industrial Land Acquisition",
  openGraph: {
    title: "Industrial Land Acquisition Company | ZYPER Construction",
    description:
      "ZYPER handles industrial land acquisition and land takeover for corporate companies in Bengaluru and Karnataka, including KIADB plots and due diligence.",
  },
  twitter: {
    title: "Industrial Land Acquisition Company | ZYPER Construction",
    description:
      "ZYPER handles industrial land acquisition and land takeover for corporate companies in Bengaluru and Karnataka, including KIADB plots and due diligence.",
  },
};

export default function ConstructionPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          label="02 / Construction"
          title={["LAND ACQUIRED WITH", "PRECISION. SECURED", "FOR GROWTH."]}
          subtitle="Industrial land acquisition and corporate land takeover, delivered with transparency and full regulatory compliance."
          videoUrl="/videos/construction.mp4"
          posterUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        />
        <ConstructionAbout />
        <ConstructionPhilosophy />
        <CapabilitiesSection />
        <WhyChooseSection />
        <CTASection
          theme="dark"
          heading="Let's talk about what you're building."
          body="Whether it's a property, a project, or a partnership, we're happy to walk you through how ZYPER works. Book a call or drop us a line, and we'll get back to you directly."
        />
      </main>
      <Footer />
    </>
  );
}
