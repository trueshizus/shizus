"use client";

import ActionIcon from "@/components/action-icon";
import InteractiveCV from "@/components/interactive-cv";
import Terminal from "@/components/terminal";
import { SettingsProvider } from "@/contexts/settings-context";
export default function Home() {
  return (
    <SettingsProvider>
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
    </SettingsProvider>
  );
}
