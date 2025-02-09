import CVDynamic from "@/components/cv-dynamic";
import { SettingsProvider } from "@/contexts/settings-context";
import { promises as fs } from "fs";
import path from "path";

export default async function Home() {
  const filePath = path.join(process.cwd(), "/public/cv.md");
  const content = await fs.readFile(filePath, "utf8");
  return (
    <SettingsProvider>
      <main
        id="portal-root"
        className={`h-full py-4 px-2 grid place-items-center `}
      >
        <CVDynamic initialContent={content} />
      </main>
    </SettingsProvider>
  );
}
