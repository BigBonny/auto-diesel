import crypto from "node:crypto";

import { NextResponse } from "next/server";

import { requireEnvironmentVariable } from "@/lib/env";
import { createPrestaShopOrder } from "@/lib/prestashop-orders";
import { supabaseAdmin } from "@/lib/supabase/server";

type CartItem = { id: string; name: string; price: number; quantity: number };

export async function POST(request: Request) {
  try {
    const { amount, currency = "EUR", orderId, customerEmail, customerName, cartItems = [] } = await request.json() as { amount?: number; currency?: string; orderId?: string; customerEmail?: string; customerName?: string; cartItems?: CartItem[] };
    if (!amount || amount <= 0 || !orderId || !customerEmail || !customerName || !Array.isArray(cartItems)) return NextResponse.json({ error: "Données de paiement invalides." }, { status: 400 });

    const mode = requireEnvironmentVariable("SOGECOMMERCE_MODE");
    const isProduction = mode === "PRODUCTION";
    const siteId = requireEnvironmentVariable(isProduction ? "SOGECOMMERCE_PROD_SITE_ID" : "SOGECOMMERCE_TEST_SITE_ID");
    const hmacKey = requireEnvironmentVariable(isProduction ? "SOGECOMMERCE_PROD_HMAC_KEY" : "SOGECOMMERCE_TEST_HMAC_KEY");
    const baseUrl = requireEnvironmentVariable("NEXT_PUBLIC_BASE_URL").replace(/\/$/, "");
    const prestashopOrderId = await createPrestaShopOrder(orderId, amount, customerEmail, customerName);

    await supabaseAdmin.from("orders").upsert({ id: orderId, amount, currency, customer_email: customerEmail, customer_name: customerName, cart_items: cartItems, status: "pending", payment_method: "sogecommerce", prestashop_order_id: Number(prestashopOrderId), created_at: new Date().toISOString(), updated_at: new Date().toISOString() }, { onConflict: "id" });

    const date = new Date().toISOString().replaceAll("-", "").replaceAll(":", "").replace("T", "").replace(".", "").replace("Z", "").slice(0, 14);
    const transactionId = orderId.replace(/\D/g, "").slice(-6).padStart(6, "0");
    const fields: Record<string, string> = {
      vads_site_id: siteId, vads_ctx_mode: isProduction ? "PRODUCTION" : "TEST", vads_trans_id: transactionId, vads_trans_date: date, vads_amount: String(Math.round(amount * 100)), vads_currency: "978", vads_action_mode: "INTERACTIVE", vads_page_action: "PAYMENT", vads_version: "V2", vads_payment_config: "SINGLE", vads_return_mode: "GET", vads_language: "fr", vads_url_return: `${baseUrl}/payment/success?orderId=${encodeURIComponent(orderId)}`, vads_url_cancel: `${baseUrl}/payment/cancel?orderId=${encodeURIComponent(orderId)}`, vads_url_check: `${baseUrl}/api/payment/notification`, vads_order_id: orderId.slice(0, 32), vads_cust_email: customerEmail.slice(0, 127),
    };
    cartItems.slice(0, 99).forEach((item, index) => { fields[`vads_product_ref${index}`] = String(item.id).slice(0, 63); fields[`vads_product_label${index}`] = String(item.name).slice(0, 255); fields[`vads_product_qty${index}`] = String(item.quantity); fields[`vads_product_amount${index}`] = String(Math.round(item.price * 100)); fields[`vads_product_type${index}`] = "AUTOMOTIVE"; });
    fields.vads_nb_products = String(Math.min(cartItems.length, 99));
    const signature = crypto.createHmac("sha256", hmacKey).update(`${Object.keys(fields).filter((key) => key.startsWith("vads_")).sort().map((key) => fields[key]).join("+")}+${hmacKey}`).digest("base64");
    const controls = [...Object.entries(fields), ["signature", signature]].map(([name, value]) => `<input type="hidden" name="${name}" value="${value.replace(/"/g, "&quot;")}" />`).join("");
    return new NextResponse(`<!doctype html><html><body onload="document.forms[0].submit()"><form method="post" action="https://sogecommerce.societegenerale.eu/vads-payment/">${controls}</form></body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  } catch (error) {
    console.error("Payment form creation failed", error);
    return NextResponse.json({ error: "La création du paiement a échoué." }, { status: 502 });
  }
}
