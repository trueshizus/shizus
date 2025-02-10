import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  className?: string;
  children: string | string[];
};

export function CodeBlock({ className = "", children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className);

  return (
    <div className="max-w-[90vw]">
      <SyntaxHighlighter
        language={match?.[1] || ""}
        style={darcula}
        customStyle={{
          margin: 0,
          padding: "1rem",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
