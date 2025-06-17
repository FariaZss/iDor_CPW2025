document.getElementById("produtoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const preco = parseFloat(document.getElementById("preco").value).toFixed(2);
  const descricao = document.getElementById("desc").value;
  const categorias = document.getElementById('categorias').value

  const categoriasArray = categorias
    .split(',')
    .map(cat => cat.trim())
    .filter(cat => cat.length > 0);

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
    nome,
    preco,
    descricao,
    categorias: categoriasArray // Adiciona o array de categorias ao produto
  };

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

function carregarJSON() {
  const input = document.getElementById("uploadJSON");
  if (input.files.length === 0) {
    alert("Selecione um arquivo JSON.");
    return;
  }
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const produtos = JSON.parse(e.target.result);
      if (!Array.isArray(produtos)) {
        alert("O arquivo deve conter um array de produtos.");
        return;
      }
      localStorage.setItem("produtos", JSON.stringify(produtos));
      mostrarProdutos();
      alert("Produtos carregados com sucesso!");
    } catch (err) {
      alert("Arquivo JSON inválido.");
    }
  };
  reader.readAsText(file);
}

// Exibe os produtos ao carregar a página
mostrarProdutos();
