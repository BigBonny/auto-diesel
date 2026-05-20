"use client";

import { useState } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

const brands = ["Marque", "Renault", "Peugeot", "Citroën", "Audi", "BMW", "Volkswagen", "Toyota", "Porsche"];
const models = ["Modèle", "Clio", "Mégane", "308", "A3", "A4", "Golf", "3 Series"];
const motorizations = ["Motorisation", "1.5 DCI", "1.6 HDI", "1.9 DCI", "2.0 TDI", "2.0 HDi", "3.0 TDI"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"vehicle" | "reference">("vehicle");

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=85"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/75 to-gray-800/50" />
        {/* Green accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 rounded-full blur-3xl" />
        {/* Decorative star doodle top-right */}
        <svg className="absolute top-32 right-10 w-12 h-12 text-green-400/30 hidden lg:block" viewBox="0 0 50 50" fill="none">
          <path d="M25 5 L27 20 L42 18 L30 27 L35 43 L25 33 L15 43 L20 27 L8 18 L23 20 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
        {/* Decorative dots pattern */}
        <svg className="absolute bottom-20 right-16 w-24 h-24 text-white/10 hidden lg:block" viewBox="0 0 60 60" fill="currentColor">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={col*12+6} cy={row*12+6} r="1.5" />
          )))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            50 000+ pièces disponibles
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Turbos &<br />
            <span className="relative inline-block text-green-400">
              Injecteurs
              {/* Hand-drawn circle - bigger, red */}
              <svg className="absolute -inset-5 w-[calc(100%+40px)] h-[calc(100%+40px)] overflow-visible pointer-events-none" viewBox="0 0 280 80" fill="none">
                <path d="M12 40 Q14 10 140 8 Q266 6 268 40 Q266 72 140 74 Q14 72 12 40" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                <path d="M268 38 Q266 8 140 6 Q14 4 12 38" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3"/>
              </svg>
            </span><br />
            <span className="relative inline-block text-white/60 text-4xl sm:text-5xl font-bold">
              toutes marques
              {/* Squiggly underline */}
              <svg className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none">
                <path d="M0 4 Q10 1 20 4 Q30 7 40 4 Q50 1 60 4 Q70 7 80 4 Q90 1 100 4 Q110 7 120 4 Q130 1 140 4 Q150 7 160 4 Q170 1 180 4 Q190 7 200 4" stroke="#86efac" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg">
            Spécialiste de l'injection diesel depuis{" "}
            <span className="relative inline-block text-white font-bold">
              15 ans
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible pointer-events-none" height="6" viewBox="0 0 50 6" preserveAspectRatio="none" fill="none">
                <path d="M0 5 Q12 1 25 3 Q38 5 50 2" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>. Pièces reconditionnées, garanties 2 ans, expédiées sous 24h.
          </p>

          {/* Search card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-xl">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab("vehicle")}
                className={`flex-1 py-3.5 text-sm font-semibold transition-all ${activeTab === "vehicle" ? "text-green-700 bg-green-50 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Par véhicule
              </button>
              <button
                onClick={() => setActiveTab("reference")}
                className={`flex-1 py-3.5 text-sm font-semibold transition-all ${activeTab === "reference" ? "text-green-700 bg-green-50 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Par référence
              </button>
            </div>

            <div className="p-4">
              {activeTab === "vehicle" ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {[brands, models, motorizations].map((options, i) => (
                      <div key={i} className="relative">
                        <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-sm px-3 py-2.5 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 cursor-pointer">
                          {options.map((o) => <option key={o}>{o}</option>)}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:-translate-y-0.5">
                    <Search className="w-4 h-4" />
                    Rechercher
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Ex: 753420-5006S ou AA-123-AA"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                  <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 hover:-translate-y-0.5">
                    <Search className="w-4 h-4" />
                    Rechercher
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-5 mt-8">
            {["✓ Livraison gratuite dès 200€", "✓ Garantie 2 ans", "✓ Expédition 24-48h"].map((t) => (
              <span key={t} className="text-sm text-gray-300">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative flex justify-center pb-8">
        <a href="#products" className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors">
          <span className="text-xs">Voir les produits</span>
          <ArrowRight className="w-4 h-4 rotate-90 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
