import React, { useState } from 'react';

const faqData = [
    {
        question: "Qual o nível de dificuldade das receitas?",
        answer: "As receitas variam do nível iniciante ao avançado. A autora Luciene Marques oferece instruções passo a passo detalhadas e dicas para garantir o sucesso, tornando o livro acessível mesmo para quem tem pouca experiência na cozinha."
    },
    {
        question: "Os ingredientes são fáceis de encontrar?",
        answer: "A maioria dos ingredientes, como farinhas de arroz, amêndoas e polvilho, pode ser encontrada em grandes supermercados ou lojas de produtos naturais. O livro também oferece sugestões de substituições e onde comprar ingredientes mais específicos online."
    },
    {
        question: "Quanto tempo em média leva para preparar as receitas?",
        answer: "O tempo de preparo varia. Receitas rápidas como biscoitos podem levar menos de uma hora, enquanto os pães de fermentação natural exigem mais tempo, distribuído ao longo de um ou dois dias, devido aos períodos de fermentação."
    },
    {
        question: "Este livro é adequado para iniciantes na panificação sem glúten?",
        answer: "Sim! O livro começa com uma base sólida sobre as técnicas e ingredientes da panificação sem glúten, tornando-o um excelente ponto de partida para iniciantes. As receitas mais simples são perfeitas para construir confiança antes de passar para as mais complexas."
    }
];

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{item.question}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-600 pr-8">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};


const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq">
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">Perguntas Frequentes</h2>
            <div>
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FaqSection;