import Terminal from "@/components/terminal";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-full md:py-12 py-4 px-2">
      <Terminal title="projects" href="/" className="">
        <ul>
          <li>
            <Link href="/projects/model-basic">Model Basics</Link>
          </li>
          <li>
            <Link href="/projects/model-basic">Model Basics</Link>
          </li>
        </ul>
      </Terminal>
    </main>
  );
}
