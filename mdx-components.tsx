import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className="text-3xl mb-2">{children}</h1>,
    p: ({ children }) => <p className="text-lg mb-1">{children}</p>,
  };
}
