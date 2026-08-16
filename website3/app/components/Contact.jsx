"use client";

import {
  ArrowUpRight,
  Broadcast,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
} from "@phosphor-icons/react";
import { useApp } from "./AppProvider";
import { MagneticLink, Reveal } from "./MotionPrimitives";

export default function Contact() {
  const { t } = useApp();

  return (
    <footer id="contact" className="contact-section contact-premium-section">
      <div className="section-shell contact-premium-shell">
        <Reveal className="contact-premium-panel">
          <div className="contact-premium-orbit" aria-hidden="true" />

          <div className="contact-premium-copy">
            <div className="contact-availability">
              <Broadcast size={19} weight="duotone" aria-hidden="true" />
              <span>{t.contactAvailability}</span>
            </div>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
          </div>

          <MagneticLink
            href="mailto:gokaycetin44@gmail.com"
            className="contact-premium-email"
            ariaLabel={`${t.emailLabel}: gokaycetin44@gmail.com`}
          >
            <span>
              <EnvelopeSimple size={20} weight="duotone" aria-hidden="true" />
              {t.emailLabel}
            </span>
            <strong>gokaycetin44@gmail.com</strong>
            <ArrowUpRight size={23} weight="bold" aria-hidden="true" />
          </MagneticLink>
        </Reveal>

        <Reveal className="contact-premium-network" delay={0.08}>
          <a href="tel:+905356483343">
            <Phone size={22} weight="duotone" aria-hidden="true" />
            <span>
              <small>{t.phoneLabel}</small>
              <strong>+90 535 648 33 43</strong>
            </span>
          </a>
          <a href="https://github.com/gokaycetinn" target="_blank" rel="noreferrer">
            <GithubLogo size={22} weight="fill" aria-hidden="true" />
            <span>
              <small>GitHub</small>
              <strong>gokaycetinn</strong>
            </span>
            <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/gokay-cetinakdogan/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={22} weight="fill" aria-hidden="true" />
            <span>
              <small>LinkedIn</small>
              <strong>Gökay Çetinakdoğan</strong>
            </span>
            <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
          </a>
        </Reveal>

        <div className="footer-bottom">
          <a href="#home" className="footer-brand" aria-label="Back to top">
            GÇ
          </a>
          <p>© 2026 Gökay Çetinakdoğan. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
