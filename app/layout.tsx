import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
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
      <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head>
      <body className="h-screen bg-zinc-900 min-w-[375px] w-full ">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
