"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { experiences } from "../data";
import { useApp } from "./AppProvider";
import { Reveal } from "./MotionPrimitives";

export default function Experience() {
  const { language, t } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = experiences[activeIndex];

  return (
    <section id="experience" className="experience-section section-block">
      <div className="section-shell">
        <Reveal className="section-heading experience-heading">
          <p className="eyebrow">{t.experienceEyebrow}</p>
          <h2>{t.experienceTitle}</h2>
          <p>{t.experienceBody}</p>
        </Reveal>

        <div className="experience-layout">
          <div className="experience-selector" role="tablist" aria-label={t.experienceTitle}>
            {experiences.map((experience, index) => (
              <button
                key={experience.company}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="experience-panel"
                className={activeIndex === index ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <span className="selector-copy">
                  <strong>{experience.company}</strong>
                  <small>{experience.date[language]}</small>
                </span>
                <ArrowRight size={19} weight="bold" aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className="experience-panel-wrap">
            <AnimatePresence mode="wait">
              <motion.article
                id="experience-panel"
                role="tabpanel"
                key={active.company}
                className="experience-panel"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="experience-panel-header">
                  <div>
                    {active.ongoing ? <span className="status-label">{t.ongoing}</span> : null}
                    <h3>{active.company}</h3>
                    <p className="experience-role">{active.role[language]}</p>
                    <p className="experience-date">{active.date[language]}</p>
                    {active.location ? <p className="experience-location">{active.location[language]}</p> : null}
                  </div>
                  <div className="company-logo">
                    <Image
                      src={active.logo}
                      alt={`${active.company} logo`}
                      fill
                      sizes="144px"
                    />
                  </div>
                </div>

                <p className="experience-summary">{active.summary[language]}</p>
                <ul className="experience-bullets">
                  {active.bullets[language].map((bullet) => (
                    <li key={bullet}>
                      <Check size={17} weight="bold" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <ul className="tech-list experience-tags" aria-label="Focus areas">
                  {active.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
