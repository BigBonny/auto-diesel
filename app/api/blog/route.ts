import { NextRequest, NextResponse } from "next/server";

import { requireEnvironmentVariable } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page") ?? "1";
  const limit = request.nextUrl.searchParams.get("limit") ?? "12";
  try {
    const baseUrl = requireEnvironmentVariable("PS_BASE_URL").replace(/\/$/, "");
    const url = new URL(`${baseUrl}/ps_blog.php`);
    url.searchParams.set("token", requireEnvironmentVariable("PS_BLOG_SECRET"));
    url.searchParams.set("page", page);
    url.searchParams.set("limit", limit);
    url.searchParams.set("id_lang", "1");
    const response = await fetch(url, { signal: AbortSignal.timeout(10_000), cache: "no-store" });
    if (!response.ok) throw new Error(`Blog backend returned ${response.status}`);
    return NextResponse.json(await response.json(), { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=1800" } });
  } catch (error) {
    console.error("Blog query failed", error);
    return NextResponse.json({ error: "Le blog est temporairement indisponible.", posts: [], total: 0 }, { status: 502 });
  }
}
