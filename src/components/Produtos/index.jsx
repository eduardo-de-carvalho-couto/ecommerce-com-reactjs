import React from 'react';
import styles from './Produtos.module.css'

export default function Produtos({ itens }) {

  return (
    <ul className={styles.produtos}>
        {itens.map(item => (
            <li className={styles.produto} key={item.id}>
                <img src={item.imagem} className={styles.produtoImagem} alt={item.titulo} />

                <h3>{item.titulo}</h3>
                <div className={styles.preco}>
                  {item.maisPedidos ? <img src="./img/stars.png" className={styles.imagemCincoEstrelas} alt="" /> : ''}
                </div>
                {item.promocao 
                    ? <><p className={styles.preco}><s>{item.preco}</s></p> <p className={styles.preco}><u>{item.precoPromocional}</u></p></> 
                    : <p className={styles.preco}><u>{item.preco}</u></p>
                }
            </li>
        ))}
    </ul>
  )
}

