import React from 'react';
import styles from './Produtos.module.css'

export default function Produtos({ children, itens, setItem }) {

  return (

      <section style={itens.length ? {display: "block"} : {display: "none"} }>
        <h2 className={styles.tituloSection}> {children} </h2>
        <ul className={styles.produtos}>
          {itens.map(item => (
            <li className={styles.produto} key={item.id} onClick={() => setItem(item)}>
                <img src={item.imagem} className={styles.produtoImagem} alt={item.titulo} />

                <h3>{item.titulo}</h3>
                <div className={styles.preco}>
                  {item.maisPedidos ? <img src="./img/stars.png" className={styles.imagemCincoEstrelas} alt="" /> : ''}
                </div>
                {item.promocao 
                    ? <><p className={styles.preco}><s>R$ {item.preco}</s></p> <p className={styles.preco}><u>R$ {item.precoPromocional}</u></p></> 
                    : <p className={styles.preco}><u>R$ {item.preco}</u></p>
                }
            </li>
          ))}
        </ul>
      </section>
  )
}

