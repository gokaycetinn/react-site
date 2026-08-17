"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  AppStoreLogo,
  GithubLogo,
  GlobeHemisphereWest,
  ArrowUpRight,
  CheckCircle,
  Cpu,
  Lightbulb,
} from "@phosphor-icons/react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useApp } from "./AppProvider";

const linkIcons: Record<string, any> = {
  appstore: AppStoreLogo,
  github: GithubLogo,
  website: GlobeHemisphereWest,
};

export interface DrawerProject {
  slug: string;
  title: { tr: string; en: string };
  category: { tr: string; en: string };
  description: { tr: string; en: string };
  image?: string;
  gallery?: string[];
  imageAlt?: { tr: string; en: string };
  tech: string[];
  links?: Array<{ type: string; labelKey: string; href: string }>;
  caseStudy?: {
    problem: { tr: string; en: string };
    solution: { tr: string; en: string };
    architecture: { tr: string; en: string };
    highlights: { tr: string[]; en: string[] };
  };
}

interface ProjectDrawerProps {
  project: DrawerProject | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const { language, t } = useApp();
  const reduceMotion = useReducedMotion();

  // Close on ESC key and lock body scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="drawer-portal" role="dialog" aria-modal="true" aria-label={project.title[language]}>
          {/* Backdrop */}
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Slide-over Panel */}
          <motion.aside
            className="drawer-panel"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="drawer-header">
              <div className="drawer-header-meta">
                <span className="drawer-category">{project.category[language]}</span>
                <h2 className="drawer-title">{project.title[language]}</h2>
              </div>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={onClose}
                aria-label={t.closeDrawer}
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            <div className="drawer-body">
              {/* Action Links */}
              {project.links && project.links.length > 0 && (
                <div className="drawer-actions">
                  {project.links.map((link) => {
                    const Icon = linkIcons[link.type] || ArrowUpRight;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-primary drawer-btn"
                      >
                        <Icon size={18} weight={link.type === "github" ? "fill" : "bold"} />
                        <span>{t[link.labelKey] || link.labelKey}</span>
                        <ArrowUpRight size={14} weight="bold" />
                      </a>
                    );
                  })}
                </div>
              )}

              {/* Overview Description */}
              <div className="drawer-section">
                <p className="drawer-lead">{project.description[language]}</p>
              </div>

              {/* Case Study Details */}
              {project.caseStudy && (
                <>
                  {/* Problem & Solution */}
                  <div className="drawer-section drawer-grid-2">
                    <div className="drawer-card">
                      <div className="drawer-card-label">
                        <Lightbulb size={18} weight="duotone" />
                        <span>{language === "tr" ? "Problem / İhtiyaç" : "The Challenge"}</span>
                      </div>
                      <p>{project.caseStudy.problem[language]}</p>
                    </div>

                    <div className="drawer-card">
                      <div className="drawer-card-label">
                        <CheckCircle size={18} weight="duotone" />
                        <span>{language === "tr" ? "Geliştirilen Çözüm" : "The Solution"}</span>
                      </div>
                      <p>{project.caseStudy.solution[language]}</p>
                    </div>
                  </div>

                  {/* Architecture & Engineering */}
                  <div className="drawer-section">
                    <div className="drawer-card drawer-card-full">
                      <div className="drawer-card-label">
                        <Cpu size={18} weight="duotone" />
                        <span>{t.architecture}</span>
                      </div>
                      <p>{project.caseStudy.architecture[language]}</p>
                    </div>
                  </div>

                  {/* Engineering Highlights */}
                  <div className="drawer-section">
                    <h3 className="drawer-section-title">{t.highlights}</h3>
                    <ul className="drawer-highlights-list">
                      {project.caseStudy.highlights[language].map((item, i) => (
                        <li key={i}>
                          <CheckCircle size={17} weight="bold" className="highlight-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Tech Stack */}
              <div className="drawer-section">
                <h3 className="drawer-section-title">Tech Stack</h3>
                <ul className="tech-list">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
