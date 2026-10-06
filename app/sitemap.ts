import type { MetadataRoute } from "next";
import { pageList } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site-config";

// Only the six indexable pages. /domain is intentionally excluded (noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  return pageList.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.updated,
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
