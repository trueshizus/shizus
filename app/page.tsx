import Terminal from "@/components/terminal";
import CV from "@/public/cv.mdx";

export default function Home() {
  return (
    <main className="h-full md:py-12 py-4 px-2">
      <Terminal title="CV">
        <article className="p-4">
          <CV />
        </article>
      </Terminal>
    </main>
  );
}
