import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PictureGallery from "@/components/PictureGallery";
import Sections from "@/components/Sections";
// import Sections from "@/components/Sections";
import { getHome, getPictures } from "@/sanity/lib/utils";
import Image from "next/image";

export default async function Home() {
  const pictures = await getPictures();
  return (
    <>
      <Navigation />
      <Hero />
      {/* <PictureGallery /> */}
      <Sections />
    </>
  );
}
