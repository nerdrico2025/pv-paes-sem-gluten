import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import { paesSemGlutenData, receitasBoasFestasData } from './data';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductPage data={paesSemGlutenData} />} />
        <Route path="/paessemgluten" element={<ProductPage data={paesSemGlutenData} />} />
        <Route path="/receitasboasfestas" element={<ProductPage data={receitasBoasFestasData} />} />
        {/* Catch all redirects to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;