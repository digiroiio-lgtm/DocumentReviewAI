import { SaleLink } from "@/components/SaleLink";

/**
 * Slim sitewide notice. Deliberately visually secondary: small type, muted
 * background, not sticky, not dismissible, no layout shift.
 */
export function DomainSaleBanner() {
  return (
    <div className="sale-banner" role="region" aria-label="Domain availability">
      <div className="container sale-banner__inner">
        <SaleLink className="sale-banner__link">
          <span className="sale-banner__text--desktop">
            DocumentReviewAI.com is available for acquisition
            <span aria-hidden="true"> → </span>
            <span className="sale-banner__cta">View Domain Details</span>
          </span>
          <span className="sale-banner__text--mobile">
            This domain is for sale<span aria-hidden="true"> →</span>
          </span>
        </SaleLink>
      </div>
    </div>
  );
}
