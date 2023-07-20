import { getGallery, getHome } from "@/sanity/lib/utils";
import React from "react";

export default async function PictureGallery() {
  const gallery = await getHome();
  return (
    <div>
      {gallery.map((picture) => (
        <div key={picture._id} className="text-white">
          {picture.image}
          {/* {picture.image.map((imageUrl, index) => (
            <div key={index}>{imageUrl}</div>
          ))} */}
        </div>
      ))}
    </div>
  );
}
