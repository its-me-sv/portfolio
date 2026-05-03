"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

// custom
import { cn } from "@/lib/utils";
import { setCookie } from "@/lib/actions";
import { COOKIES_NAMES, THEMES } from "@/data/app";
import { FONT_PAIRINGS, FONT_PAIRS } from "@/data/components";

const Tweaks: React.FC<TweaksProps> = ({ font: initialFont, theme: initialTheme }) => {
  // hooks
  const t = useTranslations("tweaks");

  // states
  const [open, setOpen] = useState(true);
  const [font, setFont] = useState<App.Font>(initialFont);
  const [theme, setTheme] = useState<App.Theme>(initialTheme);

  // update fonts
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-font", font);
    const f = FONT_PAIRS[font] ?? FONT_PAIRS.editorial;
    html.style.setProperty("--serif", f.serif);
    html.style.setProperty("--sans", f.sans);
    html.style.setProperty("--mono", f.mono);
    setCookie(COOKIES_NAMES.font, font);
  }, [font]);

  // update theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setCookie(COOKIES_NAMES.theme, theme);
  }, [theme]);

  if (!open) {
    return (
      <button
        className="fixed bottom-4 right-4 z-91 font-mono text-[10px] tracking-[0.18em] uppercase py-2 px-3 bg-(--ink) text-(--paper) border-none cursor-pointer shadow-[3px_3px_0_var(--rule-soft)]"
        onClick={() => setOpen(true)}
      >
        {t("toggle")}
      </button>
    );
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 w-64 bg-(--paper-2) border border-(--rule) shadow-[4px_4px_0_var(--rule)] z-90 font-mono text-[11px] transition-transform duration-240 translate-y-5 opacity-0 pointer-events-none",
        open && "transform-none opacity-[1] pointer-events-auto",
      )}
    >
      {/* header */}
      <div className="py-2 px-3 border-b border-(--rule) flex justify-between items-center tracking-[0.18em] uppercase text-[10px]">
        <span>{t("title")}</span>
        <span className="cursor-pointer" onClick={() => setOpen(false)}>
          ×
        </span>
      </div>
      {/* tweaks */}
      <div className="py-2.5 px-3 grid gap-2.5">
        {/* theme */}
        <div className="grid gap-1">
          <TweakTitle title={t("theme")} />
          <div className="flex flex-wrap gap-1">
            {THEMES.map((th) => (
              <TweakOption
                key={th}
                value={th}
                label={th}
                setValue={(v) => setTheme(v as App.Theme)}
                isActive={th === theme}
              />
            ))}
          </div>
        </div>
        {/* fonts */}
        <div className="grid gap-1">
          <TweakTitle title={t("type-pairing")} />
          <div className="flex flex-wrap gap-1">
            {FONT_PAIRINGS.map(([value, label]) => (
              <TweakOption
                key={value}
                value={value}
                label={label}
                setValue={(v) => setFont(v as App.Font)}
                isActive={value === font}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweaks;

interface TweaksProps {
  font: App.Font;
  theme: App.Theme;
}

const TweakTitle: React.FC<TweakTitleProps> = ({ title }) => (
  <span className="text-[9.5px] text(--ink-3) tracking-[0.14em] uppercase">
    {title}
  </span>
);

interface TweakTitleProps {
  title: string;
}

const TweakOption: React.FC<TweakOptionProps> = ({
  value,
  label,
  setValue,
  isActive,
}) => (
  <button
    className={cn(
      "py-0.75 px-2 border border-(--rule-soft) bg-transparent color-(--ink-2) font-mono text-[10px] cursor-pointer tracking-[0.04em]",
      isActive && "bg-(--ink) text-(--paper) border-(--ink)",
    )}
    onClick={() => setValue(value)}
  >
    {label}
  </button>
);

interface TweakOptionProps {
  value: string;
  label: string;
  setValue: (value: string) => void;
  isActive: boolean;
}
