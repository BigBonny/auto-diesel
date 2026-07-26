"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { useStore } from "@/components/StoreProvider";

const NAVY   = "#274554";
const NAVY2  = "#1f3a47";
const ORANGE = "#93c572";

const navItems = [
  { label: "Turbo", href: "/catalogue/turbos" },
  { label: "Injecteur", href: "/catalogue/injecteurs" },
  { label: "Pompe HP à Injection", href: "/catalogue/pompes-hp" },
  { label: "Huiles et additifs", href: "/catalogue/huiles-additifs" },
  { label: "Fabricants", href: "/fabricants" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

type CatalogProduct = {
  id: string;
  name: string;
  price: string;
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<CatalogProduct[]>([]);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  const { cartCount, signIn, signOut, user } = useStore();

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginError(null);
    const error = await signIn(email, password);
    setIsSubmitting(false);

    if (error) {
      setLoginError(error);
      return;
    }

    setLoginOpen(false);
    setPassword("");
  }

  async function handleCatalogSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = searchQuery.trim();

    if (query.length < 2) {
      setSearchError("Saisissez au moins 2 caractères.");
      setSearchResults([]);
      return;
    }

    setSearchError(null);
    setSearchResults([]);
    router.push(`/produits?search=${encodeURIComponent(query)}`);
  }

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
            onSubmit={handleCatalogSearch}
            style={{ flex: 1, display: "flex", minWidth: 0, position: "relative" }}
            className="hide-md"
          >
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
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
            <button type="submit" aria-label="Rechercher" disabled={isSearching} style={{
              background: ORANGE, border: "none", padding: "0 22px", cursor: isSearching ? "wait" : "pointer",
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
            {(searchError || searchResults.length > 0) && (
              <div role="status" style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, zIndex: 20, background: "#fff", borderRadius: 8, boxShadow: "0 12px 28px rgba(0,0,0,0.22)", overflow: "hidden", color: NAVY }}>
                {searchError ? <p style={{ margin: 0, padding: 14, fontSize: "0.86rem" }}>{searchError}</p> : searchResults.map((product) => <div key={product.id} style={{ padding: "12px 14px", borderBottom: "1px solid #e2e8f0", fontSize: "0.86rem" }}><strong style={{ display: "block" }}>{product.name}</strong><span>{Number(product.price).toFixed(2).replace(".", ",")} €</span></div>)}
              </div>
            )}
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
            <button type="button" onClick={() => user ? void signOut() : setLoginOpen(true)} className="hide-sm" style={{
              display: "flex", alignItems: "center", gap: 8, color: "#fff", background: "none", border: "none", cursor: "pointer",
              fontSize: "0.88rem", fontWeight: 600,
            }}>
              <img src="/assets/login.svg" alt="" style={{ width: 26, height: 26, filter: "brightness(0) saturate(100%) invert(77%) sepia(27%) saturate(622%) hue-rotate(47deg) brightness(92%) contrast(89%)" }} />
              <span>{user ? "Déconnexion" : "Connexion"}</span>
            </button>

            {/* Cart */}
            <Link href="/panier" style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
              <div style={{ position: "relative" }}>
                <img src="/assets/panier.svg" alt="Panier" style={{ width: 32, height: 32 }} />
                <span style={{
                  position: "absolute", top: -4, right: -8, background: ORANGE, color: "#fff",
                  borderRadius: "50%", width: 18, height: 18, fontSize: "0.65rem",
                  display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800,
                  border: `2px solid ${NAVY}`,
                }}>{cartCount}</span>
              </div>
              <span className="hide-sm" style={{ fontSize: "0.88rem", fontWeight: 600 }}>Panier</span>
            </Link>

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
              <Link
                key={item.label}
                href={item.href}
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
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {mobileOpen && (
          <div style={{ background: NAVY2, padding: "8px 24px" }}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} style={{
                display: "block", color: "#fff", padding: "14px 0",
                fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}>{item.label}</Link>
            ))}
          </div>
        )}
      </div>

      {loginOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="login-title" style={{ position: "fixed", inset: 0, zIndex: 1100, background: "rgba(0,0,0,0.55)", display: "grid", placeItems: "center", padding: 20 }}>
          <form onSubmit={handleLogin} style={{ width: "min(100%, 400px)", background: "#fff", borderRadius: 12, padding: 28, boxShadow: "0 24px 48px rgba(0,0,0,0.28)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 20, alignItems: "center", marginBottom: 20 }}>
              <h2 id="login-title" style={{ margin: 0, color: NAVY, fontSize: "1.35rem" }}>Connexion</h2>
              <button type="button" onClick={() => setLoginOpen(false)} aria-label="Fermer" style={{ background: "none", border: "none", cursor: "pointer", color: NAVY, fontSize: "1.5rem", lineHeight: 1 }}>×</button>
            </div>
            <label style={{ display: "grid", gap: 6, color: NAVY, fontWeight: 600, marginBottom: 14 }}>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required style={{ padding: "11px 12px", border: "1px solid #cbd5e1", borderRadius: 6 }} /></label>
            <label style={{ display: "grid", gap: 6, color: NAVY, fontWeight: 600, marginBottom: 14 }}>Mot de passe<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required style={{ padding: "11px 12px", border: "1px solid #cbd5e1", borderRadius: 6 }} /></label>
            {loginError && <p role="alert" style={{ margin: "0 0 14px", color: "#b91c1c", fontSize: "0.9rem" }}>{loginError}</p>}
            <button type="submit" disabled={isSubmitting} style={{ width: "100%", background: ORANGE, border: "none", borderRadius: 6, padding: "12px 16px", color: "#fff", cursor: isSubmitting ? "wait" : "pointer", fontWeight: 800 }}>{isSubmitting ? "Connexion…" : "Se connecter"}</button>
          </form>
        </div>
      )}

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