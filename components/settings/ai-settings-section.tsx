import { generate } from "@/actions/generate-cv";
import { ModelOptions, StyleOptions } from "@/lib/cv-gen-prompt";
import { readStreamableValue } from "ai/rsc";
import { Dispatch, SetStateAction, useCallback } from "react";
import ModelSelector from "./model-selector";
import StyleSelector from "./style-selector";

type Props = {
  provider: ModelOptions;
  style: StyleOptions;
  disabled: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setGeneration: Dispatch<SetStateAction<string>>;
};

export default function AISettingsSection({
  provider,
  style,
  disabled,
  setIsLoading,
  setGeneration,
}: Props) {
  const handleGenerate = useCallback(async () => {
    if (provider === "none") return;
    setIsLoading(true);
    setGeneration("");
    const { output } = await generate(provider, style);
    for await (const delta of readStreamableValue(output)) {
      setGeneration((current) => `${current}${delta}`);
    }
    setIsLoading(false);
  }, [provider, style, setIsLoading, setGeneration]);

  return (
    <section className="flex flex-col gap-2.5 p-2">
      <h3 className="text-sm font-medium text-center">AI Customization</h3>
      <ModelSelector disabled={disabled} />
      <StyleSelector disabled={disabled} />
      <button
        disabled={provider === "none" || disabled}
        className="w-full bg-zinc-800 px-2 py-2 text-xs font-medium transition-all hover:ring-1 hover:ring-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-300 text-zinc-200 hover:bg-zinc-700 border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed h-8"
        onClick={handleGenerate}
      >
        Generate
      </button>
    </section>
  );
}
