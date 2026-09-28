import { GEAR } from "../data";
import { useApp } from "../context/AppContext";

const ACCT_ROWS = [
  { label: "Bestellungen", meta: "4" },
  { label: "Adressen", meta: "Bangkok, Köln" },
  { label: "Größenprofil", meta: "14 oz · L" },
  { label: "Benachrichtigungen", meta: "an" },
];

export function Account() {
  const { go, setState } = useApp();

  return (
    <div className="account">
      <div className="account__header">
        <div className="account__avatar">SK</div>
        <div className="account__id">
          <span className="account__name">Somchai K.</span>
          <span className="account__since">Mitglied seit 2023 · Größenprofil 14 oz</span>
        </div>
      </div>

      <div className="account__section">
        <div className="account__section-head">
          <span className="eyebrow">Mein Equipment</span>
          <button className="link-btn" onClick={() => go("scan")}>QR scannen</button>
        </div>
        <div className="gear-rows">
          {GEAR.map((g) => (
            <button
              key={g.id}
              className="gear-rows__row"
              onClick={() => setState((s) => ({ ...s, screen: "scang", hist: [...s.hist, s.screen], gearId: g.id, sheet: null }))}
            >
              <span className="gear-rows__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <span className="gear-rows__body">
                <span className="gear-rows__name">{g.name}</span>
                <span className="gear-rows__meta">{g.specs[3][1]}</span>
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bone-600)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div className="account__rows">
        {ACCT_ROWS.map((a) => (
          <div key={a.label} className="account__row">
            <span className="account__row-label">{a.label}</span>
            <span className="account__row-meta">{a.meta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
