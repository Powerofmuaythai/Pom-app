import { useApp } from "../context/AppContext";

export function ScanProduct() {
  const { state, setState, p, addToBag, openProduct, go } = useApp();
  const sku = "POM-" + p.id.toUpperCase() + "-" + state.size.replace(/\W/g, "");

  const shelf = p.sizes.map((s, i) => ({
    label: s,
    fg: state.size === s ? "var(--gold-400)" : "var(--text-primary)",
    stock: i === 0 ? "nicht vorrätig" : i === p.sizes.length - 1 ? "4 Stk. · Regal B2" : "2 Stk. · Regal B2",
    stockFg: i === 0 ? "var(--text-muted)" : "var(--text-success)",
  }));

  return (
    <div className="scan-result">
      <div className="scan-result__flag">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span className="eyebrow eyebrow--gold">Regal-Code erkannt</span>
      </div>
      <div className="scan-result__summary">
        <div className="scan-result__thumb">4:5</div>
        <div className="scan-result__info">
          <span className="label label--muted">{p.line}</span>
          <span className="scan-result__name">{p.name}</span>
          <span className="scan-result__sku">{sku}</span>
          <span className="scan-result__price">{p.price} €</span>
        </div>
      </div>
      <div className="rule" />
      <span className="label label--secondary">Im Regal · Filiale Bangkok Thonglor</span>
      <div className="shelf-list">
        {shelf.map((sh) => (
          <button key={sh.label} className="shelf-list__row" onClick={() => setState((s) => ({ ...s, size: sh.label }))}>
            <span className="shelf-list__label" style={{ color: sh.fg }}>{sh.label}</span>
            <span className="shelf-list__stock" style={{ color: sh.stockFg }}>{sh.stock}</span>
          </button>
        ))}
      </div>
      <button className="btn btn--primary btn--full" onClick={addToBag}>{state.size} in den Warenkorb</button>
      <button className="btn btn--secondary btn--full" onClick={() => openProduct(p.id)}>Alle Details</button>
      <button className="text-btn" onClick={() => go("scan")}>Weiter scannen</button>
    </div>
  );
}
