"use client";

import { Shield, Truck, Award, RefreshCw, Zap, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Shield, title: "Garantie 2 ans", desc: "Tous nos produits reconditionnés", color: "bg-green-500" },
  { icon: Truck, title: "Expédition 24-48h", desc: "Livraison rapide en France & Europe", color: "bg-blue-500" },
  { icon: Award, title: "Qualité certifiée", desc: "Pièces testées sur banc de contrôle", color: "bg-purple-500" },
  { icon: RefreshCw, title: "Échange standard", desc: "Économisez jusqu'à 60% vs neuf", color: "bg-orange-500" },
  { icon: Zap, title: "Stock permanent", desc: "50 000+ pièces disponibles", color: "bg-yellow-500" },
  { icon: HeadphonesIcon, title: "Support expert", desc: "Conseils techniques par nos experts", color: "bg-pink-500" },
];

export default function Features() {
  return (
    <>
      {/* Full-width banner */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1800&q=85"
          alt="Atelier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-2">Pourquoi nous choisir</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-lg leading-tight">
              L'expertise diesel<br />à votre service
            </h2>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-default">
                <div className={`w-12 h-12 ${f.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
