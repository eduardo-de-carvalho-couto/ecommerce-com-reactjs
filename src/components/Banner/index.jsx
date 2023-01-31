import React from 'react'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div class="banner">
        <img src="./img/banner.png" className={styles.imagemBanner} alt="" />
    </div>
  )
}
