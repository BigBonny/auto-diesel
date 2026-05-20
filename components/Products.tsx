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
  { id: 1, name: "Turbo 1.6 HDI 110 CV", reference: "753420-5006S", price: 210.00, originalPrice: 450.00, brand: "Peugeot", badge: "-53%", category: "turbos", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
  { id: 2, name: "Turbo 1.9 DCI 120 CV", reference: "708639-5010S", price: 200.00, originalPrice: 420.00, brand: "Renault", badge: "-52%", category: "turbos", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80" },
  { id: 3, name: "Turbo 2.0 TDI 140 CV", reference: "724930-5009S", price: 210.00, originalPrice: 480.00, brand: "Audi", badge: "-56%", category: "turbos", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&q=80" },
  { id: 4, name: "Turbo 320d 163 CV", reference: "49135-05671", price: 320.00, originalPrice: 680.00, brand: "BMW", badge: "-53%", category: "turbos", image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=400&q=80" },
  { id: 5, name: "Turbo 2.0 TDI 136 CV", reference: "724930-5010S", price: 210.00, originalPrice: 450.00, brand: "VW", badge: "-53%", category: "turbos", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80" },
  { id: 6, name: "Turbo 1.6 HDi 90 CV", reference: "49173-07508", price: 210.00, originalPrice: 420.00, brand: "Peugeot", badge: "-50%", category: "turbos", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80" },
  { id: 7, name: "Injecteur HDi 136 CV", reference: "756047-5005S", price: 230.00, originalPrice: 490.00, brand: "Peugeot", badge: "-53%", category: "injecteurs", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: 8, name: "Injecteur Panamera 500 CV", reference: "49389-01310", price: 2106.00, originalPrice: 3500.00, brand: "Porsche", badge: "-40%", category: "injecteurs", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
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
                    ? "bg-green-600 text-white"
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
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">
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
          <button className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all">
            Voir tous les produits
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
