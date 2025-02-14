"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useIntent from "@/hooks/useIntent";
import useModel from "@/hooks/useModel";
import { StyleOptions } from "@/lib/cv-gen-prompt";

const styles: Record<StyleOptions, string> = {
  short: "Short & Concise",
  artistic: "Modern & Creative",
  formal: "Formal & Professional",
};

type Props = {
  disabled: boolean;
};

export default function StyleSelector({ disabled }: Props) {
  const [intent, setIntent] = useIntent();
  const [model] = useModel();

  return (
    <div className="space-y-1">
      <Select
        value={intent}
        onValueChange={(value: StyleOptions) => setIntent(value)}
        disabled={model === "none" || disabled}
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
