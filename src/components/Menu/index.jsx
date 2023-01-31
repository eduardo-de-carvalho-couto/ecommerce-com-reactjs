import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuMobile from '../MenuMobile'
import styles from './Menu.module.css'

export default function Menu() {

  const [menuMobile, setMenuMobile] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState('none')

  const toggleMenuMobile = () => {
    setMenuMobile(!menuMobile)
    setShowMenuMobile('block');
  }
    
  return (
    <header>
      <div className={styles.cabecalho}>
          <div className={styles.container}>
            <span onClick={toggleMenuMobile} className={`material-symbols-outlined ${styles.menu}`}>
                menu
            </span>
            
            <Link onClick={ menuMobile ? toggleMenuMobile : '' } to="/">
              <img src="/img/logo.png" alt="Logo da loja de eletrônicos" className={styles.logo__cabecalho}/>
            </Link>

            </div>
            <div className={styles.container}>
            <span className={`material-symbols-outlined ${styles.carrinho__cabecalho}`}>
                shopping_cart
            </span>          
          </div>
        </div>

        <div className={styles.showMenuMobile} style={{display: showMenuMobile}}>
          <MenuMobile toggleMenuMobile={toggleMenuMobile} showMenuMobile={menuMobile} />
        </div>
    </header>
  )
}
