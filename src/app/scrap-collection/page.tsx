import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/hero/PageHero";
import {
  ScrapAbout,
  ScrapServices,
  ScrapMaterials,
  ScrapProcess,
  ScrapWhyChoose,
} from "@/components/scrap";
import CTASection from "@/components/sections/CTASection";

const title = "Scrap Collection & Vehicle Disposal in Bengaluru | Zyper Scrap Solutions";
const description =
  "Zyper Scrap Solutions offers doorstep scrap collection for homes and apartments, plus Government and corporate scrap vehicle disposal, metal, e-waste, plastic and industrial scrap in Bengaluru.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords:
    "Scrap Collection Bengaluru, scrap vehicle disposal, doorstep scrap pickup, e-waste, iron scrap, corporate scrap disposal",
  openGraph: { title, description },
  twitter: { title, description },
};

export default function ScrapCollectionPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          label="04 / Scrap Solutions"
          title={["OLD SCRAP IS NOT WASTE.", "IT'S VALUE WAITING", "TO BE RECOVERED."]}
          subtitle="Zyper Scrap Solutions is a professional, eco-friendly scrap collection and recycling service for homes, companies and Government departments."
          posterUrl="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80"
        />
        <ScrapAbout />
        <ScrapServices />
        <ScrapMaterials />
        <ScrapProcess />
        <ScrapWhyChoose />
        <CTASection
          theme="dark"
          showCall
          heading="Have scrap? We are just one call away."
          body="Let us clear your space while you earn from your scrap. Contact Zyper Scrap Solutions today for quick pickup and instant valuation."
        />
      </main>
      <Footer />
    </>
  );
}
