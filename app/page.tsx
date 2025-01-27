import CV from "@/public/cv.mdx";

export default function Home() {
  return (
    <article className="h-full text-zinc-200 p-4">
      <div className="border border-zinc-200">
        <div className="flex items-center justify-between bg-zinc-200">
          <p className=" text-zinc-900 px-2 font-mono text-sm">cv</p>
          <p className="text-zinc-200 text-sm">2025</p>
        </div>
        <CV />
      </div>
    </article>
  );
}

