import Link from "next/link";

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
  className?: string;
};

export default function Terminal({ children, title, href, className }: Props) {
  return (
    <div className={`h-full text-zinc-200 ${className}`}>
      <div className="border border-zinc-200 max-w-4xl mx-auto">
        <div className="flex items-center justify-between bg-zinc-200">
          <p className=" text-zinc-900 px-2 font-mono text-sm">{title}</p>
          <Link href={href} className="text-zinc-900 pr-2 text-sm blink">
            _
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
