"use client";

const NAVY   = "#274554";
const NAVY2  = "#1f3a47";
const ORANGE = "#ff5700";

const reassuranceItems = [
  { icon: "/assets/livraison.svg",          title: "Livraison",  highlight: "GRATUITE",   sub: "24h à 48h" },
  { icon: "/assets/garantis.svg",           title: "Produits",   highlight: "GARANTIS",   sub: "2 ans" },
  { icon: "/assets/satisfait-rembourse.svg", title: "Satisfait", highlight: "REMBOURSÉ",  sub: "Voir les conditions", link: true },
  { icon: "/assets/paiement.svg",           title: "Paiement",   highlight: "SÉCURISÉ",   sub: "en 3 ou 4x sans frais" },
  { icon: "/assets/support.svg",            title: "Support",    highlight: "TECHNIQUE",  sub: "Du lundi au vendredi" },
];

const linkGroups = [
  { title: "Catégories", items: ["Turbo", "Injecteurs", "Pompes HP"] },
  { title: "Informations utiles", items: [
    "CGV",
    "Échange Standard - Comment ça marche ?",
    "Comment récupérer ma consigne ?",
    "Retour SAV",
    "Formulaire de rétractation",
    "Identifier la référence de mon turbo",
    "Identifier la référence de mes injecteurs",
    "Identifier la référence de ma pompe",
  ]},
  { title: "Espace client", items: ["Mon compte", "Mes commandes", "Mes adresses"] },
];

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.78)",
  fontSize: "0.86rem",
  lineHeight: 1.5,
  display: "inline-block",
  padding: "5px 0",
  transition: "color 0.2s, padding-left 0.2s",
};

