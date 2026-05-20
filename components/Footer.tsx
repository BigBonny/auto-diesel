"use client";

import { Mail, MapPin, ArrowRight } from "lucide-react";

const links = {
  Produits: ["Turbos échange standard", "Injecteurs reconditionnés", "Pompes à injection", "Catalyseurs"],
  Marques: ["Renault", "Peugeot", "Citroën", "Audi", "BMW", "Volkswagen"],
  Aide: ["Livraison & retours", "Garantie 2 ans", "FAQ technique", "Contact"],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950 text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-1">Restez informé</h3>
              <p className="text-gray-400 text-sm">Recevez nos offres et conseils techniques par email.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 sm:w-72 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap">
                S'inscrire <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <img src="/logo.png" alt="Auto Diesels" className="h-20 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Spécialiste en injection diesel depuis 2009. Turbos, injecteurs et pompes reconditionnés.
            </p>
            <div className="space-y-2.5 text-sm text-gray-400">
              <a href="mailto:info@www.auto-diesels.com" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@www.auto-diesels.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Strasbourg, Alsace, France
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">© 2026 Auto Diesels — Euro Système Injection. Tous droits réservés.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
