import AppNavigation from "./AppNavigation";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-pink-950 bg-off-white">
      <AppNavigation />
      <main className="flex-grow w-full pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
