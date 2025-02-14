import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

export const metadata: Metadata = {
  title: "shizus.dev",
  description: "Whatever it was on my head that day.",
};

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.className}>
      <head></head>
      <body className="h-screen bg-zinc-900 min-w-[375px] w-full ">
        <NuqsAdapter>
          <div id="portal-root" />
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
