"use client";

import { generate } from "@/actions/generate-cv";
import Portal from "@/components/portal";
import FontSizeSelector from "@/components/settings/font-size-selector";
import StyleSelector from "@/components/settings/style-selector";
import Terminal from "@/components/terminal";
import useIntent from "@/hooks/useIntent";
import useModel from "@/hooks/useModel";
import { readStreamableValue } from "ai/rsc";
import { Dispatch, SetStateAction, useState } from "react";
import FontSelector from "./settings/font-selector";
import ModelSelector from "./settings/model-selector";
import RestoreDefault from "./settings/restore-default";

type Props = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setGeneration: Dispatch<SetStateAction<string>>;
};

export default function Settings({
  isLoading,
  setIsLoading,
  setGeneration,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const [provider] = useModel();
  const [style] = useIntent();

  return (
    <>
      <button
        type="button"
        aria-label="Settings"
        title="Settings"
        className="items-center justify-center w-4 h-4 text-zinc-900 text-xs hover:bg-zinc-500 hidden md:flex"
        onClick={() => setIsOpen(true)}
      >
        ⚙
      </button>

      {isOpen && (
        <Portal>
          <div className="absolute z-50">
            <Terminal
              title="Settings"
              defaultPosition={{ x: 50, y: 100 }}
              handleClass="settings-handle"
              actions={
                <button
                  aria-label="Close"
                  title="Close"
                  className="flex items-center justify-center w-4 h-4 text-zinc-900 text-xs hover:bg-zinc-500"
                  onClick={() => setIsOpen(false)}
                >
                  x
                </button>
              }
            >
              {isLoading && <span>Generating...</span>}
              <div className="min-w-[200px]">
                <section className="flex flex-col gap-2.5 p-2">
                  <h3 className="text-sm font-medium text-center">
                    Font & Sizes
                  </h3>
                  <FontSelector />
                  <FontSizeSelector />
                </section>

                <section className="flex flex-col gap-2.5  p-2">
                  <h3 className="text-sm font-medium text-center">
                    AI Customization
                  </h3>
                  <ModelSelector />

                  <StyleSelector />

                  <button
                    disabled={provider === "none"}
                    className="w-full bg-zinc-800 px-2 py-2 text-xs font-medium transition-all hover:ring-1 hover:ring-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-300 text-zinc-200 hover:bg-zinc-700 border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed h-8"
                    onClick={async () => {
                      if (provider === "none") return;
                      setIsLoading(true);
                      setGeneration("");
                      const { output } = await generate(provider, style);

                      for await (const delta of readStreamableValue(output)) {
                        setGeneration(
                          (currentGeneration) => `${currentGeneration}${delta}`
                        );
                      }
                      setIsLoading(false);
                    }}
                  >
                    Generate
                  </button>
                </section>

                <section className="flex flex-col gap-2.5 p-2">
                  <RestoreDefault />
                </section>
              </div>
            </Terminal>
          </div>
        </Portal>
      )}
    </>
  );
}
