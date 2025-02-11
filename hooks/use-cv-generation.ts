"use client";
import { useCompletion } from "@ai-sdk/react";
import { useState } from "react";

export type CVIntent = "default" | "formal" | "short" | "artistic";
export type AIProvider = "openai" | "google";

export function useCVGeneration(defaultContent: string) {
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

  const generateCV = async (newIntent: CVIntent) => {
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
      throw error; // Re-throw to allow handling by the UI
    }
  };

  return {
    intent,
    generateCV,
    isGenerating: isLoading,
    provider,
    setProvider,
    content:
      intent === "default" ? defaultContent : completion ?? defaultContent,
  };
}
