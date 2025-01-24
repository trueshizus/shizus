import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-2">
      <Link href="/" className="text-2xl font-bold">shizus.dev</Link>
      <Link href="/logs">logs: <span className="cursor_blink">_</span></Link>
    </header>
  );
}
