"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const terminalContent = {
  tr: {
    command: "whoami",
    output: [
      { text: "Gökay Çetinakdoğan", tone: "strong" },
      { text: "Bilgisayar Mühendisi ", tone: "strong" },
      { text: "Yazılım Geliştirici", tone: "accent" },
    ],
  },
  en: {
    command: "whoami",
    output: [
      { text: "Gökay Çetinakdoğan", tone: "strong" },
      { text: "Computer Engineering graduate", tone: "muted" },
      { text: "Software Developer", tone: "accent" },
    ],
  },
};

export default function TerminalWindow({ language, label }) {
  const reduceMotion = useReducedMotion();
  const content = terminalContent[language] ?? terminalContent.tr;
  const [typedCommand, setTypedCommand] = useState("");
  const [visibleLines, setVisibleLines] = useState(0);

  const displayedCommand = reduceMotion ? content.command : typedCommand;
  const displayedLines = reduceMotion ? content.output.length : visibleLines;

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timers = [];
    let typingTimer;
    let characterIndex = 0;
    let isActive = true;

    const schedule = (callback, delay) => {
      const timer = window.setTimeout(() => {
        if (isActive) callback();
      }, delay);
      timers.push(timer);
    };

    schedule(() => {
      setTypedCommand("");
      setVisibleLines(0);

      typingTimer = window.setInterval(() => {
        characterIndex += 1;
        setTypedCommand(content.command.slice(0, characterIndex));

        if (characterIndex >= content.command.length) {
          window.clearInterval(typingTimer);

          content.output.forEach((_, lineIndex) => {
            schedule(() => setVisibleLines(lineIndex + 1), 260 + lineIndex * 210);
          });
        }
      }, 42);
    }, 160);

    return () => {
      isActive = false;
      window.clearInterval(typingTimer);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [content, reduceMotion]);

  return (
    <div className="terminal-window" role="img" aria-label={label}>
      <div className="terminal-toolbar" aria-hidden="true">
        <div className="terminal-controls">
          <span className="terminal-control terminal-control-close" />
          <span className="terminal-control terminal-control-minimize" />
          <span className="terminal-control terminal-control-expand" />
        </div>
        <span className="terminal-title">gokay - zsh</span>
        <span className="terminal-location">~/portfolio</span>
      </div>

      <div className="terminal-body" aria-hidden="true">
        <div className="terminal-context">
          <span>Last login: today</span>
          <span>portfolio session</span>
        </div>

        <div className="terminal-command-line">
          <span className="terminal-user">gokay@portfolio</span>
          <span className="terminal-path">~</span>
          <span className="terminal-prompt">%</span>
          <span className="terminal-command">{displayedCommand}</span>
          <span className="terminal-cursor" />
        </div>

        <div className="terminal-output">
          {content.output.slice(0, displayedLines).map((line, index) => (
            <div
              className={`terminal-output-line terminal-output-${line.tone}`}
              key={`${content.command}-${line.text}`}
              style={{ "--line-index": index } as React.CSSProperties}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
