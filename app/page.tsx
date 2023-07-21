import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Sections from "@/components/Sections";
import { getPictures } from "@/sanity/lib/utils";

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
