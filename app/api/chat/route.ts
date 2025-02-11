import { AIProvider, CVIntent } from "@/hooks/use-cv-generation";
import { deepseek } from "@ai-sdk/deepseek";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

const styles: Record<CVIntent, string> = {
  default: "",
  short: "short and concise, removing any unnecessary information",
  artistic:
    "modern and appealing to Gen Z employers, using emojis moderately and other modern formatting",
  formal:
    "formal and professional while preserving the information in the original CV",
};

const cvPrompt = (
  style: keyof typeof styles,
  markdownCV: string
) => `You are an expert resume writer. Rewrite the following CV in markdown format to be ${styles[style]}.
*   Keep all '#' and '##' headings.
*   You may freely modify '###' headings and list elements to better fit the ${style} style.
*   Output only the rewritten markdown CV. The cv must be below 10000 characters
*   Do not wrap the output in \`\`\` tags.
Here is the original CV:
<MarkdownCV>
${markdownCV}
</MarkdownCV>`;

const modelConfig = {
  openai: openai("gpt-4o-mini"),
  google: google("gemini-2.0-flash-001"),
  deepseek: deepseek("deepseek-chat"),
} as const;

export async function POST(req: Request) {
  const {
    markdownCV,
    intent,
    provider,
  }: {
    markdownCV: string;
    intent: CVIntent;
    provider: AIProvider;
  } = await req.json();

  const model = modelConfig[provider];
  const prompt = cvPrompt(intent, markdownCV);

  const result = streamText({
    model,
    prompt,
  });

  return result.toDataStreamResponse();
}
