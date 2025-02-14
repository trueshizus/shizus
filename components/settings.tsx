"use client";

import Portal from "@/components/portal";
import Terminal from "@/components/terminal";
import useIntent from "@/hooks/useIntent";
import useModel from "@/hooks/useModel";
import { Dispatch, SetStateAction, useState } from "react";
import AISettingsSection from "./settings/ai-settings-section";
import FontSettingsSection from "./settings/font-settings-section";
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
              <div className="min-w-[200px]">
                <FontSettingsSection disabled={isLoading} />
                <AISettingsSection
                  disabled={isLoading}
                  provider={provider}
                  style={style}
                  setIsLoading={setIsLoading}
                  setGeneration={setGeneration}
                />
                <RestoreDefault disabled={isLoading} />
              </div>
            </Terminal>
          </div>
        </Portal>
      )}
    </>
  );
}
