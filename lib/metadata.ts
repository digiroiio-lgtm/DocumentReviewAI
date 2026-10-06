import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { PageEntry } from "@/lib/pages";

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  /** Adds `noindex, follow`. */
  noindex?: boolean;
}

/** Builds complete per-page metadata: canonical, Open Graph, Twitter, robots. */
export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = {
    url: absoluteUrl(siteConfig.ogImage.path),
    width: siteConfig.ogImage.width,
    height: siteConfig.ogImage.height,
    alt: siteConfig.ogImage.alt,
  };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export function metadataForPage(page: PageEntry): Metadata {
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}
