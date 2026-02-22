"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import BlurText from "./ui/BlurText";
import ScrollReveal from "./ui/ScrollReveal";
import Magnet from "./ui/Magnet";
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

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(`${t.bodyName}: ${data.name}\n${t.bodyEmail}: ${data.email}\n\n${t.bodyMessage}:\n${data.message}`);
        window.location.href = `mailto:gokaycetin44@gmail.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            e.target.reset();
        }, 3000);
    };

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
                                        whileHover={{ y: -4, borderColor: "var(--primary)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className={styles.cardIcon}>
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className={styles.cardDetails}>
                                            <span>{item.label}</span>
                                        </div>
                                    </motion.a>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    <ScrollReveal direction="right" delay={0.2}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input type="text" name="name" id="contact-name" required placeholder=" " />
                                <label htmlFor="contact-name">{t.name}</label>
                                <span className={styles.focusBorder}></span>
                            </div>
                            <div className={styles.formGroup}>
                                <input type="email" name="email" id="contact-email" required placeholder=" " />
                                <label htmlFor="contact-email">{t.email}</label>
                                <span className={styles.focusBorder}></span>
                            </div>
                            <div className={styles.formGroup}>
                                <input type="text" name="subject" id="contact-subject" required placeholder=" " />
                                <label htmlFor="contact-subject">{t.subject}</label>
                                <span className={styles.focusBorder}></span>
                            </div>
                            <div className={styles.formGroup}>
                                <textarea name="message" id="contact-message" rows="5" required placeholder=" "></textarea>
                                <label htmlFor="contact-message">{t.message}</label>
                                <span className={styles.focusBorder}></span>
                            </div>
                            <Magnet strength={0.15}>
                                <motion.button
                                    type="submit"
                                    className={styles.submitBtn}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    animate={submitted ? { background: "linear-gradient(135deg, #10b981, #059669)" } : {}}
                                >
                                    <span>{submitted ? t.sent : t.send}</span>
                                    <i className={submitted ? "fas fa-check" : "fas fa-paper-plane"}></i>
                                </motion.button>
                            </Magnet>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
