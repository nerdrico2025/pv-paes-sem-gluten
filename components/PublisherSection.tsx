import React from 'react';
import type { ProductData } from '../types';

interface PublisherSectionProps {
  banners: ProductData['publisherBanners'];
}

const PublisherSection: React.FC<PublisherSectionProps> = ({ banners }) => {
  return (
    <div id="from-publisher">
      <h2 className="text-2xl font-bold border-b pb-2 mb-8">Da editora</h2>
      <div className="space-y-8">
        {banners.map((banner, index) => (
           <div key={index} className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg shadow-md bg-white">
             {/* If reverse is true, image is on the left (order-first on md), text on right. 
                 Default logic in original was: Banner 1 (text left), Banner 2 (text right), Banner 3 (text left). 
                 We use flex order to control this dynamically. */}
             
             <div className={`bg-[#6B7D6A] text-white p-8 lg:p-12 flex flex-col justify-center ${banner.reverse ? 'md:order-last' : ''}`}>
               <blockquote className="text-2xl lg:text-3xl font-serif leading-snug">
                 {banner.quote}
               </blockquote>
               <cite className="mt-4 not-italic font-sans">— {banner.source}</cite>
             </div>
             
             <div className="h-64 md:h-auto">
               <img 
                 src={banner.image} 
                 alt={banner.imageAlt} 
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default PublisherSection;