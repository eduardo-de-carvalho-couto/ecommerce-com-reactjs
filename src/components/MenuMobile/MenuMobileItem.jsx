import React from 'react'
import styles from './MenuMobile.module.css'

export const MenuMobileItem = () => {
    return (
        <div className={styles.MenuMobileItemContainer}>
            <div className={styles.MenuMobileItem}>
                <a href='#'>Opção Opção </a>
            </div>
        </div>
    );
}