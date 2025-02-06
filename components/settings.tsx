"use client";

import Portal from "@/components/portal";
import Terminal from "@/components/terminal";
import { useState } from "react";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

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
              defaultPosition={{ x: 800, y: 50 }}
              handleClass="settings-handle"
            >
              <div className="p-4 w-[300px]">
                settings
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-4 py-2 bg-zinc-200 rounded hover:bg-zinc-300 text-zinc-900"
                >
                  Close
                </button>
              </div>
            </Terminal>
          </div>
        </Portal>
      )}
    </>
  );
}
