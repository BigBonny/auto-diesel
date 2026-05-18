"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Zap, Shield, Clock, Award, ChevronRight, Play } from "lucide-react";

const stats = [
  { value: "50K+", label: "Produits vendus", icon: Award },
  { value: "30K+", label: "Clients satisfaits", icon: Shield },
  { value: "15+", label: "Années d'expérience", icon: Clock },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gray-800/50 to-transparent rounded-full"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Zap className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Expert depuis 2009</span>
          </div>

          {/* Main heading */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Turbos & Injecteurs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient">
              de Confiance
            </span>
          </h1>

          {/* Description */}
          <p 
            className={`text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Boostez la puissance et la fiabilité de votre véhicule grâce à notre sélection 
            de turbos et injecteurs de qualité supérieure. 
            <span className="text-white font-semibold"> Pièces neuves, reconditionnées et réparées</span> dans nos ateliers.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a
              href="#products"
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Découvrir nos produits
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            
            <a
              href="tel:+33388522952"
              className="group flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-red-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800"
            >
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                <Play className="w-4 h-4 text-red-500 fill-current" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400">Conseil gratuit</p>
                <p className="text-sm">03 88 52 29 52</p>
              </div>
            </a>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="flex flex-col items-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <stat.icon className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
