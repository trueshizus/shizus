"use client";
import { fonts, useFont } from "@/contexts/font-context";
import { useSettings } from "@/contexts/settings-context";
import { Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import ActionIcon from "./action-icon";
import { cvComponents } from "./cv-md-components";
import Terminal from "./terminal";

export default function DynamicMarkdown() {
  const { isGenerating, defaultContent, content } = useSettings();

  const { selectedFont, fontSizes } = useFont();

  const dynamicComponents = cvComponents(fontSizes);

  return (
    <>
      <Terminal
        title="CV"
        loading={isGenerating}
        actions={
          <>
            <ActionIcon icon="settings" />
            <ActionIcon icon="download" />
            <ActionIcon icon="close" />
          </>
        }
      >
        {isGenerating && <Loading />}
        <article
          className={`md:min-h-[297mm] md:w-[210mm] px-4 py-2 text-pretty	${fonts[selectedFont].className}`}
        >
          <ReactMarkdown components={dynamicComponents}>
            {content || defaultContent}
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
