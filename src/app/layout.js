import "./globals.css";
import localFont from "next/font/local";
import { brandName, siteUrl } from "@/lib/site";

const displayFont = localFont({
  src: [
    { path: "./fonts/BodoniModa-Variable.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/BodoniModa-Italic-Variable.woff2", weight: "400 700", style: "italic" }
  ],
  display: "swap",
  variable: "--font-bodoni-moda"
});

const metadata = {
  title: { absolute: "Mehar Motors | Car Rental" },
  description:
    "Choose from ten cars, from sedans to SUVs. Ask Mehar Motors about prices and dates.",
  applicationName: brandName,
  icons: {
    icon: [{ url: "/brand-favicon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    title: "Mehar Motors | Car Rental",
    description:
      "See ten cars, from sedans to SUVs, and ask about prices and dates.",
    siteName: brandName,
    locale: "en_PK"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehar Motors | Car Rental",
    description:
      "See ten cars, from sedans to SUVs, and ask about prices and dates."
  }
};

if (siteUrl) {
  metadata.metadataBase = new URL(siteUrl);
  metadata.alternates = { canonical: "/" };
  metadata.openGraph.url = siteUrl;
  metadata.openGraph.images = ["/images/mercedes-s-class.webp"];
  metadata.twitter.images = ["/images/mercedes-s-class.webp"];
}

export { metadata };

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0e10",
  colorScheme: "dark"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={displayFont.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
