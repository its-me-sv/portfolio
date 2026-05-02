"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// custom
import { COOKIES_NAMES } from "@/data/app";

// navigating on client side using
// server side redirect
export const navigate = async (path: string) => redirect(path);

// getting locale per user from their cookies
export const getUserLocale = async () => {
  return (await cookies()).get(COOKIES_NAMES.language)?.value || "en";
};

// setting user locale on to their device cookies
export const setUserLocale = async (locale: LanguageCode) => {
  (await cookies()).set(COOKIES_NAMES.language, locale);
};