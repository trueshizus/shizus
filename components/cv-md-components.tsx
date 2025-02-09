export const cvMdComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold my-1 md-h1">{props.children}</h1>
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold my-1 md-h2">{props.children}</h2>
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-bold my-1 md-h3">{props.children}</h3>
  ),
  p: (props: any) => (
    <p className="my-2 leading-normal md-p">{props.children}</p>
  ),
  li: (props: any) => (
    <li className="my-1.5 leading-normal md-li">{props.children}</li>
  ),
};
