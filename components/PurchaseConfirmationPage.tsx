import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RelatedProducts from './RelatedProducts';
import { paesSemGlutenData, receitasBoasFestasData } from '../data';

const PurchaseConfirmationPage = () => {
  const { productSlug } = useParams();
  
  // Identify which product was purchased to customize the message and related products
  let productData = null;
  
  // Normalize slug check
  const slug = productSlug?.toLowerCase();

  if (slug === 'paessemgluten' || slug === 'paes-sem-gluten') {
    productData = paesSemGlutenData;
  } else if (slug === 'receitasboasfestas' || slug === 'receitas-boas-festas') {
    productData = receitasBoasFestasData;
  }

  // If we found data, use its related products, otherwise fallback to default
  const relatedProducts = productData ? productData.relatedProducts : paesSemGlutenData.relatedProducts;
  const productTitle = productData ? productData.info.title : 'nosso produto';

  // Dispara o evento para o GTM assim que a página carrega
  useEffect(() => {
    // Verifica se o dataLayer existe (injetado pelo GTM no index.html)
    const dataLayer = (window as any).dataLayer || [];
    // Deduplicação simples por sessão: evita reenviar purchase ao recarregar
    const keyBase = slug || (productData && (productData as any).id) || 'unknown';
    const sentKey = `purchase_sent:${keyBase}`;
    if (typeof window !== 'undefined' && window.sessionStorage?.getItem(sentKey)) {
      return;
    }

    // Converte o preço (ex: "79,90") para number (79.90)
    const priceString = productData ? productData.info.price : "0,00";
    const priceNumber = parseFloat(priceString.replace(',', '.'));

    // Gera um ID de transação fictício baseado no tempo, já que não temos backend
    const transactionId = `T_${Date.now()}`;

    // Limpa o objeto ecommerce anterior (boa prática do GA4)
    dataLayer.push({ ecommerce: null });

    // Envia o evento purchase padrão do GA4
    dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: transactionId,
        value: priceNumber,
        tax: 0,
        shipping: 0,
        currency: 'BRL',
        items: [
          {
            item_name: productTitle,
            item_id: productData?.id || slug,
            price: priceNumber,
            quantity: 1
          }
        ]
      }
    });

    // Marca como enviado nesta sessão
    if (typeof window !== 'undefined') {
      try {
        window.sessionStorage?.setItem(sentKey, String(transactionId));
      } catch (e) {
        void e
      }
    }
  }, [slug, productTitle, productData]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-center">
        
        {/* Success Icon & Message */}
        <div className="mb-10">
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
            <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Compra realizada com sucesso!</h1>
          <p className="mt-4 text-xl text-gray-600">Obrigado por adquirir <span className="font-semibold text-gray-800">{productTitle}</span>.</p>
        </div>

        {/* Instructions Box */}
        <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto border border-gray-200 shadow-sm mb-16">
          <h2 className="text-xl font-bold text-gray-800 mb-4">O que acontece agora?</h2>
          <div className="space-y-4 text-left md:text-center text-gray-700">
            <p>
              📧 <strong>Verifique seu e-mail:</strong> Você receberá em instantes uma mensagem com o link de acesso para baixar seu livro digital.
            </p>
            <p>
              📂 <strong>Pasta de Spam:</strong> Caso não encontre o e-mail na caixa de entrada, dê uma olhadinha na sua caixa de spam ou na aba de promoções.
            </p>
            <p>
              ✅ <strong>Pagamento Confirmado:</strong> Sua transação foi processada com segurança.
            </p>
          </div>
        </div>

        {/* Upsell / Related Products */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete sua coleção</h3>
          <p className="text-gray-500 mb-8">Aproveite para conhecer outros livros que nossos leitores adoram:</p>
          
          {/* We reuse the RelatedProducts component but might want to filter out the bought item if needed. 
              For now, showing the list configured in data.ts is fine as it usually contains cross-sells. */}
          <RelatedProducts products={relatedProducts} />
        </div>

        <div className="mt-12">
           <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
             Voltar para a Loja
           </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default PurchaseConfirmationPage;
