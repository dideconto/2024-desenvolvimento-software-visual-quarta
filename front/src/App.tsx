import React from 'react';
import ConsultarCEP from './components/samples/ConsultarCEP';
import ProdutoLista from './components/pages/produto/ProdutoLista';
import ProdutoCadastro from './components/pages/produto/ProdutoCadastro';

function App() {
  return (
    <div>
      <ProdutoCadastro/>
      <ProdutoLista />
    </div>
  );
}

export default App;
