import type { CSSProperties } from "react";

interface Step {
  label: string;
  detail?: string;
}

interface ProcessStepsProps {
  steps: Step[];
  /** Accessible name for the list. */
  label: string;
  /** Highlights the final step (typically the human decision). */
  emphasizeLast?: boolean;
}

/** Pure HTML/CSS flow: documents -> ... -> human decision. */
export function ProcessSteps({ steps, label, emphasizeLast = true }: ProcessStepsProps) {
  return (
    <ol
      className="steps"
      aria-label={label}
      style={{ "--n": steps.length } as CSSProperties}
    >
      {steps.map((step, i) => (
        <li
          key={step.label}
          className={`steps__item${emphasizeLast && i === steps.length - 1 ? " steps__item--final" : ""}`}
        >
          <span className="steps__num" aria-hidden="true">
            {i + 1}
          </span>
          <span className="steps__label">{step.label}</span>
          {step.detail ? <span className="steps__detail">{step.detail}</span> : null}
        </li>
      ))}
    </ol>
  );
}
