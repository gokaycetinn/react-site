"use client";

import { useEffect, useState } from "react";
import { List, Moon, Sun, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navigation } from "../data";
import { useApp } from "./AppProvider";

export default function Header() {
  const { language, setLanguage, theme, setTheme, t } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const menuItems = navigation[language];

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <motion.header
        className="site-header"
        initial={reduceMotion ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-shell liquid-surface">
          <a href="#home" className="brand" aria-label="Gökay Çetinakdoğan">
            <span className="brand-mark" aria-hidden="true">GÇ</span>
            <span className="brand-copy">
              <strong>Gökay</strong>
              <small>{t.brandRole}</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="language-switch" aria-label={t.language}>
              {[
                ["tr", "TR"],
                ["en", "EN"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={language === value ? "is-active" : ""}
                  onClick={() => setLanguage(value)}
                  aria-pressed={language === value}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={t.theme}
            >
              {theme === "dark" ? <Sun size={19} weight="bold" /> : <Moon size={19} weight="bold" />}
            </button>
            <button
              type="button"
              className="icon-button mobile-menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} weight="bold" /> : <List size={21} weight="bold" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
            <nav aria-label="Mobile navigation">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
