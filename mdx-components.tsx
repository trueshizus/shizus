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
  <p className="text-sm my-2">{children}</p>
);

const InlineCode = ({ children }: TextComponentProps) => (
  <b>{children}</b>
);

// Heading components
const H1 = ({ children }: HeadingProps) => (
  <h1 className="text-xl font-mono font-bold my-1">{children}</h1>
);

const H2 = ({ children }: HeadingProps) => (
  <h2 className="text-md font-mono font-bold my-1">{children}</h2>
);

const H3 = ({ children }: HeadingProps) => (
  <h3 className="text-sm font-mono font-bold my-1">{children}</h3>
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
    h3: H3,
    p: Paragraph,
    code: InlineCode,
    ul: UnorderedList,
    ol: OrderedList,
    pre: ({ children }) => <CodeBlock {...children.props} />,
  };
}
