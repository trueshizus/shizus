"use client";

import { useRef } from "react";
import Draggable from "react-draggable";

type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
  actions?: React.ReactNode;
};

export default function Terminal({
  children,
  title,
  className,
  actions,
}: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable
      handle=".handle"
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
    >
      <div ref={nodeRef} className={` text-zinc-200`}>
        <div className="border border-zinc-200 max-w-4xl">
          <div className="flex items-center justify-between bg-zinc-200 ">
            <p className="text-zinc-900 px-2 font-mono text-sm flex-grow handle cursor-move">
              {title}
            </p>
            <div className="flex items-center gap-1">{actions}</div>
          </div>
          <section className={`${className}`}>{children}</section>
        </div>
      </div>
    </Draggable>
  );
}
