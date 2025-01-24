import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inconsolata = Inconsolata({ subsets: ["latin"] });

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
    <html lang="en" className="h-full">
      <body className="h-full">
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
