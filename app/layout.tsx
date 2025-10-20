import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/font";

export const metadata: Metadata = {
  title: "Auro Labs",
  description:
    "Helping companies to build their MVP, managing their legacy codebase or migrating into techstack / database and what not",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} antialiased bg-gradient-to-br from-black via-zinc-950 to-slate-950 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
