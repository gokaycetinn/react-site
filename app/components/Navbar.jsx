"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { useLanguage } from "../context/LanguageContext";

const navItems = {
    tr: [
        { label: "Ana Sayfa", href: "#home" },
        { label: "Hakkımda", href: "#about" },
        { label: "Projeler", href: "#projects" },
        { label: "Deneyim", href: "#experience" },
        { label: "İletişim", href: "#contact" },
    ],
    en: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ],
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { language, setLanguage } = useLanguage();

    const menuItems = navItems[language] || navItems.tr;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll("section");
            let current = "home";
            sections.forEach((section) => {
                if (window.pageYOffset >= section.offsetTop - 150) {
                    current = section.getAttribute("id") || current;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setMobileOpen(false);
    };

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className={styles.container}>
                <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, "#home")}></a>

                <div className={styles.rightControls}>
                    <ul className={styles.navMenu}>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`${styles.navLink} ${activeSection === item.href.slice(1) ? styles.active : ""}`}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.label}
                                    {activeSection === item.href.slice(1) && (
                                        <motion.span
                                            className={styles.activeIndicator}
                                            layoutId="activeNav"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.langSwitch}>
                        <button
                            type="button"
                            className={`${styles.langBtn} ${language === "tr" ? styles.langBtnActive : ""}`}
                            onClick={() => setLanguage("tr")}
                            aria-label="Switch language to Turkish"
                        >
                            TR
                        </button>
                        <button
                            type="button"
                            className={`${styles.langBtn} ${language === "en" ? styles.langBtnActive : ""}`}
                            onClick={() => setLanguage("en")}
                            aria-label="Switch language to English"
                        >
                            EN
                        </button>
                    </div>
                </div>

                <button
                    className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerActive : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={language === "tr" ? "Menü" : "Menu"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {menuItems.map((item, i) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                className={styles.mobileLink}
                                onClick={(e) => handleNavClick(e, item.href)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
