export const THEMES: { code: App.Theme, label: string }[] = [{ code: "light", label: "Light" }, { code: "dark", label: "Dark" }, { code: "sepia", label: "Sepia" }];

export const FONT_PAIRINGS: [App.Font, string][] = [["editorial", "Editorial"], ["classical", "Classical"], ["brutal", "Brutal"], ["mono", "Mono"]];

export const FONT_PAIRS: Record<App.Font, { serif: string; sans: string; mono: string }> = {
    editorial: { serif: 'var(--font-newsreader), "Source Serif 4", Georgia, serif', sans: 'var(--font-inter-tight), system-ui, sans-serif', mono: 'var(--font-jetbrains-mono), ui-monospace, monospace' },
    classical: { serif: 'var(--font-cormorant), Georgia, serif', sans: 'var(--font-inter-tight), system-ui, sans-serif', mono: 'var(--font-jetbrains-mono), ui-monospace, monospace' },
    brutal: { serif: 'var(--font-newsreader), Georgia, serif', sans: 'var(--font-space-grotesk), system-ui, sans-serif', mono: 'var(--font-jetbrains-mono), monospace' },
    mono: { serif: 'var(--font-jetbrains-mono), monospace', sans: 'var(--font-jetbrains-mono), monospace', mono: 'var(--font-jetbrains-mono), monospace' },
};

export const LOCALES: App.Language[] = [
    { code: "en", name: "English", dir: "ltr" },
    { code: "es", name: "Español", dir: "ltr" },
    { code: "nl", name: "Nederlands", dir: "ltr" },
    { code: "zh", name: "中文", dir: "ltr" },
    { code: "ta", name: "தமிழ்", dir: "ltr" },
    { code: "ar", name: "العربية", dir: "rtl" },
];

export const DENSITY: { code: App.Density, label: string }[] = [{ code: "airy", label: "Airy" }, { code: "compact", label: "Compact" }];
