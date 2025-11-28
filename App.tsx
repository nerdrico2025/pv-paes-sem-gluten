import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import PurchaseConfirmationPage from './components/PurchaseConfirmationPage';
import { paesSemGlutenData, receitasBoasFestasData } from './data';

function PageView() {
  const location = useLocation();
  React.useEffect(() => {
    const dl: any[] = (window as any).dataLayer || [];
    let shouldSend = true;
    try {
      const v = sessionStorage.getItem('hash_redirect_to');
      if (v) {
        const [p, t] = v.split('|');
        const ts = parseInt(t, 10);
        if (p === location.pathname && !Number.isNaN(ts) && Date.now() - ts < 3000) {
          shouldSend = false;
        }
        sessionStorage.removeItem('hash_redirect_to');
      }
    } catch (e) { void e }
    if (shouldSend) {
      dl.push({
        event: 'page_view',
        page_path: location.pathname,
        page_title: document.title
      });
    }
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <PageView />
      <Routes>
        <Route path="/" element={<ProductPage data={paesSemGlutenData} />} />
        <Route path="/paessemgluten" element={<ProductPage data={paesSemGlutenData} />} />
        <Route path="/receitasboasfestas" element={<ProductPage data={receitasBoasFestasData} />} />
        {/* Rota para página de confirmação de compra dinâmica baseada no slug do produto */}
        <Route path="/:productSlug/comprarealizada" element={<PurchaseConfirmationPage />} />
        {/* Catch all redirects to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
