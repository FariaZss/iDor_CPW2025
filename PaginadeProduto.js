// Função para obter o parâmetro id da URL
        function getIdFromUrl() {
            const params = new URLSearchParams(window.location.search);
            return params.get('id');
        }

        // Busca o produto no produtos.json e exibe na página
        async function carregarProduto() {
            const id = getIdFromUrl();
            const container = document.getElementById('produto-container');
            try {
                const resposta = await fetch('produtos.json');
                const produtos = await resposta.json();
                const produto = produtos.find(p => p.id == id);

                if (produto) {
                    let categorias = [];
                    if (Array.isArray(produto.categorias)) {
                        categorias = produto.categorias;
                    } else if (typeof produto.categorias === 'string') {
                        categorias = produto.categorias.split(',').map(cat => cat.trim());
                    }

                    const categoriasHTML = categorias
                    .map(cat => `<span class="categoria, categoria-btn">${cat}</span>`)
                    .join(' ');

                    container.innerHTML = `
                        <div class="produto-detalhe">
                            <img src="src/product1.png" alt="${produto.nome}" class="produto-imagem">
                            <div class="produto-info">
                                <h1>${produto.nome}</h1>
                                <p>${produto.descricao}</p>
                                <div>
                                    ${(categorias || []).map(cat => `
                                        <a href="categorias.html?categoria=${encodeURIComponent(cat)}" class="categoria-btn btn btn-outline-success btn-sm m-1">${cat}</a>
                                    `).join('')}
                                </div>
                                <div class="produto-preco">R$ ${Number(produto.preco).toFixed(2)}</div>
                                <a href="PaginadeProduto.html?id=${encodeURIComponent(produto.id)}" class="btn btn-success btn-comprar" style="margin-top:24px; padding: 10px 32px; font-size: 1.1em; border-radius: 8px;">
                                    <i class="bi bi-cart-plus" style="margin-right:8px;"></i>Comprar
                                </a>
                            </div>
                        </div>
                    `;

                    document.querySelector('.btn-comprar').onclick = function() {
                        let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
                        let jaExiste = carrinho.find(item => item.id == produto.id);
                        if (jaExiste) {
                            jaExiste.quantidade = (jaExiste.quantidade || 1) + 1;
                        } else {
                            carrinho.push({id: produto.id, quantidade: 1});
                        }
                        localStorage.setItem('carrinho', JSON.stringify(carrinho));
                        if (typeof atualizarBadgeCarrinho === 'function') atualizarBadgeCarrinho();
                        alert('Produto adicionado ao carrinho!');
                    };
                } else {
                    container.innerHTML = '<h2>Produto não encontrado.</h2>';
                }
            } catch (e) {
                container.innerHTML = '<h2>Erro ao carregar produto.</h2>';
            }
        }

        carregarProduto();
