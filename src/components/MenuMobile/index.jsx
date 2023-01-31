import React from 'react'
import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.css'
import { MenuMobileItem } from './MenuMobileItem';

export default function MenuMobile({ toggleMenuMobile, showMenuMobile }) {

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
          <div onClick={toggleMenuMobile} className={styles.ultimaOpcao}>
            <Link to="/ultima-opcao">Última opção</Link>
          </div>
        </div>
      </div>
    </>
  )
}
