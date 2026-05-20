"use client";

import { Mail, CheckCircle } from "lucide-react";

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "50K+", label: "Produits vendus" },
  { value: "30K+", label: "Clients satisfaits" },
  { value: "24h", label: "Délai expédition" },
];

const strengths = [
  "Reconditionnement professionnel sur banc de contrôle",
  "Pièces garanties 2 ans toutes marques",
  "Livraison express France & Europe",
  "Conseils techniques par nos spécialistes",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image stack */}
          <div className="relative">
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=900&q=85"
                alt="Atelier mécanique"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&q=80"
                alt="Turbo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats card overlay */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 hidden lg:block border border-gray-100">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                  <span className="text-xl font-black text-green-600">{s.value}</span>
                  <span className="text-xs text-gray-500 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: content */}
          <div className="lg:pl-6">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">À propos</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-5">
              Euro Système<br />
              <span className="relative inline-block text-green-600">
                Injection
                {/* Hand-drawn circle */}
                <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+20px)] overflow-visible pointer-events-none" viewBox="0 0 180 55" fill="none">
                  <path d="M10 28 Q15 5 90 5 Q165 5 170 28 Q165 50 90 50 Q15 50 10 28" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Spécialistes de l'injection diesel depuis plus de{" "}
              <span className="relative inline-block font-bold text-gray-800">
                15 ans
                <svg className="absolute -bottom-1 left-0 w-full overflow-visible pointer-events-none" height="5" viewBox="0 0 45 5" preserveAspectRatio="none" fill="none">
                  <path d="M0 4 Q11 1 22 3 Q33 5 45 2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>. Nous reconditionnons,
              testons et garantissons chaque pièce pour vous offrir une alternative fiable et
              économique aux pièces neuves.
            </p>

            {/* Strengths */}
            <ul className="space-y-3 mb-8">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>

            {/* Stats row for mobile */}
            <div className="grid grid-cols-4 gap-3 mb-8 lg:hidden">
              {stats.map((s) => (
                <div key={s.label} className="text-center bg-white rounded-xl p-3 border border-gray-100">
                  <p className="text-xl font-black text-green-600">{s.value}</p>
                  <p className="text-[10px] text-gray-500 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href="mailto:info@www.auto-diesels.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-600/25 hover:shadow-green-600/40"
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
