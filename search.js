// --- PARTE 1: Redirecionamento da busca (funciona no index.html) ---
const inputBusca = document.getElementById('buscas-input');
const botaoBusca = document.getElementById('buscas-botao');

if (inputBusca && botaoBusca) {
  botaoBusca.addEventListener('click', function() {
    const termo = inputBusca.value.trim();
    if (termo) {
      window.location.href = `search.html?q=${encodeURIComponent(termo)}`;
    }
  });

  inputBusca.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      botaoBusca.click();
    }
  });
}

// --- PARTE 2: Exibição dos resultados (funciona no search.html) ---
const params = new URLSearchParams(window.location.search);
const termoBusca = params.get('q')?.toLowerCase() || "";
const container = document.getElementById('resultados-busca');

if (container && termoBusca) {
  fetch('produtos.json')
    .then(response => {
      if (!response.ok) throw new Error('Erro ao carregar produtos.json');
      return response.json();
    })
    .then(produtos => {
      const resultados = produtos.filter(produto =>
        (produto.nome && produto.nome.toLowerCase().includes(termoBusca)) ||
        (produto.descricao && produto.descricao.toLowerCase().includes(termoBusca)) ||
        (Array.isArray(produto.categorias) && produto.categorias.some(cat => cat.toLowerCase().includes(termoBusca)))
      );

      if (resultados.length > 0) {
        container.innerHTML = resultados.map(produto => `
          <a href="PaginadeProduto.html?id=${encodeURIComponent(produto.id)}" class="produto-link">
            <div class="produto">
              <img src="src/product1.png" alt="${produto.nome || ''}" class="produto-imagem">
              <div class="produto-info">
                <h2>${produto.nome || ''}</h2>
                <p class="produto-preco">R$ ${produto.preco !== undefined ? Number(produto.preco).toFixed(2) : '---'}</p>
                <p>${produto.descricao || ''}</p>
                <div class="categorias">
                  ${(Array.isArray(produto.categorias) ? produto.categorias : []).map(cat => `<span class="categoria">${cat}</span>`).join(' ')}
                </div>
              </div>
            </div>
          </a>
        `).join('');
      } else {
        container.innerHTML = "<p>Nenhum resultado encontrado.</p>";
      }
    })
    .catch(() => {
      container.innerHTML = "<p>Erro ao carregar os produtos.</p>";
    });
}