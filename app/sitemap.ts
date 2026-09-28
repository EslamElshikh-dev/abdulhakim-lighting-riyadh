import type { MetadataRoute } from "next";
import { collections } from "@/lib/collections";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/contact", "/faq", ...collections.map(({ slug }) => `/collections/${slug}`)];
  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date("2026-09-28"), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : path.startsWith("/collections/") ? 0.8 : 0.6 }));
}
