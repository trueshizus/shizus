"use client";

import { CVIntent, useSettings } from "@/contexts/settings-context";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Minimize2, Monitor, Palette, Zap } from "lucide-react";

const intentConfig = {
  default: { icon: Monitor, label: "Default" },
  formal: { icon: Zap, label: "Formal" },
  short: { icon: Minimize2, label: "Short" },
  artistic: { icon: Palette, label: "Artistic" },
} as const;

const toggleItemClasses =
  "rounded-full bg-zinc-900 px-2 py-1.5 text-xs font-medium transition-all hover:ring-1 hover:ring-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-300 text-zinc-200 data-[state=on]:bg-zinc-200 data-[state=on]:text-zinc-800 data-[state=on]:shadow-sm cursor-pointer";

export default function SettingsIntent() {
  const { intent, setIntent, isGenerating } = useSettings();

  return (
    <div className="flex justify-center mt-6">
      <ToggleGroup.Root
        className="inline-flex rounded-full bg-zinc-800 p-1 shadow-inner space-x-1"
        type="single"
        value={intent}
        onValueChange={(value: string | undefined) => {
          if (value) setIntent(value as CVIntent);
        }}
        aria-label="Select CV style"
        disabled={isGenerating}
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
