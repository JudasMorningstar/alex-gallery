export type Banner = {
  _id: string;
  createdAt: Date;
  name: string;
  slogan: string;
  content: string[];
};
export type Category = {
  _id: string;
  createdAt: Date;
  title: string;
  image: string;
  description: string[];
};
export type Home = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: string;
};
export type Gallery = {
  _id: string;
  _createdAt: Date;
  category: string;
  images: string[];
};

export type Pictures = {
  _id: string;
  _createdAt: Date;
  name: string;
  images: string[];
  description: string[];
};
