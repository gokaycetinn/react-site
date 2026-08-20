"use client";

import {
  GraduationCap,
  MapPinLine,
} from "@phosphor-icons/react";
import { useApp } from "./AppProvider";
import { Reveal } from "./MotionPrimitives";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="about-section section-block">
      <div className="section-shell about-grid">
        <Reveal className="about-heading">
          <h2>{t.aboutTitle}</h2>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <p className="about-lead">{t.aboutLead}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>{t.aboutBody}</p>
          </Reveal>
        </div>

        <div className="about-facts" aria-label="Profile facts">
          <Reveal className="fact" delay={0.1}>
            <GraduationCap size={23} weight="duotone" aria-hidden="true" />
            <span className="fact-label">{t.education}</span>
            <strong>{t.educationValue}</strong>
            <small>{t.educationMeta}</small>
          </Reveal>
          <Reveal className="fact" delay={0.16}>
            <MapPinLine size={23} weight="duotone" aria-hidden="true" />
            <span className="fact-label">{t.location}</span>
            <strong>{t.locationValue}</strong>
            <small>{t.locationMeta}</small>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
