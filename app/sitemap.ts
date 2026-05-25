import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mpldigitalservices.com";
  const routes = [
    "",
    "/services",
    "/services/web-design",
    "/services/data-solutions",
    "/services/social-media",
    "/portfolio",
    "/portfolio/web-design",
    "/portfolio/data-solutions",
    "/portfolio/social-media",
    "/about",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
