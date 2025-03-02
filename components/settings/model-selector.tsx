"use client";

import useModel from "@/hooks/useModel";
import { ModelOptions } from "@/lib/cv-gen-prompt";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Bot, Globe, Sparkles } from "lucide-react";

const modelConfig = {
  openai: { icon: Sparkles, label: "OpenAI" },
  google: { icon: Bot, label: "Gemini" },
  deepseek: { icon: Globe, label: "DeepSeek" },
} as const;

type ModelConfig = keyof typeof modelConfig;

const toggleItemClasses =
  " bg-zinc-800 px-2 py-1.5 text-xs font-medium transition-all hover:ring-1 hover:ring-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-300 text-zinc-200 data-[state=on]:bg-zinc-200 data-[state=on]:text-zinc-800 data-[state=on]:shadow-sm cursor-pointer grow h-8";

type Props = {
  disabled: boolean;
};

export default function ModelSelector({ disabled }: Props) {
  const [model, setModel] = useModel();

  return (
    <div className="flex justify-center ">
      <ToggleGroup.Root
        className="inline-flex bg-zinc-800 border border-zinc-700 shadow-inner space-x-1 w-full flex-grow"
        type="single"
        value={model}
        disabled={disabled}
        onValueChange={(value: string | undefined) => {
          if (value) setModel(value as ModelOptions);
        }}
        aria-label="Select AI model"
      >
        {(
          Object.entries(modelConfig) as [
            ModelOptions,
            (typeof modelConfig)[ModelConfig]
          ][]
        ).map(([value, { icon: Icon, label }]) => (
          <ToggleGroup.Item
            key={value}
            value={value}
            className={toggleItemClasses}
            aria-label={`${label} model`}
            disabled={disabled}
          >
            <Icon className="w-3 h-3 mr-2 inline" />
            {label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
}
