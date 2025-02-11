"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSettings } from "@/contexts/settings-context";
import type { CVIntent } from "@/hooks/use-cv-generation";

const styles: Record<CVIntent, string> = {
  default: "Default",
  short: "Short & Concise",
  artistic: "Modern & Creative",
  formal: "Formal & Professional",
};

export default function StyleSelector() {
  const { intent, generateCV, isGenerating } = useSettings();

  return (
    <div className="space-y-1">
      <Select
        value={intent}
        onValueChange={(value) => generateCV(value as CVIntent)}
        disabled={isGenerating}
      >
        <SelectTrigger className="w-full bg-zinc-800 border border-zinc-700">
          <SelectValue placeholder="Select Style" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(styles).map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
