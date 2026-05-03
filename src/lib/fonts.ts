import { Cormorant_Garamond, Inter_Tight, JetBrains_Mono, Newsreader, Space_Grotesk } from 'next/font/google';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-newsreader',
});

const newsreaderItalic = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['italic'],
  display: 'swap',
  variable: '--font-newsreader-italic',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter-tight',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const fonts = { newsreader, newsreaderItalic, interTight, jetbrainsMono, cormorant, spaceGrotesk };

export default fonts;