"use client";

import { Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Euro Système Injection
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Spécialisés dans l'entretien, la réparation et le reconditionnement des systèmes 
          d'injection pour véhicules toutes marques. Notre mission est d'offrir à nos clients 
          des solutions fiables et durables, en associant expertise technique et pièces de qualité.
        </p>
        <a
          href="mailto:info@www.auto-diesels.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
        >
          <Mail className="w-4 h-4" />
          Nous contacter
        </a>
      </div>
    </section>
  );
}
