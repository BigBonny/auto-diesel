import { NextResponse } from "next/server";

import { findProduct } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await findProduct(id);

  if (!product) {
    return NextResponse.json({ error: "Produit introuvable." }, { status: 404 });
  }

  return NextResponse.json(product, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } });
}
