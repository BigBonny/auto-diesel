"use client";

import { Mail } from "lucide-react";

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "50K+", label: "Produits vendus" },
  { value: "30K+", label: "Clients satisfaits" },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=900&q=80"
              alt="Atelier mécanique"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-around">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">À propos</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Euro Système Injection
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Spécialisés dans l'entretien, la réparation et le reconditionnement des systèmes
              d'injection pour véhicules toutes marques. Notre mission est d'offrir à nos clients
              des solutions fiables et durables, en associant expertise technique et pièces de qualité.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Basés à Strasbourg, nous livrons partout en France et en Europe avec des délais
              d'expédition parmi les plus rapides du secteur.
            </p>
            <a
              href="mailto:info@www.auto-diesels.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
