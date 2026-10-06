interface UseCaseCardProps {
  id: string;
  title: string;
  goal: string;
  documents: string;
  task: string;
  reviewer: string;
  output: string;
}

/** Goal -> Documents -> AI-Assisted Task -> Human Reviewer -> Output. */
export function UseCaseCard({ id, title, goal, documents, task, reviewer, output }: UseCaseCardProps) {
  const rows: [string, string][] = [
    ["Goal", goal],
    ["Documents", documents],
    ["AI-Assisted Task", task],
    ["Human Reviewer", reviewer],
    ["Output", output],
  ];
  return (
    <article id={id} className="usecase" aria-labelledby={`${id}-title`}>
      <h3 id={`${id}-title`} className="usecase__title">
        {title}
      </h3>
      <dl className="usecase__list">
        {rows.map(([term, value]) => (
          <div key={term} className="usecase__row">
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
