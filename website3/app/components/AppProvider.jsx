"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { copy } from "../data";

const AppContext = createContext(null);

const metaCopy = {
  tr: {
    title: "Gökay Çetinakdoğan | Yazılım Geliştirici",
    description:
      "Mobil ürünler, yapay zeka çözümleri ve otomasyon sistemleri geliştiren Bilgisayar Mühendisliği mezunu yazılım geliştirici.",
  },
  en: {
    title: "Gökay Çetinakdoğan | Software Developer",
    description:
      "A Computer Engineering graduate building mobile products, artificial intelligence solutions, and automation systems.",
  },
};

export function AppProvider({ children }) {
  const [language, setLanguage] = useState("tr");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialLanguage = savedLanguage === "tr" || savedLanguage === "en" ? savedLanguage : "tr";
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
    let active = true;

    queueMicrotask(() => {
      if (!active) return;
      setLanguage(initialLanguage);
      setTheme(initialTheme);
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    document.title = metaCopy[language].title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", metaCopy[language].description);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      t: copy[language],
    }),
    [language, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }
  return context;
}
