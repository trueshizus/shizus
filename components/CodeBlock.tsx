import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  className?: string;
  children: string | string[];
};

export function CodeBlock({ className = "", children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className);

  return (
    <SyntaxHighlighter language={match?.[1] || ""} style={darcula}>
      {children}
    </SyntaxHighlighter>
  );
} 