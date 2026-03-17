"use client";
import { useRef, useState } from "react";
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
        title: { tr: "Wellness AI", en: "Wellness AI" },
        description: {
            tr: "Firebase AI ve Remote Config aracılığıyla dinamik kişilik profilleri oluşturan, Hive ile yerel sohbet kalıcılığını sağlayan ve Cubit durum yönetimini kullanan, Flutter tabanlı bir yapay zeka koçluk uygulaması.",
            en: "A Flutter-based AI coaching app featuring dynamic personas via Firebase AI & Remote Config, local chat persistence with Hive, and Cubit state management.",
        },
        tech: ["Flutter", "Firebase", "AI"],
        links: [
            { label: { tr: "GitHub", en: "GitHub" }, href: "https://github.com/gokaycetinn/WellnessAi", icon: "fab fa-github" },
        ],
        images: [
            `${basePath}/images/Wellness.png`,
            `${basePath}/images/Dietitian.png`,
            `${basePath}/images/Fitness.png`,
            `${basePath}/images/Yoga.png`,
            `${basePath}/images/Pilates.png`,
            `${basePath}/images/ChatHistory.png`,
        ],
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
        image: `${basePath}/images/web-interface.png`,
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
];

export default function Projects() {
    const scrollRef = useRef(null);
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const { language } = useLanguage();
    const t = language === "en"
        ? {
            title: "Featured Projects",
            all: "View All Projects",
            openGallery: "Open Gallery",
            closePreview: "Close preview",
        }
        : {
            title: "Öne Çıkan Projeler",
            all: "Tüm Projeleri Gör",
            openGallery: "Galeriyi Aç",
            closePreview: "Onizlemeyi Kapat",
        };

    const openGallery = (projectIndex) => {
        setActiveGalleryIndex(projectIndex);
        setActiveImageIndex(0);
    };

    const closeGallery = () => {
        setActiveGalleryIndex(null);
        setActiveImageIndex(0);
    };

    const showPrevImage = () => {
        if (activeGalleryIndex === null) return;
        const total = projects[activeGalleryIndex].images.length;
        setActiveImageIndex((prev) => (prev - 1 + total) % total);
    };

    const showNextImage = () => {
        if (activeGalleryIndex === null) return;
        const total = projects[activeGalleryIndex].images.length;
        setActiveImageIndex((prev) => (prev + 1) % total);
    };

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
                                        ) : project.images?.length ? (
                                            <div className={styles.cardImageGallery}>
                                                {project.images.map((imgSrc, imgIndex) => (
                                                    <img
                                                        key={imgIndex}
                                                        src={imgSrc}
                                                        alt={`${project.title[language] || project.title.tr} ${imgIndex + 1}`}
                                                        className={styles.cardImg}
                                                    />
                                                ))}
                                            </div>
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
                                        {project.images?.length ? (
                                            <button
                                                type="button"
                                                className={styles.detailToggle}
                                                onClick={() => openGallery(i)}
                                            >
                                                <span>{t.openGallery}</span>
                                                <i className="fas fa-expand"></i>
                                            </button>
                                        ) : null}
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
            {activeGalleryIndex !== null ? (
                <div className={styles.imageModalOverlay} onClick={closeGallery}>
                    <div className={styles.imageModal} onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className={styles.imageModalClose}
                            onClick={closeGallery}
                            aria-label={t.closePreview}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <button
                            type="button"
                            className={`${styles.imageModalNav} ${styles.imageModalPrev}`}
                            onClick={showPrevImage}
                            aria-label="Previous image"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <img
                            src={projects[activeGalleryIndex].images[activeImageIndex]}
                            alt={`${projects[activeGalleryIndex].title[language] || projects[activeGalleryIndex].title.tr} preview ${activeImageIndex + 1}`}
                            className={styles.imageModalImg}
                        />
                        <div className={styles.imageModalDots}>
                            {projects[activeGalleryIndex].images.map((_, imgIndex) => (
                                <button
                                    key={imgIndex}
                                    type="button"
                                    className={`${styles.imageModalDot} ${activeImageIndex === imgIndex ? styles.imageModalDotActive : ""}`}
                                    onClick={() => setActiveImageIndex(imgIndex)}
                                    aria-label={`Go to image ${imgIndex + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            className={`${styles.imageModalNav} ${styles.imageModalNext}`}
                            onClick={showNextImage}
                            aria-label="Next image"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
