"use client";
import ImageGallery from "@/components/ImageGallery";
import { getMyGallery } from "@/sanity/lib/utils";

type Props = {
  params: { gallery: string };
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function PictureGallery({ params }: Props) {
  const slug = params.gallery;
  const gallery = await getMyGallery(slug);
  return <ImageGallery images={gallery.images} />;
}
