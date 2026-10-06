import type { ReactNode } from "react";

interface DisclaimerBoxProps {
  children: ReactNode;
  /** "oversight" for human-judgment notes, "footer" for the sitewide disclaimer. */
  variant?: "oversight" | "footer";
  title?: string;
}

export function DisclaimerBox({
  children,
  variant = "oversight",
  title,
}: DisclaimerBoxProps) {
  return (
    <aside className={`disclaimer disclaimer--${variant}`}>
      {title ? <p className="disclaimer__title">{title}</p> : null}
      <p className="disclaimer__text">{children}</p>
    </aside>
  );
}
