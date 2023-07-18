import { createClient, groq } from "next-sanity";
import { client } from "./client";

export async function getBanner() {
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
