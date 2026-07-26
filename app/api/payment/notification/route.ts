import crypto from "node:crypto";

import { NextResponse } from "next/server";

import { requireEnvironmentVariable } from "@/lib/env";
import { updatePrestaShopOrderStatus } from "@/lib/prestashop-orders";
import { supabaseAdmin } from "@/lib/supabase/server";

const paymentStatuses = {
  AUTHORISED: "paid",
  CANCELLED: "cancelled",
  REFUSED: "refused",
  EXPIRED: "expired",
  WAITING: "pending",
} as const;

type PaymentStatus = typeof paymentStatuses[keyof typeof paymentStatuses] | "failed";

export async function POST(request: Request) {
  try {
    const data = Object.fromEntries(await request.formData()) as Record<string, string>;
    const orderId = data.vads_order_id;
    const signature = data.signature;
    if (!orderId || !signature) return NextResponse.json({ error: "Notification invalide." }, { status: 400 });

    const isProduction = requireEnvironmentVariable("SOGECOMMERCE_MODE") === "PRODUCTION";
    const hmacKey = requireEnvironmentVariable(isProduction ? "SOGECOMMERCE_PROD_HMAC_KEY" : "SOGECOMMERCE_TEST_HMAC_KEY");
    const fields = Object.keys(data).filter((key) => key.startsWith("vads_")).sort();
    const expectedSignature = crypto.createHmac("sha256", hmacKey).update(`${fields.map((key) => data[key]).join("+")}+${hmacKey}`).digest("base64");
    const expectedBuffer = Buffer.from(expectedSignature);
    const receivedBuffer = Buffer.from(signature);
    if (expectedBuffer.length !== receivedBuffer.length || !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)) return NextResponse.json({ error: "Signature invalide." }, { status: 401 });

    const status: PaymentStatus = paymentStatuses[data.vads_trans_status as keyof typeof paymentStatuses] ?? "failed";
    const amount = Number(data.vads_amount ?? "0") / 100;
    const { data: order, error } = await supabaseAdmin.from("orders").update({ status, transaction_id: data.vads_trans_uuid ?? data.vads_trans_id, updated_at: new Date().toISOString() }).eq("id", orderId).select("prestashop_order_id").single();
    if (error) throw error;
    if (order?.prestashop_order_id && status !== "pending") await updatePrestaShopOrderStatus(order.prestashop_order_id, status, amount);

    return NextResponse.json({ success: true, orderId, status });
  } catch (error) {
    console.error("Payment notification processing failed", error);
    return NextResponse.json({ error: "La notification de paiement a échoué." }, { status: 502 });
  }
}
