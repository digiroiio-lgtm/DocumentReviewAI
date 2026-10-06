import { sources, type SourceId } from "@/lib/sources";

interface SourceCitationProps {
  ids: SourceId[];
  id?: string;
  title?: string;
}

/** Renders citations from the shared registry in lib/sources.ts. */
export function SourceCitation({
  ids,
  id = "sources",
  title = "Sources and Further Reading",
}: SourceCitationProps) {
  return (
    <section id={id} className="section section--default" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="prose">
          <h2 id={`${id}-title`}>{title}</h2>
          <ol className="sources">
            {ids.map((sid) => {
              const s = sources[sid];
              return (
                <li key={s.id}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  . {s.publisher}
                  {"year" in s ? `, ${s.year}` : ""}. <span className="sources__note">{s.note}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
