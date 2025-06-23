  // Função para obter o parâmetro categoria da URL
        function getCategoriaFromUrl() {
            const params = new URLSearchParams(window.location.search);
            return params.get('categoria');
        }

        // Renderiza os cards de produto
        function renderizarProdutos(produtos) {
            const container = document.getElementById('produtos-categoria-container');
            if (!produtos.length) {
                container.innerHTML = '<div style="text-align:center;width:100%;">Nenhum produto encontrado nesta categoria.</div>';
                return;
            }
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
        }

        // Carrega produtos da categoria selecionada
        async function carregarProdutosCategoria() {
            const categoria = getCategoriaFromUrl();
            document.getElementById('categoria-titulo').textContent = categoria ? `Categoria: ${categoria}` : 'Categoria';
            try {
                const resposta = await fetch('produtos.json');
                const produtos = await resposta.json();
                // Filtra produtos que possuem a categoria (considerando array ou string)
                const filtrados = produtos.filter(produto => {
                    if (Array.isArray(produto.categorias)) {
                        return produto.categorias.map(c => c.toLowerCase()).includes(categoria?.toLowerCase());
                    } else if (typeof produto.categorias === 'string') {
                        return produto.categorias.toLowerCase().split(',').map(c => c.trim()).includes(categoria?.toLowerCase());
                    }
                    return false;
                });
                renderizarProdutos(filtrados);
            } catch (e) {
                document.getElementById('produtos-categoria-container').innerHTML = '<div style="text-align:center;width:100%;">Erro ao carregar produtos.</div>';
            }
        }

        carregarProdutosCategoria();