"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Product = { id: string; name: string; price: string; reference: string; image_url: string | null };
type Result = { products: Product[]; total: number; page: number; limit: number };

const categories = ["", "turbos", "injecteurs", "pompes-hp", "kit-turbo-chra"];

export default function ProduitsContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<Result>({ products: [], total: 0, page: 1, limit: 24 });
  const [loading, setLoading] = useState(true);
  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const minPrice = searchParams.get("minPrice") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const sort = searchParams.get("sort") ?? "newest";
  const page = searchParams.get("page") ?? "1";

  useEffect(() => {
    const query = new URLSearchParams({ search, category, minPrice, maxPrice, sort, page, limit: "24" });
    setLoading(true);
    fetch(`/api/products?${query.toString()}`).then(async (response) => {
      if (!response.ok) throw new Error();
      setResult(await response.json() as Result);
    }).catch(() => setResult({ products: [], total: 0, page: 1, limit: 24 })).finally(() => setLoading(false));
  }, [search, category, minPrice, maxPrice, sort, page]);

  function href(changes: Record<string, string>) {
    const query = new URLSearchParams({ search, category, minPrice, maxPrice, sort, page, ...changes });
    for (const [key, value] of [...query.entries()]) if (!value) query.delete(key);
    return `/produits?${query.toString()}`;
  }

  const pageCount = Math.max(Math.ceil(result.total / result.limit), 1);
  return <main style={{ minHeight: "100vh", background: "#f4f6f8" }}><Header /><section style={{ maxWidth: 1400, margin: "0 auto", padding: "56px 24px 96px" }}><h1 style={{ color: "#274554", fontFamily: "var(--font-heading)", fontSize: "2.5rem", margin: "0 0 12px" }}>Nos produits</h1><p style={{ color: "#475569", marginBottom: 28 }}>{loading ? "Recherche en cours…" : `${result.total.toLocaleString("fr-FR")} produits trouvés`}</p><form action="/produits" style={{ display: "grid", gridTemplateColumns: "minmax(220px, 1fr) repeat(4, minmax(120px, auto))", gap: 12, marginBottom: 32 }}><input name="search" defaultValue={search} placeholder="Référence, marque ou produit" style={{ padding: "12px 14px", border: "1px solid #cbd5e1", borderRadius: 8 }} /><select name="category" defaultValue={category} style={{ padding: 12, border: "1px solid #cbd5e1", borderRadius: 8 }}>{categories.map((value) => <option key={value} value={value}>{value ? value.replaceAll("-", " ") : "Toutes catégories"}</option>)}</select><input name="minPrice" defaultValue={minPrice} inputMode="decimal" placeholder="Prix min" style={{ padding: 12, border: "1px solid #cbd5e1", borderRadius: 8 }} /><input name="maxPrice" defaultValue={maxPrice} inputMode="decimal" placeholder="Prix max" style={{ padding: 12, border: "1px solid #cbd5e1", borderRadius: 8 }} /><select name="sort" defaultValue={sort} style={{ padding: 12, border: "1px solid #cbd5e1", borderRadius: 8 }}><option value="newest">Nouveautés</option><option value="price-asc">Prix croissant</option><option value="price-desc">Prix décroissant</option></select><button style={{ border: 0, borderRadius: 8, background: "#274554", color: "#fff", fontWeight: 800, padding: "12px 18px" }}>Filtrer</button></form><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 18 }}>{result.products.map((product) => <Link key={product.id} href={`/produit/${product.id}`} style={{ background: "#fff", padding: 18, borderRadius: 12, color: "#274554", boxShadow: "0 3px 12px rgba(39,69,84,0.08)" }}>{product.image_url && <img src={product.image_url} alt="" style={{ width: "100%", height: 150, objectFit: "contain", marginBottom: 12 }} />}<p style={{ color: "#93c572", fontWeight: 800, fontSize: "0.8rem", margin: "0 0 6px" }}>{product.reference || "Référence"}</p><strong style={{ display: "block", lineHeight: 1.35 }}>{product.name}</strong><p style={{ fontSize: "1.2rem", fontWeight: 800, margin: "14px 0 0" }}>{Number(product.price).toFixed(2).replace(".", ",")} €</p></Link>)}</div>{!loading && !result.products.length && <p>Aucun produit ne correspond à vos critères.</p>}<nav style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 36 }}>{result.page > 1 && <Link href={href({ page: String(result.page - 1) })}>← Précédent</Link>}<span>Page {result.page} sur {pageCount}</span>{result.page < pageCount && <Link href={href({ page: String(result.page + 1) })}>Suivant →</Link>}</nav></section><Footer /></main>;
}
