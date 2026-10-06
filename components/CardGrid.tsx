import Link from "next/link";

export interface CardItem {
  title: string;
  text: string;
  href?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

/** Generic card grid used for capability and use-case overviews. */
export function CardGrid({ items, columns = 4 }: CardGridProps) {
  return (
    <ul className={`card-grid card-grid--${columns}`}>
      {items.map((item) => (
        <li key={item.title} className="card">
          <h3 className="card__title">
            {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
          </h3>
          <p className="card__text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
