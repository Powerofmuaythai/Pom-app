import { useApp } from "../context/AppContext";

export function ScanGear() {
  const { gear, openProduct, showToast } = useApp();

  return (
    <div className="scan-result">
      <div className="gear-pass__badge-row">
        <div className="gear-pass__seal">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--black-1000)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <span className="gear-pass__title">Echtheit bestätigt</span>
        <span className="gear-pass__serial">{gear.serial}</span>
      </div>

      <div className="gear-pass__card">
        <div className="gear-pass__card-head">
          <span className="gear-pass__name">{gear.name}</span>
          <span className="badge badge--outline">Registriert</span>
        </div>
        <div className="spec-list">
          {gear.specs.map(([k, v]) => (
            <div key={k} className="spec-list__row">
              <span className="spec-list__key">{k}</span>
              <span className="spec-list__val">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="gear-pass__care">
        <span className="label label--secondary">Pflege</span>
        {gear.care.map((t) => (
          <div key={t} className="gear-pass__care-item">
            <span className="gear-pass__care-dot">·</span>
            <span className="gear-pass__care-text">{t}</span>
          </div>
        ))}
      </div>

      <button className="btn btn--primary btn--full" onClick={() => openProduct(gear.pid)}>Nachbestellen</button>
      <button className="btn btn--secondary btn--full" onClick={() => showToast("Garantiefall aufgenommen · Antwort in 24 h")}>
        Garantiefall melden
      </button>
    </div>
  );
}
