"use client";
import { useCVGeneration } from "@/hooks/use-cv-generation";
import { createContext, ReactNode, useContext } from "react";

type SettingsContextType = ReturnType<typeof useCVGeneration>;

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
  const cvGeneration = useCVGeneration(defaultContent);

  return (
    <SettingsContext.Provider value={cvGeneration}>
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
