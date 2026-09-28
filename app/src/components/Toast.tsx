import { useApp } from "../context/AppContext";

export function Toast() {
  const { state, go } = useApp();
  if (!state.toast) return null;
  return (
    <div className="toast">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span className="toast__text">{state.toast}</span>
      <button className="toast__action" onClick={() => go("bag")}>Ansehen</button>
    </div>
  );
}
