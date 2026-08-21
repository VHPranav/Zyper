import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zyperventures.com"),
  title: {
    default: "ZYPER VENTURES — Real Estate · Construction · Beverages",
    template: "%s | ZYPER VENTURES",
  },
  description:
    "ZYPER VENTURES is a diversified group excelling in Real Estate, Construction, and Premium Beverages across Kerala. Built on trust, quality, and long-term value.",
  keywords: [
    "ZYPER",
    "ZYPER VENTURES",
    "real estate Kerala",
    "luxury villas Kochi",
    "construction Kerala",
    "turnkey structural engineering",
    "premium beverages distribution",
    "luxury properties",
  ],
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
      "A diversified business group excelling in Real Estate, Construction, and Beverages in Kerala, India.",
    siteName: "ZYPER VENTURES",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYPER VENTURES",
    description:
      "A diversified business group excelling in Real Estate, Construction, and Beverages in Kerala, India.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
