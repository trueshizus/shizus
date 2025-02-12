import {
  IBM_Plex_Serif,
  Indie_Flower,
  Roboto_Mono,
  Source_Sans_3,
  Space_Mono,
} from "next/font/google";

// Initialize fonts at module level
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

export const fonts = {
  "Space Mono": spaceMono,
  "Roboto Mono": robotoMono,
  "Source Sans 3": sourceSans3,
  "IBM Plex Serif": ibmPlexSerif,
  "Indie Flower": indieFlower,
} as const;

export type FontSizes = {
  h1: number;
  h2: number;
  h3: number;
  p: number;
  li: number;
};

export const defaultFontSizes: FontSizes = {
  h1: 20,
  h2: 18,
  h3: 16,
  p: 14,
  li: 14,
};
