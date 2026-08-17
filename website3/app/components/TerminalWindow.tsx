"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { technicalSkills, experiences, featuredProjects, additionalProjects } from "../data";
import { useApp } from "./AppProvider";

interface TerminalLine {
  text: string;
  tone?: "strong" | "muted" | "accent" | "success" | "warning" | "error";
}

interface CommandEntry {
  command: string;
  output: TerminalLine[];
  isHelpMenu?: boolean;
}

export default function TerminalWindow({ language, label }: { language: "tr" | "en"; label: string }) {
  const reduceMotion = useReducedMotion();
  const { theme, setTheme } = useApp();
  const isTr = language === "tr";

const menuItems = [
    { id: "projects", label: "projects", desc: isTr ? "Projeler bölümüne kaydır" : "Navigate to Projects section" },
    { id: "exp", label: "exp", desc: isTr ? "Deneyim bölümüne kaydır" : "Navigate to Experience section" },
    { id: "contact", label: "contact", desc: isTr ? "İletişim bölümüne kaydır" : "Navigate to Contact section" },
    { id: "cv", label: "cv", desc: isTr ? "Özgeçmiş dosyasını aç (PDF - Yeni Sekme)" : "View resume (PDF - New Tab)" },
    { id: "theme", label: "theme", desc: isTr ? "Temayı değiştir (karanlık/aydınlık)" : "Toggle theme (dark/light)" },
    { id: "matrix", label: "matrix", desc: isTr ? "Gizli matrix modu" : "Secret matrix easter egg", isMatrix: true },
    { id: "clear", label: "clear", desc: isTr ? "Terminal ekranını temizle" : "Clear terminal screen" },
  ];

  const [typedCommand, setTypedCommand] = useState("");
  const [initialLinesVisible, setInitialLinesVisible] = useState(0);
  const [isInitialDone, setIsInitialDone] = useState(false);
  const [history, setHistory] = useState<CommandEntry[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Interactive Menu Navigation State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const initialOutput: TerminalLine[] = [
    { text: "Gökay Çetinakdoğan", tone: "strong" },
    { text: isTr ? "Bilgisayar Mühendisi" : "Computer Engineer", tone: "muted" },
    { text: isTr ? "Yazılım Geliştirici" : "Software Developer", tone: "accent" },
  ];

  // Initial typing animation
  useEffect(() => {
    let active = true;

    if (reduceMotion) {
      queueMicrotask(() => {
        if (!active) return;
        setTypedCommand("whoami");
        setInitialLinesVisible(initialOutput.length);
        setIsInitialDone(true);
      });

      return () => {
        active = false;
      };
    }

    let charIdx = 0;
    const commandText = "whoami";
    const revealTimers: ReturnType<typeof setTimeout>[] = [];

    queueMicrotask(() => {
      if (!active) return;
      setTypedCommand("");
      setInitialLinesVisible(0);
      setIsInitialDone(false);
    });

    const typeTimer = setInterval(() => {
      charIdx += 1;
      setTypedCommand(commandText.slice(0, charIdx));
      if (charIdx >= commandText.length) {
        clearInterval(typeTimer);
        revealTimers.push(setTimeout(() => setInitialLinesVisible(1), 200));
        revealTimers.push(setTimeout(() => setInitialLinesVisible(2), 400));
        revealTimers.push(setTimeout(() => {
          setInitialLinesVisible(3);
          setIsInitialDone(true);
        }, 650));
      }
    }, 45);

    return () => {
      active = false;
      clearInterval(typeTimer);
      revealTimers.forEach(clearTimeout);
    };
  }, [initialOutput.length, language, reduceMotion]);

  // Auto-scroll on new output
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, initialLinesVisible, isMatrixMode, inputVal, isMenuOpen, menuIndex]);

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();
    const args = cmd.split(" ");
    const mainCmd = args[0];

    let output: TerminalLine[] = [];
    let isHelp = false;

    switch (mainCmd) {
      case "help":
        isHelp = true;
        setIsMenuOpen(true);
        setMenuIndex(0);
        output = [
          { text: isTr ? "── Kullanılabilir Komutlar (Ok tuşları veya fare ile seçebilirsiniz) ──" : "── Available Commands (Use Arrow keys or mouse to select) ──", tone: "accent" },
        ];
        break;

      case "projects":
        setIsMenuOpen(false);
        {
          const el = document.getElementById("projects");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
          output = [
            { text: isTr ? "→ Projeler bölümüne kaydırılıyor..." : "→ Navigating to Projects section...", tone: "accent" },
          ];
        }
        break;

      case "exp":
      case "experience":
        setIsMenuOpen(false);
        {
          const el = document.getElementById("experience");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
          output = [
            { text: isTr ? "→ Deneyim bölümüne kaydırılıyor..." : "→ Navigating to Experience section...", tone: "accent" },
          ];
        }
        break;

      case "contact":
        setIsMenuOpen(false);
        {
          const el = document.getElementById("contact");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
          output = [
            { text: isTr ? "→ İletişim bölümüne kaydırılıyor..." : "→ Navigating to Contact section...", tone: "accent" },
          ];
        }
        break;

      case "cv":
      case "resume":
        setIsMenuOpen(false);
        {
          const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
          window.open(`${basePath}/cv.pdf`, "_blank", "noopener,noreferrer");
          output = [
            { text: isTr ? "✓ CV yeni sekmede açıldı (cv.pdf)" : "✓ CV opened in new tab (cv.pdf)", tone: "success" },
          ];
        }
        break;

      case "theme":
        setIsMenuOpen(false);
        setTheme(theme === "dark" ? "light" : "dark");
        output = [
          {
            text: isTr
              ? `✓ Tema değiştirildi: ${theme === "dark" ? "Aydınlık ☀" : "Karanlık ☾"}`
              : `✓ Theme toggled to: ${theme === "dark" ? "Light ☀" : "Dark ☾"}`,
            tone: "success",
          },
        ];
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setIsMatrixMode(false);
        setInputVal("");
        setIsMenuOpen(false);
        return;

      case "matrix":
        setIsMenuOpen(false);
        setIsMatrixMode(true);
        output = [
          { text: "Wake up, Neo...", tone: "success" },
          { text: "The Matrix has you.", tone: "success" },
          { text: "Follow the white rabbit. 🐇", tone: "success" },
          { text: "01000111 01101111 01101011 01100001 01111001", tone: "success" },
        ];
        break;

      case "sudo":
        setIsMenuOpen(false);
        output = [{ text: "Permission denied: you are already in developer mode.", tone: "error" }];
        break;

      case "ls":
      case "dir":
        setIsMenuOpen(false);
        output = [
          { text: "projects.json   experience.log   cv.pdf   skills.yml", tone: "accent" },
        ];
        break;

      case "cat":
        setIsMenuOpen(false);
        if (args[1] === "cv.pdf") {
          const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
          window.open(`${basePath}/cv.pdf`, "_blank", "noopener,noreferrer");
          output = [{ text: "Opening cv.pdf in new tab...", tone: "success" }];
        } else {
          output = [{ text: `cat: ${args[1] || "file"}: No such file or directory. Try 'help'.`, tone: "error" }];
        }
        break;

      case "whoami":
        setIsMenuOpen(false);
        output = [
          { text: "Gökay Çetinakdoğan", tone: "strong" },
          { text: isTr ? "Bilgisayar Mühendisi" : "Computer Engineer", tone: "muted" },
          { text: isTr ? "Yazılım Geliştirici" : "Software Developer", tone: "accent" },
        ];
        break;

      default:
        setIsMenuOpen(false);
        output = [
          {
            text: isTr
              ? `zsh: komut bulunamadı: ${mainCmd}. Komut listesi için 'help' yazın.`
              : `zsh: command not found: ${mainCmd}. Type 'help' for available commands.`,
            tone: "error",
          },
        ];
    }

    setHistory((prev) => [...prev, { command: trimmed, output, isHelpMenu: isHelp }]);
    setInputVal("");
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.metaKey || e.ctrlKey) {
      if (e.key.toLowerCase() === "k" || e.key.toLowerCase() === "l") {
        e.preventDefault();
        executeCommand("clear");
      }
      return;
    }

    if (isMenuOpen && !inputVal) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setMenuIndex((prev) => (prev <= 0 ? menuItems.length - 1 : prev - 1));
        return;
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setMenuIndex((prev) => (prev >= menuItems.length - 1 ? 0 : prev + 1));
        return;
      } else if (e.key === "Enter") {
        e.preventDefault();
        executeCommand(menuItems[menuIndex].id);
        return;
      }
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (inputVal.trim()) {
        executeCommand(inputVal);
      } else if (isMenuOpen) {
        executeCommand(menuItems[menuIndex].id);
      }
    } else if (e.key === "Backspace") {
      e.preventDefault();
      setInputVal((prev) => prev.slice(0, -1));
    } else if (e.key === "Tab") {
      e.preventDefault();
      const valid = menuItems.map((m) => m.id);
      const match = valid.find((c) => c.startsWith(inputVal.toLowerCase().trim()));
      if (match) setInputVal(match);
    } else if (e.key === "Escape") {
      setInputVal("");
      setIsMenuOpen(false);
    } else if (e.key.length === 1) {
      // Normal character typing
      e.preventDefault();
      setInputVal((prev) => prev + e.key);
    }
  };

  const handleQuickCmd = (cmd: string) => {
    executeCommand(cmd);
    containerRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={`terminal-window ${isMatrixMode ? "terminal-matrix" : ""} ${isFocused ? "terminal-active-focus" : ""}`}
      role="region"
      aria-label={label}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      onClick={() => containerRef.current?.focus()}
    >
      <div className="terminal-toolbar" aria-hidden="true">
        <div className="terminal-controls">
          <span className="terminal-control terminal-control-close" onClick={() => executeCommand("clear")} />
          <span className="terminal-control terminal-control-minimize" />
          <span className="terminal-control terminal-control-expand" />
        </div>
        <span className="terminal-title">gokay — zsh (interactive)</span>
        <span className="terminal-location">~/portfolio</span>
      </div>

      <div className="terminal-body" ref={bodyRef}>
        <div className="terminal-context">
          <span>Session: active on ttys001</span>
          <span>portfolio interactive session</span>
        </div>

        {/* Initial automatic whoami */}
        <div className="terminal-command-line">
          <span className="terminal-user">gokay@portfolio</span>
          <span className="terminal-path">~</span>
          <span className="terminal-prompt">%</span>
          <span className="terminal-command">{typedCommand}</span>
          {!isInitialDone && <span className="terminal-cursor" />}
        </div>

        <div className="terminal-output">
          {initialOutput.slice(0, initialLinesVisible).map((line, index) => (
            <div
              className={`terminal-output-line terminal-output-${line.tone || "strong"}`}
              key={`initial-${index}`}
              style={{ "--line-index": index } as React.CSSProperties}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Command history output */}
        {history.map((item, idx) => (
          <div key={`history-${idx}`} className="terminal-history-item">
            <div className="terminal-command-line">
              <span className="terminal-user">gokay@portfolio</span>
              <span className="terminal-path">~</span>
              <span className="terminal-prompt">%</span>
              <span className="terminal-command">{item.command}</span>
            </div>
            <div className="terminal-output">
              {item.output.map((line, lineIdx) => (
                <div
                  key={`line-${idx}-${lineIdx}`}
                  className={`terminal-output-line terminal-output-${line.tone || "strong"}`}
                >
                  {line.text}
                </div>
              ))}

              {/* Render interactive menu inside help output if this was the last help command */}
              {item.isHelpMenu && (
                <div className="terminal-interactive-menu" role="menu">
                  {menuItems.map((mItem, mIdx) => {
                    const isSelected = isMenuOpen && idx === history.length - 1 && menuIndex === mIdx;
                    return (
                      <div
                        key={mItem.id}
                        role="menuitem"
                        className={`terminal-menu-row ${isSelected ? "is-selected" : ""} ${mItem.isMatrix ? "is-matrix-row" : ""}`}
                        onMouseEnter={() => {
                          setIsMenuOpen(true);
                          setMenuIndex(mIdx);
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          executeCommand(mItem.id);
                          containerRef.current?.focus();
                        }}
                      >
                        <span className="menu-pointer">{isSelected ? "❯" : " "}</span>
                        <span className="menu-cmd-name">{mItem.label}</span>
                        <span className="menu-cmd-desc">{mItem.desc}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Active interactive prompt */}
        {isInitialDone && (
          <div className="terminal-interactive-line">
            <span className="terminal-user">gokay@portfolio</span>
            <span className="terminal-path">~</span>
            <span className="terminal-prompt">%</span>
            <span className="terminal-live-text">
              {inputVal ? (
                <span className="terminal-command-typed">{inputVal}</span>
              ) : (
                <span className="terminal-hint-placeholder">
                  {isMenuOpen
                    ? isTr ? "↑↓ ile gezin, Enter veya tıkla çalıştır" : "use ↑↓ to select, Enter or click to run"
                    : isFocused
                    ? isTr ? "komut yazın (örn: help)" : "type a command (e.g. help)"
                    : isTr ? "tıklayın veya komut yazın (örn: help)" : "click or type command (e.g. help)"}
                </span>
              )}
            </span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>

      {/* Terminal Quick Command Chips */}
      {isInitialDone && (
        <div className="terminal-quick-bar" aria-label="Quick commands">
          {["help", "projects", "exp", "contact", "cv", "matrix", "clear"].map((cmd) => (
            <button
              key={cmd}
              type="button"
              className={`terminal-chip ${cmd === "matrix" ? "terminal-chip-matrix" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleQuickCmd(cmd);
              }}
            >
              {cmd}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
