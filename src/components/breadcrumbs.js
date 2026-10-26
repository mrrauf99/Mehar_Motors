import { getBreadcrumbData } from "@/lib/structured-data";

export function Breadcrumbs({ current, path }) {
  const data = getBreadcrumbData([
    { name: "Home", path: "/" },
    { name: current, path }
  ]);

  return data ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  ) : null;
}
