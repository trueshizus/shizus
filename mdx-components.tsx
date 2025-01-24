import type { MDXComponents } from "mdx/types";
import React from "react";
import { CodeBlock } from "./components/CodeBlock";


// Define types for custom MDX components
type HeadingProps = {
  children: React.ReactNode;
};

type TextComponentProps = {
  children: React.ReactNode;
};

type ListComponentProps = {
  children: React.ReactNode;
};

// Text components
const Paragraph = ({ children }: TextComponentProps) => (
  <p className="text-lg mb-1 px-1 py-2">{children}</p>
);

const InlineCode = ({ children }: TextComponentProps) => (
  <b className="bg-zinc-200">{children}</b>
);

// Heading components
const Heading1 = ({ children }: HeadingProps) => (
  <h1 className="text-2xl my-2 font-mono">{children}</h1>
);

// List components
const UnorderedList = ({ children }: ListComponentProps) => (
  <ul className="list-disc ml-6 text-lg">{children}</ul>
);

const OrderedList = ({ children }: ListComponentProps) => (
  <ol className="list-decimal ml-6 text-lg">{children}</ol>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: Heading1,
    p: Paragraph,
    code: InlineCode,
    ul: UnorderedList,
    ol: OrderedList,
    pre: ({ children }) => <CodeBlock {...children.props} />,
  };
}
