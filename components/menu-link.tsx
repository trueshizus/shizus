import Link from "next/link";

export default function MenuLink() {
  return (
    <Link
      href="/menu"
      aria-label="Close"
      title="Close"
      className="flex items-center justify-center w-4 h-4 text-zinc-900 text-xs  hover:bg-zinc-500"
    >
      x
    </Link>
  );
}
