"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext({
  language: "tr",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

const localizedMeta = {
  tr: {
    title: "Gökay Çetinakdoğan | Yazılım Geliştirici",
    description:
      "Bilgisayar Mühendisliği öğrencisi, mobil uygulama geliştirme, yapay zeka ve otomasyon alanlarında projeler geliştiren yazılım geliştirici.",
    keywords:
      "Gökay Çetinakdoğan, Yazılım Geliştirici, React Native, Mobile Developer, AI, Machine Learning, Portfolio",
  },
  en: {
    title: "Gökay Çetinakdoğan | Software Developer",
    description:
      "Computer Engineering student and software developer building projects in mobile app development, artificial intelligence, and automation.",
    keywords:
      "Gokay C, Software Developer, React Native, Mobile Developer, AI, Machine Learning, Portfolio",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("tr");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("language");
    if (savedLanguage === "tr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("language", language);
    document.documentElement.lang = language;

    const meta = localizedMeta[language] || localizedMeta.tr;
    document.title = meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", meta.description);
    }

    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute("content", meta.keywords);
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "tr" ? "en" : "tr")),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
