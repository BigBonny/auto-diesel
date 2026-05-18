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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
