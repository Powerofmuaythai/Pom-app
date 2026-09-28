import { useApp } from "../context/AppContext";

const MODES: { key: "produkt" | "equipment"; label: string }[] = [
  { key: "produkt", label: "Produkt" },
  { key: "equipment", label: "Mein Equipment" },
];

export function Scan() {
  const { state, setState, doScan, go } = useApp();

  const scanStatus = state.scanning ? "Wird gelesen …" : state.scanMode === "produkt" ? "Regal-Code" : "QR am Innenlabel";
  const scanHint =
    state.scanMode === "produkt"
      ? "Code am Regal oder am Anhänger erfassen. Größen und Lagerbestand der Filiale erscheinen sofort."
      : "QR im Innenfutter erfassen. Echtheit, Fertigungsdatum, Garantie und Pflege für dieses Stück.";

  return (
    <div className="scan">
      <div className="scan__modes">
        {MODES.map((m) => (
          <button
            key={m.key}
            className="scan__mode"
            style={{
              background: state.scanMode === m.key ? "var(--gold-500)" : "transparent",
              color: state.scanMode === m.key ? "var(--black-1000)" : "var(--text-secondary)",
            }}
            onClick={() => setState((s) => ({ ...s, scanMode: m.key }))}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="scan__viewfinder">
        <span className="scan__viewfinder-label">Kamera-Feed<br />1:1</span>
        <div className="scan__reticle">
          <div className="scan__corner scan__corner--tl" />
          <div className="scan__corner scan__corner--tr" />
          <div className="scan__corner scan__corner--bl" />
          <div className="scan__corner scan__corner--br" />
          {state.scanning && <div className="scan__line" />}
        </div>
      </div>

      <div className="scan__status">
        <span className="eyebrow eyebrow--gold">{scanStatus}</span>
        <p className="scan__hint">{scanHint}</p>
      </div>

      <div className="scan__actions">
        <button className="scan__shutter" aria-label="Scannen" onClick={doScan}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M7 12h10" />
          </svg>
        </button>
        <button className="text-btn" onClick={() => go("account")}>Code manuell eingeben</button>
      </div>
    </div>
  );
}
