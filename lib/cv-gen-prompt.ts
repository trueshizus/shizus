import fs from "fs";
import path from "path";
const filePath = path.join(process.cwd(), "/public/cv.md");
const markdownCV = fs.readFileSync(filePath, "utf8");

export type AiProvider = "openai" | "google" | "deepseek";
export type ModelOptions = "none" | AiProvider;

const styles = {
  default: "",
  short: "short and concise, removing any unnecessary information",
  artistic:
    "modern and appealing to Gen Z employers, using emojis moderately and other modern formatting",
  formal:
    "formal and professional while preserving the information in the original CV",
};

export type StyleOptions = keyof typeof styles;

export const generateCvPrompt = (
  style: StyleOptions
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
