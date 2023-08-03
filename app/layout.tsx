import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Pitsillis",
  description:
    "A simple portfolio website to showcase my scill as a photographer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <header className="sticky inset-x-0 top-0 z-50 w-full bg-black">
            <Navigation />
          </header>
          <main className="mx-auto max-w-[1960px] p-4">{children}</main>
          <footer className="p-6 text-center text-white/80 sm:p-12">
            <p>@2023 Alex Pitsillis Photography | ALL RIGHTS RESERVED</p>
            by{" "}
            <Link
              href="https://junademchunu.co.za/"
              target="_blank"
              className="font-semibold hover:text-white"
              rel="noreferrer"
            >
              Junade Mchunu
            </Link>
          </footer>
        </body>
      </html>
    </>
  );
}
