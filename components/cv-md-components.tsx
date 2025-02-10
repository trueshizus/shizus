import { FontSizes } from "@/contexts/settings-context";
import { FC, memo } from "react";
import type { Components } from "react-markdown";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}
interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const Heading = (
  Tag: "h1" | "h2" | "h3",
  baseClass: string
): FC<HeadingProps> =>
  memo(({ children, ...props }) => (
    <Tag className={`${baseClass} font-bold my-1 `} {...props}>
      {children}
    </Tag>
  ));

const H1 = Heading("h1", "text-3xl md-h1");
const H2 = Heading("h2", "text-2xl md-h2 border-b border-zinc-200");
const H3 = Heading("h3", "text-xl md-h3");

const P: FC<ParagraphProps> = memo(({ children, ...props }) => (
  <p className={`my-2 leading-normal md-p `} {...props}>
    {children}
  </p>
));

const Li: FC<ListItemProps> = memo(({ children, ...props }) => (
  <li
    className={`my-1.5 leading-normal md-li list-disc list-inside `}
    {...props}
  >
    {children}
  </li>
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
});
