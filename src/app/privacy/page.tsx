import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrivacyContent from "@/components/sections/PrivacyContent";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | ZYPER VENTURES",
  },
  description:
    "Understand how ZYPER VENTURES collects, uses, stores and protects the information you share with us across our Real Estate, Construction and Beverages divisions in Bengaluru and Karnataka.",
  keywords: "Privacy Policy, ZYPER VENTURES",
  openGraph: {
    title: "Privacy Policy | ZYPER VENTURES",
    description:
      "Understand how ZYPER VENTURES collects, uses, stores and protects the information you share with us across our Real Estate, Construction and Beverages divisions in Bengaluru and Karnataka.",
  },
  twitter: {
    title: "Privacy Policy | ZYPER VENTURES",
    description:
      "Understand how ZYPER VENTURES collects, uses, stores and protects the information you share with us across our Real Estate, Construction and Beverages divisions in Bengaluru and Karnataka.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}
