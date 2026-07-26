import "server-only";

import { requireEnvironmentVariable } from "@/lib/env";

export type CatalogProduct = {
  id: string;
  name: string;
  price: string;
  active: string;
};

type PrestaShopProductResponse = {
  products?: CatalogProduct[];
};

function createApiUrl(resource: string, parameters: Record<string, string>) {
  const apiUrl = new URL(`${requireEnvironmentVariable("PRESTASHOP_API_URL").replace(/\/$/, "")}/${resource}`);

  for (const [key, value] of Object.entries(parameters)) {
    apiUrl.searchParams.set(key, value);
  }

  return apiUrl;
}

export async function searchPrestaShopProducts(query: string): Promise<CatalogProduct[]> {
  const apiUrl = createApiUrl("products", {
    display: "[id,name,price,active]",
    output_format: "JSON",
    "filter[name]": `%${query}%`,
    limit: "20",
  });
  const credentials = Buffer.from(`${requireEnvironmentVariable("PRESTASHOP_API_KEY")}:`).toString("base64");
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Basic ${credentials}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`PrestaShop catalog request failed with status ${response.status}`);
  }

  const data = (await response.json()) as PrestaShopProductResponse;
  return data.products ?? [];
}
