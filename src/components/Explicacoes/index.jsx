import React from 'react'
import styles from './Explicacoes.module.css'

export default function Explicacoes() {
  return (
    <section className={styles.explicacaoContainer}>
        <div className={styles.explicacao}>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            local_shipping
          </span>
          <h2>Frete Grátis</h2>
          <p>A partir de R$ 200,00 em compras</p>
        </div>
        <div className={styles.explicacao}>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            credit_card
          </span>
          <h2>Divide em até</h2>
          <p>12x vezes sem juros</p>
        </div>
        <div className={styles.explicacao}>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            lock
          </span>
          <h2>Seus dados seguros</h2>
          <p>Seus dados estão totalmente seguros</p>
        </div>
    </section>
  )
}
