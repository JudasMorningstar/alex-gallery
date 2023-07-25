import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
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
      description: "This asset is served from Cloudinary",
      of: [defineArrayMember({ type: "cloudinary.asset" })],
    }),
  ],
});
