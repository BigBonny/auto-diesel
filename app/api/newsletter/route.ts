import { NextResponse } from "next/server";

import { requireEnvironmentVariable } from "@/lib/env";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const { email, source = "storefront" } = await request.json() as { email?: string; source?: string };
  if (!email || !emailPattern.test(email)) return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });

  try {
    const response = await fetch(requireEnvironmentVariable("PS_AUTH_URL"), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ token: requireEnvironmentVariable("PS_SCRIPT_SECRET"), action: "newsletter", email, source }),
      signal: AbortSignal.timeout(8_000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Newsletter bridge returned ${response.status}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription failed", error);
    return NextResponse.json({ error: "L'inscription à la newsletter est temporairement indisponible." }, { status: 502 });
  }
}
