import { getLocale } from "next-intl/server";

// custom
import HomeHeader from "@/components/home/Header";

const HomePage: React.FC = async () => {
  // cookies
  const locale = ((await getLocale()) ?? "en") as App.LanguageCode;

  return (
    <div className="max-w-7xl my-0 mx-auto py-[calc(56px*var(--density))] px-[calc(64px*var(--density))] relative max-[980px]:py-8 max-[980px]:px-5.5">
      <HomeHeader locale={locale} />
    </div>
  );
};

export default HomePage;
