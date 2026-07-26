import { NextRequest, NextResponse } from "next/server";

import { findProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (query.length < 2 || query.length > 80) {
    return NextResponse.json({ error: "La recherche doit contenir entre 2 et 80 caractères." }, { status: 400 });
  }

  try {
    const { products } = await findProducts({ search: query, limit: 12 });
    return NextResponse.json({ products },  { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } });
  } catch (error) {
    console.error("Catalog search failed", error);
    return NextResponse.json({ error: "Le catalogue est temporairement indisponible." }, { status: 502 });
  }
}
