import "server-only";

import { requireEnvironmentVariable } from "@/lib/env";

export async function createPrestaShopOrder(orderId: string, amount: number, email: string, customerName: string) {
  const names = customerName.trim().split(/\s+/);
  const response = await fetch(requireEnvironmentVariable("PS_SCRIPT_URL"), {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      token: requireEnvironmentVariable("PS_SCRIPT_SECRET"),
      action: "create",
      email,
      first_name: (names[0] || "Client").slice(0, 32),
      last_name: (names.slice(1).join(" ") || names[0] || "Client").slice(0, 32),
      amount: amount.toFixed(2),
      reference: orderId.slice(0, 32),
    }),
    signal: AbortSignal.timeout(15_000),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`PrestaShop order request failed with status ${response.status}`);
  const data = await response.json() as { error?: string; order_id?: string | number };
  if (data.error || !data.order_id) throw new Error(data.error ?? "PrestaShop did not return an order id.");
  return String(data.order_id);
}

export async function updatePrestaShopOrderStatus(orderId: string | number, status: "paid" | "cancelled" | "refused" | "failed" | "expired", amount: number) {
  const states = { paid: "2", cancelled: "6", refused: "8", failed: "8", expired: "6" } as const;
  const response = await fetch(requireEnvironmentVariable("PS_SCRIPT_URL"), {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ token: requireEnvironmentVariable("PS_SCRIPT_SECRET"), action: "update_status", order_id: String(orderId), state: states[status], amount: amount.toFixed(2) }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`PrestaShop status request failed with status ${response.status}`);
}
