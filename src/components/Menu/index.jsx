import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuMobile from '../MenuMobile';
import styles from './Menu.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useCarrinhoContext } from 'common/context/Carrinho';

export default function Menu() {

  const { quantidadeProdutos } = useCarrinhoContext();

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
          
          <MenuIcon onClick={toggleMenuMobile} fontSize="40px" className={styles.menu}/>
          
          <Link onClick={ menuMobile ? toggleMenuMobile : '' } to="/">
            <img src="/img/logo.png" alt="Logo da loja de eletrônicos" className={styles.logo__cabecalho}/>
          </Link>

          </div>
          <div className={styles.container}>
          <Badge badgeContent={quantidadeProdutos} color="primary">
            <ShoppingCartOutlinedIcon style={{ color: "#ffffff" }} fontSize="large" />
          </Badge>
        </div>
      </div>

        <div className={menuMobile ? styles.showMenuMobile : styles.hideMenuMobile} style={{display: showMenuMobile}}>
          <MenuMobile toggleMenuMobile={toggleMenuMobile} showMenuMobile={menuMobile} />
        </div>
    </header>
  )
}
