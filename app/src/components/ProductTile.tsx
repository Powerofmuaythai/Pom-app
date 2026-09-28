import type { Product } from "../types";
import { Placeholder } from "./Placeholder";

interface ProductTileProps {
  product: Product;
  onClick: () => void;
  width?: number;
  showSizeLine?: boolean;
  compactPrice?: boolean;
}

export function ProductTile({ product, onClick, width, showSizeLine, compactPrice }: ProductTileProps) {
  const badgeBg = product.badge === "-20%" ? "var(--blood-500)" : "var(--gold-500)";
  const badgeFg = product.badge === "-20%" ? "var(--bone-050)" : "var(--black-1000)";

  return (
    <div className="tile" style={width ? { width, flex: "none" } : undefined} onClick={onClick}>
      {product.image ? (
        <div className="tile__media tile__media--photo" style={{ aspectRatio: "4/5" }}>
          <img src={product.image} alt={product.name} className="tile__img" />
          {product.badge && (
            <span className="badge" style={{ background: badgeBg, color: badgeFg }}>{product.badge}</span>
          )}
        </div>
      ) : (
        <Placeholder aspect="4/5" className="tile__media" label="Produkt 4:5">
          {product.badge && (
            <span className="badge" style={{ background: badgeBg, color: badgeFg }}>{product.badge}</span>
          )}
        </Placeholder>
      )}
      <div className="tile__body">
        <span className="tile__line">{product.line}</span>
        <span className={compactPrice ? "tile__name tile__name--sm" : "tile__name"}>{product.name}</span>
        {showSizeLine && <span className="tile__sizes">{product.sizes.join(" · ")}</span>}
        <span className={compactPrice ? "tile__price tile__price--sm" : "tile__price"}>{product.price} €</span>
      </div>
    </div>
  );
}
