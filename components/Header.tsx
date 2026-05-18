"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User, ChevronDown, Truck, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "#" },
  { name: "Turbos", href: "#products", hasDropdown: true },
  { name: "Injecteurs", href: "#products", hasDropdown: true },
  { name: "Nos Marques", href: "#brands" },
  { name: "Actualités", href: "#news" },
  { name: "Contact", href: "#footer" },
];

const turboBrands = ["Renault", "Peugeot", "Citroën", "Audi", "BMW", "VW", "Toyota", "Porsche"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
          <span className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            Livraison gratuite dès 200€
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Garantie 2 ans sur tous les produits
          </span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Expédition 24-48h
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className={cn(
        "transition-all duration-300 border-b",
        isScrolled 
          ? "bg-gray-900/95 backdrop-blur-md border-gray-800 py-2 shadow-2xl" 
          : "bg-gray-900 border-gray-800 py-3"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-black text-2xl tracking-tight">AUTO</span>
                <span className="text-red-500 font-black text-2xl tracking-tight"> DIESELS</span>
                <p className="text-gray-400 text-xs tracking-wider">Turbos & Injecteurs</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 text-sm font-medium"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {/* Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden animate-in fade-in slide-in-from-top-2">
                      {turboBrands.map((brand) => (
                        <a
                          key={brand}
                          href="#products"
                          className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-red-600 transition-colors text-sm"
                        >
                          Turbo {brand}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button className="hidden sm:flex p-2.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                <Search className="w-5 h-5" />
              </button>

              {/* Account */}
              <button className="hidden md:flex p-2.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                <User className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button className="relative p-2.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  0
                </span>
              </button>

              {/* Mobile menu */}
              <button
                className="lg:hidden p-2.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden bg-gray-900 border-b border-gray-800 overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
