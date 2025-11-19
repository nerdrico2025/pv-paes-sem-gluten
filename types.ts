import React from 'react';

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

export interface ProductSpecs {
  publisher: string;
  publicationDate: string;
  language: string;
  pages: string;
  isbn10?: string;
  isbn13?: string;
  format: string;
}

export interface HighlightsData {
  title: string;
  description: string[];
  videoEmbedHtml?: string;
  videoThumbnail?: string;
}

export interface ProductData {
  id: string;
  info: {
    title: string;
    subtitle: string;
    author: string;
    rating: number;
    reviewsCount: number;
    images: string[];
    price: string;
    originalPrice: string;
    discountAmount: string;
    discountPercentage: string;
    purchaseLink: string;
    descriptionShort: string;
  };
  details: {
    descriptionLong: React.ReactNode;
    authorBio: string;
    authorImage: string;
    specs: ProductSpecs;
  };
  reviews: Review[];
  publisherBanners: {
    quote: string;
    source: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
  }[];
  relatedProducts: RelatedProduct[];
  highlights: HighlightsData;
}