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
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="font-black text-lg">AUTO<span className="text-green-400">DIESELS</span></span>
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
