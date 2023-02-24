import React from 'react'
import styles from './AdicionarProduto.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';

export default function AdicionarProduto() {
  return (
    <div className={styles.container}>
      <h3>Keyboards - R$ 100,00</h3>
      <IconButton color="primary">
        <AddIcon />
      </IconButton>
      <IconButton color="secondary">
        <RemoveIcon />
      </IconButton>
    </div>
  )
}
