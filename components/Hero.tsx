"use client";

import { useState } from "react";

const NAVY   = "#274554";
const ORANGE = "#ff5700";
const WHITE  = "#f4f6f8";

const marques = ["Audi", "BMW", "Citroën", "Dacia", "Fiat", "Ford", "Mercedes", "Opel", "Peugeot", "Renault", "Toyota", "Volkswagen", "Volvo"];

export default function Hero() {
  const [plate, setPlate] = useState("");

  return (
    <section style={{ position: "relative", background: "#f4f6f8" }}>
      {/* Hero with workshop background */}
      <div
        id="accordions"
        style={{
          position: "relative",
          backgroundImage: "url(/assets/cover-search.png)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundColor: WHITE,
          minHeight: 560,
          paddingTop: 1,
          paddingBottom: 90,
        }}
      >
        <div style={{
          maxWidth: 1600, margin: "15px auto", padding: "0 28px",
          position: "relative",
        }}>
          {/* .top-search — display:flex, align-items:center, margin-top:60px */}
          <div className="top-search" style={{
            display: "flex", alignItems: "center",
            paddingTop: 60, position: "relative",
          }}>
            {/* .title_seach — font-size:2.4375rem, color:#fff, font-weight:800, margin-right:40px */}
            <p className="title_seach" style={{
              color: "#fff",
              marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 40,
              fontFamily: "var(--font-heading)",
              fontSize: "2.4375rem", lineHeight: 1.333,
              fontWeight: 800,
              whiteSpace: "nowrap",
              position: "relative", zIndex: 2,
            }}>
              <span style={{
                color: ORANGE,
                fontSize: "4.25rem",
                lineHeight: 1.32,
                fontWeight: 900,
                marginRight: 8,
              }}>N°1</span>
              de la vente de turbo et d&apos; injecteur en ligne
            </p>

            {/* .promo — 253x169 bg image, padding-left:47px */}
            <div className="promo hide-md-down" style={{
              backgroundImage: "url(/assets/bg-promo.png)",
              backgroundPosition: "center bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: 253, height: 169,
              paddingLeft: 47,
              display: "flex", alignItems: "center",
              flexShrink: 0,
              marginLeft: 0, marginRight: 0,
              position: "relative", zIndex: 3,
            }}>
              <div style={{
                textAlign: "left", color: "#fff",
                fontWeight: "bold",
                fontFamily: "var(--font-heading)",
                fontSize: "1.125rem", lineHeight: 1,
              }}>
                Jusqu&apos;à
                <span style={{ display: "block", fontSize: "3.5625rem", lineHeight: 1.07 }}>60%</span>
                sur vos pièces auto
              </div>
            </div>
          </div>

          {/* Parts montage image overlay - bigger, further right, slightly lower */}
          <img
            src="/assets/montage.png"
            alt=""
            className="hero-montage"
            style={{
              position: "absolute", right: -170, top: 15, zIndex: 0,
              maxWidth: 600, height: "auto", maxHeight: 500,
              objectFit: "contain",
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))",
              pointerEvents: "none",
            }}
          />

          {/* .header-search — tabbed widget */}
          <div className="header-search" style={{
            position: "relative", display: "flex", marginTop: 28,
          }}>
            <ul style={{
              display: "flex", listStyle: "none", margin: 0, padding: 0, width: "100%",
            }}>
              {/* Active tab — VOTRE PLAQUE */}
              <li style={{
                flex: "0 0 440px", minWidth: 440,
                textAlign: "left", textTransform: "uppercase",
                padding: 0, border: 0, display: "flex", flexDirection: "column",
              }}>
                <span style={{
                  padding: "16px 20px 8px 27px",
                  color: "#fff", background: ORANGE,
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem", lineHeight: 1.3, fontWeight: "bold",
                  display: "block",
                  borderRadius: "16px 16px 0 0",
                  alignSelf: "flex-start",
                }}>
                  Votre plaque
                </span>
                <div style={{
                  background: "#fff",
                  padding: "16px 15px 15px",
                  marginBottom: 10,
                  borderBottomLeftRadius: 16,
                  borderTop: `8px solid ${ORANGE}`,
                  minHeight: 116,
                  display: "flex", alignItems: "center",
                }}>
                  <form onSubmit={(e) => e.preventDefault()} className="search-plaque" style={{
                    display: "flex", width: "100%", marginLeft: 0,
                  }}>
                    <div style={{ display: "flex" }}>
                      <img src="/assets/rf-min.svg" alt="fr" style={{ maxHeight: 76, height: 76, display: "block" }} />
                      <input
                        type="text"
                        value={plate}
                        onChange={(e) => setPlate(e.target.value.toUpperCase())}
                        placeholder="CF-986-HJ"
                        maxLength={9}
                        style={{
                          height: 76, borderRadius: 0,
                          fontSize: 34, maxWidth: 240, paddingLeft: 22,
                          border: "1px solid #e5e7eb", outline: "none",
                          color: NAVY, fontWeight: 600,
                          fontFamily: "inherit", textTransform: "uppercase",
                        }}
                      />
                    </div>
                    <button type="submit" style={{
                      background: ORANGE, border: "none",
                      borderRadius: "0 8px 8px 0",
                      padding: "0 22px", cursor: "pointer", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      height: 76,
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.42 19.311" width="28" height="28" style={{ transform: "scale(-1, 1)" }}>
                        <path d="m20.089 17.568-4.69-4.223a.979.979 0 0 0-.405-.21A8.282 8.282 0 1 0 2.74 14.437a8.282 8.282 0 0 0 11.069.012c.055.14.132.273.252.381l4.69 4.223a1 1 0 0 0 1.338-1.486zM4.079 12.95a6.283 6.283 0 0 1-.466-8.873 6.29 6.29 0 0 1 8.873-.465 6.283 6.283 0 0 1-8.408 9.338z" fill="#fff" />
                      </svg>
                    </button>
                  </form>
                </div>
              </li>

              {/* Inverted tab — RECHERCHE PAR VÉHICULE */}
              <li className="btn-invert" style={{
                flex: "1 1 0", minWidth: 0, marginLeft: 0,
                textAlign: "left", textTransform: "uppercase",
                padding: 0, border: 0, display: "flex", flexDirection: "column",
              }}>
                <span style={{
                  padding: "16px 20px 8px 27px",
                  color: ORANGE, background: "#fff",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem", lineHeight: 1.3, fontWeight: "bold",
                  display: "inline-block",
                  borderRadius: "16px 16px 0 0",
                  alignSelf: "flex-start",
                }}>
                  Recherche par véhicule
                </span>
                <div style={{
                  background: "rgba(255,255,255,0.8)",
                  padding: "16px 15px 0",
                  marginBottom: 10,
                  borderBottomRightRadius: 16,
                  borderTop: "8px solid #fff",
                  minHeight: 116,
                  display: "flex", alignItems: "center",
                }}>
                  <form onSubmit={(e) => e.preventDefault()} style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
                    gap: 8, alignItems: "stretch", width: "100%",
                  }} className="vehicle-grid">
                    <select defaultValue="" style={selectStyle}>
                      <option value="">MARQUE</option>
                      {marques.map((m) => <option key={m}>{m}</option>)}
                    </select>
                    <select defaultValue="" style={selectStyle}>
                      <option value="">MODÈLE</option>
                    </select>
                    <select defaultValue="" style={selectStyle}>
                      <option value="">MOTORISATION</option>
                    </select>
                    <select defaultValue="" style={selectStyle}>
                      <option value="">PIÈCES</option>
                    </select>
                    <button type="submit" style={{
                      background: ORANGE, border: "none", padding: 0, cursor: "pointer",
                      borderRadius: "50%", width: 50, height: 50, color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", alignSelf: "center",
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.42 19.311" width="20" height="20" style={{ transform: "scale(-1, 1)" }}>
                        <path d="m20.089 17.568-4.69-4.223a.979.979 0 0 0-.405-.21A8.282 8.282 0 1 0 2.74 14.437a8.282 8.282 0 0 0 11.069.012c.055.14.132.273.252.381l4.69 4.223a1 1 0 0 0 1.338-1.486zM4.079 12.95a6.283 6.283 0 0 1-.466-8.873 6.29 6.29 0 0 1 8.873-.465 6.283 6.283 0 0 1-8.408 9.338z" fill="#fff" />
                      </svg>
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .hero-montage { display: none !important; }
        }
        @media (max-width: 980px) {
          .top-search { flex-direction: column !important; align-items: flex-start !important; margin-top: 30px !important; }
          .top-search .title_seach { font-size: 1.6rem !important; margin-right: 0 !important; white-space: normal !important; }
          .top-search .title_seach span { font-size: 2.6rem !important; }
          .hide-md-down { display: none !important; }
          .header-search ul { flex-direction: column !important; }
          .header-search ul li { min-width: 0 !important; width: 100% !important; }
          .vehicle-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const selectStyle: React.CSSProperties = {
  padding: "13px 14px", border: "1px solid #e0e3e7", borderRadius: 4,
  fontSize: "0.74rem", fontWeight: 700, color: NAVY, background: "#fff",
  outline: "none", cursor: "pointer", fontFamily: "var(--font-heading)",
  letterSpacing: "0.03em", appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23274554' stroke-width='1.8' fill='none'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
  paddingRight: 30,
};
