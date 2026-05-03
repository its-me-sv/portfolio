import deepmerge from "deepmerge";

// custom
import { getCookie } from "@/lib/actions";
import { COOKIES_NAMES } from "@/data/app";

const getRequestConfig = async () => {
  // actions
  const locale = (await getCookie<App.LanguageCode>(COOKIES_NAMES.language)) ?? "en";

  // local variables
  const localeMessages = (await import(`../../messages/${locale}.json`))
    .default;
  const fallbackMessages = (await import(`../../messages/en.json`)).default;

  return {
    locale,
    messages: deepmerge(fallbackMessages, localeMessages),
  };
};

export default getRequestConfig;