import React from 'react'
import Banner from 'components/Banner'
import Opcoes from 'components/Opcoes'

import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <>
      <Banner />
      <Opcoes />
      <section>
        <h2 className={styles.tech}> Promoções </h2>
        <ul className={styles.produtos}>
          <li className={styles.produto}>
            <img src="img/keyboard-1.jpg" className={styles.produtoImagem} alt="" />

            <h3>Keyboard High Tech</h3>
            <p className={styles.preco}><s>R$ 250,00</s></p>
            <p className={styles.preco}><u>R$ 200,00</u></p>
          </li>
          <li className={styles.produto}>
            <img src="img/keyboard-1.jpg" className={styles.produtoImagem} alt="" />

            <h3>Keyboard High Tech</h3>
            <p className={styles.preco}><s>R$ 250,00</s></p>
            <p className={styles.preco}><u>R$ 200,00</u></p>
          </li>
          <li className={styles.produto}>
            <img src="img/keyboard-1.jpg" className={styles.produtoImagem} alt="" />

            <h3>Keyboard High Tech</h3>
            <p className={styles.preco}><s>R$ 250,00</s></p>
            <p className={styles.preco}><u>R$ 200,00</u></p>
          </li>
          <li className={styles.produto}>
            <img src="img/keyboard-1.jpg" className={styles.produtoImagem} alt="" />

            <h3>Keyboard High Tech</h3>
            <p className={styles.preco}><s>R$ 250,00</s></p>
            <p className={styles.preco}><u>R$ 200,00</u></p>
          </li>
        </ul>
      </section>
    </>
  )
}
