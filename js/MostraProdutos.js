function mostrar() {
    console.log('mostraprodutos.js carregado');
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container');
            container.innerHTML = ''; //limpa o container antes de adicionar para garantir que não tenha duplicados

            container.innerHTML = produtos.map(produto => `
  <li class="produto-card">
    <img src="${produto.imagem || 'src/product1.png'}" class="produto-img" alt="${produto.nome}">
    <div class="produto-card-body">
      <div class="produto-card-title">${produto.nome}</div>
      <div class="produto-card-desc">${produto.descricao}</div>
      <div class="produto-card-categorias">
        ${(produto.categorias || []).map(cat => `<span class="badge">${cat}</span>`).join('')}
      </div>
      <div class="produto-card-footer">
        <span class="produto-preco">R$ ${Number(produto.preco).toFixed(2)}</span>
        <a href="PaginadeProduto.html?id=${encodeURIComponent(produto.id)}" class="btn btn-success btn-comprar">
          <i class="bi bi-cart-plus"></i> Comprar
        </a>
      </div>
    </div>
  </li>
`).join('');
        });
}

mostrar();