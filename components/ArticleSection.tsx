import type { ReactNode } from "react";

interface ArticleSectionProps {
  id: string;
  /** Rendered as the section's H2. */
  title: string;
  /** Optional short answer shown before the deeper explanation. */
  shortAnswer?: ReactNode;
  children?: ReactNode;
  tone?: "default" | "tint";
}

export function ArticleSection({
  id,
  title,
  shortAnswer,
  children,
  tone = "default",
}: ArticleSectionProps) {
  return (
    <section
      id={id}
      className={`section section--${tone}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className="prose">
          <h2 id={`${id}-title`}>{title}</h2>
          {shortAnswer ? <p className="short-answer">{shortAnswer}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
