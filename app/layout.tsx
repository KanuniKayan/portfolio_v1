import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanuni Kayan Portfolio",
  description: "Junior FullStack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col items-center h-screen">
          <main className="flex flex-col mt-30 items-center w-3/4 min-h-1/2 h-fit">
            <h1 className="text-5xl my-4 pl-4 self-start text-primary">
              <Link href="/">
                KANUNI KAYAN
              </Link>
            </h1>
            <div className="w-full h-fit bg-secondary">
              <nav className="flex flex-row flex-wrap items-center w-full h-fit bg-highlight">
                  <Link className="link" href="/">Projects</Link>
                  <Link className="link" href="/about">About</Link>
                  <Link className="link" href="/ai_usage">AI Usage</Link>
                  <Link className="link" href="/harvard">Harvard</Link>
                  <Link className="link" href="/contact">Contact</Link>
                  <Link className="link" href="https://www.linkedin.com/in/kanuni-kayan-32191b30a/" target="_blank">LinkedIn</Link>
              </nav>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
