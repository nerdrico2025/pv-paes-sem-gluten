import React from 'react';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';
import ProductDetails from './components/ProductDetails';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import type { Review } from './types';
import RelatedProducts from './components/RelatedProducts';
import FaqSection from './components/FaqSection';
import ProductHighlights from './components/ProductHighlights';
import PublisherSection from './components/PublisherSection';

const reviewsData: Review[] = [
  {
    id: 1,
    author: 'Ana Leite',
    profileImageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/ana-lucia.webp',
    rating: 5,
    title: 'O Melhor pão sem Glúten que eu Já fiz. Muito obrigado pelo ebook!',
    date: '28 de outubro de 2024',
    verified: true,
    content: 'Eu comprei para minha filha, Aline, na pré-venda. O livro chegou magicamente no aniversário dela. Ela ficou tão feliz e entusiasmada. Estas são as palavras dela: "Um item obrigatório para quem foi diagnosticado com doença celíaca!"',
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao1.webp'
  },
  {
    id: 2,
    author: 'Fernanda Lucena',
    profileImageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/fernanda.webp',
    rating: 5,
    title: 'Recomendo muito o livro Sem Glúten!!!',
    date: '24 de outubro de 2024',
    verified: true,
    content: 'Acabei de fazer a minha, gente!!! Quem ainda não comprou, corre, pois as receitas são uma delícia! Nem parece que é sem glúten. Gratidão!',
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao2.webp'
  },
  {
    id: 3,
    author: 'Edney Alcântara',
    profileImageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/thiago.webp',
    rating: 5,
    title: 'O livro definitivo de pão gf para todos os níveis',
    date: '30 de setembro de 2024',
    verified: true,
    content: 'É difícil explicar o quão incrível este livro é para quem já lutou com o pão sem glúten borrachudo e gomoso que conhecemos, a tristeza de comprar as farinhas para uma receita aleatória da internet apenas para ter um resultado como uma esponja... Parabéns! Gosto e utilizo as receitas maravilhosos do ebook.',
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao3.webp'
  },
  {
    id: 4,
    author: 'Alexandre Romano',
    profileImageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/roberto-silva.webp',
    rating: 5,
    title: 'Verdadeiramente os MELHORES livros de panificação artesanal sem glúten',
    date: '02 de novembro de 2024',
    verified: true,
    content: 'Este é um item OBRIGATÓRIO para assar sem glúten! Até agora, tudo o que fizemos tem sido delicioso! Fizemos pão de fermentação natural, baguetes e pãezinhos de canela. Depois de experimentar uma receita, compramos um de seus livros anteriores também, eles são TÃO BONS.',
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao4.webp'
  },
  {
    id: 5,
    author: 'Joana Carla',
    profileImageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/claudia-depoimento.webp',
    rating: 5,
    title: 'As melhores receitas sem glúten!',
    date: '02 de novembro de 2024',
    verified: true,
    content: 'Fiquei maravilhada com esta livro da Dra. Luciene e como as receitas saíram! Nunca imaginei que poderia assar sobremesas e pães fofos tão deliciosos sendo celíaca.',
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao5.webp'
  }
];

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ProductInfo />
        <hr className="my-12 border-gray-200" />
        <ProductHighlights />
        <hr className="my-12 border-gray-200" />
        <RelatedProducts />
        <div className="mt-12 lg:mt-16 space-y-12">
          <ProductDetails />
          <PublisherSection />
          <CustomerReviews reviews={reviewsData} />
          <FaqSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;