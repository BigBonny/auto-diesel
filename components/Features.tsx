"use client";

import { Shield, Truck, Clock, Award, RefreshCw, Headphones, Check, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantie 2 ans",
    description: "Tous nos produits sont garantis 2 ans. Pièces et main d'œuvre incluses.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Truck,
    title: "Livraison rapide",
    description: "Expédition sous 24-48h ouvrées. Suivi en temps réel de votre commande.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    title: "Qualité certifiée",
    description: "Turbos et injecteurs testés et certifiés selon les normes ISO.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: RefreshCw,
    title: "Échange standard",
    description: "Économisez jusqu'à 50% avec notre service d'échange standard.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Headphones,
    title: "Conseil expert",
    description: "Notre équipe de techniciens vous accompagne dans votre choix.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Clock,
    title: "SAV réactif",
    description: "Service après-vente disponible 6j/7 pour répondre à vos besoins.",
    color: "from-teal-500 to-teal-600",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Pourquoi choisir <span className="text-red-500">Auto Diesels</span> ?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Plus de 15 ans d&apos;expertise au service de votre véhicule. 
            Découvrez nos engagements qualité.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-2xl font-black text-white">4.8/5</p>
            <p className="text-gray-400 text-sm">Note moyenne</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-black text-red-500 mb-2">50K+</div>
            <p className="text-gray-400 text-sm">Produits vendus</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-black text-red-500 mb-2">30K+</div>
            <p className="text-gray-400 text-sm">Clients satisfaits</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-black text-red-500 mb-2">15+</div>
            <p className="text-gray-400 text-sm">Années d&apos;expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
}
