import { getPictures } from "@/sanity/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Sections() {
  const pictures = await getPictures();
  return (
    <div className="mx-auto max-w-[1960px] p-4">
      {pictures.map((picture) => (
        <div
          key={picture._id}
          className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4"
        >
          <Link
            href={"#"}
            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            {picture.images.map((imageUrl, imageIndex) => (
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
          <Link
            // href={"/gallery/${gallery.slug}"}
            href={`/gallery/${picture.slug}`}
            key={picture._id}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            view more
          </Link>
        </div>
      ))}
    </div>
  );
}
