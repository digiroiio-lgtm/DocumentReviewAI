export interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav className="toc" aria-label="On this page">
      <div className="container">
        <p className="toc__title">On this page</p>
        <ul className="toc__list">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
