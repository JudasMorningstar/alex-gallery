import { defineField, defineType } from "sanity";

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
      type: "cloudinary.asset",
      name: "image",
      description: "This asset is served from Cloudinary",
    }),
  ],
});
