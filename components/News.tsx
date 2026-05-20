"use client";

import { ChevronRight } from "lucide-react";

const articles = [
  { id: 1, title: "Problèmes d'injecteurs et de turbo : symptômes et diagnostics", category: "Diagnostic", image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&q=80" },
  { id: 2, title: "Emplacement du filtre à gasoil : Guide pratique", category: "Entretien", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80" },
  { id: 3, title: "Comment identifier un filtre à air encrassé", category: "Conseils", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80" },
  { id: 4, title: "Quel est le coût pour remplacer un catalyseur", category: "Prix", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80" },
];

export default function News() {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Actualités & Conseils</h2>
          <a href="#" className="text-green-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Voir tout <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-green-300 transition-all"
            >
              {/* Thumbnail */}
              <div className="h-40 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Text */}
              <div className="p-4">
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">{article.category}</span>
                <h3 className="font-medium text-gray-900 mt-1 text-sm leading-snug">{article.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium mt-3">
                  Lire la suite <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
