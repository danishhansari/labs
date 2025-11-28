import type { Metadata } from "next";
import "./globals.css";
import { primaryFont } from "@/font";

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
      <head>
        <meta name="theme-color" content="#20808D" />
      </head>
      <body
        className={`${primaryFont.className} antialiased bg-[#091717] text-[#FBFAF4] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
