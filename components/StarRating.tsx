import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
}

// Fix: Correctly type StarIcon as a React functional component.
// The original inline type definition for props was too restrictive and did not
// allow for the `key` prop required when rendering lists in React.
// Defining an interface for props and using React.FC makes it a proper
// component that can accept standard React props like `key`.
interface StarIconProps {
  filled: boolean;
  half: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled, half }) => (
  <svg className={`w-5 h-5 ${filled || half ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    {half ? (
      <>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        <path fill="rgb(209 213 219)" d="M10 3.102l1.07 3.292a1 1 0 00.95.69h3.462l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292-2.8-2.034a1 1 0 00-1.175 0l-.001.001v10.088z" />
      </>
    ) : (
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    )}
  </svg>
);


const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isFilled = rating >= starValue;
        const isHalf = !isFilled && rating > index && rating < starValue;
        return <StarIcon key={index} filled={isFilled} half={isHalf} />;
      })}
    </div>
  );
};

export default StarRating;