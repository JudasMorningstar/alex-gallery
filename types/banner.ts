import { PortableTextBlock } from "sanity";

export type Banner = {
  _id: string;
  _createdAt: Date;
  name: string;
  slogan: string;
  content: PortableTextBlock;
};
