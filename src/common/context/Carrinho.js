import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    function adicionarProduto(produto) {
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === produto.id)
        if(!temOProduto) {
            produto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => 
                [...carrinhoAnterior, produto]
            );
        }
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
            if(itemDoCarrinho.id === produto.id) itemDoCarrinho.quantidade += 1;
            return itemDoCarrinho;
        }))
    }

    return {
        carrinho, 
        setCarrinho,
        adicionarProduto
    }
}