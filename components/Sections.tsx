import { getPictures } from "@/sanity/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Sections() {
  const pictures = await getPictures();
  return (
    <>
      {pictures.map((picture) => (
        <div key={picture._id}>
          <div className="gap-8 py-8 px-4 mx-auto object-contain max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image
              src={picture.images[2]}
              alt={picture.name}
              width={1024}
              height={576}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
              className="mt-5 rounded-lg"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
                <span className="text-indigo-600">{picture.name}</span>{" "}
                Photography
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                {picture.description}
              </p>
              <Link
                href={`/gallery/${picture.slug}`}
                key={picture._id}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                visit gallery
              </Link>
            </div>
          </div>
          <div
            key={picture._id}
            className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 mb-4"
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
          </div>
        </div>
      ))}
    </>
  );
}
