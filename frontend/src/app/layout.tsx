import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://occoncretedriveway.com"),
  title: {
    default: "OC Concrete Driveway | Top Concrete Contractor Orange County & Riverside",
    template: "%s | OC Concrete Driveway"
  },
  description: "Durable and beautiful concrete driveways, patios, and pavers in Orange County and Riverside. Licensed and bonded with over 20 years of experience.",
  keywords: ["concrete driveway orange county", "concrete contractor riverside", "stamped concrete", "pavers", "driveway replacement CA"],
  openGraph: {
    title: "OC Concrete Driveway",
    description: "Expert concrete driveway, patio, and hardscaping services in Southern California.",
    url: "https://occoncretedriveway.com",
    siteName: "OC Concrete Driveway",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "OC Concrete Driveway",
    "alternateName": "OC Concrete Driveway & Patio",
    "description": "Top-rated concrete driveway contractor in Orange County and Riverside. Specializing in driveway replacement, stamped concrete, and patio installation.",
    "url": "https://occoncretedriveway.com",
    "telephone": "+19097872400",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoShape",
      "region": "California",
      "address": "Orange County and Riverside"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/occoncretedriveways",
      "https://www.instagram.com/oc_concretedriveway"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69a798b3a27e8c43b3617ff2"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
