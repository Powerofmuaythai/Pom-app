import { PRODUCTS } from "../data";
import { useApp } from "../context/AppContext";
import { ProductTile } from "../components/ProductTile";
import heroImg from "../assets/hero-fighter.jpg";
import muayThaiCatImg from "../assets/gloves-wood.jpg";
import ausstattungCatImg from "../assets/gym-mat.jpg";

const BESTSELLER_IDS = ["bgv1", "shin", "pads", "shorts"];
const CATEGORY_CARDS = [
  { name: "Muay Thai", cat: "Muay Thai", image: muayThaiCatImg },
  { name: "Ausstattung", cat: "Ausstattung", image: ausstattungCatImg },
];

export function Home() {
  const { openProduct, go } = useApp();
  const bestsellers = BESTSELLER_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!);

  return (
    <div className="home">
      <div className="home__hero home__hero--photo">
        <img src={heroImg} alt="" className="home__hero-img" />
        <div className="home__hero-scrim" />
        <div className="home__hero-content">
          <span className="eyebrow eyebrow--gold">Neu · Nakhon Linie</span>
          <h1 className="home__hero-title">
            Sparring<br /><span className="home__hero-title-accent">Handschuhe</span>
          </h1>
          <span className="home__hero-meta">Rindsleder · 3 Schaumlagen · 10–16 oz</span>
          <button className="btn btn--primary home__hero-cta" onClick={() => openProduct("bgv1")}>
            Kollektion ansehen
          </button>
        </div>
      </div>

      <div className="trust-row">
        <div className="trust-row__item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
          </svg>
          <span className="trust-row__label">Getestet<br />Lumpinee</span>
        </div>
        <div className="trust-row__item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 17V5H2v12h12z" /><path d="M14 9h4l4 4v4h-8" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" />
          </svg>
          <span className="trust-row__label">Versand<br />3 Tage</span>
        </div>
        <div className="trust-row__item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" />
          </svg>
          <span className="trust-row__label">30 Tage<br />Rückgabe</span>
        </div>
      </div>

      <div className="home-section">
        <div className="home-section__head">
          <h2 className="home-section__title">Bestseller</h2>
          <button className="link-btn" onClick={() => go("category")}>Alle ansehen</button>
        </div>
        <div className="home-section__scroll">
          {bestsellers.map((p) => (
            <ProductTile key={p.id} product={p} width={180} onClick={() => openProduct(p.id)} />
          ))}
        </div>
      </div>

      <div className="cat-cards">
        {CATEGORY_CARDS.map((c) => (
          <div key={c.name} className="cat-card cat-card--photo" onClick={() => go("category", { cat: c.cat })}>
            <img src={c.image} alt="" className="cat-card__img" />
            <div className="cat-card__scrim" />
            <div className="cat-card__content">
              <span className="cat-card__name">{c.name}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="scan-promo">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M7 12h10" />
        </svg>
        <span className="scan-promo__title">Equipment scannen</span>
        <p className="scan-promo__text">
          Im Store den Code am Regal scannen für Größen und Lagerbestand. Bei eigener Ausrüstung den QR am Innenlabel scannen: Echtheit, Pflege, Nachbestellung.
        </p>
        <button className="btn btn--secondary" onClick={() => go("scan")}>Scanner öffnen</button>
      </div>
    </div>
  );
}
