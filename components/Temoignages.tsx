"use client";

import { useState } from "react";

const TEAL = "#1a5460";
const ORANGE = "#93c572";
const NAVY = "#274554";

const reviews = [
  {
    text: "J'ai acheté un injecteur sur Auto Diesel pour remplacer celui de ma Golf 7 GTD. Non seulement la pièce est arrivée en 48h, parfaitement emballée ! Résultat : voiture qui tourne comme une horloge, et une belle économie par rapport au garage.",
    date: "Suite à une expérience du 07 mai 2025",
    rating: 5,
  },
  {
    text: "Service client au top, livraison rapide et turbo conforme à mes attentes pour ma Renault Megane 3. Je recommande sans hésiter.",
    date: "Suite à une expérience du 22 avril 2025",
    rating: 5,
  },
  {
    text: "Très satisfait de mon achat. La pompe HP fonctionne parfaitement et le rapport qualité/prix est imbattable.",
    date: "Suite à une expérience du 14 mars 2025",
    rating: 5,
  },
];

export default function Temoignages() {
  const [idx, setIdx] = useState(0);
  const r = reviews[idx];

  return (
    <section style={{ background: TEAL, padding: "64px 0", color: "#fff" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginBottom: 10,
        }}>
          Témoignages clients
        </div>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.4rem, 2.6vw, 1.95rem)", fontWeight: 800,
          color: "#fff", margin: "0 0 24px",
        }}>
          Ils parlent de nous
        </h2>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 28 }}>
          <img src="/assets/avis.svg" alt="Avis Vérifiés" style={{ height: 38, width: "auto" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", gap: 1, fontSize: "1.2rem" }}>
              {[0, 1, 2, 3].map((i) => <span key={i} style={{ color: "#facc15" }}>★</span>)}
              <span style={{ position: "relative", display: "inline-block", color: "rgba(255,255,255,0.3)" }}>
                ★
                <span style={{ position: "absolute", inset: 0, width: "60%", overflow: "hidden", color: "#facc15" }}>★</span>
              </span>
            </div>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 800 }}>
              4.6<span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>/5</span>
            </span>
          </div>
        </div>

        {/* Review card */}
        <div style={{
          background: "#fff", color: NAVY, borderRadius: 8,
          padding: "44px 40px 36px", position: "relative",
          boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
        }}>
          {/* Top-left quote */}
          <div style={{
            position: "absolute", top: -8, left: 20,
            fontFamily: "var(--font-heading)", fontSize: "4rem", fontWeight: 900,
            color: NAVY, lineHeight: 1,
          }}>"</div>

          {/* Rating */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 18 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i} style={{ color: ORANGE, fontSize: "1.1rem" }}>★</span>
              ))}
            </div>
            <span style={{
              fontFamily: "var(--font-heading)", fontSize: "0.92rem",
              fontWeight: 700, color: NAVY,
            }}>{r.rating}/5</span>
          </div>

          <p style={{
            margin: "0 0 18px", fontSize: "1rem", lineHeight: 1.65, color: NAVY,
          }}>{r.text}</p>

          <p style={{
            margin: 0, fontSize: "0.8rem", color: "#94a3b8",
            textAlign: "center",
          }}>{r.date}</p>

          {/* Bottom-right quote */}
          <div style={{
            position: "absolute", bottom: -28, right: 20,
            fontFamily: "var(--font-heading)", fontSize: "4rem", fontWeight: 900,
            color: ORANGE, lineHeight: 1,
          }}>"</div>
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 36 }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Avis ${i + 1}`}
              style={{
                width: idx === i ? 36 : 10, height: 10, borderRadius: 5,
                background: idx === i ? "#fff" : "rgba(255,255,255,0.4)",
                border: "none", cursor: "pointer", transition: "all 0.2s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
