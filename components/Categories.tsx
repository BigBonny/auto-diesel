"use client";

const NAVY   = "#274554";
const ORANGE = "#93c572";

const cats = [
  { title: "TURBOS",     count: "180 000 produits", img: "/assets/category_1.png", href: "/catalogue/turbos" },
  { title: "INJECTEURS", count: "210 000 produits", img: "/assets/category_2.png", href: "/catalogue/injecteurs" },
  { title: "POMPES HP",  count: "160 000 produits", img: "/assets/category_3.png", href: "/catalogue/pompes-hp" },
];

export default function Categories() {
  return (
    <section id="catalogue" style={{ background: "#f4f6f8", padding: "60px 0 10px", marginBottom: 50 }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.7rem", fontWeight: 800, color: NAVY,
          margin: "0 0 26px",
        }}>
          Nos produits
        </h2>

        <div className="cat-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 18,
        }}>
          {/* Highlight box (dark navy) */}
          <div style={{
            background: NAVY, color: "#fff", borderRadius: 8,
            padding: "26px 24px", display: "flex", alignItems: "center",
            justifyContent: "center", minHeight: 140, textAlign: "center",
          }}>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5625rem", fontWeight: "bolder", lineHeight: 1.08,
              textTransform: "uppercase",
            }}>
              Plus de <span style={{ color: ORANGE }}>580 000</span><br />
              produits au catalogue
            </div>
          </div>

          {/* Category cards */}
          {cats.map((c) => (
            <a key={c.title} href={c.href} style={{ color: "inherit" }}>
              <div style={{
                background: "#fff", borderRadius: 8, padding: "22px 22px",
                minHeight: 140, position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column",
                border: "1px solid #e8ecef",
                transition: "all 0.25s, transform 0.25s",
                cursor: "pointer",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(39,69,84,0.14)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.15rem", fontWeight: 800, color: NAVY,
                    margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.03em",
                  }}>{c.title}</h3>
                  <p style={{
                    fontSize: "0.82rem", color: ORANGE, fontWeight: 700, margin: 0,
                  }}>
                    {c.count}
                  </p>
                </div>
                <img src={c.img} alt={c.title}
                  style={{
                    position: "absolute", bottom: -4, right: -4,
                    width: "58%", maxHeight: "92%", objectFit: "contain",
                    objectPosition: "bottom right",
                    zIndex: 1,
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cat-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .cat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
