import { useApp } from "../context/AppContext";

export function BuyBar() {
  const { state, setState, addToBag, p } = useApp();

  return (
    <div className="buybar">
      <div className="stepper">
        <button
          className="stepper__btn"
          aria-label="Weniger"
          onClick={() => setState((s) => ({ ...s, qty: Math.max(1, s.qty - 1) }))}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14" />
          </svg>
        </button>
        <span className="stepper__value">{state.qty}</span>
        <button
          className="stepper__btn"
          aria-label="Mehr"
          onClick={() => setState((s) => ({ ...s, qty: s.qty + 1 }))}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14" /><path d="M12 5v14" />
          </svg>
        </button>
      </div>
      <button className="btn btn--primary buybar__cta" onClick={addToBag}>
        In den Warenkorb · {p.price} €
      </button>
    </div>
  );
}
