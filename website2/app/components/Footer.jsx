"use client";
import { motion } from "framer-motion";
import Magnet from "./ui/Magnet";
import styles from "./Footer.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { language } = useLanguage();
    const t = language === "en"
        ? {
            links: [
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
            ],
            rights: "All rights reserved.",
        }
        : {
            links: [
                { label: "Ana Sayfa", href: "#home" },
                { label: "Hakkımda", href: "#about" },
                { label: "Projeler", href: "#projects" },
                { label: "İletişim", href: "#contact" },
            ],
            rights: "Tüm hakları saklıdır.",
        };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>


                    <div className={styles.links}>
                        {t.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className={styles.social}>
                        {[
                            { href: "https://github.com/gokaycetinn", icon: "fab fa-github" },
                            { href: "https://www.linkedin.com/in/gokay-cetinakdogan/", icon: "fab fa-linkedin-in" },
                            { href: "mailto:gokaycetin44@gmail.com", icon: "fas fa-envelope" },
                        ].map((s, i) => (
                            <Magnet key={i} strength={0.3}>
                                <a
                                    href={s.href}
                                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    <i className={s.icon}></i>
                                </a>
                            </Magnet>
                        ))}
                    </div>
                </div>

                <motion.div
                    className={styles.bottom}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p>&copy; 2026 Gökay Çetinakdoğan. {t.rights}</p>
                </motion.div>
            </div>
        </footer>
    );
}
