"use client";

import { useFont } from "@/contexts/settings-context";
import type { MDXComponents } from "mdx/types";
import React from "react";

type MDXComponentProps = {
  children: React.ReactNode;
};

// Text components
const Paragraph = ({ children }: MDXComponentProps) => {
  const { fontSizes, currentFont } = useFont();
  return (
    <p
      className={`my-2 leading-normal ${currentFont.className}`}
      style={{ fontSize: `${fontSizes.p}px` }}
    >
      {children}
    </p>
  );
};

const InlineCode = ({ children }: MDXComponentProps) => <b>{children}</b>;

// Heading components
const H1 = ({ children }: MDXComponentProps) => {
  const { fontSizes, currentFont } = useFont();
  return (
    <h1
      className={`font-mono font-bold my-1 ${currentFont.className}`}
      style={{ fontSize: `${fontSizes.h1}px` }}
    >
      {children}
    </h1>
  );
};

const H2 = ({ children }: MDXComponentProps) => {
  const { fontSizes, currentFont } = useFont();
  return (
    <h2
      className={`font-mono font-bold my-1 ${currentFont.className}`}
      style={{ fontSize: `${fontSizes.h2}px` }}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children }: MDXComponentProps) => {
  const { fontSizes, currentFont } = useFont();
  return (
    <h3
      className={`font-mono font-bold my-1 text-left ${currentFont.className}`}
      style={{ fontSize: `${fontSizes.h3}px` }}
    >
      {children}
    </h3>
  );
};

// List components
const UnorderedList = ({ children }: MDXComponentProps) => (
  <ul className="list-disc ml-4">{children}</ul>
);

const OrderedList = ({ children }: MDXComponentProps) => (
  <ol className="list-decimal ml-2">{children}</ol>
);

const ListItem = ({ children }: MDXComponentProps) => {
  const { fontSizes, currentFont } = useFont();
  return (
    <li
      className={`my-1.5 leading-normal ${currentFont.className}`}
      style={{ fontSize: `${fontSizes.li}px` }}
    >
      {children}
    </li>
  );
};

export const cvMdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  ol: OrderedList,
  li: ListItem,
  layout: ({ children }: MDXComponentProps) => <article>{children}</article>,
};
