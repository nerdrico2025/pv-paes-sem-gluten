import React from 'react';
import type { ProductData } from '../types';

interface ProductDetailsProps {
  data: ProductData['details'];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const { descriptionLong, authorBio, authorImage, specs } = data;

  return (
    <div className="space-y-12">
      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-gray-900">Detalhes do livro</h2>
        <div className="space-y-4 text-gray-700">
          {descriptionLong}
        </div>
      </div>

      {/* Author Info */}
      <div>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-gray-900">Sobre a autora</h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img src={authorImage} alt={specs.publisher} className="w-24 h-24 rounded-full object-cover" />
            <div>
                <h3 className="text-xl font-bold text-gray-900">Dra. Luciene Marques</h3>
                <p className="mt-2 text-gray-700">{authorBio}</p>
            </div>
        </div>
      </div>
      
      {/* Product Specs */}
      <div>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Especificações do produto</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <tbody>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700 w-1/3">Editora</th>
                        <td className="py-2 text-gray-800">{specs.publisher}</td>
                    </tr>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700">Data da publicação</th>
                        <td className="py-2 text-gray-800">{specs.publicationDate}</td>
                    </tr>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700">Idioma</th>
                        <td className="py-2 text-gray-800">{specs.language}</td>
                    </tr>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700">Número de páginas</th>
                        <td className="py-2 text-gray-800">{specs.pages}</td>
                    </tr>
                    {specs.isbn10 && (
                      <tr className="border-b">
                          <th className="py-2 pr-4 font-semibold text-gray-700">ISBN-10</th>
                          <td className="py-2 text-gray-800">{specs.isbn10}</td>
                      </tr>
                    )}
                    {specs.isbn13 && (
                      <tr className="border-b">
                          <th className="py-2 pr-4 font-semibold text-gray-700">ISBN-13</th>
                          <td className="py-2 text-gray-800">{specs.isbn13}</td>
                      </tr>
                    )}
                    <tr>
                        <th className="py-2 pr-4 font-semibold text-gray-700">Formato</th>
                        <td className="py-2 text-gray-800">{specs.format}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;