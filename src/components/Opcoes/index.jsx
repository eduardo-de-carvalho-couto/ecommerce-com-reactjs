import React from 'react';
import styles from './Opcoes.module.css';

import opcoes from '../../json/opcoes.json';

export default function Opcoes() {
  return (
    <section>
        <ul className={styles.opcoes}>
            {opcoes.map((opcao) => (
                <li className={styles.opcao} key={opcao.id}>
                    <img className={styles.imagem} src={opcao.imagem} alt="" />

                    <h3>{opcao.titulo}</h3>
                </li>
            ))}
        </ul>
    </section>
  )
}
