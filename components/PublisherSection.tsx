import React from 'react';

const PublisherSection = () => {
  return (
    <div id="from-publisher">
      <h2 className="text-2xl font-bold border-b pb-2 mb-8">Da editora</h2>
      <div className="space-y-8">
        {/* Banner 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg shadow-md bg-white">
          <div className="bg-[#6B7D6A] text-white p-8 lg:p-12 flex flex-col justify-center">
            <blockquote className="text-2xl lg:text-3xl font-serif leading-snug">
              “O livro "Pão Sem Glúten" da Dra. Luciene Marques é mais do que um livro de receitas — é uma revelação.”
            </blockquote>
            <cite className="mt-4 not-italic font-sans">— Portal Integral Saúde</cite>
          </div>
          <div className="h-64 md:h-auto">
            <img 
              src="https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao-forma.webp" 
              alt="Pão de forma sem glúten fatiado" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Banner 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg shadow-md bg-white">
          <div className="h-64 md:h-auto md:order-last">
            <img 
              src="https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao-de-queijo-de-batata-doce.jpg" 
              alt="Pão de queijo de batata doce" 
              className="w-full h-full object-cover"
            />
          </div>
           <div className="bg-[#6B7D6A] text-white p-8 lg:p-12 flex flex-col justify-center">
            <blockquote className="text-2xl lg:text-3xl font-serif leading-snug">
              “Fiquei maravilhada com o livro de pães da Dra. Marques... Uma obra deslumbrante!”
            </blockquote>
            <cite className="mt-4 not-italic font-sans">— Blog Dieta 300 Calorias</cite>
          </div>
        </div>
        
        {/* Banner 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg shadow-md bg-white">
           <div className="bg-[#6B7D6A] text-white p-8 lg:p-12 flex flex-col justify-center">
            <blockquote className="text-2xl lg:text-3xl font-serif leading-snug">
              “Desde as primeiras páginas... você é transportado para um mundo onde a confeitaria sem glúten transcende as limitações.”
            </blockquote>
            <cite className="mt-4 not-italic font-sans">— Canal Mais Saúde</cite>
          </div>
          <div className="h-64 md:h-auto">
            <img 
              src="https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao%20de%20rabanada.webp" 
              alt="Pão de rabanada sem glúten" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PublisherSection;