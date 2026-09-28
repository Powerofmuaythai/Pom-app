import { useApp } from "../context/AppContext";
import { money } from "../data";

export function Bag() {
  const { state, setState, go, bagLines, bagTotalNum, applyVoucher, checkout } = useApp();
  const bagEmpty = state.bag.length === 0;
  const hasBag = state.bag.length > 0;
  const total = money(bagTotalNum);
  const shipping = bagTotalNum >= 99 ? "kostenlos" : "6,90 €";

  return (
    <div className="bag">
      {bagEmpty && (
        <div className="bag__empty">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--bone-600)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="bag__empty-title">Warenkorb leer</span>
          <p className="bag__empty-text">Nichts ausgewählt. Das Sortiment beginnt bei Bandagen für 19,00 €.</p>
          <button className="btn btn--secondary" onClick={() => go("category")}>Sortiment öffnen</button>
        </div>
      )}

      {bagLines.map((l, i) => (
        <div key={i} className="bag-line">
          <div className="bag-line__thumb">4:5</div>
          <div className="bag-line__body">
            <span className="bag-line__name">{l.name}</span>
            <span className="bag-line__meta">{l.meta}</span>
            <div className="bag-line__footer">
              <div className="stepper stepper--sm">
                <button className="stepper__btn" aria-label="Weniger" onClick={l.dec}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14" /></svg>
                </button>
                <span className="stepper__value">{l.qty}</span>
                <button className="stepper__btn" aria-label="Mehr" onClick={l.inc}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </button>
              </div>
              <span className="bag-line__sum">{l.sum} €</span>
            </div>
          </div>
        </div>
      ))}

      {hasBag && (
        <div className="bag__summary">
          <div className="voucher-row">
            <input
              className="voucher-row__input"
              value={state.voucher}
              onChange={(e) => setState((s) => ({ ...s, voucher: e.target.value }))}
              placeholder="Gutscheincode"
            />
            <button className="btn btn--secondary" onClick={applyVoucher}>Einlösen</button>
          </div>
          <div className="summary-card">
            <div className="summary-card__row"><span>Zwischensumme</span><span>{total} €</span></div>
            <div className="summary-card__row"><span>Versand</span><span>{shipping}</span></div>
            <div className="rule" />
            <div className="summary-card__total">
              <span className="label label--strong">Gesamt</span>
              <span className="summary-card__total-value">{total} €</span>
            </div>
            <span className="summary-card__vat">inkl. 19 % MwSt.</span>
          </div>
          <button className="btn btn--primary btn--full btn--lg" onClick={checkout}>Zur Kasse</button>
        </div>
      )}
    </div>
  );
}
