import { NextResponse } from "next/server";

import { requireEnvironmentVariable } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ productId: string; imageId: string }> }) {
  const { productId, imageId } = await params;
  if (!/^\d+$/.test(productId) || !/^\d+$/.test(imageId)) return new NextResponse(null, { status: 400 });

  try {
    const root = requireEnvironmentVariable("PRESTASHOP_API_URL").replace(/\/$/, "");
    const key = requireEnvironmentVariable("PRESTASHOP_API_KEY");
    const storefront = new URL(root).origin;
    let response = await fetch(`${storefront}/${imageId}/${productId}.jpg`, { signal: AbortSignal.timeout(10_000), cache: "force-cache" });
    if (!response.ok) {
      const url = new URL(`${root}/images/products/${productId}/${imageId}`);
      url.searchParams.set("ws_key", key);
      response = await fetch(url, { signal: AbortSignal.timeout(10_000), cache: "force-cache" });
    }
    if (!response.ok) return new NextResponse(null, { status: response.status === 404 ? 404 : 502 });
    const contentType = response.headers.get("content-type") ?? "image/jpeg";
    if (!contentType.startsWith("image/")) return new NextResponse(null, { status: 502 });
    return new NextResponse(await response.arrayBuffer(), { headers: { "Content-Type": contentType, "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000" } });
  } catch (error) {
    console.error("Product image request failed", error);
    return new NextResponse(null, { status: 502 });
  }
}
