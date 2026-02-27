import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import MouseGradient from "@/components/portfolio/MouseGradient";

const PortfolioLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <MouseGradient />
      </div>

      <div
        id="main-scroll"
        className={[
          "fixed inset-0 z-10 overflow-x-hidden bg-white/10 dark:bg-slate-950/25 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] dark:shadow-[inset_0_0_0_1px_rgba(148,163,184,0.2)]",
          isHome ? "overflow-y-hidden" : "overflow-y-auto",
        ].join(" ")}
        style={{
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
        }}
      >
        <div className="relative min-h-screen">
          <Navigation />
          <main key={location.pathname} className="animate-route-enter">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;
