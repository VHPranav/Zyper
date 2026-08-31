import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import BrandPreloader from "@/components/ui/BrandPreloader";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zyper.co.in"),
  title: {
    default: "ZYPER VENTURES — Real Estate · Construction · Beverages",
    template: "%s | ZYPER VENTURES",
  },
  description:
    "ZYPER VENTURES is a diversified group excelling in Real Estate, Construction, and Premium Beverages across Bengaluru & Karnataka. Built on trust, quality, and long-term value.",
  keywords: [
    "ZYPER",
    "ZYPER VENTURES",
    "real estate Bengaluru",
    "real estate Bangalore",
    "luxury villas Bengaluru",
    "construction Bengaluru",
    "construction Karnataka",
    "turnkey structural engineering",
    "premium beverages distribution",
    "luxury properties",
  ],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: "ZYPER VENTURES" }],
  creator: "ZYPER VENTURES",
  publisher: "ZYPER VENTURES",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ZYPER VENTURES — Real Estate · Construction · Beverages",
    description:
      "A diversified business group excelling in Real Estate, Construction, and Beverages in Bengaluru, Karnataka, India.",
    url: "https://www.zyper.co.in",
    siteName: "ZYPER VENTURES",
    images: [
      {
        url: "https://www.zyper.co.in/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "ZYPER VENTURES — Real Estate · Construction · Beverages",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYPER VENTURES — Real Estate · Construction · Beverages",
    description:
      "A diversified business group excelling in Real Estate, Construction, and Beverages in Bengaluru, Karnataka, India.",
    images: ["https://www.zyper.co.in/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        <BrandPreloader />
        {children}
      </body>
    </html>
  );
}
