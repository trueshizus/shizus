import CV from "@/public/cv.mdx";
import Link from "next/link";

export default function Home() {
  return (
    <article className="h-full text-zinc-200 p-4">
        <div className="border border-zinc-200 max-w-4xl mx-auto">
          <div className="flex items-center justify-between bg-zinc-200">
            <p className=" text-zinc-900 px-2 font-mono text-sm">cv</p>
            <Link href="/logs" className="text-zinc-900 pr-2 text-sm blink">_</Link>
          </div>
          <div className="px-4 py-2">
            <CV />
        </div>
      </div>
    </article> 
  );
}
