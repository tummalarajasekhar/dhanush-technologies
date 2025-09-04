"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function useThemeState() {
  const [theme, setTheme] = useState<Theme>("light"); // always start light to match server
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // only runs on client
    const saved = localStorage.getItem("theme") as Theme | null;
    const preferred =
      saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(preferred);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme, mounted };
}
