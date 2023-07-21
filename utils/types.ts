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
  slug: string;
  images: string[];
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
