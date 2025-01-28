import Posts from "@/components/posts";
import Terminal from "@/components/Terminal";
export default function Page() {
  return (
    <main className="h-full py-12">
      <Terminal title="logs" href="/">
        <Posts />
      </Terminal>
    </main>
  );
}
