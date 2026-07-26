import { NextRequest, NextResponse } from "next/server";

import { findProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search")?.trim() ?? "";
  const category = searchParams.get("category")?.trim() ?? "";
  const limit = Number(searchParams.get("limit") ?? "24");
  const page = Number(searchParams.get("page") ?? "1");
  const minPrice = Number(searchParams.get("minPrice"));
  const maxPrice = Number(searchParams.get("maxPrice"));
  const sort = searchParams.get("sort");

  if (search.length > 80) {
    return NextResponse.json({ error: "La recherche doit contenir au plus 80 caractères." }, { status: 400 });
  }

  try {
    const result = await findProducts({ search, category, limit, page, minPrice: Number.isFinite(minPrice) ? minPrice : undefined, maxPrice: Number.isFinite(maxPrice) ? maxPrice : undefined, sort: sort === "price-asc" || sort === "price-desc" || sort === "newest" ? sort : undefined });
    return NextResponse.json(result, { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } });
  } catch (error) {
    console.error("Catalog listing failed", error);
    return NextResponse.json({ error: "Le catalogue est temporairement indisponible.", products: [] }, { status: 502 });
  }
}
