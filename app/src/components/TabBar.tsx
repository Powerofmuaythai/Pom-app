import { useApp } from "../context/AppContext";

function tabColor(on: boolean) {
  return on ? "var(--gold-400)" : "var(--text-muted)";
}

export function TabBar() {
  const { state, goHome, go } = useApp();
  const sc = state.screen;

  return (
    <nav className="tabbar">
      <button className="tabbar__tab" style={{ color: tabColor(sc === "home") }} onClick={goHome}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10 12 3l9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <span className="tabbar__label">Start</span>
      </button>
      <button className="tabbar__tab" style={{ color: tabColor(sc === "category") }} onClick={() => go("category")}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 5h18" />
          <path d="M3 12h18" />
          <path d="M3 19h18" />
        </svg>
        <span className="tabbar__label">Shop</span>
      </button>
      <div className="tabbar__scan-slot">
        <button className="tabbar__scan" aria-label="Scannen" onClick={() => go("scan")}>
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <path d="M7 12h10" />
          </svg>
        </button>
      </div>
      <button className="tabbar__tab" style={{ color: tabColor(sc === "wish") }} onClick={() => go("wish")}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <span className="tabbar__label">Merken</span>
      </button>
      <button className="tabbar__tab" style={{ color: tabColor(sc === "account") }} onClick={() => go("account")}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
        <span className="tabbar__label">Konto</span>
      </button>
    </nav>
  );
}
