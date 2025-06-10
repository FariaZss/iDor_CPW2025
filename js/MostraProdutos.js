function mostrar() {
    console.log('mostraprodutos.js carregado');
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container');
            container.innerHTML = ''; //limpa o container antes de adicionar para garantir que não tenha duplicados

            produtos.forEach(produto => {
                const card = document.createElement("li");
                card.classList.add("body", "prod");

                // Botão basket
                const basketBtn = document.createElement("button");
                basketBtn.classList.add("produtos-btns", "basket-btn");
                basketBtn.innerHTML = '<i class="bi bi-basket2"></i>';

                // Botão heart
                const heartBtn = document.createElement("button");
                heartBtn.classList.add("produtos-btns", "heart-btn");
                heartBtn.innerHTML = '<i class="bi bi-heart"></i>';

                //ibagem do produto
                const img = document.createElement("img");
                img.src = 'src/product1.png'; // Caminho fixo para a imagem - poderiamos alterar, podemos usar outros caminhos para outros tipos de produto também;
                img.alt = produto.nome;

                // Nome e preço do produto dentro de .cta
                const ctaDiv = document.createElement("div");
                ctaDiv.classList.add("cta");
                const nome = document.createElement("h5");
                nome.textContent = produto.nome;

                //preço
                const preco = document.createElement("span");
                preco.classList.add("preco-produto");
                preco.textContent = produto.preco ? `R$ ${produto.preco}` : "Preço indisponível";

                ctaDiv.appendChild(nome);
                // Torna o span "preco-produto" clicável e redireciona para PaginadeProduto.html com o id do produto
                preco.style.cursor = "pointer";
                preco.addEventListener('click', () => {
                    window.location.href = `PaginadeProduto.html?id=${produto.id}`;
                });
                ctaDiv.appendChild(preco);

                // Monta o card
                card.appendChild(basketBtn);
                card.appendChild(heartBtn);
                card.appendChild(img);
                card.appendChild(ctaDiv);

                container.appendChild(card);
            });
        });
}

mostrar();