"use client";

import ActionIcon from "@/components/action-icon";
import InteractiveCV from "@/components/interactive-cv";
import Terminal from "@/components/terminal";
import { FontProvider } from "@/contexts/settings-context";
export default function Home() {
  return (
    <FontProvider>
      <main
        id="portal-root"
        className={`h-full py-4 px-2 grid place-items-center `}
      >
        <Terminal
          title="CV"
          actions={
            <>
              <ActionIcon icon="settings" />
              <ActionIcon icon="download" />
              <ActionIcon icon="close" />
            </>
          }
        >
          <InteractiveCV />
        </Terminal>
      </main>
    </FontProvider>
  );
}
