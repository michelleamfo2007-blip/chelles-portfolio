import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";

export default function AppNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Work" },
    { path: "/skills", label: "Skills" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen ? "bg-pink-950 border-pink-800 shadow-lg py-3" : "bg-pink-950/40 border-pink-800/30 backdrop-blur-md py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="font-serif text-2xl tracking-tight">
              <span className="text-pink-light italic">Michelleeee</span>
              <span className="text-white">.</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors font-medium text-sm ${location.pathname === link.path ? 'text-pink-light' : 'text-white hover:text-pink-light'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-pink-light hover:bg-pink-light-hover text-pink-950 px-5 py-2.5 rounded-md font-bold text-sm transition-colors"
            >
              Contact Me
            </Link>
          </nav>

          {/* Mobile Menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-pink-light transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-pink-950 border-t border-pink-800 p-4 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors font-medium text-left py-2 border-b border-pink-800 ${location.pathname === link.path ? 'text-pink-light' : 'text-white hover:text-pink-light'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-pink-light hover:bg-pink-light-hover text-pink-950 px-5 py-3 rounded-md font-bold text-center transition-colors w-full mt-2 inline-block"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
