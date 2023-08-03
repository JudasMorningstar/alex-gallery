import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemas/blockContent";
import banner from "./schemas/banner";
import gallery from "./schemas/gallery";
import pictures from "./schemas/pictures";
import contact from "./schemas/contact";
import home from "./schemas/home";
import about from "./schemas/about";
import aboutMe from "./schemas/aboutMe";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    about,
    aboutMe,
    blockContent,
    banner,
    gallery,
    pictures,
    contact,
    home,
  ],
};
