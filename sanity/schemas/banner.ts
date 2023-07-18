import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    }),
    defineField({
      name: "slogan",
      title: "Slogan",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
    }),
  ],
});
