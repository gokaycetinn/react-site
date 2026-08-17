"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AppStoreLogo,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Brain,
  CalendarBlank,
  ChartLineUp,
  GithubLogo,
  GlobeHemisphereWest,
  ImageBroken,
  Notebook,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { additionalProjects, featuredProjects } from "../data";
import { useApp } from "./AppProvider";
import { Reveal } from "./MotionPrimitives";

const projectIcons = {
  brain: Brain,
  chart: ChartLineUp,
  calendar: CalendarBlank,
  notebook: Notebook,
};

const linkIcons = {
  appstore: AppStoreLogo,
  github: GithubLogo,
  website: GlobeHemisphereWest,
};

function ProjectMedia({ src, alt, priority = false, fit = "cover" }) {
  const { t } = useApp();
  const [status, setStatus] = useState("loading");

  return (
    <div className={`project-media project-media-${fit}`} data-status={status}>
      {status === "loading" ? (
        <div className="media-skeleton" role="status" aria-label={t.imageLoading} />
      ) : null}
      {status === "error" ? (
        <div className="media-error" role="alert">
          <ImageBroken size={28} weight="duotone" aria-hidden="true" />
          <span>{t.imageError}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 767px) 88vw, 50vw"
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
}

function FeaturedProjects() {
  const { language, t } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const move = (delta) => {
    setDirection(delta);
    setActiveIndex((current) =>
      (current + delta + featuredProjects.length) % featuredProjects.length
    );
  };

  const project = featuredProjects[activeIndex];

  return (
    <section id="projects" className="featured-section section-block">
      <div className="section-shell">
        <Reveal className="section-heading project-heading">
          <h2>{t.featuredTitle}</h2>
          <p>{t.featuredBody}</p>
        </Reveal>

        <div className="featured-layout">
          <div className="project-stack" aria-label={t.featuredTitle}>
            {featuredProjects.map((item, index) => {
              const relative = (index - activeIndex + featuredProjects.length) % featuredProjects.length;
              const position = relative === 0 ? "active" : relative === 1 ? "next" : "previous";
              const motionState = {
                active: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
                next: { x: 52, y: 20, rotate: 5.5, scale: 0.92, opacity: 0.64 },
                previous: { x: -42, y: 34, rotate: -5, scale: 0.88, opacity: 0.3 },
              }[position];

              return (
                <motion.div
                  key={item.slug}
                  className={`stack-card stack-card-${position}`}
                  animate={reduceMotion ? { opacity: position === "active" ? 1 : 0 } : motionState}
                  transition={{ type: "spring", stiffness: 130, damping: 21 }}
                  drag={position === "active" && !reduceMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.14}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -55 || info.velocity.x < -420) move(1);
                    if (info.offset.x > 55 || info.velocity.x > 420) move(-1);
                  }}
                  aria-hidden={position !== "active"}
                >
                  <ProjectMedia
                    src={item.image}
                    alt={position === "active" ? item.imageAlt[language] : ""}
                    priority={index === 0}
                    fit={item.slug === "traffic-analysis" ? "cover" : "contain"}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="project-detail">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={project.slug}
                custom={direction}
                initial={reduceMotion ? false : { opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -18 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                aria-live="polite"
              >
                <p className="project-category">{project.category[language]}</p>
                <h3>{project.title[language]}</h3>
                <p className="project-description">{project.description[language]}</p>
                <ul className="tech-list" aria-label="Technologies">
                  {project.tech.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.links.map((link) => {
                    const Icon = linkIcons[link.type] || ArrowUpRight;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        <Icon size={19} weight={link.type === "github" ? "fill" : "bold"} aria-hidden="true" />
                        <span>{t[link.labelKey]}</span>
                        <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="carousel-controls">
              <div className="carousel-buttons">
                <button type="button" onClick={() => move(-1)} aria-label={t.previous}>
                  <ArrowLeft size={20} weight="bold" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => move(1)} aria-label={t.next}>
                  <ArrowRight size={20} weight="bold" aria-hidden="true" />
                </button>
              </div>
              <p>{t.dragHint}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoreProjects() {
  const { language, t } = useApp();

  return (
    <section className="more-projects-section section-block">
      <div className="section-shell">
        <Reveal className="section-heading compact-heading">
          <h2>{t.moreProjectsTitle}</h2>
        </Reveal>

        <div className="project-bento">
          {additionalProjects.map((project, index) => {
            const Icon = projectIcons[project.icon];
            return (
              <Reveal key={project.title} className={`bento-project bento-project-${index + 1}`} delay={index * 0.05}>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.image ? (
                    <div className="bento-image">
                      <ProjectMedia
                        src={project.image}
                        alt={`${project.title} interface`}
                        fit="cover"
                      />
                    </div>
                  ) : (
                    <div className="bento-icon-field" aria-hidden="true">
                      <Icon size={index === 1 ? 78 : 64} weight="duotone" />
                    </div>
                  )}
                  <div className="bento-content">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description[language]}</p>
                    </div>
                    <div className="bento-footer">
                      <ul className="tech-list" aria-label="Technologies">
                        {project.tech.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                      <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="all-projects-link">
          <a href="https://github.com/gokaycetinn?tab=repositories" target="_blank" rel="noreferrer">
            <GithubLogo size={20} weight="fill" aria-hidden="true" />
            <span>{t.allProjects}</span>
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <FeaturedProjects />
      <MoreProjects />
    </>
  );
}
