"use client";
import { useSettings } from "@/contexts/settings-context";

import { generate } from "@/app/actions";
import { readStreamableValue } from "ai/rsc";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ActionIcon from "./action-icon";
import Terminal from "./terminal";
export const maxDuration = 10;

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold my-1">{props.children}</h1>
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold my-1">{props.children}</h2>
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-bold my-1">{props.children}</h3>
  ),
  p: (props: any) => <p className="my-2 leading-normal">{props.children}</p>,
  li: (props: any) => (
    <li className="my-1.5 leading-normal">{props.children}</li>
  ),
};

export default function CVDynamic({
  initialContent,
}: {
  initialContent: string;
}) {
  const { currentFont, fontSizes, intent } = useSettings();
  const [generation, setGeneration] = useState<string>(initialContent);

  return (
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
      <button
        onClick={async () => {
          const { output } = await generate(
            "Generate a markdown file with a title and a list of 2 elements"
          );

          setGeneration("");

          for await (const delta of readStreamableValue(output)) {
            setGeneration(
              (currentGeneration) => `${currentGeneration}${delta}`
            );
          }
        }}
      >
        Ask
      </button>
      <article
        className={`md:min-h-[297mm] md:min-w-[210mm] px-6 py-4 hyphens-auto ${currentFont.className}`}
        style={{ fontSize: `${fontSizes.h1}px` }}
      >
        <ReactMarkdown components={components}>
          {generation.length > 0 ? generation : initialContent}
        </ReactMarkdown>
      </article>
    </Terminal>
  );
}
