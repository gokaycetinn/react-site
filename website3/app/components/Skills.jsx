"use client";

import { skillGroups } from "../data";
import { useApp } from "./AppProvider";
import { KineticGrid, Reveal } from "./MotionPrimitives";

export default function Skills() {
  const { language, t } = useApp();

  return (
    <section className="skills-section section-block">
      <KineticGrid />
      <div className="section-shell skills-shell">
        <Reveal className="section-heading skills-heading">
          <h2>{t.skillsTitle}</h2>
          <p>{t.skillsBody}</p>
        </Reveal>

        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <Reveal className={`skill-group skill-group-${index + 1}`} key={group.title.en} delay={index * 0.05}>
              <h3>{group.title[language]}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