export default function Footer() {
  return (
    <footer style={{ background: NAVY2, color: "#fff" }}>

      {/* Reassurance band */}
      <section style={{ background: NAVY, padding: "26px 16px" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <ul style={{
            listStyle: "none", padding: 0, margin: 0,
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 18, alignItems: "center",
          }}>
            {reassuranceItems.map((item) => (
              <li key={item.title} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  flexShrink: 0, background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6,
                  width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <img src={item.icon} alt="" style={{ width: 28, height: 28 }} />
                </div>
                <div style={{ fontSize: "0.84rem", lineHeight: 1.35 }}>
                  <div style={{ fontWeight: 600, color: "#fff" }}>
                    {item.title} <span style={{ color: ORANGE, fontWeight: 800, fontFamily: "var(--font-heading)" }}>{item.highlight}</span>
                  </div>
                  {item.link ? (
                    <a href="#" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "underline", fontSize: "0.78rem" }}>{item.sub}</a>
                  ) : (
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem" }}>{item.sub}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Logo + links */}
      <section style={{ padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <img src="/assets/LogoLong.png" alt="Auto Diesel" style={{ height: 120, width: "auto", display: "inline-block" }} />
          </div>

          <div className="footer-cols" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr 1fr",
            gap: 56,
          }}>
            {linkGroups.map((group, idx) => (
              <div key={group.title}>
                <h4 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem", fontWeight: 700, color: "rgba(255,255,255,0.7)",
                  margin: "0 0 18px",
                  display: "flex", alignItems: "center", gap: 14,
                }}>
                  <span style={{ flexShrink: 0 }}>{group.title}</span>
                  {idx === 0 && (
                    <span style={{
                      flexGrow: 1, height: 1, background: "rgba(255,255,255,0.22)",
                    }} />
                  )}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#" style={linkStyle}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.paddingLeft = "6px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgba(255,255,255,0.78)";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "22px 24px" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <ul style={{
            listStyle: "none", padding: 0, margin: 0,
            display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24,
          }}>
            <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 600 }}>Nous suivre</span>
              {[
                { label: "Facebook",  path: "M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.04 3.66 9.21 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.5-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.72 8.44-4.89 8.44-9.93z" },
                { label: "Instagram", path: "M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.16.55.55.9 1.11 1.16 1.77.25.64.41 1.36.46 2.43C21.99 8.94 22 9.28 22 12c0 2.72-.01 3.06-.06 4.12-.05 1.07-.22 1.79-.46 2.43-.26.66-.6 1.22-1.16 1.77-.55.55-1.11.9-1.77 1.16-.64.25-1.36.41-2.43.46-1.06.05-1.4.06-4.12.06-2.72 0-3.06-.01-4.12-.06-1.07-.05-1.79-.22-2.43-.46-.66-.26-1.22-.6-1.77-1.16-.55-.55-.9-1.11-1.16-1.77-.25-.64-.41-1.36-.46-2.43C2.01 15.06 2 14.72 2 12c0-2.72.01-3.06.06-4.12.05-1.07.22-1.79.46-2.43.26-.66.6-1.22 1.16-1.77.55-.55 1.11-.9 1.77-1.16.64-.25 1.36-.41 2.43-.46C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.4-9.4a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" },
                { label: "TikTok",    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z" },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label} style={{
                  background: ORANGE, borderRadius: "50%",
                  width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.2s, background 0.2s",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#c43d1e";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = ORANGE;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d={path} /></svg>
                </a>
              ))}
            </li>

            <li style={infoItemStyle}>
              <IconWrap><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a8 8 0 00-8 8c0 5.4 7 11.5 7.3 11.7a1 1 0 001.4 0C13 21.5 20 15.4 20 10a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" /></svg></IconWrap>
              <span style={{ color: "rgba(255,255,255,0.85)" }}>1a rue des Prés 67520 MARLENHEIM</span>
            </li>

            <li style={infoItemStyle}>
              <IconWrap><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.58l2.2-2.21a1 1 0 00.25-1.02A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1c0 9.39 7.61 17 17 17a1 1 0 001-1v-3.5a1 1 0 00-1-1z" /></svg></IconWrap>
              <a href="tel:03 74 47 15 91" style={{ color: "#fff", fontWeight: 800, fontFamily: "var(--font-heading)" }}>
                03 74 47 15 91
              </a>
            </li>

            <li style={infoItemStyle}>
              <IconWrap><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" /></svg></IconWrap>
              <a href="#" style={{ color: "rgba(255,255,255,0.85)" }}>contactez-nous</a>
            </li>

            <li style={infoItemStyle}>
              <IconWrap><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg></IconWrap>
              <a href="#" style={{ color: "rgba(255,255,255,0.85)" }}>Le blog</a>
            </li>

            <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/assets/avis.svg" alt="Avis Vérifiés" style={{ height: 34, width: "auto" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ display: "flex", gap: 1, fontSize: "0.95rem" }}>
                  {[0,1,2,3].map((i) => <span key={i} style={{ color: "#facc15" }}>?</span>)}
                  <span style={{ position: "relative", display: "inline-block", color: "rgba(255,255,255,0.25)" }}>
                    ?
                    <span style={{ position: "absolute", inset: 0, width: "60%", overflow: "hidden", color: "#facc15" }}>?</span>
                  </span>
                </div>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.92rem", fontWeight: 800, color: "#fff" }}>
                  4.6<span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>/5</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Payment methods — WHITE background */}
      <section style={{ background: "#fff", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", textAlign: "center" }}>
          <img src="/assets/488df53af739d71c613a7c789760af39.png" alt="Méthodes de paiement"
            style={{ maxWidth: "100%", height: "auto", maxHeight: 36, display: "inline-block" }} />
        </div>
      </section>

      {/* Copyright */}
      <section style={{ background: "#fff", padding: "0 24px 16px", borderTop: "1px solid #f0f2f5" }}>
        <div style={{
          maxWidth: 1600, margin: "0 auto", textAlign: "center",
          fontSize: "0.8rem", color: "#6b7280", paddingTop: 12,
        }}>
          <a href="#" style={{ color: NAVY }}>Mentions légales</a>
          <span style={{ margin: "0 10px", color: "#cbd5e1" }}>|</span>
          <a href="#" style={{ color: NAVY }}>Politique de confidentialité</a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-cols { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}

const infoItemStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 10, fontSize: "0.85rem",
};

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      width: 30, height: 30, borderRadius: "50%", background: ORANGE,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>{children}</span>
  );
}
