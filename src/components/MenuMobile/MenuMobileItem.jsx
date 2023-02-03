import React from 'react';
import styles from './MenuMobile.module.css';

import opcoes from '../../json/opcoes.json';

export const MenuMobileItem = () => {
    return (
        <ul className={styles.MenuMobileItemContainer}>
            {opcoes.map((opcao) => (
                <li className={styles.MenuMobileItem} key={opcao.id}>
                    <a href='#'> {opcao.titulo} </a>
                </li>
            ))}
        </ul>
    );
}