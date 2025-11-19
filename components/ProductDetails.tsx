import React from 'react';

const ProductDetails = () => {
  return (
    <div className="space-y-12">
      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-gray-900">Detalhes do livro</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Finalmente, uma bíblia completa que transformará a arte de fazer pão sem glúten, da renomada especialista Dra. Luciene Marques.
          </p>
          <p>
            A autora Dra. Luciene Marques aperfeiçoou a arte de assar sem glúten e conquistou atenção global por sua capacidade de criar pães cheios de textura e sabor usando farinhas alternativas. A Arte do Pão Sem Glúten não apenas compartilha seu segredo para o pão perfeito, mas também oferece 100 receitas para os pães e doces que os intolerantes ao glúten mais sentem falta. Pense em biscoitos, bagels e os croissants mais folhados.
          </p>
          <div className="mt-6 text-gray-700 space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Como fazer pão sem glúten de maneira saudável e sem misturas comerciais?</h3>
            <p>Caro leitor,</p>
            <p>Esse e-book criei pensando em você, que vive na pele as dificuldades de uma vida sem glúten.</p>
            <p>Combinar ingredientes, ser criativa, conciliar sabor, textura e insumos saudáveis não é tarefa fácil, aqui te apresento um oportunidade para parar de errar.</p>
            <p>Pensando em tornar a rotina e a a realidade alimentar de quem tem restrição ao glúten em algo muito mais calmo, leve e tranquilo, reuni diferentes receitas de pães para o seu dia a dia.</p>
            <p>Neste ebook você encontrará receitas para o seu consumo e da sua família ou, quem sabe, iniciar uma outra fonte de renda vendendo seus pães surpreendentes.</p>
            <p className="mt-4">Abraço,</p>
            <p>Dra. Luciene Marques</p>
          </div>
        </div>
      </div>

      {/* Author Info */}
      <div>
        <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-gray-900">Sobre a autora</h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img src="https://eqtzcwqbtcswcfzcfber.supabase.co/storage/v1/object/public/chefglutenfree/perfil-luciene.webp" alt="Dra. Luciene Marques" className="w-24 h-24 rounded-full object-cover" />
            <div>
                <h3 className="text-xl font-bold text-gray-900">Dra. Luciene Marques</h3>
                <p className="mt-2 text-gray-700">Dra. Luciene Marques é uma renomada fisioterapeuta em terapia intensiva e chef do canal especializado ChefGlutenFree. Com anos de pesquisa e prática, ela se dedica a criar receitas deliciosas e saudáveis para pessoas com restrições alimentares. Seus trabalhos foram apresentados em diversas publicações de saúde e bem-estar, além de ter mais de 800 vídeos sobre receitas sem glúten na internet.</p>
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
                        <td className="py-2 text-gray-800">ChefGlutenFree</td>
                    </tr>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700">Data da publicação</th>
                        <td className="py-2 text-gray-800">23 de outubro de 2024</td>
                    </tr>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700">Idioma</th>
                        <td className="py-2 text-gray-800">Português</td>
                    </tr>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700">Número de páginas</th>
                        <td className="py-2 text-gray-800">123 páginas</td>
                    </tr>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700">ISBN-10</th>
                        <td className="py-2 text-gray-800">164829202X</td>
                    </tr>
                    <tr className="border-b">
                        <th className="py-2 pr-4 font-semibold text-gray-700">ISBN-13</th>
                        <td className="py-2 text-gray-800">978-1648292026</td>
                    </tr>
                    <tr>
                        <th className="py-2 pr-4 font-semibold text-gray-700">Formato</th>
                        <td className="py-2 text-gray-800">Digital</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;