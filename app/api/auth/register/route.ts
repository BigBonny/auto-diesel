import { NextResponse } from "next/server";

import { requireEnvironmentVariable } from "@/lib/env";

export async function POST(request: Request) {
  const { email, password, firstname, lastname } = await request.json() as { email?: string; password?: string; firstname?: string; lastname?: string };
  if (!email || !password || !firstname || !lastname) return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  if (password.length < 8) return NextResponse.json({ error: "Le mot de passe doit contenir au moins 8 caractères." }, { status: 400 });

  try {
    const response = await fetch(requireEnvironmentVariable("PS_AUTH_URL"), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ token: requireEnvironmentVariable("PS_SCRIPT_SECRET"), action: "register", email, password, firstname, lastname }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    const data = await response.json() as { error?: string; id?: string; email?: string; firstname?: string; lastname?: string };
    if (!response.ok || data.error) return NextResponse.json({ error: data.error ?? "Création de compte impossible." }, { status: 400 });
    return NextResponse.json({ user: { id: data.id, email: data.email, firstname: data.firstname, lastname: data.lastname } }, { status: 201 });
  } catch (error) {
    console.error("PrestaShop registration failed", error);
    return NextResponse.json({ error: "Le service de création de compte est temporairement indisponible." }, { status: 502 });
  }
}
