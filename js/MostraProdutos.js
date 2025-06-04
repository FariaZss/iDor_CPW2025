function mostrar(){
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.querySelector("#produtos-container");

            produtos.map(produto => {
                const card = document.createElement("div");
                card.classList.add("body prod");
                
                const img = document.createElement("img");
                img.src = produto.imagem
                img.alt = produto.nome

                const nome = document.createElement("h5");
                nome.textContent = produto.nome;

                card.appendChild(img)
                card.appendChild(nome)
                container.appendChild(card)
            })
        })
}