"use client";
import { motion } from "framer-motion";
import BlurText from "./ui/BlurText";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./Experience.module.css";
import { useLanguage } from "../context/LanguageContext";

const experiences = [
    {
        current: true,
        badge: { tr: "Devam Ediyor", en: "Ongoing" },
        date: { tr: "Aralık 2025 - Devam", en: "Dec 2025 - Present" },
        company: "Yapay Zeka ve Teknoloji Akademisi",
        role: { tr: "Stajyer", en: "Intern" },
        summary: {
            tr: "Yapay Zeka ve Teknoloji Akademisi'nde eğitim programlarına aktif katılım sağlıyor ve yapay zeka destekli uygulamaların geliştirilmesi üzerinde çalışıyorum. Uygulama odaklı projelerle teknik yetkinliklerimi geliştirmeye devam ediyorum.",
            en: "I actively participate in training programs at the Artificial Intelligence and Technology Academy and work on developing AI-powered applications. Through application-oriented projects, I continue to enhance my technical competencies.",
        },
        bullets: {
            tr: [
                "Yapay zeka destekli mobil ve yazılım projeleri üzerinde çalışıyorum.",
                "Çeşitli yapay zeka araçları ve servisleriyle uygulama geliştirme süreçlerine odaklanıyorum.",
                "Hackathon ve ideathon gibi teknoloji odaklı etkinliklere aktif katılım sağlıyorum.",
                "Takım çalışması ve proje geliştirme süreçlerinde aktif sorumluluk alıyorum.",
                "Güncel yapay zeka teknolojilerini takip ederek yenilikçi çözümler geliştiriyorum.",
            ],
            en: [
                "Working on AI-powered mobile and software projects.",
                "Focusing on application development processes using various AI tools and services.",
                "Actively participating in technology-focused events such as hackathons and ideathons.",
                "Taking active responsibility in teamwork and project development processes.",
                "Keeping up with the latest AI technologies and working on innovative solutions.",
            ],
        },
        tags: ["AI", "Machine Learning", "Google"],
    },
    {
        date: { tr: "Nisan 2025 - Ekim 2025 · 7 ay", en: "Apr 2025 - Oct 2025 · 7 months" },
        company: "BLUESENSE",
        role: { tr: "Stajyer", en: "Intern" },
        location: {
            tr: "Vancouver, British Columbia, Kanada · Uzaktan",
            en: "Vancouver, British Columbia, Canada · Remote",
        },
        summary: {
            tr: "Stajım boyunca yapay zeka tabanlı mobil uygulamaların geliştirilmesine katkı sağladım.",
            en: "During my internship, I contributed to the development of AI-based mobile applications.",
        },
        bullets: {
            tr: [
                "Smart Beauty: Skincare, Beauty uygulaması için özellikler geliştirdim.",
                "Uygulamanın performansını ve kullanıcı deneyimini iyileştirdim.",
                "Mobil geliştirme görevleri ve hata düzeltmelerinde destek sağladım.",
                "Uzaktan çalışan ekip ile etkili iş birliği yaptım.",
            ],
            en: [
                "Developed features for the Smart Beauty: Skincare, Beauty app.",
                "Improved the app's performance and user experience.",
                "Supported mobile development tasks and bug fixes.",
                "Collaborated effectively with a remote team.",
            ],
        },
        tags: ["Mobile Dev", "Performance", "Remote Team"],
    },
    {
        date: { tr: "Eylül 2024 - Ekim 2024 · 2 ay", en: "Sep 2024 - Oct 2024 · 2 months" },
        company: "E4E Elektronik Mühendislik Yazılım Tasarım A.Ş.",
        role: { tr: "Stajyer", en: "Intern" },
        summary: {
            tr: "E4E'deki stajımda dijital veri yönetimi ve masaüstü uygulama geliştirme süreçlerine odaklandım. Yapılandırılmış, verimli ve kullanıcı odaklı yazılım çözümleri geliştirerek katkı sundum.",
            en: "During my internship at E4E, I focused on digital data management and desktop application development. I contributed by developing structured, efficient, and user-oriented software solutions.",
        },
        bullets: {
            tr: [
                "Dijital verilerin düzenlenmesi, yönetimi ve optimizasyonu süreçlerinde çalıştım.",
                "Masaüstü uygulamaların geliştirilmesi ve iyileştirilmesine katkı sağladım.",
                "Kişisel dijital notları ve günlük kayıtları yönetmek için Digital Diary masaüstü uygulamasını tasarlayıp geliştirdim.",
                "Yapılandırılmış geliştirme ve test süreçlerinde ekip arkadaşlarımla iş birliği yaptım.",
            ],
            en: [
                "Worked on digital data organization, management, and optimization processes.",
                "Contributed to the development and enhancement of desktop applications.",
                "Designed and developed Digital Diary, a desktop application for managing personal digital notes and daily logs.",
                "Collaborated with team members throughout structured development and testing processes.",
            ],
        },
        tags: ["Desktop Apps", "Data Management", "Digital Diary"],
    },
];

