import { createClient, groq } from "next-sanity";
import { client } from "./client";
import { Banner, Category, Gallery, Home, Pictures } from "@/utils/types";

export async function getBanner(): Promise<Banner[]> {
  return client.fetch(
    groq`*[_type == "banner"]{
      _id,
      _createdAt,
      name,
      slogan,
      content,
    }`
  );
}

export async function getCategory(): Promise<Category[]> {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      _createdAt,
      title,
      "image": image.asset->url,
      description,
    }`
  );
}

export async function getHome(): Promise<Home[]> {
  return client.fetch(
    groq`*[_type == "home"]{
      _id,
      _createdAt,
      name,
      "image": cloudinary.asset->url
    }`
  );
}
export async function getGallery(): Promise<Gallery[]> {
  return client.fetch(
    groq`*[_type == "home"]{
      _id,
      _createdAt,
      category,     
      "images": cloudinary[].asset->url
    }`
  );
}

export async function getPictures(): Promise<Pictures[]> {
  return client.fetch(
    groq`*[_type == "pictures"]{
      _id,
      _createdAt,
      name,
      "images": images[].asset->url,
      description
    }`
  );
}
