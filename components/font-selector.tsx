import { fonts, useFont } from "@/contexts/settings-context";

export default function FontSelector() {
  const { selectedFont, setSelectedFont } = useFont();

  return (
    <select
      id="font-select"
      value={selectedFont}
      onChange={(e) => setSelectedFont(e.target.value as keyof typeof fonts)}
      className="w-full bg-zinc-800 border border-zinc-700 px-2 py-1 text-sm"
    >
      {Object.keys(fonts).map((fontName) => (
        <option key={fontName} value={fontName}>
          {fontName}
        </option>
      ))}
    </select>
  );
}
