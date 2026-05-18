"use client";

import { useState } from "react";
import { Search, Car, ChevronDown, X } from "lucide-react";

const categories = ["Categories", "Turbo", "Injecteur", "Pompe à injection"];
const brands = ["Marque", "Renault", "Peugeot", "Citroën", "Audi", "BMW", "Volkswagen", "Toyota", "Porsche"];
const models = ["Modele", "Clio", "Mégane", "Scenic", "307", "308", "407", "A3", "A4", "320d"];
const motorizations = ["Motorisation", "1.6 HDI 110 CV", "1.9 DCI 120 CV", "2.0 TDI 140 CV", "1.5 DCI 110 CV"];
const powers = ["Puissance", "75 CV", "90 CV", "110 CV", "120 CV", "136 CV", "140 CV", "163 CV"];

export default function ProductSearch() {
  const [licensePlate, setLicensePlate] = useState("");

  const clearFilters = () => {
    setLicensePlate("");
  };

  return (
    <section className="relative z-20 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-700">
          {/* Clear filters */}
          <button 
            onClick={clearFilters}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-4 transition-colors"
          >
            <X className="w-4 h-4" />
            Effacer les filtres
          </button>

          {/* License plate search */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-3">
              Saisissez votre plaque d&apos;immatriculation
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                  placeholder="AA-123-AA"
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all text-lg font-semibold tracking-wider uppercase"
                />
              </div>
              <button className="px-6 sm:px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Rechercher
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 font-medium">OU</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Categories */}
            <div className="relative">
              <label className="block text-gray-400 text-xs font-medium mb-2">Categories</label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-red-500 cursor-pointer text-sm">
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Brand */}
            <div className="relative">
              <label className="block text-gray-400 text-xs font-medium mb-2">Marque</label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-red-500 cursor-pointer text-sm">
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Model */}
            <div className="relative">
              <label className="block text-gray-400 text-xs font-medium mb-2">Modele</label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-red-500 cursor-pointer text-sm">
                  {models.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Motorization */}
            <div className="relative">
              <label className="block text-gray-400 text-xs font-medium mb-2">Motorisation</label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-red-500 cursor-pointer text-sm">
                  {motorizations.map((mot) => (
                    <option key={mot} value={mot}>{mot}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Power */}
            <div className="relative">
              <label className="block text-gray-400 text-xs font-medium mb-2">Puissance</label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-red-500 cursor-pointer text-sm">
                  {powers.map((power) => (
                    <option key={power} value={power}>{power}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
