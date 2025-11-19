import React from 'react';
import { Link } from 'react-router-dom';

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

                <div className="flex justify-center items-center space-x-4 text-sm font-semibold mt-6 pt-6 border-t border-white/20 max-w-md mx-auto">
                   <span className="text-[#fdd5bb] text-xs uppercase tracking-wider mr-2">Nossos Livros:</span>
                   <Link to="/paessemgluten" className="hover:text-white/80 hover:underline">Pães</Link>
                   <span className="opacity-50">|</span>
                   <Link to="/receitasboasfestas" className="hover:text-white/80 hover:underline">Boas Festas</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;