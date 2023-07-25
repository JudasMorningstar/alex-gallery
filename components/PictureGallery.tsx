import { getGallery, getHome } from "@/sanity/lib/utils";
import pictures from "@/sanity/schemas/pictures";
import React from "react";
import Image from "next/image";

export default async function PictureGallery() {
  const gallery = await getHome();
  return (
    <>
      <div className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {gallery.map((pictures) => (
            <div key={pictures._id}>
              {pictures.images.map((imageUrl, imageIndex) => (
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
