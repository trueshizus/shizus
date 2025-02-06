import type { MDXComponents } from "mdx/types";
import React from "react";
import { CodeBlock } from "./components/code-blocks";

type MDXComponentProps = {
  children: React.ReactNode;
};

// Text components
const Paragraph = ({ children }: MDXComponentProps) => (
  <p className="text-sm my-2 leading-normal">{children}</p>
);

const InlineCode = ({ children }: MDXComponentProps) => <b>{children}</b>;

// Heading components
const H1 = ({ children }: MDXComponentProps) => (
  <h1 className="text-xl font-mono font-bold my-1">{children}</h1>
);

const H2 = ({ children }: MDXComponentProps) => (
  <h2 className="text-md font-mono font-bold my-1 border-b">{children}</h2>
);

const H3 = ({ children }: MDXComponentProps) => (
  <h3 className="text-sm font-mono font-bold my-1 text-left ">{children}</h3>
);

// List components
const UnorderedList = ({ children }: MDXComponentProps) => (
  <ul className="list-disc ml-4 text-sm">{children}</ul>
);

const OrderedList = ({ children }: MDXComponentProps) => (
  <ol className="list-decimal ml-2 text-sm">{children}</ol>
);

const ListItem = ({ children }: MDXComponentProps) => (
  <li className="text-sm my-1.5 leading-normal">{children}</li>
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
    li: ListItem,
    pre: ({ children }) => <CodeBlock {...children.props} />,
  };
}
