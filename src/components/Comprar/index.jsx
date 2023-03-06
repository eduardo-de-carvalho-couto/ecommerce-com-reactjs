import React from 'react'
import styles from './Comprar.module.css'
import Button from '@mui/material/Button';
import { useCarrinhoContext } from 'common/context/Carrinho';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from 'react-router-dom';
import { ComprarItem } from './ComprarItem';

export default function Comprar({ produto, setProduto }) {

  const { quantidadeCarrinho } = useCarrinhoContext();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <CloseOutlinedIcon className={styles.close} onClick={() => {setProduto('')}} />
      
      <ComprarItem produto={produto} />
      
      <p>Há {quantidadeCarrinho} itens no carrinho</p>

      <Button variant="contained" fullWidth={true} onClick={() => navigate("/carrinho")} >Finalizar Compra</Button>
    </div>
  )
}
