import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/hero/PageHero";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import AboutFullContent from "@/components/sections/AboutFullContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ZYPER VENTURES — our story, values, and vision for building a better future across Real Estate, Construction, and Beverages.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          label="About ZYPER VENTURES"
          title={["THE BEST TEAM", "TO FULFIL YOUR", "DREAM."]}
          subtitle="A diversified group built on trust, quality, and long-term value across Real Estate, Construction, and Beverages."
          videoUrl="/videos/about.mp4"
          posterUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        />
        <AboutFullContent />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