export default function Experience() {
    const { language } = useLanguage();
    const sectionText = {
        tr: {
            tag: "Kariyer Yolculuğum",
            title: "Deneyim",
        },
        en: {
            tag: "My Career Journey",
            title: "Experience",
        },
    };

    const t = sectionText[language] || sectionText.tr;

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        className={styles.tag}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t.tag}
                    </motion.span>
                    <h2 className={styles.title}>
                        <BlurText text={t.title} delay={0.1} />
                    </h2>
                </div>

                {/* Desktop: vertical timeline */}
                <div className={styles.timeline}>
                    <div className={styles.timelineLine} />
                    {experiences.map((exp, i) => (
                        <ScrollReveal key={i} delay={i * 0.15} direction="left">
                            <motion.div
                                className={styles.timelineItem}
                                whileHover={{ x: 8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className={`${styles.marker} ${exp.current ? styles.markerCurrent : ""}`}>
                                    {exp.current && (
                                        <motion.div
                                            className={styles.markerPulse}
                                            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )}
                                </div>
                                <div className={styles.content}>
                                    {exp.badge && (
                                        <span className={styles.badge}>{exp.badge[language] || exp.badge.tr}</span>
                                    )}
                                    <span className={styles.date}>{exp.date[language] || exp.date.tr}</span>
                                    <h3>{exp.company}</h3>
                                    <h4>{exp.role[language] || exp.role.tr}</h4>
                                    {exp.location && <span className={styles.location}>{exp.location[language] || exp.location.tr}</span>}
                                    <p>{exp.summary[language] || exp.summary.tr}</p>
                                    <ul className={styles.detailsList}>
                                        {(exp.bullets[language] || exp.bullets.tr).map((item, bi) => (
                                            <li key={bi}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className={styles.tags}>
                                        {exp.tags.map((tag, ti) => (
                                            <span key={ti}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Mobile: horizontal swipeable cards */}
                <div className={styles.mobileScroll}>
                    {experiences.map((exp, i) => (
                        <div key={i} className={styles.mobileCard}>
                            {exp.badge && (
                                <span className={styles.badge}>{exp.badge[language] || exp.badge.tr}</span>
                            )}
                            <span className={styles.date}>{exp.date[language] || exp.date.tr}</span>
                            <h3>{exp.company}</h3>
                            <h4>{exp.role[language] || exp.role.tr}</h4>
                            {exp.location && <span className={styles.location}>{exp.location[language] || exp.location.tr}</span>}
                            <p>{exp.summary[language] || exp.summary.tr}</p>
                            <ul className={styles.detailsList}>
                                {(exp.bullets[language] || exp.bullets.tr).map((item, bi) => (
                                    <li key={bi}>{item}</li>
                                ))}
                            </ul>
                            <div className={styles.tags}>
                                {exp.tags.map((tag, ti) => (
                                    <span key={ti}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
