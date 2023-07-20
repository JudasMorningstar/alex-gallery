import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      type: "array",
      name: "images",
      description: "Select images from cloudinary",
      of: [{ type: "image" }],
    }),
  ],
});
