"use client";


const NAVY   = "#274554";
const ORANGE = "#93c572";
const GREEN  = "#86C82F";

type Product = {
  id: number; name: string; price: number; original: number;
  img: string; brand?: string; availability: "24/48H" | "2-3 jours";
};

const turbos: Product[] = [
  { id: 3912,  name: "Turbo pour Volvo V40 1.9 TD 90 CV - 92 CV Réf: 454204-0002",
    price: 379.00, original: 473.75, img: "/assets/turbo-pour-volvo-v40-19-td-90-cv-92-cv-ref-454204-0002.jpg",
    brand: "/assets/13.jpg", availability: "24/48H" },
  { id: 32136, name: "Turbo pour BMW série 5 (F10) 525 d 218 CV",
    price: 549.00, original: 686.25, img: "/assets/turbo-pour-bmw-serie-5-f10-525-d-218-cv-54359980060-borgwarner.jpg",
    brand: "/assets/16.jpg", availability: "24/48H" },
  { id: 33061, name: "Turbo pour Citroën DS3 Décapotable 1.6 THP 150 CV",
    price: 489.00, original: 611.25, img: "/assets/turbo-pour-citroen-ds3-decapotable-16-thp-150-150-cv-53039880425-borgwarn.jpg",
    brand: "/assets/16.jpg", availability: "24/48H" },
  { id: 37329, name: "Turbo pour Opel COMBO (X12) 1.6 CDTi 105 CV",
    price: 359.00, original: 448.75, img: "/assets/turbo-pour-opel-combo-x12-16-cdti-105-cv-807068-5002s-garrett.jpg",
    brand: "/assets/15.jpg", availability: "2-3 jours" },
  { id: 3511,  name: "Turbo pour Volkswagen Industriemotor 1.9 TD 102 CV Réf: 5439 988 0085",
    price: 419.00, original: 523.75, img: "/assets/turbo-pour-volkswagen-industriemotor-19-td-102-cv-ref-5439-988-0085.jpg",
    availability: "24/48H" },
  { id: 36006, name: "Turbo pour Lancia DEDRA SW 1.9 TDS 90 CV",
    price: 339.00, original: 423.75, img: "/assets/turbo-desktop.jpg",
    brand: "/assets/16.jpg", availability: "2-3 jours" },
];

const injecteurs: Product[] = [
  { id: 12292, name: "Injecteur pour audi q5 2.0 TFSI hybrid quattro 211 cv - 026150001A - Bosch",
    price: 234.50, original: 293.12, img: "/assets/injecteur-pour-audi-q5-20-tfsi-hybrid-quattro-211-cv-026150001a.jpg",
    brand: "/assets/1.jpg", availability: "24/48H" },
  { id: 47302, name: "Injecteur pour MERCEDES-BENZ CLASSE E (VF210) E 270 CDI 170 CV",
    price: 178.32, original: 222.90, img: "/assets/injecteur-pour-mercedes-benz-classe-e-vf210-e-270-cdi-170-cv-0445110121-b.jpg",
    brand: "/assets/1.jpg", availability: "2-3 jours" },
  { id: 19454, name: "Injecteur pour Toyota Yaris 1.4 D-4D 75 CV",
    price: 194.02, original: 242.53, img: "/assets/injecteur-pour-toyota-yaris-i-14-d-4d-75-cv-0445116009.jpg",
    brand: "/assets/1.jpg", availability: "24/48H" },
  { id: 17898, name: "Injecteur pour Ford transit courier b460 1.5 TDCi 95 CV",
    price: 144.53, original: 180.66, img: "/assets/injecteur-pour-ford-transit-courier-b460-15-tdci-95-cv-0445110488.jpg",
    brand: "/assets/1.jpg", availability: "24/48H" },
  { id: 15479, name: "Injecteur pour BMW série 4 Coupé (F32, F82) 418 d 150 CV",
    price: 168.42, original: 210.53, img: "/assets/injecteur-desktop.jpg",
    brand: "/assets/1.jpg", availability: "2-3 jours" },
  { id: 52617, name: "Injecteur pour Skoda KODIAQ 1 2.0 TDI 4x4 200 CV",
    price: 151.32, original: 189.15, img: "/assets/injecteur-desktop.jpg",
    brand: "/assets/1.jpg", availability: "2-3 jours" },
];

