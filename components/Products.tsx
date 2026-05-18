"use client";

import { useState } from "react";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "Tous" },
  { id: "turbos", name: "Turbos" },
  { id: "injecteurs", name: "Injecteurs" },
];

const products = [
  { id: 1, name: "Turbo 1.6 HDI 110 CV", reference: "753420-5006S", price: 210.00, originalPrice: 450.00, brand: "Peugeot", badge: "-53%", category: "turbos" },
  { id: 2, name: "Turbo 1.9 DCI 120 CV", reference: "708639-5010S", price: 200.00, originalPrice: 420.00, brand: "Renault", badge: "-52%", category: "turbos" },
  { id: 3, name: "Turbo 2.0 TDI 140 CV", reference: "724930-5009S", price: 210.00, originalPrice: 480.00, brand: "Audi", badge: "-56%", category: "turbos" },
  { id: 4, name: "Turbo 320d 163 CV", reference: "49135-05671", price: 320.00, originalPrice: 680.00, brand: "BMW", badge: "-53%", category: "turbos" },
  { id: 5, name: "Turbo 2.0 TDI 136 CV", reference: "724930-5010S", price: 210.00, originalPrice: 450.00, brand: "VW", badge: "-53%", category: "turbos" },
  { id: 6, name: "Turbo 1.6 HDi 90 CV", reference: "49173-07508", price: 210.00, originalPrice: 420.00, brand: "Peugeot", badge: "-50%", category: "turbos" },
  { id: 7, name: "Turbo 2.0 HDi 136 CV", reference: "756047-5005S", price: 230.00, originalPrice: 490.00, brand: "Peugeot", badge: "-53%", category: "turbos" },
  { id: 8, name: "Turbo Panamera 500 CV", reference: "49389-01310", price: 2106.00, originalPrice: 3500.00, brand: "Porsche", badge: "-40%", category: "turbos" },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products.filter((p) => {
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    return true;
  });

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Nos produits</h2>

          {/* Category tabs */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeCategory === cat.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-gray-400" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                {/* Badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.reference}</p>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{product.brand}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-bold text-gray-900">{product.price.toFixed(0)} €</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice.toFixed(0)} €</span>
                </div>

                {/* CTA */}
                <button className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all">
            Voir tous les produits
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
