import { useEffect, useState } from "react";
import { LOCALES, makeT } from "../i18n.js";

const TWEAK_DEFAULTS = {
  theme: "light",
  fontPair: "editorial",
  locale: "en",
  texture: "on",
  density: "airy",
};

const fonts = {
  editorial: { serif: '"Newsreader", "Source Serif 4", Georgia, serif', sans: '"Inter Tight", system-ui, sans-serif', mono: '"JetBrains Mono", ui-monospace, monospace' },
  classical: { serif: '"Cormorant Garamond", Georgia, serif', sans: '"Inter Tight", system-ui, sans-serif', mono: '"JetBrains Mono", ui-monospace, monospace' },
  brutal:    { serif: '"Newsreader", Georgia, serif', sans: '"Space Grotesk", system-ui, sans-serif', mono: '"JetBrains Mono", monospace' },
  mono:      { serif: '"JetBrains Mono", monospace', sans: '"JetBrains Mono", monospace', mono: '"JetBrains Mono", monospace' },
};

export function Tweaks({ locale }) {
  const [open, setOpen] = useState(false);
  const [tw, setTw] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("tw") || "{}");
      return { ...TWEAK_DEFAULTS, ...saved };
    } catch { return TWEAK_DEFAULTS; }
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", tw.theme);
    html.setAttribute("data-texture", tw.texture);
    html.setAttribute("data-font", tw.fontPair);
    html.style.setProperty("--density", tw.density === "compact" ? "0.7" : "1");

    const localeMeta = LOCALES.find(l => l.code === tw.locale) || LOCALES[0];
    html.setAttribute("lang", localeMeta.code);
    html.setAttribute("dir", localeMeta.dir);

    const f = fonts[tw.fontPair] || fonts.editorial;
    html.style.setProperty("--serif", f.serif);
    html.style.setProperty("--sans", f.sans);
    html.style.setProperty("--mono", f.mono);

    localStorage.setItem("tw", JSON.stringify(tw));

    window.dispatchEvent(new CustomEvent("tw:change", { detail: tw }));
  }, [tw]);

  const t = makeT(locale);
  const set = (k, v) => setTw(s => ({ ...s, [k]: v }));

  if (!open) {
    return <button className="tweaks-toggle" onClick={() => setOpen(true)}>{t("tweaks_toggle")}</button>;
  }

  return (
    <div className={`tweaks ${open ? "open" : ""}`}>
      <div className="t-head">
        <span>{t("tweaks_title")}</span>
        <span style={{ cursor: "pointer" }} onClick={() => setOpen(false)}>×</span>
      </div>
      <div className="t-body">
        <div className="row">
          <span className="lbl">{t("tweaks_theme")}</span>
          <div className="opts">
            {["light","sepia","dark"].map(x => (
              <button key={x} className={`opt ${tw.theme===x?"on":""}`} onClick={() => set("theme", x)}>{t(x)}</button>
            ))}
          </div>
        </div>
        <div className="row">
          <span className="lbl">{t("tweaks_type")}</span>
          <div className="opts">
            {[["editorial","Editorial"],["classical","Classical"],["brutal","Brutal"],["mono","Mono"]].map(([k,l]) => (
              <button key={k} className={`opt ${tw.fontPair===k?"on":""}`} onClick={() => set("fontPair", k)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="row">
          <span className="lbl">{t("tweaks_language")}</span>
          <div className="opts">
            {LOCALES.map(l => (
              <button key={l.code} className={`opt ${tw.locale===l.code?"on":""}`} onClick={() => set("locale", l.code)}>{l.name}</button>
            ))}
          </div>
        </div>
        <div className="row">
          <span className="lbl">{t("tweaks_density")}</span>
          <div className="opts">
            {["airy","compact"].map(x => (
              <button key={x} className={`opt ${tw.density===x?"on":""}`} onClick={() => set("density", x)}>{t(x)}</button>
            ))}
          </div>
        </div>
        <div className="row">
          <span className="lbl">{t("tweaks_texture")}</span>
          <div className="opts">
            {["on","off"].map(x => (
              <button key={x} className={`opt ${tw.texture===x?"on":""}`} onClick={() => set("texture", x)}>{t(x)}</button>
            ))}
          </div>
        </div>
        <div className="row">
          <span className="lbl">{t("tweaks_shortcuts")}</span>
          <div style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
            {t("shortcuts_detail")}
          </div>
        </div>
      </div>
    </div>
  );
}
