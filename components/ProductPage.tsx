import React from 'react';
import Header from './Header';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import CustomerReviews from './CustomerReviews';
import Footer from './Footer';
import RelatedProducts from './RelatedProducts';
import FaqSection from './FaqSection';
import ProductHighlights from './ProductHighlights';
import PublisherSection from './PublisherSection';
import type { ProductData } from '../types';

interface ProductPageProps {
  data: ProductData;
}

const ProductPage: React.FC<ProductPageProps> = ({ data }) => {
  return (
    <div className="bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ProductInfo data={data.info} />
        <hr className="my-12 border-gray-200" />
        <ProductHighlights data={data.highlights} />
        <hr className="my-12 border-gray-200" />
        <RelatedProducts products={data.relatedProducts} />
        <div className="mt-12 lg:mt-16 space-y-12">
          <ProductDetails data={data.details} />
          <PublisherSection banners={data.publisherBanners} />
          <CustomerReviews reviews={data.reviews} />
          <FaqSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;