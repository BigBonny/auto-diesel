"use client";

import { MapPin, Phone, Mail, Clock, CreditCard, Truck, Shield, Globe, Camera, Video, ChevronRight } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Turbos échange standard", href: "#" },
    { name: "Turbos neufs", href: "#" },
    { name: "Injecteurs", href: "#" },
    { name: "Pompes à injection", href: "#" },
    { name: "Turbo Porsche", href: "#" },
  ],
  brands: [
    { name: "Turbo Renault", href: "#" },
    { name: "Turbo Peugeot", href: "#" },
    { name: "Turbo Citroën", href: "#" },
    { name: "Turbo Audi", href: "#" },
    { name: "Turbo BMW", href: "#" },
    { name: "Turbo VW", href: "#" },
  ],
  company: [
    { name: "Qui sommes-nous", href: "#about" },
    { name: "Nos engagements", href: "#" },
    { name: "Actualités", href: "#news" },
    { name: "Nos partenaires", href: "#" },
    { name: "Recrutement", href: "#" },
  ],
  support: [
    { name: "Comment commander", href: "#" },
    { name: "Livraison & Retours", href: "#" },
    { name: "Garantie", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

const paymentIcons = [
  { name: "CB", color: "bg-blue-600" },
  { name: "Visa", color: "bg-indigo-600" },
  { name: "MC", color: "bg-orange-600" },
  { name: "PayPal", color: "bg-blue-500" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 border-t border-gray-800">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Restez informé</h3>
              <p className="text-gray-400">Inscrivez-vous pour recevoir nos offres exclusives et conseils mécaniques.</p>
            </div>
            <div className="flex gap-3 max-w-md w-full lg:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">AD</span>
              </div>
              <div>
                <span className="text-white font-black text-xl">AUTO</span>
                <span className="text-red-500 font-black text-xl"> DIESELS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Spécialiste en turbos et injecteurs pour véhicules toutes marques. 
              Qualité, fiabilité et performance pour votre moteur depuis 2009.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="mailto:info@www.auto-diesels.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-red-500" />
                <span>info@www.auto-diesels.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Strasbourg, France</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-red-500" />
                <span>Lun - Ven: 8h30 - 18h00</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg transition-all">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg transition-all">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Produits</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    {link.name}
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Marques</h4>
            <ul className="space-y-2">
              {footerLinks.brands.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    {link.name}
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                      {link.name}
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                      {link.name}
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Auto Diesels. Tous droits réservés.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">Paiement sécurisé:</span>
              <div className="flex items-center gap-2">
                {paymentIcons.map((method) => (
                  <div key={method.name} className={`px-2 py-1 ${method.color} text-white text-xs font-bold rounded`}>
                    {method.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
