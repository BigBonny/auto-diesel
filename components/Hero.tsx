"use client";

import { Search, ChevronDown } from "lucide-react";

const brands = ["Marque", "Renault", "Peugeot", "Citroën", "Audi", "BMW", "Volkswagen", "Toyota"];
const models = ["Modèle", "Clio", "Mégane", "308", "A3", "A4", "Golf"];
const motorizations = ["Motorisation", "1.6 HDI", "1.9 DCI", "2.0 TDI", "1.5 DCI"];

export default function Hero() {
  return (
    <section className="pt-16">
      {/* Hero image banner */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
          alt="Moteur turbo diesel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3">
              La marketplace du turbo
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              Turbos & Injecteurs
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Plus de 50 000 pièces disponibles pour toutes marques
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Trouvez votre pièce en quelques clics
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Rechercher par véhicule
          </h2>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button className="flex-1 py-4 text-sm font-semibold text-green-600 border-b-2 border-green-600 bg-green-50/50">
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
                  <select className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 cursor-pointer text-sm font-medium">
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Model */}
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 cursor-pointer text-sm font-medium">
                    {models.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Motorization */}
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 cursor-pointer text-sm font-medium">
                    {motorizations.map((mot) => (
                      <option key={mot} value={mot}>{mot}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Rechercher
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1"><span className="text-green-500 font-bold">✓</span> Livraison gratuite dès 200€</span>
            <span className="flex items-center gap-1"><span className="text-green-500 font-bold">✓</span> Garantie 2 ans</span>
            <span className="flex items-center gap-1"><span className="text-green-500 font-bold">✓</span> Expédition 24-48h</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
