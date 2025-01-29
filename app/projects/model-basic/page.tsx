import Terminal from "@/components/terminal";
import Content from "./content.mdx";

export default function Page() {
  return (
    <main className="h-full md:py-12 py-4 px-2">
      <Terminal title="1. Model Basics" href="/">
        <Content />
      </Terminal>
    </main>
  );
}
