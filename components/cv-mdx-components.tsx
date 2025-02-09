"use client";

import { useSettings } from "@/contexts/settings-context";
import type { MDXComponents } from "mdx/types";
import React from "react";

type MDXComponentProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: MDXComponentProps) => {
  return <p className={`my-2 leading-normal `}>{children}</p>;
};

const InlineCode = ({ children }: MDXComponentProps) => <b>{children}</b>;

// Heading components
const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-2xl font-bold my-1">{children}</h1>
);

const H2 = ({ children }: MDXComponentProps) => {
  const { fontSizes, currentFont } = useSettings();
  return (
    <h2
      className={` font-bold my-1 ${currentFont.className}`}
      style={{ fontSize: `${fontSizes.h2}px` }}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children }: MDXComponentProps) => {
  const { fontSizes, currentFont } = useSettings();
  return (
    <h3
      className={`font-bold my-1 tracking-tight  ${currentFont.className}`}
      style={{ fontSize: `${fontSizes.h3}px` }}
    >
      {children}
    </h3>
  );
};

const UnorderedList = ({ children }: MDXComponentProps) => (
  <ul className="list-disc ml-4">{children}</ul>
);

const ListItem = ({ children }: MDXComponentProps) => {
  const { fontSizes, currentFont } = useSettings();
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
  // h2: H2,
  // h3: H3,
  // p: Paragraph,
  // li: ListItem,
};
