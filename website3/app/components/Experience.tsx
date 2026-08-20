"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check, MapPin } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { experiences } from "../data";
import { useApp } from "./AppProvider";

function ExperienceSheet({ experience, index, language, t }) {
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 18%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.965, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.58, 1]);

  return (
    <motion.article
      ref={cardRef}
      className="experience-sheet"
      style={{
        "--stack-index": index,
        scale: reduceMotion ? 1 : scale,
        opacity: reduceMotion ? 1 : opacity,
      } as React.CSSProperties}
    >
      <header
        className={`experience-sheet-header ${
          experience.roles ? "experience-sheet-header-grouped" : ""
        }`}
      >
        <div
          className={`company-logo experience-sheet-logo ${
            experience.company.toLowerCase().includes("sports") ? "logo-sports-digitale" : ""
          }`}
        >
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            fill
            sizes="144px"
          />
        </div>

        <div className="experience-sheet-heading">
          {experience.roles ? (
            <>
              <h3>{experience.company}</h3>
              <time>{experience.date[language]}</time>
            </>
          ) : (
            <>
              <div className="experience-sheet-meta">
                <p>{experience.role[language]}</p>
                {experience.ongoing ? <span className="status-label">{t.ongoing}</span> : null}
              </div>
              <h3>{experience.company}</h3>
              <time>{experience.date[language]}</time>
            </>
          )}
        </div>
      </header>

      {experience.roles ? (
        <div
          className="experience-role-timeline"
          aria-label={`${experience.company} ${language === "tr" ? "rolleri" : "roles"}`}
        >
          {experience.roles.map((role) => (
            <article className="experience-role-item" key={role.date.tr}>
              <div className="experience-role-heading">
                <div>
                  <h4>{role.title[language]}</h4>
                  <p>{role.employmentType[language]}</p>
                </div>
                {role.ongoing ? <span className="status-label">{t.ongoing}</span> : null}
              </div>
              <time>{role.date[language]}</time>
            </article>
          ))}
        </div>
      ) : null}

      <p className="experience-sheet-summary">{experience.summary[language]}</p>

      <div className="experience-sheet-details">
        <ul className="experience-sheet-bullets">
          {experience.bullets[language].map((bullet) => (
            <li key={bullet}>
              <Check size={17} weight="bold" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="experience-sheet-side">
          {experience.location ? (
            <p>
              <MapPin size={17} weight="duotone" aria-hidden="true" />
              <span>{experience.location[language]}</span>
            </p>
          ) : null}
          <ul className="tech-list" aria-label="Focus areas">
            {experience.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const { language, t } = useApp();

  return (
    <section id="experience" className="experience-section experience-premium-section section-block">
      <div className="section-shell">
        <h2 className="sr-only">{t.experienceEyebrow}</h2>
        <div className="experience-stack experience-stack-wide">
          {experiences.map((experience, index) => (
            <ExperienceSheet
              key={experience.company}
              experience={experience}
              index={index}
              language={language}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
