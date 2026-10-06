import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { PageEntry } from "@/lib/pages";

/**
 * JSON-LD builders. Each one only emits properties that are visible on the
 * page or are the site's own name/URL. There is deliberately no Organization,
 * author-person, review, rating or contact data: none of it exists.
 */

export interface Crumb {
  name: string;
  path: string;
}

const WEBSITE_ID = `${absoluteUrl("/")}#website`;

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-US",
  };
}

export function breadcrumbNode(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageNode(page: PageEntry) {
  const url = absoluteUrl(page.path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    dateModified: page.updated,
  };
}

export function articleNode(page: PageEntry) {
  const url = absoluteUrl(page.path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: page.h1,
    description: page.description,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    datePublished: page.updated,
    dateModified: page.updated,
    inLanguage: "en-US",
    image: absoluteUrl(siteConfig.ogImage.path),
    // The publisher is the site itself, identified only by its name and URL.
    author: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl("/") },
    publisher: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl("/") },
  };
}

/** Home: WebSite + WebPage. */
export function homeGraph(page: PageEntry) {
  return {
    "@context": "https://schema.org",
    "@graph": [websiteNode(), webPageNode(page)],
  };
}

/** Pillar pages: WebSite + WebPage + BreadcrumbList + Article. */
export function articleGraph(page: PageEntry, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      webPageNode(page),
      breadcrumbNode(crumbs),
      articleNode(page),
    ],
  };
}

/** Serializes JSON-LD safely for inline <script> use. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Home > page trail, used for both the visible breadcrumbs and BreadcrumbList JSON-LD. */
export function crumbsFor(page: PageEntry): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: page.label, path: page.path },
  ];
}
