import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = ["", "/about", "/products", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
