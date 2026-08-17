"use client";

import {
  GithubLogo,
  ArrowUpRight,
  Circle,
} from "@phosphor-icons/react";
import { useApp } from "./AppProvider";

export default function GitHubActivity() {
  const { language, theme, t } = useApp();
  const isTr = language === "tr";

  // Theme-matched custom streak stats (demolab defaults to en; locale=en causes 404/API error)
  const localeParam = isTr ? "&locale=tr" : "";
  const streakUrl = theme === "dark"
    ? `https://streak-stats.demolab.com?user=gokaycetinn${localeParam}&mode=daily&background=0c0f0d&border=222b24&stroke=222b24&ring=c8ef5b&fire=ff7675&currStreakNum=c8ef5b&sideNums=edf2e9&currStreakLabel=c8ef5b&sideLabels=a8b3a4&dates=6f7a6b&border_radius=10`
    : `https://streak-stats.demolab.com?user=gokaycetinn${localeParam}&mode=daily&background=f4f6f0&border=e2e7dc&stroke=e2e7dc&ring=4a7c13&fire=e84118&currStreakNum=4a7c13&sideNums=181b16&currStreakLabel=4a7c13&sideLabels=657060&dates=8c9688&border_radius=10`;

  return (
    <div className="github-activity-card">
      {/* Top Header */}
      <div className="github-activity-header">
        <div className="github-profile-badge">
          <div className="github-avatar-icon">
            <GithubLogo size={24} weight="fill" />
          </div>
          <div>
            <div className="github-user-line">
              <strong>gokaycetinn</strong>
              <span className="github-status-dot">
                <Circle size={8} weight="fill" className="pulse-dot" />
                {t.githubActiveStatus}
              </span>
            </div>
            <small>{isTr ? "GitHub Katkı ve Kodlama İstatistikleri" : "GitHub Contribution & Coding Statistics"}</small>
          </div>
        </div>

        <a
          href="https://github.com/gokaycetinn"
          target="_blank"
          rel="noreferrer"
          className="github-all-btn"
        >
          <span>{isTr ? "GitHub Profilini İncele" : "View GitHub Profile"}</span>
          <ArrowUpRight size={14} weight="bold" />
        </a>
      </div>

      {/* Live GitHub Streak Statistics Card */}
      <div className="github-streak-widget-wrap">
        <div className="github-streak-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={`streak-${theme}-${language}`}
            src={streakUrl}
            alt="GitHub streak statistics"
            className="github-streak-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
