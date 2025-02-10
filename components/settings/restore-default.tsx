"use client";

import { useSettings } from "@/contexts/settings-context";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Monitor } from "lucide-react";

const toggleItemClasses =
  " bg-zinc-800 px-2 py-1.5 text-xs font-medium transition-all hover:ring-1 hover:ring-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-300 text-zinc-200 data-[state=on]:bg-zinc-200 data-[state=on]:text-zinc-800 data-[state=on]:shadow-sm cursor-pointer grow";

export default function RestoreDefault() {
  const { setIntent, intent, isGenerating } = useSettings();

  return (
    <div className="flex justify-center">
      <ToggleGroup.Root
        className="inline-flex bg-zinc-800 border border-zinc-700 shadow-inner space-x-1 w-full flex-grow"
        type="single"
        value={intent}
        onValueChange={(value: string | undefined) => {
          if (value) setIntent("default");
        }}
        aria-label="Restore default style"
        disabled={isGenerating}
      >
        <ToggleGroup.Item
          value="default"
          className={toggleItemClasses}
          aria-label="Default style"
        >
          <Monitor className="w-3 h-3 mr-2 inline" />
          Default
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
