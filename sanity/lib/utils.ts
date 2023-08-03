import { groq } from "next-sanity";
import { client } from "./client";
import {
  About,
  AboutMe,
  Banner,
  Contact,
  Gallery,
  Home,
  Pictures,
} from "@/utils/types";

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

export async function getContact(): Promise<Contact> {
  return client.fetch(
    groq`*[_type == "contact"]{
      _id,
      _createdAt,
      "slug": slug.current,
      name,
      email,
      message,
    }`
  );
}

export async function getGallery(): Promise<Gallery[]> {
  return client.fetch(
    groq`*[_type == "gallery"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,     
      "images": images[].url
    }`
  );
}
export async function getMyGallery(slug: string): Promise<Gallery> {
  return client.fetch(
    groq`*[_type == "gallery" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": images[].url,
    }`,
    { slug }
  );
}

export async function getPictures(): Promise<Pictures[]> {
  return client.fetch(
    groq`*[_type == "pictures"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": images[].asset->url,
      description
    }`
  );
}
export async function getPicture(slug: string): Promise<Pictures> {
  return client.fetch(
    groq`*[_type == "pictures" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": images[].asset->url,
      description
    }`,
    { slug }
  );
}
export async function getAboutMe(): Promise<AboutMe> {
  return client.fetch(
    groq`*[_type == "pictures"]{
      _id,
      _createdAt,
      name,
      
      "profile": images.asset->url,
      bio,
    }`
  );
}
export async function getHome(): Promise<Home[]> {
  return client.fetch(
    groq`*[_type == "home"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": images[].url,
    }`
  );
}

export async function getAbout(): Promise<About> {
  return client.fetch(
    groq`*[_type == "about"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": images.asset->url,
      bio,
    }`
  );
}
