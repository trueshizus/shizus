"use client";

import FontSelector from "@/components/font-selector";
import Portal from "@/components/portal";
import SettingsIntent from "@/components/settings-intent";
import Terminal from "@/components/terminal";
import TextStyler from "@/components/text-styler";
import { useState } from "react";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  const calculateInitialPosition = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 };

    const mainTerminal = document.querySelector("#portal-root article");
    if (!mainTerminal) return { x: 0, y: 0 };

    const terminalRect = mainTerminal.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Position relative to viewport center, accounting for terminal width
    const centerX = viewportWidth / 2 - terminalRect.width / 2;
    const centerY = terminalRect.top + window.scrollY; // Add scroll offset for consistency

    return {
      x: centerX,
      y: centerY,
    };
  };

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
              defaultPosition={calculateInitialPosition()}
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
              <div className="p-4 min-w-[200px] space-y-4">
                <FontSelector />
                <TextStyler />
                <SettingsIntent />
              </div>
            </Terminal>
          </div>
        </Portal>
      )}
    </>
  );
}
