import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import PurchaseConfirmationPage from './components/PurchaseConfirmationPage';
import { paesSemGlutenData, receitasBoasFestasData } from './data';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductPage data={paesSemGlutenData} />} />
        <Route path="/paessemgluten" element={<ProductPage data={paesSemGlutenData} />} />
        <Route path="/receitasboasfestas" element={<ProductPage data={receitasBoasFestasData} />} />
        
        {/* Rota para página de confirmação de compra dinâmica baseada no slug do produto */}
        <Route path="/:productSlug/comprarealizada" element={<PurchaseConfirmationPage />} />

        {/* Catch all redirects to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;