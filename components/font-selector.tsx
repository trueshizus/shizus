import { fonts, useSettings } from "@/contexts/settings-context";

export default function FontSelector() {
  const { selectedFont, setSelectedFont, isGenerating } = useSettings();

  return (
    <select
      id="font-select"
      value={selectedFont}
      onChange={(e) => setSelectedFont(e.target.value as keyof typeof fonts)}
      className="w-full bg-zinc-800 border border-zinc-700 px-2 py-1 text-sm"
      disabled={isGenerating}
    >
      {Object.keys(fonts).map((fontName) => (
        <option key={fontName} value={fontName}>
          {fontName}
        </option>
      ))}
    </select>
  );
}
