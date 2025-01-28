import Posts from "@/components/posts";
import Terminal from "@/components/Terminal";
export default function Page() {
  return (
    <main className="h-full md:py-12 py-4 px-2">
      <Terminal title="logs" href="/">
        <Posts />
      </Terminal>
    </main>
  );
}
