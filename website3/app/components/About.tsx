"use client";

import Image from "next/image";
import {
  MapPinLine,
} from "@phosphor-icons/react";
import universityLogo from "../../public/logos/Çankaya_Üniversitesi_logo.png";
import { useApp } from "./AppProvider";
import { Reveal } from "./MotionPrimitives";
import GitHubActivity from "./GitHubActivity";

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

        <div className="about-facts" aria-label={t.profileFactsLabel}>
          <Reveal className="fact fact-education" delay={0.1}>
            <Image
              className="education-logo"
              src={universityLogo}
              alt={t.educationLogoAlt}
              width={58}
              height={58}
              sizes="58px"
            />
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

        <div className="about-github-wrap">
          <Reveal delay={0.2}>
            <GitHubActivity />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
