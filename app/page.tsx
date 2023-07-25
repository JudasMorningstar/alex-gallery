import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PictureGallery from "@/components/PictureGallery";
import Sections from "@/components/Sections";
import { getPictures } from "@/sanity/lib/utils";
import Link from "next/link";

export default async function Home() {
  const pictures = await getPictures();
  return (
    <>
      <Navigation />
      <Hero />
      {/* <PictureGallery /> */}
      <Sections />
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
    </>
  );
}
