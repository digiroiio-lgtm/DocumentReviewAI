import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

/**
 * GA4, loaded only when NEXT_PUBLIC_GA_ID is a valid measurement ID.
 * `afterInteractive` keeps it off the critical rendering path.
 */
export function Analytics() {
  const id = siteConfig.analytics.gaId;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
