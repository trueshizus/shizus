import { FontProvider } from "@/contexts/font-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <FontProvider>
        <body className="h-screen bg-zinc-900 min-w-[400px] w-full">
          {children}

          <Analytics />
          <SpeedInsights />
        </body>
      </FontProvider>
    </html>
  );
}
