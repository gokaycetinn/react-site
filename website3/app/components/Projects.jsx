"use client";

import { useMemo, useState } from "react";
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

function ProjectMedia({ src, alt, priority = false, fit = "cover", sizes }) {
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
          sizes={sizes || "(max-width: 767px) 80vw, 52vw"}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
}

function GraphicCover({ icon, title }) {
  const Icon = projectIcons[icon] || Brain;

  return (
    <div className="project-graphic-cover" aria-label={title} role="img">
      <div className="graphic-grid" aria-hidden="true" />
      <Icon size={112} weight="duotone" aria-hidden="true" />
      <span aria-hidden="true">{title.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}

function ProjectVisual({ project, language, priority = false, reduceMotion }) {
  if (!project.gallery.length) {
    return <GraphicCover icon={project.icon} title={project.title[language]} />;
  }

  if (project.gallery.length > 1) {
    return (
      <div className="project-device-gallery">
        {project.gallery.map((src, index) => (
          <motion.div
            key={src}
            className={`device-shot device-shot-${index + 1}`}
            initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: reduceMotion ? 0 : 0.45 }}
          >
            <ProjectMedia
              src={src}
              alt={`${project.imageAlt[language]} ${index + 1}`}
              priority={priority && index === 0}
              fit="contain"
              sizes="(max-width: 767px) 38vw, 18vw"
            />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="project-single-visual">
      <ProjectMedia
        src={project.gallery[0]}
        alt={project.imageAlt[language]}
        priority={priority}
        fit={project.slug === "traffic-analysis" ? "cover" : "contain"}
      />
    </div>
  );
}

function ProjectThumbnail({ project }) {
  if (!project.gallery.length) {
    const Icon = projectIcons[project.icon] || Brain;
    return (
      <div className="project-thumbnail-graphic" aria-hidden="true">
        <Icon size={34} weight="duotone" />
      </div>
    );
  }

  return (
    <div className="project-thumbnail-image">
      <Image src={project.gallery[0]} alt="" fill sizes="180px" />
    </div>
  );
}

export default function Projects() {
  const { language, t } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const projects = useMemo(
    () => [
      ...featuredProjects.map((project) => ({
        ...project,
        gallery: project.gallery || [project.image],
      })),
      ...additionalProjects.map((project) => ({
        ...project,
        title: { tr: project.title, en: project.title },
        imageAlt: {
          tr: `${project.title} proje arayüzü`,
          en: `${project.title} project interface`,
        },
        gallery: project.image ? [project.image] : [],
        links: [
          {
            type: "github",
            labelKey: "viewProject",
            href: project.href,
          },
        ],
      })),
    ],
    []
  );

  const move = (delta) => {
    setDirection(delta);
    setActiveIndex((current) => (current + delta + projects.length) % projects.length);
  };

  const selectProject = (index) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const project = projects[activeIndex];

  return (
    <section id="projects" className="project-lab-section section-block">
      <div className="section-shell">
        <Reveal className="section-heading project-heading">
          <h2>{t.featuredTitle}</h2>
          <p>{t.featuredBody}</p>
        </Reveal>

        <div className="project-workbench">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.slug}
              className="project-stage"
              custom={direction}
              initial={reduceMotion ? false : { opacity: 0, x: direction * 26 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -18 }}
              transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project-visual-board">
                <ProjectVisual
                  project={project}
                  language={language}
                  priority={activeIndex === 0}
                  reduceMotion={reduceMotion}
                />
              </div>

              <article className="project-stage-copy" aria-live="polite">
                <div className="project-stage-meta">
                  <p className="project-category">{project.category[language]}</p>
                  <span>{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                </div>
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

                <div className="project-stage-controls">
                  <button type="button" onClick={() => move(-1)} aria-label={t.previous}>
                    <ArrowLeft size={20} weight="bold" aria-hidden="true" />
                  </button>
                  <button type="button" onClick={() => move(1)} aria-label={t.next}>
                    <ArrowRight size={20} weight="bold" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </motion.div>
          </AnimatePresence>

          <div className="project-index-header">
            <p>{t.projectIndex}</p>
            <a href="https://github.com/gokaycetinn?tab=repositories" target="_blank" rel="noreferrer">
              <GithubLogo size={18} weight="fill" aria-hidden="true" />
              <span>{t.allProjects}</span>
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <div className="project-index" role="tablist" aria-label={t.projectIndex}>
            {projects.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={activeIndex === index ? "is-active" : ""}
                onClick={() => selectProject(index)}
              >
                <ProjectThumbnail project={item} />
                <span className="project-index-copy">
                  <small>{item.category[language]}</small>
                  <strong>{item.title[language]}</strong>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
