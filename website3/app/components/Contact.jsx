"use client";

import {
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { useApp } from "./AppProvider";
import { MagneticLink, Reveal } from "./MotionPrimitives";

export default function Contact() {
  const { t } = useApp();

  return (
    <footer id="contact" className="contact-section">
      <div className="section-shell contact-shell">
        <Reveal className="contact-copy">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <MagneticLink
            href="mailto:gokaycetin44@gmail.com"
            className="button button-primary liquid-button contact-button"
          >
            <EnvelopeSimple size={20} weight="bold" aria-hidden="true" />
            <span>{t.contactCta}</span>
            <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
          </MagneticLink>
        </Reveal>

        <Reveal className="contact-links" delay={0.08}>
          <a href="mailto:gokaycetin44@gmail.com">
            <EnvelopeSimple size={21} weight="duotone" aria-hidden="true" />
            <span>gokaycetin44@gmail.com</span>
          </a>
          <a href="https://github.com/gokaycetinn" target="_blank" rel="noreferrer">
            <GithubLogo size={21} weight="fill" aria-hidden="true" />
            <span>github.com/gokaycetinn</span>
            <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/gokay-cetinakdogan/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={21} weight="fill" aria-hidden="true" />
            <span>linkedin.com/in/gokay-cetinakdogan</span>
            <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
          </a>
        </Reveal>

        <div className="footer-bottom">
          <p>© 2026 Gökay Çetinakdoğan. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
