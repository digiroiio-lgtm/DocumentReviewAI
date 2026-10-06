import Link from "next/link";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { siteConfig } from "@/lib/site-config";

const standards = [
  "Content is educational and general in nature.",
  "Professional, legal, regulatory and statistical claims should be sourced; primary sources are preferred for legal and regulatory points.",
  "No individualized advice is provided, and nothing here creates a professional relationship.",
  "AI-assisted drafting, where used, must be reviewed by a person before publication.",
  "Corrections are welcome and are made when an error is confirmed.",
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <DisclaimerBox variant="footer">{siteConfig.disclaimer}</DisclaimerBox>

        <section
          id="editorial-standards"
          className="footer-standards"
          aria-labelledby="editorial-standards-title"
        >
          <h2 id="editorial-standards-title" className="footer-title">
            Editorial Standards
          </h2>
          <ul className="footer-standards__list">
            {standards.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <div className="footer-grid">
          <nav aria-label="Footer: topics">
            <p className="footer-title">Topics</p>
            <ul className="footer-links">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer: site">
            <p className="footer-title">Site</p>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#editorial-standards">Editorial Standards</a>
              </li>
              <li>
                <Link href={siteConfig.sale.internalPath}>Acquire this domain</Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="footer-title">About this site</p>
            <p className="footer-note">
              {siteConfig.name} is an informational resource about AI-assisted
              document review. It does not currently operate document-review
              software or provide review services.
            </p>
          </div>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
