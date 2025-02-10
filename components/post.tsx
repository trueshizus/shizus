type Props = {
  filename: string;
  content: React.ReactElement;
};

export default async function Post({ filename, content }: Props) {
  return (
    <article
      key={filename}
      className="px-4 py-2 border-b border-zinc-200 hyphens-auto"
    >
      <small className="text-zinc-500 text-xs">$ cat ./{filename}</small>
      {content}
    </article>
  );
}
