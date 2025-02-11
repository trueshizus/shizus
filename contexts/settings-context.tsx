"use client";
import { createContext, ReactNode, useContext, useState } from "react";

import {
  IBM_Plex_Serif,
  Indie_Flower,
  Roboto_Mono,
  Source_Sans_3,
  Space_Mono,
} from "next/font/google";

import { useCompletion } from "@ai-sdk/react";

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

export type CVIntent = "default" | "formal" | "short" | "artistic";
export type AIProvider = "openai" | "google";

type SettingsContextType = {
  selectedFont: keyof typeof fonts;
  setSelectedFont: (font: keyof typeof fonts) => void;
  currentFont: (typeof fonts)[keyof typeof fonts];
  fontSizes: FontSizes;
  setFontSize: (element: keyof FontSizes, size: number) => void;
  intent: CVIntent;
  setIntent: (intent: CVIntent) => void;
  isGenerating: boolean;
  provider: AIProvider;
  setProvider: (provider: AIProvider) => void;
  defaultContent: string;
  content: string;
};

const defaultFontSizes: FontSizes = {
  h1: 20,
  h2: 18,
  h3: 16,
  p: 14,
  li: 14,
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export function SettingsProvider({
  children,
  defaultContent,
}: {
  children: ReactNode;
  defaultContent: string;
}) {
  const [selectedFont, setSelectedFont] =
    useState<keyof typeof fonts>("Space Mono");
  const [fontSizes, setFontSizes] = useState<FontSizes>(defaultFontSizes);
  const [intent, setIntentState] = useState<CVIntent>("default");
  const [provider, setProvider] = useState<AIProvider>("openai");

  const setFontSize = (element: keyof FontSizes, size: number) => {
    setFontSizes((prev) => ({
      ...prev,
      [element]: size,
    }));
  };

  const { completion, complete, isLoading } = useCompletion({
    api: "/api/chat",
    body: {
      markdownCV: defaultContent,
      intent,
      provider,
    },
  });

  const setIntent = async (newIntent: CVIntent) => {
    setIntentState(newIntent);
    if (newIntent === "default") return;

    try {
      await complete("", {
        body: {
          markdownCV: defaultContent,
          intent: newIntent,
          provider,
        },
      });
    } catch (error) {
      console.error("Generation failed:", error);
    }
  };

  const content =
    intent === "default" ? defaultContent : completion ?? defaultContent;

  return (
    <SettingsContext.Provider
      value={{
        selectedFont,
        setSelectedFont,
        currentFont: fonts[selectedFont],
        fontSizes,
        setFontSize,
        intent,
        setIntent,
        isGenerating: isLoading,
        provider,
        setProvider,
        defaultContent,
        content,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
