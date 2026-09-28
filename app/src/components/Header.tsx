import { useApp } from "../context/AppContext";
import { TITLES } from "../data";

export function Header() {
  const { state, go, back, p } = useApp();
  const { screen } = state;

  const isHome = screen === "home";
  const showBack = !isHome;
  const showPromo = isHome;
  const screenTitle = TITLES[screen] || "";
  const headerMeta = screen === "category" ? state.cat : screen === "product" ? p.line : "";
  const bagCount = state.bag.reduce((a, l) => a + l.qty, 0);
  const hasBag = state.bag.length > 0;

  return (
    <header className="app-header">
      {isHome && (
        <div className="app-header__row">
          <span className="app-header__logo">P.O.M</span>
          <div className="app-header__icons">
            <button className="icon-btn" aria-label="Suche" onClick={() => go("search")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.6-3.6" />
              </svg>
            </button>
            <button className="icon-btn icon-btn--primary" aria-label="Warenkorb" onClick={() => go("bag")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {hasBag && <span className="app-header__badge">{bagCount}</span>}
            </button>
          </div>
        </div>
      )}
      {showBack && (
        <div className="app-header__row app-header__row--back">
          <button className="icon-btn app-header__back" aria-label="Zurück" onClick={back}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <span className="app-header__title">{screenTitle}</span>
          <span style={{ flex: 1 }} />
          <span className="app-header__meta">{headerMeta}</span>
        </div>
      )}
      {showPromo && (
        <div className="app-header__promo">Kostenloser Versand ab 99 € · Bangkok → 3 Tage</div>
      )}
    </header>
  );
}
