"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Turbos", href: "#products" },
  { name: "Injecteurs", href: "#products" },
  { name: "Nos Marques", href: "#brands" },
  { name: "Actualités", href: "#news" },
  { name: "Contact", href: "#footer" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">AUTO</span>
            <span className="text-xl font-bold text-green-600">DIESELS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
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
