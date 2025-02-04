import Terminal from "@/components/terminal";
import { getSlugs } from "@/utils/getSlugs";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Entry } = await import(`@/app/logs/entries/${slug}.mdx`);

  return (
    <Terminal title={slug} href="/logs">
      <Entry />
    </Terminal>
  );
}

export function generateStaticParams() {
  return getSlugs("app/logs/entries");
}

export const dynamicParams = false;
