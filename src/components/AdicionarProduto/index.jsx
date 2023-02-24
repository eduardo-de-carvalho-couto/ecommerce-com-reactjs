import React from 'react'
import styles from './AdicionarProduto.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';

export default function AdicionarProduto() {
  return (
    <div className={styles.container}>
      <h3>Keyboards - R$ 100,00</h3>
      <IconButton color="primary">
        <AddIcon />
      </IconButton>

      0

      <IconButton color="secondary">
        <RemoveIcon />
      </IconButton>
      
      <Button variant="contained" >Adicionar</Button>
      
      <p>Há 5 itens no carrinho</p>

      <Button variant="contained" fullWidth={true} >Finalizar Compra</Button>
    </div>
  )
}
