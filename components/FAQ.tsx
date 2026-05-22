"use client";

import { useState } from "react";

const NAVY = "#274554";
const ORANGE = "#ff5700";

const questions = [
  { q: "Qu'est-ce qu'une pièce en échange standard ?",
    a: "Une pièce en échange standard est une pièce d'origine qui a été démontée, entièrement nettoyée, testée et remise en état selon les normes du constructeur. Vous achetez la pièce et payez une consigne, qui vous est remboursée dès réception de votre ancienne pièce." },
  { q: "Quelle est la durée de garantie des pièces vendues sur Megaturbo ?",
    a: "Toutes nos pièces, qu'elles soient neuves d'origine ou en échange standard, bénéficient d'une garantie de 2 ans." },
  { q: "Les pièces proposées sont-elles neuves ou reconditionnées ?",
    a: "Nous proposons les deux : des pièces neuves d'origine constructeur, et des pièces reconditionnées en échange standard, toutes contrôlées et garanties." },
  { q: "Comment savoir si une pièce est compatible avec mon véhicule ?",
    a: "Utilisez notre outil de recherche par plaque d'immatriculation ou par véhicule (marque, modèle, motorisation). Notre service technique reste disponible pour toute vérification au 03 74 47 15 91." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "#fff", padding: "64px 0" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{
          textAlign: "center",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.4rem, 2.6vw, 1.95rem)", fontWeight: 800,
          color: NAVY, margin: "0 0 36px",
        }}>
          Questions fréquentes
        </h2>

        <div className="faq-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
        }}>
          {questions.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                background: "#eef1f1", borderRadius: 6,
                transition: "background 0.2s",
              }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%", background: "none", border: "none",
                    padding: "18px 22px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    textAlign: "left", color: ORANGE,
                    fontFamily: "inherit", fontSize: "0.92rem", fontWeight: 600,
                    gap: 16,
                  }}
                >
                  <span>{item.q}</span>
                  <span style={{
                    flexShrink: 0,
                    fontSize: "1.5rem", lineHeight: 1, fontWeight: 300,
                    transition: "transform 0.2s",
                    display: "inline-block",
                    width: 20, height: 20,
                    position: "relative",
                  }}>
                    {isOpen ? (
                      <svg width="20" height="2" viewBox="0 0 20 2" style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)" }}>
                        <line x1="0" y1="1" x2="20" y2="1" stroke="#9eaeac" strokeWidth="2" />
                      </svg>
                    ) : (
                      <span style={{ color: "#94a3b8", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>+</span>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: "0 25px 25px",
                    fontSize: "1.25rem", color: "#555", lineHeight: 1.25,
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
