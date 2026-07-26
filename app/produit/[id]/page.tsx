import { notFound } from "next/navigation";

import AddProductToCart from "@/components/AddProductToCart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { findProduct } from "@/lib/catalog";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await findProduct(id);
  if (!product) notFound();

  return <main style={{ minHeight: "100vh", background: "#f4f6f8" }}><Header /><section style={{ maxWidth: 1100, margin: "0 auto", padding: "76px 24px 112px" }}>{product.image_url && <img src={product.image_url} alt={product.name} style={{ display: "block", width: "min(100%, 460px)", height: 320, objectFit: "contain", background: "#fff", borderRadius: 12, marginBottom: 32 }} />}<p style={{ margin: "0 0 12px", color: "#93c572", fontWeight: 800 }}>{product.reference || "Référence"}</p><h1 style={{ margin: "0 0 20px", color: "#274554", fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>{product.name}</h1><p style={{ maxWidth: 760, whiteSpace: "pre-wrap", color: "#475569", lineHeight: 1.6 }}>{product.description || "Informations produit disponibles sur demande."}</p><p style={{ margin: "28px 0", color: "#274554", fontSize: "2rem", fontWeight: 800 }}>{Number(product.price).toFixed(2).replace(".", ",")} €</p><AddProductToCart id={product.id} name={product.name} price={product.price} /></section><Footer /></main>;
}
