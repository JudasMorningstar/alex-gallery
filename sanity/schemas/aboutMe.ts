import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutMe",
  title: "About Me",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    // defineField({
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: { source: "name" },
    // }),
    defineField({
      name: "profile",
      type: "image",
      title: "Profile",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
  ],
});
