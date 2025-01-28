import CV from "@/public/cv.mdx";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="h-full md:py-12 py-4 px-2">
      <Terminal title="CV" href="/logs">
        <article className="md:px-8 px-4 py-4">
          <CV />
        </article>
      </Terminal>
    </main>
  );
}
