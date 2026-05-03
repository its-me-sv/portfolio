export {};

declare global {
  namespace App {
    type LanguageCode = "en" | "es" | "nl" | "zh" | "ta" | "ar";
    type Theme = "light" | "sepia" | "dark";
    type Font = "editorial" | "classical" | "brutal" | "mono";
  }
}