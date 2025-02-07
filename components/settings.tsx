"use client";

import Portal from "@/components/portal";
import Terminal from "@/components/terminal";
import { useState } from "react";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  const calculateInitialPosition = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 };

    const mainTerminal = document.querySelector("#portal-root article");
    if (!mainTerminal) return { x: 0, y: 0 };

    const terminalRect = mainTerminal.getBoundingClientRect();
    const centerX = terminalRect.left - terminalRect.width / 2;
    const centerY = terminalRect.top - 200;

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
                  className="flex items-center justify-center w-4 h-4 text-zinc-900 text-xs  hover:bg-zinc-500"
                  onClick={() => setIsOpen(false)}
                >
                  x
                </button>
              }
            >
              <div className="p-4 w-[300px]">settings</div>
            </Terminal>
          </div>
        </Portal>
      )}
    </>
  );
}
