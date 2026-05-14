import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { Zap } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 text-lg font-bold tracking-tighter text-white select-none cursor-default"
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-black shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <span>DevWithMercedes<span className="text-accent">.</span></span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path}
              className={({ isActive }) => cn(
                "transition-colors hover:text-white",
                isActive ? "text-white font-bold" : "text-white/60"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/contact"
            className="bg-white text-black px-6 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors"
          >
            Say Hello
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};
