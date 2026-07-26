import "server-only";

import { supabaseAdmin } from "@/lib/supabase/server";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  reference: string;
  supplier_reference: string | null;
  compatible_references: string[] | null;
  link_rewrite: string | null;
  id_default_image: string | null;
  id_category_default: string | null;
  category_name: string | null;
  images: Array<{ id: string }>;
  image_url: string | null;
};

const categoryPatterns: Record<string, string[]> = {
  turbos: ["turbo"],
  injecteurs: ["injecteur", "injector"],
  "kit-turbo-chra": ["chra"],
  "pompes-hp": ["pompe"],
};

function toProduct(value: Record<string, unknown>): Product {
  return {
    id: String(value.id),
    name: String(value.name ?? "Produit sans nom"),
    description: String(value.description ?? ""),
    price: String(value.price ?? "0.00"),
    reference: String(value.reference ?? ""),
    supplier_reference: typeof value.supplier_reference === "string" ? value.supplier_reference : null,
    compatible_references: Array.isArray(value.compatible_references) ? value.compatible_references.map(String) : null,
    link_rewrite: typeof value.link_rewrite === "string" ? value.link_rewrite : null,
    id_default_image: value.id_default_image ? String(value.id_default_image) : null,
    id_category_default: value.id_category_default ? String(value.id_category_default) : null,
    category_name: typeof value.category_name === "string" ? value.category_name : null,
    images: Array.isArray(value.images) ? value.images.filter((image): image is { id: string } => Boolean(image && typeof image === "object" && "id" in image && (image as { id?: unknown }).id != null)).map((image) => ({ id: String(image.id) })) : [],
    image_url: null,
  };
}

function withImageUrl(product: Product) {
  const imageId = product.id_default_image ?? product.images[0]?.id;
  return { ...product, image_url: imageId ? `/api/product-image/${product.id}/${imageId}` : null };
}

export async function findProducts(options: { search?: string; category?: string; limit?: number; page?: number; minPrice?: number; maxPrice?: number; sort?: "price-asc" | "price-desc" | "newest" }) {
  const limit = Math.min(Math.max(options.limit ?? 24, 1), 100);
  const page = Math.max(options.page ?? 1, 1);
  const search = options.search?.trim();
  let query = supabaseAdmin.from("products").select("*", { count: "exact" });

  if (search) {
    const normalized = /^0+\d+$/.test(search) ? search.replace(/^0+/, "") || search : search;
    const escaped = normalized.replace(/[%_]/g, "\\$&");
    query = query.or(`name.ilike.%${escaped}%,reference.ilike.%${escaped}%,supplier_reference.ilike.%${escaped}%`);
  } else if (options.category === "pompes-hp") {
    query = query.eq("category_name", "Pompes HP");
  } else if (options.category && categoryPatterns[options.category]) {
    const filter = categoryPatterns[options.category].map((pattern) => `name.ilike.%${pattern}%`).join(",");
    query = query.or(filter);
  }

  if (typeof options.minPrice === "number" && options.minPrice >= 0) query = query.gte("price", options.minPrice);
  if (typeof options.maxPrice === "number" && options.maxPrice >= 0) query = query.lte("price", options.maxPrice);
  const orderColumn = options.sort?.startsWith("price") ? "price" : "id";
  const ascending = options.sort === "price-asc";
  const { data, error, count } = await query.order(orderColumn, { ascending }).range((page - 1) * limit, page * limit - 1);
  if (error) throw error;
  return { products: (data ?? []).map((value) => withImageUrl(toProduct(value as Record<string, unknown>))), total: count ?? 0, page, limit }; 
}

export async function findProduct(id: string) {
  const { data, error } = await supabaseAdmin.from("products").select("*").eq("id", id).single();
  if (error || !data) return null;
  return withImageUrl(toProduct(data as Record<string, unknown>));
}
