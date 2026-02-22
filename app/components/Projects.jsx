"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import BlurText from "./ui/BlurText";
import SpotlightCard from "./ui/SpotlightCard";
import ScrollReveal from "./ui/ScrollReveal";
import Magnet from "./ui/Magnet";
import styles from "./Projects.module.css";
import { useLanguage } from "../context/LanguageContext";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projects = [
    {
        title: { tr: "AI Chef - Akıllı Tarifler", en: "AI Chef - Smart Recipes" },
        description: {
            tr: "Yapay zeka destekli, kişiselleştirilmiş tarif önerileri sunan mobil uygulama. App Store'da yayınlanmış ilk ticari projem.",
            en: "An AI-powered mobile app that provides personalized recipe suggestions. My first commercial project published on the App Store.",
        },
        tech: ["React Native", "AI", "iOS"],
        links: [
            { label: { tr: "App Store", en: "App Store" }, href: "https://apps.apple.com/tr/app/ai-chef-ak%C4%B1ll%C4%B1-tarifler/id6754893777?l=tr", icon: "fab fa-app-store" },
            { label: { tr: "Web Sitesi", en: "Website" }, href: "https://gokaycetinn.github.io/ai-chef-website/", icon: "fas fa-globe" },
        ],
        video: `${basePath}/images/ai-chef.mp4`,
    },
    {
        title: { tr: "CNN Based Traffic Analysis", en: "CNN Based Traffic Analysis" },
        description: {
            tr: "UA-DETRAC veri seti üzerinde YOLOv8 modeli eğitilerek geliştirilen otonom bir trafik analiz sistemi.",
            en: "An autonomous traffic analysis system developed by training a YOLOv8 model on the UA-DETRAC dataset.",
        },
        tech: ["Python", "ML", "Data Analysis"],
        links: [
            { label: { tr: "GitHub", en: "GitHub" }, href: "https://github.com/gokaycetinn/CNN-Based-Traffic-Analysis", icon: "fab fa-github" },
            { label: { tr: "Canlı Demo", en: "Live Demo" }, href: "https://vehicle-detect.streamlit.app", icon: "fas fa-external-link-alt" },
        ],
        image: `${basePath}/images/cnn-based.png`,
    },
    {
        title: { tr: "Digital Diary", en: "Digital Diary" },
        description: {
            tr: "Dijital günlük uygulaması. Kullanıcıların günlük notlarını ve düşüncelerini kaydetmelerini sağlayan modern bir uygulama.",
            en: "A digital diary app. A modern application that allows users to save daily notes and thoughts.",
        },
        tech: ["Python", "Database"],
        links: [
            { label: { tr: "GitHub", en: "GitHub" }, href: "https://github.com/gokaycetinn/Digital-Diary", icon: "fab fa-github" },
        ],
        icon: "fas fa-book",
    },
    {
        title: { tr: "Data Mining Project", en: "Data Mining Project" },
        description: {
            tr: "Veri madenciliği teknikleri kullanılarak geliştirilen analiz projesi. Büyük veri setlerinden anlamlı içgörüler çıkarma.",
            en: "An analysis project built with data mining techniques to extract meaningful insights from large datasets.",
        },
        tech: ["Python", "ML", "Data Analysis"],
        links: [
            { label: { tr: "GitHub", en: "GitHub" }, href: "https://github.com/gokaycetinn/Data-Mining-Project", icon: "fab fa-github" },
        ],
        icon: "fas fa-chart-bar",
    },
    {
        title: { tr: "Classroom Reservation", en: "Classroom Reservation" },
        description: {
            tr: "Derslik rezervasyon sistemi. Üniversiteler için geliştirilmiş, sınıf ve laboratuvar rezervasyonu yapılabilen web uygulaması.",
            en: "A classroom reservation system. A web application developed for universities to reserve classrooms and laboratories.",
        },
        tech: ["Web App", "Database"],
        links: [
            { label: { tr: "GitHub", en: "GitHub" }, href: "https://github.com/gokaycetinn/Classroom-Reservation", icon: "fab fa-github" },
        ],
        icon: "fas fa-calendar-check",
    },
    {
        title: { tr: "Product Recommendation System", en: "Product Recommendation System" },
        description: {
            tr: "Makine öğrenmesi tabanlı ürün öneri sistemi. Kullanıcı davranışlarını analiz ederek kişiselleştirilmiş öneriler sunar.",
            en: "A machine learning based recommendation engine that analyzes user behavior and provides personalized suggestions.",
        },
        tech: ["Python", "ML", "Recommendation"],
        links: [
            { label: { tr: "GitHub", en: "GitHub" }, href: "https://github.com/gokaycetinn/Product-Recommendation-System", icon: "fab fa-github" },
        ],
        icon: "fas fa-lightbulb",
    },
];

export default function Projects() {
    const scrollRef = useRef(null);
    const { language } = useLanguage();
    const t = language === "en"
        ? { title: "Featured Projects", all: "View All Projects" }
        : { title: "Öne Çıkan Projeler", all: "Tüm Projeleri Gör" };

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <BlurText text={t.title} delay={0.1} />
                    </h2>
                </div>

                <div
                    className={styles.scrollContainer}
                    ref={scrollRef}
                >
                    {projects.map((project, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} className={styles.cardWrapper}>
                            <SpotlightCard
                                className={styles.card}
                                spotlightColor="rgba(59, 130, 246, 0.15)"
                            >
                                <div className={styles.cardInner}>
                                    <div className={`${styles.cardImage} ${project.video ? styles.cardImageVideo : ''}`}>
                                        {project.video ? (
                                            <video
                                                src={project.video}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className={styles.cardVideo}
                                            />
                                        ) : project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title[language] || project.title.tr}
                                                className={styles.cardImg}
                                            />
                                        ) : (
                                            <div className={styles.cardPlaceholder}>
                                                <i className={project.icon || "fas fa-code"}></i>
                                            </div>
                                        )}
                                        <div className={styles.cardOverlay}>
                                            {project.links.map((link, li) => (
                                                <a
                                                    key={li}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.cardLink}
                                                >
                                                    <i className={link.icon}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>{project.title[language] || project.title.tr}</h3>
                                        <p>{project.description[language] || project.description.tr}</p>
                                        <div className={styles.cardTech}>
                                            {project.tech.map((t, ti) => (
                                                <span key={ti}>{t}</span>
                                            ))}
                                        </div>
                                        <div className={styles.cardLinks}>
                                            {project.links.map((link, li) => (
                                                <a
                                                    key={li}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.cardBtn}
                                                >
                                                    <span>{link.label[language] || link.label.tr}</span>
                                                    <i className={link.icon}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Magnet strength={0.15}>
                        <a
                            href="https://github.com/gokaycetinn?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaBtn}
                        >
                            <span>{t.all}</span>
                            <i className="fab fa-github"></i>
                        </a>
                    </Magnet>
                </motion.div>
            </div>
        </section>
    );
}
