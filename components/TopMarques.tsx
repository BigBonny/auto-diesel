"use client";

const NAVY = "#274554";

const brands = [
  { name: "Volkswagen", img: "/assets/70.jpg" },
  { name: "BMW",        img: "/assets/bmw.jpg" },
  { name: "Fiat",       img: "/assets/23.jpg" },
  { name: "Renault",    img: "/assets/69.jpg" },
  { name: "Ford",       img: "/assets/24.jpg" },
  { name: "Dacia",      img: "/assets/5.jpg" },
  { name: "Citroën",    img: "/assets/13.jpg" },
];

export default function TopMarques() {
  return (
    <section id="manufacturers" style={{ background: NAVY, padding: "48px 0" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.7rem", fontWeight: 800, color: "#fff",
          margin: "0 0 32px",
        }}>
          Top des marques
        </h2>

        <div className="tm-grid" style={{
          display: "grid",
          gridTemplateColumns: `repeat(${brands.length}, 1fr)`,
          gap: 16,
          alignItems: "center",
        }}>
          {brands.map((b) => (
            <a key={b.name} href="#" title={b.name} style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 8, transition: "transform 0.2s",
            }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            >
              <img src={b.img} alt={b.name}
                style={{
                  width: 110, height: 110, objectFit: "contain",
                  display: "block",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) { .tm-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 480px) { .tm-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
