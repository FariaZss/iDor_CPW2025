// Carrinho.js
export function criarCarrinho() {
    const itens = [];

    return {
        adicionar: (produtoId, quantidade) => {
            const existente = itens.find(item => item.produtoId === produtoId);
            if (existente) {
                existente.quantidade += quantidade;
            } else {
                itens.push({ produtoId, quantidade });
            }
        },
        listar: () => itens
    };
}
