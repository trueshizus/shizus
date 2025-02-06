import Terminal from "@/components/terminal";
import CV from "@/public/cv.mdx";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full py-4 px-2 grid place-items-center">
      <Terminal
        title="CV"
        actions={
          <>
            <Link
              href="/menu"
              aria-label="Settings"
              title="Settings"
              className="flex items-center justify-center w-4 h-4 text-zinc-900 text-xs  hover:bg-zinc-500"
            >
              ⚙
            </Link>
            <Link
              href="/menu"
              aria-label="Download"
              title="Download"
              className="flex items-center justify-center w-4 h-4 text-zinc-900 text-xs  hover:bg-zinc-500"
            >
              ⤓
            </Link>
          </>
        }
      >
        <article className="p-4">
          <CV />
        </article>
      </Terminal>
    </main>
  );
}
