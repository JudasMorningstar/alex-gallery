import Hero from "@/components/Hero";
import PictureGallery from "@/components/PictureGallery";
import Sections from "@/components/Sections";
import { getPictures } from "@/sanity/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Hero />
      {/* <PictureGallery /> */}
      <Sections />
    </>
  );
}
