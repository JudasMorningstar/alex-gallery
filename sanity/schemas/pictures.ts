import { defineField, defineType } from "sanity";

export default defineType({
  name: "pictures",
  title: "Pictures",
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
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
          options: { hospot: true },
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
