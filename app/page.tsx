import Terminal from "@/components/terminal";
import CV from "@/public/cv.mdx";

export default function Home() {
  return (
    <main className="h-full py-4 px-2 grid place-items-center">
      <Terminal
        title="CV"
        actions={
          <>
            <button
              type="button"
              aria-label="Settings"
              title="Settings"
              className="items-center justify-center w-4 h-4 text-zinc-900 text-xs  hover:bg-zinc-500 hidden md:flex"
            >
              ⚙
            </button>
            <button
              type="button"
              aria-label="Download"
              title="Download"
              className="flex items-center justify-center w-4 h-4 text-zinc-900 text-xs  hover:bg-zinc-500"
            >
              ⤓
            </button>
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
