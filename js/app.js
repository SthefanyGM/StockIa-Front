const abaIA = document.getElementById("aba-ia");
const abaEstoque = document.getElementById("aba-estoque");
const telaInicio = document.getElementById("inicio");
const telaEstoque = document.getElementById("tela-estoque");

telaInicio.style.display = "block";
telaEstoque.style.display = "none";

abaIA.addEventListener("click", () => {
    
    abaIA.classList.add("ativa");
    abaEstoque.classList.remove("ativa");

    telaInicio.style.display = "block";
    telaEstoque.style.display = "none";
});

abaEstoque.addEventListener("click", () => {

    abaEstoque.classList.add("ativa");
    abaIA.classList.remove("ativa");

    telaInicio.style.display = "none";
    telaEstoque.style.display = "block";
});


// Teste

// const produtosTeste = [
//     {
//         id: 1,
//         nome: "Torneira",
//         categoria: "Hidráulica",
//         quantidade: 10,
//         estoqueMinimo: 3,
//         preco: 89.90
//     },
//     {
//         id: 2,
//         nome: "Mangueira",
//         categoria: "Hidráulica",
//         quantidade: 2,
//         estoqueMinimo: 5,
//         preco: 35.90
//     },
//     {
//         id: 3,
//         nome: "Registro",
//         categoria: "Hidráulica",
//         quantidade: 8,
//         estoqueMinimo: 3,
//         preco: 45.00
//     }
// ];



// mostrarProdutos(produtosTeste);