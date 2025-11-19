import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#f3827c] text-white">
            <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center items-center space-x-4 mb-4">
                    <a href="https://chefglutenfree.com.br/politicas-privacidade/" className="text-sm text-[#fdd5bb] hover:underline" target="_blank" rel="noopener noreferrer">
                        Políticas de Privacidade
                    </a>
                    <span className="text-[#fdd5bb]">|</span>
                    <a href="https://chefglutenfree.com.br/termos-de-uso/" className="text-sm text-[#fdd5bb] hover:underline" target="_blank" rel="noopener noreferrer">
                        Termos de Uso
                    </a>
                </div>
                <p className="text-sm text-[#fdd5bb]">
                    ChefGlutenfree 2025 Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
};

export default Footer;