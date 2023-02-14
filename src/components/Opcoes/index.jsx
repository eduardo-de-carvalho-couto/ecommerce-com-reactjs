import React from 'react';
import styles from './Opcoes.module.css';

import produtos from 'json/produtos.json'

export default function Opcoes({ opcoes, filtrarProdutos, setItens }) {

  const tags = opcoes.slice(0, 6)

  return (
    <section>
        <ul className={styles.tags}>
            {tags.map((tag) => (
                <li className={styles.tag} key={tag.id} onClick={() => filtrarProdutos(tag.tag)}>
                    <img className={styles.imagem} src={tag.imagem} alt="" />

                    <h3>{tag.tag}</h3>
                </li>
            ))}
            <li className={styles.tag} key={"todos"} onClick={() => { setItens(produtos) }} >
                <img className={styles.imagem} src={"./img/eletronicos.jpg"} alt="" />

                <h3>Todos</h3>
            </li>
        </ul>
    </section>
  )
}
