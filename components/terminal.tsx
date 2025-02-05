"use client";

import Link from "next/link";
import { useRef } from "react";
import Draggable from "react-draggable";

type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
};

export default function Terminal({ children, title, className }: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable
      handle=".handle"
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
    >
      <div ref={nodeRef} className={`h-full text-zinc-200 ${className}`}>
        <div className="border border-zinc-200 max-w-4xl mx-auto">
          <div className="flex items-center justify-between bg-zinc-200 handle cursor-move">
            <p className="text-zinc-900 px-2 font-mono text-sm">{title}</p>
            <Link href="/menu" className="text-zinc-900 pr-2 text-sm">
              x
            </Link>
          </div>
          {children}
        </div>
      </div>
    </Draggable>
  );
}
