import deepmerge from "deepmerge";

// custom
import { getUserLocale } from "@/lib/actions";

const getRequestConfig = async () => {
  // actions
  const locale = await getUserLocale();

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