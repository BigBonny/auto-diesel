const NAVY   = "#274554";
const ORANGE = "#ff5700";

const items = [
  { icon: "/assets/livraison.svg",          title: "Livraison",  highlight: "GRATUITE",   sub: "24h à 48h" },
  { icon: "/assets/garantis.svg",           title: "Produits",   highlight: "GARANTIS",   sub: "2 ans" },
  { icon: "/assets/satisfait-rembourse.svg", title: "Satisfait", highlight: "REMBOURSÉ",  sub: "Voir les conditions", link: true },
  { icon: "/assets/paiement.svg",           title: "Paiement",   highlight: "SÉCURISÉ",   sub: "en 3 ou 4x sans frais" },
  { icon: "/assets/support.svg",            title: "Support",    highlight: "TECHNIQUE",  sub: "Du lundi au vendredi" },
];

export default function Reassurance() {
  return (
    <section style={{ background: "#f4f6f8", padding: "32px 0 24px" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <ul style={{
          listStyle: "none", padding: 0, margin: 0,
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: 20, alignItems: "center",
        }}>
          {items.map((item) => (
            <li key={item.title} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ flexShrink: 0 }}>
                <img src={item.icon} alt="" style={{ width: 56, height: 56 }} />
              </div>
              <div style={{ fontSize: "0.95rem", color: NAVY, lineHeight: 1.4 }}>
                <div style={{ fontWeight: 600 }}>
                  {item.title}{" "}
                  <span style={{ color: ORANGE, fontWeight: 800, fontFamily: "var(--font-heading)" }}>{item.highlight}</span>
                </div>
                {item.link ? (
                  <a href="#" style={{ color: "#6b7280", textDecoration: "underline", fontSize: "0.85rem" }}>{item.sub}</a>
                ) : (
                  <div style={{ color: "#6b7280", fontSize: "0.85rem" }}>{item.sub}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
