import { siteUrl } from "@/lib/site";

export default function sitemap() {
  if (!siteUrl) return [];

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteUrl}/fleet`,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
