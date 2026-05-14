import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-accent selection:text-black min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};
