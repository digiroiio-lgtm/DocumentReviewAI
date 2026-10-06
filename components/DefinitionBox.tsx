import type { ReactNode } from "react";

interface DefinitionBoxProps {
  children: ReactNode;
  label?: string;
}

/** The 40-80 word direct answer shown immediately under each H1. */
export function DefinitionBox({ children, label = "Short answer" }: DefinitionBoxProps) {
  return (
    <section className="definition" aria-label={label}>
      <p className="definition__label" aria-hidden="true">
        {label}
      </p>
      <p className="definition__text">{children}</p>
    </section>
  );
}
