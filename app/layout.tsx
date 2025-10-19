import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = Geist({ subsets: ["latin"] });

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
      <body className={`${dmSans.className} bg-[#EAEEFE] antialiased`}>
        {children}
      </body>
    </html>
  );
}
