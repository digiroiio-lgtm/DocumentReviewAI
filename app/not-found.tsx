import type { Metadata } from "next";
import Link from "next/link";
import { pageList } from "@/lib/pages";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | DocumentReviewAI.com" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="hero hero--page">
      <div className="container">
        <div className="prose">
          <h1 className="hero__title">Page Not Found</h1>
          <p className="hero__sub">
            The page you requested does not exist or has moved. These pages
            cover the main topics on this site:
          </p>
          <ul className="related related--plain">
            {pageList.map((p) => (
              <li key={p.key} className="related__item">
                <Link href={p.path} className="related__link">
                  {p.key === "home" ? "AI document review overview" : p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
