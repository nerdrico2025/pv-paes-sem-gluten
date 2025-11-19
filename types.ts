export interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  date: string;
  verified: boolean;
  content: string;
  imageUrl?: string;
  profileImageUrl?: string;
}

export interface RelatedProduct {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  reviews: number;
  format: string;
  price?: string;
  delivery?: string;
  tag?: string;
  tagColor?: string;
  link?: string;
}