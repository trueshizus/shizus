"use client";
import { createContext, ReactNode, useContext, useState } from "react";

import {
  IBM_Plex_Serif,
  Indie_Flower,
  Roboto_Mono,
  Source_Sans_3,
  Space_Mono,
} from "next/font/google";

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

export type CVIntent = "default" | "formal" | "short" | "gen-z";

type FontContextType = {
  selectedFont: keyof typeof fonts;
  setSelectedFont: (font: keyof typeof fonts) => void;
  currentFont: (typeof fonts)[keyof typeof fonts];
  fontSizes: FontSizes;
  setFontSize: (element: keyof FontSizes, size: number) => void;
  intent: CVIntent;
  setIntent: (intent: CVIntent) => void;
};

const defaultFontSizes: FontSizes = {
  h1: 20,
  h2: 18,
  h3: 16,
  p: 14,
  li: 14,
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: ReactNode }) {
  const [selectedFont, setSelectedFont] =
    useState<keyof typeof fonts>("Space Mono");
  const [fontSizes, setFontSizes] = useState<FontSizes>(defaultFontSizes);
  const [intent, setIntent] = useState<CVIntent>("default");

  const setFontSize = (element: keyof FontSizes, size: number) => {
    setFontSizes((prev) => ({
      ...prev,
      [element]: size,
    }));
  };

  return (
    <FontContext.Provider
      value={{
        selectedFont,
        setSelectedFont,
        currentFont: fonts[selectedFont],
        fontSizes,
        setFontSize,
        intent,
        setIntent,
      }}
    >
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
