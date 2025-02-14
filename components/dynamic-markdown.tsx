"use client";

import useFont from "@/hooks/useFont";
import useFontSizes from "@/hooks/useFontSizes";
import { fonts } from "@/lib/fonts";
import { Bot } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { cvComponents } from "./cv-md-components";
import DownloadAsPdf from "./download-as-pdf";
import MenuLink from "./menu-link";
import Settings from "./settings";
import Terminal from "./terminal";

type Props = {
  defaultContent: string;
};

export default function DynamicMarkdown({ defaultContent }: Props) {
  const [selectedFont] = useFont();
  const [fontSizes] = useFontSizes();
  const [isLoading, setIsLoading] = useState(false);
  const [generation, setGeneration] = useState<string>(defaultContent);

  const dynamicComponents = cvComponents({
    fontSizes,
    selectedFont,
  });

  return (
    <>
      <Terminal
        title="CV"
        actions={
          <>
            <Settings
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setGeneration={setGeneration}
            />
            <DownloadAsPdf />
            <MenuLink />
          </>
        }
      >
        {isLoading && <Loading />}
        <article
          className={`md:min-h-[297mm] md:w-[210mm] px-4 py-2 text-pretty	${fonts[selectedFont].className}`}
        >
          <ReactMarkdown components={dynamicComponents}>
            {generation}
          </ReactMarkdown>
        </article>
      </Terminal>
    </>
  );
}

function Loading() {
  return (
    <div className="absolute md:min-h-[297mm] md:min-w-[210mm]  inset-0 bg-zinc-900/80 flex items-center justify-center ">
      <div className="text-white flex items-center gap-2">
        <span>Generating</span>
        <div className="grid [grid-template-areas:'stack'] animate-bounce">
          <Bot className="[grid-area:stack] w-5 h-5 " />
          <Bot className="[grid-area:stack] w-5 h-5 animate-ping text-zinc-500" />
        </div>
      </div>
    </div>
  );
}
