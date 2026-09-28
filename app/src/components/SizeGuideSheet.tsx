import { Fragment } from "react";
import { useApp } from "../context/AppContext";
import { SIZE_TABLE } from "../data";

export function SizeGuideSheet() {
  const { state, setState } = useApp();
  if (state.sheet !== "size") return null;
  const close = () => setState((s) => ({ ...s, sheet: null }));

  return (
    <div className="sheet-overlay">
      <div className="sheet-scrim" onClick={close} />
      <div className="sheet">
        <div className="sheet__head">
          <div className="sheet__heading">
            <span className="eyebrow eyebrow--gold">Passform</span>
            <span className="sheet__title">Größentabelle</span>
          </div>
          <button className="icon-btn sheet__close" aria-label="Schließen" onClick={close}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <path d="M18 6 6 18" /><path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="size-table">
          <span className="size-table__head">Gewicht</span>
          <span className="size-table__head">Körper</span>
          <span className="size-table__head">Einsatz</span>
          {SIZE_TABLE.map(([a, b, c]) => (
            <Fragment key={a}>
              <span className="size-table__cell size-table__cell--gold">{a}</span>
              <span className="size-table__cell">{b}</span>
              <span className="size-table__cell">{c}</span>
            </Fragment>
          ))}
        </div>
        <p className="sheet__note">Bei 14 oz fällt die Passform knapp aus. Wer Bandagen mit 5 m wickelt, nimmt eine Größe größer.</p>
        <button className="btn btn--primary btn--full" onClick={close}>Verstanden</button>
      </div>
    </div>
  );
}
