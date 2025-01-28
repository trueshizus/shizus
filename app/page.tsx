import CV from "@/public/cv.mdx";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="h-full py-12">
      <Terminal title="cv" href="/logs">
        <article className="px-8 py-4">
          <CV />
        </article>
      </Terminal>
    </main>
  );
}
