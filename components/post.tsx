type Props = {
  filename: string;
  content: React.ReactElement;
};

export default async function Post({ filename, content }: Props) {
  return (
    <article key={filename} className="md:px-8 md:py-2 px-4 py-4 border-b border-zinc-200">
      <small className="text-zinc-500 text-xs">$ cat ./{filename}</small>
      {content}
    </article>
  );
}

