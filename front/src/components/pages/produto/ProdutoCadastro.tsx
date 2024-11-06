import { useState } from "react";
import { Produto } from "../../../models/Produto";

function ProdutoCadastro() {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");

    function enviarProduto(e : any){
        e.preventDefault();

        const produto : Produto = {
            nome : nome,
            descricao : descricao,
            quantidade : Number(quantidade),
            preco : Number(preco)
        };

        fetch("http://localhost:5020/api/produto/cadastrar", 
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(produto)
            })
            .then(resposta => {
                return resposta.json();
            })
            .then(produto => {
                console.log("Produto cadastrado", produto);
            });

    }

    return (
        <div id="cadastrar_produto">
            <form onSubmit={enviarProduto}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome"
                        onChange={(e: any) => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" id="descricao" name="descricao"
                        onChange={(e: any) => setDescricao(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="preco">Preço</label>
                    <input type="number" id="preco" name="preco" 
                        onChange={(e: any) => setPreco(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="quantidade">Quantidade</label>
                    <input type="number" id="quantidade" name="quantidade" 
                        onChange={(e: any) => setQuantidade(e.target.value)} />
                </div>

                <button type="submit">Cadastrar Produto</button>
            </form>

        </div>
    );
}

export default ProdutoCadastro;