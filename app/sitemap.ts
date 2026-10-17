import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/services/web-design", priority: 0.9 },
  { path: "/services/social-media", priority: 0.8 },
  { path: "/services/tech-consulting", priority: 0.8 },
  { path: "/services", priority: 0.7 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
  { path: "/newsletter", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
