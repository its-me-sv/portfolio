export {};

declare global {
  namespace App {
    type LanguageCode = "en" | "es" | "nl" | "zh" | "ta" | "ar";
    type Language = { code: LanguageCode; name: string; dir: "ltr" | "rtl" };
    type Theme = "light" | "sepia" | "dark";
    type Font = "editorial" | "classical" | "brutal" | "mono";
  }
}