"use client";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Aurora from "./ui/Aurora";
import SplitText from "./ui/SplitText";
import TextShimmer from "./ui/TextShimmer";
import Magnet from "./ui/Magnet";
import styles from "./Hero.module.css";
import { useLanguage } from "../context/LanguageContext";

// Pre-computed deterministic particle positions to avoid hydration mismatch
const particles = [
    { x: 120, y: 80, dy: -150, op: 0.3, dur: 10, del: 0 },
    { x: 340, y: 200, dy: -180, op: 0.4, dur: 12, del: 1 },
    { x: 560, y: 350, dy: -120, op: 0.25, dur: 8, del: 2 },
    { x: 780, y: 150, dy: -200, op: 0.35, dur: 14, del: 0.5 },
    { x: 950, y: 400, dy: -160, op: 0.45, dur: 9, del: 3 },
    { x: 200, y: 500, dy: -140, op: 0.3, dur: 11, del: 1.5 },
    { x: 1100, y: 300, dy: -190, op: 0.5, dur: 13, del: 4 },
    { x: 450, y: 600, dy: -130, op: 0.2, dur: 7, del: 2.5 },
    { x: 670, y: 100, dy: -170, op: 0.4, dur: 10, del: 0.8 },
    { x: 890, y: 550, dy: -110, op: 0.35, dur: 12, del: 3.5 },
    { x: 50, y: 250, dy: -200, op: 0.3, dur: 9, del: 1.2 },
    { x: 1050, y: 450, dy: -150, op: 0.45, dur: 11, del: 4.5 },
    { x: 300, y: 700, dy: -180, op: 0.25, dur: 8, del: 0.3 },
    { x: 730, y: 650, dy: -140, op: 0.4, dur: 14, del: 2.8 },
    { x: 160, y: 380, dy: -160, op: 0.3, dur: 10, del: 1.8 },
    { x: 1000, y: 200, dy: -120, op: 0.5, dur: 13, del: 3.2 },
    { x: 500, y: 480, dy: -190, op: 0.35, dur: 7, del: 4.2 },
    { x: 820, y: 50, dy: -170, op: 0.2, dur: 12, del: 0.6 },
    { x: 380, y: 320, dy: -130, op: 0.45, dur: 9, del: 2.2 },
    { x: 640, y: 550, dy: -200, op: 0.3, dur: 11, del: 3.8 },
];

export default function Hero() {
    const { language } = useLanguage();
    const localizedTitles = useMemo(
        () => (language === "en"
            ? ["Computer Engineer", "AI Solutions Developer"]
            : ["Bilgisayar Mühendisi", "AI Solutions Developer"]),
        [language]
    );
    const text = language === "en"
        ? {
            greeting: "Hello, I'm",
            role: "Software Developer |",
            description: "As a 4th year Computer Engineering student, I develop projects in mobile application development, artificial intelligence, and automation.",
            projects: "View My Projects",
            contact: "Contact Me",
        }
        : {
            greeting: "Merhaba, Ben",
            role: "Yazılım Geliştirici |",
            description: "Bilgisayar Mühendisliği 4. sınıf öğrencisi olarak mobil uygulama geliştirme, yapay zeka ve otomasyon alanlarında projeler geliştiriyorum.",
            projects: "Projelerimi Gör",
            contact: "İletişime Geç",
        };

    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setTitleIndex(0);
        setDisplayText("");
        setIsDeleting(false);
    }, [language]);

    useEffect(() => {
        const currentTitle = localizedTitles[titleIndex];
        let timeout;

        if (!isDeleting && displayText === currentTitle) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % localizedTitles.length);
        } else if (isDeleting) {
            timeout = setTimeout(
                () => setDisplayText(currentTitle.substring(0, displayText.length - 1)),
                50
            );
        } else {
            timeout = setTimeout(
                () => setDisplayText(currentTitle.substring(0, displayText.length + 1)),
                100
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex, localizedTitles]);

    return (
        <section id="home" className={styles.hero}>
            <Aurora
                colorStops={["#3b82f6", "#06b6d4", "#8b5cf6", "#1d4ed8"]}
                speed={0.4}
            />

            {/* Floating particles */}
            <div className={styles.particles}>
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className={styles.particle}
                        initial={{ x: p.x, y: p.y, opacity: 0 }}
                        animate={{
                            y: [p.y, p.y + p.dy],
                            opacity: [0, p.op, 0],
                        }}
                        transition={{
                            duration: p.dur,
                            repeat: Infinity,
                            delay: p.del,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className={styles.content}>
                <div className={styles.textSection}>
                    <motion.p
                        className={styles.greeting}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {text.greeting}
                    </motion.p>

                    <h1 className={styles.name}>
                        <SplitText
                            text="Gökay"
                            className={styles.nameLine}
                            delay={0.4}
                            duration={0.05}
                        />
                        <br />
                        <SplitText
                            text="Çetinakdoğan"
                            className={styles.nameGradient}
                            delay={0.8}
                            duration={0.04}
                        />
                    </h1>

                    <motion.div
                        className={styles.titleWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <span className={styles.titleStatic}>{text.role}</span>
                        <TextShimmer className={styles.titleDynamic} speed={4}>
                            {displayText}
                        </TextShimmer>
                        <motion.span
                            className={styles.cursor}
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        >
                            |
                        </motion.span>
                    </motion.div>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        {text.description}
                    </motion.p>

                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        <Magnet strength={0.2}>
                            <a href="#projects" className={styles.btnPrimary} onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                            }}>
                                <span>{text.projects}</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </Magnet>
                        <Magnet strength={0.2}>
                            <a href="#contact" className={styles.btnSecondary} onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                            }}>
                                <span>{text.contact}</span>
                            </a>
                        </Magnet>
                    </motion.div>

                    <motion.div
                        className={styles.social}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    >
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
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <motion.div
                    className={styles.scrollDot}
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
}
