import CV from "@/public/cv.mdx";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="h-full md:py-12 py-4 px-2">
      <Terminal title="CV" href="/logs">
        <article className="p-4">
          <CV />
        </article>
      </Terminal>
    </main>
  );
}
