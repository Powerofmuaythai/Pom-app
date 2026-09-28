import { PRODUCTS } from "../data";
import { useApp } from "../context/AppContext";
import { Placeholder } from "../components/Placeholder";
import { ProductTile } from "../components/ProductTile";

const REVIEWS = [
  { who: "Kru Somchai · Bangkok", text: "Nach sechs Monaten täglichem Sparring keine Naht offen.", stars: 5 },
  { who: "Lena B. · Köln", text: "Passform bei 14 oz eher knapp, eine Größe größer nehmen.", stars: 4 },
];

const TABS: { key: "desc" | "spec" | "rev"; label: string }[] = [
  { key: "desc", label: "Beschreibung" },
  { key: "spec", label: "Specs" },
  { key: "rev", label: "Bewertungen" },
];

export function Product() {
  const { state, setState, p, chip, openProduct } = useApp();

  const wishOn = state.wish.includes(p.id);
  const toggleWish = () =>
    setState((s) => ({ ...s, wish: s.wish.includes(p.id) ? s.wish.filter((x) => x !== p.id) : [...s.wish, p.id] }));

  const crossTiles = PRODUCTS.filter((x) => x.id !== p.id).slice(0, 2);

  return (
    <div className="product">
      {p.image ? (
        <div className="product__hero product__hero--photo">
          <img src={p.image} alt={p.name} className="product__hero-img" />
          {p.badge && <span className="badge product__badge">{p.badge}</span>}
          <button
            className="icon-btn product__wish"
            aria-label="Merken"
            onClick={toggleWish}
            style={{ color: wishOn ? "var(--gold-500)" : "var(--bone-050)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={wishOn ? "var(--gold-500)" : "none"} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>
      ) : (
        <Placeholder aspect="4/5" className="product__hero" label="Produkt 4:5 · freigestellt">
          {p.badge && <span className="badge product__badge">{p.badge}</span>}
          <button
            className="icon-btn product__wish"
            aria-label="Merken"
            onClick={toggleWish}
            style={{ color: wishOn ? "var(--gold-500)" : "var(--bone-050)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={wishOn ? "var(--gold-500)" : "none"} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </Placeholder>
      )}

      <div className="product__thumbs">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="product__thumb" style={{ boxShadow: n === 1 ? "var(--inset-gold)" : "var(--inset-hairline)" }}>
            {n}
          </div>
        ))}
      </div>

      <div className="product__body">
        <span className="eyebrow eyebrow--gold">{p.line}</span>
        <h1 className="product__name">{p.name}</h1>
        <div className="product__price-row">
          <span className="product__price">{p.price} €</span>
          <span className="product__price-note">inkl. MwSt. · zzgl. Versand</span>
        </div>
        <p className="product__blurb">{p.blurb}</p>

        <div className="rule" />

        <div className="product__size-head">
          <span className="label label--secondary">Größe wählen</span>
          <button className="text-link" onClick={() => setState((s) => ({ ...s, sheet: "size" }))}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z" />
              <path d="m14.5 12.5-2-2" /><path d="m11.5 15.5-2-2" /><path d="m17.5 9.5-2-2" />
            </svg>
            Größentabelle
          </button>
        </div>
        <div className="chip-row">
          {p.sizes.map((s) => {
            const c = chip(state.size === s, s, () => setState((st) => ({ ...st, size: s })));
            return (
              <button key={s} className="chip chip--size" style={{ background: c.bg, color: c.fg, boxShadow: c.ring }} onClick={c.pick}>
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="product__stock">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Auf Lager · Versand heute bis 16 Uhr
        </div>

        <div className="rule" />

        <div className="product__tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              className="product__tab"
              style={{
                color: state.tab === t.key ? "var(--text-primary)" : "var(--text-muted)",
                borderBottom: state.tab === t.key ? "2px solid var(--gold-500)" : "2px solid transparent",
              }}
              onClick={() => setState((s) => ({ ...s, tab: t.key }))}
            >
              {t.label}
            </button>
          ))}
        </div>

        {state.tab === "desc" && <p className="product__long">{p.long}</p>}
        {state.tab === "spec" && (
          <div className="spec-list">
            {p.specs.map(([k, v]) => (
              <div key={k} className="spec-list__row">
                <span className="spec-list__key">{k}</span>
                <span className="spec-list__val">{v}</span>
              </div>
            ))}
          </div>
        )}
        {state.tab === "rev" && (
          <div className="reviews">
            {REVIEWS.map((r) => (
              <div key={r.who} className="reviews__item">
                <div className="reviews__stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < r.stars ? "var(--gold-500)" : "var(--black-700)"} stroke="none">
                      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                    </svg>
                  ))}
                </div>
                <span className="reviews__text">{r.text}</span>
                <span className="reviews__who">{r.who}</span>
              </div>
            ))}
          </div>
        )}

        <div className="rule" style={{ marginTop: 8 }} />
        <h2 className="product__cross-title">Passt dazu</h2>
        <div className="tile-grid">
          {crossTiles.map((t) => (
            <ProductTile key={t.id} product={t} onClick={() => openProduct(t.id)} compactPrice />
          ))}
        </div>
      </div>
    </div>
  );
}
