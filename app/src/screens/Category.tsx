import { useApp } from "../context/AppContext";
import { SPORTS } from "../data";
import { ProductTile } from "../components/ProductTile";

export function Category() {
  const { state, setState, chip, catList, openProduct } = useApp();

  return (
    <div className="category">
      <div className="category__head">
        <h1 className="category__title">{state.cat}</h1>
        <span className="category__meta">{catList.length} Artikel · Sortiert nach {state.sort}</span>
      </div>
      <div className="chip-row chip-row--scroll">
        <button className="chip chip--filter" onClick={() => setState((s) => ({ ...s, sheet: "filter" }))}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <path d="M4 6h16" /><path d="M4 12h10" /><path d="M4 18h6" />
          </svg>
          Filter
        </button>
        {SPORTS.slice(0, 4).map((s) => {
          const c = chip(state.cat === s, s, () => setState((st) => ({ ...st, cat: s })));
          return (
            <button key={s} className="chip" style={{ background: c.bg, color: c.fg, boxShadow: c.ring }} onClick={c.pick}>
              {c.label}
            </button>
          );
        })}
      </div>
      <div className="tile-grid category__grid-pad">
        {catList.map((p) => (
          <ProductTile key={p.id} product={p} onClick={() => openProduct(p.id)} showSizeLine compactPrice />
        ))}
      </div>
    </div>
  );
}
