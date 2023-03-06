import { createContext, useContext, useEffect, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

    return (
        <CarrinhoContext.Provider 
            value={{ 
                carrinho, 
                setCarrinho, 
                quantidadeCarrinho,
                setQuantidadeCarrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { 
        carrinho, 
        setCarrinho, 
        quantidadeCarrinho, 
        setQuantidadeCarrinho 
    } = useContext(CarrinhoContext);

    function mudarQuantidade(id, quantidade) {
        return carrinho.map(itemDoCarrinho => {
            if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
            return itemDoCarrinho;
        })
    }

    function adicionarProduto(produto) {
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === produto.id)
        if(!temOProduto) {
            produto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => 
                [...carrinhoAnterior, produto]
            );
        }
        setCarrinho(mudarQuantidade(produto.id, 1))
    }

    function removerProduto(id) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
        const ehOUltimo = produto.quantidade === 1;

        if(ehOUltimo) {
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => 
                itemDoCarrinho.id !== id
            ));
        }

        setCarrinho(mudarQuantidade(id, -1))
    }

    useEffect(() => {
        const novaQuantidade = carrinho.reduce((contador, produto) => contador + produto.quantidade, 0);
        setQuantidadeCarrinho(novaQuantidade);
    }, [carrinho, setQuantidadeCarrinho]);

    return {
        carrinho, 
        setCarrinho,
        adicionarProduto, 
        removerProduto, 
        quantidadeCarrinho, 
        setQuantidadeCarrinho
    }
}