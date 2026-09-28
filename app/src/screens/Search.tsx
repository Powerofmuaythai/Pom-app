import { useApp } from "../context/AppContext";

const SUGGESTS = ["16 oz", "Shin Guards", "Lumpinee", "Bandagen", "Thai Pads"];

export function Search() {
  const { state, setState, searchResults, openProduct } = useApp();

  return (
    <div className="search">
      <div className="search-bar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.75" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.6-3.6" />
        </svg>
        <input
          className="search-bar__input"
          value={state.query}
          onChange={(e) => setState((s) => ({ ...s, query: e.target.value }))}
          placeholder="Handschuhe, 16 oz, Lumpinee"
        />
      </div>

      <div className="search__suggests">
        <span className="eyebrow">Häufig gesucht</span>
        <div className="chip-row">
          {SUGGESTS.map((label) => (
            <button key={label} className="chip chip--outline" onClick={() => setState((s) => ({ ...s, query: label }))}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="result-list">
        {searchResults.map((r) => (
          <button key={r.id} className="result-list__row" onClick={() => openProduct(r.id)}>
            <span className="result-list__thumb" />
            <span className="result-list__body">
              <span className="result-list__name">{r.name}</span>
              <span className="result-list__meta">{r.line} · {r.price} €</span>
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bone-600)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
