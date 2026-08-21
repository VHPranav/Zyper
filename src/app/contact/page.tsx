import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ZYPER VENTURES. We are here to discuss your real estate, construction, and beverage needs.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
