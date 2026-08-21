import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/hero/PageHero";
import {
  ConstructionAbout,
  ConstructionPhilosophy,
  CapabilitiesSection,
} from "@/components/construction";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Construction",
  description:
    "ZYPER Construction — precision engineering and quality builds for residential and commercial projects across Kerala.",
};

export default function ConstructionPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          label="02 / Construction"
          title={["BUILT WITH", "PRECISION.", "BUILT TO LAST."]}
          subtitle="Engineering excellence from foundation to finish, delivered with transparency and quality."
          videoUrl="/videos/construction.mp4"
          posterUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        />
        <ConstructionAbout />
        <ConstructionPhilosophy />
        <CapabilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
