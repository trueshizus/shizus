import { FontSizes } from "@/contexts/font-context";
import { FC } from "react";
import type { Components } from "react-markdown";

// Remove empty interfaces and use HTML attribute types directly
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type ListItemProps = React.HTMLAttributes<HTMLLIElement>;
type UnorderedListProps = React.HTMLAttributes<HTMLUListElement>;

const H1: FC<HeadingProps> = ({ children, ...props }) => (
  <h1 className="font-bold " {...props}>
    {children}
  </h1>
);

const H2: FC<HeadingProps> = ({ children, ...props }) => (
  <h2 className="font-bold  border-b-2 border-zinc-400 my-2" {...props}>
    {children}
  </h2>
);

const H3: FC<HeadingProps> = ({ children, ...props }) => (
  <h3 className="font-bold mt-3" {...props}>
    {children}
  </h3>
);

const P: FC<ParagraphProps> = ({ children, ...props }) => (
  <p className="my-1" {...props}>
    {children}
  </p>
);

const Li: FC<ListItemProps> = ({ children, ...props }) => (
  <li className="my-1" {...props}>
    {children}
  </li>
);

const Ul: FC<UnorderedListProps> = ({ children, ...props }) => (
  <ul className="list-disc list-inside leading-relaxed mb-2" {...props}>
    {children}
  </ul>
);

const Em: FC<ListItemProps> = ({ children, ...props }) => (
  <small {...props}>{children}</small>
);

export const cvComponents = (fontSizes: FontSizes): Components => ({
  h1: (props) => (
    <H1 {...props} style={{ ...props.style, fontSize: fontSizes.h1 }} />
  ),
  h2: (props) => (
    <H2 {...props} style={{ ...props.style, fontSize: fontSizes.h2 }} />
  ),
  h3: (props) => (
    <H3 {...props} style={{ ...props.style, fontSize: fontSizes.h3 }} />
  ),
  p: (props) => (
    <P {...props} style={{ ...props.style, fontSize: fontSizes.p }} />
  ),
  li: (props) => (
    <Li {...props} style={{ ...props.style, fontSize: fontSizes.li }} />
  ),
  em: (props) => (
    <Em {...props} style={{ ...props.style, fontSize: fontSizes.li }} />
  ),
  ul: (props) => <Ul {...props} />,
});
