import React, { useRef } from 'react';
import type { RelatedProduct } from '../types';
import StarRating from './StarRating';

const relatedProductsData: RelatedProduct[] = [
    { 
        id: 1, 
        imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-boas-festas-natal-es.webp', 
        title: 'Receitas Boas Festas', 
        rating: 4.5, 
        reviews: 25, 
        format: 'Livro Digital', 
        price: '47,90',
        link: 'https://payfast.greenn.com.br/85615/offer/QgiCbr'
    },
    { 
        id: 2, 
        imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-acompanhamentos-spreads.webp', 
        title: 'Acompanhamentos e Spreads', 
        rating: 4.5, 
        reviews: 15, 
        format: 'Livro Digital', 
        price: '74,90', 
        tag: 'Recém-lançado', 
        tagColor: 'border-gray-500',
        link: 'https://payfast.greenn.com.br/95811/offer/qIElp9'
    },
    { 
        id: 3, 
        imageUrl: 'https://picsum.photos/seed/related3/400/600', 
        title: 'Páscoa sem Glúten', 
        rating: 4.5, 
        reviews: 19, 
        format: 'Livro Digital', 
        price: '47,90', 
        tag: 'Recém-lançado', 
        tagColor: 'border-gray-500',
        link: 'https://payfast.greenn.com.br/85616/offer/EVO92z'
    },
    { 
        id: 4, 
        imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-massa-perfeita.webp', 
        title: 'Massas Sem Glúten', 
        rating: 5, 
        reviews: 143, 
        format: 'Livro Digital', 
        price: '109,90', 
        tag: '1º mais vendido', 
        tagColor: 'bg-orange-700 text-white',
        link: 'https://payfast.greenn.com.br/95806/offer/aTvi6q'
    },
    { 
        id: 5, 
        imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-bebidas-vegetais.webp', 
        title: 'Bebidas Vegetais', 
        rating: 5, 
        reviews: 152, 
        format: 'Livro Digital', 
        price: '96,90',
        link: 'https://payfast.greenn.com.br/95808/offer/8dfIdp'
    },
    { 
        id: 7, 
        imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-farinhas-alternativas.webp', 
        title: 'Explorando Farinhas Alternativas', 
        rating: 4.5, 
        reviews: 129, 
        format: 'Livro Digital', 
        price: '85,90',
        link: 'https://payfast.greenn.com.br/95807/offer/XXp325'
    },
];

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const RelatedProducts = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="my-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Os leitores também compraram</h2>
            
            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition disabled:opacity-50"
                    aria-label="Rolar para a esquerda"
                >
                    <ChevronLeftIcon />
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex space-x-4 overflow-x-hidden py-4"
                >
                    {relatedProductsData.map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-48">
                            <div className="flex flex-col h-full text-left">
                                <a href={product.link || '#'} className="block mb-2" target="_blank" rel="noopener noreferrer">
                                    <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-cover rounded-md shadow-sm" />
                                </a>
                                <div className="flex-grow">
                                    <h3 className="text-sm font-medium text-gray-800 hover:text-blue-600 line-clamp-2">
                                        <a href={product.link || '#'} target="_blank" rel="noopener noreferrer">{product.title}</a>
                                    </h3>
                                    <div className="flex items-center mt-1">
                                        <StarRating rating={product.rating} />
                                        <span className="ml-2 text-sm text-blue-600 hover:underline">({product.reviews})</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{product.format}</p>
                                    {product.tag && (
                                        <div className={`text-xs font-semibold px-2 py-0.5 rounded-sm border inline-block mt-1 ${product.tagColor}`}>
                                            {product.tag}
                                        </div>
                                    )}
                                    <p className="text-base font-bold text-gray-800 mt-1">R$ {product.price}</p>
                                </div>
                                <a 
                                    href={product.link || '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block text-center mt-4 w-full bg-green-700 hover:bg-green-800 text-white text-sm font-bold py-1.5 rounded-lg shadow-md transition duration-300"
                                >
                                    Comprar Agora
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition disabled:opacity-50"
                    aria-label="Rolar para a direita"
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
};

export default RelatedProducts;