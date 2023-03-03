import React from 'react'
import styles from './Carrinho.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { useCarrinhoContext } from 'common/context/Carrinho';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function AdicionarProduto({ produto, setProduto }) {

  const { carrinho, adicionarProduto, removerProduto, quantidadeCarrinho } = useCarrinhoContext()
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === produto.id)

  return (
    <div className={styles.container}>
      <CloseOutlinedIcon className={styles.close} onClick={() => {setProduto('')}} />
      <h3>{produto.titulo} - {produto.preco}</h3>
      <IconButton color="primary" onClick={() => adicionarProduto(produto)}>
        <AddIcon />
      </IconButton>

      {produtoNoCarrinho?.quantidade || 0}

      <IconButton color="secondary" onClick={() => removerProduto(produto.id)} disabled={!produtoNoCarrinho}>
        <RemoveIcon />
      </IconButton>
      
      <p>Há {quantidadeCarrinho} itens no carrinho</p>

      <Button variant="contained" fullWidth={true} >Finalizar Compra</Button>
    </div>
  )
}
