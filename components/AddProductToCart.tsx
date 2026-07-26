"use client";

import { useStore } from "@/components/StoreProvider";

type Props = { id: string; name: string; price: string };

export default function AddProductToCart({ id, name, price }: Props) {
  const { addToCart } = useStore();

  return <button type="button" onClick={() => addToCart({ id: Number(id), name, price: Number(price), img: "/assets/LogoLong.png" })} style={{ border: 0, borderRadius: 999, padding: "13px 22px", background: "#93c572", color: "#fff", cursor: "pointer", fontWeight: 800 }}>Ajouter au panier</button>;
}
