import DynamicMarkdown from "@/components/dynamic-markdown";
import { SettingsProvider } from "@/contexts/settings-context";
import { promises as fs } from "fs";
import path from "path";
import { Suspense } from "react";

export default async function Home() {
  const filePath = path.join(process.cwd(), "/public/cv.md");
  const content = await fs.readFile(filePath, "utf8");

  return (
    <SettingsProvider defaultContent={content}>
      <main
        id="portal-root"
        className="md:py-12 py-4 px-2 grid place-items-center"
      >
        <Suspense>
          <DynamicMarkdown />
        </Suspense>
      </main>
    </SettingsProvider>
  );
}
