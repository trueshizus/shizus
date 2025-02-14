"use client";

import useFont from "@/hooks/useFont";
import useFontSizes from "@/hooks/useFontSizes";
import useModel from "@/hooks/useModel";
import { defaultFontSizes, fonts } from "@/lib/fonts";
import { Monitor } from "lucide-react";

export default function RestoreDefault() {
  const [selectedFont, setSelectedFont] = useFont();
  const [fontSizes, setFontSizes] = useFontSizes();
  const [model, setModel] = useModel();

  const handleRestore = () => {
    setSelectedFont("Space Mono" as keyof typeof fonts);
    setFontSizes(defaultFontSizes);
    setModel("none");
  };

  const isDefault =
    selectedFont === "Space Mono" &&
    fontSizes === defaultFontSizes &&
    model === "none";

  return (
    <div className="flex justify-center align-baseline">
      <button
        onClick={handleRestore}
        disabled={isDefault}
        className="w-full bg-zinc-800 px-2 py-2 text-xs font-medium transition-all hover:ring-1 hover:ring-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-300 text-zinc-200 hover:bg-zinc-700 border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed h-8"
      >
        <Monitor className="w-3 h-3 mr-2 inline" />
        Restore default
      </button>
    </div>
  );
}
