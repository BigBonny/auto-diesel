"use client";

const NAVY   = "#274554";
const ORANGE = "#93c572";

export default function ProSection() {
  return (
    <section style={{ background: NAVY, padding: "90px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <div className="pro-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr",
          gap: 40, alignItems: "center",
        }}>
          {/* Left mechanic illustration */}
          <div className="hide-md" style={{ textAlign: "center" }}>
            <img src="/assets/pro1.png" alt="" style={{ maxWidth: "100%", height: "auto", maxHeight: 280 }} />
          </div>

          {/* Center text + CTA */}
          <div style={{ textAlign: "center", color: "#fff" }}>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)",
              fontWeight: 800, color: "#fff",
              margin: "0 0 28px",
            }}>
              Vous êtes professionnel ?
            </h2>

            <img src="/assets/image-mobile-pro.png" alt="" className="show-md" style={{
              display: "none", maxWidth: 220, margin: "0 auto 20px",
            }} />

            <div style={{ fontSize: "1.15rem", lineHeight: 1.9, color: "#fff", marginBottom: 34 }}>
              <span style={{ color: "#fff", fontWeight: 600 }}>Créez votre compte</span><br />
              et bénéficiez d'une réduction de{" "}
              <span style={{ color: ORANGE, fontWeight: 900, fontSize: "1.6rem" }}>10%</span><br />
              sur tous nos produits
            </div>

            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: ORANGE, color: "#fff",
              padding: "16px 38px", borderRadius: 50,
              fontFamily: "var(--font-heading)",
              fontWeight: 800, fontSize: "0.9rem",
              textTransform: "uppercase", letterSpacing: "0.05em",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c43d1e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = ORANGE)}
            >
              <span>Créer votre compte PRO</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9"  cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </a>
          </div>

          {/* Right worker + 10% starburst */}
          <div className="hide-md" style={{ textAlign: "center" }}>
            <img src="/assets/pro2.png" alt="" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .pro-grid { grid-template-columns: 1fr !important; }
          .hide-md  { display: none !important; }
          .show-md  { display: block !important; }
        }
      `}</style>
    </section>
  );
}
