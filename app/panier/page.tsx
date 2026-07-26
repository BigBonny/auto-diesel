"use client";

import { FormEvent, useMemo, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useStore } from "@/components/StoreProvider";

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart, clearCart, user } = useStore();
  const [email, setEmail] = useState(user?.email ?? "");
  const [name, setName] = useState([user?.firstname, user?.lastname].filter(Boolean).join(" "));
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  async function checkout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!cart.length) return;
    setSubmitting(true);
    setError(null);
    try {
      const orderId = `ORD-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
      const response = await fetch("/api/payment/create-form", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ amount: total, currency: "EUR", orderId, customerEmail: email, customerName: name, cartItems: cart.map(({ id, name: productName, price, quantity }) => ({ id: String(id), name: productName, price, quantity })) }) });
      if (!response.ok) throw new Error((await response.json() as { error?: string }).error ?? "Le paiement n'a pas pu être créé.");
      clearCart();
      document.open();
      document.write(await response.text());
      document.close();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Le paiement n'a pas pu être créé.");
      setSubmitting(false);
    }
  }

  return <main style={{ minHeight: "100vh", background: "#f4f6f8" }}><Header /><section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 112px" }}><h1 style={{ color: "#274554", fontFamily: "var(--font-heading)", fontSize: "2.2rem" }}>Votre panier</h1>{!cart.length ? <p>Votre panier est vide.</p> : <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 360px)", gap: 32 }}><div>{cart.map((item) => <article key={item.id} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "18px 0", borderBottom: "1px solid #dbe3e8" }}><div><strong style={{ color: "#274554" }}>{item.name}</strong><p style={{ margin: "8px 0 0" }}>{item.price.toFixed(2).replace(".", ",")} €</p></div><div style={{ display: "flex", alignItems: "center", gap: 8 }}><button type="button" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button type="button" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button><button type="button" onClick={() => removeFromCart(item.id)}>Retirer</button></div></article>)}</div><form onSubmit={checkout} style={{ alignSelf: "start", background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 4px 18px rgba(39,69,84,0.08)" }}><h2 style={{ marginTop: 0, color: "#274554" }}>Paiement sécurisé</h2><label style={{ display: "grid", gap: 6, marginBottom: 14 }}>Nom complet<input required value={name} onChange={(event) => setName(event.target.value)} /></label><label style={{ display: "grid", gap: 6, marginBottom: 18 }}>Email<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label><p style={{ fontSize: "1.3rem", fontWeight: 800 }}>Total : {total.toFixed(2).replace(".", ",")} €</p>{error && <p role="alert" style={{ color: "#b91c1c" }}>{error}</p>}<button disabled={submitting} type="submit" style={{ border: 0, borderRadius: 999, padding: "14px 22px", background: "#93c572", color: "#fff", cursor: "pointer", fontWeight: 800 }}>{submitting ? "Redirection…" : "Payer"}</button></form></div>}</section><Footer /></main>;
}
