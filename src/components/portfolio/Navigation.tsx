import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocation, useNavigate } from "react-router-dom";

type ThemeName = "light" | "dark" | "cyberpunk";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const themeOrder: ThemeName[] = ["light", "dark", "cyberpunk"];

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" },
  ];

  const currentTheme: ThemeName =
    theme === "dark" || theme === "cyberpunk" || theme === "light" ? theme : "light";
  const themeIndex = themeOrder.indexOf(currentTheme);
  const nextTheme = themeOrder[(themeIndex + 1) % themeOrder.length];

  const cycleTheme = () => {
    setTheme(nextTheme);
  };

  const themeLabel =
    currentTheme === "cyberpunk"
      ? "Cyberpunk"
      : currentTheme === "dark"
        ? "Dark"
        : "Light";

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll");
    const handleScroll = () => {
      const scrollTop = scrollContainer?.scrollTop ?? window.scrollY;
      setScrolled(scrollTop > 20);
    };

    scrollContainer?.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white/95 backdrop-blur-md border-b border-slate-200/80 dark:bg-slate-900/90 dark:border-slate-700/80",
        scrolled && "shadow-sm dark:shadow-none"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-lg text-[#1d1d1f] dark:text-slate-100 tracking-tight">
            Harsha Gupta
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => goTo(item.path)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative py-1",
                  location.pathname === item.path
                    ? "text-[#1d1d1f] dark:text-slate-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1d1d1f] dark:after:bg-slate-100 after:rounded-full"
                    : "text-[#86868b] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-200"
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={cycleTheme}
              className="theme-switch-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-[#1d1d1f] dark:text-slate-100 border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              aria-label={`Switch to ${nextTheme} mode`}
            >
              {mounted && currentTheme === "light" && <Sun className="h-4 w-4" />}
              {mounted && currentTheme === "dark" && <Moon className="h-4 w-4" />}
              {mounted && currentTheme === "cyberpunk" && <Sparkles className="h-4 w-4" />}
              {mounted ? `Theme: ${themeLabel}` : "Theme"}
            </button>
          </div>

          {/* Mobile nav - hamburger menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6 text-[#1d1d1f] dark:text-slate-100" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <nav className="flex flex-col gap-1 pt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => goTo(item.path)}
                      className={cn(
                        "text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        location.pathname === item.path
                          ? "bg-slate-100 dark:bg-slate-800 text-[#1d1d1f] dark:text-slate-100"
                          : "text-[#6e6e73] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#1d1d1f] dark:hover:text-slate-100"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    onClick={cycleTheme}
                    className="theme-switch-btn px-4 py-3 rounded-lg text-base font-medium text-left text-[#1d1d1f] dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                    aria-label={`Switch to ${nextTheme} mode`}
                  >
                    {mounted && currentTheme === "light" && <Sun className="h-4 w-4" />}
                    {mounted && currentTheme === "dark" && <Moon className="h-4 w-4" />}
                    {mounted && currentTheme === "cyberpunk" && <Sparkles className="h-4 w-4" />}
                    {mounted ? `Theme: ${themeLabel} (Next: ${nextTheme})` : "Theme"}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


