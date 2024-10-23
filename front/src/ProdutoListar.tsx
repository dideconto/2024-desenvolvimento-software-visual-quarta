import { useEffect } from "react";

function ProdutoListar(){    
    useEffect(() => {
        //Função utilizada para executar algum código
        //ao abrir ou renderizar o componente
        //AXIOS biblioteca de requisições HTTP
        fetch("https://viacep.com.br/ws/81280330/json/")
            .then(resposta => {
                return resposta.json();
            })
            .then(cep => {
                console.log(cep);
            })
    });
    
    return (
        <div>
            <h1>Primeiro Post!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad expedita voluptatem laboriosam? Rem possimus aliquid quisquam molestiae nobis. Sapiente dignissimos temporibus aliquam? Soluta quia mollitia non inventore voluptates harum?</p>
        </div>
    );
}

export default ProdutoListar;

//1 - Exibir alguma informação do CEP no navegador
//2 - Realizar a requisição para a sua API
//3 - Resolver o problema de CORS que será mostrado 
//no console
//4 - Exibir a lista de produtos no navegador