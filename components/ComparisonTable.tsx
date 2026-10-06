interface ComparisonTableProps {
  caption: string;
  /** Column headings. The first labels the row-header column. */
  columns: string[];
  /** Each row's first cell is its row header. */
  rows: string[][];
}

export function ComparisonTable({ caption, columns, rows }: ComparisonTableProps) {
  return (
    <div
      className="table-wrap"
      role="region"
      aria-label={`${caption} (scrollable table)`}
      tabIndex={0}
    >
      <table className={`table${columns.length > 2 ? " table--wide" : ""}`}>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={cell} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={`${row[0]}-${i}`}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
