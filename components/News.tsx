"use client";

import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Problèmes d'injecteurs et de turbo : symptômes et diagnostics",
    excerpt: "Apprenez à identifier les signes avant-coureurs d'un injecteur ou turbo défaillant et comment diagnostiquer correctement les problèmes.",
    date: "15 Mai 2026",
    category: "Diagnostic",
  },
  {
    id: 2,
    title: "Emplacement du filtre à gasoil : Guide pratique et conseils",
    excerpt: "Trouvez facilement le filtre à gasoil de votre véhicule avec notre guide complet et nos conseils de remplacement.",
    date: "12 Mai 2026",
    category: "Entretien",
  },
  {
    id: 3,
    title: "Comment identifier un filtre à air encrassé et ses signes évidents ?",
    excerpt: "Un filtre à air encrassé peut affecter les performances de votre moteur. Découvrez les symptômes et comment y remédier.",
    date: "10 Mai 2026",
    category: "Conseils",
  },
  {
    id: 4,
    title: "Quel est le coût pour remplacer un catalyseur ?",
    excerpt: "Guide complet sur les prix des catalyseurs et les facteurs qui influencent le coût de remplacement.",
    date: "8 Mai 2026",
    category: "Prix",
  },
  {
    id: 5,
    title: "Comment remplacer les injecteurs sur une AUDI Q5 2.0 TDI quattro 170 CV ?",
    excerpt: "Guide étape par étape pour remplacer les injecteurs sur votre Audi Q5 avec des instructions détaillées.",
    date: "5 Mai 2026",
    category: "Tutoriel",
  },
  {
    id: 6,
    title: "Comment remplacer les injecteurs sur un VOLKSWAGEN CADDY III 1.6 TDI 102 CV ?",
    excerpt: "Instructions complètes pour le remplacement des injecteurs sur Volkswagen Caddy III.",
    date: "3 Mai 2026",
    category: "Tutoriel",
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Actualités & Conseils
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Retrouvez dans notre espace Actualités toutes les informations essentielles du secteur automobile et de la mécanique de précision.
            </p>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
          >
            Voir tous les articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-gray-600" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>

                <h3 className="text-white font-bold mb-3 line-clamp-2 group-hover:text-red-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-red-500 text-sm font-semibold hover:gap-2 transition-all"
                >
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
