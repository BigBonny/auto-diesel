import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const { data, error } = await supabaseAdmin.from("products").select("category_name").not("category_name", "is", null);
  if (error) {
    console.error("Category lookup failed", error);
    return NextResponse.json({ error: "Les catégories sont temporairement indisponibles.", categories: [] }, { status: 502 });
  }
  const categories = [...new Set((data ?? []).map(({ category_name }) => category_name).filter(Boolean))].sort();
  return NextResponse.json({ categories }, { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } });
}
