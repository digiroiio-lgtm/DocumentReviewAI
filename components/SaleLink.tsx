import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

interface SaleLinkProps {
  children: ReactNode;
  className?: string;
}

/**
 * Link to the configured sale URL (NEXT_PUBLIC_DOMAIN_SALE_URL), or the
 * internal /domain page when none is configured. External targets open in a
 * new tab and are marked nofollow so sitewide sale links pass no link equity.
 */
export function SaleLink({ children, className }: SaleLinkProps) {
  const { url, isExternal } = siteConfig.sale;
  if (isExternal) {
    return (
      <a
        href={url}
        className={className}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={url} className={className}>
      {children}
    </Link>
  );
}
