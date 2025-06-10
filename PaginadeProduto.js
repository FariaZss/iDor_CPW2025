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
                    container.innerHTML = `
                        <div class="produto-detalhe">
                            <img src="${produto.imagem || 'src/product1.png'}" alt="${produto.nome}" class="produto-imagem">
                            <div class="produto-info">
                                <h1>${produto.nome}</h1>
                                <p>${produto.descricao}</p>
                                <div class="produto-preco">Preço: R$ ${produto.preco}</div>
                            </div>
                        </div>
                    `;
                } else {
                    container.innerHTML = '<h2>Produto não encontrado.</h2>';
                }
            } catch (e) {
                container.innerHTML = '<h2>Erro ao carregar produto.</h2>';
            }
        }

        carregarProduto();