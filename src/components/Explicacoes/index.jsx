import React from 'react'
import styles from './Explicacoes.module.css'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Explicacoes() {
  return (
    <section className={styles.explicacaoContainer}>
        <div className={styles.explicacao}>

          <LocalShippingOutlinedIcon style={{ fontSize: "80px" }} />

          <h2>Frete Grátis</h2>
          <p>A partir de R$ 200,00 em compras</p>
        </div>
        <div className={styles.explicacao}>

          <CreditCardOutlinedIcon style={{ fontSize: "80px" }} />

          <h2>Divide em até</h2>
          <p>12x vezes sem juros</p>
        </div>
        <div className={styles.explicacao}>

          <LockOutlinedIcon style={{ fontSize: "80px" }} />

          <h2>Seus dados seguros</h2>
          <p>Seus dados estão totalmente seguros</p>
        </div>
    </section>
  )
}
