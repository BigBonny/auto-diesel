"use client";

import { Search, ChevronDown } from "lucide-react";

const brands = ["Marque", "Renault", "Peugeot", "Citroën", "Audi", "BMW", "Volkswagen", "Toyota"];
const models = ["Modèle", "Clio", "Mégane", "308", "A3", "A4", "Golf"];
const motorizations = ["Motorisation", "1.6 HDI", "1.9 DCI", "2.0 TDI", "1.5 DCI"];

export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">
            La marketplace du turbo
          </p>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Rechercher un turbo
          </h1>

          <p className="text-lg text-gray-600 mb-10">
            Plus de 50 000 turbos disponibles pour toutes marques
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button className="flex-1 py-4 text-sm font-semibold text-red-600 border-b-2 border-red-600 bg-red-50/50">
                Par véhicule
              </button>
              <button className="flex-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors">
                Par référence
              </button>
            </div>

            {/* Filters */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {/* Brand */}
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 cursor-pointer text-sm font-medium">
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Model */}
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 cursor-pointer text-sm font-medium">
                    {models.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Motorization */}
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 cursor-pointer text-sm font-medium">
                    {motorizations.map((mot) => (
                      <option key={mot} value={mot}>{mot}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Rechercher
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
            <span>✓ Livraison gratuite dès 200€</span>
            <span>✓ Garantie 2 ans</span>
            <span>✓ Expédition 24-48h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
