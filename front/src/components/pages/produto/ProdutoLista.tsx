import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import styles from "./ProdutoLista.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ProdutoLista() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:5020/api/produto/listar")
      .then((resposta) => {
        return resposta.json();
      })
      .then((produtos) => {
        setProdutos(produtos);
      });
  });

  function deletar(id: string) {
    axios
      .delete(`http://localhost:5020/api/produto/deletar/${id}`)
      .then((resposta) => {
        console.log(resposta.data);
      });
  }

  return (
    <div className="container">
      <h1>Lista de Produtos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Criado Em</th>
            <th>Deletar</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.categoria?.nome}</td>
              <td>{produto.criadoEm}</td>
              <td>
                <button onClick={() => deletar(produto.id!)}>
                  Deletar
                </button>
              </td>
              <td>
                <Link to={`/pages/produto/alterar/${produto.id}`}>
                  Alterar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoLista;
