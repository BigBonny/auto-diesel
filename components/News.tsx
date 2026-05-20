"use client";

import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Symptômes et diagnostic d'un turbo défaillant",
    excerpt: "Fumée bleue, perte de puissance, sifflement... Apprenez à identifier les signes d'un turbo en fin de vie.",
    category: "Diagnostic",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Filtre à gasoil : emplacement et remplacement",
    excerpt: "Guide pratique pour localiser et remplacer le filtre à gasoil sur les principaux modèles.",
    category: "Entretien",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Comment identifier un filtre à air encrassé",
    excerpt: "Un filtre à air colmaté affecte les performances et la consommation. Voici comment le contrôler.",
    category: "Conseils",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Coût de remplacement d'un catalyseur",
    excerpt: "Prix, main d'œuvre, alternatives reconditionnées... Tout ce que vous devez savoir.",
    category: "Prix",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Diagnostic: "bg-red-100 text-red-700",
  Entretien: "bg-blue-100 text-blue-700",
  Conseils: "bg-green-100 text-green-700",
  Prix: "bg-orange-100 text-orange-700",
};

export default function News() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-1">Blog</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Actualités & Conseils</h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-green-600 font-semibold transition-colors">
            Voir tout <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Layout: featured + 3 side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured */}
          {featured && (
            <a href="#" className="group lg:col-span-2 relative rounded-3xl overflow-hidden block aspect-[16/10] shadow-lg">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category]} mb-3 inline-block`}>
                  {featured.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{featured.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-green-400 text-sm font-semibold mt-3">
                  Lire la suite <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          )}

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {rest.map((article) => (
              <a key={article.id} href="#" className="group flex gap-4 bg-gray-50 hover:bg-gray-100 rounded-2xl overflow-hidden transition-colors p-3">
                <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[article.category]} inline-block w-fit mb-1.5`}>
                    {article.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">{article.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-green-600 font-semibold mt-1.5">
                    Lire <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
