"use client";

import { Shield, Truck, Award, RefreshCw } from "lucide-react";

const features = [
  { icon: Shield, title: "Garantie 2 ans", description: "Tous nos produits sont garantis" },
  { icon: Truck, title: "Livraison rapide", description: "Expédition sous 24-48h" },
  { icon: Award, title: "Qualité certifiée", description: "Pièces testées et certifiées" },
  { icon: RefreshCw, title: "Échange standard", description: "Économisez jusqu'à 50%" },
];

export default function Features() {
  return (
    <>
      {/* Full-width image banner */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600&q=80"
          alt="Atelier turbo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">Qualité & Fiabilité</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Des pièces testées, garanties 2 ans</h2>
          </div>
        </div>
      </div>

      {/* Features row */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
