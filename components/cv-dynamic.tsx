"use client";
import { useSettings } from "@/contexts/settings-context";
import { Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import ActionIcon from "./action-icon";
import { cvComponents } from "./cv-md-components";
import Terminal from "./terminal";

export default function CVDynamic() {
  const {
    currentFont,
    fontSizes,
    generatedContent,
    isGenerating,
    defaultContent,
  } = useSettings();

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
        {true && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white flex items-center gap-2">
              <span>Generating</span>
              <Bot className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        )}
        <article
          className={`md:min-h-[297mm] md:min-w-[210mm] px-6 py-4 hyphens-auto ${currentFont.className}`}
        >
          <ReactMarkdown components={dynamicComponents}>
            {generatedContent || defaultContent}
          </ReactMarkdown>
        </article>
      </Terminal>
    </>
  );
}
