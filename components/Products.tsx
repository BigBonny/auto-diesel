"use client";

import { useState } from "react";
import { ShoppingCart, Eye, Check, Flame, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "Tous les produits", count: 1247 },
  { id: "turbos", name: "Turbos", count: 892 },
  { id: "injecteurs", name: "Injecteurs", count: 355 },
];

const brands = [
  { id: "all", name: "Toutes" },
  { id: "renault", name: "Renault", logo: "R" },
  { id: "peugeot", name: "Peugeot", logo: "P" },
  { id: "citroen", name: "Citroën", logo: "C" },
  { id: "audi", name: "Audi", logo: "A" },
  { id: "bmw", name: "BMW", logo: "B" },
  { id: "vw", name: "VW", logo: "V" },
  { id: "toyota", name: "Toyota", logo: "T" },
  { id: "porsche", name: "Porsche", logo: "P" },
];

// Real products from auto-diesels.com
const products = [
  {
    id: 1,
    name: "Turbo échange standard 1.6 HDI 110 CV GARRETT",
    reference: "753420-5006S",
    brand: "peugeot",
    category: "turbos",
    price: 210.00,
    originalPrice: 450.00,
    image: "turbo-hdi",
    badge: "Meilleure vente",
    badgeColor: "bg-red-500",
    inStock: true,
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: "Turbo échange standard 1.9 DCI 120 CV GARRETT",
    reference: "708639-5010S",
    brand: "renault",
    category: "turbos",
    price: 200.00,
    originalPrice: 420.00,
    image: "turbo-dci",
    badge: "Échange standard",
    badgeColor: "bg-blue-500",
    inStock: true,
    rating: 4.9,
    reviews: 245,
  },
  {
    id: 3,
    name: "Turbo Audi A3 2.0 TDI 136/140CV GARRETT",
    reference: "724930-5009S",
    brand: "audi",
    category: "turbos",
    price: 210.00,
    originalPrice: 480.00,
    image: "turbo-audi",
    badge: "Original Garrett",
    badgeColor: "bg-green-500",
    inStock: true,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 4,
    name: "Turbo BMW 320d (E90/E91) 163CV MITSUBISHI",
    reference: "49135-05671",
    brand: "bmw",
    category: "turbos",
    price: 320.00,
    originalPrice: 680.00,
    image: "turbo-bmw",
    badge: "Premium",
    badgeColor: "bg-purple-500",
    inStock: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 5,
    name: "Turbo échange standard 2.0 TDI 136/140CV",
    reference: "724930-5010S",
    brand: "vw",
    category: "turbos",
    price: 210.00,
    originalPrice: 450.00,
    image: "turbo-tdi",
    badge: "Top rated",
    badgeColor: "bg-orange-500",
    inStock: true,
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 6,
    name: "Turbo échange standard 1.6 HDi 75/90 CV MITSUBISHI",
    reference: "49173-07508",
    brand: "peugeot",
    category: "turbos",
    price: 210.00,
    originalPrice: 420.00,
    image: "turbo-hdi-small",
    badge: "Économique",
    badgeColor: "bg-teal-500",
    inStock: true,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 7,
    name: "Turbo échange standard 2.0 HDi 136/140 CV",
    reference: "756047-5005S",
    brand: "peugeot",
    category: "turbos",
    price: 230.00,
    originalPrice: 490.00,
    image: "turbo-hdi-2l",
    badge: "Garantie 2 ans",
    badgeColor: "bg-indigo-500",
    inStock: true,
    rating: 4.7,
    reviews: 134,
  },
  {
    id: 8,
    name: "Turbo Porsche 911 Turbo/GT2 420-530CV",
    reference: "49389-01310",
    brand: "porsche",
    category: "turbos",
    price: 2106.00,
    originalPrice: 3500.00,
    image: "turbo-porsche",
    badge: "Performance",
    badgeColor: "bg-yellow-500",
    inStock: true,
    rating: 5.0,
    reviews: 23,
  },
  {
    id: 9,
    name: "Turbo échange standard 1.9 TDI 130 CV",
    reference: "720855-5006S",
    brand: "vw",
    category: "turbos",
    price: 230.00,
    originalPrice: 480.00,
    image: "turbo-tdi-130",
    badge: "En stock",
    badgeColor: "bg-emerald-500",
    inStock: true,
    rating: 4.8,
    reviews: 267,
  },
  {
    id: 10,
    name: "Turbo Toyota RAV4 2.0 D-4D 115 CV",
    reference: "721164-0014",
    brand: "toyota",
    category: "turbos",
    price: 216.00,
    originalPrice: 450.00,
    image: "turbo-toyota",
    badge: "Fiable",
    badgeColor: "bg-cyan-500",
    inStock: true,
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 11,
    name: "Turbo échange standard 1.5 dCi 103-110 CV KKK",
    reference: "5439-988-0070",
    brand: "renault",
    category: "turbos",
    price: 230.00,
    originalPrice: 480.00,
    image: "turbo-dci-small",
    badge: "Populaire",
    badgeColor: "bg-pink-500",
    inStock: true,
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 12,
    name: "Turbo Citroen C4 Picasso 1.6 HDi 110 CV",
    reference: "753420-5006S",
    brand: "citroen",
    category: "turbos",
    price: 210.00,
    originalPrice: 440.00,
    image: "turbo-citroen",
    badge: "Compatible",
    badgeColor: "bg-amber-500",
    inStock: true,
    rating: 4.8,
    reviews: 145,
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBrand, setActiveBrand] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = products.filter((p) => {
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    if (activeBrand !== "all" && p.brand !== activeBrand) return false;
    return true;
  });

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">Nos produits</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Turbos & Injecteurs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez notre sélection de turbos et injecteurs de qualité supérieure. 
            <span className="text-white font-semibold"> Économisez jusqu&apos;à 50%</span> avec notre échange standard.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2",
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              )}
            >
              {cat.name}
              <span className={cn(
                "px-2 py-0.5 rounded-full text-xs",
                activeCategory === cat.id ? "bg-white/20" : "bg-gray-700"
              )}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Brand filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActiveBrand(brand.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeBrand === brand.id
                  ? "bg-red-500/10 border-red-500 text-red-400"
                  : "bg-gray-800/50 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white"
              )}
            >
              {brand.id !== "all" && (
                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">
                  {brand.logo}
                </span>
              )}
              {brand.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              <div className={`absolute top-3 left-3 z-10 px-3 py-1 ${product.badgeColor} text-white text-xs font-bold rounded-full shadow-lg`}>
                {product.badge}
              </div>

              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 bg-gray-600/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg viewBox="0 0 24 24" className="w-16 h-16 text-gray-400" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gray-900/80 flex items-center justify-center gap-3 transition-opacity duration-300",
                  hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                )}>
                  <button className="p-3 bg-white text-gray-900 rounded-full hover:bg-red-500 hover:text-white transition-colors transform hover:scale-110">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors transform hover:scale-110 shadow-lg">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Reference */}
                <p className="text-gray-500 text-xs font-mono mb-2">{product.reference}</p>

                {/* Title */}
                <h3 className="text-white font-semibold mb-3 line-clamp-2 group-hover:text-red-400 transition-colors text-sm">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white text-sm font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-gray-500 text-xs">({product.reviews} avis)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-black text-red-400">
                    {product.price.toFixed(0)} €
                  </span>
                  <span className="text-gray-500 text-sm line-through">
                    {product.originalPrice.toFixed(0)} €
                  </span>
                  <span className="text-green-400 text-xs font-semibold">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                  <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all border border-gray-700 hover:border-gray-600">
            Voir tous les produits
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
