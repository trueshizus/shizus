"use client";
import { useCompletion } from "@ai-sdk/react";
import { createContext, ReactNode, useContext, useState } from "react";

export type CVIntent = "default" | "formal" | "short" | "artistic";
export type AIProvider = "openai" | "google";

type SettingsContextType = {
  intent: CVIntent;
  setIntent: (intent: CVIntent) => void;
  isGenerating: boolean;
  provider: AIProvider;
  setProvider: (provider: AIProvider) => void;
  defaultContent: string;
  content: string;
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
  const [intent, setIntentState] = useState<CVIntent>("default");
  const [provider, setProvider] = useState<AIProvider>("openai");

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
