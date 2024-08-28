//Testar as APIs
// - Rest Client - Extensão do VS Code
// - Postman
// - Insomnia
//MINIMAL APIs
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//EndPoints - Funcionalidades
//Configurar a URL e o método/verbo
app.MapGet("/", () => "Hello World em C#!");

app.MapGet("/segundafuncionalidade", () => "Segunda funcionalidade da API");

app.MapGet("/retonarendereco", () => 
{
    dynamic endereco = new {
        rua = "Parigot de Souza",
        numero = 5300,
        cep = "81290-350"
    };
    return endereco;
});

//Criar um funcionalidade para receber informações
// - Receber informações pela URL da req
// - Receber informações pelo corpo da req
//Guardar as informações em uma lista

app.Run();
