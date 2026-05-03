import { useTranslations } from "next-intl";

const HomeHeader: React.FC<HomeHeaderProps> = ({ locale }) => {
  // hooks
  const t = useTranslations("header");

  // local variables
  const today = new Date("05/11/2002")
    .toLocaleDateString(locale === "en" ? "en-US" : locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .toUpperCase();

  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-end gap-6 pb-5.5 border-b-2 border-(--rule) relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:border-b after:border-(--rule)">
      {/* left */}
      <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-(--ink-3)">
        <div>{t("left-issue")}</div>
        <div>{today}</div>
      </div>
      {/* center */}
      <div>
        <h1 className="font-serif font-medium italic text-[clamp(44px,7.5vw,92px)] leading-[0.95] tracking-[-0.02em] m-0 text-center whitespace-nowrap max-[980px]:whitespace-normal">
          Suraj Vijayan
        </h1>
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-(--ink-2) text-center mt-4.5 pt-2.5 border-t border-(--rule-soft)">
          {t('center-sub-title')}
        </div>
      </div>
      {/* right */}
      <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-(--ink-3) text-right">
        <div>{t('right-location')}</div>
        <div>{t('right-location-subtitle')}</div>
      </div>
    </header>
  );
};

export default HomeHeader;

interface HomeHeaderProps {
  locale: App.LanguageCode;
}
