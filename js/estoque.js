const API_URL = "http://localhost:8080";

async function buscarProdutos() {

    try {
        const resposta = await fetch(`${API_URL}/produtos`);

        if(!resposta.ok) {
            throw new Error("Erro ao buscar produtos.")
        }

        const produtos = await resposta.json();

        mostrarProdutos(produtos);
        atualizarResumo(produtos);
    } catch (erro) {
        console.error("Erro: ", erro);
    }
    
}

buscarProdutos();

function mostrarProdutos(produtos) {

    const lista = document.getElementById("listar-produtos");

    lista.innerHTML = "";

    produtos.forEach(produto => {

        const estoqueBaixo =
            produto.quantidade <= produto.estoqueMinimo;

        const div = document.createElement("div");

        div.classList.add("produto");

        if (estoqueBaixo) {
            div.classList.add("baixo");
        }

        div.innerHTML = `
            <div class="produto-info">

                <h3>${produto.nome}</h3>

                <p>${produto.categoria}</p>

                ${
                    estoqueBaixo
                        ? `<p class="aviso-estoque">
                            ⚠️ Estoque abaixo do mínimo
                            </p>`
                        : ""
                }

            </div>

            <div class="produto-quantidade">

                <strong>${produto.quantidade}</strong>

                <span>
                    mínimo: ${produto.estoqueMinimo}
                </span>

            </div>
        `;

        lista.appendChild(div);

    });

}

function atualizarResumo(produtos) {
    const totalProdutos = document.getElementById("total-produtos");
    const estoqueBaixo = document.getElementById("estoque-baixo");
    const valorEstoque = document.getElementById("valor-estoque");

    totalProdutos.textContent = produtos.length;

    const produtosBaixoEstoque = produtos.filter(produto =>
        produto.quantidade <= produto.estoqueMinimo
    );
    estoqueBaixo.textContent = produtosBaixoEstoque.length;

    const valorTotal = produtos.reduce((total, produto) => {
        return total + (produto.quantidade * produto.preco);
    }, 0);

    valorEstoque.textContent = valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

const btnAdicionar = document.getElementById("btn-add");
const btnCancelar = document.getElementById("btn-cancelar");
const formularioContainer = document.getElementById("formulario-container");
const formProduto = document.getElementById("form-produto");

btnAdicionar.addEventListener("click", () => {
    formularioContainer.style.display = "block";
    btnAdicionar.style.display = "none";
});

btnCancelar.addEventListener("click", () => {
    formularioContainer.style.display = "none";
    btnAdicionar.style.display = "inline-block";
    formProduto.reset();
});

async function carregarFornecedores() {
    const selectFornecedor = document.getElementById("fornecedorId");

    try {
        const resposta = await fetch(`${API_URL}/fornecedores`);

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os fornecedores.");
        }

        const fornecedores = await resposta.json();

        fornecedores.forEach(fornecedor => {
            const opcao = document.createElement("option");

            opcao.value = fornecedor.id;
            opcao.textContent = fornecedor.nome;

            selectFornecedor.appendChild(opcao);
        });

    } catch (erro) {
        console.error("Erro ao carregar fornecedores:", erro);
    }
}

carregarFornecedores();