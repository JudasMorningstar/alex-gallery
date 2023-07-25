import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      type: "array",
      name: "images",
      description: "Select images from cloudinary",
      of: [defineArrayMember({ type: "cloudinary.asset" })],
    }),
  ],
});
