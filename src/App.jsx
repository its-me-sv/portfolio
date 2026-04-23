import { useEffect, useMemo, useState } from "react";
import { resume } from "./data.js";
import { localize, makeT } from "./i18n.js";
import { Highlighter } from "./components/Highlighter.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { MainColumn } from "./components/MainColumn.jsx";
import { Tweaks } from "./components/Tweaks.jsx";
import { CmdK } from "./components/CmdK.jsx";

export default function App() {
  const [activeSkills, setActiveSkills] = useState(new Set());
  const [locale, setLocale] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("tw") || "{}");
      return saved.locale || "en";
    } catch { return "en"; }
  });

  useEffect(() => {
    const onTw = (ev) => {
      if (ev.detail.locale) setLocale(ev.detail.locale);
    };
    window.addEventListener("tw:change", onTw);
    return () => window.removeEventListener("tw:change", onTw);
  }, []);

  const data = useMemo(() => localize(resume, locale), [locale]);
  const t = useMemo(() => makeT(locale), [locale]);

  const toggleSkill = (s) => {
    setActiveSkills(prev => {
      const n = new Set(prev);
      n.has(s) ? n.delete(s) : n.add(s);
      return n;
    });
  };
  const clearSkills = () => setActiveSkills(new Set());

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "-40px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [locale]);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: "smooth" });
  };

  const today = new Date().toLocaleDateString(locale === "en" ? "en-US" : locale, {
    year: "numeric", month: "short", day: "numeric",
  }).toUpperCase();

  return (
    <>
      <Highlighter />
      <div className="watermark" aria-hidden="true">
        <span>{data.name}</span>
      </div>
      <div className="page">
        <header className="mast">
          <div className="mast-left">
            <div>{t("masthead_issue")}</div>
            <div>{today}</div>
          </div>
          <div className="mast-center">
            <h1>{data.name}</h1>
            <div className="subtitle">{t("masthead_subtitle")}</div>
          </div>
          <div className="mast-right">
            <div>{t("masthead_location")}</div>
            <div>{t("masthead_shortcut")}</div>
          </div>
        </header>

        <div className="grid">
          <Sidebar
            data={data}
            t={t}
            activeSkills={activeSkills}
            toggleSkill={toggleSkill}
            clearSkills={clearSkills}
          />
          <MainColumn
            data={data}
            t={t}
            activeSkills={activeSkills}
          />
        </div>

        <footer className="footer">
          <div>© {new Date().getFullYear()} · {t("footer_set_in")}</div>
          <div className="footer-mid">{t("footer_thanks")}</div>
          <div style={{ textAlign: "right" }}>
            <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a> · <a href={`https://github.com/${data.contact.github}`} target="_blank" rel="noreferrer">github</a> · <a href={`https://linkedin.com/in/${data.contact.linkedin}`} target="_blank" rel="noreferrer">linkedin</a>
          </div>
        </footer>
      </div>

      <CmdK data={data} t={t} onJump={jump} />
      <Tweaks locale={locale} />
    </>
  );
}
