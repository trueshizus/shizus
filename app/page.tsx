import DownloadAsPdf from "@/components/download-as-pdf";
import Terminal from "@/components/terminal";
import CV from "@/public/cv.mdx";

export default function Home() {
  return (
    <main className="h-full py-4 px-2 grid place-items-center">
      <Terminal
        title="CV"
        className="p-4"
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
            <DownloadAsPdf />
          </>
        }
      >
        <article className="">
          <CV />
        </article>
      </Terminal>
    </main>
  );
}
