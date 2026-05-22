"use client";

import { useState } from "react";

const NAVY = "#274554";
const TEAL = "#5b9aa3";

type Category = "Turbos" | "Injecteurs" | "Pompes HP";

const data: Record<Category, { brand: string; items: string[] }[]> = {
  "Turbos": [
    { brand: "TURBO RENAULT", items: ["Turbo Clio 3", "Turbo Renault Kangoo", "Turbo Renault Megane 3", "Turbo Renault Scenic", "Turbo Renault Trafic II"] },
    { brand: "TURBO PEUGEOT", items: ["Turbo Peugeot 207", "Turbo Peugeot 3008", "Turbo Peugeot 307", "Turbo Peugeot 308", "Turbo Peugeot 5008"] },
    { brand: "TURBO VOLKSWAGEN", items: ["Turbo Golf 6", "Turbo Golf 7", "Turbo Volkswagen Polo", "Turbo Volkswagen Tiguan", "Turbo Volkswagen Touran"] },
  ],
  "Injecteurs": [
    { brand: "INJECTEUR RENAULT", items: ["Injecteur Clio", "Injecteur Megane", "Injecteur Scenic", "Injecteur Trafic", "Injecteur Master"] },
    { brand: "INJECTEUR PEUGEOT", items: ["Injecteur 207", "Injecteur 308", "Injecteur 407", "Injecteur 508", "Injecteur Partner"] },
    { brand: "INJECTEUR BMW",     items: ["Injecteur Série 1", "Injecteur Série 3", "Injecteur Série 5", "Injecteur X3", "Injecteur X5"] },
  ],
  "Pompes HP": [
    { brand: "POMPE RENAULT",    items: ["Pompe Clio", "Pompe Megane", "Pompe Scenic", "Pompe Kangoo", "Pompe Trafic"] },
    { brand: "POMPE CITROËN",    items: ["Pompe C3", "Pompe C4", "Pompe C5", "Pompe Berlingo", "Pompe Jumpy"] },
    { brand: "POMPE PEUGEOT",    items: ["Pompe 207", "Pompe 307", "Pompe 308", "Pompe 407", "Pompe Partner"] },
  ],
};

export default function TopPiecesMarques() {
  const [active, setActive] = useState<Category>("Turbos");

  return (
    <section style={{ background: "#f4f6f8", padding: "60px 0" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <div className="tpm-grid" style={{
          display: "grid", gridTemplateColumns: "360px 1fr", gap: 0,
          alignItems: "stretch",
        }}>
          {/* Left navy panel */}
          <div style={{
            background: NAVY, color: "#fff", borderRadius: 8,
            padding: "36px 60px 36px 32px",
            display: "flex", flexDirection: "column", gap: 16,
            position: "relative", zIndex: 1,
          }}>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.65rem", fontWeight: 800, color: "#fff",
              margin: 0, lineHeight: 1.25,
            }}>
              Le top{" "}
              <span style={{ position: "relative", display: "inline-block", paddingBottom: 4 }}>
                pièces
                <svg
                  aria-hidden viewBox="0 0 130 18" preserveAspectRatio="none"
                  style={{
                    position: "absolute", left: -4, right: -4, bottom: -6,
                    width: "calc(100% + 8px)", height: 14, pointerEvents: "none",
                  }}>
                  <path
                    d="M2 9 C 20 3, 50 14, 70 8 C 90 3, 110 12, 128 7"
                    fill="none" stroke={TEAL} strokeWidth="8" strokeLinecap="round" opacity="0.85"
                  />
                </svg>
              </span>
              <br />par marques
            </h2>

            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 6 }}>
              {(Object.keys(data) as Category[]).map((c) => {
                const isOn = active === c;
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    style={{
                      background: "none", border: "none", textAlign: "right",
                      padding: "8px 0", cursor: "pointer",
                      fontFamily: "var(--font-heading)",
                      fontSize: isOn ? "1.4rem" : "1.15rem",
                      fontWeight: isOn ? 800 : 600,
                      color: isOn ? TEAL : "#fff",
                      transition: "all 0.2s",
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: 3 cards — overlap into navy panel */}
          <div className="tpm-cards" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
            marginLeft: -60, position: "relative", zIndex: 2,
            alignSelf: "center",
          }}>
            {data[active].map((col) => (
              <div key={col.brand} style={{
                background: "#fff", borderRadius: 8, padding: "26px 22px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.05rem", fontWeight: 800, color: NAVY,
                  margin: "0 0 18px", letterSpacing: "0.03em",
                }}>{col.brand}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.items.map((it) => (
                    <li key={it}>
                      <a href="#" style={{
                        color: "#475569", fontSize: "0.88rem", transition: "color 0.2s",
                      }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = NAVY)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                      >{it}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 32 }}>
          {(Object.keys(data) as Category[]).map((c) => (
            <button key={c} onClick={() => setActive(c)} aria-label={c}
              style={{
                width: active === c ? 36 : 20, height: 6, borderRadius: 3,
                background: active === c ? TEAL : "#cbd5e1",
                border: "none", cursor: "pointer", transition: "all 0.2s",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .tpm-grid  { grid-template-columns: 1fr !important; }
          .tpm-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
