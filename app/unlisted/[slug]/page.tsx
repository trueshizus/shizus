import Terminal from "@/components/terminal";
import fs from "fs";
import path from "path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Entry } = await import(`@/app/unlisted/${slug}.mdx`);

  return (
    <Terminal title={slug} href="/unlisted">
      <Entry />
    </Terminal>
  );
}

export function generateStaticParams() {
  const slugs = fs
    .readdirSync(path.join(process.cwd(), "app/unlisted"))
    .filter((file) => file.endsWith(".mdx"));
  return slugs.map((slug) => ({ slug: slug.replace(".mdx", "") }));
}

export const dynamicParams = false;
