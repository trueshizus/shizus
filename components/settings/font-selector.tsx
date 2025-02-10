import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fonts, useSettings } from "@/contexts/settings-context";

export default function FontSelector() {
  const { selectedFont, setSelectedFont, isGenerating } = useSettings();

  return (
    <Select
      value={selectedFont}
      onValueChange={(value) => setSelectedFont(value as keyof typeof fonts)}
      disabled={isGenerating}
    >
      <SelectTrigger className="w-full bg-zinc-800 border border-zinc-700">
        <SelectValue placeholder="Select Font" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(fonts).map((fontName) => (
          <SelectItem key={fontName} value={fontName}>
            {fontName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
