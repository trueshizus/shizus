import Terminal from "@/components/terminal";
import { getSlugs } from "@/utils/getSlugs";

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
  return getSlugs("app/unlisted");
}

export const dynamicParams = false;
