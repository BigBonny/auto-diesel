"use client";

const NAVY = "#274554";
const ORANGE = "#93c572";
const GREEN = "#86C82F";

const rows = [
  { label: "Fiabilité",     desc: "Les pièces reconditionnées subissent des tests rigoureux et sont certifiées selon les mêmes normes que les pièces neuves.", echange: 3, neuf: 3, occasion: 1 },
  { label: "Économie",      desc: "Permettant de réaliser des économies allant de 30 à 60% par rapport aux pièces neuves.", echange: 3, neuf: 1, occasion: 3 },
  { label: "Écologie",      desc: "Réduction de 85% de la consommation d'énergie par rapport à la fabrication de pièces neuves.", echange: 2, neuf: 1, occasion: 3 },
  { label: "Disponibilité", desc: "Plus de 3000 références en stock pour tous types de véhicules et marques, expédié sous 24/48h.", echange: 3, neuf: 2, occasion: 2 },
];

function Checks({ count, green }: { count: number; green?: boolean }) {
  const color = green ? GREEN : NAVY;
  return (
    <div style={{ display: "flex", gap: 2, justifyContent: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ))}
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section style={{ background: "#f4f6f8", padding: "64px 0" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{
          textAlign: "center",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.4rem, 2.6vw, 1.95rem)", fontWeight: 800,
          color: NAVY, margin: "0 0 36px",
        }}>
          Pourquoi choisir des pièces{" "}
          <span style={{ position: "relative", display: "inline-block", padding: "0 4px" }}>
            reconditionnées ?
            <svg aria-hidden viewBox="0 0 300 60" preserveAspectRatio="none"
              style={{ position: "absolute", inset: "-8% -4%", width: "108%", height: "120%", pointerEvents: "none" }}>
              <path
                d="M14 32 C 30 8, 130 4, 200 8 C 270 12, 296 24, 290 36 C 284 50, 200 56, 130 54 C 60 52, 10 46, 12 36"
                fill="none" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: 8, overflow: "hidden", minWidth: 720 }}>
            <thead>
              <tr>
                <th style={{ ...cellHead, textAlign: "left" }} />
                <th style={{ ...cellHead, background: ORANGE, color: "#fff" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <img src="/assets/jaime.svg" alt="" style={{ width: 22, height: 22, filter: "brightness(0) invert(1)" }} />
                    Turbos échange standard
                  </div>
                </th>
                <th style={cellHead}>Turbos neuf</th>
                <th style={cellHead}>Turbos occasion</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                  <td style={{ ...cell, textAlign: "left", padding: "20px 22px" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 800, color: NAVY, marginBottom: 6 }}>
                      {r.label}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#6b7280", lineHeight: 1.45 }}>
                      {r.desc}
                    </div>
                  </td>
                  <td style={{ ...cell, background: "#fff5f1", borderLeft: `3px solid ${ORANGE}`, borderRight: `3px solid ${ORANGE}` }}>
                    <Checks count={r.echange} green />
                  </td>
                  <td style={cell}>
                    <Checks count={r.neuf} />
                  </td>
                  <td style={cell}>
                    <Checks count={r.occasion} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const cellHead: React.CSSProperties = {
  padding: "16px 14px", textAlign: "center",
  fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.92rem",
  color: NAVY, background: "#fff", borderBottom: "1px solid #e8ecef",
};

const cell: React.CSSProperties = {
  padding: "20px 14px", textAlign: "center", verticalAlign: "middle",
  borderBottom: "1px solid #f0f2f5",
};
