import React from 'react';
import StarRating from './StarRating';
import type { Review } from '../types';

interface CustomerReviewsProps {
  reviews: Review[];
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="py-6 border-b border-gray-200 last:border-b-0">
    <div className="flex items-center mb-2">
      {review.profileImageUrl ? (
          <img src={review.profileImageUrl} alt={`Foto de perfil de ${review.author}`} className="w-10 h-10 rounded-full object-cover mr-4" />
      ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
      )}
      <div>
        <p className="font-semibold text-gray-800">{review.author}</p>
        {review.verified && <p className="text-sm text-red-600">Compra verificada</p>}
      </div>
    </div>
    <div className="flex items-center mb-2">
      <StarRating rating={review.rating} />
      <h3 className="ml-3 font-bold text-gray-900">{review.title}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-4">Avaliado em {review.date}</p>
    <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 space-y-4 text-gray-700">
           <p>{review.content}</p>
           <div className="flex items-center space-x-4">
              <button className="border border-gray-300 rounded-md px-4 py-1.5 text-sm hover:bg-gray-50">Útil</button>
              <button className="text-sm text-gray-500 hover:underline">Compartilhar</button>
           </div>
        </div>
        {review.imageUrl && (
            <div className="md:w-1/3">
              <img src={review.imageUrl} alt={`Imagem da avaliação de ${review.author}`} className="rounded-lg object-cover w-full h-auto" />
            </div>
        )}
    </div>
  </div>
);

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  return (
    <div id="reviews">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Avaliações de clientes</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;