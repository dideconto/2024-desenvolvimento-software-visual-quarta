import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";

function ProdutoLista(){
    
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {        
        fetch("http://localhost:5020/api/produto/listar")
            .then(resposta => {
                return resposta.json();
            })
            .then(produtos => {
                setProdutos(produtos);
            });        
    });
    
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProdutoLista;