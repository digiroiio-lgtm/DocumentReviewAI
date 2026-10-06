import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DefinitionBox } from "@/components/DefinitionBox";
import type { Crumb } from "@/lib/jsonld";

interface HeroProps {
  eyebrow?: string;
  /** The page's only H1. */
  title: string;
  /** Direct-answer definition, rendered immediately below the H1. */
  definition: ReactNode;
  definitionLabel?: string;
  /** Supporting sentence shown after the definition. */
  subheading?: string;
  crumbs?: Crumb[];
  /** ISO date and its human-readable form, shown as "Last updated". */
  updated?: { iso: string; label: string };
  actions?: ReactNode;
  visual?: ReactNode;
  variant?: "home" | "page";
}

export function Hero({
  eyebrow,
  title,
  definition,
  definitionLabel,
  subheading,
  crumbs,
  updated,
  actions,
  visual,
  variant = "page",
}: HeroProps) {
  return (
    <section className={`hero hero--${variant}`}>
      <div className="container hero__inner">
        <div className="hero__copy">
          {crumbs ? <Breadcrumbs crumbs={crumbs} /> : null}
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="hero__title">{title}</h1>
          <DefinitionBox label={definitionLabel}>{definition}</DefinitionBox>
          {subheading ? <p className="hero__sub">{subheading}</p> : null}
          {actions ? <div className="hero__actions">{actions}</div> : null}
          {updated ? (
            <p className="hero__meta">
              Last updated: <time dateTime={updated.iso}>{updated.label}</time>
            </p>
          ) : null}
        </div>
        {visual ? <div className="hero__visual">{visual}</div> : null}
      </div>
    </section>
  );
}
