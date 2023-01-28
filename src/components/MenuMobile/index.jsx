import React from 'react'
import styles from './MenuMobile.module.css'
import { MenuMobileItem } from './MenuMobileItem';

export default function MenuMobile({ showMenuMobile }) {


  return (

    <>
      <div className={showMenuMobile ? styles.opcaoEspecialAtivada : styles.opcaoEspecialDesativada}>
        <div className={styles.opcaoEspecial}>
          <a href="#" className={styles.opcaoEspecialItem}><span className="material-symbols-outlined"> home </span> Home </a>
          <a href="#" className={styles.opcaoEspecialItem}><span className="material-symbols-outlined"> inventory_2</span> Meus Pedidos</a>
        </div>
      </div>

      <div className={showMenuMobile ? styles.menuMobile : styles.menuMobileDisabled}>
        <MenuMobileItem />
        <MenuMobileItem />
        <MenuMobileItem />
        <MenuMobileItem />
        <MenuMobileItem />
        <MenuMobileItem />
        <MenuMobileItem />
        <MenuMobileItem />
        <div className={styles.ultimaOpcaoContainer}>
          <div className={styles.ultimaOpcao}>
            <a href="#">Última opção</a>
          </div>
        </div>
      </div>
    </>
  )
}
