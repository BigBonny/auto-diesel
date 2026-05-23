"use client";

import { useState } from "react";

const NAVY   = "#274554";
const NAVY2  = "#1f3a47";
const ORANGE = "#93c572";

const navItems = [
  "Turbo", "Injecteur", "Pompe HP à Injection", "Huiles et additifs", "Fabricants", "Blog", "Contact",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      {/* Top promo banner — ORANGE */}
      <div style={{
        background: ORANGE, color: "#fff", textAlign: "center",
        padding: "8px 16px", fontSize: "1.1rem", letterSpacing: "0.04em",
      }}>
        <strong style={{ textTransform: "uppercase", fontWeight: 800 }}>Offre spéciale : 5% de remise</strong>{" "}
        <span style={{ opacity: 0.95 }}>sur votre 1ère commande (hors packs d'injecteurs)</span>
      </div>

      {/* Main dark navy header */}
      <div style={{ background: NAVY2 }}>
        <div style={{
          maxWidth: 1600, margin: "0 auto", padding: "0 28px",
          display: "flex", alignItems: "center", height: 88, gap: 24,
        }}>
          {/* Logo */}
          <a href="/" style={{ flexShrink: 0 }}>
            <img src="/assets/LogoLong.png" alt="Auto Diesel" style={{ height: 140, width: "auto", display: "block" }} />
          </a>

          {/* Search bar — WIDER */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ flex: 1, display: "flex", minWidth: 0 }}
            className="hide-md"
          >
            <input
              type="text"
              placeholder="Entrez une référence (ex : 1212221), un type de produits (turbo, injecteur...)"
              style={{
                flex: 1,
                width: "100%",
                padding: "12px 20px",
                border: "none",
                borderRadius: "4px 0 0 4px",
                fontSize: "0.88rem",
                outline: "none",
                color: NAVY,
                background: "#fff",
                fontFamily: "inherit",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
              }}
            />
            <button type="submit" style={{
              background: ORANGE, border: "none", padding: "0 22px", cursor: "pointer",
              borderRadius: "0 4px 4px 0", color: "#fff", display: "flex", alignItems: "center",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c43d1e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = ORANGE)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.42 19.311" width="18" height="18">
                <path d="m20.089 17.568-4.69-4.223a.979.979 0 0 0-.405-.21A8.282 8.282 0 1 0 2.74 14.437a8.282 8.282 0 0 0 11.069.012c.055.14.132.273.252.381l4.69 4.223a1 1 0 0 0 1.338-1.486zM4.079 12.95a6.283 6.283 0 0 1-.466-8.873 6.29 6.29 0 0 1 8.873-.465 6.283 6.283 0 0 1-8.408 9.338z" fill="#fff" />
              </svg>
            </button>
          </form>

          {/* Right cluster */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginLeft: "auto", flexShrink: 0 }}>
            {/* Phone */}
            <div className="hide-md" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/assets/tel-header.svg" alt="" style={{ width: 32, height: 32, filter: "brightness(0) invert(1)" }} />
              <div style={{ fontSize: "0.74rem", color: "#fff", lineHeight: 1.2 }}>
                Besoin d'aide ?
                <a href="tel:+33 6 12 42 98 80" style={{
                  display: "block", color: ORANGE, fontWeight: 800, fontSize: "1rem",
                  fontFamily: "var(--font-heading)",
                }}>+33 6 12 42 98 80</a>
              </div>
            </div>

            {/* Login */}
            <a href="#" className="hide-sm" style={{
              display: "flex", alignItems: "center", gap: 8, color: "#fff",
              fontSize: "0.88rem", fontWeight: 600,
            }}>
              <img src="/assets/login.svg" alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(77%) sepia(27%) saturate(622%) hue-rotate(47deg) brightness(92%) contrast(89%)" }} />
              <span>Connexion</span>
            </a>

            {/* Cart */}
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
              <div style={{ position: "relative" }}>
                <img src="/assets/panier.svg" alt="Panier" style={{ width: 32, height: 32 }} />
                <span style={{
                  position: "absolute", top: -4, right: -8, background: ORANGE, color: "#fff",
                  borderRadius: "50%", width: 18, height: 18, fontSize: "0.65rem",
                  display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800,
                  border: `2px solid ${NAVY}`,
                }}>0</span>
              </div>
              <span className="hide-sm" style={{ fontSize: "0.88rem", fontWeight: 600 }}>Panier</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              style={{
                background: "none", border: "none", cursor: "pointer", padding: 4,
                display: "none",
              }}
              aria-label="Menu"
            >
              <img src="/assets/menu.svg" alt="Menu" style={{ width: 28, height: 28, filter: "brightness(0) invert(1)" }} />
            </button>
          </div>
        </div>

        {/* Nav strip */}
        <nav style={{ background: NAVY2, borderTop: "1px solid rgba(255,255,255,0.06)" }} className="hide-mobile">
          <div style={{
            maxWidth: 1600, margin: "0 auto", padding: "0 28px",
            display: "flex", gap: 0,
          }}>
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "#fff", padding: "16px 22px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600, fontSize: "0.95rem", whiteSpace: "nowrap",
                  borderBottom: "3px solid transparent",
                  marginBottom: -1, transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = ORANGE;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {mobileOpen && (
          <div style={{ background: NAVY2, padding: "8px 24px" }}>
            {navItems.map((item) => (
              <a key={item} href="#" style={{
                display: "block", color: "#fff", padding: "14px 0",
                fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}>{item}</a>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (max-width: 820px) { .hide-md { display: none !important; } }
        @media (max-width: 540px) { .hide-sm { display: none !important; } }
      `}</style>
    </header>
  );
}