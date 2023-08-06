export type Home = {
  _id: string;
  createdAt: string;
  name: string;
  images: string[];
};

export type Banner = {
  _id: string;
  createdAt: Date;
  name: string;
  slogan: string;
  content: string[];
};

export type About = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  bio: string[];
};

export type Contact = {
  _id: string;
  _createdAt: Date;
  name: string;
  email: string;
  message: string[];
};

export type Gallery = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  images: string[];
};

export type Pictures = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  images: string[];
  description: string[];
};

export type Desk = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  images: string;
  description: string[];
};
export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}
export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
