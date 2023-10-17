import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ToastProvider } from "@/provider/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Pitsillis",
  description:
    "Explore the world through my lens. Discover captivating moments captured through photography. Welcome to my portfolio showcasing a blend of landscapes, portraits, and events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className="bg-black">
          <header className="sticky inset-x-0 top-0 z-50 w-ful bg-inherit">
            <Navigation />
          </header>
          <main className="bg-inherit mx-auto max-w-[1960px] p-4">
            <ToastProvider />
            {children}
          </main>
          <footer className=" bg-inherit p-6 text-center text-white/80 sm:p-12">
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
