"use client";

const NAVY   = "#274554";
const ORANGE = "#ff5700";

const benefits = [
  {
    img: "/assets/benefit_1.png",
    title: "TOP rapport qualité/prix pour votre turbo",
    paras: [
      "Quelle que soit votre motorisation, nous disposons des meilleurs turbos à prix discount. Nous vous offrons pour cela une gamme de turbos complète et adaptée à tous les budgets, mêmes aux plus petits. Cette gamme se compose de turbos neufs d'origine et de turbos échange standard. De plus, quel que soit le type de turbocompresseur que vous choisissez, il sera garanti 2 ans.",
      "Nous vous proposons l'achat de turbos pas cher et d'accessoires pour turbos des plus grandes marques automobiles sur le marché : marques françaises (Peugeot, Renault, Citroën) et marques étrangères (Nissan, BMW, Ford, Kia, Mitsubishi, Audi, Toyota, Mercedes, Volvo, Volkswagen).",
    ],
    reverse: false,
  },
  {
    img: "/assets/benefit_2.png",
    title: "Large choix de turbos",
    paras: [
      "Notre site Auto Diesel est la référence de la vente de turbocompresseurs pour votre voiture sur internet. Vous pourrez y effectuer un achat de turbo pas cher, fiable, et de grande qualité !",
      "Les pièces mécaniques pour voiture qui sont proposées sur notre site ont été sélectionnées par nos soins pour leur qualité et leur fiabilité. Cette exigence nous a permis de nouer des partenariats avec les distributeurs officiels de turbos des constructeurs IHI, KKK, Garrett et Mitsubishi.",
    ],
    reverse: true,
  },
  {
    img: "/assets/benefit_3.png",
    title: "La garantie 100% satisfait",
    paras: [
      "Notre équipe est à votre écoute. Réactivité, professionnalisme et connaissance du métier font de Auto Diesel une référence incontournable de la vente de turbos pas chers ! Nous faire confiance pour l'achat de votre turbo, c'est la certitude d'avoir :",
    ],
    bullets: [
      "Un grand choix de turbos à prix bas tout en étant de qualité",
      "L'assurance d'obtenir un turbo fiable, contrôlé et parfaitement sécurisé",
      "Un délai de livraison de 24 h à 48 h",
      "Un service après-vente réactif et efficace avec des techniciens spécialisés",
      "Une garantie de 2 ans sur les turbos, neufs d'origine ou en échange standard",
      "Un paiement 100% sécurisé avec la possibilité de régler en 3 ou 4X sans frais",
    ],
    reverse: false,
  },
];

export default function Benefits() {
  return (
    <section style={{ background: "#f4f6f8", padding: "56px 0", fontFamily: "'Open Sans', Arial, sans-serif" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{
          textAlign: "center",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.6rem, 3.8vw, 3.75rem)", fontWeight: 800,
          color: NAVY, margin: "0 0 20px",
        }}>
          3{" "}
          <span style={{ position: "relative", display: "inline-block", padding: "0 6px" }}>
            raisons
            <svg
              aria-hidden
              viewBox="0 0 220 70"
              preserveAspectRatio="none"
              style={{
                position: "absolute", inset: "-12% -10%",
                width: "120%", height: "124%",
                pointerEvents: "none",
              }}
            >
              <path
                d="M22 38 C 30 14, 90 8, 132 9 C 178 11, 210 22, 208 36 C 206 52, 160 62, 112 62 C 62 62, 18 56, 14 42 C 12 32, 26 22, 60 18"
                fill="none"
                stroke={ORANGE}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          de choisir Auto Diesel ?
        </h2>
        <p style={{
          textAlign: "center", maxWidth: 900, margin: "0 auto 42px",
          fontSize: "1.25rem", color: "#4b5563", lineHeight: 1.6,
        }}>
          Vous voulez acheter un turbo pas cher sans faire l'impasse sur la qualité ? Découvrez Auto Diesel ! Notre boutique en ligne possède un grand choix des plus grandes marques autos de turbos à bas prix. Que vous cherchiez une pièce de la marque KKK, Mitsubishi, IHI ou Garrett, nous vendons le turbo pas cher qu'il vous faut !
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {benefits.map((b) => (
            <div key={b.title} style={{
              display: "grid",
              gridTemplateColumns: b.reverse ? "3fr 1fr" : "1fr 3fr",
              gap: 32, alignItems: "center",
              background: "#fff", borderRadius: 8, padding: "30px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              border: "1px solid #9eaeac",
              marginBottom: 40,
            }} className="benefit-row">
              {b.reverse ? (
                <>
                  <div>
                    {b.paras.map((p, i) => (
                      <p key={i} style={{ fontSize: "1.125rem", lineHeight: 1.7777777778, color: "#374151", margin: i === 0 ? "0 0 12px" : 0 }}>{p}</p>
                    ))}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <img src={b.img} alt={b.title} style={{ maxWidth: 256, height: "auto", marginBottom: 15, marginLeft: "auto", marginRight: "auto", display: "block" }} />
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: NAVY, margin: 0, lineHeight: 1.5 }}>{b.title}</h3>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ textAlign: "center" }}>
                    <img src={b.img} alt={b.title} style={{ maxWidth: 256, height: "auto", marginBottom: 15, marginLeft: "auto", marginRight: "auto", display: "block" }} />
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: NAVY, margin: 0, lineHeight: 1.5 }}>{b.title}</h3>
                  </div>
                  <div>
                    {b.paras.map((p, i) => (
                      <p key={i} style={{ fontSize: "1.125rem", lineHeight: 1.7777777778, color: "#374151", margin: i === 0 ? "0 0 12px" : 0 }}>{p}</p>
                    ))}
                    {b.bullets && (
                      <ul style={{ paddingLeft: 20, margin: "12px 0 0", fontSize: "1.125rem", lineHeight: 1.7777777778, color: "#374151" }}>
                        {b.bullets.map((bl) => <li key={bl}>{bl}</li>)}
                      </ul>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .benefit-row { grid-template-columns: 1fr !important; padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}

