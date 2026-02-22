"use client";
import { motion } from "framer-motion";
import BlurText from "./ui/BlurText";
import CountUp from "./ui/CountUp";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./About.module.css";
import { useLanguage } from "../context/LanguageContext";

const skillTracks = [
    ["Python", "React Native", "TensorFlow", "JavaScript", "Node.js", "PyTorch", "Docker", "Git"],
    ["MongoDB", "AWS", "TypeScript", "Linux", "iOS", "Firebase", "HTML5", "CSS3"],
    ["OpenAI", "Android", "Scikit-learn", "Figma", "REST API", ".NET", "CV", "NLP"],
    ["Expo", "PostgreSQL", "Bash", "Jira", "C/C++", "C#", "SQL", "Postman"],
    ["SASS", "Automation", "ML", "Cloud", "React", "AI", "JS", "Python"],
];

const skillIcons = {
    Python: "fab fa-python", "React Native": "fab fa-react", TensorFlow: "fas fa-brain",
    JavaScript: "fab fa-js", "Node.js": "fab fa-node-js", PyTorch: "fas fa-fire-alt",
    Docker: "fab fa-docker", Git: "fab fa-git-alt", MongoDB: "fas fa-database",
    AWS: "fab fa-aws", TypeScript: "fas fa-code", Linux: "fab fa-linux",
    iOS: "fab fa-apple", Firebase: "fas fa-fire", HTML5: "fab fa-html5",
    CSS3: "fab fa-css3-alt", OpenAI: "fas fa-robot", Android: "fab fa-android",
    "Scikit-learn": "fas fa-chart-line", Figma: "fab fa-figma", "REST API": "fas fa-server",
    ".NET": "fab fa-microsoft", CV: "fas fa-eye", NLP: "fas fa-language",
    Expo: "fas fa-mobile-alt", PostgreSQL: "fas fa-database", Bash: "fas fa-terminal",
    Jira: "fas fa-cube", "C/C++": "fas fa-code", "C#": "fab fa-microsoft",
    SQL: "fas fa-database", Postman: "fas fa-envelope", SASS: "fab fa-sass",
    Automation: "fas fa-cogs", ML: "fas fa-project-diagram", Cloud: "fas fa-cloud",
    React: "fab fa-react", AI: "fas fa-brain", JS: "fab fa-js",
};

export default function About() {
    const { language } = useLanguage();
    const t = language === "en"
        ? {
            tag: "About Me",
            title: "Who Am I?",
            introPrefix: "I am a 4th year Computer Engineering student at Çankaya University. I work in",
            highlight1: "mobile application development",
            highlight2: "AI model training",
            highlight3: "automation systems",
            highlight4: "web development",
            p2: "I develop cross-platform mobile applications with React Native, train AI models with Python, and build solutions that automate business processes. I also actively work on full-stack web development projects.",
            p3: "I am collaborative, have strong communication skills, and focus on problem-solving. I closely follow new technologies and apply what I learn to real-world projects. With my passion for problem-solving and continuous learning, I aim for the best outcome in every project.",
            projects: "Projects",
            education: "Education",
            major: "Computer Engineering",
            location: "Location",
            locationValue: "Ankara, Türkiye",
            remote: "Open to remote work",
        }
        : {
            tag: "Hakkımda",
            title: "Ben Kimim?",
            introPrefix: "Çankaya Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. ",
            highlight1: "Mobil uygulama geliştirme",
            highlight2: "yapay zeka model eğitimleri",
            highlight3: "otomasyon sistemleri",
            highlight4: "web geliştirme",
            p2: "React Native ile cross-platform mobil uygulamalar geliştiriyor, Python ile yapay zeka modelleri eğitiyor, iş süreçlerini otomatize eden çözümler üzerine çalışıyorum. Full-stack web geliştirme konusunda da aktif projeler yürütüyorum.",
            p3: "Takım çalışmasına yatkın, güçlü iletişim becerilerine sahip ve sorun çözmeye odaklı biriyim. Yeni teknolojileri yakından takip ediyor, öğrendiklerimi gerçek dünya projelerine uyguluyorum. Problem çözme tutkum ve sürekli öğrenme motivasyonum ile her projede en iyi sonucu hedefliyorum.",
            projects: "Proje",
            education: "Eğitim",
            major: "Bilgisayar Mühendisliği",
            location: "Konum",
            locationValue: "Ankara, Türkiye",
            remote: "Uzaktan çalışmaya açık",
        };

    return (
        <section id="about" className={styles.about}>
            {/* Background skill marquee */}
            <div className={styles.skillsBg}>
                {skillTracks.map((track, ti) => (
                    <div key={ti} className={`${styles.skillsTrack} ${styles[`track${ti + 1}`]}`}>
                        {[...track, ...track].map((skill, si) => (
                            <div key={si} className={styles.skillItem}>
                                <i className={skillIcons[skill] || "fas fa-code"}></i>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        className={styles.tag}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {t.tag}
                    </motion.span>
                    <h2 className={styles.title}>
                        <BlurText text={t.title} delay={0.1} />
                    </h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <ScrollReveal delay={0.1}>
                            <p className={styles.intro}>
                                {t.introPrefix}{" "}
                                <span className={styles.highlight}>{t.highlight1}</span>,{" "}
                                <span className={styles.highlight}>{t.highlight2}</span>,{" "}
                                <span className={styles.highlight}>{t.highlight3}</span> {language === "en" ? "and" : "ve"}{" "}
                                <span className={styles.highlight}>{t.highlight4}</span> {language === "en" ? "as my core focus areas." : "alanlarında çalışıyorum."}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p>
                                {t.p2}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p>
                                {t.p3}
                            </p>
                        </ScrollReveal>

                        <div className={styles.stats}>
                            <ScrollReveal delay={0.4} className={styles.statItem}>
                                <CountUp target={20} suffix="+" className={styles.statNumber} />
                                <span className={styles.statLabel}>{t.projects}</span>
                            </ScrollReveal>
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <ScrollReveal delay={0.3} direction="right">
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>{t.education}</h4>
                                    <p>{t.major}</p>
                                    <span>Çankaya Üniversitesi • 2021-2026</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4} direction="right">
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>{t.location}</h4>
                                    <p>{t.locationValue}</p>
                                    <span>{t.remote}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
