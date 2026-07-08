import React from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-950 text-pink-100 py-12 border-t border-pink-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link 
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 cursor-pointer mb-3"
            >
              <div className="font-serif text-2xl tracking-tight">
                <span className="text-pink-light italic">Michelleeee</span>
                <span className="text-white">.</span>
              </div>
            </Link>
            <p className="text-sm text-pink-300">
              Crafting Digital Experiences &middot; Software Engineering
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-7 flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <Link to="/" className="text-sm font-medium hover:text-pink-light transition-colors">Home</Link>
            <Link to="/work" className="text-sm font-medium hover:text-pink-light transition-colors">Work</Link>
            <Link to="/skills" className="text-sm font-medium hover:text-pink-light transition-colors">Skills</Link>
            <Link to="/about" className="text-sm font-medium hover:text-pink-light transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-pink-light transition-colors">Contact</Link>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-pink-900/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white">
          <p>&copy; {currentYear} Michelle's Portfolio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-light transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-light transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
