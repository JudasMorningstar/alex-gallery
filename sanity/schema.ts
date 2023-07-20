import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import banner from "./schemas/banner";
import about from "./schemas/about";
import gallery from "./schemas/gallery";
import home from "./schemas/home";
import pictures from "./schemas/pictures";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, category, blockContent, banner, gallery, home, pictures],
};
