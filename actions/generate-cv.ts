"use server";

import { CVIntent } from "@/contexts/settings-context";
import { deepseek } from "@ai-sdk/deepseek";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

const styles: Record<CVIntent, string> = {
  default: "",
  short: "short and concise, removing any unnecessary information",
  artistic:
    "modern and appealing to Gen Z employers, using emojis moderately and other modern formatting",
  formal:
    "formal and professional while preserving the information in the original CV",
};

type StyleOptions = keyof typeof styles;

const cvPrompt = (
  style: StyleOptions,
  markdownCV: string
) => `You are an expert resume writer. Rewrite the following CV in markdown format to be ${styles[style]}.
*   Keep all '#' and '##' headings.
*   You may freely modify '###' headings and list elements to better fit the ${style} style.
*   Output only the rewritten markdown CV. The cv must be below 10000 characters
*   Do not wrap the output in \`\`\` tags.
Here is the original CV:
<MarkdownCV>
${markdownCV}
</MarkdownCV>
`;

const modelConfig = {
  openai: openai("gpt-4o-mini"),
  google: google("gemini-2.0-flash-lite-preview-02-05"),
  deepseek: deepseek("deepseek-chat"),
} as const;

export async function generate(
  markdownCV: string,
  intent: CVIntent,
  provider: "openai" | "google"
) {
  if (intent === "default") return { output: markdownCV };

  const model = modelConfig[provider];

  const stream = createStreamableValue("");

  const prompt = cvPrompt(intent, markdownCV);

  (async () => {
    const { textStream } = streamText({
      model,
      prompt,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
