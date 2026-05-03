export const FONT_PAIRINGS: [string, string][] = [["editorial", "Editorial"], ["classical", "Classical"], ["brutal", "Brutal"], ["mono", "Mono"]];

export const FONT_PAIRS = {
    editorial: { serif: 'var(--font-newsreader), "Source Serif 4", Georgia, serif', sans: 'var(--font-inter-tight), system-ui, sans-serif', mono: 'var(--font-jetbrains-mono), ui-monospace, monospace' },
    classical: { serif: 'var(--font-cormorant), Georgia, serif', sans: 'var(--font-inter-tight), system-ui, sans-serif', mono: 'var(--font-jetbrains-mono), ui-monospace, monospace' },
    brutal: { serif: 'var(--font-newsreader), Georgia, serif', sans: 'var(--font-space-grotesk), system-ui, sans-serif', mono: 'var(--font-jetbrains-mono), monospace' },
    mono: { serif: 'var(--font-jetbrains-mono), monospace', sans: 'var(--font-jetbrains-mono), monospace', mono: 'var(--font-jetbrains-mono), monospace' },
};
