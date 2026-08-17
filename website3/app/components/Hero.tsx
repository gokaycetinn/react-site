"use client";

import { useRef } from "react";
import { ArrowRight, GithubLogo, DownloadSimple } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useApp } from "./AppProvider";
import { MagneticLink } from "./MotionPrimitives";
import TerminalWindow from "./TerminalWindow";

export default function Hero() {
  const { language, t } = useApp();
  const reduceMotion = useReducedMotion();
  const mediaRef = useRef(null);

  const updateSpotlight = (event) => {
    if (!mediaRef.current) return;
    const bounds = mediaRef.current.getBoundingClientRect();
    mediaRef.current.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    mediaRef.current.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-shell section-shell">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: 0.12 },
            },
          }}
        >
          <motion.p
            className="eyebrow"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
            }}
          >
            {t.heroEyebrow}
          </motion.p>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            className="hero-body"
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.58 } },
            }}
          >
            {t.heroBody}
          </motion.p>
          <motion.div
            className="hero-actions"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <MagneticLink href="#projects" className="button button-primary liquid-button">
              <span>{t.heroPrimary}</span>
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </MagneticLink>
            <MagneticLink
              href="https://github.com/gokaycetinn"
              className="button button-secondary"
              external
            >
              <GithubLogo size={19} weight="fill" aria-hidden="true" />
              <span>{t.heroSecondary}</span>
            </MagneticLink>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv.pdf`}
              className="button button-secondary"
              download
            >
              <DownloadSimple size={19} weight="bold" aria-hidden="true" />
              <span>{t.downloadCV}</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.figure
          ref={mediaRef}
          className="hero-media-stage"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onPointerMove={updateSpotlight}
        >
          <TerminalWindow language={language} label={t.heroVisualAlt} />
        </motion.figure>
      </div>
    </section>
  );
}
