"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Turbos", href: "#products", hasDropdown: true, items: ["Turbo Renault", "Turbo Peugeot", "Turbo Citroën", "Turbo Audi", "Turbo BMW", "Turbo Volkswagen"] },
  { name: "Injecteurs", href: "#products", hasDropdown: true, items: ["Injecteur Renault", "Injecteur Peugeot", "Injecteur Ford", "Injecteur Toyota"] },
  { name: "Nos Marques", href: "#brands" },
  { name: "Actualités", href: "#news" },
  { name: "Contact", href: "#footer" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent"
    )}>
      {/* Top bar */}
      <div className={cn("transition-all duration-500 overflow-hidden", isScrolled ? "max-h-0" : "max-h-12")}>
        <div className="bg-gray-900 text-gray-400 text-xs py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span>🚚 Livraison gratuite dès 200€ · Expédition 24-48h · Garantie 2 ans</span>
            <a href="mailto:info@www.auto-diesels.com" className="hover:text-green-400 transition-colors">info@www.auto-diesels.com</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="leading-tight">
              <span className={cn("font-black text-lg tracking-tight transition-colors", isScrolled ? "text-gray-900" : "text-white")}>AUTO</span>
              <span className="font-black text-lg tracking-tight text-green-500">DIESELS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={link.href} className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  isScrolled ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100" : "text-white/90 hover:text-white hover:bg-white/10"
                )}>
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </a>
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1">
                    {link.items?.map((item) => (
                      <a key={item} href="#products" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button className={cn("hidden sm:flex p-2 rounded-lg transition-colors", isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white/80 hover:bg-white/10")}>
              <Search className="w-5 h-5" />
            </button>
            <button className={cn("hidden sm:flex p-2 rounded-lg transition-colors", isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white/80 hover:bg-white/10")}>
              <User className="w-5 h-5" />
            </button>
            <button className={cn("relative p-2 rounded-lg transition-colors", isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white/80 hover:bg-white/10")}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="lg:hidden p-2 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen
                ? <X className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
                : <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300", isMenuOpen ? "max-h-screen" : "max-h-0")}>
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg font-medium transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
