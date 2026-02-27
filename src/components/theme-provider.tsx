import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

function ThemeClassSync() {
  const { theme } = useTheme();

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "cyberpunk") {
      root.classList.add("dark");
      return;
    }
    if (theme === "light") {
      root.classList.remove("dark");
    }
  }, [theme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeClassSync />
      {children}
    </NextThemesProvider>
  );
}
