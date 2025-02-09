"use client";

import { CVIntent, useSettings } from "@/contexts/settings-context";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Minimize2, Monitor, Sparkles, Zap } from "lucide-react";

const intentConfig = {
  default: { icon: Monitor, label: "Default" },
  formal: { icon: Zap, label: "Formal" },
  short: { icon: Minimize2, label: "Short" },
  "gen-z": { icon: Sparkles, label: "Gen Z" },
} as const;

const toggleItemClasses =
  "rounded-full px-4 py-2 text-sm font-medium transition-all hover:ring-2 hover:ring-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 text-white data-[state=on]:bg-white data-[state=on]:text-zinc-800 data-[state=on]:shadow-sm";

export default function SettingsIntent({ content }: { content: string }) {
  const { intent, setIntent } = useSettings();

  return (
    <div className="flex justify-center mt-6">
      <ToggleGroup.Root
        className="inline-flex rounded-full bg-zinc-800 p-1 shadow-inner"
        type="single"
        value={intent}
        onValueChange={(value: string | undefined) => {
          if (value) setIntent(value as CVIntent, content);
        }}
        aria-label="Select CV style"
      >
        {(
          Object.entries(intentConfig) as [
            CVIntent,
            (typeof intentConfig)[keyof typeof intentConfig]
          ][]
        ).map(([value, { icon: Icon, label }]) => (
          <ToggleGroup.Item
            key={value}
            value={value}
            className={toggleItemClasses}
            aria-label={`${label} style`}
          >
            <Icon className="w-3 h-3 mr-2 inline" />
            {label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
}
