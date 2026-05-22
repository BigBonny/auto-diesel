"use client";

const TEAL = "#3a6878";
const ORANGE = "#ff5700";

type Step = {
  n: number;
  title: React.ReactNode;
  icon: React.ReactNode;
  position: "top" | "bottom";
};

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" /><polyline points="6 4 12 10 18 4" opacity="0" />
  </svg>
);
const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" /><polyline points="18 20 12 14 6 20" opacity="0" />
  </svg>
);

const steps: Step[] = [
  {
    n: 1, position: "top",
    title: "Ajout de l'article au panier",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1.5" /><circle cx="20" cy="21" r="1.5" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        <line x1="14" y1="9" x2="14" y2="13" /><line x1="12" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    n: 2, position: "bottom",
    title: "Réglement de l'article + la caution",
    icon: (
      <svg width="48" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    n: 3, position: "top",
    title: "Expédition immédiate 24h/48H",
    icon: (
      <svg width="52" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="13" height="11" />
        <polygon points="16 9 20 9 23 13 23 17 16 17" />
        <circle cx="6" cy="20" r="2" /><circle cx="18" cy="20" r="2" />
      </svg>
    ),
  },
  {
    n: 4, position: "bottom",
    title: <>Remboursement<br />de la caution<br />dès réception de<br />l&apos;ancienne pièce</>,
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" /><path d="M7 7l3 -3" /><path d="M17 7l-3 -3" />
      </svg>
    ),
  },
];

const Circle = ({ n }: { n: number }) => (
  <div style={{
    background: ORANGE, color: "#fff",
    width: 56, height: 56, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--font-heading)", fontSize: "1.7rem", fontWeight: 900,
    boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
    border: "3px solid #fff",
    zIndex: 3, position: "relative",
  }}>{n}</div>
);

export default function ConsigneProcess() {
  return (
    <section style={{ background: TEAL, padding: "60px 0 80px", color: "#fff", overflow: "hidden" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.22em",
          color: "rgba(255,255,255,0.65)", textTransform: "uppercase", marginBottom: 14,
        }}>
          Échange Standard
        </div>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.4rem, 2.6vw, 1.95rem)", fontWeight: 800,
          color: "#fff", margin: "0 0 70px",
        }}>
          Comment fonctionne la consigne pour une pièce reconditionné ?
        </h2>

        {/* Wave layout */}
        <div className="wave-wrap" style={{
          position: "relative", height: 340,
          maxWidth: 1000, margin: "0 auto",
        }}>
          {/* SVG sinusoidal curve */}
          <svg
            className="wave-svg"
            viewBox="0 0 1000 340"
            preserveAspectRatio="none"
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              pointerEvents: "none",
            }}
          >
            {/* Wave path: peaks at x=125 (top) and x=625, valleys at x=375 (bottom) and x=875 */}
            <path
              d="M 25 170 C 80 30, 200 30, 250 170 S 420 310, 500 170 S 670 30, 750 170 S 920 310, 975 170"
              fill="none" stroke={ORANGE} strokeWidth="2.4"
            />
            <circle cx="25"  cy="170" r="5" fill={ORANGE} />
            <circle cx="975" cy="170" r="5" fill={ORANGE} />
          </svg>

          {/* 4 step columns */}
          <div className="steps-row" style={{
            position: "relative", height: "100%",
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          }}>
            {steps.map((s, i) => {
              const isTop = s.position === "top";
              const colCenter = `${(i + 0.5) * 25}%`;
              return (
                <div key={s.n} style={{
                  position: "relative", height: "100%",
                }}>
                  {isTop ? (
                    <>
                      {/* Circle at TOP */}
                      <div style={{
                        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                      }}>
                        <Circle n={s.n} />
                      </div>
                      {/* Chevron down below circle */}
                      <div style={{
                        position: "absolute", top: 72, left: "50%", transform: "translateX(-50%)",
                        color: "rgba(255,255,255,0.85)",
                      }}>
                        <ChevronDown />
                      </div>
                      {/* Title */}
                      <div style={{
                        position: "absolute", top: 102, left: "50%", transform: "translateX(-50%)",
                        fontSize: "0.95rem", lineHeight: 1.35, color: "#fff",
                        textAlign: "center", width: 200,
                      }}>{s.title}</div>
                      {/* Icon at bottom */}
                      <div style={{
                        position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)",
                        color: "#fff",
                      }}>{s.icon}</div>
                    </>
                  ) : (
                    <>
                      {/* Icon at top */}
                      <div style={{
                        position: "absolute", top: 30, left: "50%", transform: "translateX(-50%)",
                        color: "#fff",
                      }}>{s.icon}</div>
                      {/* Title */}
                      <div style={{
                        position: "absolute", bottom: 102, left: "50%", transform: "translateX(-50%)",
                        fontSize: "0.95rem", lineHeight: 1.35, color: "#fff",
                        textAlign: "center", width: 200,
                      }}>{s.title}</div>
                      {/* Chevron up */}
                      <div style={{
                        position: "absolute", bottom: 72, left: "50%", transform: "translateX(-50%)",
                        color: "rgba(255,255,255,0.85)",
                      }}>
                        <ChevronUp />
                      </div>
                      {/* Circle at BOTTOM */}
                      <div style={{
                        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                      }}>
                        <Circle n={s.n} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .wave-wrap { height: auto !important; }
          .wave-svg  { display: none !important; }
          .steps-row { display: flex !important; flex-direction: column !important; gap: 40px !important; height: auto !important; }
          .steps-row > div { position: static !important; height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
