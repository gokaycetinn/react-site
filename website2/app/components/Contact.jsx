"use client";
import { motion } from "framer-motion";
import BlurText from "./ui/BlurText";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./Contact.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
    const { language } = useLanguage();
    const t = language === "en"
        ? {
            tag: "Contact",
            title: "Get In Touch",
            subtitle: "Let's Work Together!",
            desc: "You can contact me for new projects, job opportunities, or just to say hello.",
            phone: "Phone",
            name: "Your Name",
            email: "Your Email Address",
            subject: "Subject",
            message: "Your Message",
            sent: "Message Prepared!",
            send: "Send Message",
            bodyName: "Name",
            bodyEmail: "Email",
            bodyMessage: "Message",
        }
        : {
            tag: "İletişim",
            title: "Benimle İletişime Geçin",
            subtitle: "Birlikte Çalışalım!",
            desc: "Yeni projeler, iş fırsatları veya sadece merhaba demek için benimle iletişime geçebilirsiniz.",
            phone: "Telefon",
            name: "Adınız",
            email: "E-posta Adresiniz",
            subject: "Konu",
            message: "Mesajınız",
            sent: "Mesaj Hazırlandı!",
            send: "Mesaj Gönder",
            bodyName: "İsim",
            bodyEmail: "E-posta",
            bodyMessage: "Mesaj",
        };

    const localizedContactItems = [
        { icon: "fas fa-envelope", label: "Mail", href: "mailto:gokaycetin44@gmail.com" },
        { icon: "fas fa-phone", label: t.phone, href: "tel:+905356483343" },
        { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/in/gokay-cetinakdogan/" },
        { icon: "fab fa-github", label: "GitHub", href: "https://github.com/gokaycetinn" },
    ];

    return (
        <section id="contact" className={styles.contact}>
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

                <div className={styles.content}>
                    <div className={styles.info}>
                        <ScrollReveal>
                            <h3>{t.subtitle}</h3>
                            <p>
                                {t.desc}
                            </p>
                        </ScrollReveal>

                        <div className={styles.cards}>
                            {localizedContactItems.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <motion.a
                                        href={item.href}
                                        target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        className={styles.card}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        <div className={styles.cardIcon}>
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className={styles.cardDetails}>
                                            <span>{item.label}</span>
                                            <span className={styles.cardSubtitle}>
                                                {item.label === "Mail" ? "gokaycetin44@gmail.com" :
                                                 item.label === t.phone ? "+90 535 648 33 43" :
                                                 item.label === "LinkedIn" ? "gokay-cetinakdogan" :
                                                 "gokaycetinn"}
                                            </span>
                                        </div>
                                        <div className={styles.cardArrow}>
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </motion.a>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
