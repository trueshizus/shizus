"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CVIntent } from "@/hooks/use-cv-generation";
import { useQueryState } from "nuqs";

const styles: Record<CVIntent, string> = {
  default: "Default",
  short: "Short & Concise",
  artistic: "Modern & Creative",
  formal: "Formal & Professional",
};

export default function StyleSelector() {
  const [intent, setIntent] = useQueryState<CVIntent>("intent", {
    defaultValue: "default",
    parse: (value): CVIntent => value as CVIntent,
    serialize: (value) => value,
  });

  return (
    <div className="space-y-1">
      <Select
        value={intent}
        onValueChange={(value) => setIntent(value as CVIntent)}
        // disabled={isGenerating}
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
