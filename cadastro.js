document.getElementById("produtoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const preco = parseFloat(document.getElementById("preco").value).toFixed(2);

  const novoProduto = {
    nome,
    preco
  };

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.push(novoProduto);
  localStorage.setItem("produtos", JSON.stringify(produtos));

  alert("Produto cadastrado com sucesso!");
  document.getElementById("produtoForm").reset();
  mostrarProdutos();
});

function mostrarProdutos() {
  const container = document.getElementById("listaProdutos");
  container.innerHTML = "";

  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  produtos.forEach((produto, index) => {
    const item = document.createElement("div");
    item.style.border = "1px solid #ccc";
    item.style.padding = "10px";
    item.style.margin = "10px 0";

    item.innerHTML = `
      <h4>${produto.nome}</h4>
      <img src="src/product1.png" alt="${produto.nome}" width="150"><br>
      <strong>Preço:</strong> R$ ${produto.preco}
    `;

    container.appendChild(item);
  });
}

function baixarJSON() {
const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
const blob = new Blob([JSON.stringify(produtos, null, 2)], { type: "application/json" });
const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "produtos.json";
a.click();

URL.revokeObjectURL(url);
}

// Exibe os produtos ao carregar a página
mostrarProdutos();
