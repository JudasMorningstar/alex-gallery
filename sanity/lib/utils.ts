import { createClient, groq } from "next-sanity";
import { client } from "./client";
import { Banner } from "@/types/banner";

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
