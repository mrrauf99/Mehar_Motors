import { brandName, siteUrl } from "@/lib/site";

export function getStructuredData() {
  const rentalBusiness = {
    "@type": "AutoRental",
    name: brandName
  };

  if (!siteUrl) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        rentalBusiness,
        {
          "@type": "WebSite",
          name: brandName
        }
      ]
    };
  }

  const organizationId = `${siteUrl}/#business`;
  const websiteId = `${siteUrl}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...rentalBusiness,
        "@id": organizationId,
        url: siteUrl
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: brandName,
        publisher: { "@id": organizationId }
      }
    ]
  };
}

export function getBreadcrumbData(items) {
  if (!siteUrl) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${siteUrl}${path}`
    }))
  };
}
