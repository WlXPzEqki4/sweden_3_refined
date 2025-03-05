import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import FlagAnimation from "./FlagAnimation";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FlagAnimation />
            <h1 className="text-lg md:text-xl font-display font-medium animate-fade-in">UAE-Sweden Relations</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#political-diplomatic" className="text-sm hover:text-sweden transition-colors duration-200">Political Ties</a>
            <a href="#economic-trade" className="text-sm hover:text-sweden transition-colors duration-200">Economic Relations</a>
            <a href="#cooperation" className="text-sm hover:text-sweden transition-colors duration-200">Cooperation</a>
            <a href="#sweden-mb" className="text-sm hover:text-sweden transition-colors duration-200">Key Positions</a>
            <a href="#key-contacts" className="text-sm hover:text-sweden transition-colors duration-200">Contacts</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-4 pt-2 pb-6 bg-white/95 shadow-lg backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#political-diplomatic" 
                className="py-2 text-sm hover:text-sweden transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Political & Diplomatic Ties
              </a>
              <a 
                href="#economic-trade" 
                className="py-2 text-sm hover:text-sweden transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Economic & Trade Relations
              </a>
              <a 
                href="#cooperation" 
                className="py-2 text-sm hover:text-sweden transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Areas of Cooperation
              </a>
              <a 
                href="#tensions" 
                className="py-2 text-sm hover:text-sweden transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Points of Tension
              </a>
              <a 
                href="#sweden-mb" 
                className="py-2 text-sm hover:text-sweden transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sweden's Key Positions
              </a>
              <a 
                href="#key-contacts" 
                className="py-2 text-sm hover:text-sweden transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Key Swedish Contacts
              </a>
              <a 
                href="#unfriendly-entities" 
                className="py-2 text-sm hover:text-sweden transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Critical Entities
              </a>
              <a 
                href="#conclusion" 
                className="py-2 text-sm hover:text-sweden transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conclusion
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
