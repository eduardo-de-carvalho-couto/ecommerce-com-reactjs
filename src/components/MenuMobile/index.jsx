import React from 'react'
import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.css'
import { MenuMobileItem } from './MenuMobileItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

export default function MenuMobile({ toggleMenuMobile, showMenuMobile }) {

  return (

    <>
      <div className={showMenuMobile ? styles.opcaoEspecialAtivada : styles.opcaoEspecialDesativada}>
        <div className={styles.opcaoEspecial}>
          <a href="#" className={styles.opcaoEspecialItem}><HomeOutlinedIcon /> Home </a>
          <a href="#" className={styles.opcaoEspecialItem}><Inventory2OutlinedIcon /> Meus Pedidos</a>
        </div>
      </div>

      <div className={showMenuMobile ? styles.menuMobileTransition : styles.menuMobileDisabled}>
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
