import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TermsContent from "@/components/sections/TermsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Terms and Conditions | Zyper Ventures",
  },
  description:
    "Read the terms and conditions that govern the use of the Zyper Ventures website, covering our real estate, construction and beverage distribution businesses in Bengaluru and Karnataka.",
  openGraph: {
    title: "Terms and Conditions | Zyper Ventures",
    description:
      "Read the terms and conditions that govern the use of the Zyper Ventures website, covering our real estate, construction and beverage distribution businesses in Bengaluru and Karnataka.",
  },
  twitter: {
    title: "Terms and Conditions | Zyper Ventures",
    description:
      "Read the terms and conditions that govern the use of the Zyper Ventures website, covering our real estate, construction and beverage distribution businesses in Bengaluru and Karnataka.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}
