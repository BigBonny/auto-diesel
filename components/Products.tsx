"use client";

import { useState } from "react";
import { ShoppingCart, ArrowRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Tout voir" },
  { id: "turbos", label: "Turbos" },
  { id: "injecteurs", label: "Injecteurs" },
];

const products = [
  { id: 1, name: "Turbo 1.6 HDI 110 CV", ref: "753420-5006S", price: 210, original: 450, brand: "Peugeot", discount: 53, category: "turbos", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&q=80", stock: true },
  { id: 2, name: "Turbo 1.9 DCI 120 CV", ref: "708639-5010S", price: 200, original: 420, brand: "Renault", discount: 52, category: "turbos", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80", stock: true },
  { id: 3, name: "Turbo 2.0 TDI 140 CV", ref: "724930-5009S", price: 210, original: 480, brand: "Audi", discount: 56, category: "turbos", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80", stock: true },
  { id: 4, name: "Turbo 320d 163 CV", ref: "49135-05671", price: 320, original: 680, brand: "BMW", discount: 53, category: "turbos", image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&q=80", stock: true },
  { id: 5, name: "Turbo 2.0 TDI 136 CV", ref: "724930-5010S", price: 210, original: 450, brand: "VW", discount: 53, category: "turbos", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80", stock: false },
  { id: 6, name: "Turbo 1.6 HDi 90 CV", ref: "49173-07508", price: 210, original: 420, brand: "Peugeot", discount: 50, category: "turbos", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80", stock: true },
  { id: 7, name: "Injecteur HDi 136 CV", ref: "756047-5005S", price: 230, original: 490, brand: "Peugeot", discount: 53, category: "injecteurs", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&q=80", stock: true },
  { id: 8, name: "Injecteur Panamera 500 CV", ref: "49389-01310", price: 2106, original: 3500, brand: "Porsche", discount: 40, category: "injecteurs", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80", stock: true },
];

export default function Products() {
  const [active, setActive] = useState("all");

  const filtered = products.filter((p) => active === "all" || p.category === active);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-1">Catalogue</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Nos produits</h2>
          </div>
          <div className="flex gap-2 bg-white rounded-xl border border-gray-200 p-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
                  active === cat.id ? "bg-green-600 text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Discount badge */}
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-lg">
                  -{product.discount}%
                </div>
                {/* Stock */}
                {!product.stock && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                    Sur commande
                  </div>
                )}
                {/* Hover overlay actions */}
                <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                  <button className="flex-1 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-lg flex items-center justify-center gap-1 hover:bg-white transition-colors">
                    <Eye className="w-3.5 h-3.5" /> Aperçu
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-gray-400 font-mono mb-1">{product.ref}</p>
                <h3 className="text-sm font-bold text-gray-900 mb-0.5 line-clamp-1">{product.name}</h3>
                <p className="text-xs text-green-700 font-semibold bg-green-50 inline-block px-2 py-0.5 rounded-full mb-3">{product.brand}</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-gray-900">{product.price} €</span>
                  <span className="text-sm text-gray-400 line-through">{product.original} €</span>
                </div>
                <button className="w-full py-2.5 bg-gray-900 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                  <ShoppingCart className="w-4 h-4" />
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-green-600/30">
            Voir tout le catalogue
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
