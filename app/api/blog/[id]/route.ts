import { NextResponse } from "next/server";

import { requireEnvironmentVariable } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
  try {
    const baseUrl = requireEnvironmentVariable("PS_BASE_URL").replace(/\/$/, "");
    const url = new URL(`${baseUrl}/ps_blog.php`);
    url.searchParams.set("token", requireEnvironmentVariable("PS_BLOG_SECRET"));
    url.searchParams.set("id", id);
    url.searchParams.set("id_lang", "1");
    const response = await fetch(url, { signal: AbortSignal.timeout(10_000), cache: "no-store" });
    if (!response.ok) throw new Error(`Blog backend returned ${response.status}`);
    return NextResponse.json(await response.json(), { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=1800" } });
  } catch (error) {
    console.error("Blog article query failed", error);
    return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
  }
}
