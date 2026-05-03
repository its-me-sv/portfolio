// name of the app
export const APP_NAME = "SV-PORTFOLIO";

// cookies names
export const COOKIES_NAMES = {
  language: `${APP_NAME}:languageCode`,
  font: `${APP_NAME}:font`,
  theme: `${APP_NAME}:theme`,
};

export const THEMES: App.Theme[] = ["light", "sepia", "dark"] as const;
