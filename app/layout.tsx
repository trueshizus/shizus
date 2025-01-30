import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import 'katex/dist/katex.min.css'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "shizus.dev",
  description: "Whatever it was on my head that day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.className}>
      <body className="h-full bg-zinc-900 min-w-[400px]">
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
