import Navigation from "@/components/Navigation";
import { getMyGallery, getPicture } from "@/sanity/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { gallery: string };
};

export default async function PictureGallery({ params }: Props) {
  const slug = params.gallery;
  const gallery = await getMyGallery(slug);
  return (
    <>
      <Navigation />
      <div className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <Link
            href={"#"}
            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            {gallery.images.map((imageUrl, imageIndex) => (
              <Image
                className="transform rounded-lg brightness-80 transition will-change-auto hover:brightness-110 mb-4"
                src={imageUrl}
                alt="alex"
                key={imageIndex}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
              />
            ))}
          </Link>
        </div>
      </div>
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
