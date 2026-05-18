"use client";

import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  products: ["Turbos", "Injecteurs", "Pompes à injection"],
  brands: ["Renault", "Peugeot", "Citroën", "Audi", "BMW"],
  help: ["Livraison", "Garantie", "FAQ", "Contact"],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-lg font-bold">AUTO</span>
              <span className="text-lg font-bold text-red-500">DIESELS</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              La marketplace du turbo depuis 2009.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="mailto:info@www.auto-diesels.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@www.auto-diesels.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Strasbourg, France
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produits</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.products.map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-semibold mb-4">Marques</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.brands.map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Aide</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.help.map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2026 Auto Diesels. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
