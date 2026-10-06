import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <svg className="brand__mark" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
            <rect x="5" y="3" width="22" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M10 11h12M10 16h12M10 21h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="23" cy="22" r="4.5" fill="var(--accent)" stroke="var(--bg)" strokeWidth="2" />
          </svg>
          <span className="brand__name">
            DocumentReview<span className="brand__ai">AI</span>
          </span>
        </Link>
        <SiteNav
          items={siteConfig.nav}
          saleUrl={siteConfig.sale.url}
          saleIsExternal={siteConfig.sale.isExternal}
        />
      </div>
    </header>
  );
}
