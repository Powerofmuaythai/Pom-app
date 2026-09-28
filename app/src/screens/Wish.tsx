import { PRODUCTS } from "../data";
import { useApp } from "../context/AppContext";

export function Wish() {
  const { state, openProduct } = useApp();
  const tiles = state.wish.map((id) => PRODUCTS.find((p) => p.id === id)!);

  return (
    <div className="wish">
      <span className="wish__count">{state.wish.length} Artikel gemerkt</span>
      {tiles.map((w) => (
        <div key={w.id} className="bag-line">
          <div className="bag-line__thumb" onClick={() => openProduct(w.id)}>4:5</div>
          <div className="bag-line__body">
            <span className="bag-line__name">{w.name}</span>
            <span className="bag-line__meta">{w.line} · {w.sizes.join(" · ")}</span>
            <span className="bag-line__sum">{w.price} €</span>
            <button className="btn btn--secondary btn--sm wish__pick" onClick={() => openProduct(w.id)}>Größe wählen</button>
          </div>
        </div>
      ))}
    </div>
  );
}
