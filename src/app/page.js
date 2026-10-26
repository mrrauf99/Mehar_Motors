import { HomeHero } from "@/components/home-hero";
import { HomeSections } from "@/components/home-sections";
import { SiteFrame } from "@/components/site-frame";
import { siteUrl } from "@/lib/site";
import { getStructuredData } from "@/lib/structured-data";

const structuredData = getStructuredData();

export default function HomePage() {
  return (
    <SiteFrame>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
          }}
        />
      )}
      <main id="main">
        <HomeHero />
        <HomeSections />
      </main>
    </SiteFrame>
  );
}

export const metadata = {
  title: "Mehar Motors | Car Rental",
  description: "Browse ten cars, from sedans to SUVs. Ask Mehar Motors about current rates and availability for your dates.",
  openGraph: {
    title: "Mehar Motors | Car Rental",
    description: "Browse ten cars, from sedans to SUVs, and ask about rates and availability.",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {})
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehar Motors | Car Rental",
    description: "Browse ten cars, from sedans to SUVs, and ask about rates and availability."
  },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {})
};
