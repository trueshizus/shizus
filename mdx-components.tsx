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
  <p className="text-md mb-1 px-1 py-2">{children}</p>
);

const InlineCode = ({ children }: TextComponentProps) => (
  <b className="bg-zinc-200">{children}</b>
);

// Heading components
const H1 = ({ children }: HeadingProps) => (
  <h1 className="text-xl my-2 font-mono">{children}</h1>
);

const H2 = ({ children }: HeadingProps) => (
  <h2 className="text-md my-2 font-mono">{children}</h2>
);

// List components
const UnorderedList = ({ children }: ListComponentProps) => (
  <ul className="list-disc ml-6 text-sm">{children}</ul>
);

const OrderedList = ({ children }: ListComponentProps) => (
  <ol className="list-decimal ml-6 text-sm">{children}</ol>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: H1,
    h2: H2,
    p: Paragraph,
    code: InlineCode,
    ul: UnorderedList,
    ol: OrderedList,
    pre: ({ children }) => <CodeBlock {...children.props} />,
  };
}
