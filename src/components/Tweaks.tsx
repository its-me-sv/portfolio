"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

// custom
import { cn } from "@/lib/utils";
import { setCookie } from "@/lib/actions";
import { COOKIES_NAMES } from "@/data/app";
import { DENSITY, FONT_PAIRINGS, FONT_PAIRS, LOCALES, THEMES } from "@/data/components";

const Tweaks: React.FC<TweaksProps> = ({
  font: initialFont,
  theme: initialTheme,
  locale: initialLocale,
  density: initialDensity,
}) => {
  // hooks
  const t = useTranslations("tweaks");

  // states
  const [open, setOpen] = useState(true);
  const [font, setFont] = useState<App.Font>(initialFont);
  const [theme, setTheme] = useState<App.Theme>(initialTheme);
  const [locale, setLocale] = useState<App.LanguageCode>(initialLocale);
  const [density, setDensity] = useState<App.Density>(initialDensity);

  // update theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setCookie(COOKIES_NAMES.theme, theme);
  }, [theme]);

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

  // update locale
  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute(
      "dir",
      LOCALES.find((l) => l.code === locale)?.dir ?? "ltr",
    );
    setCookie(COOKIES_NAMES.language, locale);
  }, [locale]);

  // update density
  useEffect(() => {
    const html = document.documentElement;
    html.style.setProperty("--density", density === "compact" ? "0.7" : "1");
    setCookie(COOKIES_NAMES.density, density);
  }, [density]);

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
          X
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
                key={th.code}
                value={th.code}
                label={th.label}
                setValue={setTheme}
                isActive={th.code === theme}
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
                setValue={setFont}
                isActive={value === font}
              />
            ))}
          </div>
        </div>
        {/* language */}
        <div className="grid gap-1">
          <TweakTitle title={t("language")} />
          <div className="flex flex-wrap gap-1">
            {LOCALES.map((l) => (
              <TweakOption
                key={l.code}
                value={l.code}
                label={l.name}
                isActive={l.code === locale}
                setValue={setLocale}
              />
            ))}
          </div>
        </div>
        {/* density */}
        <div className="grid gap-1">
          <TweakTitle title={t("density")} />
          <div className="flex flex-wrap gap-1">
            {DENSITY.map((d) => (
              <TweakOption
                key={d.code}
                value={d.code}
                label={d.label}
                setValue={setDensity}
                isActive={d.code === density}
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
  locale: App.LanguageCode;
  density: App.Density;
}

const TweakTitle: React.FC<TweakTitleProps> = ({ title }) => (
  <span className="text-[9.5px] text(--ink-3) tracking-[0.14em] uppercase">
    {title}
  </span>
);

interface TweakTitleProps {
  title: string;
}

const TweakOption = <T,>({
  value,
  label,
  setValue,
  isActive,
}: TweakOptionProps<T>) => (
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

interface TweakOptionProps<T> {
  value: T;
  label: string;
  setValue: ((value: T) => void) | React.Dispatch<React.SetStateAction<T>>;
  isActive: boolean;
}
