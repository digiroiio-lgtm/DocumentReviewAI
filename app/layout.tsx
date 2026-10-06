import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { DomainSaleBanner } from "@/components/DomainSaleBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CANONICAL_ORIGIN, siteConfig } from "@/lib/site-config";
import { pages } from "@/lib/pages";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_ORIGIN),
  applicationName: siteConfig.name,
  title: { default: pages.home.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  // Added only when NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION is set.
  ...(siteConfig.verification.google
    ? { verification: { google: siteConfig.verification.google } }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f9fb",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <DomainSaleBanner />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