function ProductCard({ p }: { p: Product }) {
  const discount = Math.round((1 - p.price / p.original) * 100);
  return (
    <div className="product-card" style={{
      background: "#fff", border: "1px solid #9eaeac", borderRadius: 20,
      display: "flex", flexDirection: "column",
      padding: 15, position: "relative",
    }}>
      {/* Sale badge */}
      <div style={{
        position: "absolute", top: -11, right: -11, zIndex: 5,
        width: 73, height: 73, color: "#fff", textAlign: "center",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 20, fontWeight: 700,
        background: "radial-gradient(circle, #93c572 0%, #93c572 55%, transparent 55%)",
      }}>
        -{discount}%
      </div>

      {/* Image */}
      <div style={{ position: "relative", minHeight: 245, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {p.brand && (
          <img src={p.brand} alt="" style={{ position: "absolute", top: 5, left: 5, maxWidth: 100, height: "auto", objectFit: "contain", zIndex: 2 }} />
        )}
        <img src={p.img} alt={p.name} style={{ maxWidth: "100%", maxHeight: 220, objectFit: "contain" }} />
      </div>

      {/* Body */}
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: NAVY, lineHeight: 1.2, margin: "0 0 20px" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{p.name}</a>
        </h3>

        {/* Price */}
        <div style={{ textAlign: "center", marginBottom: 25 }}>
          <div style={{ fontSize: 25, fontWeight: 900, color: ORANGE, display: "block" }}>
            {p.price.toFixed(2).replace(".", ",")} €
          </div>
          <div style={{ fontSize: 18, color: "#9eaeac", textDecoration: "line-through" }}>
            {p.original.toFixed(2).replace(".", ",")} €
          </div>
        </div>

        {/* Add to cart */}
        <div style={{ textAlign: "center", marginBottom: 22 }}>
          <button style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            gap: 16, padding: "11px 25px", borderRadius: 999,
            fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.5,
            color: "#fff", backgroundColor: ORANGE, border: "1px solid #93c572",
            cursor: "pointer", textTransform: "uppercase", fontFamily: "inherit",
            transition: "background .2s, color .2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7aa55e")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
          >
            <span className="label">Ajouter au panier</span>
            <span className="icon">
              <img src="/assets/icon-cart.svg" alt="" style={{ width: 20, height: 20, display: "block" }} />
            </span>
          </button>
        </div>

        {/* Availability */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, color: GREEN, fontWeight: 600, marginBottom: 12 }}>
          <svg width="20" height="22" viewBox="0 0 27.563 30.6945" fill="none">
            <path d="M13.78 0C13.61 0 13.46 0.04 13.32 0.12L0.44 7.77C0.17 7.93 0 8.23 0 8.54L0 22.15C0 22.46 0.17 22.76 0.44 22.92L13.32 30.56C13.46 30.65 13.61 30.69 13.78 30.69C13.94 30.69 14.1 30.65 14.24 30.56L27.12 22.92C27.39 22.76 27.56 22.46 27.56 22.15L27.56 8.57C27.56 8.41 27.52 8.25 27.45 8.11C27.37 7.97 27.26 7.85 27.12 7.77L14.24 0.12C14.1 0.04 13.94 0 13.78 0ZM13.78 1.95L24.89 8.54L22.31 10.07L11.2 3.47L13.78 1.95Z" fill={GREEN} />
          </svg>
          <span style={{ fontSize: "0.85rem" }}>
            Livraison en {p.availability}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: 20, fontSize: 13, lineHeight: "15px", fontWeight: 700,
        color: NAVY, textTransform: "uppercase", textAlign: "center",
        paddingTop: 12, borderTop: "1px solid #e8ecef",
      }}>
        <div>
          <img src="/assets/paiement-icon.svg" alt="" style={{ display: "block", margin: "0 auto 7px", width: 18, height: 18 }} />
          <span>Paiement en <span style={{ color: ORANGE }}>x3 x4</span></span>
          <strong style={{ marginTop: 2, display: "block", color: "#9eaeac" }}>sans frais</strong>
        </div>
        <div>
          <img src="/assets/livraison-icon.svg" alt="" style={{ display: "block", margin: "0 auto 7px", width: 18, height: 18 }} />
          <span>Livraison</span>
          <strong style={{ marginTop: 2, display: "block", color: "#9eaeac" }}>24h/48h</strong>
        </div>
      </div>
    </div>
  );
}

function ProductSlider({ products, sliderId }: { products: Product[]; sliderId: string }) {
  const scroll = (dir: "left" | "right") => {
    const el = document.getElementById(sliderId);
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 380 : -380, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => scroll("left")} className="slider-arrow" style={arrowStyle("left")}>‹</button>
      <div id={sliderId} style={{
        display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8,
        scrollbarWidth: "none", msOverflowStyle: "none", scrollSnapType: "x mandatory",
      }}>
        {products.map((p) => (
          <div key={p.id} style={{ width: 380, flexShrink: 0, scrollSnapAlign: "start" }}>
            <ProductCard p={p} />
          </div>
        ))}
      </div>
      <button onClick={() => scroll("right")} className="slider-arrow" style={arrowStyle("right")}>›</button>
    </div>
  );
}

const arrowStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute", [side]: -18, top: "50%", transform: "translateY(-50%)",
  zIndex: 10, background: "#fff", border: "1px solid #e8ecef", borderRadius: "50%",
  width: 40, height: 40, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  color: NAVY, fontSize: "1.5rem", fontWeight: 700, lineHeight: 1, padding: 0,
});

export default function Products() {
  return (
    <>
      {/* Turbos */}
      <section id="products" style={{ background: "#f4f6f8", padding: "32px 0 32px" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
          <p style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.6rem", fontWeight: 800, color: NAVY, margin: "0 0 28px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <img src="/assets/illu-turbo.svg" alt="" width={48} height={48} />
            <span>Turbos</span>
          </p>
          <ProductSlider products={turbos} sliderId="turbos-slider" />
        </div>
      </section>

      {/* Injecteurs */}
      <section style={{ background: "#f4f6f8", padding: "16px 0 56px" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
          <p style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.6rem", fontWeight: 800, color: NAVY, margin: "0 0 28px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <img src="/assets/illu-injecteur.svg" alt="" width={48} height={48} />
            <span>Injecteurs</span>
          </p>
          <ProductSlider products={injecteurs} sliderId="injecteurs-slider" />
        </div>
      </section>

      <style jsx global>{`
        #turbos-slider::-webkit-scrollbar,
        #injecteurs-slider::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
