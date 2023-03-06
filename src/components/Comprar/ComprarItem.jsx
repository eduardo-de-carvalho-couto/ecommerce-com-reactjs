import { useCarrinhoContext } from 'common/context/Carrinho';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import styles from './Comprar.module.css'


export const ComprarItem = ({ produto }) => {
    const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
    const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === produto.id);

  return (
    <>
        <h3 className={styles.tituloEPreco}>{produto.titulo} - {(produto.precoPromocional ? produto.precoPromocional : produto.preco).toFixed(2)}</h3>
        <div>
          <IconButton color="primary" onClick={() => adicionarProduto(produto)}>
          <AddIcon />
          </IconButton>

          {produtoNoCarrinho?.quantidade || 0}

          <IconButton color="secondary" onClick={() => removerProduto(produto.id)} disabled={!produtoNoCarrinho}>
          <RemoveIcon />
          </IconButton>
        </div>
    </>
  )
}
