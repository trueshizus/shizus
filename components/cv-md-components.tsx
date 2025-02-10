import { FontSizes } from "@/contexts/settings-context";
import { FC, memo } from "react";
import type { Components } from "react-markdown";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}
interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}
interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {}

const H1: FC<HeadingProps> = memo(({ children, ...props }) => (
  <h1 className="font-bold " {...props}>
    {children}
  </h1>
));

const H2: FC<HeadingProps> = memo(({ children, ...props }) => (
  <h2 className="font-bold  border-b-2 border-zinc-400 my-2" {...props}>
    {children}
  </h2>
));

const H3: FC<HeadingProps> = memo(({ children, ...props }) => (
  <h3 className="font-bold mt-3" {...props}>
    {children}
  </h3>
));

const P: FC<ParagraphProps> = memo(({ children, ...props }) => (
  <p className="my-1" {...props}>
    {children}
  </p>
));

const Li: FC<ListItemProps> = memo(({ children, ...props }) => (
  <li className="my-1" {...props}>
    {children}
  </li>
));

const Ul: FC<UnorderedListProps> = memo(({ children, ...props }) => (
  <ul className="list-disc list-inside leading-relaxed mb-2" {...props}>
    {children}
  </ul>
));

const Em: FC<ListItemProps> = memo(({ children, ...props }) => (
  <small {...props}>{children}</small>
));

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
