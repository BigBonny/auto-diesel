"use client";

const NAVY = "#274554";

const posts = [
  {
    date: { day: "24", month: "FÉVR." },
    title: "Quelle fiabilité pour le moteur 1.0 SCe ?",
    excerpt: "Le moteur 1.0 SCe (H4D) est le petit poucet de la gamme Renault/Dacia. Remplaçant du vieux 1.2 16v (D4F), ce 3 cylindres brille par son absence de technologies complexes : pas de turbo, pas d'injection directe, pas de filtre à particules capricieux…",
    img: "/assets/blog-71-moteur-10-sce.jpg",
  },
  {
    date: { day: "14", month: "JANV." },
    title: "Quelle fiabilité pour le moteur Toyota 1.2 Turbo ?",
    excerpt: "Le moteur 1.2 Turbo de Toyota (8NR-F1S) est une anomalie positive sur le marché. Contrairement aux Peugeot 1.2 Puretech ou Ford 1.0 Ecoboost, Toyota a choisi de conserver 4 cylindres, offrant une bien meilleure onctuosité et moins de vibrations…",
    img: "/assets/blog-70-toyota-1-2-turbo.jpg",
  },
  {
    date: { day: "09", month: "JANV." },
    title: "Quelle fiabilité pour le moteur 0.9 TCe ?",
    excerpt: "Le moteur 0.9 TCe (H4Bt) est sans doute le moteur essence le plus fiable produit par Renault ces dix dernières années. Souvent confondu à tort avec le catastrophique 1.2 TCe qui consomme de l'huile et casse (scandale Motorgate)…",
    img: "/assets/blog-69-fiabilite-moteur-09-tce.jpg",
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ background: "#f4f6f8", padding: "64px 0" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.2em",
            color: "#9eaeac", textTransform: "uppercase", marginBottom: 10,
          }}>
            Le blog de Auto Diesel
          </div>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.4rem, 2.6vw, 1.95rem)", fontWeight: 800,
            color: NAVY, margin: 0,
          }}>
            Le blog dédié à la mécanique et aux pièces auto
          </h2>
        </div>

        <div className="blog-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22,
        }}>
          {posts.map((p, i) => (
            <article key={i} style={{
              display: "flex", flexDirection: "column",
              position: "relative", cursor: "pointer",
            }}>
              <a href="#" style={{ display: "block" }}>
                <img src={p.img} alt="" style={{
                  width: "100%", height: "auto", display: "block",
                  borderRadius: 20, boxShadow: "0 3px 20px 0 rgba(0,0,0,0.16)",
                }} />
              </a>

              {/* Date badge */}
              <div style={{
                position: "absolute", top: 10, right: 0,
                color: "#fff", fontSize: "1.625rem", lineHeight: 1.3846153846,
                fontWeight: "bolder", backgroundColor: NAVY,
                borderRadius: 10, padding: "3px 10px",
                minHeight: 80, minWidth: 80, textAlign: "center",
                fontFamily: "var(--font-heading)", zIndex: 2,
              }}>
                <div>{p.date.day}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>{p.date.month}</div>
              </div>

              {/* Content card overlapping image */}
              <div style={{
                position: "relative", top: -30, left: 15, marginBottom: -4,
                backgroundColor: "#fff", boxShadow: "0 3px 20px 0 #b9d1ce",
                padding: "34px 34px 20px", borderRadius: 20, flexGrow: 1,
                zIndex: 1,
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.625rem", fontWeight: 700, color: NAVY,
                  margin: "0 0 12px", lineHeight: 1.3846153846,
                }}>{p.title}</h3>
                <p style={{
                  margin: 0, fontSize: "0.85rem", color: "#475569", lineHeight: 1.55,
                  display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
