import type { ReactNode } from "react";

export interface FaqItem {
  q: string;
  a: ReactNode;
}

interface FAQProps {
  items: FaqItem[];
  id?: string;
  title?: string;
}

/** Visible Q&A. Answers lead with the short answer. */
export function FAQ({ items, id = "faq", title = "Frequently Asked Questions" }: FAQProps) {
  return (
    <section id={id} className="section section--default" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="prose">
          <h2 id={`${id}-title`}>{title}</h2>
          <div className="faq">
            {items.map((item) => (
              <div key={item.q} className="faq__item">
                <h3 className="faq__q">{item.q}</h3>
                <p className="faq__a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
