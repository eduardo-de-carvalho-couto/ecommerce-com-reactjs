import React from 'react'
import styles from './AdicionarProduto.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { useCarrinhoContext } from 'common/context/Carrinho';

export default function AdicionarProduto({ produto }) {

  const { carrinho, adicionarProduto } = useCarrinhoContext()
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === produto.id)

  return (
    <div className={styles.container}>
      <h3>Keyboards - R$ 100,00</h3>
      <IconButton color="primary" onClick={() => adicionarProduto(produto)}>
        <AddIcon />
      </IconButton>

      {produtoNoCarrinho?.quantidade || 0}

      <IconButton color="secondary">
        <RemoveIcon />
      </IconButton>
      
      <p>Há 5 itens no carrinho</p>

      <Button variant="contained" fullWidth={true} >Finalizar Compra</Button>
    </div>
  )
}
