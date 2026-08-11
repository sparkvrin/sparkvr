export const SITE_URL = "https://sparkvr.in";

/**
 * Builds a schema.org BreadcrumbList JSON-LD object for an inner page,
 * reflecting Home > [Page Name]. Pass additional trail segments for
 * deeper routes (e.g. blog posts: Home > Blog > Post Title).
 */
export function breadcrumbJsonLd(
  trail: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      ...trail.map((crumb, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": crumb.name,
        "item": `${SITE_URL}${crumb.path}`,
      })),
    ],
  };
}
