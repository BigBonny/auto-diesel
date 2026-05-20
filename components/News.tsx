"use client";

import { ChevronRight } from "lucide-react";

const articles = [
  { id: 1, title: "Problèmes d'injecteurs et de turbo : symptômes et diagnostics", category: "Diagnostic" },
  { id: 2, title: "Emplacement du filtre à gasoil : Guide pratique", category: "Entretien" },
  { id: 3, title: "Comment identifier un filtre à air encrassé", category: "Conseils" },
  { id: 4, title: "Quel est le coût pour remplacer un catalyseur", category: "Prix" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-sm transition-all"
            >
              <div>
                <span className="text-xs font-medium text-green-600 uppercase">{article.category}</span>
                <h3 className="font-medium text-gray-900 mt-1">{article.title}</h3>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
