"use client";
import { useSettings } from "@/contexts/settings-context";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import ActionIcon from "./action-icon";
import { cvMdComponents } from "./cv-md-components";
import Terminal from "./terminal";

export default function CVDynamic() {
  const {
    currentFont,
    fontSizes,
    generatedContent,
    isGenerating,
    defaultContent,
  } = useSettings();

  // Use useMemo to create dynamic styles
  const dynamicStyles = useMemo(
    () => `
    .md-h1 { font-size: ${fontSizes.h1}px !important; }
    .md-h2 { font-size: ${fontSizes.h2}px !important; }
    .md-h3 { font-size: ${fontSizes.h3}px !important; }
    .md-p { font-size: ${fontSizes.p}px !important; }
    .md-li { font-size: ${fontSizes.p}px !important; }
  `,
    [fontSizes]
  );

  return (
    <>
      <style global jsx>
        {dynamicStyles}
      </style>

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
        {isGenerating && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white">Generating...</div>
          </div>
        )}
        <article
          className={`md:min-h-[297mm] md:min-w-[210mm] px-6 py-4 hyphens-auto ${currentFont.className}`}
        >
          <ReactMarkdown components={cvMdComponents}>
            {generatedContent || defaultContent}
          </ReactMarkdown>
        </article>
      </Terminal>
    </>
  );
}
