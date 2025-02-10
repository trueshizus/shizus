"use client";

import { Toggle } from "@/components/ui/toggle";
import { useSettings } from "@/contexts/settings-context";
import { Monitor } from "lucide-react";

export default function RestoreDefault() {
  const { setIntent, intent, isGenerating } = useSettings();

  return (
    <div className="flex justify-center mt-6 w-full">
      <Toggle
        pressed={intent === "default"}
        onPressedChange={() => setIntent("default")}
        disabled={isGenerating}
        aria-label="Restore default style"
        className="bg-zinc-900 px-2 py-1.5 text-xs font-medium text-zinc-200 hover:ring-1 hover:ring-zinc-200 data-[state=on]:bg-zinc-200 data-[state=on]:text-zinc-800"
      >
        <Monitor className="w-3 h-3 mr-2 inline" />
        Default
      </Toggle>
    </div>
  );
}
