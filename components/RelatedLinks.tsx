import Link from "next/link";
import { pages, type PageKey } from "@/lib/pages";

interface RelatedLink {
  page: PageKey;
  /** Descriptive anchor text. */
  text: string;
  description: string;
}

/** Descriptive internal links to sibling pillar pages. */
export function RelatedLinks({
  links,
  title = "Continue Exploring",
  id = "related",
}: {
  links: RelatedLink[];
  title?: string;
  id?: string;
}) {
  return (
    <section id={id} className="section section--tint" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="prose">
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <ul className="related">
          {links.map((l) => (
            <li key={l.page} className="related__item">
              <Link href={pages[l.page].path} className="related__link">
                {l.text}
              </Link>
              <p>{l.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
