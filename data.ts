import type { ProductData, Review, RelatedProduct } from './types';
import React from 'react';

// Shared Reviews (Simulated for now, or could be specific)
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

// Catalog of potential related products to mix and match
const catalog = {
  paesSemGluten: {
    id: 100,
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-paes-sem-gluten.webp',
    title: 'Pães Sem Glúten',
    rating: 4.9,
    reviews: 66,
    format: 'Livro Digital',
    price: '79,90',
    tag: 'Best-seller',
    tagColor: 'bg-orange-700 text-white',
    link: 'https://payfast.greenn.com.br/95798/offer/4NlTSY'
  },
  boasFestas: {
    id: 1, 
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-receitas-boas-festas.webp', 
    title: 'Receitas Boas Festas', 
    rating: 4.5, 
    reviews: 25, 
    format: 'Livro Digital', 
    price: '47,90',
    link: 'https://payfast.greenn.com.br/85615/offer/QgiCbr'
  },
  acompanhamentos: { 
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
  pascoa: { 
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
  massas: { 
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
  bebidas: { 
    id: 5, 
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-bebidas-vegetais.webp', 
    title: 'Bebidas Vegetais', 
    rating: 5, 
    reviews: 152, 
    format: 'Livro Digital', 
    price: '96,90',
    link: 'https://payfast.greenn.com.br/95808/offer/8dfIdp'
  },
  farinhas: { 
    id: 7, 
    imageUrl: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-farinhas-alternativas.webp', 
    title: 'Explorando Farinhas Alternativas', 
    rating: 4.5, 
    reviews: 129, 
    format: 'Livro Digital', 
    price: '85,90',
    link: 'https://payfast.greenn.com.br/95807/offer/XXp325'
  }
};


export const paesSemGlutenData: ProductData = {
  id: 'paes-sem-gluten',
  info: {
    title: 'Pães Sem Glúten',
    subtitle: 'Receitas Fáceis e Práticas para o seu Dia a Dia',
    author: 'Dra. Luciene Marques',
    rating: 4.9,
    reviewsCount: 66,
    images: [
      'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-paes-sem-gluten.webp',
      'https://picsum.photos/seed/breadA/800/800',
      'https://picsum.photos/seed/breadB/800/800',
      'https://picsum.photos/seed/breadC/800/800',
    ],
    price: '79,90',
    originalPrice: '127,90',
    discountAmount: '48,00',
    discountPercentage: '38%',
    purchaseLink: 'https://payfast.greenn.com.br/95798/offer/4NlTSY',
    descriptionShort: 'Aprenda a criar pães sem glúten que são tão deliciosos quanto nutritivos, usando receitas simples e práticas que você pode fazer em casa.'
  },
  details: {
    descriptionLong: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Finalmente, uma bíblia completa que transformará a arte de fazer pão sem glúten, da renomada especialista Dra. Luciene Marques.'),
      React.createElement('p', { className: 'mt-4' }, 'A autora Dra. Luciene Marques aperfeiçoou a arte de assar sem glúten e conquistou atenção global por sua capacidade de criar pães cheios de textura e sabor usando farinhas alternativas. A Arte do Pão Sem Glúten não apenas compartilha seu segredo para o pão perfeito, mas também oferece 100 receitas para os pães e doces que os intolerantes ao glúten mais sentem falta.'),
      React.createElement('div', { className: 'mt-6 text-gray-700 space-y-3' },
        React.createElement('h3', { className: 'text-xl font-bold text-gray-800' }, 'Como fazer pão sem glúten de maneira saudável e sem misturas comerciais?'),
        React.createElement('p', null, 'Caro leitor,'),
        React.createElement('p', null, 'Esse e-book criei pensando em você, que vive na pele as dificuldades de uma vida sem glúten.'),
        React.createElement('p', null, 'Combinar ingredientes, ser criativa, conciliar sabor, textura e insumos saudáveis não é tarefa fácil, aqui te apresento um oportunidade para parar de errar.'),
        React.createElement('p', null, 'Pensando em tornar a rotina e a a realidade alimentar de quem tem restrição ao glúten em algo muito mais calmo, leve e tranquilo, reuni diferentes receitas de pães para o seu dia a dia.'),
        React.createElement('p', null, 'Neste ebook você encontrará receitas para o seu consumo e da sua família ou, quem sabe, iniciar uma outra fonte de renda vendendo seus pães surpreendentes.'),
        React.createElement('p', { className: 'mt-4' }, 'Abraço,'),
        React.createElement('p', null, 'Dra. Luciene Marques')
      )
    ),
    authorBio: 'Dra. Luciene Marques é uma renomada fisioterapeuta em terapia intensiva e chef do canal especializado ChefGlutenFree. Com anos de pesquisa e prática, ela se dedica a criar receitas deliciosas e saudáveis para pessoas com restrições alimentares. Seus trabalhos foram apresentados em diversas publicações de saúde e bem-estar, além de ter mais de 800 vídeos sobre receitas sem glúten na internet.',
    authorImage: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/perfil-luciene.webp',
    specs: {
      publisher: 'ChefGlutenFree',
      publicationDate: '23 de outubro de 2024',
      language: 'Português',
      pages: '123 páginas',
      isbn10: '164829202X',
      isbn13: '978-1648292026',
      format: 'Digital'
    }
  },
  reviews: reviewsData,
  publisherBanners: [
    {
        quote: '“O livro "Pão Sem Glúten" da Dra. Luciene Marques é mais do que um livro de receitas — é uma revelação.”',
        source: 'Portal Integral Saúde',
        image: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao-forma.webp',
        imageAlt: 'Pão de forma sem glúten fatiado'
    },
    {
        quote: '“Fiquei maravilhada com o livro de pães da Dra. Marques... Uma obra deslumbrante!”',
        source: 'Blog Dieta 300 Calorias',
        image: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao-de-queijo-de-batata-doce.jpg',
        imageAlt: 'Pão de queijo de batata doce',
        reverse: true
    },
    {
        quote: '“Desde as primeiras páginas... você é transportado para um mundo onde a confeitaria sem glúten transcende as limitações.”',
        source: 'Canal Mais Saúde',
        image: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao%20de%20rabanada.webp',
        imageAlt: 'Pão de rabanada sem glúten'
    }
  ],
  relatedProducts: [
    catalog.boasFestas,
    catalog.acompanhamentos,
    catalog.pascoa,
    catalog.massas,
    catalog.bebidas,
    catalog.farinhas
  ],
  highlights: {
    title: "Descubra os Segredos do Pão Perfeito",
    description: [
        "Redescubra o prazer de uma fatia de pão quente e crocante, sem se preocupar com o glúten. Dra. Luciene Marques desmistifica a panificação sem glúten, ensinando técnicas que resultam em pães e doces com textura e sabor que rivalizam com as melhores padarias tradicionais. Diga adeus aos pães densos e sem graça!",
        "Este não é apenas um livro de receitas, é um curso completo que lhe dará a confiança para assar com sucesso. Desde a criação do seu próprio fermento natural sem glúten até a maestria de croissants folhados, você aprenderá os segredos de uma especialista premiada. Surpreenda sua família e amigos com criações deliciosas que ninguém acreditará serem sem glúten."
    ],
    videoThumbnail: "https://picsum.photos/seed/highlightsvid/800/600"
  }
};

export const receitasBoasFestasData: ProductData = {
    id: 'receitas-boas-festas',
    info: {
      title: 'Receitas Boas Festas',
      subtitle: 'Celebre com Sabor e Saúde',
      author: 'Dra. Luciene Marques',
      rating: 4.8,
      reviewsCount: 42,
      images: [
        'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/capa-receitas-boas-festas.webp',
        'https://picsum.photos/seed/festas1/800/800',
        'https://picsum.photos/seed/festas2/800/800',
        'https://picsum.photos/seed/festas3/800/800',
      ],
      price: '47,90',
      originalPrice: '97,90',
      discountAmount: '50,00',
      discountPercentage: '51%',
      purchaseLink: 'https://payfast.greenn.com.br/85615/offer/QgiCbr',
      descriptionShort: 'Torne suas celebrações inesquecíveis com receitas festivas, deliciosas e totalmente livres de glúten para compartilhar com quem você ama.'
    },
    details: {
      descriptionLong: React.createElement(React.Fragment, null,
        React.createElement('p', { className: 'font-bold mb-4' }, 'Boas festas com um toque especial!'),
        React.createElement('p', { className: 'mb-4' }, 'O Chef Gluten Free apresenta o ebook “Boas Festas sem Glúten” com 19 receitas cuidadosamente selecionadas para tornar seu Natal e Reveillon inesquecíveis.'),
        React.createElement('p', { className: 'mb-4' }, 'Imagine saborear deliciosos panetones e chocotones, preparar o seu próprio pão para rabanada, deliciar-se com rabanada sem glúten, biscoitos de gengibre e incríveis bolos de nozes e amêndoas… tudo isso adaptado para uma dieta sem glúten.'),
        React.createElement('p', { className: 'mb-4' }, 'Cada receita foi criada pensando em trazer sabor alegria e saúde para as suas festas se você quer fazer deste final de ano uma celebração especial este ebook é para você para adquirir é fácil clique no botão abaixo e você será direcionado para página de pagamento onde poderá comprar e baixar o ebook Boas Festas sem Glúten instantaneamente.'),
        React.createElement('p', { className: 'font-semibold' }, 'Não deixe de aproveitar esta oportunidade de fazer da sua festa um momento ainda mais saboroso e Alegre Boas Festas e Feliz final de ano com o Chef Gluten Free.')
      ),
      authorBio: 'Dra. Luciene Marques é uma renomada fisioterapeuta em terapia intensiva e chef do canal especializado ChefGlutenFree. Com anos de pesquisa e prática, ela se dedica a criar receitas deliciosas e saudáveis para pessoas com restrições alimentares.',
      authorImage: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/perfil-luciene.webp',
      specs: {
        publisher: 'ChefGlutenFree',
        publicationDate: '15 de novembro de 2024',
        language: 'Português',
        pages: '85 páginas',
        format: 'Digital'
      }
    },
    reviews: reviewsData, 
    publisherBanners: [
        {
            quote: '“O livro "Pão Sem Glúten" da Dra. Luciene Marques é mais do que um livro de receitas — é uma revelação.”',
            source: 'Portal Integral Saúde',
            image: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao-forma.webp',
            imageAlt: 'Pão de forma sem glúten fatiado'
        },
        {
            quote: '“Fiquei maravilhada com o livro de pães da Dra. Marques... Uma obra deslumbrante!”',
            source: 'Blog Dieta 300 Calorias',
            image: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao-de-queijo-de-batata-doce.jpg',
            imageAlt: 'Pão de queijo de batata doce',
            reverse: true
        },
        {
            quote: '“Desde as primeiras páginas... você é transportado para um mundo onde a confeitaria sem glúten transcende as limitações.”',
            source: 'Canal Mais Saúde',
            image: 'https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/pao%20de%20rabanada.webp',
            imageAlt: 'Pão de rabanada sem glúten'
        }
    ],
    relatedProducts: [
        catalog.paesSemGluten,
        catalog.acompanhamentos,
        catalog.pascoa,
        catalog.massas,
        catalog.bebidas,
        catalog.farinhas
      ],
    highlights: {
        title: "Descubra os Segredos do Natal Sem Glúten",
        description: [
            "Redescubra o encanto das festas de final de ano com receitas que todos podem desfrutar. Com este livro, você trará para a mesa o sabor autêntico do Natal, sem glúten e sem culpa.",
            "Surpreenda sua família com panetones fofinhos, rabanadas douradas e sobremesas incríveis que farão todos pedirem a receita."
        ],
        videoEmbedHtml: '<div style="width: 100%; height: 0; padding-bottom: 56.25%; position: relative;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allowtransparency="true" src="https://adilo.bigcommand.com/watch/VkeJWKHn" frameborder="0" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen scrolling="no"></iframe></div>'
    }
  };