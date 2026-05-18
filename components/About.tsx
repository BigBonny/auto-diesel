"use client";

import { Wrench, Award, Users, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <Wrench className="w-4 h-4 text-red-500" />
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Qui sommes nous ?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Euro Système Injection
            </h2>

            <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-8">
              <p>
                Chez <strong className="text-white">Euro Système Injection</strong>, nous sommes spécialisés dans l&apos;entretien, 
                la réparation et le reconditionnement des systèmes d&apos;injection pour véhicules toutes marques.
              </p>
              <p>
                Notre mission est d&apos;offrir à nos clients des solutions fiables et durables, 
                en associant expertise technique, pièces de qualité et un savoir-faire reconnu.
              </p>
              <p>
                Grâce à une équipe de professionnels qualifiés et passionnés par la mécanique 
                de précision, nous accompagnons aussi bien les particuliers que les professionnels 
                dans l&apos;optimisation des performances de leurs moteurs.
              </p>
              <p className="text-white font-semibold">
                Notre engagement repose sur trois valeurs : qualité, transparence et rapidité de service.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Qualité</h4>
                  <p className="text-gray-500 text-sm">Pièces certifiées et testées selon les normes les plus strictes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Transparence</h4>
                  <p className="text-gray-500 text-sm">Prix clairs et détaillés, sans frais cachés</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Rapidité</h4>
                  <p className="text-gray-500 text-sm">Service rapide et expédition sous 24-48h</p>
                </div>
              </div>
            </div>

            <a
              href="mailto:info@www.auto-diesels.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-red-500/25"
            >
              <Mail className="w-5 h-5" />
              Nous contacter
            </a>
          </div>

          {/* Stats & Contact cards */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-red-600 rounded-2xl text-white">
                <Award className="w-10 h-10 mb-4" />
                <div className="text-4xl font-black mb-1">15+</div>
                <div className="text-red-200">Années d&apos;expérience</div>
              </div>
              <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                <Users className="w-10 h-10 text-red-500 mb-4" />
                <div className="text-4xl font-black text-white mb-1">30K+</div>
                <div className="text-gray-400">Clients satisfaits</div>
              </div>
              <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                <Wrench className="w-10 h-10 text-orange-500 mb-4" />
                <div className="text-4xl font-black text-white mb-1">50K+</div>
                <div className="text-gray-400">Produits vendus</div>
              </div>
              <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                <Clock className="w-10 h-10 text-green-500 mb-4" />
                <div className="text-4xl font-black text-white mb-1">24h</div>
                <div className="text-gray-400">Délai d&apos;expédition</div>
              </div>
            </div>

            {/* Contact card */}
            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
              <h3 className="text-white font-bold text-lg mb-4">Nous contacter</h3>
              <div className="space-y-3">
                <a href="mailto:info@www.auto-diesels.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <span>info@www.auto-diesels.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <span>Strasbourg, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
