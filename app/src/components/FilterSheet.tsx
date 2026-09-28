import { useApp } from "../context/AppContext";
import { SORTS, SPORTS } from "../data";

export function FilterSheet() {
  const { state, setState, chip, catList } = useApp();
  if (state.sheet !== "filter") return null;
  const close = () => setState((s) => ({ ...s, sheet: null }));

  return (
    <div className="sheet-overlay">
      <div className="sheet-scrim" onClick={close} />
      <div className="sheet">
        <div className="sheet__head">
          <span className="sheet__title">Filter</span>
          <button className="icon-btn sheet__close" aria-label="Schließen" onClick={close}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <path d="M18 6 6 18" /><path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="filter-group">
          <span className="eyebrow">Sportart</span>
          <div className="chip-row">
            {SPORTS.map((s) => {
              const c = chip(state.cat === s, s, () => setState((st) => ({ ...st, cat: s })));
              return (
                <button key={s} className="chip chip--lg" style={{ background: c.bg, color: c.fg, boxShadow: c.ring }} onClick={c.pick}>
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="filter-group">
          <span className="eyebrow">Sortierung</span>
          <div className="chip-row">
            {SORTS.map((s) => {
              const c = chip(state.sort === s, s, () => setState((st) => ({ ...st, sort: s })));
              return (
                <button key={s} className="chip chip--lg" style={{ background: c.bg, color: c.fg, boxShadow: c.ring }} onClick={c.pick}>
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="filter-toggle-row">
          <span className="filter-toggle-row__label">Nur auf Lager</span>
          <button
            className="switch"
            aria-label="Nur auf Lager"
            onClick={() => setState((s) => ({ ...s, onlyStock: !s.onlyStock }))}
            style={{
              background: state.onlyStock ? "var(--gold-500)" : "var(--surface-inset)",
              boxShadow: state.onlyStock ? "none" : "inset 0 0 0 1px var(--border-hairline)",
              justifyContent: state.onlyStock ? "flex-end" : "flex-start",
            }}
          >
            <span className="switch__knob" style={{ background: state.onlyStock ? "var(--black-1000)" : "var(--bone-400)" }} />
          </button>
        </div>
        <button className="btn btn--primary btn--full" onClick={close}>{catList.length} Artikel zeigen</button>
      </div>
    </div>
  );
}
