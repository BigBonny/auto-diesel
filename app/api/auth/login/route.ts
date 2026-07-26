import { NextResponse } from "next/server";

import { requireEnvironmentVariable } from "@/lib/env";

export async function POST(request: Request) {
  const { email, password } = await request.json() as { email?: string; password?: string };
  if (!email || !password) return NextResponse.json({ error: "Email et mot de passe requis." }, { status: 400 });

  try {
    const response = await fetch(requireEnvironmentVariable("PS_AUTH_URL"), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ token: requireEnvironmentVariable("PS_SCRIPT_SECRET"), action: "login", email, password }),
      signal: AbortSignal.timeout(8_000),
      cache: "no-store",
    });
    const data = await response.json() as { error?: string; id?: string; email?: string; firstname?: string; lastname?: string };
    if (!response.ok || data.error) return NextResponse.json({ error: data.error ?? "Connexion impossible." }, { status: 401 });
    return NextResponse.json({ user: { id: data.id, email: data.email, firstname: data.firstname, lastname: data.lastname } });
  } catch (error) {
    console.error("PrestaShop login failed", error);
    return NextResponse.json({ error: "Le service de connexion est temporairement indisponible." }, { status: 502 });
  }
}
