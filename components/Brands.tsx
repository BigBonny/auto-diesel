"use client";

const NAVY = "#274554";

const brands = [
  { name: "Bosch",       img: "/assets/1-medium_default.jpg" },
  { name: "Denso",       img: "/assets/2-medium_default.jpg" },
  { name: "KKK",         img: "/assets/22-medium_default.jpg" },
  { name: "Delphi",      img: "/assets/5-medium_default.jpg" },
  { name: "Siemens/VDO", img: "/assets/4-medium_default.jpg" },
  { name: "IHI",         img: "/assets/6-medium_default.jpg" },
  { name: "Borgwarner",  img: "/assets/16-medium_default.jpg" },
  { name: "Mitsubishi",  img: "/assets/7-medium_default.jpg" },
];

const doubled = [...brands, ...brands];

export default function Brands() {
  return (
    <section style={{ background: "#f4f6f8", padding: "48px 0" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{
          textAlign: "center",
          fontFamily: "var(--font-heading)",
          fontSize: "1.05rem", fontWeight: 700,
          color: "#94a3b8", margin: "0 0 32px",
          textTransform: "uppercase", letterSpacing: "0.12em",
        }}>
          Nos marques constructeurs
        </h2>

        <div style={{
          overflow: "hidden",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}>
          <div className="animate-marquee" style={{ alignItems: "center" }}>
            {doubled.map((b, i) => (
              <div key={i} style={{
                margin: "0 28px", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 130, height: 90,
                opacity: 0.55, transition: "opacity 0.25s, filter 0.25s",
                filter: "grayscale(100%)",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.filter = "grayscale(0%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.55";
                  (e.currentTarget as HTMLElement).style.filter = "grayscale(100%)";
                }}
              >
                <img src={b.img} alt={b.name}
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
