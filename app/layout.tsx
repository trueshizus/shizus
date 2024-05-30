import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "> log _",
  description: "Whatever it was on my head that day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} bg-zinc-800 max-w-3xl mx-auto px-4`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
