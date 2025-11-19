import React, { useState, useRef, useEffect } from 'react';
import StarRating from './StarRating';
import type { ProductData } from '../types';

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface ProductInfoProps {
  data: ProductData['info'];
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  // State for panning functionality
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const images = data.images || [];

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length === 0) return;
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length === 0) return;
    const isLastImage = currentImageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  const handleOpenZoom = () => {
    if (images.length === 0) return;
    setPanOffset({ x: 0, y: 0 }); // Reset pan on open
    setIsZoomModalOpen(true);
  };
  const handleCloseZoom = () => setIsZoomModalOpen(false);

  // Panning event handlers
  const handlePanStart = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsPanning(true);
    setPanStart({
      x: e.clientX - panOffset.x,
      y: e.clientY - panOffset.y,
    });
  };

  const handlePanMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isPanning) return;
    e.preventDefault();
    const newX = e.clientX - panStart.x;
    const newY = e.clientY - panStart.y;

    const container = imageRef.current?.parentElement;
    if (imageRef.current && container) {
      const imgRect = imageRef.current.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const maxX = Math.max(0, (imgRect.width - containerRect.width) / 2);
      const maxY = Math.max(0, (imgRect.height - containerRect.height) / 2);

      const finalX = Math.max(-maxX, Math.min(maxX, newX));
      const finalY = Math.max(-maxY, Math.min(maxY, newY));

      setPanOffset({ x: finalX, y: finalY });
    }
  };
  
  const handlePanEnd = () => {
    setIsPanning(false);
  };
  
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseZoom();
      }
    };
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
      {/* Image Section */}
      <div className="lg:col-span-4 flex flex-col items-center">
        <div className="w-full max-w-sm sticky top-24">
           <div className="relative group">
              <button onClick={handleOpenZoom} className="w-full cursor-zoom-in" aria-label="Ampliar imagem">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Capa do livro ${data.title} - Visualização ${currentImageIndex + 1}`}
                    className="w-full h-auto object-cover rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
              </button>
               {images.length > 1 && (
                 <>
                   <button onClick={goToPrevious} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/60 hover:bg-white/90 rounded-full p-2 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Imagem anterior">
                      <ChevronLeftIcon />
                   </button>
                   <button onClick={goToNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/60 hover:bg-white/90 rounded-full p-2 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Próxima imagem">
                      <ChevronRightIcon />
                   </button>
                 </>
               )}
           </div>
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((image, index) => (
              <button key={index} onClick={() => goToImage(index)} className="rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <img
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded-md border-2 transition-all ${currentImageIndex === index ? 'border-blue-500 scale-110' : 'border-transparent hover:border-gray-400'}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="lg:col-span-3">
        <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
        <h2 className="text-xl text-gray-600 mt-1">{data.subtitle}</h2>
        <div className="mt-2">
          <a href="#" className="text-lg text-blue-600 hover:underline">por {data.author}</a>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <StarRating rating={data.rating} />
          <a href="#reviews" className="text-blue-600 hover:underline">({data.reviewsCount} avaliações)</a>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-base text-gray-600">{data.descriptionShort}</p>
        </div>
        
        <div className="mt-6">
            <button className="w-full text-center py-3 px-4 border border-gray-400 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Ler amostra
            </button>
        </div>
      </div>

      {/* Purchase Box */}
      <div className="lg:col-span-3">
        <div className="border border-gray-300 rounded-lg p-4 sticky top-24">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-800">Edição Digital</h3>
            <div className="flex items-baseline text-gray-500">
              <span>De:</span>
              <span className="line-through ml-1">R$ {data.originalPrice}</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-lg font-medium text-gray-800">Por:</span>
              <span className="text-3xl font-bold text-red-600 ml-2">R$ {data.price}</span>
            </div>
            <p className="text-sm font-semibold text-green-700">
              Você economiza R$ {data.discountAmount} ({data.discountPercentage})
            </p>
          </div>
          
          <p className="text-green-600 mt-4 font-semibold">Disponível para download imediato.</p>
          
          <div className="mt-6">
             <div className="text-orange-600 font-semibold text-sm mb-2 text-center">
                ✨ Oferta especial por tempo limitado!
             </div>
             <a 
               href={data.purchaseLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="block w-full bg-green-700 hover:bg-green-800 text-center text-white font-bold py-3 rounded-lg shadow-md transition duration-300"
             >
               Comprar Agora
             </a>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>Vendido por <a href="#" className="text-blue-600 hover:underline">ChefGlutenFree.com.br</a></p>
            <p>Transação segura.</p>
          </div>
        </div>
      </div>
      
      {/* Zoom Modal with Panning */}
      {isZoomModalOpen && images[currentImageIndex] && (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleCloseZoom}
            role="dialog"
            aria-modal="true"
            aria-labelledby="zoom-image-title"
        >
            <div className="relative" onClick={(e) => e.stopPropagation()}> 
                <h2 id="zoom-image-title" className="sr-only">Imagem ampliada do produto</h2>
                <div className="max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg shadow-2xl bg-black">
                  <img 
                      ref={imageRef}
                      src={images[currentImageIndex]} 
                      alt={`Visão ampliada de ${data.title}`}
                      className={`transition-transform duration-75 ease-out w-auto h-auto max-w-none max-h-none ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
                      style={{ 
                        transform: `scale(1.75) translate(${panOffset.x}px, ${panOffset.y}px)`,
                        transformOrigin: 'center center',
                      }}
                      onMouseDown={handlePanStart}
                      onMouseMove={handlePanMove}
                      onMouseUp={handlePanEnd}
                      onMouseLeave={handlePanEnd}
                      draggable={false}
                  />
                </div>
                <button 
                    onClick={handleCloseZoom}
                    className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2"
                    aria-label="Fechar visualização ampliada"
                >
                    <XIcon />
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;