"use client";

import Portal from "@/components/portal";
import Terminal from "@/components/terminal";
import { fonts, useFont } from "@/contexts/font-context";
import { useState } from "react";
import TextStyler from "./text-styler";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedFont, setSelectedFont } = useFont();

  const calculateInitialPosition = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 };

    const mainTerminal = document.querySelector("#portal-root article");
    if (!mainTerminal) return { x: 0, y: 0 };

    const terminalRect = mainTerminal.getBoundingClientRect();
    const centerX = terminalRect.left - terminalRect.width / 2;
    const centerY = terminalRect.top;

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
                <select
                  id="font-select"
                  value={selectedFont}
                  onChange={(e) =>
                    setSelectedFont(e.target.value as keyof typeof fonts)
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 px-2 py-1 text-sm"
                >
                  {Object.keys(fonts).map((fontName) => (
                    <option key={fontName} value={fontName}>
                      {fontName}
                    </option>
                  ))}
                </select>
                <TextStyler />
              </div>
            </Terminal>
          </div>
        </Portal>
      )}
    </>
  );
}
