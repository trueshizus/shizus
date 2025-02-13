"use client";

import { defaultFontSizes, fonts, FontSizes } from "@/lib/fonts";
import { Monitor } from "lucide-react";
import { useQueryState } from "nuqs";

export default function RestoreDefault() {
  // const { generateCV, isGenerating } = useSettings();
  const [, setSelectedFont] = useQueryState("font");
  const [, setFontSizes] = useQueryState("fontSizes", {
    defaultValue: defaultFontSizes,
    parse: (value: string) => JSON.parse(value) as FontSizes,
    serialize: (value: FontSizes) => JSON.stringify(value),
  });

  const handleRestore = () => {
    setSelectedFont("Space Mono" as keyof typeof fonts);
    setFontSizes(defaultFontSizes);
    // generateCV("default");
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleRestore}
        // disabled={isGenerating}
        className="w-full bg-zinc-800 px-2 py-1.5 text-xs font-medium transition-all hover:ring-1 hover:ring-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-300 text-zinc-200 hover:bg-zinc-700 border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Monitor className="w-3 h-3 mr-2 inline" />
        Restore default
      </button>
    </div>
  );
}
