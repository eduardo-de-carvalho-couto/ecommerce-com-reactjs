import { useCarrinhoContext } from 'common/context/Carrinho'
import { ComprarItem } from 'components/Comprar/ComprarItem';
import styles from './Carrinho.module.css';
import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Carrinho() {
  const { carrinho, valorTotalCarrinho } = useCarrinhoContext();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.cabecalho}>
        <h2>Carrinho</h2>

        <ArrowBackOutlinedIcon className={styles.voltar} onClick={() => {navigate(-1)}} />
      </div>

      <ul>
        {carrinho.map(produto => (
          <li key={produto.id}>
            <ComprarItem produto={produto}/>
          </li>
        ))}
      </ul>

      <p className={styles.total}>Total no carrinho:</p>
      <p className={styles.total}>R$ {valorTotalCarrinho.toFixed(2)}</p>
      

      <div className={styles.centralizadorDoBotao}>
        <Button color="primary" variant="contained" className={styles.comprar} >Compra</Button>
      </div>
    </div>
  )
}
