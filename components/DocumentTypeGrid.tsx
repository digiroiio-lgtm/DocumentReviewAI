interface DocumentType {
  name: string;
  examples: string;
}

/** Document cards: a name plus examples of what that category contains. */
export function DocumentTypeGrid({ items }: { items: DocumentType[] }) {
  return (
    <ul className="doc-grid">
      {items.map((item) => (
        <li key={item.name} className="doc-card">
          <span className="doc-card__fold" aria-hidden="true" />
          <h3 className="doc-card__title">{item.name}</h3>
          <p className="doc-card__text">{item.examples}</p>
        </li>
      ))}
    </ul>
  );
}
