import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite-preview-02-05",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.85,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const styles = {
  formal: "formal and professional",
  short: "short and concise",
  "gen z": "modern and appealing to Gen Z employers",
};

type StyleOptions = keyof typeof styles;

const cvPrompt = (
  style: StyleOptions,
  markdownCV: string
) => `You are an expert resume writer. Rewrite the following CV in markdown format to be ${styles[style]}.
*   Keep all '#' and '##' headings exactly as they are in the original CV.
*   You may freely modify '###' headings and list elements to better fit the ${style} style while preserving the information in the original CV.
*   Output only the rewritten markdown CV. The cv must be below 10000 characters
Here is the original CV:
<MarkdownCV>
${markdownCV}
</MarkdownCV>
`;

export async function generateCV(markdownCV: string, style: StyleOptions) {
  const prompt = cvPrompt(style, markdownCV);

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: generationConfig,
  });

  const response = await result.response;
  const text = response.text();
  return text;
}
