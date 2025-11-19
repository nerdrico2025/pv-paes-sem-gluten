import React from 'react';

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const GlutenFreeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.5,13.8c-0.3,1.9-1,3.7-2,5.2c-1.3,2.1-3.2,3.7-5.5,4.5c-2,0.7-4.1,0.7-6.1,0c-2.3-0.8-4.2-2.4-5.5-4.5 c-1-1.6-1.7-3.3-2-5.2H21.5z M2,10.2h19.9c-0.3-1.9-1-3.7-2-5.2C18.6,2.9,16.7,1.4,14.4,0.6C12.4-0.1,10.3-0.2,8.2,0.5 c-2.3,0.8-4.2,2.4-5.5,4.5C1.7,6.6,1.1,8.3,0.8,10.2H2z M9.9,4.2l1.5,3.3l1.5-3.3H9.9z M8.2,9.2l1.1,2.4h5.2l1.1-2.4H8.2z M12.6,19.8 l-1.5-3.3l-1.5,3.3H12.6z M15.7,14.8l-1.1-2.4H9.4l-1.1,2.4H15.7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
    </svg>
);

const StarOutlineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ProductHighlights = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side: Video */}
        <div>
          <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg">
            <img src="https://picsum.photos/seed/highlightsvid/800/600" alt="Vídeo de apresentação do livro" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="p-4 bg-black/50 rounded-full">
                <PlayIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Text and Banners */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Descubra os Segredos do Pão Perfeito</h2>
          <div className="space-y-4 text-gray-600">
            <p>Redescubra o prazer de uma fatia de pão quente e crocante, sem se preocupar com o glúten. Dra. Luciene Marques desmistifica a panificação sem glúten, ensinando técnicas que resultam em pães e doces com textura e sabor que rivalizam com as melhores padarias tradicionais. Diga adeus aos pães densos e sem graça!</p>
            <p>Este não é apenas um livro de receitas, é um curso completo que lhe dará a confiança para assar com sucesso. Desde a criação do seu próprio fermento natural sem glúten até a maestria de croissants folhados, você aprenderá os segredos de uma especialista premiada. Surpreenda sua família e amigos com criações deliciosas que ninguém acreditará serem sem glúten.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center h-full">
                <GlutenFreeIcon />
                <p className="mt-2 text-sm font-semibold text-blue-800">Receitas 100% Sem Glúten</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center h-full">
                <StarOutlineIcon />
                <p className="mt-2 text-sm font-semibold text-blue-800">Sabor e Textura Artesanais</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center h-full">
                <BookOpenIcon />
                <p className="mt-2 text-sm font-semibold text-blue-800">Passo a Passo Detalhado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;