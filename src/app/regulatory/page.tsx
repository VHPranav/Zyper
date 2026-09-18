import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegulatoryContent from "@/components/sections/RegulatoryContent";

export const metadata: Metadata = {
  title: "Regulatory & RERA | Zyper Ventures",
  description:
    "Zyper operates within the regulatory framework set by the Government of Karnataka, covering Karnataka RERA compliance, Greater Bengaluru Authority sanctions, and Karnataka Excise licensing.",
};

export default function RegulatoryPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <RegulatoryContent />
      </main>
      <Footer />
    </>
  );
}
