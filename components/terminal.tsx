"use client";

import { useFont } from "@/contexts/font-context";
import { useRef } from "react";
import Draggable from "react-draggable";

type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
  actions?: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  handleClass?: string;
};

export default function Terminal({
  children,
  title,
  className,
  actions,
  defaultPosition,
  handleClass = "handle",
}: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { currentFont } = useFont();

  return (
    <Draggable
      handle={`.${handleClass}`}
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      defaultPosition={defaultPosition}
    >
      <div
        ref={nodeRef}
        className={`text-zinc-200 bg-zinc-900 ${currentFont.className}`}
      >
        <div className="border border-zinc-200 max-w-4xl">
          <div className="flex items-center justify-between bg-zinc-200">
            <p
              className={`text-zinc-900 px-2 font-mono text-sm flex-grow ${handleClass} cursor-move`}
            >
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
