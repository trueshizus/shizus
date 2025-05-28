"use server";

import {
  AiProvider,
  generateCvPrompt,
  StyleOptions,
} from "@/lib/cv-gen-prompt";
import { deepseek } from "@ai-sdk/deepseek";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

const modelConfig = {
  openai: openai("gpt-4o-mini"),
  google: google("gemini-2.0-flash-lite"),
  deepseek: deepseek("deepseek-chat"),
} as const;

export async function generate(model: AiProvider, style: StyleOptions) {
  const stream = createStreamableValue("");
  const prompt = generateCvPrompt(style);

  (async () => {
    const { textStream } = streamText({
      model: modelConfig[model],
      prompt,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
