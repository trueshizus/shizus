import type { MDXComponents } from "mdx/types";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  className?: string;
  children: string | string[];
};

function CodeBlock({ className = "", children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className);

  return (
    <SyntaxHighlighter language={match?.[1] || ""} style={darcula}>
      {children}
    </SyntaxHighlighter>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className="text-3xl mb-2">{children}</h1>,
    p: ({ children }) => <p className="text-lg mb-1">{children}</p>,
    code: ({ children }) => <b className="bg-zinc-200">{children}</b>,
    ul: ({ children }) => (
      <ul className="list-disc ml-6 text-lgg">{children}</ul>
    ),
    pre: ({ children }) =>
      React.isValidElement(children) && <CodeBlock {...children.props} />,
  };
}
