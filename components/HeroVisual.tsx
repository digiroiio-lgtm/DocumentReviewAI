/**
 * Decorative schematic of document -> extracted fields -> human review.
 * Purely illustrative: generic labels, no scores, metrics or product UI.
 */
export function HeroVisual() {
  return (
    <figure
      className="doc-visual"
      role="img"
      aria-label="Illustrative schematic: a source document is broken into extracted fields such as parties, dates and clauses, then passed to a human reviewer for a decision."
    >
      <div className="doc-visual__stage" aria-hidden="true">
        <div className="doc-visual__doc">
          <span className="doc-visual__doc-title">Source document</span>
          <span className="doc-line doc-line--w90" />
          <span className="doc-line doc-line--w75 doc-line--hl" />
          <span className="doc-line doc-line--w85" />
          <span className="doc-line doc-line--w60" />
          <span className="doc-line doc-line--w80 doc-line--hl2" />
          <span className="doc-line doc-line--w70" />
          <span className="doc-line doc-line--w55" />
        </div>
        <div className="doc-visual__fields">
          <span className="chip">Parties</span>
          <span className="chip">Dates &amp; terms</span>
          <span className="chip chip--accent">Clause: termination</span>
          <span className="chip">Obligations</span>
          <span className="chip chip--dashed">Possible gap: to confirm</span>
        </div>
        <div className="doc-visual__review">
          <span className="doc-visual__review-label">Human review</span>
          <span className="doc-visual__review-sub">Decision stays with the reviewer</span>
        </div>
      </div>
      <figcaption className="doc-visual__caption">
        Illustrative schematic only. Not a product screenshot.
      </figcaption>
    </figure>
  );
}
